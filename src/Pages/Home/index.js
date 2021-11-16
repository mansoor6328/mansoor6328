import {
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import I18n from 'i18n-js';
import React, { Component } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import axiosInstance from '../../utils/axiosInstance';

export default class Home extends Component {
  state = {
    cart: [],
    products: [],
    error: null,
  };

  async componentDidMount() {
    try {
      const res = await Promise.all([
        axiosInstance.get('660/products'), // 1sec
        axiosInstance.get('660/cart'), // 1sec
      ]); // 1 sec
      this.setState({
        products: res[0],
        cart: res[1],
      });
    } catch (error) {
      this.setState({
        error,
      });
    }
  }

  addToCart = async (item) => {
    try {
      const res = await axiosInstance.post('660/cart', {
        ...item,
        quantity: 1,
      });
      this.setState(({ cart }) => ({
        cart: [...cart, res],
      }));
    } catch (error) {
      this.setState({ error });
    }
  };

  updateCart = async (item) => {
    try {
      const res = await axiosInstance.put(`660/cart/${item.id}`, item);
      this.setState(({ cart }) => {
        const index = cart.findIndex((x) => x.id === item.id);
        return {
          cart: [...cart.slice(0, index), res, ...cart.slice(index + 1)],
        };
      });
    } catch (error) {
      this.setState({ error });
    }
  };

  deleteItem = async (item) => {
    try {
      await axiosInstance.delete(`660/cart/${item.id}`);
      this.setState(({ cart }) => {
        const index = cart.findIndex((x) => x.id === item.id);
        return {
          cart: [...cart.slice(0, index), ...cart.slice(index + 1)],
        };
      });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { products, error } = this.state;

    if (error) {
      return <h1>{error.message}</h1>;
    }

    return (
      <div>
        {products.map((item) => {
          const cartItem = this.state.cart.find((x) => x.id === item.id);
          return (
            <Card sx={{ display: 'flex', margin: 2, minHeight: 200 }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={item.image}
                alt={item.title}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Box
                    component="div"
                    overflow="hidden"
                    whiteSpace="pre-line"
                    textOverflow="ellipsis"
                    height={30}
                  >
                    <Typography component="div" variant="h5">
                      {item.title}
                    </Typography>
                  </Box>
                  <Box
                    component="div"
                    overflow="hidden"
                    whiteSpace="pre-line"
                    textOverflow="ellipsis"
                    height={60}
                  >
                    <Typography
                      sx={{
                        overflow: 'hidden',
                      }}
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {item.description}
                    </Typography>
                  </Box>
                  <Rating
                    name="read-only"
                    value={item.rating.rate}
                    precision={0.5}
                    readOnly
                  />
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    component="div"
                  >
                    {I18n.toCurrency(item.price)}
                  </Typography>
                  {cartItem && (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {cartItem.quantity <= 1 ? (
                        <IconButton
                          size="large"
                          edge="start"
                          color="inherit"
                          aria-label="menu"
                          sx={{ mr: 2 }}
                          onClick={() => this.deleteItem(cartItem)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      ) : (
                        <IconButton
                          size="large"
                          edge="start"
                          color="inherit"
                          aria-label="menu"
                          sx={{ mr: 2 }}
                          onClick={() =>
                            this.updateCart({
                              ...cartItem,
                              quantity: cartItem.quantity - 1,
                            })
                          }
                        >
                          <RemoveIcon />
                        </IconButton>
                      )}
                      <Typography component="div" variant="h5">
                        {cartItem.quantity}
                      </Typography>
                      <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ ml: 2 }}
                        onClick={() =>
                          this.updateCart({
                            ...cartItem,
                            quantity: cartItem.quantity + 1,
                          })
                        }
                      >
                        <AddIcon />
                      </IconButton>
                    </Box>
                  )}
                  {!cartItem && (
                    <Button
                      variant="contained"
                      onClick={() => this.addToCart(item)}
                    >
                      Add To Cart
                    </Button>
                  )}
                </CardContent>
              </Box>
            </Card>
          );
        })}
      </div>
    );
  }
}

/* eslint-disable react/prop-types */
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
import { connect } from 'react-redux';
import axiosInstance from '../../utils/axiosInstance';
import { CartContext } from '../../context/cartContext';

class Home extends Component {
  state = {
    products: [],
    error: null,
    status: [],
  };

  async componentDidMount() {
    try {
      const res = await axiosInstance.get('660/products'); // 1 sec
      this.setState({
        products: res,
      });
    } catch (error) {
      this.setState({
        error,
      });
    }
  }

  render() {
    console.log('localeData', this.props.localeData);
    console.log('themeData', this.props.themeData);
    const { products, error, status } = this.state;

    if (error) {
      return <h1>{error.message}</h1>;
    }

    return (
      <CartContext.Consumer>
        {({
          cart, addToCart, updateCart, deleteItem,
        }) => (
          <div>
            <button
              type="button"
              onClick={() => {
                this.props.changeTheme('dark');
              }}
            >
              ChangeTheme

            </button>
            <button
              type="button"
              onClick={() => {
                this.props.changeLocale('fr');
              }}
            >
              ChangeLocale

            </button>
            {products.map((item) => {
              const cartItem = cart.find((x) => x.id === item.id);
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
                            sx={{ mr: 2, backgroundColor: 'gold' }}
                            onClick={() => deleteItem(cartItem)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        ) : (
                          <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2, backgroundColor: 'gold' }}
                            onClick={() => updateCart({
                              ...cartItem,
                              quantity: cartItem.quantity - 1,
                            })}
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
                          sx={{ ml: 2, backgroundColor: 'gold' }}
                          onClick={() => updateCart({
                            ...cartItem,
                            quantity: cartItem.quantity + 1,
                          })}
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>
                      )}
                      {!cartItem && (
                      <Button
                        disabled={status.some(
                          (x) => x.id === item.id && x.status === 'Loading',
                        )}
                        variant="contained"
                        onClick={() => addToCart(item)}
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
        )}
      </CartContext.Consumer>
    );
  }
}

const mapStateToProps = (store) => ({
  localeData: store.locale,
  themeData: store.theme,
});

const mapDispatchToProps = (dispatch) => ({
  changeTheme: (payload) => dispatch({ type: 'change_theme', payload }),
  changeLocale: (payload) => dispatch({ type: 'change_locale', payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import {
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
import axiosInstance from '../../utils/axiosInstance';

export default class Home extends Component {
  state = {
    products: [],
    error: null,
  };

  async componentDidMount() {
    try {
      const products = await axiosInstance.get('660/products');
      this.setState({
        products,
      });
    } catch (error) {
      this.setState({
        error,
      });
    }
  }

  render() {
    const { products, error } = this.state;

    if (error) {
      return <h1>{error.message}</h1>;
    }

    return (
      <div>
        {products.map((item) => (
          <Card sx={{ display: 'flex', margin: 2, height: 200 }}>
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
                <Typography variant="h6" color="text.secondary" component="div">
                  {I18n.toCurrency(item.price)}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        ))}
      </div>
    );
  }
}

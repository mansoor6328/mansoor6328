import React, { Component } from 'react';

import {
  Card,
  CardMedia,
  CardContent,
  Rating,
  Typography,
} from '@mui/material';
import I18n from 'i18n-js';
import { Box } from '@mui/system';
import { CartContext } from '../../context/cartContext';

// eslint-disable-next-line react/prefer-stateless-function
export default class cartItems extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {({ cart }) => cart.map((item) => (
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
                <Typography
                  sx={{
                    overflow: 'hidden',
                  }}
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {item.price}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        ))}
      </CartContext.Consumer>
    );
  }
}

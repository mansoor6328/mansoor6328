/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './headerStyle.css';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from '@mui/system';
import {
  AppBar, Badge, IconButton, Toolbar, Typography,
} from '@mui/material';
import MenuIcon from '../../assets/icons/menu.svg';
import { CartContext } from '../../context/cartContext';

// eslint-disable-next-line react/prop-types
const Header = ({ routes }) => {
  const token = sessionStorage.getItem('token');
  return (
    <Box style={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            style={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            AmazeKart
          </Typography>
          {routes
            .map((x) => (
              <li key={x.path}>
                <Link to={x.path}>{x.title}</Link>
              </li>
            ))}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            style={{ mr: 2 }}
          >
            {token && (
              <>
                {' '}
                <Link to="/Logout"><LogoutIcon /></Link>

              </>
            )}

          </IconButton>
          <CartContext.Consumer>

            {({ cart }) => (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                style={{ mr: 2 }}
              >
                <Badge badgeContent={cart.reduce((prev, cur) => prev + cur.quantity, 0)} color="error">

                  <Link to="/cartitems"><ShoppingCartIcon /></Link>

                </Badge>
              </IconButton>
            )}
          </CartContext.Consumer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;

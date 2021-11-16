import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import './headerStyle.css';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = ({ routes }) => (
  <AppBar position="static">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Products
      </Typography>
      {routes
        .filter((x) => x.isAuthRequired)
        .map((x) => (
          <Button key={x.name} color="inherit">
            {x.title}
          </Button>
        ))}
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <Badge badgeContent={0} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <LogoutIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Header;

/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './Pages/NotFound';
import routes from './routes';
import CartProvider from './context/cartContext';
import Logout from './Pages/Logout';
import cartItems from './Pages/CartItems';

class App extends Component {
  state = {
    isAuthenticated: false,
  };

  componentDidMount() {
    const token = sessionStorage.getItem('token');
    this.setState({
      isAuthenticated: !!token,
    });
  }

  render() {
    const { isAuthenticated } = this.state;
    return (
      <BrowserRouter>
        <CartProvider>
          <div>
            <Header
              isAuthenticated={isAuthenticated}
              routes={
              isAuthenticated
                ? routes.filter((x) => x.isAuthRequired)
                : routes.filter((x) => !x.isAuthRequired)
            }
            />
            <main>
              <Switch>
                {!isAuthenticated
              && routes.filter((x) => !x.isAuthRequired).map(({ ...rest }) => (
                <Route key={rest.path} {...rest} />
              ))}

                {isAuthenticated
              && routes.filter((x) => x.isAuthRequired).map(({ ...rest }) => (
                <Route key={rest.path} {...rest} />
              ))}
                <Route path="/cartitems" component={cartItems} />
                <Route path="/Logout" component={Logout} />
                <Route component={NotFound} />

              </Switch>
            </main>
          </div>
        </CartProvider>
      </BrowserRouter>
    );
  }
}

export default App;

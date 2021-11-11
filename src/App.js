import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';

import NotFound from './Pages/NotFound';
import routes from './routes';

class App extends Component {
  state = {
    isAuthRequired: false,
  };

  componentDidMount() {
    const token = sessionStorage.getItem('token');
    this.setState({
      isAuthRequired: !!token,
    });
  }

  render() {
    const { isAuthRequired } = this.state;
    return (
      <>
        <CssBaseline />
        <BrowserRouter>
          {isAuthRequired && <Header routes={routes} />}
          <main>
            <Switch>
              {!isAuthRequired &&
                routes
                  .filter((x) => !x.isAuthRequired)
                  .map(({ ...rest }) => <Route key={rest.path} {...rest} />)}
              {isAuthRequired &&
                routes
                  .filter((x) => x.isAuthRequired)
                  .map(({ ...rest }) => <Route key={rest.path} {...rest} />)}
              <Route component={NotFound} />
            </Switch>
          </main>
        </BrowserRouter>
      </>
    );
  }
}

export default App;

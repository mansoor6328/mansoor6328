import React from 'react';
import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';

import NotFound from './Pages/NotFound';
import routes from './routes';

const App = () => (
  <>
    <CssBaseline />
    <BrowserRouter>
      <Header routes={routes} />
      <main>
        <Switch>
          {routes.map(({ component: Component, ...rest }) => (
            <Route
              key={rest.path}
              {...rest}
              render={(props) => {
                const isAuthenticateed = true;
                if (isAuthenticateed || !rest.isAuthRequired) {
                  return <Component {...props} />;
                }
                return (
                  <Redirect
                    to={{
                      pathname: '/login',
                    }}
                  />
                );
              }}
            />
          ))}
          <Route component={NotFound} />
        </Switch>
      </main>
    </BrowserRouter>
  </>
);

export default App;

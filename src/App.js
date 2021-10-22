import React from 'react';
import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom';

import NotFound from './Pages/NotFound';
import routes from './routes';

const App = () => (
  <BrowserRouter>
    <header>
      <nav>
        <ul>
          {routes.map((x) => (
            <li key={x.path}>
              <Link to={x.path}>{x.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
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
              } else {
                return (
                  <Redirect
                    to={{
                      pathname: '/login',
                    }}
                  />
                );
              }
            }}
          />
        ))}
        <Route component={NotFound} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;

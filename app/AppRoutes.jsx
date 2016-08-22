import React from 'react';
import {IndexRedirect, Route} from 'react-router';
import {
  Activity,
  App,
  Dashboard,
  Login,
  Prediction,
  Settings,
  Stock,
  Visualization,
} from './containers';
import AuthService from './services/AuthService';

const auth = new AuthService(__AUTH0_CLIENT_ID__, __AUTH0_DOMAIN__); // eslint-disable-line no-undef

// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: {nextPathname: nextState.location.pathname},
    });
  }
};

const AppRoutes = (
  <Route path="/" component={App} auth={auth}>
    <IndexRedirect to="/dashboard" />
    <Route path="login" component={Login} />
    <Route onEnter={requireAuth} path="dashboard" component={Dashboard} />
    <Route onEnter={requireAuth} path="activity" component={Activity} />
    <Route onEnter={requireAuth} ath="stock" component={Stock} />
    <Route onEnter={requireAuth} path="visualization" component={Visualization} />
    <Route onEnter={requireAuth} path="prediction" component={Prediction} />
    <Route onEnter={requireAuth} path="settings" component={Settings} />
  </Route>
);

export default AppRoutes;

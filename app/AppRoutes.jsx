import React from 'react';
import {IndexRedirect, Route} from 'react-router';
import {
  Activity,
  App,
  Dashboard,
  Prediction,
  Settings,
  Stock,
  Visualization,
} from './containers';

const AppRoutes = (
  <Route path="/" component={App}>
    <IndexRedirect to="/dashboard" />
    <Route path="dashboard" component={Dashboard} />
    <Route path="activity" component={Activity} />
    <Route path="stock" component={Stock} />
    <Route path="visualization" component={Visualization} />
    <Route path="prediction" component={Prediction} />
    <Route path="settings" component={Settings} />
  </Route>
);

export default AppRoutes;

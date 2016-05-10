import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
  Activity,
  App,
  Home,
  Prediction,
  Settings,
  Stock,
  Visualization,
} from './containers';

const AppRoutes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="activity" component={Activity} />
    <Route path="stock" component={Stock} />
    <Route path="visualization" component={Visualization} />
    <Route path="prediction" component={Prediction} />
    <Route path="settings" component={Settings} />
  </Route>
);

export default AppRoutes;

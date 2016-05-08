import React from 'react';
import {IndexRoute, Route} from 'react-router';
import App from './containers/App.jsx';
import Home from './containers/Home.jsx';

const AppRoutes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
  </Route>
);

export default AppRoutes;

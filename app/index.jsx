import 'normalize.css/normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router} from 'react-router';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppRoutes from './AppRoutes.jsx';
import configureStore from './store/configureStore';

injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {AppRoutes}
    </Router>
  </Provider>
, document.getElementById('app'));

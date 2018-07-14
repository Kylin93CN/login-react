import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import { composeWithDevTools } from 'redux-devtools-extension';

import {BrowserRouter as Router} from 'react-router-dom';

import jwtDecode from 'jwt-decode';

import NavigationBar from './components/NavigationBar';
import FlshMessageList from './components/flash/FlashMessageList';
import registerServiceWorker from './registerServiceWorker';

import routers from './routers';
import rootReducer from './reducers';

import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrenUser } from './actions/loginAction';


const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, logger)
  )
);

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrenUser(jwtDecode(localStorage.jwtToken)));
}

ReactDOM.render(
  <Provider store={ store }>
    <Router router={ routers }>
      <div>
        <NavigationBar/>
        <FlshMessageList/>
        {routers}
      </div>
    </Router>
  </Provider>, 
document.getElementById('root'));
registerServiceWorker();

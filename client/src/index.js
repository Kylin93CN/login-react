import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './components/NavigationBar';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter as Router} from 'react-router-dom';
import routers from './routers';
import rootReducer from './reducers';
import { Provider} from 'react-redux';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, logger)
  )
);

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <div>
        <NavigationBar/>
        {routers}
      </div>
    </Router>
  </Provider>, 
document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
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
    <App />
  </Provider>, 
document.getElementById('root'));
registerServiceWorker();

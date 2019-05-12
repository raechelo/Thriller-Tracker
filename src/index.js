import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './scss/index.scss';
import App from './containers/App/App';
import { rootReducer } from './reducers';
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
const router = (
  <Provider store={store} >
    <BrowserRouter> 
      <App/>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';
import { saveState, loadState } from './utils/localStorage';
import './scss/index.scss';
import App from './containers/App/App';

const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState, 
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState(store.getState());
});

const router = (
  <Provider store={store} >
    <BrowserRouter> 
      <App/>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'));

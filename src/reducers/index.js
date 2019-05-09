import { moviesReducer } from './moviesReducer';
import { userReducer } from './userReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer
});
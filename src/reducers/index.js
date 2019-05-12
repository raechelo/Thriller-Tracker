import { movies, hasErrored, isLoading } from './moviesReducer';
import { user } from './userReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  movies,
  user,
  isLoading,
  error: hasErrored
});
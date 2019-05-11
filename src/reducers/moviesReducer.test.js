import { moviesReducer } from './moviesReducer';
import * as actions from '../actions';

describe('moviesReducer', () => {

  it('should return the inital state', () => {
    const expected = [];

    const result = moviesReducer(undefined, []);
    expect(result).toEqual(expected);
  });

  it('should return the state with all movies', () => {
    const expected = [{title: 'X-Men'}]
    const result = moviesReducer(undefined, actions.setMovies([{title: 'X-Men'}]));

    expect(result).toEqual(expected);
  });

  it('should return state with a toggled favorite attribute on a single movie', () => {
    const id = 1;
    const expected = [ { id, favorited: false } ];
    
    const result = moviesReducer([ { id, favorited: true } ], actions.toggleFavoriteMovie(id));
    expect(result).toEqual(expected);
  });
});
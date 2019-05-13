import { movies } from './moviesReducer';
import * as actions from '../actions';

describe('movies', () => {

  it('should return the inital state', () => {
    const expected = [];

    const result = movies(undefined, []);
    expect(result).toEqual(expected);
  });

  it('should return the state with all movies', () => {
    const expected = [{title: 'X-Men'}]
    const result = movies(undefined, actions.setMovies([{title: 'X-Men'}]));

    expect(result).toEqual(expected);
  });

  it('should return state with a toggled favorite attribute on a single movie', () => {
    const id = 1;
    const expected = [ { id, favorited: false } ];
    
    const result = movies([ { id, favorited: true } ], actions.toggleFavoriteMovie(id));
    expect(result).toEqual(expected);
  });
});
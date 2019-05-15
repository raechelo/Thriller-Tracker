import { movies } from './moviesReducer';
import { isLoading } from './moviesReducer';
import { hasErrored } from './moviesReducer';
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

describe('isLoading', () => {

  it('should return the initial state', () => {
    const expected = false;
    const result = isLoading(undefined, false)

    expect(result).toEqual(expected);
  });

  it('should return a truthy value in case of loading', () => {
    const expected = true;
    const result = isLoading(undefined, actions.isLoading(true));

    expect(result).toEqual(expected);
  });
});

describe('hasErrored', () => {

  it('shoud return a default state', () => {
    const expected = '';
    const result = hasErrored(undefined, '');

    expect(result).toEqual(expected);
  });

  it('should return an error message', () => {
    const expected = 'Error!';
    const result = hasErrored(undefined, actions.hasErrored('Error!'))

    expect(result).toEqual(expected);
  });
});
import * as actions from './index';

describe('actions', () => {

  it('should return movies with a type of SET_MOVIES', () => {
    const movies = [{title: 'Lion King'}];
    const expected = { type: 'SET_MOVIES', movies: [{title:'Lion King'}] };

    const result = actions.setMovies(movies);
    expect(result).toEqual(expected);
  });

  it('should return a movie with a toggled favorite value', () => {
    const id = 1;
    const expected = { type: 'TOGGLE_FAVORITE_MOVIE', id: 1 };

    const result = actions.toggleFavoriteMovie(id);
    expect(result).toEqual(expected);
  });

  it('should return a user with a type of USER_LOGIN', () => {
    const user = { name: 'Zeus', email: 'godofolympus@gmail.com', password: 'GoodBoye' }
    const expected = { type: 'USER_LOGIN', user: {name: 'Zeus', email: 'godofolympus@gmail.com', password: 'GoodBoye' } };

    const result = actions.logInUser(user);
    expect(result).toEqual(expected);
  });

  it('should return a user with a type of USER_LOGOUT', () => {
    const expected = { type: 'USER_LOGOUT' };

    const result = actions.logOutUser();
    expect(result).toEqual(expected);
  });

  it('should return an error message with a type of HAS_ERRORED', () => {
    const expected = { type: 'HAS_ERRORED', message: 'Error!' };

    const result = actions.hasErrored('Error!');
    expect(result).toEqual(expected);
  });

  it('should return a boolean representing if it is loading with a type of IS_LOADING', () => {
    const expected = { type: 'IS_LOADING', isLoading: true };

    const result = actions.isLoading(true);
    expect(result).toEqual(expected);
  });
});
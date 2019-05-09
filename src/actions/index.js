
export const setMovies = (movies) => ({
  type: 'SET_MOVIES',
  movies
});

export const toggleFavoriteMovie = (id) => ({
  type: 'FAVORITE_MOVIE',
  id
});

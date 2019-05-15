export const setMovies = (movies) => ({
  type: 'SET_MOVIES',
  movies
});

export const toggleFavoriteMovie = (id) => ({
  type: 'TOGGLE_FAVORITE_MOVIE',
  id
});

export const clearFavoriteMovies = () => ({
  type: 'CLEAR_FAVORITE_MOVIES'
})

export const logInUser = (user) => ({
  type: 'USER_LOGIN',
  user
})

export const logOutUser = () => ({
  type: 'USER_LOGOUT'
})

export const hasErrored = (message) => ({
  type: 'HAS_ERRORED',
  message
})

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})
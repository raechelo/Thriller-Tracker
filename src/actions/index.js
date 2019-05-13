export const setMovies = (movies) => ({
  type: 'SET_MOVIES',
  movies
});

export const toggleFavoriteMovie = (id) => ({
  type: 'FAVORITE_MOVIE',
  id
});

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
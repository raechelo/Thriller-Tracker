export const movies = (state = [], action) => {
  switch(action.type) {
    case 'SET_MOVIES':
      return action.movies;
    case 'TOGGLE_FAVORITE_MOVIE':
      return state.map(movie => {
        return movie.id === action.id ? {...movie, favorited: !movie.favorited} : movie;
      });
    case 'CLEAR_FAVORITE_MOVIES':
      return state.map(movie => {
        return {...movie, favorited: false};
      });
    case 'SET_FAVORITES_ON_LOG_IN':
      const moviesWithUpdatedFavorites = state.map(movie => {
        action.favorites.forEach(favorite => {
          if (favorite.movie_id === movie.id) {
            movie.favorited = true;
          }
        });
        return movie;
      });
      return moviesWithUpdatedFavorites; 
    default:
     return state;
  }
}

export const isLoading = (state = false, action) => {
  switch(action.type) {
    case 'IS_LOADING':
      return action.isLoading;
    default:
     return state;
  }
}

export const hasErrored = (state = '', action) => {
  switch(action.type) {
    case 'HAS_ERRORED':
      return action.message;
    default:
     return state;
  }
}
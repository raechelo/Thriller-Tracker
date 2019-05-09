export const moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_MOVIES':
      return action.movies;
    case 'FAVORITE_MOVIE':
      return state.map(movie => {
        return movie.id === action.id ? {...movie, favorited: !movie.favorited} : movie;
      })
    default:
     return state;
  }
}
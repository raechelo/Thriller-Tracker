export const cleanMovies = (movies) => {
  return movies.map(movie => {
    const {id, title, vote_average, overview, release_date } = movie;
    return ({
      id,
      title,
      posterImage: "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + movie.poster_path,
      release_date,
      vote_average,
      overview,
      favorited: false
    })
  })
}
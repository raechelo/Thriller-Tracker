const cleanMovies = (movies) => {
  return movies.map(movie => {
    return ({
      id: movie.id,
      title: movie.title,
      synopsis: movie.overview,
      rating: movie.vote_average,
      releaseDate: movie.release_date,
      posterImage: movie.poster_path
    })
  })
}

export default cleanMovies;
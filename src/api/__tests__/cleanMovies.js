import { cleanMovies } from '../cleanMovies';

describe('cleanMovies', () => {

  let movies = [{ title: 'Black Panther', id: 2, overview: 'Amazing movie, watch it', vote_average: 8.1, release_date: '2-8-16', poster_path: 'somelink', stars: ['Chadwick Boseman', 'Michael B. Jordan'] }]

  it('should return a clean version of a movie object', () => {
    const expected = [{ title: 'Black Panther', favorited: false, id: 2, synopsis: 'Amazing movie, watch it', rating: 8.1, releaseDate: '2-8-16', posterImage: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2somelink' }];

    const result = cleanMovies(movies);

    expect(result).toEqual(expected);
  })
})
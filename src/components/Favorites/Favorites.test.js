import React from 'react';
import { shallow } from 'enzyme';
import { Favorites } from './Favorites';

describe('Favorites', () => {

  let wrapper;
  let mockMovies = [
    {title: 'Isle of Dogs', favorite: true},
    {title: 'Forest Gump', favorite: false}
  ]

  beforeEach(() => {
    wrapper = shallow( 
      <Favorites 
        movies={mockMovies} 
      /> 
    )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
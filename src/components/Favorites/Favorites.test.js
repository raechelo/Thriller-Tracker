import React from 'react';
import { shallow } from 'enzyme';
import { Favorites } from './Favorites';

const mockMovies = [
  {title: 'Forest Gump'},
  {title: 'Star Wars'}
]

describe('Favorites', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow( 
      <Favorites 
        movies={mockMovies} 
      /> 
    )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';

describe('Home', () => {

  let wrapper;

  let movies = [{title: 'Back to the Future'}, {title: 'Braveheart'}]

  beforeEach(() => {
    wrapper = shallow( <Home movies={movies} /> )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
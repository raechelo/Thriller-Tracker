import React from 'react';
import { shallow, mount } from 'enzyme';
import { Card } from './Card';

describe('Card', () => {

  let wrapper;

  let movie = { title: 'IT', rating: 7.9, synopsis: 'The Losers Club attemps to defeat a shapeshifting monster' }

  beforeEach(() => {
    wrapper = shallow( <Card m={movie} /> )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
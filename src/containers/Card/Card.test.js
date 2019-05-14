import React from 'react';
import { shallow, mount } from 'enzyme';
import { Card } from './Card';

describe('Card', () => {

  let wrapper;
  let movie = { title: 'IT', rating: 7.9, synopsis: 'The Losers Club attemps to defeat a shapeshifting monster', favorite: false};
  let user = {}
  let mockHandleFavoriteClick = jest.fn()

  beforeEach(() => {
    wrapper = shallow( <Card m={movie} u={user} /> )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it.skip('should tell a user to log in if they try to favorite without signing in', () => {
    let result = mockHandleFavoriteClick();

    expect(result).toEqual('Login or Signup to favorite movies');
  });

  it('should allow a user to favorite an item if they are logged in', () => {

  });
});
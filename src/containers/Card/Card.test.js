import React from 'react';
import { shallow, mount } from 'enzyme';
import { Card } from './Card';

describe('Card', () => {

  let wrapper;
  let movie = { title: 'IT', rating: 7.9, synopsis: 'The Losers Club attemps to defeat a shapeshifting monster', favorite: false};
  let user = {id: ''}
  let mockHandleFavoriteClick
  let mockAddFavorite = jest.fn()
  let mockDeleteFavorite = jest.fn()

  beforeEach(() => {
    wrapper = shallow( <Card m={movie} deleteFavorite={mockDeleteFavorite} addFavorite={mockAddFavorite} u={user} /> )
    mockHandleFavoriteClick = jest.fn();
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should tell a user to log in if they try to favorite without signing in', () => {

    let result = wrapper.instance().mockHandleFavoriteClick();

    expect(result).toEqual('Login or Signup to favorite movies');
  });

  it('should allow a user to favorite an item if they are logged in', () => {
    user = {name: 'Bobo'}
    wrapper.instance().mockHandleFavoriteClick();
    expect(mockAddFavorite).toHaveBeenCalled();
  });
});
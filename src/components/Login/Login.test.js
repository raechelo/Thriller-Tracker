import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';

describe('Login', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <Login /> )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  });
});
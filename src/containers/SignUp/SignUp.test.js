import React from 'react';
import { shallow } from 'enzyme';
import { SignUp } from './SignUp';

describe('SignUp', () => {

  let wrapper;
  let mockCreateUser = jest.fn();

  beforeEach(() => {
    wrapper = shallow( <SignUp /> )
  })

  it('should match the snapshot with all the data passed in', () => {

    expect(wrapper).toMatchSnapshot()
  });

  it('should handle change', () => {
    wrapper.setState({ email: '', password: ''})
    const e = { target: { name: 'email', value: 'godofolympus@gmail.com' } }

    wrapper.instance().handleChange(e);
    expect(wrapper.state('email')).toEqual('godofolympus@gmail.com')
  });

  it('should handle submit', () => {
    const e = { target: { className: 'user-form' },preventDefault: () => {} }
    const expected = {name: 'Aragorn', email: 'rightfulking@gondor.com', password: 'arwen'};

    wrapper.instance().handleSubmit(e)
    expect(mockCreateUser).toHaveBeenCalledWith(expected);
  });
});
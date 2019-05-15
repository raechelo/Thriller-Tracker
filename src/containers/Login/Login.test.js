import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';

describe('Login', () => {

  let wrapper;
  let mockUserLogin = jest.fn()

  beforeEach(() => {
    wrapper = shallow( <Login /> )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle submit', () => {
    const e = { target: { className: 'user-form' },preventDefault: () => {} }
    const expected = {email: 'godofolympus@gmail.com', password: 'GoodBoye', status: 200}

    wrapper.instance().handleSubmit(e);

    expect(mockUserLogin).toHaveBeenCalledWith(...expected);
  });

  it('should handle change', () => {
    wrapper.setState({ email: '', password: ''})
    const e = { target: { name: 'email', value: 'godofolympus@gmail.com' } }

    wrapper.instance().handleChange(e);
    expect(wrapper.state('email')).toEqual('godofolympus@gmail.com')
  });
});
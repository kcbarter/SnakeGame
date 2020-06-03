import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

test('renders Game component', () => {
  const wrapper = shallow(<App/>);
  
  expect(wrapper.find('Game')).toHaveLength(1);
});

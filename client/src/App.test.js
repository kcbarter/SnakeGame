import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

test('renders components', () => {
  const wrapper = shallow(<App/>);
  
  expect(wrapper.find('Game')).toHaveLength(1);
  expect(wrapper.find('HighScores')).toHaveLength(1);
});

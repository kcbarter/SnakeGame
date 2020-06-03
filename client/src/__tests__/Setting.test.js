import React from 'react';
import {shallow} from 'enzyme';
import Setting from '../components/Setting';

test('renders speed settings', () => {
    const wrapper = shallow(<Setting/>);
    
    //Div containing speed settings with adjuster and label
    expect(wrapper.find('.Game_settings')).toHaveLength(1);
    expect(wrapper.find('#speed-slider')).toHaveLength(1);
    expect(wrapper.find('#speed-label')).toHaveLength(1);
});
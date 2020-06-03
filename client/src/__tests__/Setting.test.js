import React from 'react';
import {shallow} from 'enzyme';
import Setting from '../components/Setting';
import Settings from '../components/Setting';

describe('renders all setting', () => {
    test('renders speed settings', () => {
        const wrapper = shallow(<Setting/>);
        
        //Div containing speed settings with adjuster and label
        expect(wrapper.find('.Game_settings')).toHaveLength(1);
        expect(wrapper.find('#speed-slider')).toHaveLength(1);
        expect(wrapper.find('#speed-label')).toHaveLength(1);
    });

    test('renders open border settings', () => {
        const wrapper = shallow(<Setting/>);
        
        //Div containing speed settings with adjuster and label
        expect(wrapper.find('.Border_setting')).toHaveLength(1);
        expect(wrapper.find('#open-border')).toHaveLength(1);
        expect(wrapper.find('#open-border-label')).toHaveLength(1);
    });
});

describe('changing settings call appropriate prop functions', () => {
    test('changing speed calls setSpeed method from props', () => {
        const mockedFunction = jest.fn();
        const wrapper = shallow(<Settings setSpeed = {mockedFunction}/>);

        const speed = wrapper.find('#speed-slider');
        speed.simulate('changeCommitted', {target: {value: 0.5}});

        expect(mockedFunction).toHaveBeenCalledTimes(1);
    });

    test('clicking open border checkbox calls setBorder method from props', () => {
        const mockedFunction = jest.fn();
        const wrapper = shallow(<Settings setBorder = {mockedFunction}/>);

        const border = wrapper.find('#open-border');
        border.simulate('change', {target: {value: 1}});

        expect(mockedFunction).toHaveBeenCalledTimes(1);
    });
});

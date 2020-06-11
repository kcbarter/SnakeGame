import React from 'react';
import {shallow, mount} from 'enzyme';
import Gameboard from '../components/Gameboard';

describe('renders appropriate part of Gameboard at any point', ()=> {
    test('renders canvas, cover and button without labels upon intial render', ()=> {
        const wrapper = mount(<Gameboard/>);

        expect(wrapper.find('#canvasBoard')).toHaveLength(1);
        expect(wrapper.find('#cover')).toHaveLength(1);
        expect(wrapper.find('button')).toHaveLength(1);
        expect(wrapper.find('label')).toHaveLength(0);
    });

    test('renders canvas without labels, cover and button when game starts', ()=> {
        const mockFuntion = jest.fn();
        const wrapper = mount(<Gameboard update={mockFuntion}/>);

        wrapper.instance().startGame();
        wrapper.update();

        expect(wrapper.find('#canvasBoard')).toHaveLength(1);
        expect(wrapper.find('#cover')).toHaveLength(0);
        expect(wrapper.find('button')).toHaveLength(0);
        expect(wrapper.find('label')).toHaveLength(0);
    });

    test('renders all elements after game ends', ()=> {
        const mockFuntion = jest.fn();
        const wrapper = mount(<Gameboard update={mockFuntion}/>);

        wrapper.instance().startGame();
        wrapper.instance().endGame();
        wrapper.update();

        expect(wrapper.find('#canvasBoard')).toHaveLength(1);
        expect(wrapper.find('#cover')).toHaveLength(1);
        expect(wrapper.find('button')).toHaveLength(1);
        expect(wrapper.find('label')).toHaveLength(2);
    });
});
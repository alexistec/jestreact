import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Counter from './Counter';

configure({
    adapter:new Adapter()
})


describe('Testing component <Counter/>',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<Counter/>)
    })

    test('Validate to match snapshot',()=>{
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    test('Validate botton operation',()=>{
        wrapper.find('button').first().simulate('click')
        expect(wrapper.find('h1').text()).toBe('0')
    })
})
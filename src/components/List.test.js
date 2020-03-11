import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import List from './List';

configure({
    adapter:new Adapter()
})


describe('Component test <List />>',()=>{
    test('Test node',()=>{
        const fruits = [
            {name:'Fresa',id:1},
            {name:'Manzana',id:2},
            {name:'Pera',id:3},
        ]

        const wrapper = shallow(<List title='Frutas' list={fruits}/>);
        //validate if there is a node
        expect(wrapper.find('h1').exists()).toBe(true);
        //validate if we have a class
        expect(wrapper.find('h1').hasClass('big')).toBe(true);
        //Validate number of items children
        expect(wrapper.find('ul').children().length).toBe(3)

        //Sample test props
        wrapper.setProps({
            title:'Super fruits'
        })

        expect(wrapper.find('.big').text()).toBe('Super fruits')

    })
})

import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App, {Title} from './App'

configure({
  adapter: new Adapter()
})


describe('Applicaction component test',()=>{
  test('Component rendering test',()=>{
    const wrapper =  shallow(<App/>)
    //console.log(wrapper.find('[num=3]').html())
    //console.log(wrapper.find('[type="checkbox"]').html())
    //console.log(wrapper.find(Title).html())
  })
})
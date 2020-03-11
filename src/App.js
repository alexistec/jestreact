import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from '../src/components/Counter';


export const Title = () => (
  <h1>Introduccion a Unit testing</h1>
)

const App = ()=> {
  return(
    <section id='main'>
      <Counter/>
    </section>
  )
}

export default App;

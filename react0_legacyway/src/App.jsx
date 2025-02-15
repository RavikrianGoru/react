import React from 'react';
import './App.css';
import Apple from './e1-components/Apple';
import Fruite from './e1-components/Fruite';
import Vegtables from './e2-css-styling/Vegtables';
import FruitesDoLike from './e3-jsx/FruitesDoLike';
import Box from './e4-elements/Box';
import ParentComp from './e5-props/ParentComp';



function App() {
  return (
    <section>
      <Apple />
      <Fruite />
      <Vegtables />
      <FruitesDoLike />
      <Box />


      <ParentComp />


    </section>
  )
}

export default App

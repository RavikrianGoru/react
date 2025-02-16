import React from 'react';
import './App.css';
import Apple from './e1-components/Apple';
import Fruite from './e1-components/Fruite';
import Vegtables from './e2-css-styling/Vegtables';
import FruitesDoLike from './e3-jsx/FruitesDoLike';
import Box from './e4-elements/Box';
import ParentComp from './e5-props/ParentComp';
import CarParent from './e6-props-destructure/CarParent';
import StateMgmt from './e7-statemanagement/StateMgmt';
import StateMgmt1 from './e7-statemanagement/StateMgmt1';
import StateMgmt2 from './e7-statemanagement/StateMgmt2';
import P1 from './e8-ternary-operator/P1';
import ClickEvent from './e9-events/ClickEvent';



function App() {
  return (
    <section>
      <Apple />
      <Fruite />
      <Vegtables />
      <FruitesDoLike />
      <Box />


      <ParentComp />

      <CarParent />

      <StateMgmt />
      <StateMgmt1 />
      <StateMgmt2 />

      <P1 />

      <ClickEvent />


    </section>
  )
}

export default App

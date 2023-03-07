import './App.scss';
import React, { useState } from 'react'
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Calculator from './components/Calculator/Calculator.jsx'
import ReelSelector from './components/ReelSelector/ReelSelector.jsx'

import equipmentTypes from './static/equipment'
import equipmentLevel from './static/level'


const App = () => {
  const [gear, setGear] = useState({})

  return (
    <div className="container">
      <Header/>
      <Navbar/>
      <div className="hero">hero</div>
      <div className="equipment-selector">
        <ReelSelector className="equipment-select" types={equipmentTypes} gear={gear} setGear={setGear}/>
        <ReelSelector className="item-level-select" types={equipmentLevel} gear={gear} setGear={setGear}/>
      </div>
      <div className="main">
        <h2 className="gear calculator"> Gear Calculator</h2>
      <Calculator />
      </div>
      <div className="similar-item">display-similar-items</div>
      <div className="footer">footer</div>
    </div>
  );
}

export default App;

import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import ReelSelector from '../../components/ReelSelector/ReelSelector'
import Calculator from '../../components/Calculator/Calculator'

import './Home.scss'
import equipmentTypes from '../../static/equipment.js'
import equipmentLevel from '../../static/level.js'


const Home = () => {
  const [gear, setGear] = useState({
    type: null,
    level: 0,
  })
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
      <Calculator gear={gear}/>
      </div>
      <div className="similar-item">display-similar-items</div>
      <div className="footer">footer</div>
    </div>
  )
}

export default Home
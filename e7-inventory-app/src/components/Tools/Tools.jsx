import React, { useState } from 'react'

import ReelSelector from './ReelSelector/ReelSelector'
import Calculator from './Calculator/Calculator'
import equipmentTypes from '../../static/equipment.js'
import equipmentLevel from '../../static/level.js'

import './tools.scss'


const Tools = () => {
  const [gear, setGear] = useState({
    type: null,
    level: 0,
  })
  return (
    <section id="tools" className="section__tools">
      <div className="container tools__container">
        <div className="tools__equipment-selector">
          <ReelSelector className="equipment-select" types={equipmentTypes} gear={gear} setGear={setGear}/>
          <ReelSelector className="item-level-select" types={equipmentLevel} gear={gear} setGear={setGear}/>
        </div>
        <div className="tools__calculator">
          <Calculator gear={gear}/>
        </div>
      </div>
    </section>
  )
}

export default Tools
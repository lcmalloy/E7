import React, {useState} from 'react'
import Calculator from '../../components/Calculator/Calculator'
import ReelSelector from '../../components/ReelSelector/ReelSelector'
import equipmentTypes from '../../static/equipment.js'
import equipmentLevel from '../../static/level.js'
import Navbar from '../../components/Navbar/Navbar'


import './Tools.scss'

const Tools = () => {
  const [gear, setGear] = useState({
    type: null,
    level: 0,
  })
  return (
    <>
      <Navbar/>
      <div className="main-tools">
        <div className="card-tools">
          <div className="equipment-selector">
            <ReelSelector className="equipment-select" types={equipmentTypes} gear={gear} setGear={setGear}/>
            <ReelSelector className="item-level-select" types={equipmentLevel} gear={gear} setGear={setGear}/>
          </div>
          <Calculator gear={gear}/>
        </div>
      </div>
    </>
  )
}

export default Tools
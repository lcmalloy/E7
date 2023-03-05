import React from 'react'


import './ReelSelector.scss'
import weapon from '../../assets/weapon.svg'
import helmet from '../../assets/helmet.svg'
import armor from '../../assets/armor.svg'
import necklace from '../../assets/necklace.svg'
import earring from '../../assets/earring.svg'
import boots from '../../assets/boots.svg'

const equipmentTypes = [
  {
    name: 'weapon',
    img: weapon,
  },
  {
    name: 'helmet',
    img: helmet,
  },
  {
    name: 'armor',
    img: armor,
  },
  {
    name: 'necklace',
    img: necklace,
  },
  {
    name: 'earring',
    img: earring,
  },
  {
    name: 'boots',
    img: boots,
  },
]

const ReelSelector = () => {

  const types = equipmentTypes.map((equipmentType) => (
    <div className="type-container">
      <img src={equipmentType.img} alt={equipmentType.name}/>
    </div>
  ))
  return (
    <div className="inventory-select-main">
      {types}
    </div>
  )
}

export default ReelSelector
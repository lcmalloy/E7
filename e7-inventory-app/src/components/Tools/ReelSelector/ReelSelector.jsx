import React, {useState} from 'react'
import './ReelSelector.scss'

let selectEquipment = {
  weapon: false,
  helmet: false,
  armor: false,
  necklace: false,
  earring: false,
  boots: false,
}

let selectLevel = {
  0: false,
  3: false,
  6: false,
  9: false,
  12: false,
  15: false,
}

const ReelSelector = (props) => {

  const equipmentSelect = (type) => {
      props.setGear({
      ...props.gear,
      type: type.name,
    })

    selectEquipment = {
      weapon: false,
      helmet: false,
      armor: false,
      necklace: false,
      earring: false,
      boots: false,
    }
    selectEquipment[type.name] = !selectEquipment[type.name];
  }

  const levelSelect = (type) => {
    props.setGear({
      ...props.gear,
      level: type.number,
    })
    selectLevel = {
      0: false,
      3: false,
      6: false,
      9: false,
      12: false,
      15: false,
    }
    selectLevel[type.number] = !selectLevel[type.number];
  }

  const types = props.types.map((type) => (
    <div key={`name-${type.name}`}>
        {type.containsImage && (
        <button type="button"  className={`type-container ${selectEquipment[type.name] ? 'selected' : ''}`} onClick={() => equipmentSelect(type)}>
          <img src={type.img} alt={type.name}/>
        </button>
      )}
        {!type.containsImage && (
          <button type="button" className={`type-container ${selectLevel[type.number] ? 'selected' : ''}`} onClick={() => levelSelect(type)}>
            <div className={`level-${type.number}`} > { type.number } </div>
          </button>
      )}
    </div>
  ))
  return (
    <div className="reel-main">
      { props.types[0].containsImage && (
        <h2> Please Select Equipment Type:</h2>
      )}
      { !props.types[0].containsImage && (
        <h2>Please Select Item Level:</h2>
      )}
      <div className="inventory__select">
        <div className="inventory-select-main">
          {types}
        </div>
      </div>
    </div>
  )
}

export default ReelSelector
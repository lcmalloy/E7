import React, { useState } from 'react'
import './ReelSelector.scss'

const ReelSelector = (props) => {
  const [gear, setGear] = useState({})

  const types = props.types.map((type) => (
    <div key={`name-${type.name}`}>
      { type.containsImage && (
        <button type="button" className="type-container" onClick={() => setGear({
          type: type.name,
        })}>
          <img src={type.img} alt={type.name}/>
        </button>
      )}
        {!type.containsImage && (
          <button type="button" className="type-container" tabindex="-1" onClick={() => setGear({
            level: type.number,
          })}>
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
      <div className="inventory-select-main">
        {types}
      </div>
    </div>
  )
}

export default ReelSelector
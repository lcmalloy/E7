import React from 'react'
import './ReelSelector.scss'

const ReelSelector = (props) => {

  const types = props.types.map((type) => (
    <div className="type-container" key={type.name}>
      { type.containsImage && (
        <img src={type.img} alt={type.name}/>
    )}
      {!type.containsImage && (
      <div className={`level-${type.number}`} > { type.number } </div>
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
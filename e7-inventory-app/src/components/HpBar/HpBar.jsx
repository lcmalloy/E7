import React from 'react'
import './HpBar.scss'

const HpBar = (props) => {

  return (
      <div className="hp-bar" style={{ "--percent": props.calcActive ? props.score : 100}}>
      </div>
  )
}

export default HpBar




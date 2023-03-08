import React from 'react'
import './HpBar.scss'

const HpBar = (props) => {

  return (
      <div className="hp-bar" style={{ "--percent": props.score === 0 ? 100 : props.score}}>
      </div>
  )
}

export default HpBar




import React, {useState} from 'react'

import VerticalNavbar from '../../components/Navbar/Vertical_Navbar'
import Calculator from '../../components/Tools/Tools'


import './Tools.scss'

const Tools = () => {
  return (
    <>
      <VerticalNavbar/>
      <div className="section__profile">
        <div className="container tool__container">
          <div className="tool__calculator">
            <Calculator />
          </div>
        </div>
      </div>
    </>
  )
}

export default Tools
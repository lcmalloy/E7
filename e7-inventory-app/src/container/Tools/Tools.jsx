import React, {useState} from 'react'

import VerticalNavbar from '../../components/Navbar/Vertical_Navbar'


import './Tools.scss'

const Tools = () => {
  const [gear, setGear] = useState({
    type: null,
    level: 0,
  })
  return (
    <>
      <VerticalNavbar/>
    </>
  )
}

export default Tools
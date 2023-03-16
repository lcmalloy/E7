import React, { useState } from 'react'

import { IoHomeOutline } from 'react-icons/io5'
import { AiOutlineInfoCircle, AiOutlineCalculator } from 'react-icons/ai'

import './Navbar.scss'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav className="nav">
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><IoHomeOutline/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineInfoCircle/></a>
      <a href="#tools" onClick={() => setActiveNav('#tools')} className={activeNav === '#tools' ? 'active' : ''}><AiOutlineCalculator/></a>

    </nav>
  )
}

export default Navbar
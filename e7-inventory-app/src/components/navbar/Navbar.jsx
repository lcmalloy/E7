import React from 'react'
import './Navbar.scss'
import { IoHome } from 'react-icons/io5'
import { BsCalculator } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineInventory2 } from 'react-icons/md'
import {RiLoginCircleLine} from 'react-icons/ri'

import logo from '../../assets/logo-small.png'

const Navbar = () => {

  return (
    <div className="nav">
      <div className="vertical-nav-container">
        <img src={logo} alt="logo"/>
        <div className="nav-links">
          <div className="nav-links-container">
            <div className="circle-nav">
              <IoHome />
            </div>
            Home
          </div>
          <div className="nav-links-container">
            <div className="circle-nav">
              <BsCalculator />
            </div>
            Calculator
          </div>
          <div className="nav-links-container">
          <div className="circle-nav">
            <MdOutlineInventory2 />
          </div>
            Inventory
          </div>
          <div className="nav-links-container">
          <div className="circle-nav">
            <CgProfile />
          </div>
            Profile
          </div>
          <div className="nav-links-container">
            <RiLoginCircleLine />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
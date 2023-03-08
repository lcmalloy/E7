import React from 'react'
import './Navbar.scss'
import { IoHome } from 'react-icons/io5'
import { BsCalculator } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineInventory2 } from 'react-icons/md'
import {RiLoginCircleLine} from 'react-icons/ri'
import {Link} from 'react-router-dom'

import logo from '../../assets/logo-small.png'

const Navbar = () => {
   return (
    <div className="nav">
      <div className="vertical-nav-container">
        <img src={logo} alt="logo"/>
        <div className="nav-links">
          <div className="nav-links-container">
            <div className="circle-nav">
              <Link to="/">
                <IoHome />
              </Link>
            </div>
            Home
          </div>
          <div className="nav-links-container">
            <div className="circle-nav">
              <Link to="/tools">
                <BsCalculator />
              </Link>
            </div>
            Tools
          </div>
          <div className="nav-links-container">
          <div className="circle-nav">
            <Link to="/inventory">
              <MdOutlineInventory2 />
            </Link>
          </div>
            Inventory
          </div>
          <div className="nav-links-container">
          <div className="circle-nav">
            <Link to="/profile">
              <CgProfile />
            </Link>
          </div>
            Profile
          </div>
          <div className="nav-links-container">
            <Link to="/login">
              <RiLoginCircleLine />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
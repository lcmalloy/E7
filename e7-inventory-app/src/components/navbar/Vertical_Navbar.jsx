import React, { useState, useEffect } from 'react'
import './vertical_nav.scss'
import { IoHome } from 'react-icons/io5'
import { BsCalculator } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineInventory2 } from 'react-icons/md'
import {RiLoginCircleLine} from 'react-icons/ri'
import {GrLogout} from 'react-icons/gr'
import {Link} from 'react-router-dom'

import { useAuth } from '../Contexts/AuthContext.js'

const getHeight = () => window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

const Vertical_Navbar = () => {
  const [activeNav, setActiveNav] = useState('/')
  const { logout, currentUser } = useAuth()
  const [ height, setHeight ] = useState(getHeight())

  useEffect(() => {
    let timeoutId = null;
    const resizeListener = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setHeight(getHeight()), 100);
    }
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

   return (
     <nav className="vertical__nav">
      <Link to="/" onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}><IoHome/></Link>
      <Link onClick={() => setActiveNav('/tools')} to="/tools" className={activeNav === '/tools' ? 'active' : ''}><BsCalculator/></Link>
      <Link to="/inventory" onClick={() => setActiveNav('/inventory')} className={activeNav === '/inventory' ? 'active' : ''}><MdOutlineInventory2/></Link>
      <Link to="/profile" onClick={() => setActiveNav('/profile')} className={activeNav === '/profile' ? 'active' : ''}><CgProfile/></Link>
      <div className="vertical__nav-login" style={{"--window-height" : `${height}px`}}>
        { !currentUser?.email && (
          <Link to="/login">
            <RiLoginCircleLine />
          </Link>
        )}
        { currentUser?.email && (
          <GrLogout onClick={logout}/>
        )}
      </div>
    </nav>
  )
}

export default Vertical_Navbar


/*
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
          <div className="nav-links-container" style={{"--window-height" : `${height}px`}}>
            { !currentUser?.email && (
              <Link to="/login">
                <RiLoginCircleLine />
              </Link>
            )}
            { currentUser?.email && (
              <GrLogout onClick={logout}/>
            )}
          </div>
        </div>
      </div>
*/
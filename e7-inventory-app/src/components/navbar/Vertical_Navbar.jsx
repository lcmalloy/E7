import React, { useState, useEffect } from 'react'
import { IoHome } from 'react-icons/io5'
import { BsCalculator } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineInventory2 } from 'react-icons/md'
import {RiLoginCircleLine} from 'react-icons/ri'
import {GrLogout} from 'react-icons/gr'
import {Link} from 'react-router-dom'

import './vertical_navbar.scss'

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
      <Link to="/E7/" onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}><IoHome/></Link>
      <Link onClick={() => setActiveNav('/tools')} to="/E7/tools" className={activeNav === '/tools' ? 'active' : ''}><BsCalculator/></Link>
      <Link to="/E7/inventory" onClick={() => setActiveNav('/inventory')} className={activeNav === '/inventory' ? 'active' : ''}><MdOutlineInventory2/></Link>
      <Link to="/E7/profile" onClick={() => setActiveNav('/profile')} className={activeNav === '/profile' ? 'active' : ''}><CgProfile/></Link>
      <div className="vertical__nav-login" style={{"--window-height" : `${height}px`}}>
        { !currentUser?.email && (
          <Link to="/E7/login">
            <RiLoginCircleLine />
          </Link>
        )}
        { currentUser?.email && (
          <GrLogout stroke="white" fill="white" onClick={logout}/>
        )}
      </div>
    </nav>
  )
}

export default Vertical_Navbar
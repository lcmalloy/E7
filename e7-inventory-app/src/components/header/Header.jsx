import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { HiX, HiMenu } from 'react-icons/hi'
import { motion } from 'framer-motion'

import './Header.scss'
import logo from '../../assets/logo-large.png'
import banner from '../../assets/banner2.png'
import { useAuth } from '../Contexts/AuthContext.js'

const paths = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Tools',
    path: '/tools',
  },
  {
    name: 'Profile',
    path: '/profile',
  },
  {
    name: 'Inventory',
    path: '/inventory',
  },
]


const Header = () => {
  const [toggle, setToggle] = useState(false)
  const { isSignedIn } = useAuth();

  const path = paths.map((link) => (
    <ul key={link.name}>
      <Link to={link.path} onClick={() => setToggle(false)}>{link.name}
      </Link>
    </ul>
  ))

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
      <div className="horizontal-banner-main">
        <div className="horizontal-banner-container">
          <img src={banner} alt='banner' />
        </div>
      </div>
      <div className="nav-menu">
        <div className="nav-menu-display">
        <HiMenu onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0]}}
              transition={{ duration: 0.85, ease: 'easeOut'}}
              >
                <HiX onClick={() => setToggle(false)} />
                {path}
                { isSignedIn && (
                  <ul>
                    <Link to='/login' onClick={() => setToggle(false)}>
                      Log In
                    </Link>
                  </ul>
                )}
              </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
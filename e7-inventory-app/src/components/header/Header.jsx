import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { HiX, HiMenu } from 'react-icons/hi'
import { motion } from 'framer-motion'
import logo from '../../assets/logo-large.png'
import banner from '../../assets/banner2.png'
import './Header.scss'

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
  {
    name: 'Log In',
    path: '/login',
  },
]

const Header = () => {
  const [toggle, setToggle] = useState(false)

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
              </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
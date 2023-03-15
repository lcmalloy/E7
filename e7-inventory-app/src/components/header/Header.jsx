import React, {useState} from 'react'

import './Header.scss'
import e7_image from '../../assets/e7_image1.jpg'
import { useAuth } from '../Contexts/AuthContext.js'



const Header = () => {
  const { isSignedIn } = useAuth();

  return (
    <header id="#">
      <div className="container header__container">
        <h5>Welcome to</h5>
        <h1>Epic 7 Inventory Management / Gear Calculator</h1>
        <h5 className="text-light">Designed by Lawrence Malloy</h5>
        <div className="header__image">
          <img src={e7_image} alt="" />
        </div>
        <a href="#tools" className="scroll__down">Scroll to Calculator</a>
      </div>
    </header>
  )
}

export default Header


/*
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

*/
import React from 'react'

import './footer.scss'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">E7 Management</a>
      <ul className="permalinks">
        <li><a href="#">Top</a></li>
        <li><a href="#about"> About</a></li>
        <li><a href="#tools"> Calculator</a></li>
      </ul>
      <div className="footer__copyright">
        <small>&copy; Lawrence Malloy</small>
      </div>
    </footer>
  )
}

export default Footer
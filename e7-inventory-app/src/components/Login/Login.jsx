import React, { useRef } from 'react'
import {Link} from 'react-router-dom'

import './Login.scss'

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div className="background-login-main">
      <div className="card">
        <h2>Log In</h2>
        <form>
          <div>
            <label htmlFor="email">Email </label>
            <input
              type="text"
              required
              id="email"
              ref={emailRef}
            />
          </div>
          <div>
            <label htmlFor="password">Password </label>
            <input
              type="password"
              required
              id="password"
              ref={passwordRef}
            />
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
      <div className="additional">
        <p>
          Need an Account? <Link to="/signup">Sign Up</Link>
        </p>
        <p>
          <Link to="/">Home</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
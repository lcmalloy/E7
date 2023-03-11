import React, { useRef, useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../Contexts/AuthContext.js'

import banner from '../../assets/epic7_banner.jpg'
import './Login.scss'

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [ error, setError ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/")
    } catch {
      setError('Failed to login')
    }
    setLoading(false)
  }

  return (
    <div className="background-login-main">
      <div className="card-auth">
        <div className="banner-img">
          <img src={banner} alt="e7 banner"/>
        </div>
        <h2>Log In</h2>
        <p>{error}</p>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" disabled={loading}>Log In</button>
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
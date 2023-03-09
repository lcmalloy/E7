import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Contexts/AuthContext.js'

// import './SignUp.scss'

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [ error, setError ] = useState('');
  const [ loading, setLoading ] = useState(false);

   const handleSubmit = async(e) => {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError('Failer to create an account')
    }
    setLoading(false)
  }

  return (
    <div className="background-login-main">
      <div className="card">
        <h2>Create Account</h2>
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
          <div>
            <label htmlFor="confirm-password">Confirm Password </label>
            <input
              type="password"
              required
              id="confirm-password"
              ref={passwordConfirmRef}
            />
          </div>
          <button type="submit" disabled={loading}>Create Account</button>
        </form>
      </div>
      <div className="additional">
        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
        <p>
          <Link to="/">Home</Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
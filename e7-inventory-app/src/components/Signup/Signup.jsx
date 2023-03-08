import React, {useRef} from 'react'
import { Link } from 'react-router-dom'

// import './SignUp.scss'

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  return (
    <div className="background-login-main">
      <div className="card">
        <h2>Create Account</h2>
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
          <div>
            <label htmlFor="confirm-password">Confirm Password </label>
            <input
              type="password"
              required
              id="confirm-password"
              ref={confirmPasswordRef}
            />
          </div>
          <button type="submit">Create Account</button>
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
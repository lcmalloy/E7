import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../../firebase'

const AuthContext = React.createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [ currentUser, setCurrentUser ] = useState()
  const [ isSignedIn, setIsSignedIn ] = useState(false)

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  const login = (email, password) => {
    setIsSignedIn(true)
    return auth.signInWithEmailAndPassword(email, password)
  }

  const logout = () => {
    setIsSignedIn(false);
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])

  const value = {
    currentUser,
    isSignedIn,
    signup,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
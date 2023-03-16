import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../components/Contexts/AuthContext'

const PrivateRoutes = () => {
  const { currentUser } = useAuth()

  return (
    currentUser ? <Outlet/> : <Navigate to='/E7/login'/>
  )
}

export default PrivateRoutes
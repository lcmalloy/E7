import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../components/Contexts/AuthContext'

const PrivateRoutes = () => {
  const { currentUser } = useAuth()

  return (
    currentUser?.email ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes
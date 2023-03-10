import React from 'react'

import './Profile.scss'
import { useAuth } from '../../components/Contexts/AuthContext.js'

const Profile = () => {
  const { currentUser } = useAuth();
  return (
    <div className="profile-main">
      <div className="profile-card">
          <div>
            email: {currentUser.email}
          </div>
      </div>
    </div>
  )
}

export default Profile
import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import { useAuth } from '../../components/Contexts/AuthContext.js'
import profilePhoto from '../../assets/stene.jpg'
import './Profile.scss'



const Profile = () => {
  const [ error, setError ] = useState('')
  const { currentUser, logout } = useAuth()
  const [ profile, setProfile ] = useState('')
  const navigate = useNavigate()

  const handleLogOut = async(e) => {
    e.preventDefault()
    setError('')

    try {
      await logout()
      navigate('/')
    } catch {
      setError('Failed to log out')
    }
  }

  useEffect(() => {
    axios.get('http://localhost:3001/profile')
    .then((response) => {
      setProfile(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  })

  const username = currentUser?.email.split('@')
  return (
    <div className="main-profile">
      {console.log(currentUser.uid)}
      <div className="profile-card">
        { error && (
          <p>{error}</p>
        )}
          <div className="details-card">
            <p> Current User: {username[0]} </p>
            <p> { profile }</p>
            <p> Account Created: 01/01/2023 </p>
            <p>Favorite Character: Specter Tenebria</p>
            <p>Highest Gear Score: 92% </p>
          </div>
          <div className="profilePhoto">
            <img src={profilePhoto} alt="favorite Character"/>
          </div>
      </div>
      <div className="additionals">
        <Link to="/">Return to Main</Link>
        <Link to="/" onClick={handleLogOut}>Log Out</Link>
      </div>
    </div>
  )
}

export default Profile
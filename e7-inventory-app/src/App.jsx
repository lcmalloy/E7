import './App.scss';
import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './container/Home/Home'
import Tools from './container/Tools/Tools'
import Profile from './container/Profile/Profile'
import Inventory from './container/Inventory/Inventory'
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'


const App = () => {

  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default App;

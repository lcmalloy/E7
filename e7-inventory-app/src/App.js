import './App.scss';
import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './container/Home/Home.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import Login from './components/Login/Login.jsx'


const App = () => {

  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default App;

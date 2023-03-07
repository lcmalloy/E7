import './App.scss';
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './container/Home/Home.jsx'
import Signup from './components/Signup/Signup.jsx'


const App = () => {

  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
  );
}

export default App;

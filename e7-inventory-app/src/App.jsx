import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './container/Home/Home'
import Tools from './container/Tools/Tools'
import Profile from './container/Profile/Profile'
import Inventory from './container/Inventory/Inventory'
import SignUp from './components/Signup/Signup'
import Login from './components/Login/Login'
import PrivateRoutes from './wrapper/PrivateRoutes.js'


const App = () => {

  return (
      <Routes>
        <Route exact path="/E7/" element={<Home />} />
        <Route path="/E7/tools" element={<Tools />} />
        <Route exact path="/" element={<PrivateRoutes/>}>
          <Route path="/E7/profile" element={<Profile />} />
        </Route>
        <Route exact path="/" element={<PrivateRoutes/>}>
          <Route path="/E7/inventory" element={<Inventory />} />
        </Route>
        <Route exact path="/E7/signup" element={<SignUp />} />
        <Route exact path="/E7/login" element={<Login />} />
      </Routes>
  );
}

export default App;

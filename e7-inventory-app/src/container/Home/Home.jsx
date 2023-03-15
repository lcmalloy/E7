import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import VerticalNavbar from '../../components/Navbar/Vertical_Navbar'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Tools from '../../components/Tools/Tools'
import Carousel from '../../components/Carousel/Carousel'
import equipmentTypes from '../../static/equipment.js'
import equipmentLevel from '../../static/level.js'
import './Home.scss'


const Home = () => {
  const [gear, setGear] = useState({
    type: null,
    level: 0,
  })
  return (
    <>
      <Header/>
      <VerticalNavbar />
      <Navbar />
      <Hero />
      <Tools />

    </>
  )
}

export default Home
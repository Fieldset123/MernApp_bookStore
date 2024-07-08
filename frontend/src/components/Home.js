import React from 'react'
import Navbar from "../components/Navbar.js"
import Banner from "../components/Banner.js"
import Footer from "../components/Footer.js"
import Freebook from "../components/Freebook.js"
const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Freebook/>
      <Footer/>
    </>
  )
}

export default Home
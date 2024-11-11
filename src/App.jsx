import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './Experience'
import Mycontact from './components/Mycontact'
import Services from './components/Services'
import About from './components/About'
import Footer from './components/Footer'
import Project from './components/Project'
import Connect from './components/Connect'
import ButtonGradient from'./assets/assets/svg/ButtonGradient'
function App() {
  return (
    <div className='custom-cursor '>
      <div className='pt-[4.75rem] lg:pt-[5.24rem] overflow-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      {/* <Services/> */}
      <Connect/>
      <Footer/>
      </div>
      <ButtonGradient/>
    </div>
  )
}

export default App
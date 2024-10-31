import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './Experience'
import Mycontact from './components/Mycontact'
import Services from './components/Services'
import About from './components/About'
import Footer from './components/Footer'
import Project from './components/Project'

function App() {
  return (
    <div className=' '>
      <Navbar/>
      {/* <Hero/> */}
      <About/>
      <Project/>
      <Services/>
       {/* <Experience/> */}
       {/* <Mycontact/> */}
      <Footer/>

    </div>
  )
}

export default App
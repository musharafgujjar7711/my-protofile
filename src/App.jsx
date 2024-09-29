import React from 'react'
import Navbar from './components/Navbar'
import MyInfo from './components/MyInfo'
import About from './components/About'
import Experience from './Experience'
import Project from './components/Project'
import Mycontact from './components/Mycontact'

function App() {
  return (
    <div className='bg-gray-600 text-white'>
      <Navbar/>
      <MyInfo/>
      <hr />
      <About/>
      <hr />
      <Experience/>
      <hr />
      <Project/>
      <hr />
      <Mycontact/>
    </div>
  )
}

export default App
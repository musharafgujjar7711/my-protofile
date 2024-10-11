import React from 'react'
import Navbar from './components/Navbar'
import MyInfo from './components/MyInfo'
import About from './components/About'
import Experience from './Experience'
import Mycontact from './components/Mycontact'

function App() {
  return (
    <div className='bg-gray-700 '>
      <Navbar/>
      <MyInfo/>
      <About/>
      <Experience/>
      <Mycontact/> 
    </div>
  )
}

export default App
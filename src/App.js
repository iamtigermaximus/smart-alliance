import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Home from './components/home/Home'
import SignUp from './components/signup/SignUp'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/about' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

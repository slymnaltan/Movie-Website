import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Netflix from './components/Netflix'
import Disneyplus from './components/Disneyplus'
import Amazonprime from './components/Amazonprime'
import ContentDetail from './components/ContentDetail'
import About from './components/About'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/netflix' exact element={<Netflix/>} />
        <Route path='/disney' exact element={<Disneyplus/>} />
        <Route path='/amazon' exact element={<Amazonprime/>} />
        <Route path='/content/:id' element={<ContentDetail/>}/>
        <Route path='/about' exact element={<About/>} />
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App

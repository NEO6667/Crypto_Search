import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer'
import Blog from './pages/Blog/Blog'
import Feature from './pages/Feature/Feature'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
        <Route path='/features' element={<Feature/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App

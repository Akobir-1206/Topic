import { useState } from 'react'
import './App.css'
import Navigate from './Pages/Navigate/Navigate'
import Header from './Pages/Header/Header'
import About from './Pages/About/About'
import aboutcard from './Cards/About-card/Aboutcard'
function App() {


  return (
    <>
      <Navigate/>
      <Header/>
      <About/>
      <aboutcard/>
      
    </>
  )
}

export default App

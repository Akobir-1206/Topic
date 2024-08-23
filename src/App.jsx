import { useState } from 'react'
import './App.css'
import Navigate from './Pages/Navigate/Navigate'
import Header from './Pages/Header/Header'
import About from './Pages/About/About'
import Result from './Pages/Result/Result'
function App() {


  return (
    <>
      <Navigate/>
      <Header/>
      <About/>
      <Result/>
      
    </>
  )
}

export default App

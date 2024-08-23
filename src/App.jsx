import { useState } from 'react'
import './App.css'
import Navigate from './Pages/Navigate/Navigate'
import Header from './Pages/Header/Header'
import About from './Pages/About/About'
import Result from './Pages/Result/Result'
import Grant from './Pages/Grant/Grant'
function App() {


  return (
    <>
      <Navigate/>
      <Header/>
      <About/>
      <Result/>
      <Grant/>
      
    </>
  )
}

export default App

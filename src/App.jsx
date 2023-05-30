import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Nav from './Components/Nav'
// import Articles from './Components/Articles'

function App() {

  return (
    <BrowserRouter>
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>

    </>
    </BrowserRouter>
  )
}

export default App

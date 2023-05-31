// import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Nav from './Components/Nav'
import Topics from './Components/Topics'
// import TopicsCategory from './Components/TopicsCategory'


function App() {

  return (
    <BrowserRouter>
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/topics" element={<Topics />}></Route>
      {/* <Route path="/articles/:topic" element={<TopicsCategory />}></Route> */}
    </Routes>

    </>
    </BrowserRouter>
  )
}

export default App

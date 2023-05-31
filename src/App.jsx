// import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Nav from './Components/Nav'
import Topics from './Components/Topics'
import SingleArticle from './Components/SingleArticle'



function App() {

  return (
    <BrowserRouter>
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/topics" element={<Topics />}></Route>
      <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
    </Routes>

    </>
    </BrowserRouter>
  )
}

export default App

// import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Nav from './Components/Nav'
import Topics from './Components/Topics'
import SingleArticle from './Components/SingleArticle'
import ArticleComments from './Components/ArticleComments'
import Users from './Components/Users'
import { useState } from 'react'
import { UserContext } from './Components/userContext'

function App() {

  const [currentUser, setCurrentUser] = useState({
    username: "jessjelly",
    name: "Jess Jelly",
    avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141"
  })

  return (
    <BrowserRouter>
    <UserContext.Provider value={{currentUser, setCurrentUser}} >
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/topics" element={<Topics />}></Route>
      <Route path="/users" element={<Users />}></Route>
      <Route path="/articles/:article_id" element={<SingleArticle currentUser={currentUser}/>}></Route>
      <Route path="/articles/:article_id/comments" element={<ArticleComments />}></Route>
      <Route path="/articles/topics/:topic" element={<Home />}></Route>
    </Routes>
    </>
    </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App

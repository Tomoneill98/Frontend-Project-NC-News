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
    username: "Guest001!",
    name: "Guest Smith",
    avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6HMjzF3Okb-ccSpNxPZQSaSLXXEPlBijwQ&usqp=CAU"
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
      <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
      <Route path="/articles/:article_id/comments" element={<ArticleComments />}></Route>
    </Routes>
    </>
    </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App

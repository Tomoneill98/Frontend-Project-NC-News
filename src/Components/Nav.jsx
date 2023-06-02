import { Link } from "react-router-dom"
import Logo from '../assets/logo.png'
import { UserContext } from "./userContext"
import { useContext } from "react"

function Nav () {
  const {currentUser} = useContext(UserContext)
  return (
    <nav className="nav">
        <Link to="/"> <img src={Logo} className="nav-logo"style={{ width: 200, height: 150 }}/></Link>
        <Link className="nav-list-item"to="/topics">Topics</Link>
        <Link to="/users"><img src={currentUser.avatar_url} className="nav-user-icon"alt={currentUser.username} style={{ width: 100, height: 100 }}/></Link>
        <p className="nav-user"> Logged in as {currentUser.username}</p>
    </nav>
  )
}
 
export default Nav

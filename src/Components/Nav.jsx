import { Link } from "react-router-dom"
import Logo from '../assets/logo.png'
import { UserContext } from "./userContext"
import { useContext } from "react"

function Nav () {
  const {currentUser} = useContext(UserContext)
  return (
    <nav className="nav">
        <Link to="/"> <img src={Logo} className="nav-logo"style={{ width: 200, height: 150 }}/></Link>
        <Link to="/topics" className="nav-item">Topics</Link>
        <Link to="/users" className="nav-item">Users</Link>
        <img src={currentUser.avatar_url} className="nav-user-icon"alt={currentUser.username} style={{ width: 120, height: 120 }}/>
        <p className="nav-item"> Logged in as {currentUser.username}</p>
    </nav>
  )
}
 
export default Nav

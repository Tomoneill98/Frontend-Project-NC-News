import { Link } from "react-router-dom"
import Logo from '../assets/logo.png'
import { UserContext } from "./userContext"
import { useContext } from "react"

function Nav () {

  const {currentUser} = useContext(UserContext)
  return (
    <nav className="nav">
        <Link to="/"> <img src={Logo} className="nav-logo"/></Link>
        <Link to="/topics">Topics</Link>
        <section className="profile">
				User: <Link to="/users">{currentUser.username}</Link>{' '}
			</section>
        <Link to="/users"><img src={currentUser.avatar_url} className="nav-user-icon"alt={currentUser.username} style={{ width: 80, height: 80 }}/></Link>
         
    </nav>
  )
}
 
export default Nav

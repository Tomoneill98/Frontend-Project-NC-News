import { Link } from "react-router-dom"
import Logo from '../assets/logo.png'
import UserIcon from '../assets/UserIcon.png'

function Nav () {
  return (
    <nav>
        <Link to="/"> <img src={Logo} className="nav-logo"style={{ width: 200, height: 150 }}/></Link>
        <Link to="/topics">Topics</Link>
        <Link to="/users"><img src={UserIcon} className="nav-guest" style={{ width: 50, height: 50 }}/></Link>
    </nav>
  )

}
 
export default Nav

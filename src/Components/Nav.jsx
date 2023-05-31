import { Link } from "react-router-dom"
import Logo from '../assets/logo.png'

function Nav () {
  return (
    <nav>
        <Link to="/"> <img src={Logo} className="nav-logo"style={{ width: 200, height: 150 }}/></Link>
        <Link to="/topics">Topics</Link>
    </nav>
  )

}
 
export default Nav

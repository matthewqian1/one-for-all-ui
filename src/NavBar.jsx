import { Link, useMatch, useResolvedPath } from "react-router-dom"
import img from './images/cart.jpg'

export default function Navbar() {
  return <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
  <div className="cart">
    <button> 
      <img src={img} width={50}></img>
    </button>
  </div>
  <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"/>
      <button type="submit">Submit</button>
    </form>
  </div>

</div>
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Sidebar from "./Sidebar"
import SearchBar from "./SearchBar"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/home" className="site-title">
        One For All
      </Link>
      <SearchBar></SearchBar>
      <ul>
        <CustomLink to="/pricing">Pricing</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </nav>
  )
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
import { Link ,Outlet } from "react-router-dom"
const Layout = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="nav-link">Form</Link>
        <Link to="/disp" className="nav-link">Display</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout

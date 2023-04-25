import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <h1 className="blog-title">My Blog</h1>
      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-Home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-Home">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-Home">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header

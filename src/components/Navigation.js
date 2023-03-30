import { Link, NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav className="nav">
    <Link to="/" className="link">Math Magicians</Link>
    <ul className="nav-item">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : 'link')}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/calculator"
          className={({ isActive }) => (isActive ? 'active' : 'link')}
        >
          Calculator
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/quote"
          className={({ isActive }) => (isActive ? 'active' : 'link')}
        >
          Quote
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;

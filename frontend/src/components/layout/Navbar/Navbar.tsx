import './Navbar.scss';
import { NavLink, useLocation } from 'react-router-dom';

// Placeholders for now
// TODO: Real links
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'something', path: '/something' },
];

const Navbar = () => {
  const location = useLocation();

  const activeIndex = navItems.findIndex(
    ({ path }) => path === location.pathname
  );
  return (
    <nav className="main-nav">
      <div className="main-nav__content">
        {navItems.map(({ label, path }, i) => (
          <NavLink
            key={i}
            to={path}
            end
            className={({ isActive }) =>
              `main-nav__link ${isActive ? 'main-nav__link--active' : ''}`
            }
          >
            {label}
          </NavLink>
        ))}

        <div
          className="main-nav__indicator"
          style={
            {
              '--active-index': Math.max(activeIndex, 0),
            } as React.CSSProperties
          }
        />
      </div>
    </nav>
  );
};

export default Navbar;

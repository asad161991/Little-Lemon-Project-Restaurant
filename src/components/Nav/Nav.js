import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = ({ closeMobileMenu }) => {
  const location = useLocation();

  return (
    <nav>
      <ul className="main-menu">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}  onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMobileMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" className={location.pathname === '/menu' ? 'active' : ''} onClick={closeMobileMenu}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="/booking" className={location.pathname === '/booking' ? 'active' : ''} onClick={closeMobileMenu}>
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/order" className={location.pathname === '/order' ? 'active' : ''} onClick={closeMobileMenu}>
            Order Online
          </Link>
        </li>
        <li>
          <Link to="/login" className={location.pathname === '/login' ? 'active' : ''} onClick={closeMobileMenu}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

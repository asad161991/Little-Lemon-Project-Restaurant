import React, { useState } from 'react';
import logo from '../../assets/Logo.svg';
import hamburger from '../../assets/hamburger.svg';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';

const Header = () => {

  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const closeMobileMenu = () => {
    setMobileMenuVisible(false);
  };

  return (
    <>
       <header id='header'>
        <div className='container'>
          <div className='row'>
            <Link to='/' id='logo'>
              <img className='img-1' src={logo} alt="Little Lemon" />
            </Link>
            <div id='humburger' onClick={toggleMobileMenu}>
              <img src={hamburger} id='mobileMenuBtn' alt="Mobile Menu"/>
            </div>
            <div id="topMenu" className={mobileMenuVisible ? 'show' : 'hide'}>
              <Nav closeMobileMenu={closeMobileMenu} />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
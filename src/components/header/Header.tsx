import React from 'react';
import './Header.scss';
import logo from './images/Digital Spaniel logo01-01.png';

const Header: React.FC = () => {
  var isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header_content">
          <img className="header_logo" src={logo} alt="Digital Spaniel"/>
          
          <button 
            className={`header_menu-toggle ${isMenuOpen ? 'is-active' : ''}`}
            onClick={() => toggleMenu()}
            aria-label="Toggle menu"
          >
            {/* TODO: Fix this button not actually doing anything. */}
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav className={`header_nav ${isMenuOpen ? 'is-open' : ''}`}>
            <ul className="header_nav-list">
              <li className="header_nav-item">
                <a href="/" className="header_nav-link">Services</a>
              </li>
              <li className="header_nav-item">
                <a href="/features" className="header_nav-link">Work</a>
              </li>
              <li className="header_nav-item">
                <a href="/pricing" className="header_nav-link">About</a>
              </li>
              <li className="header_nav-item">
                <a href="/about" className="header_nav-link">Blog</a>
              </li>
              <li className="header_nav-item">
                <a href="/contact" className="header_nav-link">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

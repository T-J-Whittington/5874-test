import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_content">
          <div className="footer_company">
              <h1 className="footer_header-text">We're a brand's<br/>
                <span className="footer_header-text-alt">best friend.</span>
              </h1>
          </div>
          
          <div className="footer_links">
            <div className="footer_links-column">
              <h4 className="footer_column-title">EXPLORE</h4>
              <ul className="footer_menu">
                <li className="footer_menu-item">
                  <p className="footer_menu-link">Services</p>
                </li>
                <li className="footer_menu-item">
                  <p className="footer_menu-link">Work</p>
                </li>
                <li className="footer_menu-item">
                  <p className="footer_menu-link">About</p>
                </li>
                <li className="footer_menu-item">
                  <p className="footer_menu-link">Blog</p>
                </li>
                <li className="footer_menu-item">
                  <p className="footer_menu-link">Careers</p>
                </li>
              </ul>
            </div>
            
            <div className="footer_links-column">
              <h4 className="footer_column-title">SERVICES</h4>
              <ul className="footer_menu">
                <li className="footer_menu-item">
                  <p className="footer_menu-link">Brand</p>
                </li>
                <li className="footer_menu-item">
                  <p className="footer_menu-link">Development</p>
                </li>
                <li className="footer_menu-item">
                  <p className="footer_menu-link">Marketing</p>
                </li>
              </ul>
            </div>
            
            <div className="footer_links-column">
              <h4 className="footer_column-title">QUESTIONS?</h4>
              <ul className="footer_menu">
                <li className="footer_menu-item">
                  <h4 className="footer_header-text-alt">Call Us</h4>
                  <p>0121345678</p>
                </li>
                <li className="footer_menu-item">
                  <h4 className="footer_header-text-alt">Email Us</h4>
                  <p>info@digitalspaniel.co.uk</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer_bottom">
          <div className="footer_copyright">
            &copy; Digital Spaniel {currentYear} All rights reserved.
          </div>
          <div className="footer_bottom footer_social">
            <p href="#" className="footer_social-link" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </p>
            <p href="#" className="footer_social-link" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </p>
            <p href="#" className="footer_social-link" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

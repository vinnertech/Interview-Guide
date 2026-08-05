import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer pt-5 pb-3 border-top" style={{ backgroundColor: 'var(--footer-bg)', borderColor: 'var(--border-color)' }}>
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
            <h5 className="d-flex align-items-center mb-3">
              <Logo size={36} />
              <span className="brand-text ms-2 d-flex flex-column" style={{ fontSize: '1.2rem', lineHeight: 1.1 }}>
                <span className="brand-gradient-text fw-bolder">VinnerTECH</span>
                <span className="fw-light" style={{ color: 'var(--heading-color)', fontSize: '0.85rem' }}>Interview-Guide</span>
              </span>
            </h5>
            <p className="mb-3 pe-lg-5" style={{ color: 'var(--text-color)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Comprehensive enterprise-grade interview preparation materials. We bridge the gap between theoretical knowledge and practical interview expectations.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="https://vinnertech.github.io/" target="_blank" rel="noopener noreferrer" className="text-decoration-none fs-5 hover-primary" style={{ color: 'var(--text-color)' }} aria-label="Live Site">
                <i className="bi bi-globe"></i>
              </a>
              <a href="mailto:vinnertech@gmail.com" className="text-decoration-none fs-5 hover-primary" style={{ color: 'var(--text-color)' }} aria-label="Email Us">
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
            <h6 className="fw-bold text-uppercase mb-3" style={{ color: 'var(--heading-color)', letterSpacing: '1px', fontSize: '0.85rem' }}>Learn</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/react" className="text-decoration-none hover-primary" style={{ color: 'var(--text-color)' }}>React</Link></li>
              <li className="mb-2"><Link to="/angular" className="text-decoration-none hover-primary" style={{ color: 'var(--text-color)' }}>Angular</Link></li>
              <li className="mb-2"><Link to="/dotnet" className="text-decoration-none hover-primary" style={{ color: 'var(--text-color)' }}>.NET</Link></li>
              <li className="mb-2"><Link to="/java" className="text-decoration-none hover-primary" style={{ color: 'var(--text-color)' }}>Java</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
            <h6 className="fw-bold text-uppercase mb-3" style={{ color: 'var(--heading-color)', letterSpacing: '1px', fontSize: '0.85rem' }}>Company</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/about" className="text-decoration-none hover-primary" style={{ color: 'var(--text-color)' }}>About Us</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-decoration-none hover-primary" style={{ color: 'var(--text-color)' }}>Contact</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4">
            <h6 className="fw-bold text-uppercase mb-3" style={{ color: 'var(--heading-color)', letterSpacing: '1px', fontSize: '0.85rem' }}>Legal</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/privacy" className="text-decoration-none hover-primary" style={{ color: 'var(--text-color)' }}>Privacy Policy</Link></li>
              <li className="mb-2"><Link to="/terms" className="text-decoration-none hover-primary" style={{ color: 'var(--text-color)' }}>Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <hr className="my-4" style={{ borderColor: 'var(--border-color)', opacity: 0.2 }} />
        
        <div className="text-center" style={{ color: 'var(--text-color)', fontSize: '0.85rem' }}>
          &copy; {currentYear} VinnerTECH. All rights reserved. <br className="d-sm-none" /> Designed for modern developers.
        </div>
      </div>
    </footer>
  );
}

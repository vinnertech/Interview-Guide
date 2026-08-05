import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';

const navGroups = {
  frontend: [
    { path: '/html', label: 'HTML' },
    { path: '/css', label: 'CSS' },
    { path: '/javascript', label: 'JavaScript' },
    { path: '/typescript', label: 'TypeScript' },
    { path: '/react', label: 'React' },
    { path: '/angular', label: 'Angular' },
    { path: '/bootstrap', label: 'Bootstrap' },
    { path: '/jquery', label: 'jQuery' },
  ],
  backend: [
    { path: '/dotnet', label: '.NET' },
    { path: '/csharp', label: 'C#' },
    { path: '/java', label: 'Java' },
    { path: '/backend', label: 'Java Backend' },
    { path: '/python', label: 'Python' },
    { path: '/nodejs', label: 'Node.js' },
  ],
  database: [
    { path: '/sql', label: 'SQL' },
    { path: '/mongodb', label: 'MongoDB' },
    { path: '/efcore', label: 'EF Core' },
  ]
};

export default function Navbar() {
  const [theme, setTheme] = useState('light');
  const location = useLocation();

  useEffect(() => {
    // Default to light theme for a cleaner TutorialsPoint look
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.documentElement.setAttribute('data-bs-theme', savedTheme);
  }, []);

  useEffect(() => {
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    if (offcanvasElement && window.bootstrap) {
      const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }
  }, [location.pathname]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className={`navbar navbar-expand-lg tp-navbar sticky-top shadow-sm ${theme === 'dark' ? 'navbar-dark' : 'navbar-light'}`} style={{ backgroundColor: 'var(--navbar-bg)' }}>
      <div className="container-fluid px-lg-5 px-3 py-1 flex-nowrap">
        <Link className="navbar-brand d-flex align-items-center me-1" to="/" style={{ minWidth: 0 }}>
          <Logo size={42} />
          <span className="brand-text ms-2 d-flex flex-sm-row flex-column" style={{ fontSize: '1.2rem', lineHeight: 1.1 }}>
            <span className="brand-gradient-text fw-bolder">VinnerTECH</span>
            <span className="fw-light d-none d-sm-inline" style={{ color: 'var(--heading-color)' }}>-Interview-Guide</span>
            <span className="fw-light d-sm-none" style={{ color: 'var(--heading-color)', fontSize: '0.8rem' }}>Interview-Guide</span>
          </span>
        </Link>
        
        <div className="d-flex align-items-center flex-shrink-0">
          <button 
            onClick={toggleTheme} 
            className="btn btn-link text-dark theme-btn-mobile me-2 d-lg-none p-1" 
            title="Toggle Theme"
            style={{ color: 'var(--heading-color)' }}
          >
            <i className={`bi ${theme === 'dark' ? 'bi-sun-fill text-white' : 'bi-moon-fill'}`}></i>
          </button>
          
          <button className="navbar-toggler border-0 p-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <i className={`bi bi-list fs-2 ${theme === 'dark' ? 'text-white' : 'text-dark'}`}></i>
          </button>
        </div>

        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header border-bottom border-secondary border-opacity-10">
            <h5 className="offcanvas-title d-flex align-items-center" id="offcanvasNavbarLabel">
              <Logo size={36} />
              <span className="brand-text ms-2 d-flex flex-column" style={{ fontSize: '1.1rem', lineHeight: 1.1 }}>
                <span className="brand-gradient-text fw-bolder">VinnerTECH</span>
                <span className="fw-light" style={{ color: 'var(--heading-color)', fontSize: '0.8rem' }}>Interview-Guide</span>
              </span>
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>

              {/* Frontend Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Frontend
                </a>
                <ul className="dropdown-menu shadow-sm">
                  {navGroups.frontend.map(link => (
                    <li key={link.path}>
                      <NavLink className="dropdown-item" to={link.path}>{link.label}</NavLink>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Backend Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Backend & Core
                </a>
                <ul className="dropdown-menu shadow-sm">
                  {navGroups.backend.map(link => (
                    <li key={link.path}>
                      <NavLink className="dropdown-item" to={link.path}>{link.label}</NavLink>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Database Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Database & ORM
                </a>
                <ul className="dropdown-menu shadow-sm">
                  {navGroups.database.map(link => (
                    <li key={link.path}>
                      <NavLink className="dropdown-item" to={link.path}>{link.label}</NavLink>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav-item d-none d-lg-block ms-3">
                <button 
                  onClick={toggleTheme} 
                  className="btn btn-outline-secondary rounded theme-btn-desktop" 
                  title="Toggle Theme"
                >
                  <i className={`bi ${theme === 'dark' ? 'bi-sun-fill' : 'bi-moon-fill'}`}></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

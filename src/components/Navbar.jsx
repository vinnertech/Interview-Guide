import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { path: '/dotnet', label: '.NET' },
  { path: '/csharp', label: 'C#' },
  { path: '/efcore', label: 'EF Core' },
  { path: '/java', label: 'Java' },
  { path: '/backend', label: 'Java Backend' },
  { path: '/html', label: 'HTML' },
  { path: '/css', label: 'CSS' },
  { path: '/bootstrap', label: 'Bootstrap' },
  { path: '/javascript', label: 'JS' },
  { path: '/typescript', label: 'TS' },
  { path: '/angular', label: 'Angular' },
  { path: '/react', label: 'React' },
  { path: '/jquery', label: 'jQuery' },
  { path: '/mongodb', label: 'MongoDB' },
  { path: '/nodejs', label: 'Node.js' },
  { path: '/sql', label: 'SQL' },
  { path: '/python', label: 'Python' },
];

export default function Navbar() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow" style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)' }}>
      <div className="container-fluid px-4">
        <Link className="navbar-brand fw-bold text-white" to="/" style={{ fontFamily: "'Outfit', sans-serif" }}>
          <i className="bi bi-mortarboard-fill me-2 text-primary"></i>Interview Portal
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.path}>
                <NavLink 
                  className={({ isActive }) => `nav-link ${isActive ? 'active fw-bold text-primary' : ''}`} 
                  to={link.path}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <button 
                onClick={toggleTheme} 
                className="btn btn-outline-light rounded-circle theme-btn btn-sm" 
                title="Toggle Theme" 
                style={{ position: 'static' }}
              >
                <i className={`bi ${theme === 'dark' ? 'bi-sun-fill' : 'bi-moon-fill'}`}></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

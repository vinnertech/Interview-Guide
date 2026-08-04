import React from 'react';
import { Link } from 'react-router-dom';

export default function TopicCard({ to, icon, color, title, desc, btnClass, delay }) {
  return (
    <div className="col-md-5 col-lg-3 fade-in-up" style={{ animationDelay: `${delay}s` }}>
      <Link to={to} className="text-decoration-none">
        <div className="card h-100 p-4 text-center portal-card rounded-4">
          <i className={`bi ${icon} icon-huge`} style={{ color: color }}></i>
          <h4 className="fw-bold text-white">{title}</h4>
          <p className="text-muted mt-2 fs-6">{desc}</p>
          <span 
            className={`btn rounded-pill mt-auto mx-auto px-4 btn-sm ${btnClass}`} 
            style={btnClass.includes('btn-outline-') && !btnClass.includes('primary') && !btnClass.includes('success') && !btnClass.includes('danger') && !btnClass.includes('warning') && !btnClass.includes('info') ? { borderColor: color, color: color } : {}}
          >
            Start {title}
          </span>
        </div>
      </Link>
    </div>
  );
}

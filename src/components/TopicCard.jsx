import React from 'react';
import { Link } from 'react-router-dom';

export default function TopicCard({ to, icon, color, title, desc, delay }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 fade-in-up" style={{ animationDelay: `${delay}s` }}>
      <Link to={to} className="text-decoration-none">
        <div className="topic-card h-100 p-4 border rounded shadow-sm d-flex flex-column align-items-start transition" style={{ borderColor: 'var(--border-color)' }}>
          <div 
            className="icon-wrapper mb-3 d-flex align-items-center justify-content-center rounded-circle"
            style={{ 
              width: '48px', 
              height: '48px', 
              backgroundColor: `${color}15`,
              color: color
            }}
          >
            <i className={`bi ${icon} fs-4`}></i>
          </div>
          <h5 className="fw-bold mb-2" style={{ color: 'var(--heading-color)' }}>{title}</h5>
          {desc && <p className="small mb-0" style={{ color: 'var(--text-color)' }}>{desc}</p>}
        </div>
      </Link>
    </div>
  );
}

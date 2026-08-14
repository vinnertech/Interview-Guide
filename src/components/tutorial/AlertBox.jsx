import React from 'react';
import { formatText } from '../../utils/formatText';

export default function AlertBox({ type = 'info', title, children, content }) {
  const config = {
    info: {
      className: 'alert-info',
      icon: 'bi-info-circle-fill',
      borderColor: '#0dcaf0',
      defaultTitle: 'Note'
    },
    tip: {
      className: 'alert-success',
      icon: 'bi-lightbulb-fill',
      borderColor: '#198754',
      defaultTitle: 'Pro Tip'
    },
    warning: {
      className: 'alert-warning',
      icon: 'bi-exclamation-triangle-fill',
      borderColor: '#ffc107',
      defaultTitle: 'Warning'
    },
    danger: {
      className: 'alert-danger',
      icon: 'bi-shield-fill-exclamation',
      borderColor: '#dc3545',
      defaultTitle: 'Danger: Data Loss Risk'
    },
    important: {
      className: 'alert-primary',
      icon: 'bi-star-fill',
      borderColor: '#0d6efd',
      defaultTitle: 'Key Takeaway'
    }
  };

  const current = config[type] || config.info;

  return (
    <div className={`alert ${current.className} my-4 shadow-sm`} style={{ borderLeft: `5px solid ${current.borderColor}`, borderRadius: '8px' }}>
      <div className="d-flex align-items-center mb-2">
        <i className={`bi ${current.icon} me-2 fs-5`}></i>
        <h6 className="fw-bold mb-0">{title || current.defaultTitle}</h6>
      </div>
      {content ? (
        <div className="small" style={{ lineHeight: 1.6 }} dangerouslySetInnerHTML={formatText(content)} />
      ) : (
        <div className="small" style={{ lineHeight: 1.6 }}>{children}</div>
      )}
    </div>
  );
}

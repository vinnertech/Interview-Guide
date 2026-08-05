import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | VinnerTECH</title>
        <meta name="description" content="Get in touch with VinnerTECH for inquiries, feedback, or support regarding our interview guides." />
      </Helmet>
      <div className="container py-5" style={{ flex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-lg-8 p-3 p-md-5 rounded shadow-sm border transition" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
            <h1 className="fw-bold mb-4" style={{ color: 'var(--primary-color)' }}>Contact Us</h1>
            <p className="fs-6 fs-md-5 fw-medium mb-5" style={{ color: 'var(--text-color)' }}>We'd love to hear from you! Whether you have a question about our content, found an error, or just want to share your interview success story.</p>
            
            <div className="card border-0 p-3 p-md-4 text-center transition" style={{ backgroundColor: 'var(--hover-bg)' }}>
              <i className="bi bi-envelope-fill display-4 mb-3" style={{ color: 'var(--primary-color)' }}></i>
              <h3 style={{ color: 'var(--heading-color)' }}>Email Us</h3>
              <p className="mb-0" style={{ color: 'var(--text-color)' }}>Reach out directly via email at:</p>
              <a href="mailto:vinnertech@gmail.com" className="fs-5 fs-md-4 fw-bold text-decoration-none mt-2 d-block" style={{ color: 'var(--heading-color)' }}>
                vinnertech@gmail.com
              </a>
            </div>

            <div className="mt-5 text-center" style={{ color: 'var(--text-color)' }}>
              <p>We typically respond within 24-48 business hours.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | VinnerTECH</title>
        <meta name="description" content="Privacy Policy for VinnerTECH Interview Guide." />
      </Helmet>
      <div className="container py-5" style={{ flex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-lg-8 bg-white p-5 rounded shadow-sm border">
            <h1 className="fw-bold mb-4" style={{ color: 'var(--primary-color)' }}>Privacy Policy</h1>
            <p className="text-muted mb-4">Last updated: August 2026</p>
            
            <p>At VinnerTECH, we take your privacy seriously. This Privacy Policy describes how your personal information is collected, used, and shared when you visit our website.</p>
            
            <h4 className="mt-4">Information We Collect</h4>
            <p>Because our website is a static educational portal, we collect minimal data:</p>
            <ul>
              <li><strong>Local Storage:</strong> We use your browser's local storage solely to remember your theme preference (Light/Dark mode).</li>
              <li><strong>Analytics:</strong> We may use basic, anonymized web analytics to understand our site traffic and improve our content.</li>
            </ul>

            <h4 className="mt-4">Cookies</h4>
            <p>We do not use tracking cookies or third-party advertising cookies. Our application is designed to be privacy-first.</p>

            <h4 className="mt-4">Contact Us</h4>
            <p>If you have questions or concerns about our privacy practices, please contact us at <a href="mailto:vinnertech@gmail.com">vinnertech@gmail.com</a>.</p>
          </div>
        </div>
      </div>
    </>
  );
}

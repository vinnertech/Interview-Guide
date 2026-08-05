import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | VinnerTECH</title>
        <meta name="description" content="Learn more about VinnerTECH and our comprehensive technical interview preparation guides." />
      </Helmet>
      <div className="container py-5" style={{ flex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-lg-8 bg-white p-5 rounded shadow-sm border">
            <h1 className="fw-bold mb-4" style={{ color: 'var(--primary-color)' }}>About VinnerTECH</h1>
            <p className="lead">Helping developers prepare for their technical interviews with confidence.</p>
            <p>
              VinnerTECH is dedicated to providing high-quality, structured, and up-to-date interview preparation materials for software engineers. Whether you are preparing for a Frontend, Backend, or Full Stack role, our comprehensive guides cover the most frequently asked questions across top technologies.
            </p>
            <h3 className="mt-4 mb-3">Our Mission</h3>
            <p>
              To bridge the gap between theoretical knowledge and practical interview expectations by offering clear explanations, real-world examples, and actionable interview tips.
            </p>
            <h3 className="mt-4 mb-3">Why Choose Us?</h3>
            <ul>
              <li><strong>Comprehensive Coverage:</strong> From Core Java to Advanced React, we cover it all.</li>
              <li><strong>Structured Learning:</strong> Grouped logically by chapters and categories for easy navigation.</li>
              <li><strong>Real-world Focus:</strong> We focus on scenarios you will actually face in enterprise interviews.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

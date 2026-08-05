import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | VinnerTECH</title>
        <meta name="description" content="Terms of Service for VinnerTECH Interview Guide." />
      </Helmet>
      <div className="container py-5" style={{ flex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-lg-8 bg-white p-5 rounded shadow-sm border">
            <h1 className="fw-bold mb-4" style={{ color: 'var(--primary-color)' }}>Terms of Service</h1>
            <p className="text-muted mb-4">Last updated: August 2026</p>
            
            <p>Welcome to VinnerTECH! By accessing this website, we assume you accept these terms and conditions. Do not continue to use VinnerTECH if you do not agree to take all of the terms and conditions stated on this page.</p>
            
            <h4 className="mt-4">License</h4>
            <p>Unless otherwise stated, VinnerTECH and/or its licensors own the intellectual property rights for all material on VinnerTECH. All intellectual property rights are reserved. You may access this from VinnerTECH for your own personal use subjected to restrictions set in these terms and conditions.</p>

            <h4 className="mt-4">You must not:</h4>
            <ul>
              <li>Republish material from VinnerTECH</li>
              <li>Sell, rent or sub-license material from VinnerTECH</li>
              <li>Reproduce, duplicate or copy material from VinnerTECH</li>
              <li>Redistribute content from VinnerTECH without strict attribution</li>
            </ul>

            <h4 className="mt-4">Disclaimer</h4>
            <p>The materials on VinnerTECH's website are provided on an 'as is' basis. VinnerTECH makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </div>
        </div>
      </div>
    </>
  );
}

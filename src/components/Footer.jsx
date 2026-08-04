import React from 'react';

export default function Footer() {
  return (
    <footer className="footer py-4 text-center mt-auto">
      <div className="container">
        <p className="mb-0 text-muted">© {new Date().getFullYear()} Enterprise Interview Guide Portal. Built for excellence.</p>
      </div>
    </footer>
  );
}

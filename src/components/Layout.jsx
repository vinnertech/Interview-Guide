import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import ScrollProgress from './ScrollProgress';
import FloatingShare from './FloatingShare';

export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100 position-relative">
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow-1 d-flex flex-column">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingShare />
    </div>
  );
}

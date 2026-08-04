import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import ScrollProgress from './ScrollProgress';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <ScrollProgress />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
}

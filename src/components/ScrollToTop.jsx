import React, { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      className="btn shadow-lg d-flex align-items-center justify-content-center transition btn-pulse"
      id="btn-back-to-top" 
      title="Go to top" 
      onClick={scrollToTop}
      style={{ 
        display: isVisible ? 'flex' : 'none',
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        zIndex: 1000,
        backgroundColor: 'var(--primary-color)',
        border: 'none',
        color: '#fff',
      }}
    >
      <i className="bi bi-arrow-up fs-4"></i>
    </button>
  );
}

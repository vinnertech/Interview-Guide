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
      id="btn-back-to-top" 
      title="Go to top" 
      onClick={scrollToTop}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <i className="bi bi-arrow-up-circle-fill"></i>
    </button>
  );
}

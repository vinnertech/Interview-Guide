import React from 'react';

export default function FloatingShare() {
  const handleShare = async () => {
    const shareData = {
      title: 'InterviewGuide By VinnerTECH',
      text: 'Check out this amazing technical interview preparation guide!',
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback for desktop browsers without Web Share API
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <button 
      onClick={handleShare}
      className="floating-share-btn"
      title="Share"
      aria-label="Share"
    >
      <i className="bi bi-share-fill"></i>
    </button>
  );
}

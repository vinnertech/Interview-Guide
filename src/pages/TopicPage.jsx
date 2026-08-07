import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import QuestionItem from '../components/QuestionItem';

export default function TopicPage({ title, description, questions }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('');
  
  // In-memory progress tracking
  const [bookmarkedIds, setBookmarkedIds] = useState(new Set());
  const [completedIds, setCompletedIds] = useState(new Set());
  
  // Filters
  const [showBookmarkedOnly, setShowBookmarkedOnly] = useState(false);
  const [showCompletedOnly, setShowCompletedOnly] = useState(false);
  const [showTopPriorityOnly, setShowTopPriorityOnly] = useState(false);
  const [quickRevisionMode, setQuickRevisionMode] = useState(false);

  const toggleBookmark = (id) => {
    setBookmarkedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  const toggleComplete = (id) => {
    setCompletedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  // Extract unique categories
  const categories = useMemo(() => {
    return [...new Set(questions.map(q => q.category))];
  }, [questions]);

  // Group questions by category
  // Group questions by category and apply filters
  const groupedQuestions = useMemo(() => {
    const groups = {};
    categories.forEach(cat => {
      groups[cat] = questions.filter(q => {
        // Category match
        if (q.category !== cat) return false;
        
        // State filters
        if (showBookmarkedOnly && !bookmarkedIds.has(q.id)) return false;
        if (showCompletedOnly && !completedIds.has(q.id)) return false;
        if (showTopPriorityOnly && q.priority !== 'High') return false;
        
        // Text match
        const matchesSearch = q.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          (q.explanation && q.explanation.toLowerCase().includes(searchQuery.toLowerCase()));
          
        return matchesSearch;
      });
    });
    return groups;
  }, [questions, categories, searchQuery, showBookmarkedOnly, showCompletedOnly, showTopPriorityOnly, bookmarkedIds, completedIds]);

  // Highlight syntax when data changes
  useEffect(() => {
    if (window.Prism) {
      window.Prism.highlightAll();
    }
  }, [searchQuery, questions]);

  // Setup IntersectionObserver to highlight active category in sidebar based on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.id);
        }
      });
    }, { rootMargin: '-20% 0px -80% 0px' });

    categories.forEach(cat => {
      const el = document.getElementById(cat.replace(/\s+/g, '-'));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories, searchQuery]);

  const scrollToCategory = (cat) => {
    const el = document.getElementById(cat.replace(/\s+/g, '-'));
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>{title} Interview Questions & Answers - VinnerTECH</title>
        <meta name="description" content={`Master ${title} with our comprehensive list of interview questions and answers. Perfect for ${title} developers preparing for technical interviews.`} />
        <meta property="og:title" content={`${title} Interview Questions & Answers - VinnerTECH`} />
        <meta property="og:description" content={`Prepare for your next technical interview with top ${title} questions and answers.`} />
        <link rel="canonical" href={`https://vinnertech.github.io/${title.toLowerCase().replace(/\s+/g, '-')}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": questions.slice(0, 10).map(q => ({
              "@type": "Question",
              "name": q.title,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": q.explanation || "See detailed answer on the website."
              }
            }))
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <div className="border-bottom py-4 mb-4" style={{ backgroundColor: 'var(--card-bg)' }}>
        <div className="container">
          <h1 className="fw-bold text-gradient">{title} Tutorial</h1>
          <p className="text-muted mb-0">{description}</p>
        </div>
      </div>

      <div className="container" style={{ flex: 1 }}>
        <div className="row">
          
          {/* Left Sidebar (Chapters) */}
          <aside className="col-lg-3 d-none d-lg-block mb-4">
            <div className="sidebar-wrapper p-3">
              <h6 className="fw-bold mb-3 px-2 text-uppercase text-muted" style={{ fontSize: '0.8rem' }}>Chapters</h6>
              <div className="list-group list-group-flush">
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => scrollToCategory(cat)}
                    className={`list-group-item list-group-item-action text-start ${activeCategory === cat.replace(/\s+/g, '-') ? 'active' : ''}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="col-lg-9 mb-5">
            <div className="mb-4 position-relative transition fade-in-up" style={{ animationDelay: '0.1s' }}>
              <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-4" style={{ zIndex: 10, color: 'var(--text-color)' }}></i>
              <input 
                type="text" 
                className="form-control form-control-lg rounded-pill shadow-sm ps-5 border transition" 
                placeholder={`Search ${title} questions, topics, or keywords...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ 
                  backgroundColor: 'var(--card-bg)', 
                  color: 'var(--heading-color)', 
                  borderColor: 'var(--border-color)',
                  fontSize: '1rem'
                }}
              />
            </div>
            
            {/* Filters Bar */}
            <div className="d-flex flex-wrap gap-2 mb-4 p-3 rounded fade-in-up" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)', animationDelay: '0.2s' }}>
              <button 
                className={`btn btn-sm ${quickRevisionMode ? 'btn-primary' : 'btn-outline-primary'} rounded-pill fw-bold`}
                onClick={() => setQuickRevisionMode(!quickRevisionMode)}
              >
                <i className="bi bi-lightning-charge-fill me-1"></i> Quick Revision
              </button>
              
              <div className="vr mx-1 d-none d-md-block" style={{ backgroundColor: 'var(--border-color)' }}></div>
              
              <button 
                className={`btn btn-sm ${showBookmarkedOnly ? 'btn-warning text-dark' : 'btn-outline-warning'} rounded-pill fw-bold`}
                onClick={() => setShowBookmarkedOnly(!showBookmarkedOnly)}
              >
                <i className={showBookmarkedOnly ? "bi bi-bookmark-fill me-1" : "bi bi-bookmark me-1"}></i> 
                Bookmarked ({bookmarkedIds.size})
              </button>
              
              <button 
                className={`btn btn-sm ${showCompletedOnly ? 'btn-success' : 'btn-outline-success'} rounded-pill fw-bold`}
                onClick={() => setShowCompletedOnly(!showCompletedOnly)}
              >
                <i className={showCompletedOnly ? "bi bi-check-circle-fill me-1" : "bi bi-check-circle me-1"}></i> 
                Completed ({completedIds.size})
              </button>
              
              <div className="vr mx-1 d-none d-md-block" style={{ backgroundColor: 'var(--border-color)' }}></div>
              
              <button 
                className={`btn btn-sm ${showTopPriorityOnly ? 'btn-danger' : 'btn-outline-danger'} rounded-pill fw-bold`}
                onClick={() => setShowTopPriorityOnly(!showTopPriorityOnly)}
              >
                <i className="bi bi-star-fill me-1"></i> 
                Top 50 Priority
              </button>
            </div>
            
            <div className="accordion">
              {categories.map((cat, idx) => {
                const catQuestions = groupedQuestions[cat];
                if (catQuestions.length === 0) return null;

                const catId = cat.replace(/\s+/g, '-');
                
                return (
                  <div key={cat} id={catId} style={{ scrollMarginTop: '100px' }}>
                    <h3 className="category-section-title">
                      <i className="bi bi-bookmark-fill me-2"></i>
                      Chapter {idx + 1}: {cat}
                    </h3>
                    
                    {catQuestions.map(q => (
                      <QuestionItem 
                        key={q.id} 
                        question={q} 
                        isBookmarked={bookmarkedIds.has(q.id)}
                        isCompleted={completedIds.has(q.id)}
                        onToggleBookmark={() => toggleBookmark(q.id)}
                        onToggleComplete={() => toggleComplete(q.id)}
                        quickRevisionMode={quickRevisionMode}
                      />
                    ))}
                  </div>
                );
              })}

              {Object.values(groupedQuestions).every(arr => arr.length === 0) && (
                <div className="text-center py-5">
                  <i className="bi bi-search display-4 text-muted mb-3"></i>
                  <h4>No results found</h4>
                  <p className="text-muted">Try adjusting your search query.</p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

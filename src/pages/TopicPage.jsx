import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import QuestionItem from '../components/QuestionItem';

export default function TopicPage({ title, description, questions }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('');

  // Extract unique categories
  const categories = useMemo(() => {
    return [...new Set(questions.map(q => q.category))];
  }, [questions]);

  // Group questions by category
  const groupedQuestions = useMemo(() => {
    const groups = {};
    categories.forEach(cat => {
      groups[cat] = questions.filter(q => q.category === cat && 
        (q.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
         (q.explanation && q.explanation.toLowerCase().includes(searchQuery.toLowerCase())))
      );
    });
    return groups;
  }, [questions, categories, searchQuery]);

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
        <title>{title} Tutorial - VinnerTECH</title>
        <meta name="description" content={description} />
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
            <div className="mb-4">
              <input 
                type="text" 
                className="form-control" 
                placeholder={`Search ${title} questions...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
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
                      <QuestionItem key={q.id} question={q} />
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

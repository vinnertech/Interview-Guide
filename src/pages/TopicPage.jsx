import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import QuestionItem from '../components/QuestionItem';

export default function TopicPage({ title, description, questions }) {
  const [currentCategory, setCurrentCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAllExpanded, setIsAllExpanded] = useState(false);

  // Re-run Prism when questions change or expand state changes
  useEffect(() => {
    if (window.Prism) {
      window.Prism.highlightAll();
    }
  }, [currentCategory, searchQuery, isAllExpanded, questions]);

  const categories = useMemo(() => {
    return ['All', ...new Set(questions.map(q => q.category))];
  }, [questions]);

  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      const matchCategory = currentCategory === 'All' || q.category === currentCategory;
      const matchSearch = q.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (q.explanation && q.explanation.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [questions, currentCategory, searchQuery]);

  return (
    <>
      <Helmet>
        <title>{title} Interview Guide - Enterprise Portal</title>
        <meta name="description" content={description} />
      </Helmet>

      {/* Hero Section */}
      <header className="hero-section text-center py-5">
        <div className="container position-relative">
          <h1 className="display-4 fw-bold text-white mb-3">{title} Interview Guide</h1>
          <p className="lead text-white-50 mb-4">{description}</p>
          
          <div className="row justify-content-center mb-3">
            <div className="col-md-6 position-relative">
              <input 
                type="text" 
                className="form-control form-control-lg glass-input" 
                placeholder="Search questions, topics, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <i className="bi bi-search position-absolute top-50 end-0 translate-middle-y me-4 text-muted"></i>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container my-5" style={{ flex: 1 }}>
        <div className="row">
          {/* Sidebar */}
          <aside className="col-lg-3 mb-4">
            <div className="sticky-sidebar p-3 glass-card rounded shadow-sm">
              <h5 className="fw-bold mb-3 d-flex align-items-center"><i className="bi bi-tags-fill me-2 text-primary"></i> Categories</h5>
              <div className="list-group list-group-flush">
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setCurrentCategory(cat)}
                    className={`list-group-item list-group-item-action rounded mb-1 ${cat === currentCategory ? 'active' : ''}`}
                  >
                    {cat === 'All' ? 'All Questions' : cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Accordion Content */}
          <main className="col-lg-9">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="fw-bold m-0">{currentCategory === 'All' ? 'All Questions' : currentCategory}</h4>
              <button onClick={() => setIsAllExpanded(!isAllExpanded)} className="btn btn-sm btn-primary rounded-pill px-3">
                <i className={`bi ${isAllExpanded ? 'bi-arrows-collapse' : 'bi-arrows-expand'}`}></i> {isAllExpanded ? 'Collapse All' : 'Expand All'}
              </button>
            </div>
            
            <div className="accordion custom-accordion">
              {filteredQuestions.length > 0 ? (
                filteredQuestions.map(q => (
                  <QuestionItem key={q.id} question={q} isAllExpanded={isAllExpanded} />
                ))
              ) : (
                <div className="text-center py-5">
                  <i className="bi bi-emoji-frown display-1 text-muted mb-3"></i>
                  <h3>No questions found!</h3>
                  <p className="text-muted">Try adjusting your search or category filter.</p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

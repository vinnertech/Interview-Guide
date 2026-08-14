import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { tsCurriculum, getAllTsLessons } from '../../data/typescript-tutorial';

const STORAGE_KEY = 'vinnertech_ts_progress';

export default function TypeScriptGuideHome() {
  const [completedLessons, setCompletedLessons] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setCompletedLessons(new Set(JSON.parse(saved)));
      }
    } catch {
      // Fallback
    }
  }, []);

  const allLessons = useMemo(() => getAllTsLessons(), []);
  const totalLessons = allLessons.length;
  const completedCount = completedLessons.size;
  const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  const filteredCurriculum = useMemo(() => {
    if (!searchQuery.trim()) return tsCurriculum;
    const query = searchQuery.toLowerCase();

    return tsCurriculum.map(level => {
      const matchingChapters = level.chapters.map(chapter => {
        const matchingLessons = chapter.lessons.filter(l => 
          l.title.toLowerCase().includes(query) ||
          (l.subtitle && l.subtitle.toLowerCase().includes(query)) ||
          (l.goal && l.goal.toLowerCase().includes(query))
        );
        return matchingLessons.length > 0 ? { ...chapter, lessons: matchingLessons } : null;
      }).filter(Boolean);

      return matchingChapters.length > 0 ? { ...level, chapters: matchingChapters } : null;
    }).filter(Boolean);
  }, [searchQuery]);

  return (
    <div className="tutorial-home-container py-5" style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh' }}>
      <Helmet>
        <title>Complete TypeScript Learning Guide (Zero to Architect) | VinnerTECH</title>
        <meta name="description" content="Master TypeScript from fundamental static types to Generics, Utility Types, React + TypeScript architecture, and full-scale CRUD applications." />
      </Helmet>

      <div className="container px-lg-5 px-3">
        {/* Hero Section */}
        <div className="text-center mb-5">
          <div className="badge px-3 py-2 rounded-pill mb-3" style={{ backgroundColor: 'rgba(49, 120, 198, 0.1)', color: '#3178c6', border: '1px solid rgba(49, 120, 198, 0.25)', fontSize: '0.9rem' }}>
            <i className="bi bi-filetype-tsx me-2"></i> Zero-to-Architect TypeScript Course
          </div>
          <h1 className="display-4 fw-bolder mb-3" style={{ color: 'var(--heading-color)', letterSpacing: '-0.5px' }}>
            TypeScript Mastery Platform
          </h1>
          <p className="lead mx-auto mb-4" style={{ maxWidth: '780px', color: 'var(--text-color)', opacity: 0.85, lineHeight: 1.7 }}>
            A comprehensive, practical, beginner-to-advanced TypeScript guide with mental models, strict compiler configurations, Generics, React integration, and enterprise CRUD projects.
          </p>

          {/* Progress Card */}
          <div className="card mx-auto shadow-sm rounded-4 p-4 mb-4 border" style={{ maxWidth: '640px', backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="fw-bold" style={{ color: 'var(--heading-color)' }}>Your Overall Progress</span>
              <span className="badge rounded-pill bg-primary px-3 py-1 fw-bold">{progressPercent}% Completed</span>
            </div>
            <div className="progress rounded-pill mb-3" style={{ height: '10px' }}>
              <div 
                className="progress-bar progress-bar-striped progress-bar-animated bg-primary" 
                role="progressbar" 
                style={{ width: `${progressPercent}%` }}
                aria-valuenow={progressPercent} 
                aria-valuemin="0" 
                aria-valuemax="100"
              ></div>
            </div>
            <div className="d-flex justify-content-between align-items-center text-muted small">
              <span>{completedCount} of {totalLessons} modules finished</span>
              {allLessons.length > 0 && (
                <Link 
                  to={`/tutorial/typescript/${allLessons[0].chapterId}/${allLessons[0].slug || allLessons[0].id}`} 
                  className="btn btn-sm btn-primary rounded-pill px-3"
                >
                  {completedCount === 0 ? 'Start Course' : 'Resume Learning'} <i className="bi bi-arrow-right ms-1"></i>
                </Link>
              )}
            </div>
          </div>

          {/* Search Box */}
          <div className="mx-auto position-relative mb-5" style={{ maxWidth: '540px' }}>
            <div className="input-group input-group-lg shadow-sm rounded-pill overflow-hidden border" style={{ borderColor: 'var(--border-color)' }}>
              <span className="input-group-text bg-white border-0 ps-4">
                <i className="bi bi-search text-primary fs-5"></i>
              </span>
              <input 
                type="text" 
                className="form-control border-0 ps-2" 
                placeholder="Search TypeScript types, generics, utility types, React..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-color)' }}
              />
              {searchQuery && (
                <button className="btn bg-white border-0 pe-4 text-muted" type="button" onClick={() => setSearchQuery('')}>
                  <i className="bi bi-x-circle-fill"></i>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Curriculum Levels */}
        <div className="row g-4">
          {filteredCurriculum.map(level => (
            <div key={level.id} className="col-12">
              <div className="card rounded-4 border shadow-sm overflow-hidden" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
                <div className="card-header border-bottom p-4 d-flex align-items-center gap-3" style={{ backgroundColor: 'var(--bg-color)', borderColor: 'var(--border-color)' }}>
                  <div className="rounded-3 p-3 text-white d-flex align-items-center justify-content-center" style={{ backgroundColor: level.color || '#3178c6', width: '48px', height: '48px' }}>
                    <i className={`bi ${level.icon || 'bi-bookmark'} fs-4`}></i>
                  </div>
                  <div>
                    <h4 className="fw-bold mb-1" style={{ color: 'var(--heading-color)' }}>{level.title}</h4>
                    <p className="text-muted small mb-0">{level.description}</p>
                  </div>
                </div>

                <div className="card-body p-4">
                  {level.chapters.map(chapter => (
                    <div key={chapter.id} className="mb-4 last-mb-0">
                      <h6 className="fw-bold mb-3 text-uppercase text-secondary" style={{ fontSize: '0.85rem', letterSpacing: '0.5px' }}>
                        {chapter.title}
                      </h6>
                      <div className="row g-3">
                        {chapter.lessons.map(lesson => {
                          const isDone = completedLessons.has(lesson.id);
                          return (
                            <div key={lesson.id} className="col-12 col-md-6 col-lg-4">
                              <Link 
                                to={`/tutorial/typescript/${chapter.id}/${lesson.slug || lesson.id}`}
                                className="card h-100 p-3 rounded-3 text-decoration-none border shadow-none transition-hover"
                                style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}
                              >
                                <div className="d-flex justify-content-between align-items-start mb-2">
                                  <span className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 rounded-pill px-2.5 py-1">
                                    {lesson.order}
                                  </span>
                                  {isDone && (
                                    <span className="text-success" title="Completed">
                                      <i className="bi bi-check-circle-fill fs-5"></i>
                                    </span>
                                  )}
                                </div>
                                <h6 className="fw-bold mb-1" style={{ color: 'var(--heading-color)' }}>
                                  {lesson.title}
                                </h6>
                                <p className="text-muted small mb-0 line-clamp-2" style={{ lineHeight: 1.5 }}>
                                  {lesson.subtitle || lesson.goal}
                                </p>
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

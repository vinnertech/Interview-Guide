import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { reactCurriculum, getAllReactLessons } from '../../data/react-tutorial';

export default function ReactGuideHome() {
  const allLessons = useMemo(() => getAllReactLessons(), []);

  const completedLessons = useMemo(() => {
    try {
      const saved = localStorage.getItem('vinnertech_react_progress');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  }, []);

  const progressPercent = allLessons.length > 0 ? Math.round((completedLessons.size / allLessons.length) * 100) : 0;
  const firstLesson = allLessons[0];

  // Find the first uncompleted lesson to resume
  const resumeLesson = useMemo(() => {
    return allLessons.find(l => !completedLessons.has(l.slug || l.id)) || firstLesson;
  }, [allLessons, completedLessons, firstLesson]);

  return (
    <>
      <Helmet>
        <title>React.js Learning Guide - Zero to Senior Architect | VinnerTECH</title>
        <meta name="description" content="Comprehensive, beginner-to-advanced React.js practical guide. Learn modern React, JSX, Props, State, Hooks, Router, API Integration, State Management, and build full-stack CRUD projects." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-5 position-relative overflow-hidden border-bottom" style={{ backgroundColor: 'var(--bg-color)', borderColor: 'var(--border-color)' }}>
        <div className="hero-glow"></div>
        <div className="container py-4 position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-lg-9">
              <span className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 rounded-pill px-3 py-2 mb-3 fw-bold">
                <i className="bi bi-mortarboard-fill me-1"></i> Professional React.js Developer Track
              </span>

              <h1 className="display-4 fw-bolder mb-3" style={{ color: 'var(--heading-color)', letterSpacing: '-1px' }}>
                Master <span className="animated-gradient-text">React.js</span> From Scratch to Production
              </h1>

              <p className="lead fs-5 text-muted mb-4 mx-auto" style={{ maxWidth: '750px', lineHeight: 1.6 }}>
                A structured, baby-step journey from web fundamentals to enterprise architecture. Master JSX, component design, hooks, state machines, API resilience, testing, and build 7 real-world projects culminating in a complete CRUD Employee Management System.
              </p>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
                {resumeLesson && (
                  <Link 
                    to={`/tutorial/react/${resumeLesson.chapterId}/${resumeLesson.id || resumeLesson.slug}`}
                    className="btn btn-primary btn-lg rounded-pill px-5 fw-bold shadow-sm d-flex align-items-center gap-2"
                    style={{ backgroundColor: 'var(--primary-color)', border: 'none' }}
                  >
                    <span>{completedLessons.size > 0 ? 'Resume Learning' : 'Start Module 1'}</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                )}
                
                <a 
                  href="#curriculum"
                  className="btn btn-outline-secondary btn-lg rounded-pill px-4 fw-bold"
                >
                  <i className="bi bi-list-nested me-2"></i> View 12-Level Roadmap
                </a>
              </div>

              {/* Course Highlights Badges */}
              <div className="d-flex flex-wrap justify-content-center gap-4 text-muted small pt-2">
                <div className="d-flex align-items-center gap-1">
                  <i className="bi bi-journal-check text-success fs-5"></i>
                  <span><strong>{allLessons.length}</strong> In-Depth Modules</span>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <i className="bi bi-kanban-fill text-info fs-5"></i>
                  <span>7 Real-World Projects</span>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <i className="bi bi-diagram-3-fill text-warning fs-5"></i>
                  <span>Architecture Diagrams</span>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <i className="bi bi-shield-check text-primary fs-5"></i>
                  <span>Production CRUD Capstone</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Banner */}
      {completedLessons.size > 0 && (
        <section className="py-3 border-bottom" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <div className="d-flex align-items-center gap-3">
                  <div className="rounded-circle p-2 bg-success bg-opacity-10 text-success d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px' }}>
                    <i className="bi bi-bookmark-check-fill fs-5"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0">Your Progress: {completedLessons.size} of {allLessons.length} Modules Completed ({progressPercent}%)</h6>
                    <small className="text-muted">Next up: <strong>{resumeLesson.title}</strong></small>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-md-end mt-3 mt-md-0">
                <Link 
                  to={`/tutorial/react/${resumeLesson.chapterId}/${resumeLesson.id || resumeLesson.slug}`}
                  className="btn btn-sm btn-outline-primary rounded-pill px-4 fw-bold"
                >
                  Continue →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Curriculum Roadmap Grid */}
      <section id="curriculum" className="container py-5 my-3">
        <div className="text-center mb-5">
          <span className="badge bg-primary bg-opacity-10 text-primary border rounded-pill px-3 py-1 mb-2 fw-bold text-uppercase" style={{ fontSize: '0.75rem' }}>
            Curriculum Roadmap
          </span>
          <h2 className="fw-bold mb-2" style={{ color: 'var(--heading-color)' }}>12 Progressive Learning Levels</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '650px' }}>
            Structured logically from JavaScript foundations to state machines, performance profiling, and enterprise CRUD development.
          </p>
        </div>

        <div className="row g-4">
          {reactCurriculum.map((level, idx) => (
            <div key={level.id} className="col-lg-6">
              <div className="card h-100 p-4 rounded-4 shadow-sm border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
                
                {/* Level Header */}
                <div className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom" style={{ borderColor: 'var(--border-color)' }}>
                  <div className="d-flex align-items-center gap-3">
                    <div 
                      className="rounded-3 d-flex align-items-center justify-content-center"
                      style={{ 
                        width: '46px', 
                        height: '46px', 
                        backgroundColor: `${level.color || '#0d6efd'}15`, 
                        color: level.color || 'var(--primary-color)',
                        fontSize: '1.4rem'
                      }}
                    >
                      <i className={`bi ${level.icon || 'bi-filetype-jsx'}`}></i>
                    </div>
                    <div>
                      <span className="badge rounded-pill mb-1" style={{ backgroundColor: `${level.color || '#0d6efd'}20`, color: level.color || 'var(--primary-color)' }}>
                        Level {idx + 1}
                      </span>
                      <h4 className="fw-bold mb-0" style={{ color: 'var(--heading-color)', fontSize: '1.15rem' }}>
                        {level.title}
                      </h4>
                    </div>
                  </div>
                  <span className="small text-muted fw-semibold">
                    {level.chapters.reduce((acc, c) => acc + c.lessons.length, 0)} Modules
                  </span>
                </div>

                <p className="text-muted small mb-3">
                  {level.description}
                </p>

                {/* Chapters & Lessons */}
                <div className="d-flex flex-column gap-3 mt-auto">
                  {level.chapters.map(chapter => (
                    <div key={chapter.id} className="p-3 rounded-3" style={{ backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)' }}>
                      <div className="fw-bold small mb-2 d-flex align-items-center text-primary">
                        <i className="bi bi-collection-fill me-2"></i>
                        <span>{chapter.title}</span>
                      </div>
                      <div className="list-group list-group-flush">
                        {chapter.lessons.map(lesson => {
                          const isDone = completedLessons.has(lesson.slug || lesson.id);
                          return (
                            <Link
                              key={lesson.slug || lesson.id}
                              to={`/tutorial/react/${chapter.id}/${lesson.id || lesson.slug}`}
                              className="list-group-item list-group-item-action py-2 px-0 bg-transparent border-0 d-flex align-items-center justify-content-between text-decoration-none"
                              style={{ color: 'var(--text-color)', fontSize: '0.85rem' }}
                            >
                              <div className="d-flex align-items-center gap-2 text-truncate pe-2">
                                <i className={`bi ${isDone ? 'bi-check-circle-fill text-success' : 'bi-arrow-right-circle text-muted'}`} style={{ fontSize: '0.9rem' }}></i>
                                <span className="text-truncate">{lesson.title}</span>
                              </div>
                              {isDone && <span className="badge bg-success bg-opacity-10 text-success rounded-pill" style={{ fontSize: '0.7rem' }}>Done</span>}
                            </Link>
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
      </section>
    </>
  );
}

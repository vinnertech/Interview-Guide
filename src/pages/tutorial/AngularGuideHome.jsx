import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { angularCurriculum, getAllAngularLessons } from '../../data/angular-tutorial';

export default function AngularGuideHome() {
  const [searchQuery, setSearchQuery] = useState('');
  const allLessons = useMemo(() => getAllAngularLessons(), []);

  const filteredCurriculum = useMemo(() => {
    if (!searchQuery.trim()) return angularCurriculum;
    const q = searchQuery.toLowerCase();
    return angularCurriculum.map(level => ({
      ...level,
      chapters: level.chapters.map(ch => ({
        ...ch,
        lessons: ch.lessons.filter(l => 
          l.title.toLowerCase().includes(q) || 
          l.subtitle?.toLowerCase().includes(q)
        )
      })).filter(ch => ch.lessons.length > 0)
    })).filter(level => level.chapters.length > 0);
  }, [searchQuery]);

  const totalLessons = allLessons.length;
  const firstLesson = allLessons[0];

  return (
    <>
      <Helmet>
        <title>Angular Learning Guide - Modern Angular 17+ Full Course | VinnerTECH</title>
        <meta name="description" content="Master Modern Angular 17+ from absolute beginner to advanced architecture: Standalone components, Signals, modern control flow (@if/@for), RxJS, Forms, Routing, and enterprise CRUD projects." />
      </Helmet>

      {/* Hero Header */}
      <div className="py-5 text-white" style={{ background: 'linear-gradient(135deg, #dd0031 0%, #c3002f 100%)' }}>
        <div className="container py-4">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill bg-white bg-opacity-20 text-white small fw-bold mb-3">
                <i className="bi bi-shield-shaded"></i>
                <span>Modern Angular 17+ Complete Guide</span>
              </div>
              <h1 className="display-4 fw-bolder mb-3">Angular Master Guide</h1>
              <p className="lead mb-4 text-white-50" style={{ maxWidth: '680px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                Master Google's enterprise web application framework from absolute foundations to advanced architecture: Standalone Components, Angular Signals, RxJS, Forms, Dependency Injection, and complete CRUD applications in baby steps.
              </p>
              
              <div className="d-flex flex-wrap gap-3">
                {firstLesson && (
                  <Link 
                    to={`/tutorial/angular/${firstLesson.chapterId}/${firstLesson.slug || firstLesson.id}`}
                    className="btn btn-light btn-lg rounded-pill px-4 fw-bold text-danger shadow-sm d-flex align-items-center gap-2"
                  >
                    <i className="bi bi-play-circle-fill fs-5"></i>
                    <span>Start Learning (00. Intro)</span>
                  </Link>
                )}
                <a href="#curriculum" className="btn btn-outline-light btn-lg rounded-pill px-4">
                  Browse Curriculum ({totalLessons} Lessons)
                </a>
              </div>
            </div>
            
            <div className="col-lg-4 d-none d-lg-block text-center">
              <div className="p-4 rounded-4 bg-white bg-opacity-10 backdrop-blur border border-white border-opacity-25 shadow-lg">
                <i className="bi bi-shield-shaded display-1 text-white opacity-75"></i>
                <h4 className="fw-bold mt-3 text-white">Full Stack Ready</h4>
                <p className="text-white-50 small mb-0">From beginner syntax to enterprise reactive signals and REST API integration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="container py-5" id="curriculum">
        {/* Search Bar */}
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto">
            <div className="position-relative">
              <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
              <input 
                type="text"
                className="form-control form-control-lg rounded-pill ps-5 shadow-sm"
                placeholder="Search Angular lessons, signals, RxJS, components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ backgroundColor: 'var(--card-bg)', color: 'var(--heading-color)', borderColor: 'var(--border-color)' }}
              />
            </div>
          </div>
        </div>

        {/* Levels List */}
        <div className="row g-4">
          {filteredCurriculum.map((level) => (
            <div key={level.id} className="col-12">
              <div className="card rounded-4 border shadow-sm overflow-hidden" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
                <div className="card-header p-4 border-0" style={{ backgroundColor: 'var(--bg-color)' }}>
                  <div className="d-flex align-items-center gap-3">
                    <div className="rounded-3 p-3 text-white d-flex align-items-center justify-content-center shadow-sm" style={{ backgroundColor: level.color || '#dd0031', width: '48px', height: '48px' }}>
                      <i className={`bi ${level.icon || 'bi-shield-shaded'} fs-4`}></i>
                    </div>
                    <div>
                      <h3 className="fw-bold mb-1" style={{ color: 'var(--heading-color)', fontSize: '1.35rem' }}>
                        {level.title}
                      </h3>
                      <p className="text-muted small mb-0">{level.description}</p>
                    </div>
                  </div>
                </div>

                <div className="card-body p-0">
                  <div className="list-group list-group-flush">
                    {level.chapters.flatMap(ch => ch.lessons).map((lesson) => (
                      <Link
                        key={lesson.id}
                        to={`/tutorial/angular/${lesson.chapterId}/${lesson.slug || lesson.id}`}
                        className="list-group-item list-group-item-action p-3 px-4 d-flex align-items-center justify-content-between border-start-0 border-end-0"
                        style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}
                      >
                        <div className="d-flex align-items-center gap-3">
                          <span className="badge rounded-pill bg-danger bg-opacity-10 text-danger border border-danger border-opacity-25 px-2.5 py-1.5 fw-semibold" style={{ fontSize: '0.8rem' }}>
                            {lesson.order || 'Lesson'}
                          </span>
                          <div>
                            <h6 className="fw-bold mb-0" style={{ color: 'var(--heading-color)' }}>{lesson.title}</h6>
                            {lesson.subtitle && <p className="text-muted small mb-0 mt-0.5">{lesson.subtitle}</p>}
                          </div>
                        </div>
                        <i className="bi bi-chevron-right text-muted fs-6"></i>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

import React, { useState, useEffect, useMemo } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { githubCurriculum, getAllLessons } from '../../data/github-tutorial';

export default function LessonLayout({ 
  children, 
  currentLesson,
  curriculum = githubCurriculum,
  allLessons: propAllLessons = null,
  basePath = '/tutorial/github',
  courseTitle = 'GitHub Guide',
  storageKey = 'vinnertech_github_progress',
  icon = 'bi-github'
}) {
  const { chapterId, lessonId } = useParams();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [completedLessons, setCompletedLessons] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  const allLessons = useMemo(() => {
    if (propAllLessons) return propAllLessons;
    return getAllLessons();
  }, [propAllLessons]);

  // Calculate overall progress percentage
  const progressPercent = useMemo(() => {
    if (allLessons.length === 0) return 0;
    return Math.round((completedLessons.size / allLessons.length) * 100);
  }, [allLessons, completedLessons]);

  const toggleComplete = (slug) => {
    setCompletedLessons(prev => {
      const updated = new Set(prev);
      if (updated.has(slug)) {
        updated.delete(slug);
      } else {
        updated.add(slug);
      }
      try {
        localStorage.setItem(storageKey, JSON.stringify([...updated]));
      } catch (e) {
        console.error('Failed to save progress', e);
      }
      return updated;
    });
  };

  // Find previous and next lessons
  const currentIndex = allLessons.findIndex(l => l.slug === currentLesson?.slug || l.id === currentLesson?.id);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex >= 0 && currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  // Filter lessons based on search
  const filteredCurriculum = useMemo(() => {
    if (!searchQuery.trim()) return curriculum;
    const query = searchQuery.toLowerCase();

    return curriculum.map(level => {
      const matchingChapters = level.chapters.map(chapter => {
        const matchingLessons = chapter.lessons.filter(lesson => 
          lesson.title.toLowerCase().includes(query) || 
          lesson.summary?.toLowerCase().includes(query) ||
          lesson.keywords?.some(k => k.toLowerCase().includes(query))
        );
        return { ...chapter, lessons: matchingLessons };
      }).filter(chapter => chapter.lessons.length > 0);

      return { ...level, chapters: matchingChapters };
    }).filter(level => level.chapters.length > 0);
  }, [searchQuery, curriculum]);

  // Scroll to top when lesson changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const renderSidebarContent = () => (
    <div className="d-flex flex-column h-100 p-3">
      {/* Search Input */}
      <div className="mb-3 position-relative">
        <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" style={{ fontSize: '0.85rem' }}></i>
        <input 
          type="text" 
          className="form-control form-control-sm rounded-pill ps-4 py-2"
          placeholder="Search curriculum..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ backgroundColor: 'var(--bg-color)', color: 'var(--heading-color)', borderColor: 'var(--border-color)', fontSize: '0.85rem' }}
        />
        {searchQuery && (
          <button 
            className="btn btn-sm position-absolute top-50 end-0 translate-middle-y me-2 p-0 text-muted border-0"
            onClick={() => setSearchQuery('')}
          >
            <i className="bi bi-x-circle-fill"></i>
          </button>
        )}
      </div>

      {/* Progress Bar Card */}
      <div className="p-3 rounded-3 mb-3 border shadow-sm" style={{ backgroundColor: 'var(--bg-color)', borderColor: 'var(--border-color)' }}>
        <div className="d-flex justify-content-between align-items-center mb-1">
          <span className="fw-bold small text-uppercase text-muted" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>
            Course Progress
          </span>
          <span className="badge bg-primary rounded-pill small">{progressPercent}%</span>
        </div>
        <div className="progress" style={{ height: '6px', backgroundColor: 'var(--border-color)' }}>
          <div 
            className="progress-bar bg-gradient" 
            role="progressbar" 
            style={{ width: `${progressPercent}%`, backgroundColor: 'var(--primary-color)' }}
            aria-valuenow={progressPercent} 
            aria-valuemin="0" 
            aria-valuemax="100"
          />
        </div>
        <div className="d-flex justify-content-between mt-2 small text-muted" style={{ fontSize: '0.75rem' }}>
          <span>{completedLessons.size} of {allLessons.length} completed</span>
          <Link to={basePath} className="text-primary text-decoration-none">Overview</Link>
        </div>
      </div>

      {/* Curriculum Tree */}
      <div className="flex-grow-1 overflow-auto pe-1" style={{ maxHeight: 'calc(100vh - 280px)' }}>
        {filteredCurriculum.map((level, levelIdx) => (
          <div key={level.id} className="mb-3">
            <div className="d-flex align-items-center text-uppercase fw-bolder px-2 py-1 mb-2 rounded" style={{ fontSize: '0.75rem', letterSpacing: '0.6px', color: level.color || 'var(--primary-color)', backgroundColor: `${level.color || '#0d6efd'}15` }}>
              <i className={`bi ${level.icon || 'bi-folder2'} me-2`}></i>
              <span>{level.title}</span>
            </div>

            {level.chapters.map(chapter => (
              <div key={chapter.id} className="mb-2 ms-1">
                <div className="small fw-semibold text-muted px-2 py-1" style={{ fontSize: '0.8rem' }}>
                  {chapter.title}
                </div>
                <div className="list-group list-group-flush ms-2 border-start" style={{ borderColor: 'var(--border-color)' }}>
                  {chapter.lessons.map(lesson => {
                    const isActive = currentLesson?.slug === lesson.slug || currentLesson?.id === lesson.id;
                    const isCompleted = completedLessons.has(lesson.slug || lesson.id);

                    return (
                      <div 
                        key={lesson.slug || lesson.id}
                        className={`d-flex align-items-center justify-content-between list-group-item list-group-item-action py-2 px-2 border-0 rounded-end ${isActive ? 'active' : ''}`}
                        style={{
                          backgroundColor: isActive ? 'var(--primary-color)' : 'transparent',
                          color: isActive ? '#fff' : 'var(--text-color)',
                          fontSize: '0.85rem',
                          cursor: 'pointer'
                        }}
                      >
                        <Link 
                          to={`${basePath}/${chapter.id}/${lesson.id || lesson.slug}`}
                          className="text-decoration-none flex-grow-1 text-truncate pe-2"
                          style={{ color: 'inherit' }}
                        >
                          <span className="me-2 text-muted" style={{ color: isActive ? '#ffffffaa' : 'inherit', fontSize: '0.75rem' }}>
                            {lesson.order || ''}
                          </span>
                          {lesson.title}
                        </Link>
                        <button
                          className="btn btn-sm p-0 border-0 flex-shrink-0"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleComplete(lesson.slug || lesson.id);
                          }}
                          title={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
                          style={{ color: isActive ? '#fff' : (isCompleted ? '#198754' : 'var(--border-color)') }}
                        >
                          <i className={`bi ${isCompleted ? 'bi-check-circle-fill' : 'bi-circle'}`}></i>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="tutorial-page-wrapper" style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh' }}>
      {/* Mobile Sticky Bar */}
      <div className="d-lg-none sticky-top border-bottom py-2 px-3 d-flex justify-content-between align-items-center shadow-sm" style={{ backgroundColor: 'var(--navbar-bg)', zIndex: 1020 }}>
        <button 
          className="btn btn-sm btn-outline-primary d-flex align-items-center gap-1 rounded-pill"
          type="button" 
          data-bs-toggle="offcanvas" 
          data-bs-target="#tutorialSidebarOffcanvas"
        >
          <i className="bi bi-layout-sidebar-inset"></i>
          <span>Curriculum Menu</span>
        </button>
        <div className="small fw-bold text-muted">
          Progress: <span className="text-primary">{progressPercent}%</span>
        </div>
      </div>

      {/* Mobile Offcanvas Sidebar */}
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="tutorialSidebarOffcanvas" aria-labelledby="tutorialSidebarLabel">
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title fw-bold" id="tutorialSidebarLabel">
            <i className={`bi ${icon} me-2 text-primary`}></i> {courseTitle} Curriculum
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body p-0">
          {renderSidebarContent()}
        </div>
      </div>

      <div className="container-fluid px-2 px-sm-3 px-lg-5 py-3 py-lg-4">
        <div className="row g-3 g-lg-4">
          
          {/* Desktop Fixed Sidebar */}
          <aside className="col-lg-3 col-xl-3 d-none d-lg-block">
            <div className="sticky-top shadow-sm rounded-3 border" style={{ top: '80px', backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', zIndex: 100 }}>
              {renderSidebarContent()}
            </div>
          </aside>

          {/* Main Lesson Content Area */}
          <main className="col-lg-9 col-xl-9">
            <div className="lesson-content-card p-3 p-sm-4 p-md-5 rounded-4 shadow-sm border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
              
              {/* Breadcrumbs */}
              <nav aria-label="breadcrumb" className="mb-3">
                <ol className="breadcrumb small mb-0">
                  <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-muted">Home</Link></li>
                  <li className="breadcrumb-item"><Link to={basePath} className="text-decoration-none text-primary">{courseTitle}</Link></li>
                  {currentLesson && (
                    <>
                      <li className="breadcrumb-item text-muted">{currentLesson.chapterTitle || 'Lessons'}</li>
                      <li className="breadcrumb-item active text-truncate" aria-current="page" style={{ maxWidth: '250px' }}>{currentLesson.title}</li>
                    </>
                  )}
                </ol>
              </nav>

              {/* Lesson Title Header */}
              {currentLesson && (
                <div className="border-bottom pb-4 mb-4" style={{ borderColor: 'var(--border-color)' }}>
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-2">
                    <span className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 rounded-pill px-3 py-1 fw-bold">
                      {currentLesson.levelTitle || courseTitle} &bull; Lesson {currentLesson.order || ''}
                    </span>
                    
                    {/* Mark Complete Toggle Button */}
                    <button
                      onClick={() => toggleComplete(currentLesson.slug || currentLesson.id)}
                      className={`btn btn-sm rounded-pill px-3 py-1 fw-semibold transition ${completedLessons.has(currentLesson.slug || currentLesson.id) ? 'btn-success' : 'btn-outline-success'}`}
                    >
                      <i className={`bi ${completedLessons.has(currentLesson.slug || currentLesson.id) ? 'bi-check-circle-fill' : 'bi-circle'} me-1`}></i>
                      {completedLessons.has(currentLesson.slug || currentLesson.id) ? 'Completed' : 'Mark as Complete'}
                    </button>
                  </div>

                  <h1 className="fw-bolder mb-3 display-6" style={{ color: 'var(--heading-color)', letterSpacing: '-0.5px' }}>
                    {currentLesson.title}
                  </h1>

                  {currentLesson.subtitle && (
                    <p className="lead text-muted mb-0 fs-6" style={{ lineHeight: 1.6 }}>
                      {currentLesson.subtitle}
                    </p>
                  )}
                </div>
              )}

              {/* Lesson Body Injected Here */}
              <div className="lesson-body">
                {children}
              </div>

              {/* Previous & Next Navigation Buttons */}
              <div className="border-top pt-4 mt-5 d-flex flex-wrap justify-content-between align-items-center gap-3" style={{ borderColor: 'var(--border-color)' }}>
                {prevLesson ? (
                  <Link 
                    to={`${basePath}/${prevLesson.chapterId}/${prevLesson.id || prevLesson.slug}`}
                    className="btn btn-outline-secondary rounded-pill px-4 py-2 d-flex align-items-center gap-2"
                  >
                    <i className="bi bi-arrow-left"></i>
                    <div className="text-start">
                      <div className="text-muted text-uppercase" style={{ fontSize: '0.65rem' }}>Previous Lesson</div>
                      <div className="fw-bold small text-truncate" style={{ maxWidth: '180px' }}>{prevLesson.title}</div>
                    </div>
                  </Link>
                ) : (
                  <Link to={basePath} className="btn btn-outline-secondary rounded-pill px-3 py-2 small">
                    <i className="bi bi-grid-fill me-1"></i> Course Overview
                  </Link>
                )}

                {nextLesson ? (
                  <Link 
                    to={`${basePath}/${nextLesson.chapterId}/${nextLesson.id || nextLesson.slug}`}
                    className="btn btn-primary rounded-pill px-4 py-2 d-flex align-items-center gap-2 ms-auto"
                    style={{ backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}
                  >
                    <div className="text-end">
                      <div className="text-white-50 text-uppercase" style={{ fontSize: '0.65rem' }}>Next Lesson</div>
                      <div className="fw-bold small text-truncate text-white" style={{ maxWidth: '180px' }}>{nextLesson.title}</div>
                    </div>
                    <i className="bi bi-arrow-right text-white"></i>
                  </Link>
                ) : (
                  <Link 
                    to={basePath}
                    className="btn btn-success rounded-pill px-4 py-2 ms-auto fw-bold"
                  >
                    <i className="bi bi-trophy-fill me-2"></i> Course Finished!
                  </Link>
                )}
              </div>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

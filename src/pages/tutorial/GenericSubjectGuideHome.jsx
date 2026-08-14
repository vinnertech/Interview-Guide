import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function GenericSubjectGuideHome({
  curriculum,
  getAllLessonsFn,
  basePath,
  courseTitle,
  tagline,
  description,
  heroGradient = 'linear-gradient(135deg, #9B4F96 0%, #7B2D78 100%)',
  themeColor = '#9B4F96',
  icon = 'bi-book-half'
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const allLessons = useMemo(() => getAllLessonsFn(), [getAllLessonsFn]);

  const filteredCurriculum = useMemo(() => {
    if (!searchQuery.trim()) return curriculum;
    const q = searchQuery.toLowerCase();
    return curriculum.map(level => ({
      ...level,
      chapters: level.chapters.map(ch => ({
        ...ch,
        lessons: ch.lessons.filter(l => 
          l.title.toLowerCase().includes(q) || 
          l.subtitle?.toLowerCase().includes(q) ||
          l.summary?.toLowerCase().includes(q)
        )
      })).filter(ch => ch.lessons.length > 0)
    })).filter(level => level.chapters.length > 0);
  }, [searchQuery, curriculum]);

  const totalLessons = allLessons.length;
  const firstLesson = allLessons[0];

  return (
    <>
      <Helmet>
        <title>{courseTitle} - Beginner to Advanced Guide | VinnerTECH</title>
        <meta name="description" content={description} />
      </Helmet>

      {/* Hero Header */}
      <div className="py-5 text-white" style={{ background: heroGradient }}>
        <div className="container py-4">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill bg-white bg-opacity-20 text-white small fw-bold mb-3">
                <i className={`bi ${icon}`}></i>
                <span>{tagline}</span>
              </div>
              <h1 className="display-4 fw-bolder mb-3">{courseTitle}</h1>
              <p className="lead mb-4 text-white-50" style={{ maxWidth: '680px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                {description}
              </p>
              
              <div className="d-flex flex-wrap gap-3">
                {firstLesson && (
                  <Link 
                    to={`${basePath}/${firstLesson.chapterId}/${firstLesson.slug || firstLesson.id}`}
                    className="btn btn-light btn-lg rounded-pill px-4 fw-bold shadow-sm d-flex align-items-center gap-2"
                    style={{ color: themeColor }}
                  >
                    <i className="bi bi-play-circle-fill fs-5"></i>
                    <span>Start Learning (Lesson 1)</span>
                  </Link>
                )}
                <a href="#curriculum" className="btn btn-outline-light btn-lg rounded-pill px-4">
                  Browse Curriculum ({totalLessons} Lessons)
                </a>
              </div>
            </div>
            
            <div className="col-lg-4 d-none d-lg-block text-center">
              <div className="p-4 rounded-4 bg-white bg-opacity-10 backdrop-blur border border-white border-opacity-25 shadow-lg">
                <i className={`bi ${icon} display-1 text-white opacity-75`}></i>
                <h4 className="fw-bold mt-3 text-white">Production Grade</h4>
                <p className="text-white-50 small mb-0">Step-by-step concepts, diagrams, code implementations, and real-world architectures.</p>
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
                placeholder={`Search ${courseTitle} lessons, diagrams, code examples...`}
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
                    <div className="rounded-3 p-3 text-white d-flex align-items-center justify-content-center shadow-sm" style={{ backgroundColor: level.color || themeColor, width: '48px', height: '48px' }}>
                      <i className={`bi ${level.icon || icon} fs-4`}></i>
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
                        to={`${basePath}/${lesson.chapterId}/${lesson.slug || lesson.id}`}
                        className="list-group-item list-group-item-action p-3 px-4 d-flex align-items-center justify-content-between border-start-0 border-end-0"
                        style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}
                      >
                        <div className="d-flex align-items-center gap-3">
                          <span className="badge rounded-pill bg-opacity-10 border px-2.5 py-1.5 fw-semibold" style={{ fontSize: '0.8rem', backgroundColor: `${themeColor}15`, color: themeColor, borderColor: `${themeColor}40` }}>
                            {lesson.order || 'Lesson'}
                          </span>
                          <div>
                            <h6 className="fw-bold mb-0" style={{ color: 'var(--heading-color)' }}>{lesson.title}</h6>
                            {lesson.summary && <p className="text-muted small mb-0 mt-0.5">{lesson.summary}</p>}
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

import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { sqlCurriculum, getAllSqlLessons } from '../../data/sql-tutorial';

export default function SqlGuideHome() {
  const [searchQuery, setSearchQuery] = useState('');
  const allLessons = useMemo(() => getAllSqlLessons(), []);

  const filteredCurriculum = useMemo(() => {
    if (!searchQuery.trim()) return sqlCurriculum;
    const q = searchQuery.toLowerCase();
    return sqlCurriculum.map(level => ({
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
        <title>SQL & Microsoft SQL Server Learning Guide - Zero to Architect Course | VinnerTECH</title>
        <meta name="description" content="Master SQL and Microsoft SQL Server (T-SQL) from absolute beginner to database architect: Tables, Constraints, CRUD, Joins, Window Functions, Stored Procedures, Transactions, Indexing, and full CRUD database projects." />
      </Helmet>

      {/* Hero Header */}
      <div className="py-5 text-white" style={{ background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)' }}>
        <div className="container py-4">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill bg-white bg-opacity-20 text-white small fw-bold mb-3">
                <i className="bi bi-database-fill-gear"></i>
                <span>SQL + Microsoft SQL Server Complete Guide</span>
              </div>
              <h1 className="display-4 fw-bolder mb-3">SQL Server Master Guide</h1>
              <p className="lead mb-4 text-white-50" style={{ maxWidth: '680px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                Master relational database architecture and T-SQL from zero database knowledge to database architect: Schema Design, CRUD, Multi-Table Joins, CTEs, Window Functions, Stored Procedures, ACID Transactions, and Index Performance Tuning in baby steps.
              </p>
              
              <div className="d-flex flex-wrap gap-3">
                {firstLesson && (
                  <Link 
                    to={`/tutorial/sql/${firstLesson.chapterId}/${firstLesson.slug || firstLesson.id}`}
                    className="btn btn-light btn-lg rounded-pill px-4 fw-bold text-warning shadow-sm d-flex align-items-center gap-2"
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
                <i className="bi bi-database-fill display-1 text-white opacity-75"></i>
                <h4 className="fw-bold mt-3 text-white">Enterprise Ready</h4>
                <p className="text-white-50 small mb-0">From basic queries to transaction isolation, execution plans, and production database design.</p>
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
                placeholder="Search SQL lessons, joins, indexes, stored procedures..."
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
                    <div className="rounded-3 p-3 text-white d-flex align-items-center justify-content-center shadow-sm" style={{ backgroundColor: level.color || '#d97706', width: '48px', height: '48px' }}>
                      <i className={`bi ${level.icon || 'bi-database-fill'} fs-4`}></i>
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
                        to={`/tutorial/sql/${lesson.chapterId}/${lesson.slug || lesson.id}`}
                        className="list-group-item list-group-item-action p-3 px-4 d-flex align-items-center justify-content-between border-start-0 border-end-0"
                        style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}
                      >
                        <div className="d-flex align-items-center gap-3">
                          <span className="badge rounded-pill bg-warning bg-opacity-10 text-dark border border-warning border-opacity-25 px-2.5 py-1.5 fw-semibold" style={{ fontSize: '0.8rem' }}>
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

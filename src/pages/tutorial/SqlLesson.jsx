import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { sqlCurriculum, getSqlLessonByParams, getAllSqlLessons } from '../../data/sql-tutorial';
import LessonLayout from '../../components/tutorial/LessonLayout';
import AlertBox from '../../components/tutorial/AlertBox';
import CommandBlock from '../../components/tutorial/CommandBlock';
import StepByStep from '../../components/tutorial/StepByStep';
import QuizComponent from '../../components/tutorial/QuizComponent';
import ExerciseBox from '../../components/tutorial/ExerciseBox';
import MermaidDiagram from '../../components/MermaidDiagram';
import { formatText } from '../../utils/formatText';

export default function SqlLesson() {
  const { chapterId, lessonId } = useParams();

  const lesson = useMemo(() => {
    return getSqlLessonByParams(chapterId, lessonId);
  }, [chapterId, lessonId]);

  const allLessons = useMemo(() => getAllSqlLessons(), []);

  if (!lesson) {
    return (
      <div className="container py-5 text-center">
        <div className="card p-5 mx-auto rounded-4 shadow-sm border" style={{ maxWidth: '540px', backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
          <i className="bi bi-file-earmark-x display-1 text-warning mb-3"></i>
          <h2 className="fw-bold mb-2">Module Not Found</h2>
          <p className="text-muted mb-4">The requested SQL tutorial module does not exist or has been moved.</p>
          <Link to="/tutorial/sql" className="btn btn-warning rounded-pill px-4">
            <i className="bi bi-arrow-left me-2"></i> Return to Course Overview
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{lesson.title} - SQL & SQL Server Learning Guide | VinnerTECH</title>
        <meta name="description" content={lesson.summary || lesson.subtitle || `Learn ${lesson.title} in this practical step-by-step SQL Server guide.`} />
      </Helmet>

      <LessonLayout 
        currentLesson={lesson}
        curriculum={sqlCurriculum}
        allLessons={allLessons}
        basePath="/tutorial/sql"
        courseTitle="SQL Server Guide"
        storageKey="vinnertech_sql_progress"
        icon="bi-database-fill"
      >
        {/* 1. Learning Objective */}
        {lesson.goal && (
          <div className="p-4 rounded-3 mb-4 shadow-sm" style={{ backgroundColor: 'var(--bg-color)', borderLeft: '5px solid #d97706' }}>
            <div className="d-flex align-items-center mb-1">
              <i className="bi bi-flag-fill me-2 text-warning"></i>
              <h6 className="fw-bold mb-0 text-warning text-uppercase" style={{ fontSize: '0.8rem', letterSpacing: '0.5px' }}>
                Learning Objective
              </h6>
            </div>
            <p className="mb-0 fw-medium" style={{ color: 'var(--heading-color)', fontSize: '1.05rem', lineHeight: 1.5 }}>
              {lesson.goal}
            </p>
          </div>
        )}

        {/* 2. Prerequisites */}
        {lesson.prerequisites && lesson.prerequisites.length > 0 && (
          <div className="mb-4">
            <h5 className="fw-bold mb-3 d-flex align-items-center" style={{ color: 'var(--heading-color)' }}>
              <i className="bi bi-check2-square text-success me-2"></i>
              <span>Before You Start</span>
            </h5>
            <div className="p-3 rounded-3" style={{ backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)' }}>
              <ul className="mb-0 ps-3">
                {lesson.prerequisites.map((prereq, idx) => (
                  <li key={idx} className="text-muted small py-1" dangerouslySetInnerHTML={formatText(prereq)} />
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* 3. Core Concept & Mental Model */}
        {lesson.concept && (
          <section className="mb-5">
            <h4 className="fw-bold mb-3 section-heading d-flex align-items-center" style={{ color: 'var(--heading-color)' }}>
              <i className="bi bi-lightbulb-fill text-warning me-2"></i>
              <span>Core Concept & Mental Model</span>
            </h4>
            <div className="concept-text text-muted" style={{ lineHeight: 1.7, fontSize: '1rem' }} dangerouslySetInnerHTML={formatText(lesson.concept)} />
          </section>
        )}

        {/* 4. Visual Diagram */}
        {lesson.diagram && (
          <section className="mb-5">
            <h5 className="fw-bold mb-2 text-info d-flex align-items-center">
              <i className="bi bi-diagram-3-fill me-2"></i>
              <span>Visual Relational Flow</span>
            </h5>
            <div className="p-3 rounded-3 border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
              <MermaidDiagram chart={lesson.diagram} />
            </div>
          </section>
        )}

        {/* 5. Step-by-Step Instructions */}
        {lesson.steps && lesson.steps.length > 0 && (
          <section className="mb-5">
            <h4 className="fw-bold mb-4 section-heading d-flex align-items-center" style={{ color: 'var(--heading-color)' }}>
              <i className="bi bi-terminal-fill text-warning me-2"></i>
              <span>Step-by-Step SQL Queries</span>
            </h4>
            <StepByStep steps={lesson.steps} />
          </section>
        )}

        {/* 6. Verification & Expected Result */}
        {(lesson.verification || lesson.expectedResult) && (
          <section className="mb-5">
            <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
              <div className="card-header bg-success bg-opacity-10 text-success fw-bold d-flex align-items-center">
                <i className="bi bi-check-circle-fill me-2"></i>
                <span>Verification & Expected Output</span>
              </div>
              <div className="card-body p-4" style={{ backgroundColor: 'var(--card-bg)' }}>
                {lesson.verification && (
                  <div className="mb-3">
                    <strong className="d-block mb-1 text-dark">How to Verify:</strong>
                    <div className="text-muted small" dangerouslySetInnerHTML={formatText(lesson.verification)} />
                  </div>
                )}
                {lesson.expectedResult && (
                  <div>
                    <strong className="d-block mb-1 text-dark">Expected Result:</strong>
                    <div className="text-muted small" dangerouslySetInnerHTML={formatText(lesson.expectedResult)} />
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* 7. Common Mistakes & Troubleshooting */}
        {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
          <section className="mb-5">
            <h5 className="fw-bold mb-3 text-danger d-flex align-items-center">
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              <span>Common Beginner Mistakes & Fixes</span>
            </h5>
            <div className="row g-3">
              {lesson.commonMistakes.map((mistake, idx) => (
                <div key={idx} className="col-12">
                  <div className="p-3 rounded-3 border-start border-4 border-danger shadow-sm" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)', borderLeftWidth: '4px' }}>
                    <h6 className="fw-bold text-danger mb-1">{mistake.problem}</h6>
                    <p className="text-muted small mb-2">{mistake.why}</p>
                    <div className="bg-light p-2 rounded small font-monospace text-dark border">
                      <strong>Fix:</strong> {mistake.fix}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 8. Interactive Exercise */}
        {lesson.exercise && (
          <section className="mb-5">
            <ExerciseBox exercise={lesson.exercise} />
          </section>
        )}

        {/* 9. Knowledge Check Quiz */}
        {lesson.quiz && (
          <section className="mb-5">
            <QuizComponent quiz={lesson.quiz} />
          </section>
        )}

        {/* 10. Summary */}
        {lesson.summary && (
          <div className="p-4 rounded-3 shadow-sm text-center" style={{ backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)' }}>
            <h6 className="fw-bold text-uppercase mb-2 text-warning" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>
              Lesson Takeaway
            </h6>
            <p className="mb-0 lead text-muted" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
              {lesson.summary}
            </p>
          </div>
        )}
      </LessonLayout>
    </>
  );
}

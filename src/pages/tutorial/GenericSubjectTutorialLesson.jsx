import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import LessonLayout from '../../components/tutorial/LessonLayout';
import AlertBox from '../../components/tutorial/AlertBox';
import CommandBlock from '../../components/tutorial/CommandBlock';
import StepByStep from '../../components/tutorial/StepByStep';
import QuizComponent from '../../components/tutorial/QuizComponent';
import ExerciseBox from '../../components/tutorial/ExerciseBox';
import MermaidDiagram from '../../components/MermaidDiagram';
import { formatText } from '../../utils/formatText';

export default function GenericSubjectTutorialLesson({ 
  curriculum, 
  getAllLessonsFn, 
  getLessonByParamsFn, 
  basePath, 
  courseTitle, 
  storageKey, 
  icon = 'bi-book-half', 
  themeColor = '#9B4F96' 
}) {
  const { chapterId, lessonId } = useParams();

  const lesson = useMemo(() => {
    return getLessonByParamsFn(chapterId, lessonId);
  }, [chapterId, lessonId, getLessonByParamsFn]);

  const allLessons = useMemo(() => getAllLessonsFn(), [getAllLessonsFn]);

  if (!lesson) {
    return (
      <div className="container py-5 text-center">
        <div className="card p-5 mx-auto rounded-4 shadow-sm border" style={{ maxWidth: '540px', backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
          <i className={`bi ${icon} display-1 mb-3`} style={{ color: themeColor }}></i>
          <h2 className="fw-bold mb-2">Lesson Module Not Found</h2>
          <p className="text-muted mb-4">The requested {courseTitle} module does not exist or has been relocated.</p>
          <Link to={basePath} className="btn rounded-pill px-4 text-white" style={{ backgroundColor: themeColor }}>
            <i className="bi bi-arrow-left me-2"></i> Return to Course Overview
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{lesson.title} - {courseTitle} | VinnerTECH</title>
        <meta name="description" content={lesson.summary || lesson.subtitle || `Learn ${lesson.title} in this practical step-by-step ${courseTitle}.`} />
      </Helmet>

      <LessonLayout 
        currentLesson={lesson}
        curriculum={curriculum}
        allLessons={allLessons}
        basePath={basePath}
        courseTitle={courseTitle}
        storageKey={storageKey}
        icon={icon}
      >
        {/* 1. Learning Objective */}
        {lesson.goal && (
          <div className="p-4 rounded-3 mb-4 shadow-sm" style={{ backgroundColor: 'var(--bg-color)', borderLeft: `5px solid ${themeColor}` }}>
            <div className="d-flex align-items-center mb-1">
              <i className="bi bi-flag-fill me-2" style={{ color: themeColor }}></i>
              <h6 className="fw-bold mb-0 text-uppercase" style={{ fontSize: '0.8rem', letterSpacing: '0.5px', color: themeColor }}>
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
            <div className="concept-text text-muted" style={{ lineHeight: 1.85, fontSize: '1.05rem' }} dangerouslySetInnerHTML={formatText(lesson.concept)} />
          </section>
        )}

        {/* 4. Visual Architecture Diagram */}
        {lesson.diagram && (
          <section className="mb-5">
            <h5 className="fw-bold mb-2 text-info d-flex align-items-center">
              <i className="bi bi-diagram-3-fill me-2"></i>
              <span>Visual Architecture Flow</span>
            </h5>
            <div className="p-3 rounded-3 border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
              <MermaidDiagram chart={lesson.diagram} />
            </div>
          </section>
        )}

        {/* 5. Code Example */}
        {lesson.code && (
          <section className="mb-5">
            <h5 className="fw-bold mb-2 d-flex align-items-center" style={{ color: 'var(--heading-color)' }}>
              <i className="bi bi-code-square text-primary me-2"></i>
              <span>Code Example</span>
            </h5>
            <div className="code-block-wrapper rounded-3 overflow-hidden shadow-sm border border-secondary border-opacity-25" style={{ backgroundColor: '#0f172a' }}>
              <div className="px-3 py-2 bg-dark text-white-50 small d-flex justify-content-between align-items-center border-bottom border-secondary border-opacity-50">
                <span className="fw-bold text-info" style={{ letterSpacing: '0.5px', fontSize: '0.8rem' }}>
                  <i className="bi bi-terminal-fill me-1"></i> {lesson.language ? lesson.language.toUpperCase() : 'CODE'}
                </span>
              </div>
              <pre className="m-0 p-3 text-light overflow-auto" style={{ fontFamily: "'Fira Code', Consolas, monospace", fontSize: '0.92rem', lineHeight: 1.6 }}>
                <code>{lesson.code}</code>
              </pre>
            </div>
          </section>
        )}

        {/* 6. Step-by-Step Instructions */}
        {lesson.steps && lesson.steps.length > 0 && (
          <section className="mb-5">
            <h4 className="fw-bold mb-4 section-heading d-flex align-items-center" style={{ color: 'var(--heading-color)' }}>
              <i className="bi bi-terminal-fill me-2" style={{ color: themeColor }}></i>
              <span>Step-by-Step Implementation</span>
            </h4>
            <StepByStep steps={lesson.steps} />
          </section>
        )}

        {/* 7. Verification & Expected Result */}
        {(lesson.verification || lesson.expectedResult || lesson.example) && (
          <section className="mb-5">
            <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
              <div className="card-header bg-success bg-opacity-10 text-success fw-bold d-flex align-items-center">
                <i className="bi bi-check-circle-fill me-2"></i>
                <span>Verification & Real-world Example</span>
              </div>
              <div className="card-body p-4" style={{ backgroundColor: 'var(--card-bg)' }}>
                {lesson.verification && (
                  <div className="mb-3">
                    <strong className="d-block mb-1 text-dark">How to Verify:</strong>
                    <div className="text-muted small" dangerouslySetInnerHTML={formatText(lesson.verification)} />
                  </div>
                )}
                {lesson.example && (
                  <div className="mb-3">
                    <strong className="d-block mb-1 text-dark">Real-world Application:</strong>
                    <div className="text-muted small" dangerouslySetInnerHTML={formatText(lesson.example)} />
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

        {/* 8. Common Mistakes & Troubleshooting */}
        {lesson.mistake && (
          <section className="mb-5">
            <div className="alert alert-danger p-4 rounded-3 border-start border-4 border-danger shadow-sm mb-0">
              <h6 className="fw-bold mb-1"><i className="bi bi-exclamation-triangle-fill me-2"></i>Common Mistake & Trap</h6>
              <div className="small" dangerouslySetInnerHTML={formatText(lesson.mistake)}></div>
            </div>
          </section>
        )}

        {/* 9. Tip */}
        {lesson.tip && (
          <section className="mb-5">
            <div className="alert alert-info p-4 rounded-3 border-start border-4 border-info shadow-sm mb-0">
              <h6 className="fw-bold mb-1"><i className="bi bi-lightbulb-fill me-2"></i>Pro Developer Tip</h6>
              <div className="small" dangerouslySetInnerHTML={formatText(lesson.tip)}></div>
            </div>
          </section>
        )}

        {/* 10. Summary */}
        {lesson.summary && (
          <div className="p-4 rounded-3 shadow-sm text-center" style={{ backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)' }}>
            <h6 className="fw-bold text-uppercase mb-2" style={{ fontSize: '0.8rem', letterSpacing: '1px', color: themeColor }}>
              Lesson Takeaway
            </h6>
            <p className="mb-0 lead text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.6 }} dangerouslySetInnerHTML={formatText(lesson.summary)} />
          </div>
        )}
      </LessonLayout>
    </>
  );
}

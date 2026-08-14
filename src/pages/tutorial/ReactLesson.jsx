import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { reactCurriculum, getReactLessonByParams, getAllReactLessons } from '../../data/react-tutorial';
import LessonLayout from '../../components/tutorial/LessonLayout';
import AlertBox from '../../components/tutorial/AlertBox';
import CommandBlock from '../../components/tutorial/CommandBlock';
import StepByStep from '../../components/tutorial/StepByStep';
import QuizComponent from '../../components/tutorial/QuizComponent';
import ExerciseBox from '../../components/tutorial/ExerciseBox';
import MermaidDiagram from '../../components/MermaidDiagram';
import { formatText } from '../../utils/formatText';

export default function ReactLesson() {
  const { chapterId, lessonId } = useParams();

  const lesson = useMemo(() => {
    return getReactLessonByParams(chapterId, lessonId);
  }, [chapterId, lessonId]);

  const allLessons = useMemo(() => getAllReactLessons(), []);

  if (!lesson) {
    return (
      <div className="container py-5 text-center">
        <div className="card p-5 mx-auto rounded-4 shadow-sm border" style={{ maxWidth: '540px', backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
          <i className="bi bi-file-earmark-x display-1 text-danger mb-3"></i>
          <h2 className="fw-bold mb-2">Module Not Found</h2>
          <p className="text-muted mb-4">The requested React tutorial module does not exist or has been moved.</p>
          <Link to="/tutorial/react" className="btn btn-primary rounded-pill px-4">
            <i className="bi bi-arrow-left me-2"></i> Return to Course Overview
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{lesson.title} - React.js Learning Guide | VinnerTECH</title>
        <meta name="description" content={lesson.summary || lesson.subtitle || `Learn ${lesson.title} in this practical step-by-step React.js guide.`} />
      </Helmet>

      <LessonLayout 
        currentLesson={lesson}
        curriculum={reactCurriculum}
        allLessons={allLessons}
        basePath="/tutorial/react"
        courseTitle="React.js Guide"
        storageKey="vinnertech_react_progress"
        icon="bi-filetype-jsx"
      >
        {/* 1. Learning Objective */}
        {lesson.goal && (
          <div className="p-4 rounded-3 mb-4 shadow-sm" style={{ backgroundColor: 'var(--bg-color)', borderLeft: '5px solid var(--primary-color)' }}>
            <div className="d-flex align-items-center mb-1">
              <i className="bi bi-flag-fill me-2 text-primary"></i>
              <h6 className="fw-bold mb-0 text-primary text-uppercase" style={{ fontSize: '0.8rem', letterSpacing: '0.5px' }}>
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
              <span>Core Concept & Real-World Analogy</span>
            </h4>
            <div className="concept-text text-muted" style={{ lineHeight: 1.7, fontSize: '1rem' }} dangerouslySetInnerHTML={formatText(lesson.concept)} />
          </section>
        )}

        {/* 4. Visual Diagram */}
        {lesson.diagram && (
          <section className="mb-5">
            <h5 className="fw-bold mb-2 text-info d-flex align-items-center">
              <i className="bi bi-diagram-3-fill me-2"></i>
              <span>Visual Architecture & Component Flow</span>
            </h5>
            <MermaidDiagram chart={lesson.diagram} />
          </section>
        )}

        {/* 5. Step-by-Step Implementation */}
        {lesson.steps && lesson.steps.length > 0 && (
          <section className="mb-5">
            <h4 className="fw-bold mb-4 section-heading d-flex align-items-center" style={{ color: 'var(--heading-color)' }}>
              <i className="bi bi-list-ol text-primary me-2"></i>
              <span>Hands-on Step-by-Step Implementation</span>
            </h4>
            <StepByStep steps={lesson.steps} />
          </section>
        )}

        {/* 6. Code Snippet Section (if provided as standalone) */}
        {lesson.codeExample && (
          <section className="mb-5">
            <h5 className="fw-bold mb-3 text-primary d-flex align-items-center">
              <i className="bi bi-code-square me-2"></i>
              <span>{lesson.codeExample.title || 'Complete Runnable Component'}</span>
            </h5>
            <div className="p-3 rounded-3 font-monospace small bg-black bg-opacity-75 text-light border border-secondary border-opacity-25" style={{ whiteSpace: 'pre-wrap' }}>
              <code>{lesson.codeExample.code}</code>
            </div>
            {lesson.codeExample.explanation && (
              <div className="small text-muted mt-2" dangerouslySetInnerHTML={formatText(lesson.codeExample.explanation)} />
            )}
          </section>
        )}

        {/* 7. Verification & Expected Result */}
        {(lesson.verification || lesson.expectedResult) && (
          <section className="mb-5 p-4 rounded-3 border" style={{ backgroundColor: 'var(--bg-color)', borderColor: 'var(--border-color)' }}>
            <h5 className="fw-bold mb-3 text-success d-flex align-items-center">
              <i className="bi bi-patch-check-fill me-2"></i>
              <span>How to Verify & Expected Behavior</span>
            </h5>

            {lesson.verification && (
              <div className="mb-3">
                <strong className="d-block small text-uppercase text-muted mb-1">Verification Step:</strong>
                <div className="text-muted small" dangerouslySetInnerHTML={formatText(lesson.verification)} />
              </div>
            )}

            {lesson.expectedResult && (
              <div>
                <strong className="d-block small text-uppercase text-muted mb-1">Expected Output in Browser / Console:</strong>
                <div className="p-3 rounded font-monospace small bg-black bg-opacity-75 text-light border border-secondary border-opacity-25" style={{ whiteSpace: 'pre-wrap' }}>
                  {lesson.expectedResult}
                </div>
              </div>
            )}
          </section>
        )}

        {/* 8. Warnings / Anti-patterns */}
        {lesson.warning && (
          <AlertBox 
            type={lesson.warning.isDanger ? 'danger' : 'warning'} 
            title={lesson.warning.title || 'Important Precaution'} 
            content={lesson.warning.message} 
          />
        )}

        {/* 9. Common Beginner Mistakes & Fixes */}
        {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
          <section className="mb-5">
            <h4 className="fw-bold mb-3 section-heading d-flex align-items-center" style={{ color: 'var(--heading-color)' }}>
              <i className="bi bi-exclamation-octagon-fill text-danger me-2"></i>
              <span>Common Pitfalls & How to Avoid Them</span>
            </h4>
            <div className="d-flex flex-column gap-3">
              {lesson.commonMistakes.map((mistake, idx) => (
                <div key={idx} className="p-3 rounded-3 border border-danger border-opacity-25 bg-danger bg-opacity-10">
                  <h6 className="fw-bold text-danger mb-1">
                    <i className="bi bi-x-circle me-1"></i> Problem: {mistake.problem}
                  </h6>
                  <p className="small text-muted mb-2">
                    <strong>Why it happens:</strong> {mistake.why}
                  </p>
                  <div className="small text-success">
                    <strong><i className="bi bi-check2 me-1"></i> Correct Solution:</strong>
                    <div className="mt-1" dangerouslySetInnerHTML={formatText(mistake.fix)} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 10. Real-World Production Scenario */}
        {lesson.realWorldScenario && (
          <section className="mb-5 p-4 rounded-3 border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
            <h5 className="fw-bold mb-2 text-primary d-flex align-items-center">
              <i className="bi bi-buildings-fill me-2"></i>
              <span>Real-World Production Scenario</span>
            </h5>
            <div className="text-muted small" style={{ lineHeight: 1.6 }} dangerouslySetInnerHTML={formatText(lesson.realWorldScenario)} />
          </section>
        )}

        {/* 11. Practical Exercises & Challenges */}
        {lesson.practice && (
          <section className="mb-4">
            <ExerciseBox 
              type="practice"
              title={lesson.practice.title || 'Try It Yourself'}
              task={lesson.practice.task}
              hint={lesson.practice.hint}
              solution={lesson.practice.solution}
              expectedOutcome={lesson.practice.expectedOutcome}
            />
          </section>
        )}

        {lesson.challenge && (
          <section className="mb-4">
            <ExerciseBox 
              type="challenge"
              title={lesson.challenge.title || 'Developer Challenge'}
              task={lesson.challenge.task}
              hint={lesson.challenge.hint}
              solution={lesson.challenge.solution}
              expectedOutcome={lesson.challenge.expectedOutcome}
            />
          </section>
        )}

        {/* 12. Knowledge Check Quiz */}
        {lesson.quiz && (
          <section className="mb-4">
            <QuizComponent quiz={lesson.quiz} />
          </section>
        )}

        {/* 13. Summary */}
        {lesson.summary && (
          <AlertBox type="important" title="Key Takeaways" content={lesson.summary} />
        )}
      </LessonLayout>
    </>
  );
}

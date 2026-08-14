import React, { useState } from 'react';
import { formatText } from '../../utils/formatText';
import CommandBlock from './CommandBlock';

export default function ExerciseBox({ 
  type = 'practice', // 'practice' | 'challenge'
  title, 
  task, 
  hint, 
  solution, 
  expectedOutcome 
}) {
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const isChallenge = type === 'challenge';

  return (
    <div className={`exercise-card my-4 p-4 rounded-3 shadow-sm border ${isChallenge ? 'border-warning border-opacity-50' : 'border-primary border-opacity-25'}`} style={{ backgroundColor: 'var(--card-bg)' }}>
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="d-flex align-items-center gap-2">
          <span className={`badge ${isChallenge ? 'bg-warning text-dark' : 'bg-primary text-white'} rounded-pill px-3 py-1`}>
            <i className={`bi ${isChallenge ? 'bi-trophy-fill' : 'bi-code-slash'} me-1`}></i>
            {isChallenge ? 'Hands-on Challenge' : 'Try It Yourself'}
          </span>
          <h6 className="fw-bold mb-0" style={{ color: 'var(--heading-color)' }}>
            {title}
          </h6>
        </div>
      </div>

      {/* Task Description */}
      <div className="mb-3" style={{ color: 'var(--text-color)', lineHeight: 1.6 }} dangerouslySetInnerHTML={formatText(task)} />

      {/* Expected Outcome */}
      {expectedOutcome && (
        <div className="p-3 rounded-2 mb-3" style={{ backgroundColor: 'var(--bg-color)', border: '1px dashed var(--border-color)' }}>
          <div className="text-uppercase fw-bold small text-muted mb-1" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>
            <i className="bi bi-bullseye me-1 text-success"></i> Expected Outcome:
          </div>
          <div className="small text-muted" dangerouslySetInnerHTML={formatText(expectedOutcome)} />
        </div>
      )}

      {/* Action Buttons */}
      <div className="d-flex flex-wrap gap-2 pt-2 border-top" style={{ borderColor: 'var(--border-color)' }}>
        {hint && (
          <button 
            onClick={() => setShowHint(!showHint)} 
            className="btn btn-sm btn-outline-secondary rounded-pill"
          >
            <i className={`bi ${showHint ? 'bi-eye-slash' : 'bi-lightbulb'} me-1`}></i>
            {showHint ? 'Hide Hint' : 'Need a Hint?'}
          </button>
        )}

        {solution && (
          <button 
            onClick={() => setShowSolution(!showSolution)} 
            className="btn btn-sm btn-outline-success rounded-pill"
          >
            <i className={`bi ${showSolution ? 'bi-chevron-up' : 'bi-check2-circle'} me-1`}></i>
            {showSolution ? 'Hide Solution' : 'Reveal Solution'}
          </button>
        )}
      </div>

      {/* Collapsible Hint */}
      {showHint && hint && (
        <div className="alert alert-secondary mt-3 mb-0 p-3 rounded-2 small fade-in" style={{ backgroundColor: 'var(--bg-color)', borderLeft: '4px solid #6c757d' }}>
          <strong className="d-block mb-1 text-primary"><i className="bi bi-info-circle me-1"></i> Hint:</strong>
          <div dangerouslySetInnerHTML={formatText(hint)} />
        </div>
      )}

      {/* Collapsible Solution */}
      {showSolution && solution && (
        <div className="mt-3 p-3 rounded-2 border border-success border-opacity-25 bg-success bg-opacity-10 fade-in">
          <strong className="d-block mb-2 text-success"><i className="bi bi-check2-all me-1"></i> Step-by-Step Solution:</strong>
          {solution.explanation && (
            <div className="small text-muted mb-2" dangerouslySetInnerHTML={formatText(solution.explanation)} />
          )}
          {solution.command && (
            <CommandBlock command={solution.command} output={solution.output} />
          )}
        </div>
      )}
    </div>
  );
}

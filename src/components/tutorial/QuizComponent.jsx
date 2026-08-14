import React, { useState, useEffect } from 'react';
import { formatText } from '../../utils/formatText';

export default function QuizComponent({ quiz }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Automatically reset quiz state whenever the quiz/lesson changes
  useEffect(() => {
    setSelectedOption(null);
    setHasSubmitted(false);
  }, [quiz?.question]);

  if (!quiz || !quiz.question) return null;

  const handleSelect = (index) => {
    if (hasSubmitted) return;
    setSelectedOption(index);
    setHasSubmitted(true);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setHasSubmitted(false);
  };

  const isCorrect = selectedOption === quiz.correctIndex;

  return (
    <div className="quiz-card p-4 p-md-4 rounded-4 my-4 shadow-sm border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom" style={{ borderColor: 'var(--border-color)' }}>
        <div className="d-flex align-items-center gap-2">
          <span className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 rounded-pill px-3 py-1 fw-bold">
            <i className="bi bi-patch-question-fill me-1"></i> Knowledge Check
          </span>
          <span className="text-muted small">Test your conceptual understanding</span>
        </div>
        {hasSubmitted && (
          <button 
            onClick={handleReset} 
            className="btn btn-sm btn-outline-secondary rounded-pill px-3 py-1 d-flex align-items-center gap-1"
            style={{ fontSize: '0.8rem' }}
          >
            <i className="bi bi-arrow-counterclockwise"></i>
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Question */}
      <h5 className="fw-bolder mb-3" style={{ color: 'var(--heading-color)', lineHeight: 1.5, fontSize: '1.1rem' }}>
        {quiz.question}
      </h5>

      {/* Options List */}
      <div className="d-flex flex-column gap-2 mb-3">
        {quiz.options.map((option, index) => {
          let btnBorderColor = 'var(--border-color)';
          let btnBg = 'var(--bg-color)';
          let textColor = 'var(--heading-color)';
          let fontWeight = '500';
          let badgeBg = 'var(--card-bg)';
          let badgeText = 'var(--heading-color)';
          let badgeBorder = 'var(--border-color)';

          if (hasSubmitted) {
            if (index === quiz.correctIndex) {
              btnBorderColor = '#198754';
              btnBg = '#d1e7dd';
              textColor = '#0f5132';
              fontWeight = '700';
              badgeBg = '#198754';
              badgeText = '#ffffff';
              badgeBorder = '#198754';
            } else if (index === selectedOption) {
              btnBorderColor = '#dc3545';
              btnBg = '#f8d7da';
              textColor = '#842029';
              badgeBg = '#dc3545';
              badgeText = '#ffffff';
              badgeBorder = '#dc3545';
            } else {
              textColor = 'var(--text-color)';
              btnBg = 'var(--bg-color)';
            }
          }

          return (
            <button
              key={index}
              type="button"
              className="btn text-start p-3 rounded-3 transition d-flex align-items-center justify-content-between border"
              style={{
                backgroundColor: btnBg,
                borderColor: btnBorderColor,
                color: textColor,
                fontSize: '0.95rem',
                fontWeight: fontWeight,
                cursor: hasSubmitted ? 'default' : 'pointer',
                boxShadow: hasSubmitted && index === quiz.correctIndex ? '0 0 0 2px rgba(25, 135, 84, 0.25)' : 'none'
              }}
              onClick={() => handleSelect(index)}
              disabled={hasSubmitted}
            >
              <div className="d-flex align-items-center gap-3 flex-grow-1 pe-2">
                <span 
                  className="rounded-circle border d-flex align-items-center justify-content-center flex-shrink-0 fw-bold" 
                  style={{ 
                    width: '30px', 
                    height: '30px', 
                    fontSize: '0.85rem',
                    backgroundColor: badgeBg,
                    color: badgeText,
                    borderColor: badgeBorder
                  }}
                >
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-grow-1" style={{ lineHeight: 1.4 }}>{option}</span>
              </div>

              {/* Status Icons */}
              {hasSubmitted && index === quiz.correctIndex && (
                <span className="badge bg-success rounded-pill px-2 py-1 flex-shrink-0 d-flex align-items-center gap-1">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Correct</span>
                </span>
              )}
              {hasSubmitted && index === selectedOption && index !== quiz.correctIndex && (
                <span className="badge bg-danger rounded-pill px-2 py-1 flex-shrink-0 d-flex align-items-center gap-1">
                  <i className="bi bi-x-circle-fill"></i>
                  <span>Incorrect</span>
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Answer Explanation Banner */}
      {hasSubmitted && (
        <div 
          className={`alert ${isCorrect ? 'alert-success' : 'alert-warning'} mt-3 mb-0 p-3 rounded-3`}
          style={{ 
            borderLeft: `5px solid ${isCorrect ? '#198754' : '#ffc107'}`,
            backgroundColor: isCorrect ? '#d1e7dd33' : '#fff3cd33'
          }}
        >
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="fw-bold mb-0 d-flex align-items-center gap-2">
              <i className={`bi ${isCorrect ? 'bi-check-circle-fill text-success fs-5' : 'bi-exclamation-triangle-fill text-warning fs-5'}`}></i>
              <span style={{ color: isCorrect ? '#198754' : '#664d03' }}>
                {isCorrect ? 'Well Done! Correct Answer.' : 'Incorrect! Review the explanation below:'}
              </span>
            </h6>
          </div>
          <div 
            className="small text-muted ps-4" 
            style={{ lineHeight: 1.6, fontSize: '0.9rem' }} 
            dangerouslySetInnerHTML={formatText(quiz.explanation)} 
          />
        </div>
      )}
    </div>
  );
}

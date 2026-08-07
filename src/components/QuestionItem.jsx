import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-bash';
import { formatText } from '../utils/formatText';
import MermaidDiagram from './MermaidDiagram';

export default function QuestionItem({ 
  question, 
  isBookmarked = false, 
  isCompleted = false, 
  onToggleBookmark = () => {}, 
  onToggleComplete = () => {},
  quickRevisionMode = false
}) {
  const [copied, setCopied] = useState(false);
  const collapseId = `collapse-${question.id}`;
  const headingId = `heading-${question.id}`;

  const copyCode = () => {
    navigator.clipboard.writeText(question.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={headingId}>
        <button 
          className="accordion-button collapsed" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target={`#${collapseId}`} 
          aria-expanded="false" 
          aria-controls={collapseId}
        >
          <div className="d-flex justify-content-between align-items-center w-100 me-3">
            <span className={isCompleted ? "text-decoration-line-through text-muted" : ""}>
              {question.id}. {question.title}
            </span>
            <div className="d-flex gap-2" onClick={(e) => e.stopPropagation()}>
              <span 
                role="button"
                className={`btn btn-sm ${isBookmarked ? 'text-warning' : 'text-secondary'} p-0 border-0`}
                onClick={(e) => { e.preventDefault(); onToggleBookmark(); }}
                title="Bookmark this question"
              >
                <i className={isBookmarked ? "bi bi-bookmark-fill fs-5" : "bi bi-bookmark fs-5"}></i>
              </span>
              <span 
                role="button"
                className={`btn btn-sm ${isCompleted ? 'text-success' : 'text-secondary'} p-0 border-0`}
                onClick={(e) => { e.preventDefault(); onToggleComplete(); }}
                title="Mark as completed"
              >
                <i className={isCompleted ? "bi bi-check-circle-fill fs-5" : "bi bi-check-circle fs-5"}></i>
              </span>
            </div>
          </div>
        </button>
      </h2>
      <div 
        id={collapseId} 
        className="accordion-collapse collapse" 
        aria-labelledby={headingId}
      >
        <div className="accordion-body">
          
          {quickRevisionMode ? (
            <div className="content-section">
              <h6 className="fw-bold mb-2 text-primary">Quick Answer</h6>
              <p className="mb-3" style={{ lineHeight: 1.6 }} dangerouslySetInnerHTML={formatText(question.summary || question.explanation.substring(0, 150) + "...")}></p>
            </div>
          ) : (
            <>
              <div className="content-section">
                <h6 className="fw-bold mb-2 text-primary">Explanation</h6>
                <p className="mb-3 text-muted" style={{ lineHeight: 1.6 }} dangerouslySetInnerHTML={formatText(question.explanation)}></p>
              </div>

              {question.diagram && (
                <div className="content-section mb-4">
                  <h6 className="fw-bold mb-2 text-info">Visual Concept</h6>
                  <MermaidDiagram chart={question.diagram} />
                </div>
              )}

          {question.example && (
            <div className="content-section">
              <h6 className="fw-bold mb-2 text-success">Real-world Example</h6>
              <p className="mb-3 text-muted" style={{ lineHeight: 1.6 }} dangerouslySetInnerHTML={formatText(question.example)}></p>
            </div>
          )}

          {question.code && (
            <div className="content-section mb-3">
              <h6 className="fw-bold mb-2">Code Example</h6>
              <div className="code-container position-relative rounded overflow-hidden shadow-sm">
                <button 
                  className="btn btn-sm btn-outline-light position-absolute" 
                  onClick={copyCode}
                  style={{ top: '10px', right: '10px', zIndex: 10, background: 'rgba(255,255,255,0.1)' }}
                >
                  <i className={copied ? "bi bi-check2" : "bi bi-clipboard"}></i> {copied ? 'Copied' : 'Copy'}
                </button>
                <pre className={`language-${question.language || 'csharp'} m-0 p-3`} style={{ borderRadius: '6px', fontSize: '0.9rem' }}>
                  <code>{question.code}</code>
                </pre>
              </div>
            </div>
          )}

          {question.tip && (
            <div className="alert alert-info mt-3 mb-2" style={{ borderLeft: '4px solid #0dcaf0' }}>
              <h6 className="fw-bold mb-1"><i className="bi bi-lightbulb-fill me-2"></i>Interview Tip</h6>
              <div className="small" dangerouslySetInnerHTML={formatText(question.tip)}></div>
            </div>
          )}

          {question.mistake && (
            <div className="alert alert-danger mb-2" style={{ borderLeft: '4px solid #dc3545' }}>
              <h6 className="fw-bold mb-1"><i className="bi bi-exclamation-triangle-fill me-2"></i>Common Mistake</h6>
              <div className="small" dangerouslySetInnerHTML={formatText(question.mistake)}></div>
            </div>
          )}

          {question.summary && (
            <div className="alert alert-success mb-0" style={{ borderLeft: '4px solid #198754' }}>
              <h6 className="fw-bold mb-1"><i className="bi bi-check2-circle me-2"></i>Summary</h6>
              <div className="small" dangerouslySetInnerHTML={formatText(question.summary)}></div>
            </div>
          )}
            </>
          )}

        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { formatText } from '../utils/formatText';

export default function QuestionItem({ question }) {
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
          {question.id}. {question.title}
        </button>
      </h2>
      <div 
        id={collapseId} 
        className="accordion-collapse collapse" 
        aria-labelledby={headingId}
      >
        <div className="accordion-body">
          
          <div className="content-section">
            <h6 className="fw-bold mb-2 text-primary">Explanation</h6>
            <p className="mb-3 text-muted" style={{ lineHeight: 1.6 }} dangerouslySetInnerHTML={formatText(question.explanation)}></p>
          </div>

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

        </div>
      </div>
    </div>
  );
}

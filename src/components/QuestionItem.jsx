import React, { useState } from 'react';
import { formatText } from '../utils/formatText';

export default function QuestionItem({ question, isAllExpanded }) {
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
          className={`accordion-button ${isAllExpanded ? '' : 'collapsed'}`} 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target={`#${collapseId}`} 
          aria-expanded={isAllExpanded ? "true" : "false"} 
          aria-controls={collapseId}
        >
          Question {question.id}: {question.title}
        </button>
      </h2>
      <div 
        id={collapseId} 
        className={`accordion-collapse collapse ${isAllExpanded ? 'show' : ''}`} 
        aria-labelledby={headingId}
      >
        <div className="accordion-body">
          
          <div className="content-section">
            <div className="section-title"><i className="bi bi-book"></i> 1. Explanation</div>
            <p className="mb-0" style={{ lineHeight: 1.7 }} dangerouslySetInnerHTML={formatText(question.explanation)}></p>
          </div>

          <div className="content-section mt-3">
            <div className="section-title"><i className="bi bi-building"></i> 2. Real-world Example</div>
            <p className="mb-0" style={{ lineHeight: 1.7 }} dangerouslySetInnerHTML={formatText(question.example)}></p>
          </div>

          <div className="content-section mt-3">
            <div className="section-title"><i className="bi bi-code-slash"></i> 3. Code Example</div>
            <div className="code-container position-relative mt-2 rounded overflow-hidden">
              <button 
                className="btn-copy position-absolute" 
                onClick={copyCode}
                style={{
                  top: '10px',
                  right: '10px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  color: '#fff',
                  borderRadius: '4px',
                  padding: '4px 10px',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  zIndex: 10
                }}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
              <pre className={`language-${question.language || 'csharp'} m-0`} style={{ borderRadius: '6px' }}>
                <code>{question.code}</code>
              </pre>
            </div>
          </div>

          <div className="content-section tip-box mt-3" style={{ backgroundColor: 'rgba(13, 110, 253, 0.1)', borderLeft: '4px solid #0d6efd', padding: '1rem', borderRadius: '4px' }}>
            <div className="section-title"><i className="bi bi-lightbulb-fill"></i> 4. Interview Tip</div>
            <div style={{ lineHeight: 1.6 }} dangerouslySetInnerHTML={formatText(question.tip)}></div>
          </div>

          <div className="content-section mistake-box mt-3" style={{ backgroundColor: 'rgba(220, 53, 69, 0.1)', borderLeft: '4px solid #dc3545', padding: '1rem', borderRadius: '4px' }}>
            <div className="section-title"><i className="bi bi-exclamation-triangle-fill"></i> 5. Common Mistakes</div>
            <div style={{ lineHeight: 1.6 }} dangerouslySetInnerHTML={formatText(question.mistake)}></div>
          </div>

          <div className="content-section summary-box mt-3" style={{ backgroundColor: 'rgba(25, 135, 84, 0.1)', borderLeft: '4px solid #198754', padding: '1rem', borderRadius: '4px' }}>
            <div className="section-title"><i className="bi bi-check2-circle"></i> 6. Quick Summary</div>
            <div style={{ lineHeight: 1.6 }} dangerouslySetInnerHTML={formatText(question.summary)}></div>
          </div>

        </div>
      </div>
    </div>
  );
}

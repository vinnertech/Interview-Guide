import React from 'react';
import { formatText } from '../../utils/formatText';
import CommandBlock from './CommandBlock';

export default function StepByStep({ steps = [] }) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="step-by-step-container my-4">
      {steps.map((step, index) => (
        <div key={index} className="d-flex position-relative pb-4">
          {/* Vertical connector line */}
          {index < steps.length - 1 && (
            <div 
              className="position-absolute" 
              style={{ 
                left: '18px', 
                top: '36px', 
                bottom: '0', 
                width: '2px', 
                backgroundColor: 'var(--border-color)',
                zIndex: 0
              }} 
            />
          )}

          {/* Step Number Circle */}
          <div 
            className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 fw-bold shadow-sm me-3 position-relative"
            style={{ 
              width: '38px', 
              height: '38px', 
              backgroundColor: 'var(--primary-color)', 
              color: '#ffffff',
              fontSize: '0.95rem',
              zIndex: 1
            }}
          >
            {index + 1}
          </div>

          {/* Step Content */}
          <div className="flex-grow-1 pt-1">
            <h5 className="fw-bold mb-2" style={{ color: 'var(--heading-color)' }}>
              {step.title}
            </h5>
            
            {step.explanation && (
              <div 
                className="text-muted mb-3" 
                style={{ lineHeight: 1.6 }}
                dangerouslySetInnerHTML={formatText(step.explanation)} 
              />
            )}

            {step.command && (
              <CommandBlock 
                command={step.command} 
                description={step.commandDescription}
                breakdown={step.commandBreakdown}
                output={step.output}
                isDangerous={step.isDangerous}
              />
            )}

            {step.details && (
              <div 
                className="small text-muted p-3 rounded my-2" 
                style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
                dangerouslySetInnerHTML={formatText(step.details)} 
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

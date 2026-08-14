import React, { useState } from 'react';

export default function CommandBlock({ 
  command, 
  description, 
  breakdown = [], 
  output = null,
  isDangerous = false 
}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    // Strip out prompt $ if present for copying
    const cleanCommand = command.replace(/^\$\s*/gm, '');
    navigator.clipboard.writeText(cleanCommand).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className={`command-block-container my-3 rounded-3 overflow-hidden shadow-sm border ${isDangerous ? 'border-danger' : 'border-secondary border-opacity-25'}`} style={{ backgroundColor: '#1e1e2e' }}>
      {/* Header bar */}
      <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom border-dark" style={{ backgroundColor: '#181825', fontSize: '0.85rem' }}>
        <div className="d-flex align-items-center gap-2">
          <span className="badge rounded-pill bg-dark text-light border border-secondary border-opacity-50">
            <i className="bi bi-terminal-fill me-1 text-warning"></i> Terminal / Bash
          </span>
          {isDangerous && (
            <span className="badge bg-danger">
              <i className="bi bi-exclamation-triangle-fill me-1"></i> Destructive Command
            </span>
          )}
        </div>
        <button 
          onClick={copyToClipboard}
          className="btn btn-sm btn-outline-light border-0 py-1 px-2 d-flex align-items-center gap-1"
          style={{ fontSize: '0.8rem', backgroundColor: 'rgba(255,255,255,0.08)' }}
          title="Copy command"
        >
          <i className={`bi ${copied ? 'bi-check2 text-success' : 'bi-clipboard'}`}></i>
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>

      {/* Code body */}
      <div className="p-3 position-relative">
        <pre className="m-0 text-light font-monospace" style={{ fontSize: '0.92rem', lineHeight: '1.5', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
          <code>{command}</code>
        </pre>
      </div>

      {/* Optional Output Block */}
      {output && (
        <div className="px-3 pb-3">
          <div className="p-2 rounded bg-black bg-opacity-50 text-secondary font-monospace small border border-secondary border-opacity-25">
            <div className="text-uppercase text-muted fw-bold mb-1" style={{ fontSize: '0.7rem', letterSpacing: '0.5px' }}>
              <i className="bi bi-display me-1"></i> Example Output (May vary by environment):
            </div>
            <pre className="m-0 text-secondary" style={{ fontSize: '0.82rem', whiteSpace: 'pre-wrap' }}>
              {output}
            </pre>
          </div>
        </div>
      )}

      {/* Optional Breakdown / Description */}
      {(description || (breakdown && breakdown.length > 0)) && (
        <div className="p-3 border-top border-dark" style={{ backgroundColor: '#181825', fontSize: '0.85rem' }}>
          {description && <p className="mb-2 text-light text-opacity-75">{description}</p>}
          {breakdown && breakdown.length > 0 && (
            <div className="table-responsive">
              <table className="table table-dark table-sm table-borderless mb-0" style={{ backgroundColor: 'transparent', fontSize: '0.82rem' }}>
                <tbody>
                  {breakdown.map((item, idx) => (
                    <tr key={idx}>
                      <td className="font-monospace text-warning pe-3" style={{ width: '1%', whiteSpace: 'nowrap' }}>
                        <code>{item.part}</code>
                      </td>
                      <td className="text-light text-opacity-75">{item.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

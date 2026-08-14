import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

export default function MermaidDiagram({ chart }) {
  const containerRef = useRef(null);
  const [svgContent, setSvgContent] = useState('');
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    // Detect dark mode
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark' || 
                   document.documentElement.getAttribute('data-bs-theme') === 'dark';

    mermaid.initialize({
      startOnLoad: false,
      theme: isDark ? 'dark' : 'default',
      securityLevel: 'loose',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      themeVariables: {
        fontSize: '14px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        darkMode: isDark,
        background: 'transparent',
        mainBkg: isDark ? '#1e293b' : '#ffffff',
        nodeBorder: isDark ? '#38bdf8' : '#0284c7',
        nodeTextColor: isDark ? '#f8fafc' : '#0f172a',
        primaryColor: isDark ? '#1e293b' : '#eff6ff',
        primaryTextColor: isDark ? '#f8fafc' : '#0f172a',
        primaryBorderColor: isDark ? '#38bdf8' : '#3b82f6',
        lineColor: isDark ? '#93c5fd' : '#2563eb',
        textColor: isDark ? '#f8fafc' : '#0f172a'
      },
      flowchart: {
        htmlLabels: false, // Prevents foreignObject clipping bugs across browsers
        curve: 'basis',
        padding: 20,
        useMaxWidth: false
      }
    });

    if (chart) {
      const renderDiagram = async () => {
        try {
          const uniqueId = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
          const { svg } = await mermaid.render(uniqueId, chart.trim());
          setSvgContent(svg);
        } catch (error) {
          console.error("Mermaid rendering failed:", error);
          // Fallback diagram display if complex chart syntax encounters parsing issue
          setSvgContent(`<div class="p-3 bg-dark text-warning small font-monospace rounded border border-warning">
            <div class="fw-bold mb-1"><i class="bi bi-info-circle me-1"></i>Diagram Structure:</div>
            <pre class="m-0 text-light" style="white-space: pre-wrap;">${chart.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
          </div>`);
        }
      };
      
      renderDiagram();
    }
  }, [chart]);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 2.5));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));
  const handleResetZoom = () => setZoom(1);

  return (
    <div className="mermaid-wrapper my-4 rounded-4 shadow-sm border overflow-hidden" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
      {/* Diagram Header / Toolbar */}
      <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom small text-muted" style={{ backgroundColor: 'var(--bg-color)', borderColor: 'var(--border-color)' }}>
        <div className="d-flex align-items-center gap-2 fw-semibold">
          <i className="bi bi-diagram-3-fill text-primary fs-6"></i>
          <span style={{ color: 'var(--heading-color)', fontSize: '0.9rem' }}>Visual Architecture Diagram</span>
        </div>
        <div className="d-flex align-items-center gap-1">
          <button 
            type="button" 
            className="btn btn-sm btn-outline-secondary py-0 px-2 rounded" 
            onClick={handleZoomOut}
            title="Zoom Out"
            style={{ fontSize: '0.8rem' }}
          >
            <i className="bi bi-dash"></i>
          </button>
          <button 
            type="button" 
            className="btn btn-sm btn-outline-secondary py-0 px-2 rounded" 
            onClick={handleResetZoom}
            title="Reset Zoom"
            style={{ fontSize: '0.75rem' }}
          >
            {Math.round(zoom * 100)}%
          </button>
          <button 
            type="button" 
            className="btn btn-sm btn-outline-secondary py-0 px-2 rounded" 
            onClick={handleZoomIn}
            title="Zoom In"
            style={{ fontSize: '0.8rem' }}
          >
            <i className="bi bi-plus"></i>
          </button>
        </div>
      </div>

      {/* Diagram Render Container with Zoom & Touch Scrolling */}
      <div 
        className="mermaid-scroll-area p-3 p-md-4 overflow-auto text-center" 
        style={{ 
          minHeight: '200px',
          width: '100%',
          overflowX: 'auto',
          overflowY: 'hidden'
        }}
      >
        <div 
          ref={containerRef}
          className="mermaid-svg-container d-inline-block text-center"
          style={{ 
            transform: `scale(${zoom})`, 
            transformOrigin: 'top center',
            transition: 'transform 0.2s ease-in-out',
            minWidth: '100%'
          }}
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      </div>
    </div>
  );
}

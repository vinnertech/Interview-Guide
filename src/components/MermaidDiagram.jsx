import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

export default function MermaidDiagram({ chart }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize mermaid
    mermaid.initialize({
      startOnLoad: false,
      theme: 'dark',
      securityLevel: 'loose',
      fontFamily: 'inherit'
    });

    if (containerRef.current && chart) {
      const renderDiagram = async () => {
        try {
          containerRef.current.innerHTML = '';
          const { svg } = await mermaid.render(`mermaid-${Math.random().toString(36).substring(7)}`, chart);
          containerRef.current.innerHTML = svg;
        } catch (error) {
          console.error("Mermaid rendering failed:", error);
        }
      };
      
      renderDiagram();
    }
  }, [chart]);

  return (
    <div className="mermaid-container my-4 text-center rounded p-4" style={{ backgroundColor: 'var(--card-bg)' }} ref={containerRef}>
      {/* SVG will be injected here */}
    </div>
  );
}

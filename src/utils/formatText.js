/**
 * Comprehensive Markdown-to-HTML Formatter
 * Converts Markdown headings, tables, lists, code fences, blockquotes, and inline styles into clean, high-contrast HTML.
 */
export function formatText(str) {
  if (!str) return { __html: '' };

  let text = String(str).trim();

  // Normalize escaped double newlines and backslashes if present from string serialization
  text = text.replace(/\\n/g, '\n').replace(/\\t/g, '  ');

  // 1. Process Code Blocks (```lang ... ```)
  text = text.replace(/```([a-zA-Z0-9_\-\.]*)\r?\n([\s\S]*?)```/g, (match, lang, code) => {
    const escapedCode = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .trim();
    const langLabel = lang ? lang.toUpperCase() : 'CODE';
    return `<div class="code-block-wrapper my-3 rounded-3 border overflow-hidden shadow-sm" style="background-color: #0f172a; border-color: var(--border-color);">
      <div class="px-3 py-1.5 bg-dark text-white-50 small d-flex justify-content-between align-items-center border-bottom border-secondary border-opacity-50">
        <span class="fw-bold text-info" style="letter-spacing: 0.5px; font-size: 0.8rem;"><i class="bi bi-code-square me-1"></i>${langLabel}</span>
      </div>
      <pre class="m-0 p-3 text-light overflow-auto" style="font-family: 'Fira Code', Consolas, Monaco, monospace; font-size: 0.9rem; line-height: 1.6;"><code class="language-${lang}">${escapedCode}</code></pre>
    </div>`;
  });

  // 2. Process Markdown Tables (| col1 | col2 |)
  text = text.replace(/((?:^|\n)\|[^\n]+\|\r?\n\|[-:\s|]+\|\r?\n(?:\|[^\n]+\|\r?\n?)+)/g, (match) => {
    const lines = match.trim().split(/\r?\n/).filter(l => l.startsWith('|') && l.endsWith('|'));
    if (lines.length < 3) return match;

    const headers = lines[0].split('|').slice(1, -1).map(h => h.trim());
    const rows = lines.slice(2).map(row => row.split('|').slice(1, -1).map(c => c.trim()));

    const thead = `<thead class="table-dark"><tr>${headers.map(h => `<th class="p-2.5 fw-bold text-nowrap">${formatInline(h)}</th>`).join('')}</tr></thead>`;
    const tbody = `<tbody>${rows.map(r => `<tr>${r.map(c => `<td class="p-2.5">${formatInline(c)}</td>`).join('')}</tr>`).join('')}</tbody>`;

    return `<div class="table-responsive my-4 rounded-3 border shadow-sm" style="border-color: var(--border-color);"><table class="table table-hover table-bordered table-striped mb-0 align-middle" style="background-color: var(--card-bg); color: var(--text-color); font-size: 0.95rem;">${thead}${tbody}</table></div>`;
  });

  // 3. Process Blockquotes (> Quote)
  text = text.replace(/(?:^|\n)>\s*(.*?)(?=\n\n|\n[^\>]|$)/gs, (match, quoteContent) => {
    const cleanContent = quoteContent.split(/\n>\s*/).join(' ').trim();
    return `<blockquote class="p-3 my-3 rounded-3 border-start border-4 border-primary bg-primary bg-opacity-10 shadow-sm" style="color: var(--text-color); font-size: 1rem; line-height: 1.7;">
      <i class="bi bi-info-circle-fill text-primary me-2 fs-5"></i>${formatInline(cleanContent)}
    </blockquote>`;
  });

  // 4. Process Headings (#, ##, ###, ####)
  text = text.replace(/^#### (.*?)$/gm, '<h6 class="fw-bold mt-4 mb-2 text-uppercase text-primary" style="letter-spacing: 0.5px; font-size: 0.9rem;">$1</h6>');
  text = text.replace(/^### (.*?)$/gm, '<h5 class="fw-bold mt-4 mb-3 pb-2 border-bottom d-flex align-items-center gap-2" style="color: var(--heading-color); border-color: var(--border-color); font-size: 1.15rem;"><i class="bi bi-arrow-right-circle-fill text-primary fs-6"></i><span>$1</span></h5>');
  text = text.replace(/^## (.*?)$/gm, '<h4 class="fw-bold mt-5 mb-3 pb-2 border-bottom" style="color: var(--heading-color); border-color: var(--border-color); font-size: 1.35rem;"><i class="bi bi-bookmark-star-fill text-primary me-2 fs-5"></i>$1</h4>');
  text = text.replace(/^# (.*?)$/gm, '<h3 class="fw-bolder mt-5 mb-4" style="color: var(--heading-color); font-size: 1.6rem;">$1</h3>');

  // 5. Process Unordered Lists (- item or * item)
  text = text.replace(/((?:^(?:-|\*)\s+[^\n]+(?:\r?\n|$))+)/gm, (match) => {
    const items = match.trim().split(/\r?\n/).map(l => l.replace(/^(?:-|\*)\s+/, '').trim());
    return `<ul class="my-3 ps-4" style="line-height: 1.8; color: var(--text-color);">${items.map(item => `<li class="mb-2">${formatInline(item)}</li>`).join('')}</ul>`;
  });

  // 6. Process Ordered Lists (1. item)
  text = text.replace(/((?:^\d+\.\s+[^\n]+(?:\r?\n|$))+)/gm, (match) => {
    const items = match.trim().split(/\r?\n/).map(l => l.replace(/^\d+\.\s+/, '').trim());
    return `<ol class="my-3 ps-4" style="line-height: 1.8; color: var(--text-color);">${items.map(item => `<li class="mb-2">${formatInline(item)}</li>`).join('')}</ol>`;
  });

  // 7. Process Paragraphs & Linebreaks
  const paragraphs = text.split(/\n\n+/);
  text = paragraphs.map(p => {
    p = p.trim();
    if (!p) return '';
    // If it's already an HTML block tag (h1-h6, table, ul, ol, blockquote, div), don't wrap in <p>
    if (/^<(?:h[1-6]|div|table|ul|ol|blockquote|pre)/i.test(p)) {
      return formatInline(p);
    }
    // Otherwise format inline and wrap with clear text color
    return `<p class="mb-3" style="line-height: 1.85; color: var(--text-color); font-size: 1.05rem;">${formatInline(p).replace(/\n/g, '<br>')}</p>`;
  }).join('\n');

  return { __html: text };
}

/**
 * Helper to format inline markdown elements (bold, italic, inline code)
 */
function formatInline(str) {
  if (!str) return '';
  return str
    // Bold: **text**
    .replace(/\*\*([\s\S]+?)\*\*/g, '<strong class="fw-bold" style="color: var(--heading-color);">$1</strong>')
    // Italic: *text* or _text_
    .replace(/(?<!\*)\*([^\*]+?)\*(?!\*)/g, '<em style="color: var(--text-color);">$1</em>')
    // Inline Code: `code`
    .replace(/`([^`]+)`/g, '<code class="px-2 py-0.5 rounded bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 fw-semibold font-monospace" style="font-size: 0.92em;">$1</code>');
}

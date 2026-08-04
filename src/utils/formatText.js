export function formatText(str) {
  if (!str) return { __html: '' };
  
  let formatted = str;
  // Escape HTML first
  formatted = formatted
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
      
  // Bold: **text**
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Inline Code: `text`
  formatted = formatted.replace(/`([^`]+)`/g, '<code class="px-1 bg-light rounded text-dark border" style="font-family: monospace; font-size: 0.9em;">$1</code>');
  // Newlines: \n to <br>
  formatted = formatted.replace(/\n/g, '<br>');
  
  return { __html: formatted };
}

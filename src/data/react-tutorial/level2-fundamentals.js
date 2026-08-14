// Level 2: React Fundamentals & JSX Deep Dive (In-Depth Complete Curriculum)
export const level2Fundamentals = {
  id: 'level-2',
  title: 'Level 2: React Fundamentals & JSX',
  icon: 'bi-box-seam',
  color: '#61dafb',
  description: 'Understand the Virtual DOM, Reconciliation, Fiber architecture, Vite build environment, project anatomy, JSX compilation rules, JavaScript expressions in JSX, and pure functional components in complete baby steps.',
  chapters: [
    {
      id: 'react-core-intro',
      title: '02. React Architecture & JSX Deep Dive',
      lessons: [
        {
          id: 'why-react-virtual-dom',
          slug: 'why-react-virtual-dom',
          order: '2.1',
          title: 'Why React? The Virtual DOM, Reconciliation & Fiber Architecture',
          subtitle: 'Why Facebook created React, how the Virtual DOM reconciliation algorithm works, and the power of reusable components in baby steps.',
          chapterId: 'react-core-intro',
          chapterTitle: '02. React Architecture & JSX Deep Dive',
          levelTitle: 'Level 2: React Fundamentals & JSX',
          goal: 'Understand why direct browser DOM manipulation is slow, how React\'s Virtual DOM diffing (Reconciliation) works, and why component-based architecture is the enterprise standard.',
          prerequisites: ['Level 1 completed.'],
          concept: `### The Problem with the Real Browser DOM:
The real browser DOM is slow to manipulate. When you update a DOM node directly, the browser has to recalculate styles, recalculate layout geometry (reflow), and repaint pixels across the screen. Doing this repeatedly in complex apps leads to UI lag and stutter.

---

### What is the Virtual DOM?
The **Virtual DOM (VDOM)** is a lightweight, in-memory JavaScript representation of the real DOM tree.

---

### How React Updates the Screen (The Reconciliation Cycle):
1. **Render Phase**: When data changes, React executes your component function and creates a new Virtual DOM tree in RAM.
2. **Diffing**: React compares the new Virtual DOM tree with the previous Virtual DOM snapshot using a lightning-fast heuristic diffing algorithm.
3. **Commit Phase (Batch Patch)**: React calculates the **minimum number of exact changes** required and updates ONLY those specific nodes in the real browser DOM all at once (batching)!`,
          diagram: `flowchart TD
    State["1. State Update Triggered (setCount)"] --> V1["2. New Virtual DOM Tree Created in Memory"]
    V1 --> Diff["3. Fast Diffing Algorithm (Reconciliation)"]
    Diff --> Patch["4. Batched Real DOM Patch (Only mutated nodes updated!)"]
    Patch --> Paint["5. Browser Paints Screen Smoothly (60fps)"]
    
    style State fill:#cfe2ff,stroke:#084298,color:#084298
    style V1 fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Diff fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Patch fill:#10b981,color:#fff
    style Paint fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: The Pure Component Mental Model',
              explanation: 'A React component is simply a JavaScript function that accepts props and returns a JSX description.',
              command: `function MetricCard({ title, value, color = "#0284c7" }) {
  return (
    <div className="card p-3 shadow-sm" style={{ borderLeft: \`4px solid \${color}\` }}>
      <h6 className="text-muted mb-1">{title}</h6>
      <p className="fs-3 fw-bold mb-0">{value}</p>
    </div>
  );
}`
            }
          ],
          verification: 'You can explain to another developer why the Virtual DOM makes React fast.',
          expectedResult: 'Clear understanding of Reconciliation, Virtual DOM diffing, and batching.',
          commonMistakes: [
            {
              problem: 'Assuming the Virtual DOM is a separate browser engine or backend process.',
              why: 'The Virtual DOM is simply a tree of plain JavaScript objects residing in browser RAM memory.',
              fix: 'Remember: Virtual DOM = lightweight in-memory JavaScript objects.'
            }
          ],
          quiz: {
            question: 'What is the Virtual DOM in React?',
            options: [
              'A paid cloud database hosted by Meta.',
              'A lightweight in-memory JavaScript object representation of the real DOM.',
              'A browser extension.',
              'A replacement for HTML stylesheets.'
            ],
            correctIndex: 1,
            explanation: 'The Virtual DOM is an in-memory object tree that enables React to compute minimal diffs before touching the real browser DOM.'
          },
          summary: 'React uses an in-memory Virtual DOM to compute diffs (reconciliation) and batch-update only altered nodes in the real DOM.'
        },
        {
          id: 'setting-up-vite-react',
          slug: 'setting-up-vite-react',
          order: '2.2',
          title: 'Setting up Modern React with Vite & Project Anatomy',
          subtitle: 'Why Vite replaced Create React App (CRA), project directory anatomy, and understanding StrictMode in baby steps.',
          chapterId: 'react-core-intro',
          chapterTitle: '02. React Architecture & JSX Deep Dive',
          levelTitle: 'Level 2: React Fundamentals & JSX',
          goal: 'Create a modern React application using Vite and understand every file and folder in the project structure.',
          prerequisites: ['Node.js (v18+) installed on your machine.'],
          concept: `### Why Vite instead of Create React App (CRA)?
Create React App (CRA) used older Webpack bundlers that became slow and is now deprecated.

**Vite (French for "quick", pronounced *veet*)** is the modern industry standard. It leverages native browser ES modules during development for **instant server start** (sub-50ms) and **instant Hot Module Replacement (HMR)**.

---

### Project Anatomy:
\`\`\`text
my-react-app/
├── index.html          <- Single HTML entry point (contains <div id="root">)
├── package.json        <- Project dependencies and scripts (dev, build, preview)
├── vite.config.js      <- Vite configuration and React plugin
└── src/
    ├── main.jsx        <- React root bootstrap (createRoot and StrictMode)
    ├── App.jsx         <- Root parent application component
    ├── index.css       <- Global styles
    └── assets/         <- Static images, icons, and fonts
\`\`\`

---

### What is \`<React.StrictMode>\`?
In development mode, StrictMode intentionally double-invokes component render functions to help detect accidental side-effects and impure mutations before deploying to production!`,
          diagram: `flowchart TD
    Index["index.html (<div id='root'>)"] --> Main["src/main.jsx (createRoot.render)"]
    Main --> Strict["<React.StrictMode> (Safety Double-Render in Dev)"]
    Strict --> App["<App /> (Root Application Component)"]
    
    style Index fill:#cfe2ff,stroke:#084298,color:#084298
    style Main fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Strict fill:#d1e7dd,stroke:#198754,color:#0f5132
    style App fill:#10b981,color:#fff`,
          steps: [
            {
              title: 'Step 1: Create a New Vite React Project',
              explanation: 'Run the Vite scaffolding tool in your terminal.',
              command: `npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev`
            },
            {
              title: 'Step 2: Inspecting the React Entry Point (src/main.jsx)',
              explanation: 'See how React attaches to index.html with ReactDOM.createRoot.',
              command: `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`
            }
          ],
          verification: 'Open http://localhost:5173 in your browser and edit text in App.jsx to observe instant Hot Module Replacement.',
          expectedResult: 'A blazing-fast Vite dev server running locally.',
          quiz: {
            question: 'Why does <React.StrictMode> double-invoke component render functions in development mode?',
            options: [
              'Because of a bug in React.',
              'To detect accidental side-effects and impure mutations early before production.',
              'To test server internet speed.',
              'To encrypt user cookies.'
            ],
            correctIndex: 1,
            explanation: 'StrictMode double-invokes renders in development to flush out accidental mutations and side effects, ensuring components are pure.'
          },
          summary: 'Use npm create vite@latest for modern React development. src/main.jsx mounts the <App /> tree into <div id="root">.'
        },
        {
          id: 'deep-dive-into-jsx',
          slug: 'deep-dive-into-jsx',
          order: '2.3',
          title: 'Deep Dive into JSX: Syntax Rules, Expressions & Fragments',
          subtitle: 'Master JavaScript XML: why HTML in JS works, key syntax differences (className, htmlFor), embedding JS expressions ({ }), and React.Fragment in baby steps.',
          chapterId: 'react-core-intro',
          chapterTitle: '02. React Architecture & JSX Deep Dive',
          levelTitle: 'Level 2: React Fundamentals & JSX',
          goal: 'Master JSX syntax rules, embedding dynamic JavaScript expressions, and returning multiple sibling elements with React Fragments.',
          prerequisites: ['Lesson 2.2 completed.'],
          concept: `### What is JSX (JavaScript XML)?
JSX is a syntax extension for JavaScript that allows you to write HTML-like markup directly inside your JavaScript files.

Browsers do **NOT** understand JSX natively. During build time, tools (Babel/Vite) transpile JSX into standard JavaScript function calls:

\`\`\`javascript
// What you write (JSX):
<h1 className="title">Hello World</h1>

// What it compiles into (Pure JavaScript):
React.createElement('h1', { className: 'title' }, 'Hello World')
\`\`\`

---

### The 4 Crucial Rules of JSX:
1. **Single Root Element (or Fragment \`<> ... </>\`)**:
   A component must return a single top-level element because JavaScript functions cannot return two values simultaneously. Use \`<> ... </>\` to group elements without adding extra \`<div>\` tags to the DOM.
2. **Close Every Tag**: Self-closing tags like \`<img>\`, \`<input>\`, and \`<br>\` must be closed explicitly (\`<img />\`, \`<input />\`, \`<br />\`).
3. **CamelCase Attributes**:
   - \`class\` becomes \`className\` (because \`class\` is a reserved keyword in JS).
   - \`for\` becomes \`htmlFor\`.
   - \`onclick\` becomes \`onClick\`.
4. **Embedding JS Expressions in Curly Braces \`{ }\`**:
   Any valid JavaScript expression (variables, function calls, arithmetic, ternary conditionals) can be embedded inside \`{ }\`.`,
          diagram: `flowchart LR
    JSX["JSX Markup: <h1 className='heading'>{title}</h1>"] --> Transpile["Babel / Vite Transpiler"]
    Transpile --> JS["React.createElement('h1', { className: 'heading' }, title)"]
    JS --> VDOM["Virtual DOM Node Object: { type: 'h1', props: { className: 'heading', children: title } }"]
    
    style JSX fill:#cfe2ff,stroke:#084298,color:#084298
    style Transpile fill:#fff3cd,stroke:#ffc107,color:#664d03
    style JS fill:#d1e7dd,stroke:#198754,color:#0f5132
    style VDOM fill:#e2e3e5,stroke:#41464b,color:#141619`,
          steps: [
            {
              title: 'Step 1: Embedding Dynamic Expressions & Inline Styles in JSX',
              explanation: 'Notice how inline styles in JSX use double curly braces `style={{ color: "blue" }}` (an object literal inside an expression).',
              command: `export default function UserBadge() {
  const user = {
    name: "Elena Rostova",
    role: "Senior Architect",
    isOnline: true
  };

  return (
    // React Fragment wraps multiple sibling elements without extra DOM wrapper
    <>
      <div className="card p-3 rounded-4 shadow-sm border">
        <h4 className="fw-bold mb-1">{user.name}</h4>
        <p className="text-muted small mb-2">{user.role.toUpperCase()}</p>
        
        <span 
          className={\`badge \${user.isOnline ? 'bg-success' : 'bg-secondary'}\`}
          style={{ fontSize: '0.85rem', padding: '6px 12px' }}
        >
          {user.isOnline ? 'Active Now' : 'Offline'}
        </span>
      </div>
    </>
  );
}`
            }
          ],
          verification: 'Verify that className is used instead of class and that all dynamic variables evaluate properly inside { } brackets.',
          expectedResult: 'Clean, error-free JSX rendering dynamic JavaScript expressions.',
          commonMistakes: [
            {
              problem: 'Putting JavaScript statements like `if (x) {}` or `for () {}` directly inside JSX `{ }` brackets.',
              why: 'JSX `{ }` only accepts expressions that produce a value (e.g. ternary `a ? b : c` or `.map()`), not statements.',
              fix: 'Use ternary expressions (`isLoggedIn ? <Dashboard /> : <Login />`) or logical AND (`isOpen && <Modal />`) inside JSX.'
            }
          ],
          quiz: {
            question: 'Why do we use `<> ... </>` (React Fragments) when returning multiple JSX elements?',
            options: [
              'To apply CSS grid styling.',
              'To group sibling elements without adding unnecessary wrapper <div> nodes to the real browser DOM.',
              'To connect to the database.',
              'To enable server-side rendering.'
            ],
            correctIndex: 1,
            explanation: 'Fragments let you group a list of children without adding extra wrapper nodes to the DOM.'
          },
          summary: 'JSX is syntax sugar for React.createElement(). Follow the 4 rules: single root / Fragment, close all tags, camelCase attributes (className), and embed JS expressions with {}.'
        }
      ]
    }
  ]
};

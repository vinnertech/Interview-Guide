export const level5Hooks = {
  id: 'level-5',
  title: 'Level 5: Core Hooks Mastery',
  icon: 'bi-wrench-adjustable-circle',
  color: '#0dcaf0',
  description: 'Master the Rules of Hooks, lifecycle side-effects with useEffect, persistent DOM and mutable references with useRef, performance caching with useMemo & useCallback, and custom hooks in step-by-step baby steps.',
  chapters: [
    {
      id: 'hooks-mastery',
      title: '05. Deep Dive into React Hooks',
      lessons: [
        {
          id: 'rules-of-hooks-and-useeffect',
          slug: 'rules-of-hooks-and-useeffect',
          order: '5.1',
          title: 'The Rules of Hooks & Mastering useEffect',
          subtitle: 'How React tracks hooks internally, dependency array mechanics, and lifecycle side-effects (mount, update, unmount cleanup) in baby steps.',
          chapterId: 'hooks-mastery',
          chapterTitle: '05. Deep Dive into React Hooks',
          levelTitle: 'Level 5: Core Hooks Mastery',
          goal: 'Master the two golden rules of hooks, understand every mode of the useEffect dependency array, and write cleanup functions to eliminate memory leaks.',
          prerequisites: [
            'Level 3 (Props & State) and Level 4 (Forms) completed.'
          ],
          concept: `### The 2 Golden Rules of Hooks (Why React requires them)

React does not know hook variable names. Behind the scenes, React maintains an **internal linked list (or array) of hook states** for each component instance. Each time a hook is called, React simply moves its internal pointer to the next item in that array.

1. **Rule 1: Only Call Hooks at the Very Top Level**:
   - Never call hooks inside loops (\`for\`, \`while\`), conditional branches (\`if\`), or nested functions.
   - If an \`if\` statement skips a hook call, the internal pointer index shifts, causing all subsequent state variables to receive the wrong data!

2. **Rule 2: Only Call Hooks from React Functions**:
   - Call hooks only from React Function Components or Custom Hooks (functions starting with \`use...\`).
   - Never call hooks from regular vanilla JavaScript helper functions.

---

### Understanding the 3 Modes of useEffect

\`\`\`javascript
// Mode 1: No dependency array
// Runs on initial mount AND after EVERY single re-render. (Caution: Causes infinite loops if state is set inside!)
useEffect(() => {
  console.log("Component rendered!");
});

// Mode 2: Empty dependency array []
// Runs EXACTLY ONCE when the component first mounts into the DOM (ComponentDidMount equivalent).
useEffect(() => {
  console.log("Component mounted into the DOM.");
}, []);

// Mode 3: With dependencies [userId, search]
// Runs on initial mount AND whenever ANY value in the array changes between renders.
useEffect(() => {
  console.log("User ID or search query changed! Fetching new data...");
}, [userId, search]);
\`\`\`

---

### The Cleanup Function (Preventing Memory Leaks & Zombie Subscriptions)

When you set up an active timer (\`setInterval\`), a browser event listener (\`window.addEventListener\`), or a WebSocket connection, you must return a **cleanup function** from inside \`useEffect\`. React runs this cleanup function:
1. Right before running the effect again with new values.
2. When the component completely unmounts (leaves the screen).`,
          diagram: `flowchart TD
    M["1. Component Mounts into DOM"] --> E["2. useEffect Runs Setup Code"]
    E --> U["3. State/Props change (Dependency triggers re-render)"]
    U --> C["4. Cleanup function runs (Clears previous timer / listener)"]
    C --> E2["5. New useEffect runs with fresh state"]
    E2 --> UM["6. Component Unmounts (User navigates to another page)"]
    UM --> C2["7. Final Cleanup runs (Eliminates memory leaks!)"]
    
    style M fill:#cfe2ff,stroke:#084298,color:#084298
    style E fill:#d1e7dd,stroke:#198754,color:#0f5132
    style C fill:#fff3cd,stroke:#ffc107,color:#664d03
    style UM fill:#f8d7da,stroke:#dc3545,color:#842029`,
          steps: [
            {
              title: 'Step 1: Setting up an Interval Timer with Cleanup',
              explanation: 'Build a live digital clock that updates every second and cleans up its interval when the component unmounts.',
              command: `// src/components/LiveClock.jsx
import React, { useState, useEffect } from 'react';

export default function LiveClock() {
  const [timeString, setTimeString] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // 1. Setup Phase: Start a 1-second recurring interval
    const intervalId = setInterval(() => {
      setTimeString(new Date().toLocaleTimeString());
    }, 1000);

    // 2. Cleanup Phase: Clears interval when component unmounts
    return () => {
      clearInterval(intervalId);
      console.log('Timer cleared successfully. Memory leak prevented!');
    };
  }, []); // Empty array = mount once

  return (
    <div className="card p-4 border-0 shadow-sm rounded-4 text-center">
      <span className="text-muted small text-uppercase fw-bold">Live System Time</span>
      <h2 className="display-5 fw-bold text-primary my-2">{timeString}</h2>
    </div>
  );
}`
            },
            {
              title: 'Step 2: Synchronizing with Document Title & Browser Events',
              explanation: 'Synchronize document title and listen to window resize events, ensuring listeners are cleanly removed on unmount.',
              command: `// src/components/WindowTracker.jsx
import React, { useState, useEffect } from 'react';

export function WindowTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // 1. Event listener callback
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      document.title = \`Width: \${window.innerWidth}px\`;
    };

    // 2. Attach listener to window
    window.addEventListener('resize', handleResize);

    // 3. Cleanup: Remove listener when component leaves DOM
    return () => {
      window.removeEventListener('resize', handleResize);
      document.title = 'React App';
    };
  }, []);

  return (
    <div className="p-3 bg-light rounded-3 text-center">
      <h5>Window Viewport Width: <span className="badge bg-info text-dark">{windowWidth}px</span></h5>
    </div>
  );
}`
            },
            {
              title: 'Step 3: Avoiding Infinite Re-render Traps',
              explanation: 'Observe why setting state without dependencies causes an infinite render loop, and how to fix it.',
              command: `// ❌ DANGEROUS: Infinite loop!
/*
useEffect(() => {
  setCount(count + 1); // Triggers re-render -> runs effect again -> triggers re-render forever!
});
*/

// ✅ CORRECT: Add dependencies or functional updater
useEffect(() => {
  console.log("Runs only when userId changes");
}, [userId]);`
            }
          ],
          verification: 'Mount and unmount the LiveClock and WindowTracker components and observe the console log confirming cleanup execution.',
          expectedResult: 'Timers and event listeners operate without memory leaks or infinite loop warnings.',
          commonMistakes: [
            {
              problem: 'Omitting dependencies from the dependency array (e.g. using a prop without listing it).',
              why: 'React will capture a stale closure of that variable from the initial render.',
              fix: 'Always include all props and state variables referenced inside useEffect in the dependency array.'
            }
          ],
          quiz: {
            question: 'When does the cleanup function returned from useEffect execute?',
            options: [
              'Only when the browser window is closed.',
              'Right before the component re-runs the effect with new dependencies, and when the component unmounts.',
              'Before the initial render takes place.',
              'Inside the return JSX markup.'
            ],
            correctIndex: 1,
            explanation: 'Cleanup functions run before applying the effect again and when the component is unmounted from the DOM.'
          },
          summary: 'The Rules of Hooks ensure stable internal state pointers, while useEffect provides controlled side-effect synchronization with thorough cleanup mechanisms.'
        },
        {
          id: 'use-ref-use-memo-use-callback',
          slug: 'use-ref-use-memo-use-callback',
          order: '5.2',
          title: 'useRef, useMemo & useCallback: Performance & DOM Access',
          subtitle: 'Persistent mutable values without triggering re-renders, direct DOM access, and memoizing expensive computations.',
          chapterId: 'hooks-mastery',
          chapterTitle: '05. Deep Dive into React Hooks',
          levelTitle: 'Level 5: Core Hooks Mastery',
          goal: 'Master direct DOM referencing with useRef, caching values with useMemo, and stabilizing function identities with useCallback.',
          prerequisites: [
            'Lesson 5.1 completed.'
          ],
          concept: `### 1. useRef: Mutable Storage Without Re-rendering
- Unlike \`useState\`, updating \`ref.current\` **does NOT trigger a component re-render**.
- Use cases: Storing previous state, timer IDs, and accessing raw DOM nodes (focusing inputs, measuring heights, playing video).

---

### 2. useMemo: Caching Expensive Computations
- \`useMemo\` recalculates its return value **only when its dependencies change**.
- Use case: Filtering 10,000 table rows, heavy mathematical calculations.

---

### 3. useCallback: Stabilizing Function References
- In JavaScript, every time a component renders, all functions defined inside it are recreated as **brand-new object references** in memory (\`functionA !== functionA\`).
- \`useCallback\` caches the function instance so that child components wrapped in \`React.memo\` do not needlessly re-render!`,
          diagram: `flowchart TD
    Render["Component Re-Renders"] --> Check{"Did dependencies change?"}
    Check -->|"No (Deps unchanged)"| Cache["Return Cached Computation / Function Instance"]
    Check -->|"Yes (Deps changed)"| Calc["Execute calculation / Recreate function"]
    
    style Render fill:#cfe2ff,stroke:#084298,color:#084298
    style Cache fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Calc fill:#fff3cd,stroke:#ffc107,color:#664d03`,
          steps: [
            {
              title: 'Step 1: Direct DOM Manipulation with useRef',
              explanation: 'Automatically focus a search input when a modal opens.',
              command: `// src/components/AutoSearchInput.jsx
import React, { useRef, useEffect } from 'react';

export function AutoSearchInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Access native DOM input node directly
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="input-group my-3">
      <span className="input-group-text"><i className="bi bi-search"></i></span>
      <input 
        ref={inputRef}
        type="text" 
        className="form-control" 
        placeholder="Auto-focused on load..." 
      />
    </div>
  );
}`
            },
            {
              title: 'Step 2: Optimizing Heavy Calculations with useMemo',
              explanation: 'Compute statistical summaries over large lists without repeating calculations on unrelated state changes.',
              command: `// src/components/HeavyDataSummary.jsx
import React, { useState, useMemo } from 'react';

export function HeavyDataSummary({ items }) {
  const [darkTheme, setDarkTheme] = useState(false);

  // Expensive calculation: only runs when 'items' prop changes!
  const stats = useMemo(() => {
    console.log('Calculating heavy statistics...');
    const sum = items.reduce((acc, curr) => acc + curr.value, 0);
    const avg = items.length ? (sum / items.length).toFixed(2) : 0;
    return { sum, avg };
  }, [items]);

  return (
    <div className={\`p-4 rounded-3 \${darkTheme ? 'bg-dark text-white' : 'bg-light text-dark'}\`}>
      <h4>Total Sum: {stats.sum} | Average: {stats.avg}</h4>
      <button 
        className="btn btn-sm btn-outline-secondary mt-2"
        onClick={() => setDarkTheme(prev => !prev)}
      >
        Toggle Local Theme (Does NOT recalculate stats!)
      </button>
    </div>
  );
}`
            },
            {
              title: 'Step 3: Stabilizing Callbacks with useCallback',
              explanation: 'Pass memoized callback handlers to child components to prevent unnecessary re-renders.',
              command: `import React, { useState, useCallback } from 'react';

const ChildButton = React.memo(({ onClick, label }) => {
  console.log(\`Rendering ChildButton: \${label}\`);
  return <button className="btn btn-primary" onClick={onClick}>{label}</button>;
});

export function ParentComponent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  // Function reference remains identical across renders
  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <h3>Count: {count}</h3>
      <ChildButton onClick={handleIncrement} label="Add Count" />
      <button className="btn btn-secondary ms-2" onClick={() => setOtherState(p => !p)}>
        Toggle Unrelated State
      </button>
    </div>
  );
}`
            }
          ],
          verification: 'Click the "Toggle Unrelated State" button and observe the console log: ChildButton does NOT re-render because its callback reference was memoized with useCallback.',
          expectedResult: 'High-performance rendering with zero wasted cycles.',
          summary: 'useRef provides persistent DOM references without re-renders, useMemo caches expensive values, and useCallback stabilizes function references for optimized child rendering.'
        }
      ]
    }
  ]
};

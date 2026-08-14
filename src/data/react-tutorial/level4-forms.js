export const level4Forms = {
  id: 'level-4',
  title: 'Level 4: Forms, Validation & Component Sync',
  icon: 'bi-ui-checks',
  color: '#198754',
  description: 'Master controlled vs uncontrolled inputs, multi-field form state handlers, client-side validation rules, and lifting state up for synchronized sibling components.',
  chapters: [
    {
      id: 'forms-and-communication',
      title: '04. Forms & Component Communication',
      lessons: [
        {
          id: 'controlled-components-forms',
          slug: 'controlled-components-forms',
          order: '4.1',
          title: 'Controlled Components: Single Source of Truth',
          subtitle: 'Why React controls form inputs through state, two-way data binding pattern, and handling form submission.',
          chapterId: 'forms-and-communication',
          chapterTitle: '04. Forms & Component Communication',
          levelTitle: 'Level 4: Forms, Validation & Component Sync',
          goal: 'Master binding input value to React state and listening to `onChange` events to create controlled form inputs.',
          prerequisites: [
            'Level 3 (useState and Event handling).'
          ],
          concept: `**What is a Controlled Component?**\nIn standard HTML, form elements like \`<input>\`, \`<textarea>\`, and \`<select>\` maintain their own internal DOM state based on user typing.\n\nIn React, a **Controlled Component** is an input whose current value is dictated **entirely by React State**. React becomes the **Single Source of Truth** for the form data.\n\n### How It Works (The 2-Way Loop):\n1. The input\'s \`value\` prop is bound to a state variable (\`value={email}\`).\n2. When the user types a character, the \`onChange\` event fires.\n3. The event handler reads \`e.target.value\` and calls \`setEmail(e.target.value)\`.\n4. React re-renders the input with the new text!`,
          diagram: `flowchart LR
    User["User types in <input>"] --> Event["onChange event fires"]
    Event --> Setter["setEmail(e.target.value) called"]
    Setter --> State["React State updated"]
    State --> Input["<input value={email} /> re-renders"]
    
    style User fill:#fff3cd,stroke:#ffc107
    style State fill:#cfe2ff,stroke:#084298
    style Input fill:#d1e7dd,stroke:#198754`,
          steps: [
            {
              title: 'Step 1: Implementing a Controlled Form with Submit Handling',
              explanation: 'Always call `e.preventDefault()` on form submit to prevent traditional browser full-page reloads.',
              command: `import React, { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents browser from refreshing the page!
    console.log("Submitting:", { email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
      <div className="mb-3">
        <label className="form-label">Email Address</label>
        <input 
          type="email" 
          className="form-control" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input 
          type="password" 
          className="form-control" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">Sign In</button>
    </form>
  );
}`
            }
          ],
          verification: 'Type into the inputs and verify that state updates synchronously.',
          expectedResult: 'Clean, controlled form state with prevented default browser submit reloads.',
          quiz: {
            question: 'Why is `e.preventDefault()` necessary inside a React `form.onSubmit` handler?',
            options: [
              'To encrypt the password.',
              'To prevent the default HTML browser behavior of refreshing the entire web page and appending query parameters to the URL.',
              'To trigger CSS animations.',
              'To speed up CPU processing.'
            ],
            correctIndex: 1,
            explanation: 'Default HTML form submission triggers a full browser page refresh. `e.preventDefault()` keeps the user on the Single Page Application without reloading.'
          },
          summary: 'Controlled inputs bind `value={state}` and `onChange={(e) => setState(e.target.value)}`. Always call `e.preventDefault()` on form submission.'
        },
        {
          id: 'lifting-state-up',
          slug: 'lifting-state-up',
          order: '4.2',
          title: 'Lifting State Up: Syncing Sibling Components',
          subtitle: 'How two sibling components share and synchronize state by moving state to their closest common ancestor.',
          chapterId: 'forms-and-communication',
          chapterTitle: '04. Forms & Component Communication',
          levelTitle: 'Level 4: Forms, Validation & Component Sync',
          goal: 'Understand when and how to lift state to a parent component and pass callbacks to children for two-way synchronization.',
          prerequisites: [
            'Lesson 4.1 completed.'
          ],
          concept: `**The Sibling State Dilemma:**\nIn React, components cannot pass data directly horizontally to their siblings.\n\nImagine you have a \`<SearchBar />\` component and a \`<ProductList />\` component.\n- The user types a query inside \`<SearchBar />\`.\n- \`<ProductList />\` needs that search term to filter products.\n\n### The Solution: Lifting State Up\nYou lift the \`searchQuery\` state up to their **closest common parent component** (\`<ProductDashboard />\`).\n1. The parent holds the state: \`const [query, setQuery] = useState('')\`.\n2. The parent passes \`query\` and the updater callback \`onSearchChange={setQuery}\` down to \`<SearchBar />\`.\n3. The parent passes \`query\` down to \`<ProductList filter={query} />\`.\n\nNow both siblings stay 100% in sync!`,
          diagram: `flowchart TD
    Parent["Parent (<ProductDashboard />)\nHolds state: [query, setQuery]"]
    Parent -- "Passes onSearch={setQuery}" --> ChildA["Child A (<SearchBar />)\nCalls onSearch(text)"]
    Parent -- "Passes query={query}" --> ChildB["Child B (<ProductList />)\nRenders filtered list"]
    
    style Parent fill:#cfe2ff,stroke:#084298
    style ChildA fill:#fff3cd,stroke:#ffc107
    style ChildB fill:#d1e7dd,stroke:#198754`,
          steps: [
            {
              title: 'Step 1: Implementing the Lifted State Architecture',
              explanation: 'See how the parent synchronizes the input component with the display component.',
              command: `// 1. Child A: Filter input
function SearchInput({ value, onChange }) {
  return (
    <input 
      type="text" 
      className="form-control mb-3" 
      placeholder="Search users..." 
      value={value} 
      onChange={(e) => onChange(e.target.value)} 
    />
  );
}

// 2. Child B: Display list
function UserList({ users, filter }) {
  const filtered = users.filter(u => u.name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <ul className="list-group">
      {filtered.map(u => <li key={u.id} className="list-group-item">{u.name}</li>)}
    </ul>
  );
}

// 3. Parent: Holds the shared state
export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }];

  return (
    <div className="p-4">
      <SearchInput value={searchTerm} onChange={setSearchTerm} />
      <UserList users={users} filter={searchTerm} />
    </div>
  );
}`
            }
          ],
          verification: 'Type into the search input and verify that the user list filters in real time.',
          expectedResult: 'Flawless component synchronization via parent state orchestration.',
          quiz: {
            question: 'What is "Lifting State Up" in React?',
            options: [
              'Moving state to a cloud database.',
              'Moving state to the closest common parent component so that multiple child components can share and synchronize data.',
              'Deleting the state variable.',
              'Converting React into Angular.'
            ],
            correctIndex: 1,
            explanation: 'When multiple components need to reflect the same changing data, lifting the state up to their closest common parent ensures a single source of truth.'
          },
          summary: 'Lift state to the common parent whenever siblings need to share data. Pass the state down as props and pass setter functions down as event callbacks.'
        }
      ]
    }
  ]
};

export const level5Hooks = {
  id: 'level-5',
  title: 'Level 5: Core Hooks Mastery',
  icon: 'bi-wrench-adjustable-circle',
  color: '#0dcaf0',
  description: 'Master the Rules of Hooks, lifecycle side-effects with useEffect, persistent DOM and mutable references with useRef, performance caching with useMemo & useCallback, and extract custom hooks.',
  chapters: [
    {
      id: 'hooks-mastery',
      title: '05. Deep Dive into React Hooks',
      lessons: [
        {
          id: 'rules-of-hooks-and-useeffect',
          slug: 'rules-of-hooks-and-useeffect',
          order: '5.1',
          title: 'The Rules of Hooks & Mastering \`useEffect\`',
          subtitle: 'How React tracks hooks internally, dependency arrays, and lifecycle side-effects (mount, update, unmount cleanup).',
          chapterId: 'hooks-mastery',
          chapterTitle: '05. Deep Dive into React Hooks',
          levelTitle: 'Level 5: Core Hooks Mastery',
          goal: 'Master the two golden rules of hooks, understand the dependency array of \`useEffect\`, and write cleanup functions to prevent memory leaks.',
          prerequisites: [
            'Level 3 and Level 4 completed.'
          ],
          concept: `### The 2 Golden Rules of Hooks:\n1. **Only Call Hooks at the Top Level**: Never call hooks inside loops, conditions (\`if\`), or nested functions. React relies on the exact same call order across every render to match state pairs internally.\n2. **Only Call Hooks from React Functions**: Call them from React Function Components or Custom Hooks (never regular JS helper functions).\n\n---\n\n### What is \`useEffect\`?\n\`useEffect\` allows you to perform **side effects** in function components (data fetching, DOM timers, subscriptions, local storage syncing).\n\n### The 3 Dependency Array Modes:\n\`\`\`javascript\n// Mode 1: No dependency array -> Runs after EVERY single render (Rarely used!)\nuseEffect(() => { console.log("Rendered!"); });\n\n// Mode 2: Empty dependency array [] -> Runs ONCE on mount (Component did mount)\nuseEffect(() => { fetchData(); }, []);\n\n// Mode 3: With dependencies [userId] -> Runs on mount AND whenever 'userId' changes!\nuseEffect(() => { fetchUser(userId); }, [userId]);\n\`\`\`\n\n### The Cleanup Function (Preventing Memory Leaks):\nIf your effect sets up a timer (\`setInterval\`) or an event listener, you must return a **cleanup function** that React runs when the component unmounts!`,
          diagram: `flowchart TD
    M["Component Mounts"] --> E["Effect Runs"]
    E --> U["User triggers change (deps updated)"]
    U --> C["1. Cleanup function runs (resets previous effect)"]
    C --> E2["2. Fresh Effect runs with new data"]
    E2 --> UM["Component Unmounts (Page navigates away)"]
    UM --> C2["Final Cleanup runs (clears timers/listeners)"]
    
    style M fill:#cfe2ff,stroke:#084298
    style E fill:#d1e7dd,stroke:#198754
    style C fill:#fff3cd,stroke:#ffc107
    style UM fill:#f8d7da,stroke:#dc3545`,
          steps: [
            {
              title: 'Step 1: Implementing a Live Clock with Cleanup',
              explanation: 'Notice how `clearInterval` is returned as a cleanup function to prevent memory leaks when the component unmounts.',
              command: `import React, { useState, useEffect } from 'react';

export default function LiveClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // 1. Setup side effect: 1-second interval timer
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // 2. Cleanup function: runs when component unmounts!
    return () => {
      clearInterval(timerId);
      console.log("Timer cleared, memory leak prevented.");
    };
  }, []); // Empty array = setup only once on mount

  return <div className="p-3 fs-4 fw-bold text-primary">{time}</div>;
}`
            }
          ],
          verification: 'Inspect the browser console to verify that timers are properly cleared when navigating between pages.',
          expectedResult: 'Clean lifecycle synchronization without memory leaks.',
          commonMistakes: [
            {
              problem: 'Omitting variables used inside \`useEffect\` from the dependency array.',
              why: 'Creates stale closures where the effect refers to outdated state from earlier renders.',
              fix: 'Always include all variables and state references used inside the effect in the dependency array `[prop, state]`.'
            }
          ],
          quiz: {
            question: 'When does the cleanup function returned by \`useEffect\` execute?',
            options: [
              'Before the initial mount.',
              'Before the component unmounts, and before re-running the effect on subsequent renders when dependencies change.',
              'Never.',
              'Only when the computer restarts.'
            ],
            correctIndex: 1,
            explanation: 'React runs cleanup functions to tear down previous side effects prior to running the next effect or when the component unmounts completely.'
          },
          summary: 'Call hooks at top-level only. `useEffect(fn, [deps])` synchronizes side effects. Return a cleanup function `return () => { ... }` to tear down timers and subscriptions.'
        },
        {
          id: 'useref-usememo-usecallback',
          slug: 'useref-usememo-usecallback',
          order: '5.2',
          title: '\`useRef\`, \`useMemo\` & \`useCallback\` Explained',
          subtitle: 'DOM node references, mutable persistent variables without re-rendering, and memoization for performance.',
          chapterId: 'hooks-mastery',
          chapterTitle: '05. Deep Dive into React Hooks',
          levelTitle: 'Level 5: Core Hooks Mastery',
          goal: 'Master \`useRef\` for DOM access and mutable values, and understand when (and when not) to use \`useMemo\` and \`useCallback\`.',
          prerequisites: [
            'Lesson 5.1 completed.'
          ],
          concept: `### 1. \`useRef\` (The Escape Hatch):\n\`useRef\` returns a mutable object \`{ current: initialValue }\` that **persists across renders WITHOUT triggering a re-render when changed**.\nTwo main use cases:\n- **Accessing DOM nodes directly** (e.g. focusing an input on button click, measuring element dimensions, video play/pause).\n- **Storing mutable values** like timer IDs without triggering unnecessary UI updates.\n\n---\n\n### 2. \`useMemo\` (Memoizing Expensive Calculations):\nCaches the **result of a heavy calculation** between renders:\n\`\`\`javascript\nconst filteredList = useMemo(() => {\n  return heavyFilterAlgorithm(largeDataset, query);\n}, [largeDataset, query]);\n\`\`\`\n\n---\n\n### 3. \`useCallback\` (Memoizing Function References):\nIn JavaScript, \`() => {}\` creates a brand-new function instance in memory on every render. If you pass a callback function to an optimized child component wrapped in \`React.memo\`, the child re-renders because the function reference changed! \`useCallback\` caches the **function instance itself**:\n\`\`\`javascript\nconst handleSearch = useCallback((searchTerm) => {\n  performSearch(searchTerm);\n}, []);\n\`\`\``,
          steps: [
            {
              title: 'Step 1: Using useRef to Auto-Focus an Input',
              explanation: 'Access the native DOM input element directly using `inputRef.current.focus()`.',
              command: `import React, { useRef } from 'react';

export default function AutoFocusInput() {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    // Directly focus the input element in the browser DOM
    inputRef.current.focus();
    inputRef.current.style.borderColor = '#0d6efd';
  };

  return (
    <div className="d-flex gap-2 p-3">
      <input ref={inputRef} type="text" className="form-control" placeholder="Click button to focus me..." />
      <button onClick={handleButtonClick} className="btn btn-primary">Focus</button>
    </div>
  );
}`
            }
          ],
          verification: 'Click the button and verify that the input field gains cursor focus immediately.',
          expectedResult: 'Targeted DOM manipulation without triggering unnecessary component re-renders.',
          quiz: {
            question: 'What is the primary difference between \`useState\` and \`useRef\`?',
            options: [
              '\`useState\` triggers a component re-render when updated; updating `useRef.current` does NOT trigger a re-render.',
              '\`useRef\` only stores strings.',
              '\`useState\` is obsolete.',
              '\`useRef\` only works on Android.'
            ],
            correctIndex: 0,
            explanation: 'Updating state with \`useState\` triggers React to re-render the UI. Updating `useRef.current` mutates the stored reference without causing a re-render.'
          },
          summary: 'Use \`useRef\` for DOM references and non-rendering mutable values. Use \`useMemo\` to cache expensive calculations and \`useCallback\` to cache function definitions.'
        }
      ]
    }
  ]
};

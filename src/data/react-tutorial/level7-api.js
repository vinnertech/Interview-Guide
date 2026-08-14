export const level7Api = {
  id: 'level-7',
  title: 'Level 7: API Integration & Data Fetching',
  icon: 'bi-cloud-arrow-down',
  color: '#20c997',
  description: 'Connecting React to REST APIs: Fetch vs Axios, asynchronous data loading, handling Loading, Error, and Empty states with UI resilience, building reusable useFetch hooks, and mutating data with POST/PUT/DELETE.',
  chapters: [
    {
      id: 'api-data-fetching',
      title: '07. REST APIs & Data Fetching',
      lessons: [
        {
          id: 'connecting-to-rest-apis',
          slug: 'connecting-to-rest-apis',
          order: '7.1',
          title: 'Connecting React to REST APIs & The 3-State UI Pattern',
          subtitle: 'Why components need Loading, Error, and Success states, data fetching inside useEffect, and AbortController cleanup.',
          chapterId: 'api-data-fetching',
          chapterTitle: '07. REST APIs & Data Fetching',
          levelTitle: 'Level 7: API Integration & Data Fetching',
          goal: 'Master fetching data from remote REST endpoints inside \`useEffect\`, managing the 3-state UI lifecycle (loading, error, data), and cancelling pending requests with `AbortController`.',
          prerequisites: [
            'Level 1 (async/await) and Level 5 (useEffect).'
          ],
          concept: `**How React Communicates with Backends:**\nReact is a client-side frontend library running in the user's web browser. It does **NOT** connect directly to databases like SQL Server or MongoDB. Instead, React communicates with a **Backend REST API** (e.g. Node/Express, ASP.NET Core, Spring Boot, Django, FastAPI) over HTTP.\n\n### The Mandatory 3-State UI Pattern:\nEvery remote network request takes time (200ms to 2s) and can fail (network disconnect, 404, 500 server error). Therefore, every production API component must manage **3 distinct states**:\n1. **\`isLoading\` (Boolean)**: True while the network request is in flight (renders a spinner or skeleton loader).\n2. **\`error\` (String | null)**: Holds any failure message if the request throws or returns a non-200 status.\n3. **\`data\` (Array | Object | null)**: Holds the parsed JSON response.\n\n### Preventing Race Conditions with \`AbortController\`:\nIf a user clicks between tabs quickly, an old pending request might finish *after* a newer one and overwrite current state. Using the browser's built-in \`AbortController\` cancels the stale request cleanly upon unmount!`,
          diagram: `flowchart TD
    Init["Component Mounts (isLoading = true)"] --> Req["fetch('https://api.../users') with signal"]
    Req --> Dec{"Request Status"}
    Dec -- "200 OK" --> Success["setData(json), isLoading = false"]
    Dec -- "4xx / 5xx / Network Fail" --> Fail["setError(err.message), isLoading = false"]
    
    Success --> UI1["Render Data Table"]
    Fail --> UI2["Render Error Alert with Retry button"]
    
    style Init fill:#fff3cd,stroke:#ffc107
    style Success fill:#d1e7dd,stroke:#198754
    style Fail fill:#f8d7da,stroke:#dc3545`,
          steps: [
            {
              title: 'Step 1: Implementing a Resilient Data Fetching Component',
              explanation: 'Notice how loading, error, and data states are handled with clean conditional rendering and AbortController.',
              command: `import React, { useState, useEffect } from 'react';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. Create AbortController to cancel stale requests on unmount
    const controller = new AbortController();

    async function loadUsers() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
          signal: controller.signal
        });

        if (!response.ok) {
          throw new Error(\`Failed to fetch users (HTTP \${response.status})\`);
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    loadUsers();

    // 2. Cleanup: cancel request if user navigates away before fetch completes!
    return () => controller.abort();
  }, []);

  // Conditional Rendering based on the 3 States:
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center p-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading users...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger p-3 m-3">
        <i className="bi bi-exclamation-triangle-fill me-2"></i>
        <strong>Error loading data:</strong> {error}
      </div>
    );
  }

  if (users.length === 0) {
    return <div className="p-4 text-center text-muted">No users found.</div>;
  }

  return (
    <ul className="list-group p-3">
      {users.map(u => (
        <li key={u.id} className="list-group-item d-flex justify-content-between">
          <strong>{u.name}</strong>
          <span className="text-muted">{u.email}</span>
        </li>
      ))}
    </ul>
  );
}`
            }
          ],
          verification: 'Run the component and observe the loading spinner while fetching, followed by the populated user list.',
          expectedResult: 'Robust UI resilience covering all network states.',
          quiz: {
            question: 'Why is it critical to manage both `isLoading` and `error` states when fetching remote data in React?',
            options: [
              'Because JavaScript syntax requires it.',
              'Because network requests take unpredictable time and can fail; the UI must communicate state changes to the user without crashing.',
              'To speed up internet bandwidth.',
              'To avoid using CSS.'
            ],
            correctIndex: 1,
            explanation: 'Network calls are inherently asynchronous and fallible. Proper loading and error indicators prevent blank screens and provide clear feedback to the user.'
          },
          summary: 'Always manage `data`, `isLoading`, and `error` states for network requests. Use `AbortController` in \`useEffect\` cleanup to cancel pending requests.'
        }
      ]
    }
  ]
};

export const level8State = {
  id: 'level-8',
  title: 'Level 8: State Management & Context API',
  icon: 'bi-diagram-2',
  color: '#e83e8c',
  description: 'Solving prop drilling, React Context API (createContext, useContext), state machines with useReducer, and architectural trade-offs with Redux Toolkit and Zustand.',
  chapters: [
    {
      id: 'global-state-management',
      title: '08. Context API & Global State',
      lessons: [
        {
          id: 'context-api-and-usereducer',
          slug: 'context-api-and-usereducer',
          order: '8.1',
          title: 'React Context API: Eliminating Prop Drilling',
          subtitle: 'How to share authentication, theme, and cart state across the entire application without passing props through intermediate components.',
          chapterId: 'global-state-management',
          chapterTitle: '08. Context API & Global State',
          levelTitle: 'Level 8: State Management & Context API',
          goal: 'Master `createContext`, creating custom Context Providers, and consuming global state using `useContext`.',
          prerequisites: [
            'Level 3 through Level 7 completed.'
          ],
          concept: `**What is "Prop Drilling"?**\nProp drilling occurs when you have global data (like the logged-in user's profile or theme preference) in your top-level \`<App />\` component, and you must pass it down through 5 intermediate components that do not even care about that data, just to reach a deeply nested child component \`<UserAvatar />\`.\n\n### The Solution: React Context API\nReact Context provides a way to pass data through the component tree **without having to pass props down manually at every level**.\n\n### The 3 Steps of Context:\n1. **Create Context**: \`const ThemeContext = createContext();\`\n2. **Provide Context**: Wrap the tree in \`<ThemeContext.Provider value={{ theme, toggleTheme }}>\` at the top level.\n3. **Consume Context**: Any descendant component calls \`const { theme } = useContext(ThemeContext);\` to read the state directly!`,
          diagram: `flowchart TD
    subgraph WithoutContext ["Prop Drilling (Messy & Brittle)"]
        A["App (holds theme)"] -- "props.theme" --> B["Navbar"]
        B -- "props.theme" --> C["NavLinks"]
        C -- "props.theme" --> D["ThemeToggleButton (finally uses it!)"]
    end

    subgraph WithContext ["Context API (Direct Access Teleportation)"]
        CA["ThemeProvider (provides theme)"] -. "useContext(ThemeContext)" .-> CD["ThemeToggleButton (directly consumes!)"]
    end
    
    style WithoutContext fill:#f8d7da,stroke:#dc3545
    style WithContext fill:#d1e7dd,stroke:#198754`,
          steps: [
            {
              title: 'Step 1: Creating a Custom AuthContext & Provider',
              explanation: 'Build a production-grade AuthProvider exposing user status, login, and logout methods.',
              command: `import React, { createContext, useContext, useState } from 'react';

// 1. Create the Context object
const AuthContext = createContext(null);

// 2. Custom Provider Component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email) => {
    setUser({ email, name: email.split('@')[0], token: 'jwt-xyz-123' });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Custom Hook for easy consumption (clean developer experience!)
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}`
            },
            {
              title: 'Step 2: Consuming useAuth Anywhere in the App',
              explanation: 'See how any deeply nested button can read authentication state and call login/logout with 0 prop drilling.',
              command: `import { useAuth } from './AuthContext';

export function UserNav() {
  const { user, isAuthenticated, login, logout } = useAuth();

  if (!isAuthenticated) {
    return <button className="btn btn-primary btn-sm" onClick={() => login('alex@vinnertech.com')}>Sign In</button>;
  }

  return (
    <div className="d-flex align-items-center gap-2">
      <span className="fw-bold text-success">Welcome, {user.name}!</span>
      <button className="btn btn-outline-danger btn-sm" onClick={logout}>Sign Out</button>
    </div>
  );
}`
            }
          ],
          verification: 'Call `useAuth()` in different pages and verify that login status updates across all components synchronously.',
          expectedResult: 'Clean, centralized global state without prop drilling overhead.',
          quiz: {
            question: 'When should you use React Context API instead of local \`useState\`?',
            options: [
              'For every single variable in your entire app.',
              'When multiple components scattered throughout different parts of the component tree need access to the same shared global state (e.g. Auth, Theme, Cart).',
              'Never.',
              'Only when writing server-side code.'
            ],
            correctIndex: 1,
            explanation: 'Context is designed for sharing "global" data across wide component trees (authentication, locale, theme) where prop drilling becomes unwieldy.'
          },
          summary: 'Context API eliminates prop drilling. Create a Context, wrap components in a Provider, and consume with `useContext` or a custom hook like `useAuth()`.'
        }
      ]
    }
  ]
};

export const level8State = {
  id: 'level-8',
  title: 'Level 8: State Management & Context API',
  icon: 'bi-diagram-2',
  color: '#e83e8c',
  description: 'Solving prop drilling, React Context API (createContext, useContext), state machines with useReducer, and architectural trade-offs in baby steps.',
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
          subtitle: 'How to share authentication, theme, and cart state across the entire application without passing props through intermediate components in baby steps.',
          chapterId: 'global-state-management',
          chapterTitle: '08. Context API & Global State',
          levelTitle: 'Level 8: State Management & Context API',
          goal: 'Master createContext, building custom Context Providers, and consuming global state using useContext in baby steps.',
          prerequisites: [
            'Level 3 through Level 7 completed.'
          ],
          concept: `### What is "Prop Drilling"?
Prop drilling occurs when you have global data (like the logged-in user's profile or theme preference) in your top-level \`<App />\` component, and you must pass it down through 5 intermediate components that do not even care about that data, just to reach a deeply nested child component \`<UserAvatar />\`.

### The Solution: React Context API
React Context provides a way to pass data through the component tree **without having to pass props down manually at every level**.

### The 3 Baby Steps of Context:
1. **Create Context**: \`const AuthContext = createContext(null);\`
2. **Provide Context**: Wrap the tree in \`<AuthContext.Provider value={{ user, login, logout }}>\` at the top level.
3. **Consume Context**: Any descendant component calls \`const { user } = useContext(AuthContext);\` to read the state directly!`,
          diagram: `flowchart TD
    subgraph WithoutContext ["Prop Drilling (Messy & Brittle)"]
        A["App (holds theme)"] -- "props.theme" --> B["Navbar"]
        B -- "props.theme" --> C["NavLinks"]
        C -- "props.theme" --> D["ThemeToggleButton (finally uses it!)"]
    end

    subgraph WithContext ["Context API (Direct Access Teleportation)"]
        CA["ThemeProvider (provides theme)"] -. "useContext(ThemeContext)" .-> CD["ThemeToggleButton (directly consumes!)"]
    end
    
    style WithoutContext fill:#f8d7da,stroke:#dc3545,color:#842029
    style WithContext fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Creating a Custom AuthContext & Provider',
              explanation: 'Build a production-grade AuthProvider exposing user status, login, and logout methods.',
              command: `// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('vinnertech_auth_user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = (email, role = 'Developer') => {
    const userData = { email, name: email.split('@')[0], role, token: 'jwt-token-sample' };
    setUser(userData);
    localStorage.setItem('vinnertech_auth_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('vinnertech_auth_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: Boolean(user) }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom Hook to consume AuthContext cleanly
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};`
            },
            {
              title: 'Step 2: Consuming Global Auth State in Navigation Bar',
              explanation: 'Read logged-in status directly in the Navbar without any prop drilling.',
              command: `// src/components/NavbarAuth.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';

export function NavbarAuth() {
  const { user, logout, login, isAuthenticated } = useAuth();

  return (
    <header className="navbar navbar-expand-lg bg-light border-bottom px-4">
      <span className="navbar-brand fw-bold">Enterprise App</span>
      <div className="ms-auto d-flex align-items-center gap-3">
        {isAuthenticated ? (
          <>
            <span className="text-muted small">Welcome, <strong>{user.name}</strong> ({user.role})</span>
            <button className="btn btn-sm btn-outline-danger rounded-pill" onClick={logout}>
              Sign Out
            </button>
          </>
        ) : (
          <button 
            className="btn btn-sm btn-primary rounded-pill" 
            onClick={() => login('sarah@vinnertech.com', 'Architect')}
          >
            Demo Login
          </button>
        )}
      </div>
    </header>
  );
}`
            },
            {
              title: 'Step 3: Complex State Machines with useReducer',
              explanation: 'Manage multi-action state transitions (Fetch Start, Fetch Success, Fetch Error) reliably using useReducer.',
              command: `// src/hooks/useFetchReducer.js
import { useReducer, useEffect } from 'react';

const initialState = { data: null, loading: true, error: null };

function fetchReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function useFetchWithReducer(url) {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    let isMounted = true;
    dispatch({ type: 'FETCH_START' });

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (isMounted) dispatch({ type: 'FETCH_SUCCESS', payload: data });
      })
      .catch(err => {
        if (isMounted) dispatch({ type: 'FETCH_ERROR', payload: err.message });
      });

    return () => { isMounted = false; };
  }, [url]);

  return state;
}`
            }
          ],
          verification: 'Click the "Demo Login" button in NavbarAuth and observe user state persisting to LocalStorage and updating the entire UI without passing props.',
          expectedResult: 'Global Context and useReducer manage cross-component state transitions with zero prop drilling.',
          summary: 'React Context API teleports global state directly to descendant consumers, while useReducer provides structured state machine transitions.'
        }
      ]
    }
  ]
};

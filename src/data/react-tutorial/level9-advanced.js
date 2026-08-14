export const level9Advanced = {
  id: 'level-9',
  title: 'Level 9: Advanced Patterns & Performance',
  icon: 'bi-speedometer2',
  color: '#fd7e14',
  description: 'Component composition vs inheritance, Error Boundaries for fault tolerance, React.memo performance profiling, Code Splitting with React.lazy and Suspense, and frontend security best practices.',
  chapters: [
    {
      id: 'advanced-patterns-perf',
      title: '09. Optimization, Lazy Loading & Security',
      lessons: [
        {
          id: 'error-boundaries-and-lazy-loading',
          slug: 'error-boundaries-and-lazy-loading',
          order: '9.1',
          title: 'Error Boundaries & Code Splitting (`React.lazy` & `Suspense`)',
          subtitle: 'Catching runtime JavaScript crashes gracefully with fallback UI, and reducing initial bundle download size with dynamic code splitting.',
          chapterId: 'advanced-patterns-perf',
          chapterTitle: '09. Optimization, Lazy Loading & Security',
          levelTitle: 'Level 9: Advanced Patterns & Performance',
          goal: 'Master implementing Error Boundaries to prevent full-screen crashes and split heavy route bundles using React.lazy and Suspense.',
          prerequisites: [
            'Level 1 through Level 8 completed.'
          ],
          concept: `**1. What is an Error Boundary?**\nIn standard React, if a JavaScript runtime error throws inside a component during rendering, the entire React component tree unmounts and **the user is left with a blank white screen**!\n\nAn **Error Boundary** is a React component that catches JavaScript errors anywhere in its child component tree, logs the error, and displays a friendly **fallback UI** (e.g. "Something went wrong. Click to reload") instead of crashing the whole website.\n\n---\n\n**2. Code Splitting with \`React.lazy()\` & \`<Suspense>\`**\nBy default, Vite bundles your entire application into a single JavaScript file. If your admin dashboard has 50 charts and PDF exporters, normal users downloading the homepage still download all 5MB of code!\n\n**\`React.lazy()\`** lets you load component code dynamically over the network **only when the user actually navigates to that page**:\n\`\`\`javascript\nconst AdminDashboard = React.lazy(() => import('./pages/AdminDashboard'));\n\`\`\`\nWrap lazy components in **\`<Suspense fallback={<LoadingSpinner />}>\`** to show a smooth loading indicator while the chunk downloads!`,
          diagram: `flowchart TD
    App["<App /> Entry Bundle (Small 50KB)"]
    App -- "User navigates to /admin" --> Lazy["React.lazy() fetches admin-chunk.js dynamically"]
    Lazy --> Sus["<Suspense fallback={<Spinner />}> displays while downloading"]
    Sus --> Admin["<AdminDashboard /> mounts cleanly!"]
    
    style App fill:#cfe2ff,stroke:#084298
    style Sus fill:#fff3cd,stroke:#ffc107
    style Admin fill:#d1e7dd,stroke:#198754`,
          steps: [
            {
              title: 'Step 1: Implementing Lazy Route Loading with Suspense',
              explanation: 'Notice how heavy pages are imported dynamically with React.lazy and wrapped in Suspense.',
              command: `import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Lazy-load page components on demand
const HomePage = lazy(() => import('./pages/HomePage'));
const AnalyticsDashboard = lazy(() => import('./pages/AnalyticsDashboard'));

function PageLoader() {
  return (
    <div className="d-flex justify-content-center p-5">
      <div className="spinner-border text-primary" role="status"></div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/analytics" element={<AnalyticsDashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}`
            }
          ],
          verification: 'Open browser DevTools Network tab. Navigate to `/analytics` and watch `AnalyticsDashboard.js` chunk download on demand.',
          expectedResult: 'Faster initial website load times and localized error containment.',
          quiz: {
            question: 'What is the purpose of wrapping lazy-loaded components in `<Suspense fallback={...}>`?',
            options: [
              'To show an alternative UI (like a loading spinner) while the asynchronous JavaScript bundle chunk is being fetched over the network.',
              'To compile JSX into Python.',
              'To stop all CSS animations.',
              'To restart the web browser.'
            ],
            correctIndex: 0,
            explanation: '`<Suspense>` provides a declarative fallback indicator while dynamic asynchronous operations (like chunk downloads or asset loading) complete.'
          },
          summary: 'Use Error Boundaries to contain render crashes and `React.lazy()` with `<Suspense>` for route-based code splitting and minimal initial bundle size.'
        }
      ]
    }
  ]
};

export const level10TestingDeploy = {
  id: 'level-10',
  title: 'Level 10: Testing, Debugging & Deployment',
  icon: 'bi-check-all',
  color: '#20c997',
  description: 'React Developer Tools inspection, unit and component testing with React Testing Library, environment variables (.env), and production Vite builds for GitHub Pages.',
  chapters: [
    {
      id: 'testing-and-deployment',
      title: '10. Testing, DevTools & Deployment',
      lessons: [
        {
          id: 'react-testing-and-deployment',
          slug: 'react-testing-and-deployment',
          order: '10.1',
          title: 'React Testing Library, Environment Config & Production Builds',
          subtitle: 'Writing tests that mimic real user behavior, managing .env configs securely, and deploying to GitHub Pages with SPA routing support.',
          chapterId: 'testing-and-deployment',
          chapterTitle: '10. Testing, DevTools & Deployment',
          levelTitle: 'Level 10: Testing, Debugging & Deployment',
          goal: 'Master testing components using React Testing Library (RTL), managing environment variables, and building optimized production bundles for GitHub Pages.',
          prerequisites: [
            'Level 1 through Level 9 completed.'
          ],
          concept: `**1. React Testing Library (RTL) Philosophy:**\n> *"The more your tests resemble the way your software is used, the more confidence they can give you."*\nInstead of testing internal component implementation details (like state variable names), RTL tests what the **end user actually sees and interacts with** (buttons, text on screen, form inputs).\n\n### 2. Environment Variables in Vite:\n- Create \`.env\` or \`.env.production\` files in the project root.\n- In Vite, client-exposed environment variables **MUST begin with \`VITE_\`** (e.g. \`VITE_API_URL=https://api.vinnertech.com\`).\n- Read them in React via **\`import.meta.env.VITE_API_URL\`**.\n- ⚠️ **SECURITY WARNING**: Never put secret database passwords or private API keys in client-side \`.env\` files! All frontend variables are bundled and visible to anyone inspecting browser sources.\n\n### 3. Production Build & GitHub Pages SPA Strategy:\nRunning \`npm run build\` generates a minified, tree-shaken \`dist/\` folder. On GitHub Pages, because it is a static host without a Node server to catch sub-routes, configuring Vite's \`base: '/repo-name/'\` ensures asset URLs resolve properly.`,
          diagram: `flowchart LR
    Dev["React Code + JSX"] -- "npm run build" --> Vite["Vite Bundler (Tree-shaking & Minification)"]
    Vite --> Dist["dist/ Static HTML, CSS & JS Chunks"]
    Dist --> Host["GitHub Pages / Vercel / Netlify (Production Live!)"]
    
    style Dev fill:#fff3cd,stroke:#ffc107
    style Vite fill:#cfe2ff,stroke:#084298
    style Dist fill:#d1e7dd,stroke:#198754
    style Host fill:#d1e7dd,stroke:#198754`,
          steps: [
            {
              title: 'Step 1: Writing a User-Centric Component Test with RTL',
              explanation: 'Simulate a user typing into an input and clicking a button.',
              command: `import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

test('increments counter when user clicks plus button', async () => {
  // 1. Render component to virtual DOM
  render(<Counter />);

  // 2. Query element by user-visible text
  const countText = screen.getByText(/Count: 0/i);
  const plusButton = screen.getByRole('button', { name: /\+/i });

  // 3. Simulate real user click
  await userEvent.click(plusButton);

  // 4. Assert outcome
  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
});`
            }
          ],
          verification: 'Run `npm run build` in your terminal and verify that the `dist/` directory generates with zero syntax errors.',
          expectedResult: 'Tested, production-optimized React bundle ready for cloud deployment.',
          quiz: {
            question: 'Why must frontend environment variables in Vite start with `VITE_`?',
            options: [
              'Because Vite was created by a French developer.',
              'To prevent accidental leakage of sensitive machine environment variables into public browser JavaScript bundles.',
              'To make variables run faster.',
              'It is optional.'
            ],
            correctIndex: 1,
            explanation: 'Vite strictly requires the `VITE_` prefix to ensure only explicitly intended public configuration values are embedded in client-side bundle files.'
          },
          summary: 'Test with React Testing Library focusing on user behavior. Prefix public client env vars with `VITE_`. Run `npm run build` for production deployment.'
        }
      ]
    }
  ]
};

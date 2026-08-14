export const level6Routing = {
  id: 'level-6',
  title: 'Level 6: Routing with React Router',
  icon: 'bi-signpost-split',
  color: '#6f42c1',
  description: 'Single Page Application routing, BrowserRouter, dynamic route parameters (useParams), nested layout routes (<Outlet />), and programmatic redirection (useNavigate).',
  chapters: [
    {
      id: 'react-router-spa',
      title: '06. React Router & Navigation',
      lessons: [
        {
          id: 'spa-routing-basics',
          slug: 'spa-routing-basics',
          order: '6.1',
          title: 'Single Page Application (SPA) Routing & React Router',
          subtitle: 'Why traditional anchor tags refresh the page, how client-side routing works with HTML5 History API, and setting up BrowserRouter.',
          chapterId: 'react-router-spa',
          chapterTitle: '06. React Router & Navigation',
          levelTitle: 'Level 6: Routing with React Router',
          goal: 'Understand client-side routing in SPAs, configure BrowserRouter, Routes, Route, and use Link instead of traditional anchor tags.',
          prerequisites: [
            'Level 1 through Level 5 completed.'
          ],
          concept: `**Traditional Multi-Page Apps (MPA) vs Single Page Apps (SPA):**\n- **Traditional MPA**: Clicking an \`<a href="/about">\` link sends an HTTP request to the server. The browser turns white, discards all JavaScript state, and downloads a brand-new HTML page.\n- **React SPA**: The browser downloads one single HTML page once. When the user navigates, **React Router intercepts the URL change** using the browser's HTML5 History API (\`pushState\`), swaps out the active page component in milliseconds, and **preserves all application state without page reloads!**\n\n### Core React Router Components:\n- **\`<BrowserRouter>\`**: Wraps your application to enable client-side routing.\n- **\`<Routes>\`**: Container that matches the current browser URL against child routes.\n- **\`<Route path="..." element={<Component />} />\`**: Maps a specific URL path to a React component.\n- **\`<Link to="...">\`**: Renders an accessible anchor tag that navigates client-side without refreshing the page.`,
          diagram: `flowchart TD
    User["User clicks <Link to='/products'>"] --> RR["React Router intercepts URL change"]
    RR --> Hist["URL updated in browser bar (history.pushState)"]
    Hist --> Comp["<ProductPage /> component rendered instantly! (0ms reload)"]
    
    style User fill:#fff3cd,stroke:#ffc107
    style RR fill:#cfe2ff,stroke:#084298
    style Comp fill:#d1e7dd,stroke:#198754`,
          steps: [
            {
              title: 'Step 1: Setting Up React Router in App.jsx',
              explanation: 'Configure routes with a fallback 404 Not Found page.',
              command: `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() { return <h2>Welcome Home</h2>; }
function About() { return <h2>About Us</h2>; }
function NotFound() { return <h2>404 - Page Not Found</h2>; }

export default function App() {
  return (
    <BrowserRouter>
      <nav className="p-3 bg-light border-bottom d-flex gap-3">
        <Link to="/" className="fw-bold">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}`
            }
          ],
          verification: 'Click the navigation links and verify that the page URL changes instantly without browser reloading.',
          expectedResult: 'Instant client-side transitions between routes.',
          quiz: {
            question: 'Why should you use `<Link to="/dashboard">` instead of `<a href="/dashboard">` in React Router?',
            options: [
              'Because `<Link>` is styled with Bootstrap.',
              'Because `<Link>` prevents full-page browser reloads and performs client-side component swapping, preserving memory state.',
              'Because `<a>` is forbidden in HTML5.',
              'There is no difference.'
            ],
            correctIndex: 1,
            explanation: 'Standard `<a>` tags cause the browser to perform a full HTTP round-trip request, wiping out all in-memory React state.'
          },
          summary: 'React Router provides client-side SPA navigation via `<BrowserRouter>`, `<Routes>`, `<Route>`, and `<Link>`. Always use `<Link>` to prevent full page reloads.'
        },
        {
          id: 'dynamic-routes-and-outlets',
          slug: 'dynamic-routes-and-outlets',
          order: '6.2',
          title: 'Dynamic Routes (`useParams`), `useNavigate` & `<Outlet />`',
          subtitle: 'Extracting route parameters, nested layouts with Outlets, and programmatic navigation after form actions.',
          chapterId: 'react-router-spa',
          chapterTitle: '06. React Router & Navigation',
          levelTitle: 'Level 6: Routing with React Router',
          goal: 'Master dynamic segments like `/users/:id`, extracting URL parameters with `useParams`, nested layout routing with `<Outlet />`, and redirecting with `useNavigate`.',
          prerequisites: [
            'Lesson 6.1 completed.'
          ],
          concept: `### 1. Dynamic Route Parameters (\`:param\` and \`useParams\`):\nWhen building apps like e-commerce or user management, you have millions of unique URLs matching the same page template (e.g. \`/products/42\`, \`/employees/108\`).\nIn React Router, define dynamic segments with a colon (\`path="/employees/:id"\`) and read the parameter using **\`useParams()\`**:\n\`\`\`javascript\nfunction EmployeeDetailPage() {\n  const { id } = useParams(); // { id: "108" }\n  return <h2>Employee Record #{id}</h2>;\n}\n\`\`\`\n\n---\n\n### 2. Programmatic Navigation with \`useNavigate\`:\nWhen you need to redirect the user after an action (like submitting a form or logging in), call the **\`useNavigate()\`** hook:\n\`\`\`javascript\nconst navigate = useNavigate();\nconst handleSave = async () => {\n  await api.save();\n  navigate('/employees'); // Redirect to employee list!\n};\n\`\`\`\n\n---\n\n### 3. Nested Layouts with \`<Outlet />\`:\nAllows child routes to render inside a shared parent layout (like a dashboard with a persistent sidebar and navbar).`,
          steps: [
            {
              title: 'Step 1: Implementing a Nested Layout with Dynamic Details',
              explanation: 'Notice how `<Outlet />` renders the matched child page inside the master layout.',
              command: `import { Routes, Route, Outlet, Link, useParams, useNavigate } from 'react-router-dom';

// Master Dashboard Layout
function DashboardLayout() {
  return (
    <div className="d-flex" style={{ minHeight: '80vh' }}>
      <aside className="p-3 bg-dark text-white" style={{ width: '220px' }}>
        <h5>Admin Portal</h5>
        <ul className="nav flex-column mt-3">
          <li className="nav-item"><Link to="/admin/employees" className="nav-link text-white">Employees</Link></li>
        </ul>
      </aside>
      <main className="flex-grow-1 p-4">
        {/* Child routes render here! */}
        <Outlet />
      </main>
    </div>
  );
}

// Child Detail Component
function EmployeeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h3>Viewing Employee #{id}</h3>
      <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>
        ← Back
      </button>
    </div>
  );
}`
            }
          ],
          verification: 'Navigate to `/admin/employees/12` and verify that the sidebar remains rendered while the detail view is populated dynamically.',
          expectedResult: 'Clean, hierarchical layout nesting and dynamic URL parsing.',
          quiz: {
            question: 'What is the purpose of the `<Outlet />` component in React Router?',
            options: [
              'To charge your computer battery.',
              'To act as a placeholder where child route elements render inside a shared parent layout.',
              'To connect to a WebSocket.',
              'To render an error message.'
            ],
            correctIndex: 1,
            explanation: '`<Outlet />` tells React Router where in the parent layout component to render the currently matched nested child route.'
          },
          summary: 'Use `:param` in path and `useParams()` to read dynamic IDs. Use `<Outlet />` for persistent layouts and `useNavigate()` for programmatic redirects.'
        }
      ]
    }
  ]
};

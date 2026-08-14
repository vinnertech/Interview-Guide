export const level10TestingDeploy = {
  id: 'level-10',
  title: 'Level 10: Testing, Debugging & Deployment',
  icon: 'bi-check-all',
  color: '#20c997',
  description: 'React Developer Tools inspection, component testing with React Testing Library, environment variables (.env), and production Vite builds for GitHub Pages in baby steps.',
  chapters: [
    {
      id: 'testing-and-deployment',
      title: '10. Testing, DevTools & Deployment',
      lessons: [
        {
          id: 'react-testing-and-deployment',
          slug: 'react-testing-and-deployment',
          order: '10.1',
          title: 'React Testing Library, Environment Config & Production Deployment',
          subtitle: 'Writing tests that mimic real user behavior, managing .env configs securely, and deploying to GitHub Pages with SPA routing support in baby steps.',
          chapterId: 'testing-and-deployment',
          chapterTitle: '10. Testing, DevTools & Deployment',
          levelTitle: 'Level 10: Testing, Debugging & Deployment',
          goal: 'Master testing components using React Testing Library (RTL), configuring Vite environment variables, and deploying production builds.',
          prerequisites: [
            'Level 1 through Level 9 completed.'
          ],
          concept: `### 1. React Testing Library (RTL) Philosophy
> *"The more your tests resemble the way your software is used, the more confidence they can give you."*
Instead of testing internal component implementation details (like state variable names), RTL tests what the **end user actually sees and interacts with** (buttons, text on screen, form inputs).

### 2. Environment Variables in Vite:
- Create \`.env\` or \`.env.production\` files in the project root.
- In Vite, client-exposed environment variables **MUST begin with VITE_** (e.g. \`VITE_API_URL=https://api.vinnertech.com\`).
- Read them in React via \`import.meta.env.VITE_API_URL\`.
- ⚠️ **SECURITY WARNING**: Never put secret database passwords or private API keys in client-side \`.env\` files! All frontend variables are bundled and visible to anyone inspecting browser sources.

### 3. Production Build & GitHub Pages SPA Strategy:
Running \`npm run build\` generates a minified, tree-shaken \`dist/\` folder. On GitHub Pages, configuring Vite's \`base: '/Interview-Guide/'\` ensures asset URLs resolve properly.`,
          diagram: `flowchart LR
    Dev["React Code + JSX"] -- "npm run build" --> Vite["Vite Bundler (Tree-shaking & Minification)"]
    Vite --> Dist["dist/ Static HTML, CSS & JS Chunks"]
    Dist --> Host["GitHub Pages / Vercel / Netlify (Production Live!)"]
    
    style Dev fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Vite fill:#cfe2ff,stroke:#084298,color:#084298
    style Dist fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Host fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Writing a User-Centric Component Test with RTL',
              explanation: 'Simulate a user typing into an input and clicking a button.',
              command: `// src/components/Counter.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

test('increments counter when user clicks plus button', async () => {
  // 1. Render component to virtual DOM
  render(<Counter />);

  // 2. Query element by user-visible text
  const countText = screen.getByText(/Count: 0/i);
  const plusButton = screen.getByRole('button', { name: /\\+/i });

  // 3. Simulate real user click
  await userEvent.click(plusButton);

  // 4. Assert outcome
  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
});`
            },
            {
              title: 'Step 2: Configuring Vite Environment Variables (.env)',
              explanation: 'Set up development and production environment files with prefix VITE_.',
              command: `# .env.development
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_TITLE=VinnerTech Dev

# .env.production
VITE_API_BASE_URL=https://api.vinnertech.com/v1
VITE_APP_TITLE=VinnerTech Learning Guide`
            },
            {
              title: 'Step 3: Building and Deploying to GitHub Pages',
              explanation: 'Configure vite.config.js base property and run the build command.',
              command: `// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Interview-Guide/' // Matches your GitHub repo name!
});

// Run production compilation in terminal
// npm run build`
            }
          ],
          verification: 'Run `npm run build` in your terminal and verify that the `dist/` directory generates with zero syntax errors.',
          expectedResult: 'Tested, production-optimized React bundle ready for cloud deployment.',
          summary: 'You have mastered React Testing Library testing strategies, environment configuration, and production bundling for GitHub Pages.'
        }
      ]
    }
  ]
};

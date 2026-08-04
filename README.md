# Enterprise Interview Guide Portal

A comprehensive, responsive Single Page Application (SPA) designed to help developers prepare for technical interviews. Features over 1000+ curated questions across 17 different technology stacks.

## Technology Stack
- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router DOM (v6)
- **Styling**: Vanilla CSS + Bootstrap 5
- **Icons**: Bootstrap Icons
- **Syntax Highlighting**: Prism.js
- **SEO**: React Helmet Async

## Features
- **True SPA Architecture**: Lightning-fast navigation without page reloads.
- **Dynamic Content Loading**: Questions are structured in separate ES modules for efficient loading.
- **Dark/Light Mode**: Smooth theme toggling that respects user preference via `localStorage`.
- **Search & Filter**: Real-time filtering by category and full-text search.
- **Code Copying**: One-click code copying utility for all examples.
- **GitHub Pages Ready**: Out-of-the-box configuration with 404 fallback routing.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open `http://localhost:5173` in your browser.

## Production Build

To test the optimized production build locally:

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment

The repository is configured for automatic deployments using GitHub Actions.

### Deployment Flow:
1. Make changes to the code.
2. Commit and push to the `main` or `master` branch.
3. The GitHub Action `.github/workflows/deploy.yml` will automatically trigger.
4. It will build the React application using Vite and deploy the generated hashed assets in the `dist/` directory to GitHub Pages.

> **Note**: Because this is a React SPA running on GitHub Pages (which is a static file host), we utilize a `404.html` fallback strategy. If a user directly accesses `/react`, GitHub Pages will hit `404.html`, which redirects to `index.html` with the path data so React Router can properly load the view.

### Base Path Configuration
If you deploy this site to a GitHub Pages subpath (e.g., `https://your-username.github.io/my-repo-name/`), you MUST update the `base` configuration in `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/my-repo-name/', 
})
```
You will also need to update `var pathSegmentsToKeep = 1;` in `public/404.html` so the router knows to ignore the repository name in the path.

## Cache Behavior
This application does **not** use a Service Worker or PWA caching by design. When a new deployment occurs, Vite generates entirely new hashed filenames (e.g., `index-8Adf9c.js`). This completely bypasses CDN and browser caching, guaranteeing that your users always receive the absolute latest code after a hard refresh, preventing stale deployments.

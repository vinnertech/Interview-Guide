// Level 13: Routing, Guards & Interceptors (In-Depth Expanded Edition)
export const level13RoutingGuardsInterceptors = {
  id: 'level-13',
  title: 'Level 13: Routing, Guards & Interceptors',
  icon: 'bi-signpost-split-fill',
  color: '#0d9488',
  description: 'Master provideRouter(), route definitions, RouterLink, route & query parameters, functional CanActivateFn route guards, functional HttpInterceptorFn for JWT token injection, and global error handling in baby steps.',
  chapters: [
    {
      id: 'routing-guards-and-interceptors',
      title: '13. Routing, Security & Interceptors',
      lessons: [
        {
          id: 'angular-routing-and-route-params',
          slug: 'angular-routing-and-route-params',
          order: '13.1',
          title: 'Angular Routing: Routes, RouterOutlet, RouterLink & Parameters',
          subtitle: 'Configuring SPA routes, RouterLink active styling, reading route params with inject(ActivatedRoute) or withComponentInputBinding() in baby steps.',
          chapterId: 'routing-guards-and-interceptors',
          chapterTitle: '13. Routing, Security & Interceptors',
          levelTitle: 'Level 13: Routing, Guards & Interceptors',
          goal: 'Master setting up client-side SPA navigation, extracting dynamic URL route parameters (/products/:id), and reading query strings.',
          prerequisites: ['Level 12 completed.'],
          concept: `### How Angular Routing Works
In a Single Page Application (SPA), clicking a link does **NOT trigger a browser full-page reload**.
Instead:
1. The **Angular Router** intercepts the URL change.
2. It matches the URL to a defined **\`Routes\`** configuration table.
3. It dynamically instantiates the matching component and renders it inside the **\`<router-outlet></router-outlet>\`** placeholder!

---

### Dynamic Route Parameters & Component Input Binding:
Modern Angular allows route parameters (\`/users/:id\`) to be passed directly as **Component Inputs (\`input<string>()\`)** simply by enabling **\`withComponentInputBinding()\`** in \`provideRouter\`!`,
          diagram: `flowchart TD
    Browser["User Navigates to /dashboard/products/42"] --> Router["Angular Router (Routes Config)"]
    Router --> Match["Matches { path: 'products/:id', component: ProductDetailComponent }"]
    Match --> Outlet["Instantiates and renders into <router-outlet></router-outlet>"]
    Outlet --> Input["Passes '42' directly as an input to ProductDetailComponent!"]
    
    style Browser fill:#cfe2ff,stroke:#084298,color:#084298
    style Router fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Match fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Outlet fill:#10b981,color:#fff
    style Input fill:#e2e3e5,stroke:#41464b,color:#141619`,
          steps: [
            {
              title: 'Step 1: Defining Routes in app.routes.ts',
              explanation: 'Create routes with lazy-loading and redirects.',
              command: `// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { 
    path: 'dashboard', 
    loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent) 
  },
  { 
    path: 'products/:id', 
    loadComponent: () => import('./features/products/product-detail.component').then(m => m.ProductDetailComponent) 
  },
  { path: '**', loadComponent: () => import('./pages/not-found.component').then(m => m.NotFoundComponent) }
];`
            },
            {
              title: 'Step 2: Receiving Route Parameters via Signal Inputs',
              explanation: 'Read URL parameter id directly as a component input.',
              command: `import { Component, input } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  template: \`
    <div class="p-3 border rounded shadow-sm">
      <h5>Product Details</h5>
      <p>Displaying product ID from URL: <strong>{{ id() }}</strong></p>
    </div>
  \`
})
export class ProductDetailComponent {
  // Automatically populated from /products/:id with withComponentInputBinding()!
  id = input.required<string>();
}`
            }
          ],
          verification: 'Navigate to `/products/99` and verify that `id()` automatically reads and displays `99`.',
          expectedResult: 'Declarative routing with modern input binding.',
          summary: 'Use provideRouter(routes, withComponentInputBinding()) for declarative SPA navigation with direct parameter input injection.'
        },
        {
          id: 'functional-guards-and-interceptors',
          slug: 'functional-guards-and-interceptors',
          order: '13.2',
          title: 'Functional Route Guards (CanActivateFn) & HTTP Interceptors (HttpInterceptorFn)',
          subtitle: 'Protecting routes with functional CanActivateFn, injecting JWT Bearer tokens with HttpInterceptorFn, and understanding frontend security boundaries in baby steps.',
          chapterId: 'routing-guards-and-interceptors',
          chapterTitle: '13. Routing, Security & Interceptors',
          levelTitle: 'Level 13: Routing, Guards & Interceptors',
          goal: 'Master protecting unauthorized routes using functional guards and automatically injecting authentication headers via functional HTTP interceptors.',
          prerequisites: ['Lesson 13.1 completed.'],
          concept: `### Modern Functional Route Guards (\`CanActivateFn\`)
In modern Angular, route guards are simple **functions** instead of heavy classes:

\`\`\`typescript
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }
  return router.createUrlTree(['/login']);
};
\`\`\`

---

### Important Security Architecture Rule:
> **Frontend Route Guards are a UI/UX mechanism, NOT a true security boundary!**
Any user can open browser DevTools and manipulate JavaScript memory. **True security is enforced strictly on the backend API server** by validating JWT tokens on every database request!

---

### Functional HTTP Interceptor (\`HttpInterceptorFn\`):
Interceptors act as middleware for HTTP calls, automatically attaching headers (e.g. \`Authorization: Bearer <token>\`) or catching global 401 Unauthorized errors!`,
          diagram: `flowchart LR
    Req["Outgoing HttpClient Request"] --> Interceptor["HttpInterceptorFn (authInterceptor)"]
    Interceptor -->|"Clones request & attaches 'Authorization: Bearer xyz'"| Server["Secure Backend API"]
    Server -->|"401 Unauthorized Response"| Catch["catchError: Redirects to /login"]
    
    style Req fill:#cfe2ff,stroke:#084298,color:#084298
    style Interceptor fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Server fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Catch fill:#f8d7da,stroke:#dc3545,color:#842029`,
          steps: [
            {
              title: 'Step 1: Implementing a Functional JWT Auth Interceptor',
              explanation: 'Clone outgoing requests and attach token.',
              command: `import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  if (token) {
    // Clone request because HttpRequest objects in Angular are immutable!
    const authReq = req.clone({
      setHeaders: {
        Authorization: \`Bearer \${token}\`
      }
    });
    return next(authReq);
  }

  return next(req);
};`
            },
            {
              title: 'Step 2: Registering the Interceptor in app.config.ts',
              explanation: 'Add withInterceptors([authInterceptor]) to provideHttpClient.',
              command: `// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor])
    )
  ]
};`
            }
          ],
          verification: 'Make an API request and inspect the Request Headers in Chrome DevTools Network panel: verify the `Authorization: Bearer` header is present.',
          expectedResult: 'Automated, global authentication headers across all application HTTP calls.',
          summary: 'Use functional CanActivateFn guards for route redirection, and functional HttpInterceptorFn middleware to inject authentication tokens and handle global API errors.'
        }
      ]
    }
  ]
};

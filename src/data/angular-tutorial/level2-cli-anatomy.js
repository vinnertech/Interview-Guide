// Level 2: Angular CLI, Project Anatomy & Bootstrapping (In-Depth Expanded Edition)
export const level2CliAnatomy = {
  id: 'level-2',
  title: 'Level 2: Angular CLI & Project Anatomy',
  icon: 'bi-terminal-fill',
  color: '#c3002f',
  description: 'Master installing the Angular CLI, generating projects with ng new, understanding angular.json, tsconfig, main.ts, and bootstrapping standalone applications in baby steps.',
  chapters: [
    {
      id: 'angular-cli-and-anatomy',
      title: '02. CLI Tooling & Workspace Anatomy',
      lessons: [
        {
          id: 'installing-angular-cli-and-first-app',
          slug: 'installing-angular-cli-and-first-app',
          order: '2.1',
          title: 'Installing Angular CLI & Creating Your First Application',
          subtitle: 'Global installation with npm, running ng new with modern flags, starting the development server, and understanding build outputs.',
          chapterId: 'angular-cli-and-anatomy',
          chapterTitle: '02. CLI Tooling & Workspace Anatomy',
          levelTitle: 'Level 2: Angular CLI & Project Anatomy',
          goal: 'Install the official Angular CLI tooling, generate a modern standalone project, and run the development server.',
          prerequisites: ['Node.js (v18.19+ or v20+) installed.'],
          concept: `### What is the Angular CLI?
The **Angular CLI (Command Line Interface)** is the official automation engine for Angular development. It manages:
1. **Scaffolding**: Creating workspaces, components, services, pipes, directives, and guards with \`ng generate\`.
2. **Local Development**: Starting the dev server with Hot Module Replacement (\`ng serve\`).
3. **Optimized Production Builds**: Bundling, tree-shaking, minification, and AOT compilation (\`ng build\`).
4. **Automated Upgrades**: Running \`ng update\` to automatically migrate project code across Angular major versions!`,
          diagram: `flowchart LR
    Dev["Developer Terminal"] --> CLI["Angular CLI (ng commands)"]
    CLI --> Gen["ng generate component / service"]
    CLI --> Serve["ng serve (Local Dev Server at port 4200)"]
    CLI --> Build["ng build (Optimized Production Output in dist/)"]
    
    style Dev fill:#cfe2ff,stroke:#084298,color:#084298
    style CLI fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Gen fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Serve fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Build fill:#10b981,color:#fff`,
          steps: [
            {
              title: 'Step 1: Install Angular CLI Globally',
              explanation: 'Install the latest official CLI via npm.',
              command: `npm install -g @angular/cli
ng version`
            },
            {
              title: 'Step 2: Generate a Modern Standalone Application',
              explanation: 'Create a new project with standalone components and routing.',
              command: `ng new my-angular-app --routing --style=css
cd my-angular-app
ng serve --open`
            }
          ],
          verification: 'Open your browser at `http://localhost:4200` and confirm the default Angular welcome page is rendered.',
          expectedResult: 'A fully initialized, running Angular development workspace.',
          summary: 'Use the Angular CLI to scaffold, develop, build, and update modern Angular applications.'
        },
        {
          id: 'angular-project-structure-and-bootstrapping',
          slug: 'angular-project-structure-and-bootstrapping',
          order: '2.2',
          title: 'Understanding Project Anatomy & Standalone Bootstrapping',
          subtitle: 'Deep dive into angular.json, tsconfig.json, package.json, index.html, main.ts, and bootstrapApplication() in baby steps.',
          chapterId: 'angular-cli-and-anatomy',
          chapterTitle: '02. CLI Tooling & Workspace Anatomy',
          levelTitle: 'Level 2: Angular CLI & Project Anatomy',
          goal: 'Understand every file in an Angular workspace and how the standalone bootstrap process works.',
          prerequisites: ['Lesson 2.1 completed.'],
          concept: `### Modern Angular Project Structure:
\`\`\`text
my-angular-app/
├── angular.json         <- Master workspace configuration (build, assets, styles)
├── package.json         <- Dependencies (@angular/core, @angular/router, etc.)
├── tsconfig.json        <- TypeScript compiler strict mode settings
└── src/
    ├── index.html       <- Single HTML entry point (contains <app-root></app-root>)
    ├── main.ts          <- Application bootstrap entry point
    ├── styles.css       <- Global stylesheet
    └── app/
        ├── app.component.ts     <- Root Standalone Component Class
        ├── app.component.html   <- Root Component Template
        ├── app.component.css    <- Root Component Styles
        └── app.config.ts        <- Application-wide Providers (Router, HTTP)
\`\`\`

---

### How Modern Standalone Bootstrapping Works:
In modern Angular (Angular 17+), the application bootstraps directly via **\`bootstrapApplication(AppComponent, appConfig)\`** in \`src/main.ts\` without requiring a heavy \`AppModule\`!`,
          diagram: `flowchart TD
    Index["1. index.html (<app-root></app-root>)"] --> Main["2. src/main.ts (Executes bootstrapApplication)"]
    Main --> Config["3. app.config.ts (Configures provideRouter, provideHttpClient)"]
    Config --> RootComp["4. app.component.ts (Root Standalone Component loaded into <app-root>)"]
    
    style Index fill:#cfe2ff,stroke:#084298,color:#084298
    style Main fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Config fill:#d1e7dd,stroke:#198754,color:#0f5132
    style RootComp fill:#10b981,color:#fff`,
          steps: [
            {
              title: 'Step 1: Inspecting the Bootstrap File (src/main.ts)',
              explanation: 'Observe how the standalone root component is launched.',
              command: `// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));`
            },
            {
              title: 'Step 2: Inspecting Application Providers (src/app/app.config.ts)',
              explanation: 'Configure global router and HTTP features cleanly.',
              command: `// src/app/app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient()
  ]
};`
            }
          ],
          verification: 'Inspect `src/main.ts` and `src/app/app.config.ts` in your code editor to understand the standalone initialization chain.',
          expectedResult: 'Complete clarity on how Angular starts up without legacy NgModules.',
          summary: 'Modern Angular applications bootstrap via bootstrapApplication(AppComponent, appConfig) in src/main.ts, providing a lightweight, modular architecture.'
        }
      ]
    }
  ]
};

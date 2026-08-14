// Level 1: Angular Foundations & Architecture (In-Depth Expanded Edition)
export const level1Foundations = {
  id: 'level-1',
  title: 'Level 1: Absolute Beginner & Angular Foundations',
  icon: 'bi-shield-shaded',
  color: '#dd0031',
  description: 'Understand what Angular is, Angular vs React/Vanilla JS, how the browser executes Angular, the Angular architecture, and TypeScript prerequisites in complete baby steps.',
  chapters: [
    {
      id: 'angular-foundations',
      title: '01. Angular Architecture & Mental Models',
      lessons: [
        {
          id: 'what-is-angular',
          slug: 'what-is-angular',
          order: '1.1',
          title: 'What is Angular? (Framework vs Library & Architecture)',
          subtitle: 'The complete mental model: Why Google created Angular, Framework vs Library, how Angular applications compile to JavaScript, and browser execution.',
          chapterId: 'angular-foundations',
          chapterTitle: '01. Angular Architecture & Mental Models',
          levelTitle: 'Level 1: Absolute Beginner & Angular Foundations',
          goal: 'Understand what Angular is, how it differs from libraries like React, and how the compilation pipeline runs in the browser.',
          prerequisites: ['Basic familiarity with HTML, CSS, and web browsers.'],
          concept: `### What is Angular?

**Angular** is a complete, enterprise-grade, TypeScript-based open-source **Web Application Framework** developed and maintained by the Angular Team at Google and a global community.

---

### The Fundamental Distinction: Framework vs. Library
A common question for beginners is: *"How does Angular differ from React or Vue?"*

- **React / Vue (A UI Library)**:
  React only handles the **View layer** (rendering components). To build a complete web app, you must independently research, select, install, and configure external third-party libraries for Routing, HTTP Client, Forms, State Management, and Testing.
  
- **Angular (A Complete "Batteries-Included" Framework)**:
  Angular provides an official, unified, standardized solution for **everything** out of the box:
  - Official **Component Engine** & Template Parser
  - Official **Router** (\`@angular/router\`) for Single Page App navigation
  - Official **HTTP Client** (\`@angular/common/http\`) for backend REST APIs
  - Official **Forms Modules** (Reactive & Template-driven)
  - Built-in **Dependency Injection (DI)** container
  - Built-in **Reactive State** with **Angular Signals** and **RxJS**
  - Standardized CLI build system, testing utilities, and security sanitization.

---

### How Angular Executes in the Browser:
Browsers **do not understand TypeScript or Angular templates natively**. 
During compilation (\`ng build\` using Vite/Esbuild):
1. Angular compiles templates into highly optimized JavaScript instructions.
2. The TypeScript compiler erases all types and converts TypeScript into standard ECMAScript.
3. The browser downloads the compiled JavaScript bundle and executes it inside the browser's JavaScript Engine (V8, SpiderMonkey).`,
          diagram: `flowchart TD
    Source["Angular Application (.ts / .html / .css)\n- Standalone Components\n- Services & Signals\n- HTML Templates"] --> Compiler["Angular Ahead-of-Time (AOT) Compiler\n(Vite + Esbuild Pipeline)"]
    Compiler --> JS["Optimized Vanilla JavaScript Bundle (.js)\n- Zero TypeScript types!\n- Pure browser instructions"]
    JS --> Browser["Browser Execution Engine (Chrome V8 / Firefox)\n- DOM Rendering\n- Event Handling\n- Single Page App Experience"]
    
    style Source fill:#cfe2ff,stroke:#084298,color:#084298
    style Compiler fill:#fff3cd,stroke:#ffc107,color:#664d03
    style JS fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Browser fill:#e2e3e5,stroke:#41464b,color:#141619`,
          steps: [
            {
              title: 'Step 1: Inspecting a Standalone Angular Component',
              explanation: 'In modern Angular, a component brings together TypeScript class logic, an HTML template, and CSS styles.',
              command: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: \`
    <div class="welcome-card">
      <h1>Welcome to {{ title }}</h1>
      <button (click)="updateGreeting()">Click Me</button>
      <p>{{ message }}</p>
    </div>
  \`,
  styles: [\`
    .welcome-card { padding: 20px; font-family: sans-serif; }
    h1 { color: #dd0031; }
  \`]
})
export class AppComponent {
  title = 'Angular Master Guide';
  message = 'Ready to build high-performance web applications!';

  updateGreeting() {
    this.message = 'You just triggered your first Angular event handler!';
  }
}`
            }
          ],
          verification: 'Observe how the template binds to component properties ({{ title }}) and listens to events ((click)).',
          expectedResult: 'Clear understanding of the component architecture, TypeScript compilation, and framework capabilities.',
          commonMistakes: [
            {
              problem: 'Confusing AngularJS (v1.x) with Modern Angular (v2+ through current).',
              why: 'AngularJS was an old JavaScript framework from 2010. Modern Angular is a completely redesigned TypeScript framework.',
              fix: 'Always refer to modern Angular simply as "Angular" and avoid outdated AngularJS concepts like `$scope`.'
            }
          ],
          quiz: {
            question: 'What is the primary difference between a library (like React) and a framework (like Angular)?',
            options: [
              'A library can only be written in Python.',
              'A framework provides a complete standardized architecture (routing, HTTP, forms, DI) out of the box, whereas a library requires assembling third-party tools.',
              'Angular requires running on a server, while React runs in the browser.',
              'Libraries cannot compile to JavaScript.'
            ],
            correctIndex: 1,
            explanation: 'Angular is a full-featured framework that provides official routing, forms, HTTP client, and dependency injection tools out of the box.'
          },
          summary: 'Angular is an enterprise TypeScript framework by Google that provides all core web application tools out of the box and compiles into standard JavaScript for browser execution.'
        },
        {
          id: 'angular-vs-react-vs-javascript',
          slug: 'angular-vs-react-vs-javascript',
          order: '1.2',
          title: 'Angular vs React vs Vanilla JavaScript (Architectural Comparison)',
          subtitle: 'A detailed comparison of architectural paradigms, state management, change detection, and enterprise scaling.',
          chapterId: 'angular-foundations',
          chapterTitle: '01. Angular Architecture & Mental Models',
          levelTitle: 'Level 1: Absolute Beginner & Angular Foundations',
          goal: 'Understand the architectural tradeoffs between Vanilla JS, React, and Angular to make informed engineering decisions.',
          prerequisites: ['Lesson 1.1 completed.'],
          concept: `### Architectural Comparison Table

| Feature | Vanilla JavaScript | React.js | Modern Angular |
| :--- | :--- | :--- | :--- |
| **Paradigm** | Imperative DOM manipulation | Declarative UI Library | Declarative Enterprise Framework |
| **Primary Language** | Plain JavaScript | JavaScript / JSX / TSX | **Strict TypeScript (First-class)** |
| **Templates** | Manual HTML string injection | JSX (\`React.createElement\`) | **Enhanced HTML Template Syntax** |
| **Data Binding** | Manual event listeners | One-way with state hooks | **One-way, Event, and Two-way Binding** |
| **Dependency Injection**| Manual instantiation | Context API (prop drilling fix)| **First-Class Hierarchical DI Container** |
| **State & Reactivity** | Manual variable tracking | \`useState\`, \`useReducer\` | **Angular Signals & RxJS Streams** |
| **Routing & HTTP** | Third-party / window.history | Third-party (\`react-router\`, \`axios\`) | **Built-in Official Modules** |
| **Best Use Case** | Small scripts, landing pages | Dynamic flexible consumer apps | **Large-scale enterprise systems, dashboards** |`,
          diagram: `flowchart LR
    Vanilla["Vanilla JS\nManual DOM Lookups\nNo standardized structure"] 
    React["React\nView Library\nFlexible Third-party choices"]
    Angular["Angular\nComplete Framework\nOpinionated Enterprise Architecture"]
    
    style Vanilla fill:#f8d7da,stroke:#dc3545,color:#842029
    style React fill:#cfe2ff,stroke:#084298,color:#084298
    style Angular fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Comparing Data Binding Approaches',
              explanation: 'Observe how Angular eliminates boilerplate DOM lookups.',
              command: `// 1. Vanilla JS (Imperative - Manual lookup):
// const el = document.getElementById("name");
// el.innerText = user.name;

// 2. Angular (Declarative Template Binding):
// <h3>{{ user.name }}</h3>`
            }
          ],
          verification: 'You can articulate why large corporations choose Angular for large teams requiring consistent code conventions.',
          expectedResult: 'Mastery of framework comparison points and architectural tradeoffs.',
          summary: 'Angular enforces a structured, highly maintainable architecture with built-in tools, making it the choice for large-scale enterprise applications.'
        }
      ]
    }
  ]
};

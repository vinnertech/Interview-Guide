// Level 3: Components & Standalone Architecture (In-Depth Expanded Edition)
export const level3ComponentsLifecycle = {
  id: 'level-3',
  title: 'Level 3: Components & Standalone Architecture',
  icon: 'bi-box-seam',
  color: '#c3002f',
  description: 'Master component anatomy, the @Component decorator, standalone imports, encapsulation styles, lifecycle hooks (ngOnInit, ngOnChanges, ngOnDestroy), and OnPush change detection in baby steps.',
  chapters: [
    {
      id: 'components-and-lifecycle',
      title: '03. Component Architecture & Lifecycle',
      lessons: [
        {
          id: 'component-anatomy-and-standalone',
          slug: 'component-anatomy-and-standalone',
          order: '3.1',
          title: 'Component Anatomy, Metadata & Standalone Architecture',
          subtitle: 'The 3 pillars: Class logic, HTML template, CSS styles, the @Component decorator, and standalone dependencies in baby steps.',
          chapterId: 'components-and-lifecycle',
          chapterTitle: '03. Component Architecture & Lifecycle',
          levelTitle: 'Level 3: Components & Standalone Architecture',
          goal: 'Master creating standalone Angular components, configuring metadata (selector, template, styles, imports), and understanding how Angular isolates component styling.',
          prerequisites: ['Level 2 completed.'],
          concept: `### What is an Angular Component?
A Component is the primary building block of an Angular user interface. Every component consists of **3 distinct parts bound together by a TypeScript Decorator**:

1. **TypeScript Class**: Contains the component's state properties, signals, calculations, and event handling methods.
2. **HTML Template**: Defines the layout and declarative bindings rendered on the screen.
3. **CSS Styles**: Scoped stylesheets targeting only this component's DOM elements (View Encapsulation).

---

### The Modern Standalone Paradigm (\`standalone: true\`):
In modern Angular (Angular 17+), all components are **standalone by default**.
Instead of declaring components in legacy \`@NgModule\` modules, a standalone component directly declares its own dependencies in its \`imports: [CommonModule, RouterLink]\` array!

\`\`\`typescript
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [RouterLink], // Direct dependencies!
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  userName = 'Sarah Connor';
}
\`\`\``,
          diagram: `flowchart TD
    Comp["@Component Decorator (Metadata)"] --> Selector["1. selector: 'app-metric-card' (Custom HTML Tag)"]
    Comp --> Standalone["2. standalone: true (Direct dependency imports)"]
    Comp --> Template["3. template: HTML Markup & Bindings"]
    Comp --> Styles["4. styles: Scoped CSS (ViewEncapsulation.Emulated)"]
    Comp --> Class["5. export class MetricCardComponent (TypeScript Logic)"]
    
    style Comp fill:#cfe2ff,stroke:#084298,color:#084298
    style Selector fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Standalone fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Template fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Styles fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Class fill:#10b981,color:#fff`,
          steps: [
            {
              title: 'Step 1: Generating a Standalone Component via CLI',
              explanation: 'The Angular CLI creates the TypeScript class, HTML template, CSS styles, and test file in one command.',
              command: `ng generate component components/metric-card`
            },
            {
              title: 'Step 2: Implementing the Standalone Component Code',
              explanation: 'Build a reusable metric badge with inputs and scoped styling.',
              command: `import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-metric-card',
  standalone: true,
  template: \`
    <div class="metric-box">
      <span class="label">{{ label }}</span>
      <h3 class="value">{{ value }}</h3>
    </div>
  \`,
  styles: [\`
    .metric-box {
      padding: 16px;
      border-radius: 8px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
    }
    .label { color: #64748b; font-size: 0.85rem; }
    .value { color: #0f172a; font-weight: 700; margin: 4px 0 0 0; }
  \`]
})
export class MetricCardComponent {
  @Input() label: string = 'Total Users';
  @Input() value: number | string = 1250;
}`
            }
          ],
          verification: 'Place `<app-metric-card label="Revenue" value="$45,000"></app-metric-card>` in your parent template and confirm it renders.',
          expectedResult: 'A fully functional, encapsulated standalone Angular component.',
          commonMistakes: [
            {
              problem: 'Forgetting to import a child component or directive in the `imports: []` array of a standalone component.',
              why: 'Standalone components must explicitly declare their template dependencies in the `imports` array.',
              fix: 'Add child components, pipes, or directives directly to the `@Component({ imports: [ChildComponent] })` array.'
            }
          ],
          quiz: {
            question: 'What is the benefit of Standalone Components over legacy NgModules in Angular?',
            options: [
              'They eliminate NgModule boilerplate, make components directly importable, and enable faster tree-shaking.',
              'They make Angular compile into Python.',
              'They remove the need for HTML templates.',
              'They can only be used on servers.'
            ],
            correctIndex: 0,
            explanation: 'Standalone components simplify the mental model by allowing components to manage their own imports directly without intermediate NgModule wrappers.'
          },
          summary: 'An Angular component pairs a TypeScript class with an HTML template and scoped CSS styles. Modern Angular uses standalone: true for clean, modular dependency management.'
        },
        {
          id: 'component-lifecycle-hooks',
          slug: 'component-lifecycle-hooks',
          order: '3.2',
          title: 'Component Lifecycle: ngOnInit, ngOnChanges & ngOnDestroy',
          subtitle: 'Understanding the complete lifecycle timeline from construction and initialization to change detection and destruction cleanup in baby steps.',
          chapterId: 'components-and-lifecycle',
          chapterTitle: '03. Component Architecture & Lifecycle',
          levelTitle: 'Level 3: Components & Standalone Architecture',
          goal: 'Master the execution order of Angular lifecycle hooks, understand when to fetch data, and prevent memory leaks on component destruction.',
          prerequisites: ['Lesson 3.1 completed.'],
          concept: `### The Angular Component Lifecycle Timeline:

When Angular renders a component, it creates, updates, and destroys it through a series of predictable lifecycle phases:

---

### The 4 Most Critical Lifecycle Hooks in Production:
1. **\`constructor()\`**: JavaScript class instantiation. **Never fetch API data or perform heavy DOM logic here!** Use only for Dependency Injection assignment.
2. **\`ngOnChanges(changes: SimpleChanges)\`**: Fires whenever \`@Input()\` properties change before \`ngOnInit\` and on every subsequent input update.
3. **\`ngOnInit()\`**: Component is fully initialized and input properties are available. **This is the primary hook to fetch initial data from services!**
4. **\`ngOnDestroy()\`**: Component is about to be removed from the DOM. **Mandatory hook to unsubscribe from RxJS Observables, clear \`setInterval\` timers, and disconnect event listeners to prevent catastrophic memory leaks!**`,
          diagram: `flowchart TD
    Create["1. constructor() (Class instantiated & DI wired)"] --> Changes["2. ngOnChanges() (Inputs evaluated)"]
    Changes --> Init["3. ngOnInit() (Data fetching & initialization)"]
    Init --> Check["4. ngDoCheck() / Change Detection Loop"]
    Check --> Content["5. ngAfterContentInit() & ngAfterViewInit()"]
    Content --> Destroy["6. ngOnDestroy() (Cleanup timers & Subscriptions!)"]
    
    style Create fill:#cfe2ff,stroke:#084298,color:#084298
    style Changes fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Init fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Check fill:#e2e3e5,stroke:#41464b,color:#141619
    style Destroy fill:#f8d7da,stroke:#dc3545,color:#842029`,
          steps: [
            {
              title: 'Step 1: Implementing ngOnInit and ngOnDestroy Cleanup',
              explanation: 'Set up an active timer on mount and clean it up safely on unmount.',
              command: `import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-live-clock',
  standalone: true,
  template: \`<p class="badge bg-dark fs-5">{{ currentTime }}</p>\`
})
export class LiveClockComponent implements OnInit, OnDestroy {
  currentTime: string = '';
  private timerId?: any;

  // 1. Initialize data and active subscriptions in ngOnInit:
  ngOnInit(): void {
    this.updateTime();
    this.timerId = setInterval(() => this.updateTime(), 1000);
    console.log('[LiveClock] Timer initialized.');
  }

  private updateTime(): void {
    this.currentTime = new Date().toLocaleTimeString();
  }

  // 2. Clean up resources in ngOnDestroy to eliminate memory leaks:
  ngOnDestroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
      console.log('[LiveClock] Timer cleaned up successfully!');
    }
  }
}`
            }
          ],
          verification: 'Navigate to and from a page containing the clock component and observe the cleanup log in Developer Console.',
          expectedResult: 'Complete mastery of component initialization and teardown cleanup.',
          summary: 'Use constructor() for DI, ngOnInit() for data loading, ngOnChanges() to react to input updates, and ngOnDestroy() to clean up timers and subscriptions.'
        }
      ]
    }
  ]
};

// Level 7: Component Communication & Content Projection (In-Depth Expanded Edition)
export const level7CommunicationProjection = {
  id: 'level-7',
  title: 'Level 7: Component Communication & Content Projection',
  icon: 'bi-diagram-3-fill',
  color: '#3b82f6',
  description: 'Master parent-child communication using modern signal inputs (input()) and signal outputs (output()), EventEmitter, @ViewChild, and content projection (ng-content with multi-slot selectors) in baby steps.',
  chapters: [
    {
      id: 'component-communication',
      title: '07. Component Communication & Slots',
      lessons: [
        {
          id: 'parent-child-inputs-outputs',
          slug: 'parent-child-inputs-outputs',
          order: '7.1',
          title: 'Parent-Child Communication: Signal inputs, outputs & EventEmitter',
          subtitle: 'Unidirectional data flow: Passing data down with input() / @Input(), and emitting events up to parents with output() / EventEmitter in baby steps.',
          chapterId: 'component-communication',
          chapterTitle: '07. Component Communication & Slots',
          levelTitle: 'Level 7: Component Communication & Content Projection',
          goal: 'Master passing data down to child components and bubbling events up to parent containers using modern signal-based inputs and outputs.',
          prerequisites: ['Level 6 completed.'],
          concept: `### The Golden Rule: Unidirectional Data Flow
In Angular component trees, data flow follows strict unidirectional rules:
1. **Parent $\rightarrow$ Child (Inputs)**: State passes DOWN into children via property bindings (\`[item]="selectedItem"\`).
2. **Child $\rightarrow$ Parent (Outputs)**: Events bubble UP to parents via event bindings (\`(delete)="onItemDeleted($event)"\`).

---

### Modern Signal Inputs & Outputs (Angular 17.1+):
- **\`input<T>()\` / \`input.required<T>()\`**: Modern signal-based input. It returns a **Read-only Signal** (\`this.title()\`) that automatically integrates with Angular change detection!
- **\`output<T>()\`**: Lightweight event emitter function replacing traditional \`@Output() + EventEmitter\`.`,
          diagram: `flowchart TD
    Parent["Parent Component (Holds State)"] -->|"1. [task]='todo' (Signal input() passes data down)"| Child["Child Component (TaskItemComponent)"]
    Child -->|"2. (toggle)='onToggle($event)' (output() emits event up)"| Parent
    
    style Parent fill:#cfe2ff,stroke:#084298,color:#084298
    style Child fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Child Component using Signal input() and output()',
              explanation: 'Build a reusable TaskItemComponent.',
              command: `import { Component, input, output } from '@angular/core';

export interface Task {
  id: number;
  text: string;
  isDone: boolean;
}

@Component({
  selector: 'app-task-item',
  standalone: true,
  template: \`
    <div class="d-flex justify-content-between align-items-center p-2 border-bottom">
      <span [class.text-decoration-line-through]="task().isDone">
        {{ task().text }}
      </span>
      <div>
        <button class="btn btn-sm btn-outline-success me-1" (click)="toggleDone()">Toggle</button>
        <button class="btn btn-sm btn-outline-danger" (click)="remove()">Delete</button>
      </div>
    </div>
  \`
})
export class TaskItemComponent {
  // 1. Signal input (Read-only Signal!):
  task = input.required<Task>();

  // 2. Modern output emitter:
  toggle = output<number>();
  delete = output<number>();

  toggleDone() {
    this.toggle.emit(this.task().id);
  }

  remove() {
    this.delete.emit(this.task().id);
  }
}`
            },
            {
              title: 'Step 2: Parent Component Wiring Inputs and Handling Emitted Events',
              explanation: 'Render child components and handle their output events.',
              command: `import { Component } from '@angular/core';
import { TaskItemComponent, Task } from './task-item.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskItemComponent], // Import child component!
  template: \`
    <div class="card p-3 shadow-sm">
      <h5>Active Project Tasks</h5>
      @for (item of tasks; track item.id) {
        <app-task-item 
          [task]="item" 
          (toggle)="handleToggle($event)" 
          (delete)="handleDelete($event)"
        />
      }
    </div>
  \`
})
export class TaskListComponent {
  tasks: Task[] = [
    { id: 1, text: 'Design Wireframes', isDone: true },
    { id: 2, text: 'Configure Angular Signals', isDone: false }
  ];

  handleToggle(id: number) {
    this.tasks = this.tasks.map(t => t.id === id ? { ...t, isDone: !t.isDone } : t);
  }

  handleDelete(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}`
            }
          ],
          verification: 'Click the Toggle and Delete buttons in the child component and verify that the parent updates state cleanly.',
          expectedResult: 'Clean, decoupled parent-child component architecture.',
          summary: 'Use input() / input.required() to pass data down into children as reactive signals, and output() to emit custom events up to parents.'
        },
        {
          id: 'content-projection-ng-content',
          slug: 'content-projection-ng-content',
          order: '7.2',
          title: 'Content Projection (ng-content) & Multi-Slot Layouts',
          subtitle: 'Building flexible container components using <ng-content>, multi-slot selectors (select="[card-header]"), and default content in baby steps.',
          chapterId: 'component-communication',
          chapterTitle: '07. Component Communication & Slots',
          levelTitle: 'Level 7: Component Communication & Content Projection',
          goal: 'Master building reusable container components (cards, dialogs, drawers) that project dynamic parent HTML markup into specific slots.',
          prerequisites: ['Lesson 7.1 completed.'],
          concept: `### What is Content Projection (\`<ng-content>\`)?
**Content Projection** (similar to slots in Vue or \`props.children\` in React) allows a parent component to inject arbitrary HTML, text, or child components directly into placeholder slots defined inside a reusable component's template.

---

### Single-Slot vs Multi-Slot Content Projection:
- **Single-Slot**: \`<ng-content></ng-content>\` projects all child markup into one location.
- **Multi-Slot**: \`<ng-content select="[card-title]"></ng-content>\` targets specific child elements using CSS attribute or tag selectors.`,
          diagram: `flowchart TD
    Parent["Parent Template:\n<app-card>\n  <h5 card-header>User Profile</h5>\n  <p card-body>Account settings content...</p>\n</app-card>"] --> CardComp["Reusable AppCardComponent Template:"]
    CardComp --> Slot1["<ng-content select='[card-header]'> -> Receives 'User Profile'"]
    CardComp --> Slot2["<ng-content select='[card-body]'> -> Receives 'Account settings content...'"]
    
    style Parent fill:#cfe2ff,stroke:#084298,color:#084298
    style CardComp fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Slot1 fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Slot2 fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Building a Reusable Card with Multi-Slot Projection',
              explanation: 'Use ng-content with CSS selectors.',
              command: `import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-card',
  standalone: true,
  template: \`
    <div class="card shadow-sm rounded-3 border">
      <!-- Header Slot -->
      <div class="card-header bg-light border-bottom p-3">
        <ng-content select="[card-header]"></ng-content>
      </div>

      <!-- Body Slot -->
      <div class="card-body p-3">
        <ng-content select="[card-body]"></ng-content>
      </div>

      <!-- Footer Slot -->
      <div class="card-footer bg-light border-top p-2 text-end">
        <ng-content select="[card-footer]"></ng-content>
      </div>
    </div>
  \`
})
export class ModalCardComponent {}`
            }
          ],
          verification: 'Use `<app-modal-card>` with custom `card-header` and `card-body` attributes and confirm each piece renders in its designated slot.',
          expectedResult: 'Highly reusable composite UI component architecture.',
          summary: 'Use <ng-content select="[slotName]"> to build versatile composite container components with multi-slot projection.'
        }
      ]
    }
  ]
};

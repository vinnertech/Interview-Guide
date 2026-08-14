// Level 11: Angular Signals & Modern State Management (In-Depth Expanded Edition)
export const level11SignalsState = {
  id: 'level-11',
  title: 'Level 11: Angular Signals & Modern State Management',
  icon: 'bi-lightning-charge-fill',
  color: '#f59e0b',
  description: 'Master fine-grained reactivity with Angular Signals: signal(), computed(), effect(), Signals vs RxJS Observables, toSignal/toObservable interop, and building reactive service stores in baby steps.',
  chapters: [
    {
      id: 'angular-signals-and-state',
      title: '11. Angular Signals & Reactivity',
      lessons: [
        {
          id: 'signals-basics-writable-computed-effects',
          slug: 'signals-basics-writable-computed-effects',
          order: '11.1',
          title: 'Angular Signals: signal(), computed() & effect()',
          subtitle: 'What is a Signal? The reactive dependency graph, read-only computed derivations with automatic memoization, and side-effect synchronization in baby steps.',
          chapterId: 'angular-signals-and-state',
          chapterTitle: '11. Angular Signals & Reactivity',
          levelTitle: 'Level 11: Angular Signals & Modern State Management',
          goal: 'Master creating Writable Signals, deriving Computed Signals, and executing Side Effects using the modern Angular reactivity model.',
          prerequisites: ['Level 10 completed.'],
          concept: `### What is an Angular Signal?
A **Signal** is a reactive wrapper around a value that notifies interested consumers when that value changes.
Signals introduce **Fine-Grained Reactivity** to Angular:
- **Synchronous Value Access**: Read a signal value by calling it like a function: \`this.count()\`.
- **Automatic Dependency Tracking**: Computed signals automatically know which signals they depend on!
- **Glitch-Free Memoization**: Computed signals recalculate **only** when their underlying dependencies change.

---

### The 3 Signal Primitives:
1. **\`signal(initialValue)\` (Writable Signal)**:
   - \`count.set(5)\`: Overwrite with a new value.
   - \`count.update(prev => prev + 1)\`: Mutate based on previous value.
2. **\`computed(() => fn)\` (Derived Read-Only Signal)**:
   - Derives a value from other signals. Memoized and pure!
3. **\`effect(() => fn)\` (Side Effect Consumer)**:
   - Runs whenever any signal read inside its body changes. Ideal for logging, localStorage sync, and chart rendering.`,
          diagram: `flowchart TD
    Price["Writable Signal: price = signal(100)"] --> Total["Computed Signal: total = computed(() => price() * quantity())"]
    Qty["Writable Signal: quantity = signal(2)"] --> Total
    Total --> UI["DOM Template: {{ total() }} (Updates automatically!)"]
    Total --> Effect["effect(): Saves total to localStorage"]
    
    style Price fill:#cfe2ff,stroke:#084298,color:#084298
    style Qty fill:#cfe2ff,stroke:#084298,color:#084298
    style Total fill:#fff3cd,stroke:#ffc107,color:#664d03
    style UI fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Effect fill:#f8d7da,stroke:#dc3545,color:#842029`,
          steps: [
            {
              title: 'Step 1: Implementing Writable Signals, Computed and Effects in a Component',
              explanation: 'Build a shopping calculator with signals.',
              command: `import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-signal-cart',
  standalone: true,
  template: \`
    <div class="card p-3 shadow-sm">
      <h5>Shopping Cart (Signals)</h5>
      
      <div class="d-flex align-items-center gap-3 my-3">
        <button class="btn btn-outline-danger" (click)="decreaseQty()">-</button>
        <span class="fs-5 fw-bold">{{ quantity() }} items</span>
        <button class="btn btn-outline-success" (click)="increaseQty()">+</button>
      </div>

      <p>Unit Price: <strong>\${{ unitPrice() }}</strong></p>
      <p class="fs-5 text-primary fw-bold">Total: \${{ totalPrice() }}</p>
    </div>
  \`
})
export class SignalCartComponent {
  // 1. Writable Signals:
  unitPrice = signal<number>(45);
  quantity = signal<number>(1);

  // 2. Computed Signal (Auto-memoized derivation):
  totalPrice = computed(() => this.unitPrice() * this.quantity());

  // 3. Side Effect (Logs and synchronizes with local storage):
  constructor() {
    effect(() => {
      console.log(\`[Cart Effect] Total price updated to: \$\${this.totalPrice()}\`);
      localStorage.setItem('vinnertech_cart_total', String(this.totalPrice()));
    });
  }

  increaseQty() {
    this.quantity.update(q => q + 1);
  }

  decreaseQty() {
    if (this.quantity() > 1) {
      this.quantity.update(q => q - 1);
    }
  }
}`
            }
          ],
          verification: 'Click the + and - buttons and observe the console: the computed signal and effect update synchronously.',
          expectedResult: 'Fine-grained reactive state without manual subscriptions or change detection overhead.',
          summary: 'Use signal() for state variables, computed() for derived values, and effect() for synchronization side effects.'
        },
        {
          id: 'signals-vs-rxjs-and-interop',
          slug: 'signals-vs-rxjs-and-interop',
          order: '11.2',
          title: 'Signals vs RxJS: When to Use Which & Interop (toSignal / toObservable)',
          subtitle: 'Comparing synchronous state management (Signals) vs asynchronous event streaming (RxJS), and converting between them using @angular/core/rxjs-interop in baby steps.',
          chapterId: 'angular-signals-and-state',
          chapterTitle: '11. Angular Signals & Reactivity',
          levelTitle: 'Level 11: Angular Signals & Modern State Management',
          goal: 'Understand the exact division of responsibility: use Signals for component state & UI, and RxJS for complex async event streams, bridging them with toSignal() and toObservable().',
          prerequisites: ['Lesson 11.1 completed.'],
          concept: `### Signals vs RxJS: The Definitive Architectural Guide

A common misconception is that *"Signals replace RxJS entirely"*. **They do not!** They solve different problems and complement each other:

| Requirement | Best Tool | Why? |
| :--- | :--- | :--- |
| **Component UI State** | **Angular Signals** | Synchronous, glitch-free, simple read syntax (\`user()\`), zero subscription leaks. |
| **Computed UI Derivations** | **Computed Signals** | Memoized, synchronous calculation. |
| **HTTP Requests & REST** | **RxJS Observables** | Async operations, cancellable, retries (\`retry(3)\`), timing operators (\`debounceTime\`). |
| **Live WebSockets / Event Streams** | **RxJS Observables** | Continuous stream of async events over time. |

---

### The Interop Bridge (\`@angular/core/rxjs-interop\`):
- **\`toSignal(observable$)\`**: Converts an RxJS Observable into an Angular Signal (auto-unsubscribing when the component is destroyed!).
- **\`toObservable(mySignal)\`**: Converts an Angular Signal into an RxJS Observable stream!`,
          diagram: `flowchart LR
    API["HttpClient (RxJS Observable Stream)"] -->|"toSignal(api$)"| Sig["Angular Signal (UI State in Component)"]
    Sig -->|"toObservable(searchSignal)"| Stream["RxJS Pipeline (debounceTime, switchMap)"]
    
    style API fill:#cfe2ff,stroke:#084298,color:#084298
    style Sig fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Stream fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Converting HTTP Observables to Signals with toSignal()',
              explanation: 'Bridge RxJS and Signals seamlessly.',
              command: `import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

interface Post {
  id: number;
  title: string;
}

@Component({
  selector: 'app-posts-view',
  standalone: true,
  template: \`
    <div class="card p-3 shadow-sm">
      <h5>Latest Blog Posts</h5>
      <ul>
        <!-- Access as a direct Signal: posts() instead of async pipe! -->
        @for (post of posts(); track post.id) {
          <li>{{ post.title }}</li>
        } @empty {
          <li>Loading posts...</li>
        }
      </ul>
    </div>
  \`
})
export class PostsViewComponent {
  private http = inject(HttpClient);

  // Convert Observable to Signal with initial fallback value:
  posts = toSignal(
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts'),
    { initialValue: [] }
  );
}`
            }
          ],
          verification: 'Observe how the template reads `posts()` directly without using `| async` or manual `.subscribe()`.',
          expectedResult: 'Seamless hybrid architecture utilizing RxJS for networking and Signals for UI state.',
          summary: 'Use RxJS for async event coordination and HTTP pipelines, and convert to Signals with toSignal() for clean synchronous template rendering.'
        }
      ]
    }
  ]
};

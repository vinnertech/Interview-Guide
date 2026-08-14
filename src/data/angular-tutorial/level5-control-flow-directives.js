// Level 5: Modern Control Flow & Directives (In-Depth Expanded Edition)
export const level5ControlFlowDirectives = {
  id: 'level-5',
  title: 'Level 5: Modern Control Flow & Directives',
  icon: 'bi-signpost-2-fill',
  color: '#10b981',
  description: 'Master modern built-in template control flow (@if, @else, @for with track, @switch, @case), custom attribute directives, and NgClass/NgStyle in complete baby steps.',
  chapters: [
    {
      id: 'control-flow-and-directives',
      title: '05. Control Flow & Directives',
      lessons: [
        {
          id: 'modern-control-flow-if-for-switch',
          slug: 'modern-control-flow-if-for-switch',
          order: '5.1',
          title: 'Modern Control Flow: @if, @for (track) & @switch',
          subtitle: 'Why Angular 17+ introduced built-in @control flow, mandatory track expressions for 90% faster rendering, @empty fallbacks, and comparing with legacy *ngIf/*ngFor.',
          chapterId: 'control-flow-and-directives',
          chapterTitle: '05. Control Flow & Directives',
          levelTitle: 'Level 5: Modern Control Flow & Directives',
          goal: 'Master modern built-in template control flow syntax (@if, @for, @switch) and optimize rendering performance using track expressions.',
          prerequisites: ['Level 4 completed.'],
          concept: `### Why Modern Built-in Control Flow (\`@if\`, \`@for\`, \`@switch\`)?

In earlier versions of Angular, conditional rendering and loops required importing \`CommonModule\` and using structural directives (\`*ngIf\`, \`*ngFor\`, \`*ngSwitch\`).

Modern Angular (v17+) introduces **Built-in Template Control Flow**:
1. **Zero Imports Required**: Native to the template engine; no \`CommonModule\` import needed!
2. **Superior Performance**: Compiles to native JavaScript \`if\` and \`for\` branches, drastically reducing bundle size and speeding up rendering by up to 90%!
3. **Mandatory \`track\` Expression in \`@for\`**: Prevents entire list DOM re-creations by tracking unique item identities.
4. **Built-in \`@empty\` Block**: Clean, elegant fallback when array lists are empty!`,
          diagram: `flowchart TD
    Data["Items Array: products = []"] --> Loop["@for (item of products; track item.id)"]
    Loop --> HasItems{"Are there items?"}
    HasItems -->|Yes| Render["Renders <li>{{ item.name }}</li> with track optimization"]
    HasItems -->|No (Empty Array)| EmptyBlock["@empty { <p>No products found!</p> }"]
    
    style Data fill:#cfe2ff,stroke:#084298,color:#084298
    style Loop fill:#fff3cd,stroke:#ffc107,color:#664d03
    style HasItems fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Render fill:#d1e7dd,stroke:#198754,color:#0f5132
    style EmptyBlock fill:#f8d7da,stroke:#dc3545,color:#842029`,
          steps: [
            {
              title: 'Step 1: Modern @if, @else if, and @else in Action',
              explanation: 'Clean conditional rendering without any structural directive imports.',
              command: `@if (userRole === 'admin') {
  <div class="alert alert-danger">Super Admin Dashboard Active</div>
} @else if (userRole === 'editor') {
  <div class="alert alert-warning">Editor Workspace Active</div>
} @else {
  <div class="alert alert-info">Standard Viewer Access</div>
}`
            },
            {
              title: 'Step 2: High-Performance @for with track & @empty',
              explanation: 'Iterate over lists with unique ID tracking and empty fallback state.',
              command: `import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  status: 'in-stock' | 'low-stock' | 'out-of-stock';
}

@Component({
  selector: 'app-product-catalog',
  standalone: true,
  template: \`
    <div class="card p-3 shadow-sm">
      <h5 class="fw-bold mb-3">Product Catalog</h5>

      <div class="list-group">
        <!-- Modern @for with mandatory track expression -->
        @for (item of products; track item.id; let idx = $index) {
          <div class="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>#{{ idx + 1 }} {{ item.name }}</strong>
              <span class="text-muted ms-2">\${{ item.price }}</span>
            </div>

            <!-- Modern @switch statement -->
            @switch (item.status) {
              @case ('in-stock') {
                <span class="badge bg-success">In Stock</span>
              }
              @case ('low-stock') {
                <span class="badge bg-warning text-dark">Low Stock</span>
              }
              @default {
                <span class="badge bg-danger">Out of Stock</span>
              }
            }
          </div>
        } @empty {
          <!-- Automatic empty state fallback -->
          <div class="p-4 text-center text-muted">
            <i class="bi bi-inbox fs-1 d-block mb-2"></i>
            No products currently match your search.
          </div>
        }
      </div>
    </div>
  \`
})
export class ProductCatalogComponent {
  products: Product[] = [
    { id: 101, name: 'Ergonomic Chair', price: 280, status: 'in-stock' },
    { id: 102, name: 'Mechanical Keyboard', price: 120, status: 'low-stock' },
    { id: 103, name: '4K OLED Display', price: 799, status: 'out-of-stock' }
  ];
}`
            }
          ],
          verification: 'Inspect the template syntax: verify that `@for` requires no `CommonModule` imports and renders `@empty` when the array is empty.',
          expectedResult: 'Modern, expressive template control flow with maximum rendering performance.',
          commonMistakes: [
            {
              problem: 'Omitting the `track` expression in `@for (item of items)` (e.g. `@for (item of items)`).',
              why: 'Angular 17+ makes the `track` expression mandatory to eliminate performance degradation from list re-rendering.',
              fix: 'Always provide a track expression: `@for (item of items; track item.id)` or `@for (item of items; track $index)`.'
            }
          ],
          quiz: {
            question: 'Why is the `track` expression mandatory in modern Angular `@for` blocks?',
            options: [
              'To encrypt list data.',
              'To allow Angular to track individual DOM nodes by identity, updating only modified items instead of re-rendering the whole list.',
              'To sort the array in ascending order.',
              'To connect to a WebSocket server.'
            ],
            correctIndex: 1,
            explanation: 'Tracking by unique key (e.g. track item.id) allows Angular\'s diffing engine to move and update only changed DOM nodes instead of destroying and recreating the list.'
          },
          summary: 'Modern Angular uses built-in @if, @for (with mandatory track), @switch, and @empty blocks for blazing-fast, zero-import template control flow.'
        },
        {
          id: 'custom-attribute-directives',
          slug: 'custom-attribute-directives',
          order: '5.2',
          title: 'Custom Attribute Directives: Extending HTML Behavior',
          subtitle: 'Building custom directives with @Directive, listening to host events with @HostListener, and styling host elements with @HostBinding in baby steps.',
          chapterId: 'control-flow-and-directives',
          chapterTitle: '05. Control Flow & Directives',
          levelTitle: 'Level 5: Modern Control Flow & Directives',
          goal: 'Master creating custom attribute directives to attach reusable behaviors (like hover highlights, auto-focus, or tooltip triggers) to any HTML element.',
          prerequisites: ['Lesson 5.1 completed.'],
          concept: `### What is an Attribute Directive?
While Components are directives with templates, an **Attribute Directive** has **no template**. Instead, it attaches to an existing HTML element or component to **modify its behavior, appearance, or listen to host events**.

---

### Key Building Blocks of a Custom Directive:
1. **\`@Directive\` decorator**: Defines the CSS attribute selector (e.g. \`selector: '[appHighlight]'\`).
2. **\`@HostListener('eventName')\`**: Listens to events (like \`mouseenter\` or \`mouseleave\`) on the element the directive is attached to.
3. **\`@HostBinding('style.color')\` / ElementRef**: Dynamically mutates the host element's CSS properties or attributes.`,
          diagram: `flowchart LR
    Host["<div appHighlight='gold'>Hover Over Me</div>"] --> Dir["appHighlight Directive attaches to Host DOM Element"]
    Dir --> Enter["@HostListener('mouseenter') -> Changes background to gold"]
    Dir --> Leave["@HostListener('mouseleave') -> Reverts background to transparent"]
    
    style Host fill:#cfe2ff,stroke:#084298,color:#084298
    style Dir fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Enter fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Leave fill:#e2e3e5,stroke:#41464b,color:#141619`,
          steps: [
            {
              title: 'Step 1: Building a Reusable appHighlight Directive',
              explanation: 'Create an interactive hover highlight directive.',
              command: `import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() appHighlight: string = '#fef08a'; // Default yellow highlight
  @Input() defaultColor: string = 'transparent';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || '#fef08a');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.defaultColor);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.transition = 'background-color 0.2s ease';
  }
}`
            },
            {
              title: 'Step 2: Using the Standalone Directive in a Component',
              explanation: 'Import the directive directly in the component imports array.',
              command: `import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-demo-page',
  standalone: true,
  imports: [HighlightDirective], // Direct standalone import!
  template: \`
    <div appHighlight="#bfdbfe" class="p-3 border rounded mb-2">
      Hover over this card to see custom directive in action!
    </div>
  \`
})
export class DemoPageComponent {}`
            }
          ],
          verification: 'Hover over elements with `appHighlight` and observe background color changing automatically.',
          expectedResult: 'Clean, reusable DOM behavior attached via custom directives.',
          summary: 'Use custom attribute directives with @HostListener and @Input to add reusable behaviors and styles to any DOM element.'
        }
      ]
    }
  ]
};

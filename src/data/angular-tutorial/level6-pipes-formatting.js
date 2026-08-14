// Level 6: Pipes & Formatting (In-Depth Expanded Edition)
export const level6PipesFormatting = {
  id: 'level-6',
  title: 'Level 6: Pipes & Formatting',
  icon: 'bi-funnel-fill',
  color: '#8b5cf6',
  description: 'Master built-in formatting pipes (DatePipe, CurrencyPipe, DecimalPipe, JsonPipe), pipe chaining, custom standalone pipes with PipeTransform, pure vs impure performance, and the reactive async pipe in baby steps.',
  chapters: [
    {
      id: 'pipes-and-formatting',
      title: '06. Pipes & Data Transformation',
      lessons: [
        {
          id: 'built-in-pipes-and-chaining',
          slug: 'built-in-pipes-and-chaining',
          order: '6.1',
          title: 'Built-in Pipes, Parameters & Pipe Chaining',
          subtitle: 'Formatting dates, currency, numbers, uppercase/lowercase, JSON debugging, and passing arguments to pipes in baby steps.',
          chapterId: 'pipes-and-formatting',
          chapterTitle: '06. Pipes & Data Transformation',
          levelTitle: 'Level 6: Pipes & Formatting',
          goal: 'Master transforming raw component data into user-friendly strings directly inside Angular templates using built-in pipes.',
          prerequisites: ['Level 5 completed.'],
          concept: `### What is an Angular Pipe?
A **Pipe** is a template transformation function indicated by the pipe operator (\`|\`). It takes raw data as input, transforms it without modifying the original component property, and outputs a formatted string for the user.

---

### Core Built-In Angular Pipes:
- **\`date\`**: Formats timestamps (\`{{ orderDate | date:'mediumDate' }}\`).
- **\`currency\`**: Formats numbers with international currency symbols (\`{{ price | currency:'USD':'symbol':'1.2-2' }}\`).
- **\`number\` / \`percent\`**: Decimal places and percentages (\`{{ rating | number:'1.1-2' }}\`).
- **\`uppercase\` / \`lowercase\` / \`titlecase\`**: Text casing.
- **\`json\`**: Serializes objects to JSON strings (essential for debugging component state).
- **\`async\`**: Automatically subscribes to an RxJS Observable or Promise and unmounts cleanly!

---

### Pipe Parameters & Chaining:
Pipes accept parameters separated by colons (\`:\`), and multiple pipes can be chained together from left to right:
\`\`\`html
{{ user.salary | currency:'EUR' | lowercase }}
\`\`\``,
          diagram: `flowchart LR
    Raw["Raw Component State: price = 1250.5"] --> Pipe1["1. currency:'USD' -> '$1,250.50'"]
    Pipe1 --> Pipe2["2. uppercase (Chained)"]
    Pipe2 --> Screen["Rendered on Screen: '$1,250.50'"]
    
    style Raw fill:#cfe2ff,stroke:#084298,color:#084298
    style Pipe1 fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Pipe2 fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Screen fill:#10b981,color:#fff`,
          steps: [
            {
              title: 'Step 1: Using Built-in Formatting Pipes in a Standalone Component',
              explanation: 'Import CommonModule or specific pipes directly in the standalone imports array.',
              command: `import { Component } from '@angular/core';
import { DatePipe, CurrencyPipe, DecimalPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-invoice-summary',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, DecimalPipe, JsonPipe], // Import standalone pipes
  template: \`
    <div class="card p-3 shadow-sm">
      <h5>Invoice #{{ invoice.id }}</h5>
      <p>Date: {{ invoice.issuedAt | date:'fullDate' }}</p>
      <p>Amount: {{ invoice.amount | currency:'USD':'symbol':'1.2-2' }}</p>
      <p>Tax Rate: {{ invoice.taxRate | percent:'1.1-1' }}</p>

      <!-- Debug state with JsonPipe -->
      <pre class="bg-light p-2 rounded small">{{ invoice | json }}</pre>
    </div>
  \`
})
export class InvoiceSummaryComponent {
  invoice = {
    id: 1042,
    issuedAt: new Date(),
    amount: 1450.75,
    taxRate: 0.0825
  };
}`
            }
          ],
          verification: 'Observe how the numeric raw amounts and dates are rendered with locale formatting.',
          expectedResult: 'Clean, declarative formatting without writing formatting helper methods in the component class.',
          summary: 'Use built-in pipes (date, currency, number, json, async) with colon parameters and chain them with | to transform template values.'
        },
        {
          id: 'custom-pipes-pure-vs-impure',
          slug: 'custom-pipes-pure-vs-impure',
          order: '6.2',
          title: 'Custom Standalone Pipes & Pure vs Impure Performance',
          subtitle: 'Implementing PipeTransform, writing domain-specific transformation filters, and understanding pure memoization vs impure change detection in baby steps.',
          chapterId: 'pipes-and-formatting',
          chapterTitle: '06. Pipes & Data Transformation',
          levelTitle: 'Level 6: Pipes & Formatting',
          goal: 'Master creating custom standalone pipes and understand why Pure pipes are cached for maximum rendering speed.',
          prerequisites: ['Lesson 6.1 completed.'],
          concept: `### How to Build a Custom Pipe in Angular
A custom pipe is a TypeScript class decorated with **\`@Pipe({ name: 'myPipe', standalone: true })\`** that implements the **\`PipeTransform\`** interface:

\`\`\`typescript
export interface PipeTransform {
  transform(value: any, ...args: any[]): any;
}
\`\`\`

---

### Pure Pipes vs Impure Pipes (Critical Performance Difference):
- **Pure Pipes (\`pure: true\` - DEFAULT)**:
  Angular executes a pure pipe **ONLY when it detects a change to the input value's reference or primitive value**. If component state re-renders but the pipe input hasn't changed, Angular returns the cached memoized result instantly!
- **Impure Pipes (\`pure: false\` - EXPENSIVE)**:
  Angular executes the pipe on **EVERY single change detection cycle** (every keystroke, mousemove, timer tick). **Warning:** Use impure pipes only when transforming internal mutations of complex objects that do not change reference.`,
          diagram: `flowchart TD
    Change["Change Detection Cycle Runs"] --> Pure{"Is Pipe Pure? (Default)"}
    Pure -->|Yes| RefCheck{"Did input value reference change?"}
    RefCheck -->|No| Cache["⚡ Returns Memoized Cached Output (Zero execution cost!)"]
    RefCheck -->|Yes| Exec["Executes transform() method"]
    Pure -->|No (Impure)| Always["⚠️ Executes transform() on every change detection pass"]
    
    style Change fill:#cfe2ff,stroke:#084298,color:#084298
    style Pure fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Cache fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Exec fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Always fill:#f8d7da,stroke:#dc3545,color:#842029`,
          steps: [
            {
              title: 'Step 1: Creating a Custom FileSizePipe',
              explanation: 'Transform raw byte numbers into readable KB, MB, GB strings.',
              command: `import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize',
  standalone: true,
  pure: true // Default: memoized for performance
})
export class FileSizePipe implements PipeTransform {
  transform(bytes: number, decimals: number = 2): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}`
            },
            {
              title: 'Step 2: Using the Standalone Custom Pipe in a Component',
              explanation: 'Import FileSizePipe directly into the component imports array.',
              command: `import { Component } from '@angular/core';
import { FileSizePipe } from './file-size.pipe';

@Component({
  selector: 'app-file-uploader',
  standalone: true,
  imports: [FileSizePipe], // Standalone import!
  template: \`
    <div class="p-3 border rounded">
      <h6>Upload: {{ fileName }}</h6>
      <p class="text-muted">Size: {{ rawBytes | fileSize:1 }}</p>
    </div>
  \`
})
export class FileUploaderComponent {
  fileName = 'angular-enterprise-architecture.pdf';
  rawBytes = 5242880; // 5 MB
}`
            }
          ],
          verification: 'Verify that `5242880 | fileSize:1` renders as `5 MB`.',
          expectedResult: 'Type-safe custom pipe transformations with pure caching.',
          commonMistakes: [
            {
              problem: 'Using pipes for complex, heavy filtering or sorting algorithms on large arrays.',
              why: 'Filtering arrays inside pipes can cause noticeable UI jank if made impure.',
              fix: 'Compute filtered and sorted arrays inside component logic or Angular Signals before passing them to templates.'
            }
          ],
          quiz: {
            question: 'Why are Angular Pure pipes faster than standard component method calls in templates?',
            options: [
              'Because they are executed on a cloud server.',
              'Because Angular caches their return value and only re-executes when the input value identity actually changes.',
              'Because they bypass the browser DOM.',
              'Because they disable change detection.'
            ],
            correctIndex: 1,
            explanation: 'Pure pipes are pure functions whose outputs are memoized based on input identity, avoiding redundant recalculations.'
          },
          summary: 'Custom pipes implement PipeTransform. By default, they are pure and memoized for optimal performance.'
        }
      ]
    }
  ]
};

// Level 4: Template Syntax & Data Binding (In-Depth Expanded Edition)
export const level4TemplateBinding = {
  id: 'level-4',
  title: 'Level 4: Template Syntax & Data Binding',
  icon: 'bi-link-45deg',
  color: '#eab308',
  description: 'Master the 4 fundamental data binding mechanisms in Angular: Interpolation ({{}}), Property binding ([prop]), Event binding ((event)), Two-way binding ([(ngModel)]), and Template Reference Variables (#var) in baby steps.',
  chapters: [
    {
      id: 'template-syntax-and-binding',
      title: '04. Template Syntax & Data Binding',
      lessons: [
        {
          id: 'four-types-of-data-binding',
          slug: 'four-types-of-data-binding',
          order: '4.1',
          title: 'The 4 Types of Data Binding in Angular',
          subtitle: 'Interpolation {{ }}, Property Binding [ ], Event Binding ( ), and Two-Way Binding [( )] explained with clear mental models.',
          chapterId: 'template-syntax-and-binding',
          chapterTitle: '04. Template Syntax & Data Binding',
          levelTitle: 'Level 4: Template Syntax & Data Binding',
          goal: 'Master all 4 data binding techniques and know exactly which syntax to choose for any UI interaction.',
          prerequisites: ['Level 3 completed.'],
          concept: `### The 4 Data Binding Pillars:

| Binding Type | Direction | Syntax | Mental Model & Use Case |
| :--- | :--- | :--- | :--- |
| **1. Interpolation** | Component $\rightarrow$ DOM | \`{{ title }}\` | Rendering strings, numbers, and evaluated expressions inside text nodes. |
| **2. Property Binding** | Component $\rightarrow$ DOM | \`[disabled]="isDisabled"\` | Setting HTML element properties or Child Component inputs directly. |
| **3. Event Binding** | DOM $\rightarrow$ Component | \`(click)="handleClick()"\` | Listening to DOM user interactions (clicks, inputs, keyups) and child custom events. |
| **4. Two-Way Binding** | Component $\rightleftharpoons$ DOM | \`[(ngModel)]="username"\` | Synchronizing form input values with component state in real time (**"Banana in a Box" \`[()]\`**). |`,
          diagram: `flowchart TD
    Comp["TypeScript Component Class (State)"] <-->|"4. Two-Way Binding [(ngModel)]"| DOM["HTML Template View (DOM)"]
    Comp -->|"1. Interpolation {{ val }}"| DOM
    Comp -->|"2. Property Binding [src]"| DOM
    DOM -->|"3. Event Binding (click)"| Comp
    
    style Comp fill:#cfe2ff,stroke:#084298,color:#084298
    style DOM fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: All 4 Bindings in a Single Interactive Component',
              explanation: 'Observe how property binding and event binding interact.',
              command: `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule], // Required for [(ngModel)]
  template: \`
    <div class="card p-3 shadow-sm">
      <!-- 1. Interpolation -->
      <h4>Welcome, {{ user.toUpperCase() }}</h4>

      <!-- 2. Property Binding ([disabled], [src]) -->
      <button [disabled]="isSubmitting" (click)="saveUser()" class="btn btn-primary my-2">
        {{ isSubmitting ? 'Saving...' : 'Save Profile' }}
      </button>

      <!-- 3. Event Binding with $event payload -->
      <input (keyup.enter)="onEnterPressed($event)" placeholder="Press enter to submit" class="form-control mb-2" />

      <!-- 4. Two-Way Binding with [(ngModel)] -->
      <label>Edit Username:</label>
      <input [(ngModel)]="user" class="form-control" />
    </div>
  \`
})
export class UserFormComponent {
  user: string = 'Alex Rivers';
  isSubmitting: boolean = false;

  saveUser() {
    this.isSubmitting = true;
    setTimeout(() => {
      this.isSubmitting = false;
      alert(\`Saved: \${this.user}\`);
    }, 1000);
  }

  onEnterPressed(event: Event) {
    console.log('Enter pressed in input field!', event);
  }
}`
            }
          ],
          verification: 'Type in the [(ngModel)] input and observe the {{ user.toUpperCase() }} header updating live in real time.',
          expectedResult: 'Deep mastery of Angular template binding syntax.',
          commonMistakes: [
            {
              problem: 'Forgetting that property binding evaluates the right-hand string as a TypeScript expression (e.g. `<img [src]="avatar.png" />` fails!).',
              why: 'Angular looks for a class property named `avatar.png`.',
              fix: 'Wrap static string paths in quotes: `<img [src]="\'avatar.png\'" />` or use standard HTML `<img src="avatar.png" />`.'
            }
          ],
          quiz: {
            question: 'What is the mnemonic phrase used to remember the syntax for two-way binding in Angular?',
            options: [
              '"Apple in a Basket" {[]}',
              '"Banana in a Box" [()]',
              '"Fish in a Bowl" (())',
              '"Key in a Lock" [[]]'
            ],
            correctIndex: 1,
            explanation: 'The brackets [ ] represent the box, and the parentheses ( ) represent the banana: [(ngModel)].'
          },
          summary: 'Use {{ }} for text output, [ ] for setting element properties, ( ) for listening to events, and [( )] for two-way form synchronization.'
        },
        {
          id: 'template-reference-variables',
          slug: 'template-reference-variables',
          order: '4.2',
          title: 'Template Reference Variables (#var) & View Queries',
          subtitle: 'Referencing DOM elements directly in templates using #myVar and passing element references to event handlers in baby steps.',
          chapterId: 'template-syntax-and-binding',
          chapterTitle: '04. Template Syntax & Data Binding',
          levelTitle: 'Level 4: Template Syntax & Data Binding',
          goal: 'Master using template reference variables (#var) to access DOM elements and child component instances without extra state variables.',
          prerequisites: ['Lesson 4.1 completed.'],
          concept: `### What is a Template Reference Variable (\`#var\`)?
A **Template Reference Variable** is declared with a hash symbol (\`#\`) on any HTML element, component, or directive inside a template:

\`\`\`html
<input #phoneInput placeholder="Enter phone number" />
<button (click)="callPhone(phoneInput.value)">Call</button>
\`\`\`

---

### Why use Template Reference Variables?
- **Zero Boilerplate**: Access input values directly in click handlers without needing two-way binding (\`[(ngModel)]\`) or local state variables.
- **Direct Element Manipulation**: Call methods on video players (\`#videoPlayer.play()\`), focus inputs (\`#inputField.focus()\`), or inspect child component instances.`,
          diagram: `flowchart LR
    Tag["<input #userEmailInput />"] --> Ref["#userEmailInput points directly to the HTMLInputElement DOM Node"]
    Ref --> Handler["(click)='register(userEmailInput.value)' passes value directly to Component method"]
    
    style Tag fill:#cfe2ff,stroke:#084298,color:#084298
    style Ref fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Handler fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Using Template Reference Variables for Clean Action Triggers',
              explanation: 'Add items to an array directly using the input reference.',
              command: `import { Component } from '@angular/core';

@Component({
  selector: 'app-quick-notes',
  standalone: true,
  template: \`
    <div class="p-3 border rounded">
      <h5>Quick Notes</h5>
      <div class="input-group mb-2">
        <input #noteInput class="form-control" placeholder="Type a note and click add..." />
        <!-- Pass noteInput.value directly; then clear the input -->
        <button 
          class="btn btn-success" 
          (click)="addNote(noteInput.value); noteInput.value = ''; noteInput.focus()"
        >
          Add Note
        </button>
      </div>

      <ul>
        @for (note of notes; track $index) {
          <li>{{ note }}</li>
        }
      </ul>
    </div>
  \`
})
export class QuickNotesComponent {
  notes: string[] = ['Review Angular Architecture', 'Master Data Binding'];

  addNote(text: string) {
    if (text.trim()) {
      this.notes.push(text.trim());
    }
  }
}`
            }
          ],
          verification: 'Type a note, click Add Note, and verify that the note is added and the input automatically clears and refocuses.',
          expectedResult: 'Clean, efficient DOM referencing with zero state boilerplate.',
          summary: 'Template Reference Variables (#var) create direct references to DOM elements or child components within your templates.'
        }
      ]
    }
  ]
};

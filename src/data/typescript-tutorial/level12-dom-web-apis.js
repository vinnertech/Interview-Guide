// Level 12: DOM & Browser Web APIs Typing
export const level12DomWebApis = {
  id: 'level-12',
  title: 'Level 12: DOM & Browser Web APIs Typing',
  icon: 'bi-window-desktop',
  color: '#f43f5e',
  description: 'Master typing HTML elements (HTMLElement, HTMLInputElement, HTMLFormElement), DOM Events (MouseEvent, SubmitEvent), and Browser APIs (localStorage, sessionStorage) in baby steps.',
  chapters: [
    {
      id: 'dom-and-web-apis',
      title: '12. DOM Elements & Browser Event Typing',
      lessons: [
        {
          id: 'typing-dom-elements-and-events',
          slug: 'typing-dom-elements-and-events',
          order: '12.1',
          title: 'Typing DOM Elements, Forms & Events',
          subtitle: 'Generic querySelector<T>, HTMLInputElement.value, typing SubmitEvent, and type assertions vs null checks in baby steps.',
          chapterId: 'dom-and-web-apis',
          chapterTitle: '12. DOM Elements & Browser Event Typing',
          levelTitle: 'Level 12: DOM & Browser Web APIs Typing',
          goal: 'Master typing DOM nodes, forms, inputs, and browser event listeners safely.',
          prerequisites: ['Level 11 completed.'],
          concept: `### 1. The HTMLElement Inheritance Hierarchy

\`\`\`text
EventTarget  --->  Node  --->  Element  --->  HTMLElement  --->  HTMLInputElement
                                                          --->  HTMLButtonElement
                                                          --->  HTMLFormElement
\`\`\`

---

### 2. Typing \`querySelector\` Generically:
By default, \`document.querySelector("#email")\` returns \`Element | null\`. Passing a generic parameter gives you full autocomplete on element-specific properties (like \`.value\` or \`.checked\`):

\`\`\`typescript
const input = document.querySelector<HTMLInputElement>("#email-input");
if (input) {
  console.log(input.value); // ✅ Autocomplete for input.value!
}
\`\`\``,
          diagram: `flowchart LR
    Selector["document.querySelector<HTMLInputElement>('#age')"] --> NullCheck{"Is element null?"}
    NullCheck -->|Yes| Exit["Handle missing element gracefully"]
    NullCheck -->|No| SafeInput["Access element.valueAsNumber safely"]
    
    style Selector fill:#cfe2ff,stroke:#084298,color:#084298
    style NullCheck fill:#fff3cd,stroke:#ffc107,color:#664d03
    style SafeInput fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Exit fill:#e2e3e5,stroke:#41464b,color:#141619`,
          steps: [
            {
              title: 'Step 1: Type-Safe Form Handling in Pure TypeScript',
              explanation: 'Type form elements and submit events without any.',
              command: `const form = document.querySelector<HTMLFormElement>("#user-form");
const nameInput = document.querySelector<HTMLInputElement>("#username");

if (form && nameInput) {
  form.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();
    const enteredName: string = nameInput.value.trim();
    if (!enteredName) {
      alert("Name is required!");
      return;
    }
    console.log("Submitted name:", enteredName);
  });
}`
            },
            {
              title: 'Step 2: Type-Safe Browser Storage Wrapper',
              explanation: 'Wrap localStorage with generic JSON serialization and error handling.',
              command: `class TypedLocalStorage {
  static getItem<T>(key: string, fallback: T): T {
    try {
      const raw = localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : fallback;
    } catch {
      return fallback;
    }
  }

  static setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

// Usage:
interface AppSettings { theme: "light" | "dark"; fontSize: number; }
TypedLocalStorage.setItem<AppSettings>("settings", { theme: "dark", fontSize: 16 });
const saved = TypedLocalStorage.getItem<AppSettings>("settings", { theme: "light", fontSize: 14 });`
            }
          ],
          verification: 'Inspect the return types of `TypedLocalStorage.getItem` in your editor to verify full type safety.',
          expectedResult: 'Safe interaction with DOM elements, event listeners, and browser storage APIs.',
          summary: 'Use generic query selectors (querySelector<HTMLInputElement>) and wrap storage APIs with generic serializers.'
        }
      ]
    }
  ]
};

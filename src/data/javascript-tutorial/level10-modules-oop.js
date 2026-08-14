// Level 10: ES Modules & Object-Oriented JavaScript
export const level10ModulesOOP = {
  id: 'level-10',
  title: 'Level 10: ES Modules & Object-Oriented JS',
  icon: 'bi-boxes',
  color: '#8b5cf6',
  description: 'Master ES Modules (import/export), JavaScript Prototypes, the Prototype Chain, and ES6 Classes with private fields (#) and inheritance in baby steps.',
  chapters: [
    {
      id: 'modules-and-oop',
      title: '10. Modules, Prototypes & Classes',
      lessons: [
        {
          id: 'es-modules-architecture-import-export',
          slug: 'es-modules-architecture-import-export',
          order: '10.1',
          title: 'ES Modules: Modular Architecture & import/export',
          subtitle: 'Named exports, default exports, module boundaries, tree-shaking, and structuring production codebases in baby steps.',
          chapterId: 'modules-and-oop',
          chapterTitle: '10. Modules, Prototypes & Classes',
          levelTitle: 'Level 10: ES Modules & Object-Oriented JS',
          goal: 'Master modular software architecture by separating concerns across files using native ECMAScript Modules (ESM).',
          prerequisites: ['Level 9 completed.'],
          concept: `### Why Modular Code is Essential
In early JavaScript, all scripts shared a single global window scope, causing accidental variable collisions. **ES Modules (ESM)** solve this by giving every file its own private scope.

\`\`\`text
src/
├── api/
│   └── client.js        <- Exports API helper functions
├── utils/
│   └── formatters.js    <- Exports date/currency formatters
└── main.js              <- Imports and coordinates the application
\`\`\`

---

### Named Exports vs Default Exports:
1. **Named Exports (\`export const formatPrice = ...\`)**:
   - Explicit name matching on import: \`import { formatPrice } from './formatters.js'\`.
   - Allows multiple exports per file. Supports bundler **Tree-Shaking** (removing unused code).
2. **Default Export (\`export default function App() ...\`)**:
   - Exactly one default export per file: \`import App from './App.js'\`.`,
          diagram: `flowchart LR
    Utils["utils/math.js (export { add, multiply })"] --> Main["main.js (import { add } from './utils/math.js')"]
    Main --> App["Browser Engine / Bundler (Tree-shakes and includes only 'add')"]
    
    style Utils fill:#cfe2ff,stroke:#084298,color:#084298
    style Main fill:#d1e7dd,stroke:#198754,color:#0f5132
    style App fill:#fff3cd,stroke:#ffc107,color:#664d03`,
          steps: [
            {
              title: 'Step 1: Creating a Dedicated Service Module',
              explanation: 'Export reusable domain functions cleanly.',
              command: `// src/services/currencyService.js
export const TAX_RATE = 0.0825;

export function calculateSubtotal(price, quantity) {
  return price * quantity;
}

export function formatUSD(amount) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}`
            },
            {
              title: 'Step 2: Importing and Consuming in Main Application',
              explanation: 'Import only the needed functions into the entry point.',
              command: `// src/main.js
import { calculateSubtotal, formatUSD, TAX_RATE } from './services/currencyService.js';

const itemTotal = calculateSubtotal(120, 2);
const taxAmount = itemTotal * TAX_RATE;
const finalAmount = itemTotal + taxAmount;

console.log("Grand Total:", formatUSD(finalAmount)); // "$259.80"`
            }
          ],
          verification: 'Structure code into modules and verify that variables in separate files do not leak into the global scope.',
          expectedResult: 'Clean, scalable, and tree-shakeable modular codebase.',
          summary: 'Use named exports for utility libraries to enable tree-shaking and default exports for main component entry points.'
        },
        {
          id: 'prototypes-classes-and-inheritance',
          slug: 'prototypes-classes-and-inheritance',
          order: '10.2',
          title: 'Prototypes, ES6 Classes & Private Fields (#)',
          subtitle: 'Prototypal inheritance under the hood, constructor functions, ES6 class syntax, private fields (#), and extends inheritance in baby steps.',
          chapterId: 'modules-and-oop',
          chapterTitle: '10. Modules, Prototypes & Classes',
          levelTitle: 'Level 10: ES Modules & Object-Oriented JS',
          goal: 'Understand how JavaScript implements inheritance via prototypes and master modern ES6+ Class syntax with private encapsulated fields.',
          prerequisites: ['Lesson 10.1 completed.'],
          concept: `### The Truth About JavaScript Classes
Unlike classical languages (Java/C#), **JavaScript does NOT have true class blueprints**. In JavaScript, "classes" are syntactic sugar over **Prototypal Inheritance**.

Every JavaScript object has an internal hidden link (\`[[Prototype]]\`) pointing to another object. When you call a method:
1. JS looks on the object itself.
2. If not found, it traverses up the **Prototype Chain** to find the method on \`Object.prototype\`.

---

### Modern ES6+ Class Features:
- **\`constructor()\`**: Runs when initializing with \`new\`.
- **Private Fields (\`#privateField\`)**: Enforces true runtime data encapsulation (cannot be accessed outside the class!).
- **\`extends\` and \`super()\`**: Inherit properties and methods from a parent class.`,
          diagram: `flowchart TD
    DogInstance["dog (Instance of Dog)"] -->|"[[Prototype]]"| DogProto["Dog.prototype (bark method)"]
    DogProto -->|"[[Prototype]]"| AnimalProto["Animal.prototype (eat method)"]
    AnimalProto -->|"[[Prototype]]"| ObjProto["Object.prototype (toString, hasOwnProperty)"]
    ObjProto -->|"[[Prototype]]"| NullNode["null (End of Prototype Chain)"]
    
    style DogInstance fill:#cfe2ff,stroke:#084298,color:#084298
    style DogProto fill:#fff3cd,stroke:#ffc107,color:#664d03
    style AnimalProto fill:#d1e7dd,stroke:#198754,color:#0f5132
    style ObjProto fill:#e2e3e5,stroke:#41464b,color:#141619`,
          steps: [
            {
              title: 'Step 1: Building an Encapsulated Class with Private Fields (#)',
              explanation: 'Enforce real data protection using ES2022 private fields.',
              command: `class BankAccount {
  // 1. Private fields (inaccessible from outside!)
  #balance = 0;
  #accountNumber;

  constructor(accountNumber, initialDeposit = 0) {
    this.#accountNumber = accountNumber;
    this.#balance = initialDeposit;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Deposit amount must be positive");
    this.#balance += amount;
    return this.#balance;
  }

  // Public getter for reading balance safely
  get balance() {
    return this.#balance;
  }
}

const myAccount = new BankAccount("ACC-9821", 500);
myAccount.deposit(250);
console.log("Current Balance: $" + myAccount.balance); // $750

// ❌ Attempting to access private field throws syntax error:
// console.log(myAccount.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class`
            },
            {
              title: 'Step 2: Class Inheritance with extends and super()',
              explanation: 'Create specialized subclasses inheriting from a base class.',
              command: `class Employee {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getDetails() {
    return \`\${this.name} <\${this.email}>\`;
  }
}

class SoftwareEngineer extends Employee {
  constructor(name, email, techStack = []) {
    super(name, email); // Calls parent constructor
    this.techStack = techStack;
  }

  getDetails() {
    return \`\${super.getDetails()} - Skills: \${this.techStack.join(', ')}\`;
  }
}

const dev = new SoftwareEngineer("Alex", "alex@vinnertech.com", ["JavaScript", "React", "Docker"]);
console.log(dev.getDetails());`
            }
          ],
          verification: 'Instantiate BankAccount and SoftwareEngineer in the console. Verify that private fields block external access and subclass inheritance works cleanly.',
          expectedResult: 'Deep understanding of prototypal delegation, ES6 classes, and encapsulation.',
          summary: 'JavaScript classes provide clean object-oriented syntax built on prototypes, with modern private fields (#) providing true data encapsulation.'
        }
      ]
    }
  ]
};

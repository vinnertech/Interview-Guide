// Level 10: Classes, Modules & Architecture
export const level10ClassesModules = {
  id: 'level-10',
  title: 'Level 10: Classes, Modules & Architecture',
  icon: 'bi-diagram-2',
  color: '#84cc16',
  description: 'Master TypeScript Classes: public, private, protected, readonly, abstract classes, compile-time private vs JavaScript runtime #private fields, and clean ES Modules in baby steps.',
  chapters: [
    {
      id: 'classes-and-modules',
      title: '10. OOP Classes & Modular Architecture',
      lessons: [
        {
          id: 'classes-access-modifiers-abstract',
          slug: 'classes-access-modifiers-abstract',
          order: '10.1',
          title: 'Classes: Access Modifiers, readonly & Abstract Classes',
          subtitle: 'public, private, protected modifiers, parameter properties shorthand, and implementing abstract classes in baby steps.',
          chapterId: 'classes-and-modules',
          chapterTitle: '10. OOP Classes & Modular Architecture',
          levelTitle: 'Level 10: Classes, Modules & Architecture',
          goal: 'Master object-oriented class architecture in TypeScript with access control and abstract blueprints.',
          prerequisites: ['Level 9 completed.'],
          concept: `### 1. TypeScript Access Modifiers

- **\`public\` (Default)**: Accessible anywhere inside or outside the class.
- **\`protected\`**: Accessible within this class and any **derived subclasses** (cannot be accessed from outside instances).
- **\`private\`**: Accessible **only** within this exact class.
- **\`readonly\`**: Immutable field after constructor initialization.

---

### 2. Parameter Properties Shorthand
TypeScript provides a clean syntax to declare and initialize class fields directly in the constructor arguments:

\`\`\`typescript
class User {
  // Automatically creates this.id and this.name!
  constructor(public readonly id: number, private name: string) {}
}
\`\`\``,
          diagram: `flowchart TD
    Class["Abstract Base Class: BaseRepository<T>"] --> Impl1["UserRepository extends BaseRepository<User>"]
    Class --> Impl2["ProductRepository extends BaseRepository<Product>"]
    
    style Class fill:#cfe2ff,stroke:#084298,color:#084298
    style Impl1 fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Impl2 fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Class with Shorthand & Access Modifiers',
              explanation: 'Build a secure BankAccount class with encapsulation.',
              command: `class BankAccount {
  // Parameter properties shorthand:
  constructor(
    public readonly accountNumber: string,
    private _balance: number,
    protected ownerName: string
  ) {}

  public getBalance(): number {
    return this._balance;
  }

  public deposit(amount: number): void {
    if (amount <= 0) throw new Error("Deposit must be positive");
    this._balance += amount;
  }
}

const account = new BankAccount("ACC-901", 1000, "Sarah");
console.log("Balance:", account.getBalance()); // 1000
// account._balance = 50000; 
// ❌ Error: Property '_balance' is private and only accessible within class 'BankAccount'.`
            },
            {
              title: 'Step 2: Abstract Classes for Reusable Architecture',
              explanation: 'Define mandatory method contracts that derived classes must implement.',
              command: `abstract class BasePaymentProcessor {
  abstract processPayment(amount: number): Promise<boolean>;

  // Concrete shared method:
  public logTransaction(amount: number, status: string): void {
    console.log(\`[TX LOG]: Amount $\${amount} -> \${status}\`);
  }
}

class StripeProcessor extends BasePaymentProcessor {
  async processPayment(amount: number): Promise<boolean> {
    console.log(\`Charging $\${amount} via Stripe API...\`);
    this.logTransaction(amount, "SUCCESS");
    return true;
  }
}`
            }
          ],
          verification: 'Attempt to instantiate `new BasePaymentProcessor()` and verify TypeScript prevents instantiating abstract classes directly.',
          expectedResult: 'Robust OOP designs with encapsulation and polymorphic base classes.',
          summary: 'Use access modifiers (public, private, protected) for encapsulation, and abstract classes to establish shared architecture patterns.'
        },
        {
          id: 'ts-private-vs-js-hash-private-modules',
          slug: 'ts-private-vs-js-hash-private-modules',
          order: '10.2',
          title: 'TypeScript private vs JavaScript #private & ES Modules',
          subtitle: 'Compile-time private erasure vs true JavaScript runtime #private fields, barrel files, and module boundaries in baby steps.',
          chapterId: 'classes-and-modules',
          chapterTitle: '10. OOP Classes & Modular Architecture',
          levelTitle: 'Level 10: Classes, Modules & Architecture',
          goal: 'Understand the critical difference between compile-time private checking and true runtime private fields (#), plus clean ES module exports.',
          prerequisites: ['Lesson 10.1 completed.'],
          concept: `### 1. \`private\` vs \`#private\` (A Critical Security Distinction)

| Feature | TypeScript \`private\` | JavaScript \`#private\` (ES2022) |
| :--- | :--- | :--- |
| **Enforcement** | **Compile-Time ONLY** (Erased in .js output) | **Runtime Hard Privacy** enforced by V8 JS engine |
| **Runtime Access** | Can still be accessed at runtime via \`obj['secret']\` | **Impossible** to access from outside; throws runtime SyntaxError |
| **Recommendation** | Great for standard code organization | Mandatory for sensitive data (API keys, security tokens) |

---

### 2. ES Modules & Barrel Exports
Use barrel files (\`index.ts\`) to expose clean public API surfaces while hiding internal implementation modules.`,
          diagram: `flowchart LR
    Folder["src/services/"] --> F1["userService.ts"]
    Folder --> F2["authService.ts"]
    Folder --> Barrel["index.ts (Barrel File)"]
    Barrel --> Import["import { userService } from '@/services'"]
    
    style Folder fill:#cfe2ff,stroke:#084298,color:#084298
    style Barrel fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Import fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: True Runtime Hard Privacy with #private',
              explanation: 'Protect sensitive API credentials with native JavaScript private fields.',
              command: `class ApiClient {
  // 1. True JavaScript runtime private field:
  #apiKey: string;

  constructor(apiKey: string) {
    this.#apiKey = apiKey;
  }

  public getMaskedKey(): string {
    return \`***\${this.#apiKey.slice(-4)}\`;
  }
}

const client = new ApiClient("SECRET_KEY_987654321");
console.log(client.getMaskedKey()); // "***4321"

// (client as any).#apiKey; 
// ❌ SyntaxError: Property '#apiKey' is not accessible outside class 'ApiClient' because it has a private identifier.`
            }
          ],
          verification: 'Observe how #private fields cannot be bypassed even with `as any` type assertions.',
          expectedResult: 'Deep understanding of compile-time vs runtime privacy and clean module boundaries.',
          summary: 'Use TypeScript private for general domain modeling and JavaScript #private fields when true runtime encapsulation is required.'
        }
      ]
    }
  ]
};

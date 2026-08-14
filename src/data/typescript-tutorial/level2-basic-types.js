// Level 2: Basic Types, Type Inference & Type Annotations (In-Depth Expanded Edition)
export const level2BasicTypes = {
  id: 'level-2',
  title: 'Level 2: Basic Types & Type Inference',
  icon: 'bi-hash',
  color: '#0ea5e9',
  description: 'Master primitive types (string, number, boolean, bigint, symbol), type inference vs annotations, and special types: any, unknown, never, and void in complete baby steps.',
  chapters: [
    {
      id: 'basic-types-and-inference',
      title: '02. Primitive & Special Types',
      lessons: [
        {
          id: 'primitive-types-and-inference',
          slug: 'primitive-types-and-inference',
          order: '2.1',
          title: 'Primitive Types & Type Inference',
          subtitle: 'Explicit annotations (string, number, boolean) vs smart type inference in baby steps.',
          chapterId: 'basic-types-and-inference',
          chapterTitle: '02. Primitive & Special Types',
          levelTitle: 'Level 2: Basic Types & Type Inference',
          goal: 'Understand the core primitive types in TypeScript and know when to rely on automatic type inference vs explicit type annotations.',
          prerequisites: ['Level 1 completed.'],
          concept: `### The Core Rule of Type Annotations

In TypeScript, you annotate a type using a colon (\`:\`):

\`\`\`typescript
const identifier: Type = initialValue;
\`\`\`

---

### Type Inference: Let the Compiler Do the Heavy Lifting!
You do **not** need to manually annotate \`const age: number = 25;\` everywhere. When a variable is initialized with a value, TypeScript automatically infers the most accurate type.

- **Rely on Type Inference**: For local variables initialized immediately with obvious values (\`let count = 0;\`, \`const name = "Alice";\`).
- **Use Explicit Annotations**: For function parameters, uninitialized variables, complex return objects, and when variables can hold multiple union types (\`let id: string | number;\`).`,
          diagram: `flowchart LR
    Init["let price = 99.99;"] --> Inferred["TypeScript automatically infers: 'number'"]
    Inferred --> Assign{"price = 'free'"}
    Assign --> Error["❌ Error: Type 'string' is not assignable to type 'number'"]
    
    style Init fill:#cfe2ff,stroke:#084298,color:#084298
    style Inferred fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Error fill:#f8d7da,stroke:#dc3545,color:#842029`,
          steps: [
            {
              title: 'Step 1: All Primitive Types in Action',
              explanation: 'Observe all 7 JavaScript primitives represented with strict types in TypeScript.',
              command: `// 1. Strings (Text)
let companyName: string = "VinnerTech";

// 2. Numbers (Integer & Float IEEE 754)
let totalScore: number = 98.5;

// 3. Booleans (Logical flag)
let isProductionReady: boolean = true;

// 4. BigInt (Arbitrary precision integers)
let largeSequence: bigint = 9007199254740991n;

// 5. Symbols (Unique property identifiers)
let uniqueKey: symbol = Symbol("apiKey");

// 6 & 7. null and undefined
let emptyData: null = null;
let notYetAssigned: undefined = undefined;`
            },
            {
              title: 'Step 2: Literal Narrowing with const vs let',
              explanation: 'Notice how `const` infers exact literal values while `let` infers broad primitive types.',
              command: `// 1. Inferred as broad type 'string' (can be reassigned to any string):
let mutableName = "Sarah";

// 2. Inferred as exact literal type '"Sarah"' (cannot be changed):
const immutableName = "Sarah";`
            }
          ],
          verification: 'Hover your mouse over `mutableName` vs `immutableName` in your IDE to see TypeScript inferring broad string vs literal "Sarah".',
          expectedResult: 'Clear grasp of primitive types, compiler inference, and literal narrowing.',
          commonMistakes: [
            {
              problem: 'Writing redundant type annotations on obvious initializers (e.g. `let x: number = 5;`).',
              why: 'TypeScript already knows it is a number. Excessive annotations clutter code without adding safety.',
              fix: 'Let inference handle obvious values; save annotations for function arguments and complex unions.'
            }
          ],
          exercise: {
            title: 'Declare Strict Configuration Variables',
            description: 'Declare 3 variables: `appName` (string), `port` (number initialized to 8080), and `debugMode` (boolean initialized to false).',
            hint: 'Use const or let with initial values to test type inference.',
            solution: `const appName: string = "VinnerTech Gateway";
const port: number = 8080;
let debugMode: boolean = false;`
          },
          quiz: {
            question: 'When should you prefer explicit type annotations over automatic inference?',
            options: [
              'Never, TypeScript should always infer everything.',
              'For function parameters, uninitialized variables, and union types where inference cannot know your intent.',
              'Only when writing React class components.',
              'Only when using jQuery.'
            ],
            correctIndex: 1,
            explanation: 'TypeScript requires annotations on function arguments (under noImplicitAny) and when variables need to hold multiple union types.'
          },
          summary: 'Use primitive types (string, number, boolean, bigint, symbol) and leverage type inference to keep code clean and readable.'
        },
        {
          id: 'special-types-any-unknown-never-void',
          slug: 'special-types-any-unknown-never-void',
          order: '2.2',
          title: 'Special Types: any vs unknown vs never vs void',
          subtitle: 'Why any is dangerous, why unknown is the type-safe alternative, functions returning void, and exhaustive never checks in baby steps.',
          chapterId: 'basic-types-and-inference',
          chapterTitle: '02. Primitive & Special Types',
          levelTitle: 'Level 2: Basic Types & Type Inference',
          goal: 'Master the crucial difference between any and unknown, and use never for exhaustive compiler checks.',
          prerequisites: ['Lesson 2.1 completed.'],
          concept: `### 1. \`any\` vs \`unknown\` (The Ultimate Battle for Type Safety)

| Feature | \`any\` (Dangerous Escape Hatch) | \`unknown\` (Safe Top-Type) |
| :--- | :--- | :--- |
| **Type Checking** | Completely turns OFF all type checking | Enforces type checking |
| **Method Calling** | Allows \`val.anything()\` without error | **Blocked!** Must narrow type first before calling methods |
| **Best Use Case** | Legacy migrations / temporary prototypes | Handling untrusted external data (API JSON, user input) |

---

### 2. \`void\` vs \`never\`
- **\`void\`**: The function runs and finishes, but does **not return a meaningful value** (e.g. \`console.log\`).
- **\`never\`**: The function **never returns at all** (e.g. throws an exception or enters an infinite loop). Also used for exhaustive switch checks!`,
          diagram: `flowchart TD
    Unknown["const rawData: unknown = parseIncomingAPI();"] --> Attempt["rawData.toUpperCase()"]
    Attempt --> Blocked["❌ Compiler Error: 'rawData' is of type 'unknown'"]
    Unknown --> Narrow["if (typeof rawData === 'string')"]
    Narrow --> Safe["✅ rawData.toUpperCase() is now type-safe!"]
    
    style Unknown fill:#cfe2ff,stroke:#084298,color:#084298
    style Blocked fill:#f8d7da,stroke:#dc3545,color:#842029
    style Narrow fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Safe fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Using unknown for Safe Data Parsing',
              explanation: 'Never use `any` for API responses; use `unknown` and type narrow.',
              command: `function processUserInput(input: unknown) {
  // input.trim(); 
  // ❌ Error: 'input' is of type 'unknown'.

  // Type narrowing with typeof:
  if (typeof input === "string") {
    console.log("Safe string:", input.trim()); // ✅ Valid!
  } else if (typeof input === "number") {
    console.log("Safe number calculation:", input * 2); // ✅ Valid!
  }
}`
            },
            {
              title: 'Step 2: void vs never in Functions & Exhaustive Checks',
              explanation: 'Compare logging functions (void) with exception throwers and exhaustive checks (never).',
              command: `// 1. Returns void (finishes execution without return value)
function logAudit(message: string): void {
  console.log(\`[AUDIT]: \${message}\`);
}

// 2. Returns never (never successfully reaches end of function)
function throwFatalError(code: number, msg: string): never {
  throw new Error(\`FATAL ERROR [\${code}]: \${msg}\`);
}

// 3. Exhaustive check with never
type AppRole = "admin" | "user";

function handleRole(role: AppRole): string {
  switch (role) {
    case "admin": return "Full Admin Access";
    case "user": return "Standard User Access";
    default:
      const exhaustiveCheck: never = role;
      return exhaustiveCheck;
  }
}`
            }
          ],
          verification: 'Attempt to call methods on an `unknown` variable without an `if` check and observe the compiler error.',
          expectedResult: 'Complete understanding of type-safe unknown handling, void, and never.',
          quiz: {
            question: 'Why is `unknown` preferred over `any` when handling untrusted JSON data?',
            options: [
              'Because unknown consumes less RAM at runtime.',
              'Because unknown forces you to perform type narrowing before accessing properties, preventing runtime crashes.',
              'Because any is not supported in modern TypeScript.',
              'Because unknown automatically converts data into a string.'
            ],
            correctIndex: 1,
            explanation: 'unknown acts as a safe top-type that forces developers to prove the type before performing operations on it.'
          },
          summary: 'Avoid any in production. Use unknown for external data and narrow it safely. Use void for functions without returns and never for exceptions.'
        }
      ]
    }
  ]
};

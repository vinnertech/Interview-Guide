// Level 3: Functions, Parameters & Overloads (In-Depth Expanded Edition)
export const level3FunctionsOverloads = {
  id: 'level-3',
  title: 'Level 3: Functions & Call Signatures',
  icon: 'bi-code-slash',
  color: '#8b5cf6',
  description: 'Master typed parameters, return types, optional/default parameters, rest syntax (...args), function type aliases, contextual typing, and function overloads in complete baby steps.',
  chapters: [
    {
      id: 'functions-and-overloads',
      title: '03. Functions & Call Signatures',
      lessons: [
        {
          id: 'function-parameters-returns-types',
          slug: 'function-parameters-returns-types',
          order: '3.1',
          title: 'Function Signatures: Parameters, Return Types & Rest',
          subtitle: 'Explicit parameter typing, return type inference, optional (?) parameters, default fallbacks, and typed rest parameters in baby steps.',
          chapterId: 'functions-and-overloads',
          chapterTitle: '03. Functions & Call Signatures',
          levelTitle: 'Level 3: Functions & Call Signatures',
          goal: 'Master typing function parameters, return values, optional/default arguments, and rest parameters.',
          prerequisites: ['Level 2 completed.'],
          concept: `### How to Type a Function in TypeScript

Unlike variables where types can be inferred from initial values, **function parameters MUST always be typed explicitly** (under \`noImplicitAny\`):

\`\`\`typescript
function functionName(param1: Type1, param2: Type2): ReturnType {
  return result;
}
\`\`\`

---

### Function Type Expressions & Callbacks:
You can define a reusable **Function Type Alias** to describe callback shapes and higher-order functions:
\`\`\`typescript
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (x, y) => x + y;
const multiply: MathOperation = (x, y) => x * y;
\`\`\``,
          diagram: `flowchart LR
    Args["(price: number, discount: number = 0.1): number"] --> Check["TypeScript verifies argument types & count at compile-time"]
    Check --> Ret["Guarantees return value is strictly a number"]
    
    style Args fill:#cfe2ff,stroke:#084298,color:#084298
    style Check fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Ret fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Optional (?) and Default Parameters',
              explanation: 'Optional parameters must always come AFTER required parameters.',
              command: `// 'role' is optional (?); 'department' has a default fallback
function registerUser(name: string, role?: string, department: string = "Engineering"): string {
  if (role) {
    return \`\${name} (\${role}) - \${department}\`;
  }
  return \`\${name} - \${department}\`;
}

console.log(registerUser("Sarah", "Architect")); // "Sarah (Architect) - Engineering"
console.log(registerUser("David"));              // "David - Engineering"`
            },
            {
              title: 'Step 2: Typed Rest Parameters (...args)',
              explanation: 'Type variable arguments as a homogeneous array.',
              command: `function calculateTotal(taxRate: number, ...itemPrices: number[]): number {
  const sum = itemPrices.reduce((total, p) => total + p, 0);
  return sum + (sum * taxRate);
}

console.log("Total with tax:", calculateTotal(0.08, 100, 50, 25)); // 189`
            }
          ],
          verification: 'Pass incorrect argument types or missing arguments to `registerUser` in your IDE and observe compile-time feedback.',
          expectedResult: 'Type-safe function parameters, default values, and return values.',
          commonMistakes: [
            {
              problem: 'Placing optional parameters before required parameters (e.g. `fn(a?: number, b: number)`).',
              why: 'TypeScript and JavaScript do not allow optional arguments to precede required arguments because positional mapping becomes ambiguous.',
              fix: 'Always order required parameters first, followed by default and optional parameters.'
            }
          ],
          quiz: {
            question: 'What is the type of `...prices` in a rest parameter declared as `...prices: number[]`?',
            options: [
              'A tuple with fixed size 1',
              'An array of numbers (number[])',
              'any',
              'A single number'
            ],
            correctIndex: 1,
            explanation: 'Rest parameters gather arbitrary incoming positional arguments into a strongly typed array.'
          },
          summary: 'Always annotate function parameters. Place optional parameters after required ones and type rest parameters as arrays.'
        },
        {
          id: 'function-overloads-and-contextual-typing',
          slug: 'function-overloads-and-contextual-typing',
          order: '3.2',
          title: 'Function Overloading & Contextual Typing',
          subtitle: 'Overload signatures vs single implementation signature, when to use overloads vs union types in baby steps.',
          chapterId: 'functions-and-overloads',
          chapterTitle: '03. Functions & Call Signatures',
          levelTitle: 'Level 3: Functions & Call Signatures',
          goal: 'Understand how to write function overloads for APIs that return different types depending on input argument types.',
          prerequisites: ['Lesson 3.1 completed.'],
          concept: `### What is Function Overloading?
Function Overloading allows a single function to be called with different combinations of arguments and return different strongly-typed return values.

An overloaded function consists of:
1. **Overload Signatures**: 1 or more public declarations with **no function body**.
2. **Implementation Signature**: The single internal function body that handles all cases using unions. The implementation signature is **hidden from the outside caller**!`,
          diagram: `flowchart TD
    Call1["Caller calls: format(100)"] --> Sig1["1. Overload 1: format(n: number): string"]
    Call2["Caller calls: format(new Date())"] --> Sig2["2. Overload 2: format(d: Date): string"]
    Sig1 --> Body["3. Shared Implementation Body: format(val: number | Date): string"]
    Sig2 --> Body
    
    style Call1 fill:#cfe2ff,stroke:#084298,color:#084298
    style Call2 fill:#cfe2ff,stroke:#084298,color:#084298
    style Sig1 fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Sig2 fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Body fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Writing Clean Function Overloads',
              explanation: 'Provide distinct return types for string vs date inputs.',
              command: `// 1. Overload Signature 1
function parseTimestamp(timestamp: number): Date;

// 2. Overload Signature 2
function parseTimestamp(dateString: string): Date;

// 3. Overload Signature 3 (No args -> current time)
function parseTimestamp(): Date;

// 4. Single Implementation Signature (Body)
function parseTimestamp(input?: number | string): Date {
  if (input === undefined) return new Date();
  if (typeof input === "number") return new Date(input);
  return new Date(input);
}

const d1 = parseTimestamp(1700000000000); // Inferred as Date
const d2 = parseTimestamp("2026-08-14");    // Inferred as Date
const d3 = parseTimestamp();               // Inferred as Date`
            }
          ],
          verification: 'Call parseTimestamp with boolean (e.g. `parseTimestamp(true)`) and observe TypeScript blocking the call because no overload matches.',
          expectedResult: 'Polymorphic functions with accurate compile-time return types.',
          summary: 'Function overloads define multiple call signatures with a single compatible implementation body.'
        }
      ]
    }
  ]
};

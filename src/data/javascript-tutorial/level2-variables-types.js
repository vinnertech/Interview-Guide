// Level 2: Variables, Lexical Declarations & Data Types (In-Depth Expanded Edition)
export const level2VariablesTypes = {
  id: 'level-2',
  title: 'Level 2: Variables & Data Types',
  icon: 'bi-box-seam-fill',
  color: '#3b82f6',
  description: 'Master lexical declarations (let, const vs var), the Temporal Dead Zone, JavaScript primitive types, references, pass-by-value vs pass-by-reference, and the typeof operator in baby steps.',
  chapters: [
    {
      id: 'variables-and-declarations',
      title: '02. Variables, Memory & Data Types',
      lessons: [
        {
          id: 'variables-let-const-var-tdz',
          slug: 'variables-let-const-var-tdz',
          order: '2.1',
          title: 'Variables & Declarations: let, const vs var & TDZ',
          subtitle: 'How JavaScript allocates memory, block scope vs function scope, reassignment vs mutation, and the Temporal Dead Zone in baby steps.',
          chapterId: 'variables-and-declarations',
          chapterTitle: '02. Variables, Memory & Data Types',
          levelTitle: 'Level 2: Variables & Data Types',
          goal: 'Understand the difference between let, const, and var, master block scope, and avoid TDZ runtime reference errors.',
          prerequisites: ['Level 1 completed.'],
          concept: `### What is a Variable?
A variable is a **labeled memory storage container** in computer RAM where we save data so we can reuse and update it throughout our program.

\`\`\`text
Declaration (Create Box in RAM)        Assignment (Put Value in Box)
     let score;                                 score = 100;
\`\`\`

---

### The 3 Keywords: \`const\`, \`let\`, and \`var\`

| Feature | \`const\` (Recommended Default) | \`let\` (When Reassigning) | \`var\` (Legacy / Avoid) |
| :--- | :--- | :--- | :--- |
| **Scope** | Block Scope \`{ ... }\` | Block Scope \`{ ... }\` | Function Scope \`function()\` |
| **Reassignable?** | ❌ No (Cannot do \`a = 2\`) | ✅ Yes | ✅ Yes |
| **Redeclarable?** | ❌ No | ❌ No | ✅ Yes (Causes silent bugs!) |
| **Hoisting Behavior** | Hoisted into **Temporal Dead Zone (TDZ)** | Hoisted into **TDZ** | Hoisted and initialized to \`undefined\` |

---

### What is the Temporal Dead Zone (TDZ)?
When JavaScript enters a block of code, it registers all \`let\` and \`const\` identifiers in the lexical environment, but they **cannot be accessed before their declaration line is executed**. The time window between entering scope and reaching the declaration line is the **Temporal Dead Zone (TDZ)**. Accessing them in this zone throws a fatal \`ReferenceError\`.`,
          diagram: `flowchart TD
    BlockStart["1. Scope Enters Block {"] --> TDZ["Temporal Dead Zone (TDZ)\nVariable 'x' exists in memory but is uninitialized"]
    TDZ --> ReadAttempt{"Attempt to read 'x'?"}
    ReadAttempt -->|"Yes (Before declaration)"| Crash["❌ ReferenceError: Cannot access 'x' before initialization"]
    ReadAttempt -->|"No"| DeclLine["2. Reaches: const x = 42; (TDZ Ends!)"]
    DeclLine --> ValidRead["3. 'x' is now safely accessible everywhere in block"]
    
    style BlockStart fill:#cfe2ff,stroke:#084298,color:#084298
    style TDZ fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Crash fill:#f8d7da,stroke:#dc3545,color:#842029
    style DeclLine fill:#d1e7dd,stroke:#198754,color:#0f5132
    style ValidRead fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Declaring Constants and Reassignable Variables',
              explanation: 'Use `const` for values that should never be reassigned, and `let` for counters or toggles.',
              command: `// 1. Immutable variable binding with const
const applicationTitle = "VinnerTech Guide";
// applicationTitle = "New Title"; // ❌ TypeError: Assignment to constant variable!

// 2. Mutable variable binding with let
let userScore = 0;
console.log("Initial Score:", userScore); // Output: 0

userScore = userScore + 10;
console.log("Updated Score:", userScore); // Output: 10`
            },
            {
              title: 'Step 2: Understanding Block Scope',
              explanation: 'Variables declared with let/const inside `{}` curly braces are invisible to outer scopes.',
              command: `const isPremiumUser = true;

if (isPremiumUser) {
  const discountPercent = 20; // Bound strictly to this if-block!
  console.log("Discount inside block:", discountPercent); // Output: 20
}

// console.log(discountPercent); // ❌ ReferenceError: discountPercent is not defined!`
            },
            {
              title: 'Step 3: Object Mutation with const (Identifier vs Heap Value)',
              explanation: '`const` prevents reassigning the variable identifier, but nested properties inside an object or array can still be mutated!',
              command: `const developer = {
  name: "Sarah",
  role: "Frontend Engineer"
};

// ✅ Modifying a property is allowed (Heap mutation):
developer.role = "Senior Frontend Architect";
console.log(developer.role); // Output: Senior Frontend Architect

// ❌ Reassigning the whole variable is blocked:
// developer = { name: "Alex" }; // TypeError: Assignment to constant variable.`
            }
          ],
          verification: 'Run these examples in your browser console and observe how `const` blocks identifier reassignment while allowing property mutations.',
          expectedResult: 'Deep mastery of let, const, block scopes, and TDZ mechanics.',
          commonMistakes: [
            {
              problem: 'Using `var` in modern JavaScript code.',
              why: '`var` ignores `{}` block scoping, leaking variables out of if-statements and loops into outer scopes.',
              fix: 'Always use `const` by default. If a value genuinely needs to be reassigned later, use `let`.'
            }
          ],
          exercise: {
            title: 'Refactor Legacy var to Modern Declarations',
            description: 'Refactor code using `var` to use `const` and `let` with proper block scoping.',
            hint: 'Use const for fixed constants and let for loop counters.',
            solution: `const MAX_ATTEMPTS = 3;
let currentAttempt = 0;

while (currentAttempt < MAX_ATTEMPTS) {
  currentAttempt++;
  console.log("Attempt #" + currentAttempt);
}`
          },
          quiz: {
            question: 'What happens if you attempt to read a `let` variable before its declaration line in code?',
            options: [
              'It returns undefined.',
              'It throws a ReferenceError due to the Temporal Dead Zone (TDZ).',
              'It returns null.',
              'It defaults to 0.'
            ],
            correctIndex: 1,
            explanation: 'Variables declared with let and const reside in the Temporal Dead Zone until their declaration line is evaluated, throwing a ReferenceError if accessed early.'
          },
          summary: 'Use const as your standard declaration. Use let only when a variable requires reassignment. Never use legacy var.'
        },
        {
          id: 'primitive-data-types-and-typeof',
          slug: 'primitive-data-types-and-typeof',
          order: '2.2',
          title: 'JavaScript Data Types & The typeof Operator',
          subtitle: 'The 7 primitive types (String, Number, BigInt, Boolean, undefined, null, Symbol), Objects, and typeof gotchas in baby steps.',
          chapterId: 'variables-and-declarations',
          chapterTitle: '02. Variables, Memory & Data Types',
          levelTitle: 'Level 2: Variables & Data Types',
          goal: 'Master all 7 primitive data types, understand pass-by-value vs pass-by-reference, and safely inspect types using typeof.',
          prerequisites: ['Lesson 2.1 completed.'],
          concept: `### The 8 Data Types in JavaScript

In JavaScript, data is divided into **7 Primitive Types** (immutable values stored directly on the Stack) and **1 Complex Reference Type (Object)** stored on the Heap.

---

#### 1. The 7 Primitive Types (Immutable & Stored by Value):
1. **String**: Text data wrapped in quotes (\`"Hello"\`, \`'World'\`, \`\` \`Total: \${price}\` \`\`).
2. **Number**: 64-bit floating-point integers and decimals (\`42\`, \`3.14159\`, \`NaN\`, \`Infinity\`).
3. **BigInt**: Arbitrary precision integers for financial calculations (\`9007199254740991n\`).
4. **Boolean**: Logical flags representing strictly \`true\` or \`false\`.
5. **Undefined**: The automatic default value of an unassigned variable.
6. **Null**: Intentional absence of any object value.
7. **Symbol**: Unique, collision-proof property keys (\`Symbol("id")\`).

---

#### 2. The typeof Operator & The Infamous \`typeof null\` Bug:
- \`typeof "hello"\` $\rightarrow$ \`"string"\`
- \`typeof 42\` $\rightarrow$ \`"number"\`
- \`typeof true\` $\rightarrow$ \`"boolean"\`
- \`typeof undefined\` $\rightarrow$ \`"undefined"\`
- **\`typeof null\` $\rightarrow$ \`"object"\` (⚠️ Historic JavaScript Bug from 1995 that cannot be fixed without breaking the web!)**`,
          diagram: `flowchart TD
    Types["JavaScript Data Types"] --> Prim["1. Primitives (Passed by Value)\n- String, Number, Boolean, BigInt, Symbol, null, undefined"]
    Types --> Obj["2. Reference Objects (Passed by Reference)\n- Plain Objects {}, Arrays [], Functions () => {}"]
    
    style Types fill:#cfe2ff,stroke:#084298,color:#084298
    style Prim fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Obj fill:#fff3cd,stroke:#ffc107,color:#664d03`,
          steps: [
            {
              title: 'Step 1: Inspecting All Primitives with typeof',
              explanation: 'Check the runtime type of each value.',
              command: `console.log(typeof "VinnerTech");   // "string"
console.log(typeof 42);             // "number"
console.log(typeof true);           // "boolean"
console.log(typeof 100n);           // "bigint"
console.log(typeof Symbol("key"));  // "symbol"
console.log(typeof undefined);      // "undefined"
console.log(typeof null);           // "object" (Historic gotcha!)`
            },
            {
              title: 'Step 2: Pass-by-Value vs Pass-by-Reference in Memory',
              explanation: 'Primitives copy their exact value; Objects copy their memory reference address.',
              command: `// 1. Primitive (Pass by Value - Independent copies)
let scoreA = 100;
let scoreB = scoreA; // Copies 100
scoreB = 200;        // Mutates only scoreB
console.log(scoreA); // Still 100!

// 2. Object (Pass by Reference - Shared Heap Pointer)
const user1 = { name: "Sarah" };
const user2 = user1; // Copies pointer address!
user2.name = "Elena";
console.log(user1.name); // Output: "Elena" (Both point to the exact same object in RAM!)`
            }
          ],
          verification: 'Run the Pass-by-Value vs Pass-by-Reference example in your console to verify how object memory pointers work.',
          expectedResult: 'Complete mastery of primitive immutability vs heap object reference sharing.',
          quiz: {
            question: 'What is the return value of `typeof null` in JavaScript?',
            options: [
              '"null"',
              '"undefined"',
              '"object"',
              '"boolean"'
            ],
            correctIndex: 2,
            explanation: 'Due to a legacy bug from JavaScript 1.0 in 1995, typeof null returns "object". To test for null, always use strict equality (value === null).'
          },
          summary: 'JavaScript has 7 primitive types (stored by value on the stack) and Objects (stored by reference on the heap). Use value === null to accurately check for null.'
        }
      ]
    }
  ]
};

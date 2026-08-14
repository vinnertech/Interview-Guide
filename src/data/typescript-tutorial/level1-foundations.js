// Level 1: TypeScript Foundations & Setup (In-Depth Expanded Edition)
export const level1Foundations = {
  id: 'level-1',
  title: 'Level 1: TypeScript Foundations & Setup',
  icon: 'bi-shield-check',
  color: '#3178c6',
  description: 'Master the fundamental architecture of TypeScript: Static type checking, the compilation pipeline, type erasure, and configuring tsconfig.json with enterprise Strict Mode in baby steps.',
  chapters: [
    {
      id: 'ts-foundations',
      title: '01. TypeScript Architecture & Mental Model',
      lessons: [
        {
          id: 'what-is-typescript-mental-model',
          slug: 'what-is-typescript-mental-model',
          order: '1.1',
          title: 'What is TypeScript? (The Static Type Layer)',
          subtitle: 'The fundamental mental model: TypeScript is a compile-time static type checker that erases all types during compilation to emit standard JavaScript for runtimes.',
          chapterId: 'ts-foundations',
          chapterTitle: '01. TypeScript Architecture & Mental Model',
          levelTitle: 'Level 1: TypeScript Foundations & Setup',
          goal: 'Understand the exact technical distinction between compile-time type verification and runtime JavaScript execution.',
          prerequisites: ['Basic JavaScript knowledge (variables, functions, objects).'],
          concept: `### The Most Important Rule: TypeScript vs JavaScript

**JavaScript is the runtime execution language.**
**TypeScript is a statically typed development layer and compiler.**

\`\`\`text
TypeScript Source (.ts)  --->  TypeScript Compiler (tsc)  --->  JavaScript Output (.js)  --->  JavaScript Runtime (Browser / Node.js)
  (Types, Interfaces,           (Type Checking & Type            (Plain Vanilla JS             (Executes code in V8 / SpiderMonkey)
   Generics, Annotations)        Erasure)                         Zero types exist!)
\`\`\`

---

### The 4 Pillars of the TypeScript Mental Model:
1. **Browsers Do NOT Run TypeScript Directly**: Web browsers only understand HTML, CSS, and plain JavaScript. When you build a project, bundlers (Vite/Webpack) or the TypeScript compiler (\`tsc\`) strip away all type declarations, leaving pure, standard JavaScript.
2. **Complete Type Erasure**: Once your code compiles to \`.js\`, **zero types exist in memory at runtime**. Types are solely for you, your team, and your IDE (VS Code) to catch bugs *before* your code ever runs in production.
3. **Strict Superset of JavaScript**: Every line of valid JavaScript is already valid TypeScript. You can adopt TypeScript gradually by renaming \`.js\` files to \`.ts\`.
4. **Compile-Time vs Runtime Errors**: 
   - *JavaScript*: Errors happen at **runtime** in front of your live users (e.g. \`Uncaught TypeError: Cannot read property 'map' of undefined\`).
   - *TypeScript*: Errors are caught at **write-time** in your code editor with red squiggly lines before you even save the file!`,
          diagram: `flowchart TD
    TS["1. TypeScript Source Code (.ts / .tsx)\nlet age: number = 25;\ninterface User { id: number; name: string }"] --> TypeCheck["2. TypeScript Type Checker (tsc)\nVerifies types & flags errors in IDE"]
    TypeCheck --> Transform["3. Type Erasure & Transpilation\nStrips ': number' & 'interface' completely"]
    Transform --> JS["4. Output JavaScript (.js)\nvar age = 25;\n(Zero types in output!)"]
    JS --> Runtime["5. Runtime Execution\n(Chrome V8, Node.js, Web Browser)"]
    
    style TS fill:#cfe2ff,stroke:#084298,color:#084298
    style TypeCheck fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Transform fill:#d1e7dd,stroke:#198754,color:#0f5132
    style JS fill:#e2e3e5,stroke:#41464b,color:#141619
    style Runtime fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Comparing JavaScript Runtime Bugs vs TypeScript Compile-Time Safety',
              explanation: 'In JavaScript, passing the wrong type crashes at runtime. In TypeScript, the bug is caught immediately.',
              command: `// ❌ JavaScript (Silent runtime bug):
// function calculateTax(price) { return price * 0.1; }
// calculateTax("one hundred"); // Output: NaN (silent production bug!)

// ✅ TypeScript (Immediate compile-time protection):
function calculateTax(price: number): number {
  return price * 0.1;
}

// calculateTax("one hundred"); 
// ❌ Compiler Error: Argument of type 'string' is not assignable to parameter of type 'number'.

console.log("Tax on $100:", calculateTax(100)); // Output: 10`
            },
            {
              title: 'Step 2: Understanding Automatic Type Inference',
              explanation: 'You do NOT need to write types everywhere! TypeScript automatically infers types from assigned values.',
              command: `// TypeScript automatically infers 'userName' is a string:
let userName = "Sarah Connor";

// userName = 42; 
// ❌ Error: Type 'number' is not assignable to type 'string'.`
            }
          ],
          verification: 'Inspect how hovering over variables in TypeScript shows their inferred type and how invalid assignments are flagged immediately.',
          expectedResult: 'Complete clarity on compile-time static type checking vs runtime JavaScript execution.',
          commonMistakes: [
            {
              problem: 'Thinking that TypeScript types make API responses secure at runtime.',
              why: 'TypeScript types do not exist at runtime. If an external backend sends bad data, TypeScript cannot intercept it without a runtime validator (like Zod).',
              fix: 'Use TypeScript for write-time developer safety and validation schemas for external runtime data.'
            }
          ],
          exercise: {
            title: 'Convert a JavaScript Function to Typed TypeScript',
            description: 'Convert a function `function formatUser(name, age)` so that `name` is strictly a string, `age` is strictly a number, and it returns a string.',
            hint: 'Use `: string` and `: number` annotations on parameters, and `: string` after the parameter list.',
            solution: `function formatUser(name: string, age: number): string {
  return \`User: \${name}, Age: \${age}\`;
}

console.log(formatUser("Alex", 28));`
          },
          quiz: {
            question: 'What happens to TypeScript type annotations (like `: number`, `interface`) when the code is compiled to JavaScript?',
            options: [
              'They are converted into browser CSS rules.',
              'They are completely erased and do not exist in the output JavaScript file.',
              'They are stored in a hidden database in the browser.',
              'They become JavaScript comments.'
            ],
            correctIndex: 1,
            explanation: 'Through the process of Type Erasure, TypeScript strips away all type annotations, leaving plain standard JavaScript.'
          },
          summary: 'TypeScript is a static type layer for JavaScript. It catches bugs during development and compiles into standard JavaScript for runtime execution.'
        },
        {
          id: 'tsconfig-and-strict-mode',
          slug: 'tsconfig-and-strict-mode',
          order: '1.2',
          title: 'Compiler Setup: tsconfig.json & Strict Mode',
          subtitle: 'Configuring target ECMAScript versions, module resolution, and why "strict": true is mandatory for production reliability in baby steps.',
          chapterId: 'ts-foundations',
          chapterTitle: '01. TypeScript Architecture & Mental Model',
          levelTitle: 'Level 1: TypeScript Foundations & Setup',
          goal: 'Master the core compiler configuration options in tsconfig.json and configure strict type safety.',
          prerequisites: ['Lesson 1.1 completed.'],
          concept: `### What is \`tsconfig.json\`?

The \`tsconfig.json\` file resides at the root of every TypeScript project. It serves as the master blueprint directing the TypeScript compiler (\`tsc\`) on:
1. **Target**: Which ECMAScript version to output (e.g. \`ES2022\`, \`ESNext\`).
2. **Module System**: How files import and export each other (e.g. \`ESNext\`, \`NodeNext\`, \`bundler\`).
3. **Libraries (\`lib\`)**: Which environment APIs are available (e.g. \`DOM\`, \`DOM.Iterable\`, \`ES2022\`).
4. **Strictness**: How aggressively TypeScript checks for potential bugs.

---

### Why \`"strict": true\` is the Industry Gold Standard:
Enabling \`"strict": true\` turns on a suite of vital type-safety flags:
- \`strictNullChecks\`: Prevents \`null\` or \`undefined\` from silently being assigned to regular types (eliminates the billion-dollar mistake!).
- \`noImplicitAny\`: Flags variables that TypeScript cannot infer instead of defaulting them to dangerous \`any\`.
- \`strictFunctionTypes\`: Ensures function parameters are checked contravariantly.
- \`noUncheckedIndexedAccess\`: Ensures array element lookups (e.g. \`arr[0]\`) account for the possibility of returning \`undefined\`.`,
          diagram: `flowchart TD
    Config["tsconfig.json ('strict': true)"] --> Flag1["1. strictNullChecks (Blocks null / undefined assignment)"]
    Config --> Flag2["2. noImplicitAny (Requires explicit types when inference fails)"]
    Config --> Flag3["3. strictBindCallApply (Validates .bind/.call parameters)"]
    Config --> Flag4["4. noUncheckedIndexedAccess (Safe array lookup)"]
    
    style Config fill:#cfe2ff,stroke:#084298,color:#084298
    style Flag1 fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Flag2 fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Flag3 fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Flag4 fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Production-Grade tsconfig.json Structure',
              explanation: 'A clean configuration suitable for modern web and React development.',
              command: `// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noUncheckedIndexedAccess": true,
    "skipLibCheck": true,
    "isolatedModules": true
  },
  "include": ["src"]
}`
            }
          ],
          verification: 'Inspect your project tsconfig.json to confirm strictNullChecks and noImplicitAny are enabled.',
          expectedResult: 'A rock-solid compiler setup that eliminates null reference bugs before runtime.',
          summary: 'tsconfig.json controls how TypeScript type-checks and transpiles your code. Always enable "strict": true in production.'
        }
      ]
    }
  ]
};

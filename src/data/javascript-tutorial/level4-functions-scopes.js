// Level 4: Functions & Execution Scopes (In-Depth Expanded Edition)
export const level4FunctionsScopes = {
  id: 'level-4',
  title: 'Level 4: Functions & Execution Scopes',
  icon: 'bi-code-slash',
  color: '#8b5cf6',
  description: 'Master function declarations vs arrow functions, lexical this, rest parameters (...args), default arguments, higher-order functions, and execution scope chains in baby steps.',
  chapters: [
    {
      id: 'functions-and-scopes',
      title: '04. Functions & Execution Scopes',
      lessons: [
        {
          id: 'function-declarations-arrows-scopes',
          slug: 'function-declarations-arrows-scopes',
          order: '4.1',
          title: 'Functions: Declarations vs Arrow Functions & Scopes',
          subtitle: 'Function declarations vs expressions vs arrow functions, lexical this binding, rest parameters, and the Scope Chain in baby steps.',
          chapterId: 'functions-and-scopes',
          chapterTitle: '04. Functions & Execution Scopes',
          levelTitle: 'Level 4: Functions & Execution Scopes',
          goal: 'Understand the architectural differences between function declarations and arrow functions, master lexical this binding, and avoid scope shadowing bugs.',
          prerequisites: ['Level 3 completed.'],
          concept: `### 1. The 3 Ways to Write Functions in JavaScript

1. **Function Declaration (Hoisted to top of scope)**:
   \`\`\`javascript
   function calculateTotal(price, tax) { return price + tax; }
   \`\`\`

2. **Function Expression (Assigned to a variable)**:
   \`\`\`javascript
   const calculateTotal = function(price, tax) { return price + tax; };
   \`\`\`

3. **Arrow Function (ES6+ Clean syntax with Lexical \`this\`)**:
   \`\`\`javascript
   const calculateTotal = (price, tax) => price + tax;
   \`\`\`

---

### 2. The Critical Difference: Dynamic \`this\` vs Lexical \`this\`
- **Standard Functions (\`function\`)**: Have their own dynamic \`this\` context determined at runtime by **who called the function**.
- **Arrow Functions (\`() => {}\`)**: Do **NOT** have their own \`this\`. They inherit \`this\` lexically from the surrounding parent scope (essential for React callbacks and event listeners!).

---

### 3. The Scope Chain (Global $\rightarrow$ Outer $\rightarrow$ Block):
When JavaScript looks for a variable, it searches:
1. Current Local Scope
2. Enclosing Parent Scope(s)
3. Global Window/Module Scope
*(If not found anywhere, it throws \`ReferenceError: x is not defined\`)*`,
          diagram: `flowchart TD
    Local["1. Local Scope (Inside Function) -> Checks if 'tax' exists"] --> Parent["2. Parent Scope (Outer Function)"]
    Parent --> Global["3. Global Scope (window / module)"]
    Global --> Error["❌ ReferenceError: Variable not found in scope chain!"]
    
    style Local fill:#cfe2ff,stroke:#084298,color:#084298
    style Parent fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Global fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Error fill:#f8d7da,stroke:#dc3545,color:#842029`,
          steps: [
            {
              title: 'Step 1: Arrow Functions and Concise Returns',
              explanation: 'Write clean, expressive mathematical functions.',
              command: `// 1. Single-line implicit return arrow function:
const calculateDiscount = (price, rate = 0.1) => price - (price * rate);

console.log("Discounted Price:", calculateDiscount(100, 0.2)); // Output: 80`
            },
            {
              title: 'Step 2: Rest Parameters (...args) Gathering',
              explanation: 'Accept variable numbers of incoming arguments.',
              command: `const calculateAverage = (...scores) => {
  if (scores.length === 0) return 0;
  const sum = scores.reduce((total, s) => total + s, 0);
  return sum / scores.length;
};

console.log("Average Score:", calculateAverage(85, 90, 95, 100)); // Output: 92.5`
            }
          ],
          verification: 'Test arrow functions with single vs multiple parameters in your browser console.',
          expectedResult: 'Deep mastery of function declarations, arrow functions, and scope lookup mechanics.',
          summary: 'Use arrow functions for concise logic and callback preservation of lexical this. Use rest parameters (...args) to gather variable argument lists.'
        }
      ]
    }
  ]
};

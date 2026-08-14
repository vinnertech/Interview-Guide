// Level 11: Advanced JavaScript Deep-Dive
export const level11AdvancedJS = {
  id: 'level-11',
  title: 'Level 11: Advanced JS, Closures & Runtime Memory',
  icon: 'bi-cpu-fill',
  color: '#ec4899',
  description: 'Master Closures and Lexical Environments, the dynamic rules of "this", call/apply/bind, and Garbage Collection mark-and-sweep mechanics in baby steps.',
  chapters: [
    {
      id: 'advanced-js-deep-dive',
      title: '11. Closures, "this" & Runtime Internals',
      lessons: [
        {
          id: 'closures-and-lexical-environments',
          slug: 'closures-and-lexical-environments',
          order: '11.1',
          title: 'Closures Deep-Dive: Preserved Scope & Factory Functions',
          subtitle: 'How functions retain access to their outer lexical environment even after the parent function has finished executing in baby steps.',
          chapterId: 'advanced-js-deep-dive',
          chapterTitle: '11. Closures, "this" & Runtime Internals',
          levelTitle: 'Level 11: Advanced JS, Closures & Runtime Memory',
          goal: 'Understand why closures exist, how JavaScript preserves outer scope variables in heap memory, and build private state factories.',
          prerequisites: ['Level 10 completed.'],
          concept: `### What is a Closure?
A **Closure** is created whenever an inner function is defined inside an outer function and **retains access to the outer function's variables**, even after the outer function has completely returned and exited the Call Stack!

\`\`\`text
function outer() {
  let secret = 42; // Preserved in Heap Memory!
  return function inner() {
    console.log(secret); // Inner function remembers 'secret'
  };
}
\`\`\`

---

### Real-World Use Cases for Closures:
1. **Data Encapsulation & Private State**: Creating objects where internal state cannot be modified from the outside.
2. **Function Factories**: Creating specialized functions with preset configuration.
3. **Event Handlers & Memoization**: Caching computed results based on past inputs.`,
          diagram: `flowchart LR
    Outer["1. createCounter() executes & leaves Call Stack"] --> Env["2. Lexical Environment with { count: 0 } preserved in HEAP"]
    Env --> Inner["3. Returned inner function points to preserved Lexical Environment"]
    Inner --> Invoked["4. counter() increments count -> 1, 2, 3..."]
    
    style Outer fill:#cfe2ff,stroke:#084298,color:#084298
    style Env fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Inner fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Invoked fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Building a Private State Counter with Closures',
              explanation: 'Create a private counter variable that cannot be tampered with directly.',
              command: `function createSecureCounter(initialValue = 0) {
  let count = initialValue; // Private variable trapped inside closure!

  return {
    increment: () => { count += 1; return count; },
    decrement: () => { count -= 1; return count; },
    getValue: () => count
  };
}

const counterA = createSecureCounter(10);
console.log(counterA.increment()); // 11
console.log(counterA.increment()); // 12
console.log(counterA.getValue());  // 12

// Note: Direct access to 'count' is completely impossible from outside!
console.log(counterA.count); // undefined (Safe & Encapsulated!)`
            },
            {
              title: 'Step 2: Function Factory for Dynamic Multipliers',
              explanation: 'Generate specialized math utility functions on the fly.',
              command: `function createMultiplier(factor) {
  // 'factor' is captured by the returned closure function
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("Double 15:", double(15)); // 30
console.log("Triple 15:", triple(15)); // 45`
            }
          ],
          verification: 'Run the counter and multiplier snippets in the console to observe independent, preserved lexical state.',
          expectedResult: 'Mastery of closures and lexical state retention.',
          summary: 'Closures allow inner functions to retain access to outer scope variables even after the outer function finishes executing.'
        },
        {
          id: 'the-this-keyword-call-apply-bind',
          slug: 'the-this-keyword-call-apply-bind',
          order: '11.2',
          title: 'The "this" Keyword & Explicit Binding (call, apply, bind)',
          subtitle: 'How function call sites determine "this", arrow function lexical this, and overriding context with call, apply, and bind in baby steps.',
          chapterId: 'advanced-js-deep-dive',
          chapterTitle: '11. Closures, "this" & Runtime Internals',
          levelTitle: 'Level 11: Advanced JS, Closures & Runtime Memory',
          goal: 'Master all 4 rules of the "this" keyword and control function execution contexts explicitly with call, apply, and bind.',
          prerequisites: ['Lesson 11.1 completed.'],
          concept: `### The 4 Rules Determining What "this" Points To

In JavaScript, \`this\` is **NOT determined where the function is declared, but HOW the function is called**:

1. **Default Binding (Direct Call)**: \`greet()\` $\rightarrow$ \`this\` points to \`window\` (or \`undefined\` in strict mode).
2. **Implicit Binding (Method Call)**: \`user.greet()\` $\rightarrow$ \`this\` points to the object before the dot (\`user\`).
3. **Explicit Binding**: \`greet.call(user)\` or \`greet.bind(user)\` $\rightarrow$ \`this\` is explicitly forced to point to \`user\`.
4. **New Binding**: \`new Person()\` $\rightarrow$ \`this\` points to the newly created blank object.

*Exception*: **Arrow Functions** do not have their own \`this\`. They inherit \`this\` lexically from their surrounding enclosing parent scope!`,
          diagram: `flowchart TD
    CallSite["How is function invoked?"] --> Arrow{"Is it an Arrow Function?"}
    Arrow -->|"Yes"| Lexical["Inherits 'this' from surrounding parent scope"]
    Arrow -->|"No"| NewCheck{"Invoked with 'new'?"}
    NewCheck -->|"Yes"| NewObj["'this' points to newly created object instance"]
    NewCheck -->|"No"| ExpCheck{"Invoked with .call() / .apply() / .bind()?"}
    ExpCheck -->|"Yes"| Explicit["'this' points to explicitly passed object"]
    ExpCheck -->|"No"| MethodCheck{"Invoked as object.method()?"}
    MethodCheck -->|"Yes"| Implicit["'this' points to object before the dot"]
    MethodCheck -->|"No"| Default["'this' points to undefined (strict) or window"]
    
    style Arrow fill:#cfe2ff,stroke:#084298,color:#084298
    style Lexical fill:#d1e7dd,stroke:#198754,color:#0f5132
    style NewObj fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Explicit fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Implicit fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Default fill:#fff3cd,stroke:#ffc107,color:#664d03`,
          steps: [
            {
              title: 'Step 1: Explicit Binding with call, apply, and bind',
              explanation: 'Borrow functions and bind specific object contexts.',
              command: `function introduce(greeting, punctuation) {
  return \`\${greeting}, I am \${this.name}, \${this.role}\${punctuation}\`;
}

const engineerA = { name: "David", role: "Cloud Architect" };
const engineerB = { name: "Elena", role: "Security Engineer" };

// 1. .call(context, arg1, arg2) - passes arguments individually
console.log(introduce.call(engineerA, "Hello", "!"));

// 2. .apply(context, [arg1, arg2]) - passes arguments as an array
console.log(introduce.apply(engineerB, ["Greetings", "."]));

// 3. .bind(context) - returns a brand new permanently-bound function
const introduceElena = introduce.bind(engineerB, "Welcome");
console.log(introduceElena("!!"));`
            }
          ],
          verification: 'Execute call, apply, and bind in the console and observe how the context object is injected dynamically.',
          expectedResult: 'Complete clarity on runtime this bindings and context switching.',
          summary: 'The value of "this" depends on how a function is called. Use .bind(), .call(), or arrow functions to control execution context.'
        }
      ]
    }
  ]
};

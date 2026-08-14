// Level 8: Asynchronous JavaScript, Event Loop & Promises (In-Depth Expanded Edition)
export const level8AsyncPromises = {
  id: 'level-8',
  title: 'Level 8: Async JS, Event Loop & Promises',
  icon: 'bi-hourglass-split',
  color: '#0ea5e9',
  description: 'Master the JavaScript Event Loop, Call Stack, Microtasks vs Macrotasks, Promises (.then, .catch, .finally), Promise combinators (all, allSettled, race, any), and async/await in baby steps.',
  chapters: [
    {
      id: 'async-and-event-loop',
      title: '08. Asynchronous Execution & Concurrency',
      lessons: [
        {
          id: 'event-loop-microtasks-macrotasks',
          slug: 'event-loop-microtasks-macrotasks',
          order: '8.1',
          title: 'The Event Loop: Call Stack, Microtasks & Macrotasks',
          subtitle: 'Why JavaScript is single-threaded, how the Call Stack handles synchronous execution, and the exact priority order of Microtasks (Promises) vs Macrotasks (setTimeout) in baby steps.',
          chapterId: 'async-and-event-loop',
          chapterTitle: '08. Asynchronous Execution & Concurrency',
          levelTitle: 'Level 8: Async JS, Event Loop & Promises',
          goal: 'Master the execution order of synchronous code, Microtask queues (Promises), and Macrotask queues (Timers).',
          prerequisites: ['Level 7 completed.'],
          concept: `### The JavaScript Single-Threaded Concurrency Model

JavaScript has **1 Single Call Stack**, meaning it can only execute 1 instruction at a time on the main UI thread.

To perform long network requests or timers without freezing the browser screen, JavaScript relies on the **Event Loop**:

---

### The 3 Execution Queues in Order of Priority:
1. **Call Stack (Synchronous Code)**: Always executes immediately from top to bottom.
2. **Microtask Queue (HIGH PRIORITY)**:
   - Contains: \`Promise.then()\`, \`async/await\`, \`queueMicrotask()\`, and \`MutationObserver\`.
   - **Rule**: As soon as the Call Stack is empty, the Event Loop empties the ENTIRE Microtask queue before touching any timers!
3. **Macrotask Queue (LOW PRIORITY / Task Queue)**:
   - Contains: \`setTimeout()\`, \`setInterval()\`, I/O operations, and DOM click events.`,
          diagram: `flowchart TD
    Stack["1. Call Stack (Synchronous Code)"] --> Empty{"Is Stack Empty?"}
    Empty -->|Yes| Micro["2. Microtask Queue (Promises, async/await)\n*Empties completely before moving on!*"]
    Micro --> Macro["3. Macrotask Queue (setTimeout, setInterval, DOM Events)"]
    Macro --> Stack
    
    style Stack fill:#cfe2ff,stroke:#084298,color:#084298
    style Empty fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Micro fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Macro fill:#e2e3e5,stroke:#41464b,color:#141619`,
          steps: [
            {
              title: 'Step 1: The Classic Event Loop Execution Order Puzzle',
              explanation: 'Predict and verify the exact output sequence.',
              command: `console.log("1: Synchronous Start");

// Macrotask (Timers queue):
setTimeout(() => {
  console.log("2: Macrotask (setTimeout 0ms)");
}, 0);

// Microtask (High priority Promise queue):
Promise.resolve().then(() => {
  console.log("3: Microtask (Promise .then)");
});

console.log("4: Synchronous End");

// --- EXACT CONSOLE OUTPUT ORDER ---
// 1: Synchronous Start
// 4: Synchronous End
// 3: Microtask (Promise .then)
// 2: Macrotask (setTimeout 0ms)`
            }
          ],
          verification: 'Paste this snippet in your browser console and verify that Microtask 3 always prints before Macrotask 2.',
          expectedResult: 'Deep mastery of Call Stack, Microtasks, and Macrotasks.',
          summary: 'Synchronous code runs first. Microtasks (Promises) run next with highest priority. Macrotasks (setTimeout) run last.'
        }
      ]
    }
  ]
};

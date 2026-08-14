// Level 8: Asynchronous JavaScript & The Event Loop
export const level8AsyncEventLoop = {
  id: 'level-8',
  title: 'Level 8: Asynchronous JS & The Event Loop',
  icon: 'bi-arrow-repeat',
  color: '#6366f1',
  description: 'Master the Single-Threaded Event Loop, Call Stack, Task vs Microtask Queues, Promises, async/await, and Promise concurrency combinators.',
  chapters: [
    {
      id: 'async-and-event-loop',
      title: '08. Asynchronous Execution & Promises',
      lessons: [
        {
          id: 'call-stack-event-loop-microtasks',
          slug: 'call-stack-event-loop-microtasks',
          order: '8.1',
          title: 'The Event Loop: Call Stack, Web APIs & Microtasks',
          subtitle: 'How single-threaded JavaScript executes non-blocking code, setTimeout vs Promise priority, and task queues in baby steps.',
          chapterId: 'async-and-event-loop',
          chapterTitle: '08. Asynchronous Execution & Promises',
          levelTitle: 'Level 8: Asynchronous JS & The Event Loop',
          goal: 'Understand the exact execution ordering between synchronous code, microtask promises, and macrotask timers.',
          prerequisites: ['Level 7 completed.'],
          concept: `### How Single-Threaded JavaScript Runs Asynchronous Code

JavaScript has **one single Call Stack** (it can only do one thing at a time). To prevent long network requests or timers from freezing the browser UI, the browser engine offloads operations to **Host Web APIs**.

\`\`\`text
1. Call Stack       -> Executes current synchronous JavaScript line.
2. Web APIs         -> Handles background timers (setTimeout), HTTP requests (fetch), and events.
3. Microtask Queue  -> High priority! Holds Promise .then() callbacks & queueMicrotask.
4. Macrotask Queue  -> Lower priority! Holds setTimeout, setInterval, UI rendering events.
5. Event Loop       -> Checks if Call Stack is empty. If empty, runs ALL Microtasks first, then 1 Macrotask.
\`\`\`

---

### The Famous Output Mystery:
\`\`\`javascript
console.log("1. Sync Start");

setTimeout(() => {
  console.log("4. Macrotask Timer");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Microtask Promise");
});

console.log("2. Sync End");
\`\`\`
**Actual Output Order**:
1. \`1. Sync Start\` (Synchronous Call Stack)
2. \`2. Sync End\` (Synchronous Call Stack)
3. \`3. Microtask Promise\` (Microtask queue runs immediately after stack empties!)
4. \`4. Macrotask Timer\` (Macrotask queue runs last!)`,
          diagram: `flowchart TD
    Stack["1. Call Stack (Synchronous Code)"] --> Empty{"Is Call Stack Empty?"}
    Empty -->|"Yes"| Micro["2. Microtask Queue (Promises .then) - ALL drained first!"]
    Micro --> Macro["3. Macrotask Queue (setTimeout, setInterval) - Runs 1 task"]
    Macro --> Render["4. Browser UI Repaint"]
    Render --> Stack
    
    style Stack fill:#cfe2ff,stroke:#084298,color:#084298
    style Micro fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Macro fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Render fill:#e2e3e5,stroke:#41464b,color:#141619`,
          steps: [
            {
              title: 'Step 1: Tracing the Event Loop in Action',
              explanation: 'Run synchronous code alongside promises and timers to see the exact execution queue order.',
              command: `console.log("A: Main script start");

setTimeout(() => {
  console.log("B: setTimeout 0ms callback (Macrotask)");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("C: Promise callback 1 (Microtask)");
  })
  .then(() => {
    console.log("D: Promise callback 2 (Microtask)");
  });

console.log("E: Main script end");

// Expected Order: A -> E -> C -> D -> B`
            }
          ],
          verification: 'Paste this snippet into your browser console and press Enter. Confirm that output matches A -> E -> C -> D -> B.',
          expectedResult: 'Deep mental model of the JavaScript runtime and async scheduling.',
          quiz: {
            question: 'Which queue has higher execution priority when the Call Stack becomes empty?',
            options: [
              'Macrotask Queue (setTimeout)',
              'Microtask Queue (Promise callbacks)',
              'DOM Event Queue',
              'Both have identical priority'
            ],
            correctIndex: 1,
            explanation: 'The event loop completely drains all pending microtasks in the Microtask Queue before picking the next task from the Macrotask Queue.'
          },
          summary: 'JavaScript is single-threaded. The Event Loop prioritizes the synchronous Call Stack, drains all Microtask promises, and then processes Macrotask timers.'
        },
        {
          id: 'promises-and-async-await-concurrency',
          slug: 'promises-and-async-await-concurrency',
          order: '8.2',
          title: 'Promises, async/await & Concurrency Combinators',
          subtitle: 'Promise states (Pending, Fulfilled, Rejected), try/catch error handling, and Promise.all vs Promise.allSettled in baby steps.',
          chapterId: 'async-and-event-loop',
          chapterTitle: '08. Asynchronous Execution & Promises',
          levelTitle: 'Level 8: Asynchronous JS & The Event Loop',
          goal: 'Master async/await, handle rejected promises cleanly with try/catch, and execute concurrent requests with Promise.all.',
          prerequisites: ['Lesson 8.1 completed.'],
          concept: `### What is a Promise?
A Promise is a **placeholder object for an asynchronous value that will become available in the future**.

A Promise exists in one of **3 States**:
1. **Pending**: Initial state (waiting for network/timer).
2. **Fulfilled**: Operation completed successfully (\`resolve(data)\`).
3. **Rejected**: Operation failed with an error (\`reject(error)\`).

---

### \`async\` / \`await\` (Syntactic Sugar for Promises)
- Adding \`async\` before a function causes it to automatically return a Promise.
- \`await\` pauses function execution until the Promise resolves or rejects, making async code read like standard synchronous code!`,
          diagram: `flowchart LR
    P["Promise Created (Pending)"] --> Success{"API Succeeds?"}
    Success -->|"Yes"| Fulfilled["Fulfilled (Resolved with data)"]
    Success -->|"No"| Rejected["Rejected (Caught by try/catch)"]
    
    style P fill:#cfe2ff,stroke:#084298,color:#084298
    style Fulfilled fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Rejected fill:#f8d7da,stroke:#dc3545,color:#842029`,
          steps: [
            {
              title: 'Step 1: Writing an Async Function with try/catch',
              explanation: 'Simulate an async API call with latency and handle potential network failures cleanly.',
              command: `// Simulated async database query
function fetchUserRecord(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: "Sarah Connor", role: "Staff Architect" });
      } else {
        reject(new Error("Invalid user ID provided!"));
      }
    }, 800);
  });
}

// Clean async/await consumption
async function displayUserProfile(id) {
  try {
    console.log("Fetching user data...");
    const user = await fetchUserRecord(id);
    console.log(\`User Loaded: \${user.name} (\${user.role})\`);
  } catch (error) {
    console.error("Error loading user profile:", error.message);
  } finally {
    console.log("Async operation completed.");
  }
}

displayUserProfile(10);`
            },
            {
              title: 'Step 2: Concurrent Parallel Requests with Promise.all()',
              explanation: 'Fetch multiple independent resources simultaneously rather than waiting for each one sequentially.',
              command: `async function loadDashboardData() {
  console.time("Parallel Fetch");

  // Fetch 3 independent endpoints at the same time in parallel!
  const [users, products, metrics] = await Promise.all([
    fetchUserRecord(1),
    fetchUserRecord(2),
    fetchUserRecord(3)
  ]);

  console.timeEnd("Parallel Fetch");
  console.log("All 3 records fetched concurrently:", users, products, metrics);
}

loadDashboardData();`
            }
          ],
          verification: 'Run both examples in the console. Notice that Promise.all executes all 3 requests concurrently in ~800ms rather than 2400ms sequentially.',
          expectedResult: 'Mastery of async/await, try/catch error boundaries, and high-performance parallel execution.',
          summary: 'async/await makes asynchronous code readable and maintainable. Use Promise.all to execute independent requests in parallel.'
        }
      ]
    }
  ]
};

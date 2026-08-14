// Level 1: Absolute Beginner & Programming Foundations (In-Depth Expanded Edition)
export const level1Foundations = {
  id: 'level-1',
  title: 'Level 1: Absolute Beginner & Programming Foundations',
  icon: 'bi-rocket-takeoff-fill',
  color: '#f59e0b',
  description: 'Master what a program is, the CPU execution cycle, memory allocation, JavaScript engines (V8, SpiderMonkey), ECMAScript evolution, and Web APIs in complete baby steps.',
  chapters: [
    {
      id: 'js-foundations',
      title: '01. Programming Mental Models & JavaScript Foundations',
      lessons: [
        {
          id: 'what-is-a-computer-program',
          slug: 'what-is-a-computer-program',
          order: '1.1',
          title: 'What is a Computer Program? (The Core Mental Model)',
          subtitle: 'The 4 fundamental pillars: Input, Processing, Memory (RAM), and Output in gentle baby steps.',
          chapterId: 'js-foundations',
          chapterTitle: '01. Programming Mental Models & JavaScript Foundations',
          levelTitle: 'Level 1: Absolute Beginner & Programming Foundations',
          goal: 'Build an unbreakable mental model of how computers execute instructions sequentially to process real-world data.',
          prerequisites: ['Zero prior programming experience required.'],
          concept: `### What is a Computer Program?

A computer is not inherently smart. It is simply a lightning-fast calculation machine that executes human instructions literally, step-by-step from top to bottom.

Think of a computer program like a **precision recipe in a commercial bakery**:
1. **Ingredients (Input)**: Customer orders, flour weight in grams, oven temperature setting.
2. **Memory (Storage / RAM)**: The prep table holding measured bowls of sugar and yeast.
3. **Processing (CPU Execution)**: Mixing the dough for 5 minutes, checking if temperature reaches 180°C, adding toppings.
4. **Finished Dish (Output)**: The baked cake boxed and handed to the customer.

---

### The 4 Pillars of Every Software Application:
- **1. Input**: Data entering your system (e.g. mouse clicks, text typed in an input box, geolocation coordinates, camera streams, or REST API payloads).
- **2. Memory (Variables)**: Temporary storage locations in computer RAM allocated to hold numbers, strings, and data structures while the application is running.
- **3. Processing (CPU & Logic)**: Arithmetic calculations, boolean decision checks (\`if / else\`), loops (\`for / while\`), and state mutations.
- **4. Output**: Delivering the result to humans or other systems (e.g. updating DOM HTML on screen, printing to the console, saving to a database, or sending an HTTP webhook).`,
          diagram: `flowchart LR
    Input["1. Input Sources\n(Keyboard, Mouse, API)"] --> RAM["2. Memory / RAM\n(Variables & Data Stores)"]
    RAM --> CPU["3. CPU Processing Engine\n(JavaScript Runtime Engine)"]
    CPU --> Output["4. Output Destinations\n(DOM Webpage, Terminal Console, Database)"]
    
    style Input fill:#cfe2ff,stroke:#084298,color:#084298
    style RAM fill:#fff3cd,stroke:#ffc107,color:#664d03
    style CPU fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Output fill:#e2e3e5,stroke:#41464b,color:#141619`,
          steps: [
            {
              title: 'Step 1: Your Very First JavaScript Instruction',
              explanation: 'In JavaScript, `console.log()` sends text or computation results directly to the browser developer console.',
              command: `// 1. Sending a string greeting to developer output
console.log("Hello! Welcome to the JavaScript Master Course.");

// 2. Outputting numbers and mathematical evaluations
console.log(100 + 250); // Output: 350`
            },
            {
              title: 'Step 2: Simulating Input, Memory Storage, Processing & Output',
              explanation: 'Let us build a complete 4-pillar program in 4 clean baby steps.',
              command: `// Pillar 1: Input (Simulated user purchase data)
const itemPrice = 49.99;
const quantity = 3;
const taxRate = 0.08; // 8% sales tax

// Pillar 2 & 3: Memory Storage & Processing (Mathematical Calculation)
const subtotal = itemPrice * quantity;
const taxAmount = subtotal * taxRate;
const grandTotal = subtotal + taxAmount;

// Pillar 4: Output (Displaying formatted invoice to the user)
console.log("Subtotal: $" + subtotal.toFixed(2));
console.log("Tax (8%): $" + taxAmount.toFixed(2));
console.log("Grand Total: $" + grandTotal.toFixed(2));`
            }
          ],
          verification: 'Open your browser Developer Tools (Press F12 or right-click anywhere -> Inspect -> Console tab), paste the snippet, and press Enter to see the invoice output.',
          expectedResult: 'The console displays the calculated Subtotal ($149.97), Tax ($12.00), and Grand Total ($161.97).',
          commonMistakes: [
            {
              problem: 'Assuming computers understand human intention automatically.',
              why: 'Computers do not guess. If you forget a semicolon or misspell a command (e.g. `consol.log`), the execution stops immediately.',
              fix: 'Pay close attention to syntax, capitalization (JavaScript is case-sensitive), and exact variable names.'
            }
          ],
          exercise: {
            title: 'Build a Tip Calculator Program',
            description: 'Write a JavaScript program with 3 variables: `billAmount` (e.g. 80), `tipPercentage` (e.g. 0.15 for 15%), and compute `totalToPay`. Output the final amount.',
            hint: 'Multiply billAmount by tipPercentage to find the tip, then add it to billAmount.',
            solution: `const billAmount = 80;
const tipPercentage = 0.15;
const tip = billAmount * tipPercentage;
const totalToPay = billAmount + tip;

console.log("Tip: $" + tip);
console.log("Total To Pay: $" + totalToPay); // Output: $92`
          },
          quiz: {
            question: 'In the 4-pillar mental model of programming, what role do variables play?',
            options: [
              'They connect the computer to the Wi-Fi network.',
              'They allocate named storage spaces in RAM memory to hold data during execution.',
              'They convert HTML into CSS stylesheets.',
              'They compile JavaScript into C++ binary code.'
            ],
            correctIndex: 1,
            explanation: 'Variables act as labeled storage containers in computer RAM to store and retrieve data values throughout program execution.'
          },
          summary: 'A computer program is a precise, sequential set of instructions that takes Input, stores it in Memory, processes it with CPU logic, and delivers Output.'
        },
        {
          id: 'how-javascript-runs-engines-and-web-apis',
          slug: 'how-javascript-runs-engines-and-web-apis',
          order: '1.2',
          title: 'How JavaScript Runs: Engines (V8), ECMAScript & Web APIs',
          subtitle: 'The architecture of JavaScript engines (V8 / SpiderMonkey), JIT compilation, ECMAScript standards, and host Web APIs in baby steps.',
          chapterId: 'js-foundations',
          chapterTitle: '01. Programming Mental Models & JavaScript Foundations',
          levelTitle: 'Level 1: Absolute Beginner & Programming Foundations',
          goal: 'Understand the internal architecture of JavaScript runtimes, Just-In-Time (JIT) compilation, and how the core language interfaces with host browser Web APIs.',
          prerequisites: ['Lesson 1.1 completed.'],
          concept: `### The Internal Architecture of JavaScript Runtimes

JavaScript was created in 1995 by **Brendan Eich** at Netscape in just 10 days. Today, it is the most widely deployed programming language on Earth, running on billions of browsers, mobile devices, IoT hardware, and backend servers (Node.js/Deno/Bun).

To truly master JavaScript, you must understand the **3 Core Components of the Runtime Environment**:

---

### 1. ECMAScript (The Core Standardized Language):
- Governed by the **TC39 International Standards Committee**.
- Defines the syntax rules, data types, keywords (\`let\`, \`const\`, \`class\`), control flow, functions, prototypes, and built-in objects (\`Array\`, \`Object\`, \`Promise\`, \`Math\`, \`JSON\`).
- This core language is identical whether running inside Google Chrome, Apple Safari, Node.js on a Linux server, or a smart refrigerator.

---

### 2. The JavaScript Engine (V8, SpiderMonkey, JavaScriptCore):
- **Google V8**: Powers Google Chrome, Microsoft Edge, Brave, and Node.js/Deno.
- **Mozilla SpiderMonkey**: Powers Firefox.
- **Apple JavaScriptCore (Nitro)**: Powers Apple Safari and iOS WebViews.
- **How it Works (JIT Compilation)**: Modern engines do not merely interpret code line-by-line. They parse source code into an **Abstract Syntax Tree (AST)**, compile it into bytecode, and use an optimizing **Just-In-Time (JIT) Compiler** (like V8's TurboFan) to compile hot functions into native machine CPU instructions at runtime!

---

### 3. Host Web APIs (The Browser Environment):
- Web APIs are **NOT part of the JavaScript language itself**. They are C++ browser host APIs exposed to JavaScript via the global object (\`window\`).
- Examples include:
  * **DOM API**: \`document.querySelector\`, \`element.addEventListener\`
  * **Network API**: \`fetch()\`, \`XMLHttpRequest\`, WebSockets
  * **Timers API**: \`setTimeout()\`, \`setInterval()\`
  * **Storage API**: \`localStorage\`, \`sessionStorage\`, \`indexedDB\``,
          diagram: `flowchart TD
    Host["Web Browser Host Environment (Chrome / Safari / Firefox)"]
    Host --> V8["JavaScript Engine (Google V8 / SpiderMonkey)\n- Parser & AST Generation\n- Bytecode Interpreter (Ignition)\n- JIT Compiler (TurboFan)\n- Call Stack & Memory Heap"]
    Host --> WebAPIs["Browser Host Web APIs (C++ Implementations)\n- DOM Tree (document)\n- Fetch API (HTTP Network Requests)\n- Timers (setTimeout / setInterval)\n- Storage (localStorage / IndexedDB)"]
    Host --> Queue["Event Loop & Task Queues\n- Microtask Queue (Promises)\n- Macrotask Queue (Timers, I/O)"]
    
    style Host fill:#cfe2ff,stroke:#084298,color:#084298
    style V8 fill:#fff3cd,stroke:#ffc107,color:#664d03
    style WebAPIs fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Queue fill:#e2e3e5,stroke:#41464b,color:#141619`,
          steps: [
            {
              title: 'Step 1: Identifying Core ECMAScript Features',
              explanation: 'These features belong strictly to the JavaScript language specification and run everywhere.',
              command: `// 1. Math and Array algorithms (ECMAScript Core):
const scores = [88, 92, 79, 95, 100];
const maxScore = Math.max(...scores);
const avgScore = scores.reduce((sum, s) => sum + s, 0) / scores.length;

console.log("Highest Score:", maxScore); // 100
console.log("Average Score:", avgScore); // 90.8`
            },
            {
              title: 'Step 2: Calling Browser Web APIs from JavaScript',
              explanation: 'Interacting with the browser window, storage, and timers.',
              command: `// 1. Browser Storage API (Not JS core - provided by browser window)
window.localStorage.setItem("user_theme", "dark");
console.log("Saved Theme:", window.localStorage.getItem("user_theme"));

// 2. Browser Timers API (Asynchronous timer managed by browser host)
window.setTimeout(() => {
  console.log("This message was delayed by 1000ms using the Browser Timers Web API!");
}, 1000);`
            }
          ],
          verification: 'Run both steps in your browser console and observe how the immediate array calculations execute instantly while the timer fires after 1 second.',
          expectedResult: 'Deep understanding of how the JS Engine and Browser Web APIs work in harmony.',
          commonMistakes: [
            {
              problem: 'Trying to use `window` or `document` inside Node.js backend scripts.',
              why: 'Node.js does not have a browser window or DOM. It is a server environment with different host APIs (like `fs` for file systems).',
              fix: 'Keep DOM and browser-specific Web APIs confined to frontend code that runs in web browsers.'
            }
          ],
          quiz: {
            question: 'Is the `fetch()` network API or `document.querySelector` part of the core ECMAScript language specification?',
            options: [
              'Yes, they are core features defined by TC39 in ECMAScript.',
              'No, they are Host Web APIs provided by the browser environment and exposed to JavaScript.',
              'Only in Google Chrome.',
              'Only when using React or Node.js.'
            ],
            correctIndex: 1,
            explanation: 'ECMAScript defines the core language syntax and built-in objects (Arrays, Functions, Math), while host environments like web browsers provide Web APIs (DOM, Fetch, Storage).'
          },
          summary: 'JavaScript consists of the core standardized ECMAScript language executed by engines (like V8) and enhanced by host Web APIs (DOM, Fetch, Storage) provided by the browser environment.'
        }
      ]
    }
  ]
};

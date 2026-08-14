// Level 1: Foundations & JS Prerequisites (In-Depth Expanded Edition)
export const level1Foundations = {
  id: 'level-1',
  title: 'Level 1: Foundations & JS Prerequisites',
  icon: 'bi-filetype-js',
  color: '#f7df1e',
  description: 'Understand how the browser DOM works, declarative vs imperative UI programming, and master the modern JavaScript prerequisites essential for React (let/const, arrow functions, destructuring, map/filter, rest/spread, async/await, and ES modules) in baby steps.',
  chapters: [
    {
      id: 'web-foundations',
      title: '01. How the Web & UI Rendering Works',
      lessons: [
        {
          id: 'how-the-web-works',
          slug: 'how-the-web-works',
          order: '1.1',
          title: 'How the Web Works: Declarative vs. Imperative UI',
          subtitle: 'The fundamental paradigm shift from manual DOM manipulation (vanilla JS) to declarative UI state (React) in baby steps.',
          chapterId: 'web-foundations',
          chapterTitle: '01. How the Web & UI Rendering Works',
          levelTitle: 'Level 1: Foundations & JS Prerequisites',
          goal: 'Understand what the DOM is, why manual DOM manipulation creates scalability bugs, and how declarative UI solves it.',
          prerequisites: ['Basic understanding of opening web pages in a browser.'],
          concept: `### What is the DOM (Document Object Model)?
When a browser loads an HTML document, it parses the markup tags into a hierarchical tree of JavaScript objects called the **DOM**. In traditional vanilla JavaScript, whenever you want to change what the user sees, you write **imperative step-by-step instructions** telling the browser exactly how to find, create, mutate, and delete elements.

---

### Imperative vs. Declarative Programming:
- **Imperative (Vanilla JS / jQuery - "HOW")**:
  You micromanage every single step in the browser:
  *"Find element with ID #count, read its innerText, parse it as an integer, add 1, convert back to string, update innerText, and toggle class 'active'."*
  As applications grow to dozens of components, state gets scattered across hundreds of DOM nodes, causing desynchronization and phantom bugs.

- **Declarative (React Paradigm - "WHAT")**:
  You simply describe what the UI should look like for a given state:
  $$\\text{UI} = f(\\text{State})$$
  *"Given a count of 5, render a button displaying '5' with an active badge."*
  When the count becomes 6, you simply update the state variable, and React's engine automatically calculates the fastest way to update the browser DOM!

---

### The Restaurant Analogy:
- **Imperative**: You walk into the kitchen, turn on the stove, find the flour, crack an egg, whisk the batter, flip the pancake, and place it on the plate yourself.
- **Declarative**: You tell the waiter: *"I would like blueberry pancakes."* The kitchen processes your request and serves the completed dish.`,
          diagram: `flowchart TD
    subgraph Imperative ["Imperative Paradigm (Vanilla JS / jQuery)"]
        I1["Event: User clicks button"] --> I2["1. document.getElementById('total')"]
        I2 --> I3["2. element.innerText = newTotal"]
        I3 --> I4["3. element.classList.add('highlight')"]
        I4 --> I5["⚠️ High risk of desynchronized DOM state!"]
    end

    subgraph Declarative ["Declarative Paradigm (React UI = f(state))"]
        D1["Event: State changes (count = count + 1)"] --> D2["1. React re-renders Component UI function"]
        D2 --> D3["2. React computes minimal DOM diff (Virtual DOM)"]
        D3 --> D4["3. Browser DOM updated automatically & safely!"]
    end
    
    style Imperative fill:#f8d7da,stroke:#dc3545,color:#842029
    style Declarative fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Comparing Vanilla JS (Imperative) vs React (Declarative)',
              explanation: 'Observe how in vanilla JS you manage DOM node lookups, whereas in React you only manage the state variable.',
              command: `// 1. Vanilla JavaScript (Imperative - Manual DOM mutation):
const btn = document.getElementById("like-btn");
btn.addEventListener("click", () => {
  const countEl = document.getElementById("like-count");
  let current = parseInt(countEl.textContent);
  countEl.textContent = current + 1; // Manual DOM mutation!
});

// 2. React (Declarative - UI is a pure reflection of State):
function LikeButton() {
  const [likes, setLikes] = useState(0);
  return (
    <button onClick={() => setLikes(likes + 1)} className="btn btn-primary">
      Likes: {likes}
    </button>
  );
}`
            }
          ],
          verification: 'You can clearly explain why declarative UI prevents state desynchronization in modern single-page applications.',
          expectedResult: 'Deep understanding of UI = f(state).',
          commonMistakes: [
            {
              problem: 'Trying to use `document.getElementById` or `document.querySelector` inside a React component.',
              why: 'Directly mutating the real DOM bypasses React\'s state engine and leads to hard-to-track rendering glitches.',
              fix: 'Never query or mutate the DOM directly in React. Use React state (`useState`) and props to control the UI.'
            }
          ],
          quiz: {
            question: 'What is the core philosophy of Declarative UI in React?',
            options: [
              'Writing manual instructions to find and mutate HTML DOM elements line by line.',
              'Declaring what the UI should look like based on current state, leaving DOM updates to React.',
              'Writing entire applications in C++ binary.',
              'Only using HTML without JavaScript.'
            ],
            correctIndex: 1,
            explanation: 'Declarative UI means developers focus on describing what the interface looks like for each state, rather than manually scripting DOM transitions.'
          },
          summary: 'Vanilla JS is imperative (step-by-step DOM manipulation). React is declarative (UI is a direct projection of State: UI = f(state)).'
        },
        {
          id: 'modern-javascript-prerequisites',
          slug: 'modern-javascript-prerequisites',
          order: '1.2',
          title: 'Modern JavaScript: let/const, Arrow Functions & Template Literals',
          subtitle: 'The foundational ES6+ JavaScript syntax every React developer uses every single minute.',
          chapterId: 'web-foundations',
          chapterTitle: '01. How the Web & UI Rendering Works',
          levelTitle: 'Level 1: Foundations & JS Prerequisites',
          goal: 'Master let vs const, arrow functions (implicit vs explicit return), and template literal string interpolation.',
          prerequisites: ['Lesson 1.1 completed.'],
          concept: `### 1. \`const\` vs \`let\` (Never use legacy \`var\`!)
- **\`const\`**: Block-scoped. Use by default for all variables that will never be reassigned. (Note: for objects and arrays, \`const\` allows mutating internal properties, but forbids reassigning the variable identifier).
- **\`let\`**: Block-scoped. Use only when you know a variable will be reassigned (e.g. inside loops).
- **\`var\`**: Function-scoped, hoisted, and bug-prone. Obsolete in modern React.

---

### 2. Arrow Functions (\`() => {}\`):
Arrow functions provide clean, concise syntax and do not bind their own \`this\` keyword:
\`\`\`javascript
// Explicit return with curly braces
const add = (a, b) => {
  return a + b;
};

// Concise Implicit return (no curly braces, no 'return' keyword needed!)
const multiply = (a, b) => a * b;

// Returning an Object implicitly (must wrap in parentheses!)
const createUser = (name) => ({ name: name, role: 'developer' });
\`\`\``,
          diagram: `flowchart LR
    Arr["Arrow Function: (a, b) => a + b"] --> Ret["Implicit Return of Value (No return keyword needed)"]
    ArrObj["Arrow Function: (name) => ({ name })"] --> Obj["Parentheses wrap object literal to prevent parser confusion"]
    
    style Arr fill:#cfe2ff,stroke:#084298,color:#084298
    style Ret fill:#d1e7dd,stroke:#198754,color:#0f5132
    style ArrObj fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Obj fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Practicing Arrow Functions and Template Literals',
              explanation: 'Review how arrow functions and backtick template literals (`${value}`) work together in React event handlers and component definitions.',
              command: `const greeting = (user) => \`Hello \${user.name}, you have \${user.notifications} unread alerts.\`;

const user = { name: "Alex", notifications: 3 };
console.log(greeting(user)); // "Hello Alex, you have 3 unread alerts."`
            }
          ],
          verification: 'You know when to use parentheses `({ ... })` to return an object literal implicitly from an arrow function.',
          expectedResult: 'Clean, modern ES6 syntax without legacy `var` declarations.',
          quiz: {
            question: 'How do you implicitly return an object literal from a single-line arrow function?',
            options: [
              'const fn = () => { id: 1 };',
              'const fn = () => ({ id: 1 });',
              'const fn = () => return { id: 1 };',
              'const fn = () => [ id: 1 ];'
            ],
            correctIndex: 1,
            explanation: 'Wrapping the object literal in parentheses `({ ... })` informs the JavaScript parser that the curly braces represent an object, not a function body block.'
          },
          summary: 'Use const by default, let when reassigning, and concise arrow functions () => value with template literals ${} for dynamic strings.'
        },
        {
          id: 'array-methods-destructuring',
          slug: 'array-methods-destructuring',
          order: '1.3',
          title: 'Array Methods & Destructuring: The Backbone of React',
          subtitle: 'Master .map(), .filter(), .reduce(), object/array destructuring, and the rest/spread operator (...) in baby steps.',
          chapterId: 'web-foundations',
          chapterTitle: '01. How the Web & UI Rendering Works',
          levelTitle: 'Level 1: Foundations & JS Prerequisites',
          goal: 'Master .map() for rendering lists, .filter() for search/delete, object destructuring for props, and the spread operator for immutable state updates.',
          prerequisites: ['Lesson 1.2 completed.'],
          concept: `### 1. \`.map()\` and \`.filter()\` (Non-Mutating Array Methods)
React components must never mutate original state data. We use pure, non-mutating array methods:
- **\`.map()\`**: Transforms every item in an array into something new (e.g. transforming an array of strings into an array of JSX elements!).
- **\`.filter()\`**: Returns a new array containing only items that satisfy a boolean condition (used for searching, filtering categories, or deleting items by ID).

---

### 2. Destructuring Assignment:
Extract values from objects or arrays cleanly in a single line:
\`\`\`javascript
const user = { name: 'Sarah', role: 'Architect', email: 'sarah@vinnertech.com' };
const { name, role } = user;

// Array Destructuring (Used by useState!)
const [count, setCount] = useState(0);
\`\`\`

---

### 3. Spread Operator (\`...\`):
Creates shallow copies of objects and arrays for immutable state updates:
\`\`\`javascript
const originalList = ['React', 'Node'];
const updatedList = [...originalList, 'TypeScript']; // ['React', 'Node', 'TypeScript']
\`\`\``,
          diagram: `flowchart LR
    A["Raw Array: [10, 20, 30]"] -- ".map(x => x * 2)" --> B["New Array: [20, 40, 60]"]
    A -- ".filter(x => x > 15)" --> C["New Array: [20, 30]"]
    
    style A fill:#cfe2ff,stroke:#084298,color:#084298
    style B fill:#d1e7dd,stroke:#198754,color:#0f5132
    style C fill:#fff3cd,stroke:#ffc107,color:#664d03`,
          steps: [
            {
              title: 'Step 1: Transforming Data with .map() and .filter()',
              explanation: 'Chain filtering and mapping to generate output data.',
              command: `const products = [
  { id: 1, name: 'Mechanical Keyboard', price: 120, inStock: true },
  { id: 2, name: 'Mouse', price: 30, inStock: false },
  { id: 3, name: 'Monitor', price: 350, inStock: true }
];

const inStockSummaries = products
  .filter(p => p.inStock)
  .map(p => \`\${p.name}: $\${p.price}\`);

console.log(inStockSummaries); // ["Mechanical Keyboard: $120", "Monitor: $350"]`
            }
          ],
          verification: 'You can explain why mutating arrays directly with push/splice causes bugs in React state.',
          expectedResult: 'Proficiency in pure array transformations and destructuring.',
          summary: 'Use .map() for rendering lists, .filter() for item deletion/filtering, destructuring for clean props, and spread (...) for immutable state.'
        }
      ]
    }
  ]
};

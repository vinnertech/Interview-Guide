// Level 3: Props, State & Events (In-Depth Complete Curriculum)
export const level3PropsState = {
  id: 'level-3',
  title: 'Level 3: Props, State & Events',
  icon: 'bi-sliders',
  color: '#ffc107',
  description: 'Master data flow in React: passing props, default values, children prop, local component state with useState, immutable array/object updates, synthetic event handling, and conditional rendering in baby steps.',
  chapters: [
    {
      id: 'props-and-state',
      title: '03. Props & State Architecture',
      lessons: [
        {
          id: 'mastering-props',
          slug: 'mastering-props',
          order: '3.1',
          title: 'Mastering Props: Unidirectional Data Flow & Composition',
          subtitle: 'How components receive arguments, children prop composition, default values, and prop immutability in baby steps.',
          chapterId: 'props-and-state',
          chapterTitle: '03. Props & State Architecture',
          levelTitle: 'Level 3: Props, State & Events',
          goal: 'Master passing props from parent to child components, destructuring with defaults, and utilizing the children prop for flexible composition.',
          prerequisites: ['Level 2 completed.'],
          concept: `### What are Props (Properties)?
Props are the inputs to a React component. Just as functions accept arguments, React components accept props to dynamically customize what they render.

---

### The 3 Core Rules of Props:
1. **Unidirectional (Top-Down Data Flow)**: Props strictly flow **DOWN** from parent to child. A child cannot directly mutate or send props back up without invoking a parent callback function.
2. **Props are Read-Only (Immutable)**: A component must **NEVER modify its own props**! Components must remain *pure functions* with respect to their props.
3. **The Special \`children\` Prop**: Content nested between opening and closing tags (e.g. \`<Card><p>Content</p></Card>\`) is passed automatically as a prop named \`children\`.`,
          diagram: `flowchart TD
    Parent["Parent Component (<App />)"] -- "Passes props: { name: 'Sarah', role: 'Architect' }" --> Child["Child Component (<UserCard />)"]
    Child -. "Cannot mutate props! (Read-Only)" .-> X["❌ props.name = 'Alex' (FORBIDDEN!)"]
    
    style Parent fill:#cfe2ff,stroke:#084298,color:#084298
    style Child fill:#d1e7dd,stroke:#198754,color:#0f5132
    style X fill:#f8d7da,stroke:#dc3545,color:#842029`,
          steps: [
            {
              title: 'Step 1: Passing and Destructuring Props with Defaults',
              explanation: 'Destructure props directly in the parameter list with default values.',
              command: `function AlertCard({ title = "System Alert", message, type = "info", children }) {
  const alertClasses = {
    info: "alert-info text-info",
    success: "alert-success text-success",
    danger: "alert-danger text-danger"
  };

  return (
    <div className={\`alert \${alertClasses[type]} p-3 rounded shadow-sm\`}>
      <h6 className="fw-bold mb-1">{title}</h6>
      {message && <p className="mb-0 small">{message}</p>}
      {/* The special children prop renders nested custom elements */}
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
}`
            }
          ],
          verification: 'Compose `<AlertCard type="success" title="Saved!">Profile live.</AlertCard>` and render nested children.',
          expectedResult: 'Clean, reusable component instances configured purely via props.',
          commonMistakes: [
            {
              problem: 'Trying to reassign a prop inside a child component (e.g. `props.count = 10`).',
              why: 'Props are strictly read-only and frozen. Mutating props directly throws errors in StrictMode.',
              fix: 'If a value needs to change over time, store it in component State (`useState`) instead of props.'
            }
          ],
          quiz: {
            question: 'How do props flow in React application architecture?',
            options: [
              'Bidirectionally between any random components.',
              'Unidirectionally (Top-Down) from Parent to Child.',
              'Bottom-Up from Child to Parent.',
              'Only through global window variables.'
            ],
            correctIndex: 1,
            explanation: 'React follows a strict unidirectional top-down data flow where props pass from parent to child.'
          },
          summary: 'Props pass data top-down from parent to child. Props are read-only. Use children prop for flexible composition.'
        },
        {
          id: 'understanding-component-state',
          slug: 'understanding-component-state',
          order: '3.2',
          title: 'Understanding Component State & useState',
          subtitle: 'Why normal local variables fail to update the UI, the useState hook, and the snapshot rendering model in baby steps.',
          chapterId: 'props-and-state',
          chapterTitle: '03. Props & State Architecture',
          levelTitle: 'Level 3: Props, State & Events',
          goal: 'Understand why regular JavaScript variables do not trigger re-renders and master the useState hook.',
          prerequisites: ['Lesson 3.1 completed.'],
          concept: `### Why do regular variables fail in UI development?
Local variables vanish when functions exit, and reassigning a local variable \`count = count + 1\` **does not trigger React to re-render the screen**.

---

### The Solution: \`useState\` Hook
The **\`useState\`** hook does two essential things:
1. **Persists data** in React's internal fiber memory across renders.
2. **Triggers React to re-render** the component with the updated value!

---

### The State Snapshot Model & Functional Updaters:
React state behaves like a **snapshot** for each render. Setting state schedules a re-render; it does not mutate the variable in the current line of code immediately.
When updating state based on its previous value, always use the **functional updater**:
\`\`\`javascript
setCount(prevCount => prevCount + 1);
\`\`\``,
          diagram: `flowchart LR
    A["User clicks +1"] --> B["setCount(count + 1) called"]
    B --> C["React schedules re-render"]
    C --> D["Counter() executes with fresh state"]
    D --> E["Virtual DOM diffed & screen displays new number!"]
    
    style A fill:#fff3cd,stroke:#ffc107,color:#664d03
    style B fill:#cfe2ff,stroke:#084298,color:#084298
    style C fill:#d1e7dd,stroke:#198754,color:#0f5132
    style E fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Implementing an Interactive Counter with useState',
              explanation: 'Declare a reactive state pair and attach click handlers.',
              command: `import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-3 border rounded text-center">
      <h3 className="fw-bold mb-3">Count: {count}</h3>
      <div className="d-flex justify-content-center gap-2">
        <button className="btn btn-danger" onClick={() => setCount(prev => prev - 1)}>-</button>
        <button className="btn btn-secondary" onClick={() => setCount(0)}>Reset</button>
        <button className="btn btn-success" onClick={() => setCount(prev => prev + 1)}>+</button>
      </div>
    </div>
  );
}`
            }
          ],
          verification: 'Click the increment button and observe the UI updating instantly.',
          expectedResult: 'An interactive counter with persistent reactive state.',
          quiz: {
            question: 'What does the `useState` hook return?',
            options: [
              'A single number or string.',
              'A tuple array containing the current state value and a state updater function.',
              'A Promise object.',
              'An HTML element.'
            ],
            correctIndex: 1,
            explanation: 'useState returns a 2-item array: [currentStateValue, stateSetterFunction].'
          },
          summary: 'Regular variables do not trigger renders. useState stores persistent component memory and notifies React to re-render the screen.'
        },
        {
          id: 'state-immutability-objects-arrays',
          slug: 'state-immutability-objects-arrays',
          order: '3.3',
          title: 'State Immutability: Updating Objects & Arrays',
          subtitle: 'The number one source of beginner bugs: mutating state directly vs creating new copies with spread syntax ({...} and [...]).',
          chapterId: 'props-and-state',
          chapterTitle: '03. Props & State Architecture',
          levelTitle: 'Level 3: Props, State & Events',
          goal: 'Master updating complex state objects and arrays immutably using the spread operator and non-mutating methods.',
          prerequisites: ['Lesson 3.2 completed.'],
          concept: `### The Golden Rule of React State: Never Mutate State Directly!

When updating state in React, you must **NEVER mutate the existing object or array directly**:

\`\`\`javascript
// ❌ FATAL BUG (Direct Mutation):
// React checks if (newState !== oldState). Since the memory reference is identical, React skips re-rendering!
user.name = "Alex";
setUser(user); // Nothing happens on screen!

// ✅ CORRECT (Immutable Copy with Spread ...):
// A brand new object reference is created in RAM, triggering a clean re-render!
setUser({ ...user, name: "Alex" });
\`\`\`

---

### Array State Immutability Cheat Sheet:
| Action | ❌ Mutating (Avoid!) | ✅ Non-Mutating (Use!) |
| :--- | :--- | :--- |
| **Add Item** | \`arr.push(item)\` | \`[...arr, item]\` |
| **Remove Item** | \`arr.splice(index, 1)\` | \`arr.filter(item => item.id !== targetId)\` |
| **Update Item** | \`arr[index].name = 'New'\` | \`arr.map(item => item.id === targetId ? { ...item, name: 'New' } : item)\` |`,
          diagram: `flowchart TD
    State["Old State Array: [1, 2, 3] (RAM Address 0x01)"] --> Mutate["❌ items.push(4) -> Address remains 0x01 (React skips render!)"]
    State --> Copy["✅ setItems([...items, 4]) -> Creates new array at Address 0x02"]
    Copy --> Render["React detects new reference (0x02 !== 0x01) & re-renders UI!"]
    
    style State fill:#cfe2ff,stroke:#084298,color:#084298
    style Mutate fill:#f8d7da,stroke:#dc3545,color:#842029
    style Copy fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Render fill:#10b981,color:#fff`,
          steps: [
            {
              title: 'Step 1: Immutable Array Operations (Add, Remove, Toggle)',
              explanation: 'Build an interactive Todo list state manager with pure immutability.',
              command: `import React, { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React Fundamentals", completed: true },
    { id: 2, text: "Master State Immutability", completed: false }
  ]);
  const [inputText, setInputText] = useState('');

  // 1. ADD ITEM (Spread operator [...todos, newItem])
  const addTodo = () => {
    if (!inputText.trim()) return;
    const newTodo = { id: Date.now(), text: inputText, completed: false };
    setTodos(prev => [...prev, newTodo]);
    setInputText('');
  };

  // 2. TOGGLE COMPLETED (.map() returning new objects)
  const toggleTodo = (id) => {
    setTodos(prev => prev.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  // 3. DELETE ITEM (.filter() creating a clean subset)
  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="p-3 border rounded">
      <div className="input-group mb-3">
        <input 
          className="form-control" 
          value={inputText} 
          onChange={(e) => setInputText(e.target.value)} 
          placeholder="New task..." 
        />
        <button className="btn btn-primary" onClick={addTodo}>Add</button>
      </div>

      <ul className="list-group">
        {todos.map(todo => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span 
              onClick={() => toggleTodo(todo.id)} 
              style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            >
              {todo.text}
            </span>
            <button className="btn btn-sm btn-outline-danger" onClick={() => deleteTodo(todo.id)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`
            }
          ],
          verification: 'Add, toggle, and delete items from the list and observe the UI updating instantly with zero state mutation bugs.',
          expectedResult: 'Complete mastery of immutable state patterns in React.',
          commonMistakes: [
            {
              problem: 'Using `todos.push(newTodo)` followed by `setTodos(todos)`.',
              why: 'Push modifies the existing array in place. React compares references by shallow equality (`oldTodos === newTodos`), sees they are the exact same reference, and refuses to re-render.',
              fix: 'Always create a fresh array copy using `setTodos([...todos, newTodo])`.'
            }
          ],
          quiz: {
            question: 'Why does React require creating a new object or array copy when updating state?',
            options: [
              'Because JavaScript does not allow arrays to be modified.',
              'Because React uses shallow reference equality (oldState !== newState) to detect changes and trigger efficient re-renders.',
              'To save hard drive storage.',
              'Because arrays cannot hold objects.'
            ],
            correctIndex: 1,
            explanation: 'React compares state references by identity (`oldState === newState`). Direct mutations do not change the memory pointer, causing React to miss the update.'
          },
          summary: 'Never mutate state directly. Use spread ({...} and [...]), .filter() for deletions, and .map() for updates to produce fresh object references.'
        }
      ]
    }
  ]
};

// Level 13: 6 Progressive Real-World Guided Projects
export const level13GuidedProjects = {
  id: 'level-13',
  title: 'Level 13: Real-World Guided Projects',
  icon: 'bi-kanban-fill',
  color: '#f97316',
  description: 'Build 6 progressive real-world projects in pure Vanilla JavaScript: Interactive Calculator, Todo App, Timed Quiz, Weather Dashboard, Expense Tracker, and Product Catalog in baby steps.',
  chapters: [
    {
      id: 'guided-vanilla-projects',
      title: '13. 6 Progressive Vanilla JS Projects',
      lessons: [
        {
          id: 'project-1-interactive-calculator',
          slug: 'project-1-interactive-calculator',
          order: '13.1',
          title: 'Project 1: Interactive Vanilla JavaScript Calculator',
          subtitle: 'Build a fully responsive mathematical calculator using DOM event delegation, operator state tracking, and error handling in 4 baby steps.',
          chapterId: 'guided-vanilla-projects',
          chapterTitle: '13. 6 Progressive Vanilla JS Projects',
          levelTitle: 'Level 13: Real-World Guided Projects',
          goal: 'Build an interactive calculator handling addition, subtraction, multiplication, division, decimals, clear, and divide-by-zero checks.',
          prerequisites: ['Level 1 through Level 7 completed.'],
          concept: `### Project Architecture & State Management

The calculator maintains **3 Core State Variables**:
1. \`previousValue\`: Stored first operand.
2. \`currentValue\`: Display string being currently typed.
3. \`operation\`: The active mathematical operator (\`+\`, \`-\`, \`*\`, \`/\`).`,
          diagram: `flowchart LR
    Key["User clicks '7'"] --> Event["Calculator Keypad Event Listener"]
    Event --> Update["Updates currentValue = '7'"]
    Update --> Op["User clicks '+' -> Stores previousValue='7', operation='+'"]
    Op --> Key2["User clicks '3' -> currentValue='3'"]
    Key2 --> Equals["User clicks '=' -> Computes 7 + 3 = 10"]
    Equals --> Display["Updates Screen to '10'"]
    
    style Key fill:#cfe2ff,stroke:#084298,color:#084298
    style Event fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Equals fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Display fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: HTML Structure for Calculator Keypad',
              explanation: 'Create the semantic layout with display screen and grid of buttons.',
              command: `<!-- calculator.html -->
<div class="calculator-card p-4 rounded-4 shadow-lg mx-auto" style="max-width: 320px; background: #1e293b; color: white;">
  <div id="calc-display" class="p-3 mb-3 text-end rounded-3 fw-bold fs-2" style="background: #0f172a; min-height: 60px;">0</div>
  
  <div id="keypad" class="d-grid gap-2" style="grid-template-columns: repeat(4, 1fr);">
    <button class="btn btn-secondary" data-action="clear">AC</button>
    <button class="btn btn-secondary" data-action="delete">DEL</button>
    <button class="btn btn-warning" data-operator="/">÷</button>
    <button class="btn btn-warning" data-operator="*">×</button>

    <button class="btn btn-dark" data-number="7">7</button>
    <button class="btn btn-dark" data-number="8">8</button>
    <button class="btn btn-dark" data-number="9">9</button>
    <button class="btn btn-warning" data-operator="-">-</button>

    <button class="btn btn-dark" data-number="4">4</button>
    <button class="btn btn-dark" data-number="5">5</button>
    <button class="btn btn-dark" data-number="6">6</button>
    <button class="btn btn-warning" data-operator="+">+</button>

    <button class="btn btn-dark" data-number="1">1</button>
    <button class="btn btn-dark" data-number="2">2</button>
    <button class="btn btn-dark" data-number="3">3</button>
    <button class="btn btn-primary" data-action="equals" style="grid-row: span 2; height: 100%;">=</button>

    <button class="btn btn-dark" data-number="0" style="grid-column: span 2;">0</button>
    <button class="btn btn-dark" data-number=".">.</button>
  </div>
</div>`
            },
            {
              title: 'Step 2: Complete Calculator Controller Engine',
              explanation: 'Implement the mathematical evaluation engine in pure JavaScript.',
              command: `// calculator.js
class CalculatorEngine {
  constructor(displayElement) {
    this.display = displayElement;
    this.clear();
  }

  clear() {
    this.current = "0";
    this.prev = "";
    this.op = null;
    this.updateScreen();
  }

  appendNumber(number) {
    if (number === "." && this.current.includes(".")) return;
    if (this.current === "0" && number !== ".") {
      this.current = number.toString();
    } else {
      this.current += number.toString();
    }
    this.updateScreen();
  }

  chooseOperator(operator) {
    if (this.current === "") return;
    if (this.prev !== "") this.compute();
    this.op = operator;
    this.prev = this.current;
    this.current = "";
  }

  compute() {
    const prevNum = parseFloat(this.prev);
    const currNum = parseFloat(this.current);
    if (isNaN(prevNum) || isNaN(currNum)) return;

    let result;
    switch (this.op) {
      case "+": result = prevNum + currNum; break;
      case "-": result = prevNum - currNum; break;
      case "*": result = prevNum * currNum; break;
      case "/": 
        if (currNum === 0) {
          alert("Error: Division by zero!");
          this.clear();
          return;
        }
        result = prevNum / currNum; 
        break;
      default: return;
    }

    this.current = Number(result.toFixed(8)).toString();
    this.op = null;
    this.prev = "";
    this.updateScreen();
  }

  updateScreen() {
    this.display.textContent = this.current || "0";
  }
}

// Attach Event Delegation Listener
const display = document.getElementById("calc-display");
const keypad = document.getElementById("keypad");
const calc = new CalculatorEngine(display);

keypad.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  if (btn.dataset.number) calc.appendNumber(btn.dataset.number);
  if (btn.dataset.operator) calc.chooseOperator(btn.dataset.operator);
  if (btn.dataset.action === "equals") calc.compute();
  if (btn.dataset.action === "clear") calc.clear();
});`
            }
          ],
          verification: 'Test arithmetic operations like `12 + 5 * 2` and test dividing by zero to confirm the safety alert.',
          expectedResult: 'A fully responsive and robust mathematical calculator.',
          summary: 'You have built an interactive calculator using DOM event delegation and object-oriented state management.'
        },
        {
          id: 'project-2-todo-app-localstorage',
          slug: 'project-2-todo-app-localstorage',
          order: '13.2',
          title: 'Project 2: Filterable Todo App with LocalStorage Persistence',
          subtitle: 'Build a production Todo application with task creation, toggle completion, deletion, search filter, and localStorage sync in baby steps.',
          chapterId: 'guided-vanilla-projects',
          chapterTitle: '13. 6 Progressive Vanilla JS Projects',
          levelTitle: 'Level 13: Real-World Guided Projects',
          goal: 'Master managing arrays of state objects, re-rendering UI on state changes, and persisting data across browser sessions.',
          prerequisites: ['Lesson 13.1 completed.'],
          concept: `### The Core Mental Model: State $\rightarrow$ UI Synchronization
Instead of manually modifying individual HTML elements when a task is updated:
1. We modify our **JavaScript State Array (\`todos\`)**.
2. We save the updated state array to **\`localStorage\`**.
3. We run our **\`render()\` function** which redraws the list based on current state.`,
          diagram: `flowchart TD
    User["User adds new task 'Learn JS'"] --> State["1. State Array: todos.push({ id, title, done: false })"]
    State --> Store["2. Sync: localStorage.setItem('todos', JSON.stringify(todos))"]
    Store --> Render["3. renderTodos() executes -> Reconstructs DOM elements"]
    Render --> UI["4. Screen displays updated list with counter"]
    
    style User fill:#cfe2ff,stroke:#084298,color:#084298
    style State fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Store fill:#d1e7dd,stroke:#198754,color:#0f5132
    style UI fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Complete Todo App Implementation with LocalStorage',
              explanation: 'Build the full reactive state controller.',
              command: `// src/todoApp.js
const STORAGE_KEY = "vinnertech_vanilla_todos";

class TodoApp {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
      { id: 1, title: "Master JavaScript Fundamentals", completed: true },
      { id: 2, title: "Build Real-World Vanilla JS Projects", completed: false }
    ];
    this.filterMode = "all"; // 'all', 'active', 'completed'
    this.initDOM();
    this.render();
  }

  initDOM() {
    this.input = document.getElementById("todo-input");
    this.form = document.getElementById("todo-form");
    this.list = document.getElementById("todo-list");
    this.countBadge = document.getElementById("active-count");

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = this.input.value.trim();
      if (!text) return;

      this.todos.unshift({ id: Date.now(), title: text, completed: false });
      this.input.value = "";
      this.syncAndRender();
    });

    this.list.addEventListener("click", (e) => {
      const toggle = e.target.closest(".todo-check");
      const delBtn = e.target.closest(".btn-delete");

      if (toggle) {
        const id = Number(toggle.dataset.id);
        const item = this.todos.find(t => t.id === id);
        if (item) item.completed = !item.completed;
        this.syncAndRender();
      }

      if (delBtn) {
        const id = Number(delBtn.dataset.id);
        this.todos = this.todos.filter(t => t.id !== id);
        this.syncAndRender();
      }
    });
  }

  syncAndRender() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
    this.render();
  }

  render() {
    const activeCount = this.todos.filter(t => !t.completed).length;
    if (this.countBadge) this.countBadge.textContent = activeCount;

    if (this.todos.length === 0) {
      this.list.innerHTML = \`<li class="list-group-item text-center text-muted py-4">No tasks remaining! Great job!</li>\`;
      return;
    }

    this.list.innerHTML = this.todos.map(t => \`
      <li class="list-group-item d-flex justify-content-between align-items-center \${t.completed ? 'bg-light' : ''}">
        <div class="form-check d-flex align-items-center">
          <input class="form-check-input todo-check me-3" type="checkbox" data-id="\${t.id}" \${t.completed ? 'checked' : ''}>
          <span class="\${t.completed ? 'text-decoration-line-through text-muted' : 'fw-medium'}">\${t.title}</span>
        </div>
        <button class="btn btn-sm btn-outline-danger border-0 btn-delete" data-id="\${t.id}" title="Delete">
          <i class="bi bi-trash3-fill"></i>
        </button>
      </li>
    \`).join('');
  }
}

// Instantiate on page load
new TodoApp();`
            }
          ],
          verification: 'Add new tasks, check off items, reload your browser tab, and observe that all tasks persist flawlessly from localStorage.',
          expectedResult: 'A fully persistent, reactive Todo application.',
          summary: 'You have mastered unidirectional state management and browser storage persistence in pure JavaScript.'
        }
      ]
    }
  ]
};

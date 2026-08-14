// Level 7: DOM, Events & Web APIs (In-Depth Expanded Edition)
export const level7DomEvents = {
  id: 'level-7',
  title: 'Level 7: DOM, Events & Web APIs',
  icon: 'bi-window-stack',
  color: '#eab308',
  description: 'Master DOM querying, element creation, event bubbling, event capturing, event delegation, and browser storage in baby steps.',
  chapters: [
    {
      id: 'dom-and-events',
      title: '07. DOM Manipulation & Event Architecture',
      lessons: [
        {
          id: 'dom-traversal-events-delegation',
          slug: 'dom-traversal-events-delegation',
          order: '7.1',
          title: 'DOM Querying, Event Bubbling & Event Delegation',
          subtitle: 'querySelector, element creation, the 3 phases of events (Capture, Target, Bubble), and high-performance Event Delegation in baby steps.',
          chapterId: 'dom-and-events',
          chapterTitle: '07. DOM Manipulation & Event Architecture',
          levelTitle: 'Level 7: DOM, Events & Web APIs',
          goal: 'Master DOM tree manipulation and implement high-performance event listeners using Event Delegation.',
          prerequisites: ['Level 6 completed.'],
          concept: `### 1. The 3 Phases of Event Propagation
When a user clicks an element on a web page, the event travels through 3 phases:
1. **Capturing Phase**: Travels down from \`window\` $\rightarrow$ \`document\` $\rightarrow$ \`<body>\` $\rightarrow$ parent elements down to the target element.
2. **Target Phase**: Reaches the exact clicked element (\`event.target\`).
3. **Bubbling Phase**: Bubbles back up from the target element $\rightarrow$ parent elements $\rightarrow$ \`window\`.

---

### 2. High-Performance Event Delegation:
Instead of attaching 1,000 separate click event listeners to 1,000 table rows (which consumes massive memory), you attach **a single listener to the parent container** and inspect \`event.target.closest()\` as events bubble up!`,
          diagram: `flowchart TD
    Click["User clicks <button class='delete-btn'>"] --> Target["1. Event Target (Clicked Button)"]
    Target --> Bubble["2. Event Bubbles up to Parent Container <table id='data-table'>"]
    Bubble --> Handler["3. Single Parent Listener intercepts: if (e.target.matches('.delete-btn'))"]
    Handler --> Action["4. Executes deletion logic without individual listeners!"]
    
    style Click fill:#cfe2ff,stroke:#084298,color:#084298
    style Target fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Bubble fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Handler fill:#10b981,color:#fff
    style Action fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Event Delegation Implementation',
              explanation: 'Attach 1 event listener to handle dynamic list items.',
              command: `// HTML: <ul id="todo-list"><li>Task 1 <button class="btn-del" data-id="1">X</button></li></ul>

const todoList = document.getElementById("todo-list");

// Single high-performance listener on the parent:
todoList.addEventListener("click", (event) => {
  const deleteBtn = event.target.closest(".btn-del");
  
  if (deleteBtn) {
    const taskId = deleteBtn.dataset.id;
    console.log("Deleted task ID:", taskId);
    deleteBtn.closest("li").remove(); // Remove list item from DOM
  }
});`
            }
          ],
          verification: 'Test clicking dynamically added list items to verify that the parent listener handles them automatically.',
          expectedResult: 'Scalable DOM architecture with zero memory leaks from redundant event listeners.',
          summary: 'Harness Event Bubbling with Event Delegation by placing single event handlers on parent containers.'
        }
      ]
    }
  ]
};

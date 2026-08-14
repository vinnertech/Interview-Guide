// Level 5: Arrays & Array Methods Mastery (In-Depth Expanded Edition)
export const level5ArraysMethods = {
  id: 'level-5',
  title: 'Level 5: Arrays & Array Methods',
  icon: 'bi-list-ol',
  color: '#06b6d4',
  description: 'Master mutating vs non-mutating array operations, functional pipelines with map(), filter(), reduce(), and sorting mechanics in baby steps.',
  chapters: [
    {
      id: 'arrays-and-methods',
      title: '05. Arrays & Functional Pipelines',
      lessons: [
        {
          id: 'arrays-mutating-vs-nonmutating-pipelines',
          slug: 'arrays-mutating-vs-nonmutating-pipelines',
          order: '5.1',
          title: 'Arrays: Mutating vs Non-Mutating Methods & Pipelines',
          subtitle: 'Pure functional transformations (map, filter, reduce) vs mutating methods (push, splice, sort), and calculating cart totals in baby steps.',
          chapterId: 'arrays-and-methods',
          chapterTitle: '05. Arrays & Functional Pipelines',
          levelTitle: 'Level 5: Arrays & Array Methods',
          goal: 'Master functional array processing, chaining transformations, and avoiding accidental state mutation bugs.',
          prerequisites: ['Level 4 completed.'],
          concept: `### 1. Mutating vs Non-Mutating Array Operations

- **Mutating Methods (Modifies the Original Array in RAM)**:
  \`push()\`, \`pop()\`, \`shift()\`, \`unshift()\`, \`splice()\`, \`sort()\`, \`reverse()\`.
  *(⚠️ Danger in React state: Mutating state directly causes components to skip re-rendering!)*

- **Non-Mutating / Pure Methods (Returns a Brand New Array)**:
  \`map()\`, \`filter()\`, \`reduce()\`, \`slice()\`, \`concat()\`, \`toSorted()\`, \`toReversed()\`.
  *(✅ Recommended standard for modern immutability!)*

---

### 2. The Functional Pipeline Trifecta:
- **\`map(fn)\`**: Transforms every element 1-to-1 into a new value of the same array length.
- **\`filter(fn)\`**: Returns a subset containing only elements where \`fn(item)\` returned \`true\`.
- **\`reduce(fn, initialValue)\`**: Collapses an entire array of items down to a **single cumulative value** (like a shopping cart total, group map, or analytics count).`,
          diagram: `flowchart LR
    Items["Products Array\n[{ price: 100, active: true }, { price: 50, active: false }]"] --> Filter["1. filter(p => p.active)\n-> [{ price: 100 }]"]
    Filter --> Map["2. map(p => p.price * 1.1)\n-> [110] (With tax)"]
    Map --> Reduce["3. reduce((sum, p) => sum + p, 0)\n-> $110.00 Total Invoice"]
    
    style Items fill:#cfe2ff,stroke:#084298,color:#084298
    style Filter fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Map fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Reduce fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: The Essential Functional Pipeline (filter + map + reduce)',
              explanation: 'Calculate shopping cart total for in-stock items with tax.',
              command: `const shoppingCart = [
  { id: 1, name: "Mechanical Keyboard", price: 120, inStock: true },
  { id: 2, name: "Wireless Mouse", price: 60, inStock: false },
  { id: 3, name: "4K Monitor", price: 400, inStock: true }
];

// Chain filter, map, and reduce in one clean immutable pipeline:
const inStockTotal = shoppingCart
  .filter(item => item.inStock)            // 1. Keep only available items
  .map(item => item.price * 1.08)           // 2. Add 8% sales tax
  .reduce((accum, price) => accum + price, 0); // 3. Sum grand total

console.log("Grand Total of In-Stock Items: $" + inStockTotal.toFixed(2)); // $561.60`
            },
            {
              title: 'Step 2: Safe Array Sorting with toSorted() vs sort()',
              explanation: '`sort()` mutates in place; `toSorted()` returns a new sorted array.',
              command: `const prices = [40, 100, 1, 5, 25];

// ❌ Warning: Default sort() converts numbers to strings: [1, 100, 25, 40, 5]!
// ✅ Correct numeric sorting with comparator (a, b) => a - b:
const sortedPrices = prices.toSorted((a, b) => a - b);

console.log("Original Array Unchanged:", prices);       // [40, 100, 1, 5, 25]
console.log("Sorted Array:", sortedPrices);             // [1, 5, 25, 40, 100]`
            }
          ],
          verification: 'Run the sorting and pipeline examples in your browser console to verify that the original array is never mutated.',
          expectedResult: 'Mastery of functional array pipelines and non-mutating algorithms.',
          summary: 'Use non-mutating methods like map(), filter(), reduce(), and toSorted() to write clean, predictable, and React-friendly code.'
        }
      ]
    }
  ]
};

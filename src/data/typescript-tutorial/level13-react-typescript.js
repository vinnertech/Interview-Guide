// Level 13: React + TypeScript Architecture
export const level13ReactTypeScript = {
  id: 'level-13',
  title: 'Level 13: React + TypeScript Architecture',
  icon: 'bi-filetype-tsx',
  color: '#61dafb',
  description: 'Master enterprise React development with TypeScript: Props, React.ReactNode, useState<T>, useRef<T>, useReducer with Discriminated Unions, typing React Events, and Generic React Components in baby steps.',
  chapters: [
    {
      id: 'react-and-typescript',
      title: '13. React + TypeScript Enterprise Architecture',
      lessons: [
        {
          id: 'typing-react-props-state-hooks',
          slug: 'typing-react-props-state-hooks',
          order: '13.1',
          title: 'Typing React Props, Children & Hooks (useState, useRef)',
          subtitle: 'Component Props interfaces, React.ReactNode, optional callbacks, useState<T> inference vs explicit unions, and typing DOM refs in baby steps.',
          chapterId: 'react-and-typescript',
          chapterTitle: '13. React + TypeScript Enterprise Architecture',
          levelTitle: 'Level 13: React + TypeScript Architecture',
          goal: 'Master typing React component interfaces, JSX children, state hooks, and DOM element refs.',
          prerequisites: ['Level 12 completed.'],
          concept: `### 1. Typing Component Props
Always use an **\`interface\`** or **\`type\`** to declare component props:

\`\`\`tsx
interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode; // Valid JSX children (elements, strings, null)
}

export function Button({ label, variant = "primary", disabled, onClick, children }: ButtonProps) {
  return (
    <button className={\`btn btn-\${variant}\`} disabled={disabled} onClick={onClick}>
      {label} {children}
    </button>
  );
}
\`\`\`

---

### 2. Typing React Hooks:
- **\`useState<T>\`**: If initial state is primitive (\`useState(0)\`), TypeScript infers \`number\`. For objects or null states, pass the generic explicitly: \`useState<User | null>(null)\`.
- **\`useRef<T>\`**: For DOM nodes, use \`useRef<HTMLInputElement>(null)\`.`,
          diagram: `flowchart TD
    Props["interface UserCardProps\n{ user: User; onEdit?: (id: number) => void; }"] --> Comp["function UserCard({ user, onEdit }: UserCardProps)"]
    Comp --> State["const [isExpanded, setIsExpanded] = useState<boolean>(false);"]
    Comp --> Ref["const inputRef = useRef<HTMLInputElement>(null);"]
    
    style Props fill:#cfe2ff,stroke:#084298,color:#084298
    style Comp fill:#fff3cd,stroke:#ffc107,color:#664d03
    style State fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Ref fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Production UserCard Component with Props & State',
              explanation: 'A clean React component with strict TypeScript typing.',
              command: `import React, { useState, useRef, useEffect } from 'react';

interface Employee {
  id: number;
  name: string;
  department: string;
}

interface EmployeeCardProps {
  employee: Employee;
  onStatusChange?: (id: number, newStatus: string) => void;
}

export function EmployeeCard({ employee, onStatusChange }: EmployeeCardProps) {
  const [isActive, setIsActive] = useState<boolean>(true);
  const noteInputRef = useRef<HTMLInputElement>(null);

  const toggleStatus = () => {
    const nextStatus = !isActive;
    setIsActive(nextStatus);
    onStatusChange?.(employee.id, nextStatus ? "Active" : "Inactive");
  };

  return (
    <div className="card p-3 rounded-4 shadow-sm border mb-3">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h5 className="fw-bold mb-1">{employee.name}</h5>
          <span className="badge bg-secondary">{employee.department}</span>
        </div>
        <button 
          className={\`btn btn-sm \${isActive ? 'btn-success' : 'btn-outline-secondary'}\`}
          onClick={toggleStatus}
        >
          {isActive ? 'Active' : 'Inactive'}
        </button>
      </div>
    </div>
  );
}`
            }
          ],
          verification: 'Pass an incorrect prop or omit a required prop in your React component and observe how TypeScript flags the mistake in your IDE.',
          expectedResult: 'Robust React components with zero prop errors.',
          summary: 'Use interfaces for React props, type children with React.ReactNode, and explicitly type hooks like useState<User | null>(null).'
        },
        {
          id: 'react-events-reducers-generic-components',
          slug: 'react-events-reducers-generic-components',
          order: '13.2',
          title: 'React Events, useReducer & Generic Components',
          subtitle: 'Typing ChangeEvent/FormEvent, state reducers with Discriminated Unions, and building Generic <DataTable<T>> components in baby steps.',
          chapterId: 'react-and-typescript',
          chapterTitle: '13. React + TypeScript Enterprise Architecture',
          levelTitle: 'Level 13: React + TypeScript Architecture',
          goal: 'Master typing React event handlers, useReducer action unions, and build reusable Generic React UI components.',
          prerequisites: ['Lesson 13.1 completed.'],
          concept: `### 1. Typing React Events (Never use \`event: any\`!)

- Input change: \`React.ChangeEvent<HTMLInputElement>\`
- Form submit: \`React.FormEvent<HTMLFormElement>\`
- Button click: \`React.MouseEvent<HTMLButtonElement>\`

---

### 2. \`useReducer\` with Discriminated Unions:
Redux and \`useReducer\` actions should **always** be modeled as Discriminated Unions for exhaustive type safety!

---

### 3. Generic React Components (\`<DataTable<T>>\`):
Allows a single table component to render any data model (Users, Products, Orders) with 100% type inference on column accessors!`,
          diagram: `flowchart TD
    Action["type Action =\n| { type: 'ADD'; payload: Item }\n| { type: 'REMOVE'; id: number }\n| { type: 'RESET' }"] --> Reducer["function reducer(state, action: Action)"]
    Reducer --> Case1["case 'ADD': action.payload is guaranteed to be 'Item'"]
    Reducer --> Case2["case 'REMOVE': action.id is guaranteed to be 'number'"]
    
    style Action fill:#cfe2ff,stroke:#084298,color:#084298
    style Reducer fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Case1 fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Case2 fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Type-Safe useReducer with Discriminated Union Actions',
              explanation: 'Build an immutable cart reducer with strict actions.',
              command: `type CartItem = { id: number; title: string; price: number; quantity: number };

type CartState = {
  items: CartItem[];
  totalPrice: number;
};

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; id: number }
  | { type: "CLEAR_CART" };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM":
      const nextItems = [...state.items, action.payload];
      return {
        items: nextItems,
        totalPrice: nextItems.reduce((acc, i) => acc + i.price * i.quantity, 0)
      };
    case "REMOVE_ITEM":
      const filtered = state.items.filter(i => i.id !== action.id);
      return {
        items: filtered,
        totalPrice: filtered.reduce((acc, i) => acc + i.price * i.quantity, 0)
      };
    case "CLEAR_CART":
      return { items: [], totalPrice: 0 };
  }
}`
            },
            {
              title: 'Step 2: Generic React Component (<GenericList<T>>)',
              explanation: 'Build a polymorphic list component that infers item types automatically.',
              command: `import React from 'react';

interface GenericListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T) => string | number;
}

export function GenericList<T>({ items, renderItem, keyExtractor }: GenericListProps<T>) {
  if (items.length === 0) {
    return <p className="text-muted p-3">No items available.</p>;
  }

  return (
    <ul className="list-group shadow-sm rounded-3">
      {items.map((item, idx) => (
        <li key={keyExtractor(item)} className="list-group-item">
          {renderItem(item, idx)}
        </li>
      ))}
    </ul>
  );
}`
            }
          ],
          verification: 'Inspect how `<GenericList<User>>` provides full autocomplete inside the `renderItem` callback.',
          expectedResult: 'Advanced proficiency in React + TypeScript architectures.',
          summary: 'Use discriminated unions for useReducer actions, type events with React.ChangeEvent/FormEvent, and use Generic React Components for reusable UI libraries.'
        }
      ]
    }
  ]
};

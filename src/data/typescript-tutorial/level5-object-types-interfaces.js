// Level 5: Object Types: Type Aliases vs Interfaces (In-Depth Expanded Edition)
export const level5ObjectTypesInterfaces = {
  id: 'level-5',
  title: 'Level 5: Object Types & Interfaces',
  icon: 'bi-box-seam',
  color: '#10b981',
  description: 'Master modeling objects in TypeScript: Optional properties, readonly immutability, index signatures, and the definitive guide to Type Aliases vs Interfaces in baby steps.',
  chapters: [
    {
      id: 'objects-and-interfaces',
      title: '05. Object Models & Interfaces',
      lessons: [
        {
          id: 'object-shapes-optional-readonly-index',
          slug: 'object-shapes-optional-readonly-index',
          order: '5.1',
          title: 'Object Shapes: Optional (?), Readonly & Index Signatures',
          subtitle: 'Defining structural object schemas, protecting properties with readonly, and dynamic dictionary keys with index signatures in baby steps.',
          chapterId: 'objects-and-interfaces',
          chapterTitle: '05. Object Models & Interfaces',
          levelTitle: 'Level 5: Object Types & Interfaces',
          goal: 'Master object type modeling with optional fields, compile-time readonly immutability, and dynamic key index signatures.',
          prerequisites: ['Level 4 completed.'],
          concept: `### 1. Object Types & Property Modifiers

- **Required by Default**: Unlike JavaScript, all defined fields must be present.
- **Optional Properties (\`?\`)**: \`nickname?: string\` allows the property to be omitted or \`undefined\`.
- **\`readonly\` Properties**: \`readonly id: number\` prevents reassignment after initialization.
- **Index Signatures**: \`[key: string]: number\` allows dynamic dictionary keys.`,
          diagram: `flowchart TD
    Obj["interface UserProfile"] --> F1["id: readonly number (Cannot reassign)"]
    Obj --> F2["name: string (Required)"]
    Obj --> F3["bio?: string (Optional, string or undefined)"]
    Obj --> F4["[key: string]: unknown (Dynamic extra attributes)"]
    
    style Obj fill:#cfe2ff,stroke:#084298,color:#084298
    style F1 fill:#f8d7da,stroke:#dc3545,color:#842029
    style F2 fill:#d1e7dd,stroke:#198754,color:#0f5132
    style F3 fill:#fff3cd,stroke:#ffc107,color:#664d03
    style F4 fill:#e2e3e5,stroke:#41464b,color:#141619`,
          steps: [
            {
              title: 'Step 1: Object Model with Modifiers',
              explanation: 'Build a secure user profile schema.',
              command: `interface UserAccount {
  readonly id: number;      // Immutable identifier
  username: string;
  email: string;
  avatarUrl?: string;       // Optional (? -> string | undefined)
  tags: readonly string[];  // Readonly array
}

const user: UserAccount = {
  id: 1001,
  username: "vinner",
  email: "vinner@vinnertech.com",
  tags: ["admin", "dev"]
};

// user.id = 2002; 
// ❌ Error: Cannot assign to 'id' because it is a read-only property.`
            },
            {
              title: 'Step 2: Dictionary Index Signatures',
              explanation: 'Map arbitrary string keys to specific value types.',
              command: `// Dictionary mapping user IDs to their role ratings
interface UserScoreMap {
  [userId: string]: number;
}

const scores: UserScoreMap = {
  "user_101": 95,
  "user_102": 88
};

scores["user_103"] = 100; // ✅ Type-safe!`
            }
          ],
          verification: 'Attempt to reassign a readonly property and verify TypeScript blocks it.',
          expectedResult: 'Robust structural models with immutable and dynamic fields.',
          summary: 'Use ? for optional fields, readonly for immutable properties, and [key: string]: Type for dynamic dictionaries.'
        },
        {
          id: 'type-aliases-vs-interfaces',
          slug: 'type-aliases-vs-interfaces',
          order: '5.2',
          title: 'Type Aliases (type) vs Interfaces (interface)',
          subtitle: 'The ultimate comparison: Extension (extends vs &), Declaration Merging, Unions, and when to use each in enterprise code.',
          chapterId: 'objects-and-interfaces',
          chapterTitle: '05. Object Models & Interfaces',
          levelTitle: 'Level 5: Object Types & Interfaces',
          goal: 'Understand the exact technical differences between type and interface and choose the right one confidently.',
          prerequisites: ['Lesson 5.1 completed.'],
          concept: `### Type Aliases (\`type\`) vs Interfaces (\`interface\`)

| Capability | \`interface\` | \`type\` Alias |
| :--- | :--- | :--- |
| **Object Shapes** | ✅ Yes (\`interface Point { x: number }\`) | ✅ Yes (\`type Point = { x: number }\`) |
| **Extension Syntax** | \`interface B extends A\` | \`type B = A & { ... }\` (Intersection) |
| **Unions & Primitives** | ❌ Cannot define raw unions (\`A \| B\`) | ✅ **Yes!** (\`type ID = string \| number\`) |
| **Declaration Merging** | ✅ **Yes** (Multiple definitions merge!) | ❌ No (Throws duplicate identifier error) |
| **Tuples & Functions** | Possible with call signatures | Cleaner syntax (\`type Fn = () => void\`) |

---

### Industry Best Practice Recommendation:
1. Use **\`interface\`** for defining object contracts, public library APIs, and React Component Props (better compiler performance & error messages).
2. Use **\`type\`** for Unions (\`string | number\`), Intersections, Primitives, Tuples, and Complex Computed Utility Types.`,
          diagram: `flowchart LR
    Use["Which should I use?"] --> Obj["Object Contract / Model / Props -> interface User { ... }"]
    Use --> Uni["Union / Primitives / Tuples -> type Status = 'open' | 'closed'"]
    
    style Use fill:#cfe2ff,stroke:#084298,color:#084298
    style Obj fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Uni fill:#fff3cd,stroke:#ffc107,color:#664d03`,
          steps: [
            {
              title: 'Step 1: Interface Extension (extends)',
              explanation: 'Inherit and extend base shapes.',
              command: `interface Person {
  name: string;
  email: string;
}

// Inherits name and email, adds employeeId & department
interface Employee extends Person {
  employeeId: number;
  department: string;
}

const emp: Employee = {
  name: "Sarah",
  email: "sarah@vinnertech.com",
  employeeId: 504,
  department: "Architecture"
};`
            },
            {
              title: 'Step 2: Declaration Merging (Interfaces only!)',
              explanation: 'Useful for augmenting third-party window/library objects.',
              command: `// Definition 1
interface AppConfig {
  apiUrl: string;
}

// Definition 2 (Same file or ambient declaration -> Merges automatically!)
interface AppConfig {
  timeoutMs: number;
}

const config: AppConfig = {
  apiUrl: "https://api.vinnertech.com",
  timeoutMs: 5000 // ✅ Both fields are required!
};`
            }
          ],
          verification: 'Try using declaration merging with `type` and observe the compiler error vs `interface`.',
          expectedResult: 'Deep mastery of `type` vs `interface` tradeoffs.',
          summary: 'Use interfaces for extensible object models and declaration merging; use type aliases for unions, intersections, and computed types.'
        }
      ]
    }
  ]
};

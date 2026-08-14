// Level 6: Unions, Intersections & Type Narrowing (In-Depth Expanded Edition)
export const level6UnionsNarrowing = {
  id: 'level-6',
  title: 'Level 6: Unions & Type Narrowing',
  icon: 'bi-signpost-split-fill',
  color: '#ec4899',
  description: 'Master Union types (A | B), Intersection types (A & B), Literal types, and 5 narrowing techniques (typeof, in, instanceof, Type Guards, Discriminated Unions) in complete baby steps.',
  chapters: [
    {
      id: 'unions-and-narrowing',
      title: '06. Unions, Intersections & Type Narrowing',
      lessons: [
        {
          id: 'unions-intersections-literal-types',
          slug: 'unions-intersections-literal-types',
          order: '6.1',
          title: 'Unions (A | B), Intersections (A & B) & Literal Types',
          subtitle: 'Union OR logic, Intersection AND combination, and exact Literal string/number constraints in baby steps.',
          chapterId: 'unions-and-narrowing',
          chapterTitle: '06. Unions, Intersections & Type Narrowing',
          levelTitle: 'Level 6: Unions & Type Narrowing',
          goal: 'Understand how to compose flexible types using unions and combine multiple objects using intersections.',
          prerequisites: ['Level 5 completed.'],
          concept: `### 1. Union Types (\`A | B\` - "OR")
A Union type describes a value that can be **one of several types**:
\`\`\`typescript
type NetworkStatus = "online" | "offline" | "connecting"; // String literal union
type ID = string | number;
\`\`\`

---

### 2. Intersection Types (\`A & B\` - "AND")
An Intersection type combines multiple object types into a **single type containing all properties from every member**:
\`\`\`typescript
type Timestamps = { createdAt: Date; updatedAt: Date };
type User = { id: string; name: string };

type DatabaseUser = User & Timestamps; // Contains: id, name, createdAt, updatedAt
\`\`\``,
          diagram: `flowchart LR
    Union["Union (A | B)\nValue is EITHER A OR B"] 
    Intersection["Intersection (A & B)\nValue MUST HAVE ALL props of A AND B"]
    
    style Union fill:#cfe2ff,stroke:#084298,color:#084298
    style Intersection fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Union Types and Literal Constraints',
              explanation: 'Prevent invalid status strings at compile time.',
              command: `type ButtonVariant = "primary" | "secondary" | "danger";

function renderButton(label: string, variant: ButtonVariant) {
  console.log(\`Rendering \${variant} button: \${label}\`);
}

renderButton("Submit", "primary"); // ✅ Valid
// renderButton("Cancel", "warning"); 
// ❌ Error: Argument of type '"warning"' is not assignable to parameter of type 'ButtonVariant'.`
            },
            {
              title: 'Step 2: Intersection Types for Composing Models',
              explanation: 'Combine reusable schemas cleanly.',
              command: `type HasId = { id: number };
type HasAudit = { createdBy: string; timestamp: Date };
type ProductEntity = { title: string; price: number };

// Compose all 3 into an immutable database record:
type FullProductRecord = HasId & HasAudit & ProductEntity;

const item: FullProductRecord = {
  id: 1,
  title: "Mechanical Keyboard",
  price: 120,
  createdBy: "admin@vinnertech.com",
  timestamp: new Date()
};`
            }
          ],
          verification: 'Try omitting a property from an Intersection type and observe TypeScript requiring every field.',
          expectedResult: 'Clear understanding of Unions vs Intersections.',
          summary: 'Use unions (A | B) when a value can be one of several options; use intersections (A & B) to merge schemas together.'
        },
        {
          id: 'type-narrowing-guards-discriminated-unions',
          slug: 'type-narrowing-guards-discriminated-unions',
          order: '6.2',
          title: '5 Type Narrowing Techniques & Discriminated Unions',
          subtitle: 'typeof, in, instanceof, custom User-Defined Type Guards (value is Type), and Discriminated Unions in baby steps.',
          chapterId: 'unions-and-narrowing',
          chapterTitle: '06. Unions, Intersections & Type Narrowing',
          levelTitle: 'Level 6: Unions & Type Narrowing',
          goal: 'Master all 5 TypeScript narrowing mechanisms to safely write bulletproof, type-guarded business logic.',
          prerequisites: ['Lesson 6.1 completed.'],
          concept: `### What is Type Narrowing?
Type Narrowing is the process where TypeScript refines a broad type (like \`string | number\` or \`unknown\`) into a specific, narrow type within a code block based on runtime condition checks.

---

### The 5 Standard Narrowing Mechanisms:
1. **\`typeof\` check**: For primitives (\`typeof x === "string"\`).
2. **\`in\` operator**: For property existence (\`"email" in user\`).
3. **\`instanceof\`**: For class instances (\`err instanceof Error\`).
4. **Custom Type Guard**: \`function isUser(v: unknown): v is User\` with the \`is\` predicate.
5. **Discriminated Unions (The Gold Standard)**: Objects sharing a single common literal property (e.g. \`status: "loading" | "success" | "error"\`).`,
          diagram: `flowchart TD
    State["type AsyncState<T> =\n{ status: 'loading' } |\n{ status: 'success', data: T } |\n{ status: 'error', error: string }"] --> Switch["switch (state.status)"]
    Switch --> C1["case 'loading': state has no data (Prevents null crashes!)"]
    Switch --> C2["case 'success': state.data is guaranteed to exist!"]
    Switch --> C3["case 'error': state.error string is guaranteed to exist!"]
    
    style State fill:#cfe2ff,stroke:#084298,color:#084298
    style Switch fill:#fff3cd,stroke:#ffc107,color:#664d03
    style C1 fill:#e2e3e5,stroke:#41464b,color:#141619
    style C2 fill:#d1e7dd,stroke:#198754,color:#0f5132
    style C3 fill:#f8d7da,stroke:#dc3545,color:#842029`,
          steps: [
            {
              title: 'Step 1: Custom Type Guard (value is Type)',
              explanation: 'Teach the compiler how to identify your custom domain types safely.',
              command: `interface Admin {
  id: number;
  role: "admin";
  permissions: string[];
}

// User-Defined Type Guard with the 'is' predicate:
function isAdmin(user: unknown): user is Admin {
  return (
    typeof user === "object" &&
    user !== null &&
    "role" in user &&
    (user as Admin).role === "admin"
  );
}

function executeSystemCommand(user: unknown) {
  if (isAdmin(user)) {
    // Inside this if block, TypeScript knows 'user' is 100% strictly 'Admin':
    console.log("Admin permissions:", user.permissions.join(", "));
  } else {
    console.log("Access Denied: Not an admin");
  }
}`
            },
            {
              title: 'Step 2: Discriminated Unions in Real-World UI State',
              explanation: 'Eliminate impossible UI states completely.',
              command: `type ApiResponse<T> = 
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string };

function renderUI(response: ApiResponse<string[]>) {
  switch (response.status) {
    case "loading":
      console.log("Spinner: Loading data...");
      break;
    case "success":
      // TypeScript GUARANTEES response.data exists here:
      console.log("Render list:", response.data.map(item => item.toUpperCase()));
      break;
    case "error":
      // TypeScript GUARANTEES response.message exists here:
      console.error("Error occurred:", response.message);
      break;
  }
}`
            }
          ],
          verification: 'Try accessing `response.data` in the "loading" branch and observe TypeScript preventing the bug.',
          expectedResult: 'Complete mastery of type narrowing and discriminated union state machines.',
          summary: 'Use discriminated unions with a common literal status tag to build rock-solid, bug-free application state flows.'
        }
      ]
    }
  ]
};

// Level 4: Arrays, Tuples, Enums & Literal Types (In-Depth Expanded Edition)
export const level4ArraysTuplesEnums = {
  id: 'level-4',
  title: 'Level 4: Arrays, Tuples & Enums',
  icon: 'bi-grid-3x3-gap-fill',
  color: '#f59e0b',
  description: 'Master typed arrays (T[] vs Array<T>), ReadonlyArray, fixed-length Tuples ([string, number]), Enums (Numeric, String, const enum), and modern "as const" object literals in baby steps.',
  chapters: [
    {
      id: 'arrays-tuples-enums',
      title: '04. Collections, Tuples & Enums',
      lessons: [
        {
          id: 'arrays-readonly-arrays-and-tuples',
          slug: 'arrays-readonly-arrays-and-tuples',
          order: '4.1',
          title: 'Typed Arrays, ReadonlyArray & Fixed Tuples',
          subtitle: 'Array syntax (number[] vs Array<number>), preventing mutations with ReadonlyArray, and fixed positional Tuples in baby steps.',
          chapterId: 'arrays-tuples-enums',
          chapterTitle: '04. Collections, Tuples & Enums',
          levelTitle: 'Level 4: Arrays, Tuples & Enums',
          goal: 'Understand how TypeScript types homogeneous lists with arrays and fixed positional data structures with tuples.',
          prerequisites: ['Level 3 completed.'],
          concept: `### 1. Arrays vs Tuples in TypeScript

- **Array (\`T[]\` or \`Array<T>\`)**: A list of variable length where all elements share the same type.
- **Tuple (\`[Type1, Type2]\`)**: An array with a **fixed number of elements** where each index has a specific, distinct type (e.g. \`[number, string]\` for React's \`useState\` return pair!).
- **\`ReadonlyArray<T>\` / \`readonly T[]\`**: Prevents mutating methods like \`push()\`, \`pop()\`, and index assignments.`,
          diagram: `flowchart LR
    Arr["Array: string[]\n['Alice', 'Bob', 'Charlie']\n(Variable length)"] 
    Tup["Tuple: [number, string]\n[101, 'Active']\n(Fixed 2 elements with exact types)"]
    
    style Arr fill:#cfe2ff,stroke:#084298,color:#084298
    style Tup fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Arrays and Readonly Protection',
              explanation: 'Prevent accidental mutations on state arrays.',
              command: `// 1. Standard typed array
const skills: string[] = ["TypeScript", "React", "Node.js"];
skills.push("Docker"); // ✅ Allowed

// 2. Readonly array (immutable)
const staticConfigs: readonly number[] = [80, 443, 8080];
// staticConfigs.push(3000); 
// ❌ Error: Property 'push' does not exist on type 'readonly number[]'.`
            },
            {
              title: 'Step 2: Fixed Positional Tuples',
              explanation: 'Define strict positional data pairs.',
              command: `// Tuple: [HTTP Status Code, Status Message, IsSuccess]
type ApiResponseSummary = [number, string, boolean];

const res1: ApiResponseSummary = [200, "OK", true];
const res2: ApiResponseSummary = [404, "Not Found", false];

// res1[0] is strictly inferred as number
// res1[1] is strictly inferred as string`
            }
          ],
          verification: 'Inspect the return types of tuple indexing in your IDE.',
          expectedResult: 'Clear understanding of arrays vs positional tuples and readonly immutability.',
          summary: 'Use T[] for homogeneous lists and tuples [A, B] for fixed-length positional structures like coordinate pairs and state hooks.'
        },
        {
          id: 'enums-vs-as-const-objects',
          slug: 'enums-vs-as-const-objects',
          order: '4.2',
          title: 'Enums vs "as const" Object Literals',
          subtitle: 'Numeric and String Enums, runtime bundle overhead, and why modern TypeScript teams prefer "as const" object literals in baby steps.',
          chapterId: 'arrays-tuples-enums',
          chapterTitle: '04. Collections, Tuples & Enums',
          levelTitle: 'Level 4: Arrays, Tuples & Enums',
          goal: 'Understand how TypeScript Enums work, their runtime JavaScript output, and compare them to zero-cost "as const" object literals.',
          prerequisites: ['Lesson 4.1 completed.'],
          concept: `### The Great TypeScript Debate: Enums vs "as const"

1. **TypeScript Enums (\`enum UserRole { Admin, User }\`)**:
   - One of the very few TypeScript features that **generates actual JavaScript code at runtime** (an IIFE object).
   - Numeric enums support reverse mapping (\`UserRole[0] === "Admin"\`).

2. **Modern \`as const\` Object Literals (Zero Runtime Overhead)**:
   - Modern enterprise teams frequently prefer plain JS objects with \`as const\` assertions because they are 100% standard JavaScript and produce smaller bundles.`,
          diagram: `flowchart TD
    Choice["Enum vs as const"] --> Opt1["1. enum Role { Admin = 'ADMIN' } (Generates JS runtime IIFE object)"]
    Choice --> Opt2["2. const Role = { Admin: 'ADMIN' } as const (Zero overhead plain JS)"]
    
    style Choice fill:#cfe2ff,stroke:#084298,color:#084298
    style Opt1 fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Opt2 fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: String Enum Example',
              explanation: 'Create a string enum for application status flags.',
              command: `enum OrderStatus {
  Pending = "PENDING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
  Cancelled = "CANCELLED"
}

function updateOrder(id: number, status: OrderStatus) {
  console.log(\`Order \${id} updated to \${status}\`);
}

updateOrder(1042, OrderStatus.Shipped);`
            },
            {
              title: 'Step 2: The Modern "as const" Pattern',
              explanation: 'Derive a union type from a frozen object literal without generating enum code.',
              command: `// 1. Frozen plain JS object
const HttpMethod = {
  Get: "GET",
  Post: "POST",
  Put: "PUT",
  Delete: "DELETE"
} as const;

// 2. Derive type automatically: "GET" | "POST" | "PUT" | "DELETE"
type HttpMethodType = typeof HttpMethod[keyof typeof HttpMethod];

function sendRequest(url: string, method: HttpMethodType) {
  console.log(\`Sending \${method} to \${url}\`);
}

sendRequest("/api/users", HttpMethod.Get); // ✅ Type-safe!`
            }
          ],
          verification: 'Observe how the derived type HttpMethodType restricts parameters to valid HTTP strings with zero runtime overhead.',
          expectedResult: 'Mastery of Enums and modern const assertions.',
          summary: 'Use string enums when you need nominal type groupings, or use "as const" object literals for zero runtime overhead.'
        }
      ]
    }
  ]
};

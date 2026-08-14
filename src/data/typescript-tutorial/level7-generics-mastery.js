// Level 7: Generics Mastery (Functions, Interfaces, Constraints)
export const level7GenericsMastery = {
  id: 'level-7',
  title: 'Level 7: Generics Mastery',
  icon: 'bi-gem',
  color: '#06b6d4',
  description: 'Master generic type parameters (<T>), generic functions, generic interfaces, generic classes, and generic constraints (T extends { id: number }) in baby steps.',
  chapters: [
    {
      id: 'generics-mastery',
      title: '07. Generic Functions, Interfaces & Constraints',
      lessons: [
        {
          id: 'generic-functions-type-parameters',
          slug: 'generic-functions-type-parameters',
          order: '7.1',
          title: 'Generic Functions & Type Parameter <T>',
          subtitle: 'Why any is bad for reusable functions, introducing the type variable <T>, and smart generic inference in baby steps.',
          chapterId: 'generics-mastery',
          chapterTitle: '07. Generic Functions, Interfaces & Constraints',
          levelTitle: 'Level 7: Generics Mastery',
          goal: 'Understand why Generics are the cornerstone of reusable, type-safe TypeScript code without resorting to any.',
          prerequisites: ['Level 6 completed.'],
          concept: `### Why Do We Need Generics?

Imagine writing an identity function that returns whatever value was passed into it:

1. **Using \`any\` (Type Safety Lost)**:
   \`\`\`typescript
   function identity(arg: any): any { return arg; }
   const res = identity("hello"); // Return type is 'any' (Lose autocomplete!)
   \`\`\`

2. **Using a Generic Type Parameter (\`<T>\`)**:
   \`\`\`typescript
   function identity<T>(arg: T): T { return arg; }
   const res = identity("hello"); // Inferred strictly as string!
   \`\`\`

---

### The Mental Model of \`<T>\`
Think of \`<T>\` as a **variable that holds a TYPE instead of a value**. When you call \`identity(42)\`, \`T\` is assigned to the type \`number\`.`,
          diagram: `flowchart LR
    Caller["identity('VinnerTech')"] --> Parameter["Type Variable <T> becomes 'string'"]
    Parameter --> ReturnType["Guarantees return type is strictly 'string'"]
    
    style Caller fill:#cfe2ff,stroke:#084298,color:#084298
    style Parameter fill:#fff3cd,stroke:#ffc107,color:#664d03
    style ReturnType fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Generic Array Helper Function',
              explanation: 'Create a reusable function that grabs the first element of any typed array.',
              command: `function getFirstElement<T>(list: T[]): T | undefined {
  return list[0];
}

const num = getFirstElement([10, 20, 30]);       // Inferred as number | undefined
const str = getFirstElement(["apple", "banana"]); // Inferred as string | undefined

console.log("First number:", num);`
            },
            {
              title: 'Step 2: Multiple Generic Type Parameters (<T, U>)',
              explanation: 'Merge two distinct object types into a combined tuple or object.',
              command: `function createPair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const pair = createPair("User_ID", 101); // Inferred as [string, number]`
            }
          ],
          verification: 'Inspect the return type of `getFirstElement` on arrays of custom interfaces in your editor.',
          expectedResult: 'Reusable generic functions with full type inference.',
          summary: 'Generics allow functions to accept type parameters (<T>), creating reusable abstractions without sacrificing type safety.'
        },
        {
          id: 'generic-interfaces-and-constraints',
          slug: 'generic-interfaces-and-constraints',
          order: '7.2',
          title: 'Generic Interfaces & Constraints (extends)',
          subtitle: 'Reusable API response wrappers, and constraining generic types with T extends { id: string } in baby steps.',
          chapterId: 'generics-mastery',
          chapterTitle: '07. Generic Functions, Interfaces & Constraints',
          levelTitle: 'Level 7: Generics Mastery',
          goal: 'Master generic interface schemas for API responses and use generic constraints to access properties safely.',
          prerequisites: ['Lesson 7.1 completed.'],
          concept: `### 1. Generic Interfaces (The Standard API Wrapper)
In real-world web apps, all backend API responses share common metadata (\`success\`, \`message\`, \`status\`) while the \`data\` payload varies:

\`\`\`typescript
interface ApiResponse<T> {
  data: T;
  success: boolean;
  timestamp: string;
}
\`\`\`

---

### 2. Generic Constraints (\`T extends Constraint\`)
By default, \`<T>\` can be *anything* (a boolean, a function, null). If your generic function needs to access a specific property (like \`.id\` or \`.length\`), you **constrain** it using \`extends\`:

\`\`\`typescript
function printId<T extends { id: number }>(item: T): void {
  console.log("ID is:", item.id); // ✅ Safe! TypeScript knows .id exists.
}
\`\`\``,
          diagram: `flowchart TD
    Constraint["function getEntityId<T extends { id: number }>(entity: T)"] --> V1["Pass { id: 101, name: 'Alice' } -> ✅ Valid!"]
    Constraint --> V2["Pass { name: 'Bob' } -> ❌ Error: Property 'id' is missing!"]
    
    style Constraint fill:#cfe2ff,stroke:#084298,color:#084298
    style V1 fill:#d1e7dd,stroke:#198754,color:#0f5132
    style V2 fill:#f8d7da,stroke:#dc3545,color:#842029`,
          steps: [
            {
              title: 'Step 1: Reusable Generic API Models',
              explanation: 'Wrap different domain entities in a single generic API interface.',
              command: `interface User {
  id: number;
  name: string;
}

interface Product {
  sku: string;
  price: number;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

// 1. User response
type UserResponse = ApiResponse<User>;

// 2. Product list response
type ProductListResponse = ApiResponse<Product[]>;`
            },
            {
              title: 'Step 2: Generic Constraint with keyof',
              explanation: 'Safely read object properties by constraining key names.',
              command: `function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "Sarah", role: "Architect" };

const username = getProperty(user, "name"); // Inferred strictly as string
const userId = getProperty(user, "id");     // Inferred strictly as number

// getProperty(user, "salary"); 
// ❌ Error: Argument of type '"salary"' is not assignable to parameter of type '"id" | "name" | "role"'.`
            }
          ],
          verification: 'Attempt to access non-existent keys in `getProperty` and observe how `K extends keyof T` catches the mistake.',
          expectedResult: 'Mastery of generic interfaces and constrained type parameters.',
          summary: 'Use generic interfaces to model standard API envelopes, and use generic constraints (extends) to guarantee required properties.'
        }
      ]
    }
  ]
};

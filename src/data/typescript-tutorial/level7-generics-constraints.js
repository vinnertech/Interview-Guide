// Level 7: Generics Fundamentals & Generic Constraints (In-Depth Expanded Edition)
export const level7GenericsConstraints = {
  id: 'level-7',
  title: 'Level 7: Generics & Generic Constraints',
  icon: 'bi-bezier2',
  color: '#6366f1',
  description: 'Master generic functions, generic interfaces/types, default type parameters, and generic constraints with "T extends Shape" in baby steps.',
  chapters: [
    {
      id: 'generics-and-constraints',
      title: '07. Generics & Type Constraints',
      lessons: [
        {
          id: 'generic-functions-interfaces-defaults',
          slug: 'generic-functions-interfaces-defaults',
          order: '7.1',
          title: 'Generic Functions, Interfaces & Default Type Parameters',
          subtitle: 'Why any loses type safety, capturing types with type parameters (<T>), generic collections, and defaults (<T = string>) in baby steps.',
          chapterId: 'generics-and-constraints',
          chapterTitle: '07. Generics & Type Constraints',
          levelTitle: 'Level 7: Generics & Generic Constraints',
          goal: 'Master creating reusable, strongly-typed functions and data structures with Generics.',
          prerequisites: ['Level 6 completed.'],
          concept: `### Why do we need Generics?
Without Generics, to write a reusable function that works with any data type, you would have to use \`any\`, which **destroys all type safety and IDE autocomplete**.

Generics allow us to create **Type Variables** (conventionally named \`<T>\`, \`<K>\`, \`<V>\`) that act as placeholders, capturing the exact type passed in at call-time!`,
          diagram: `flowchart LR
    Call["wrapInArray('hello')"] --> Generic["<T>(item: T): T[] captures T = string"]
    Generic --> Output["Returns string[] (Full autocomplete preserved!)"]
    
    style Call fill:#cfe2ff,stroke:#084298,color:#084298
    style Generic fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Output fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Generic Functions & Interfaces',
              explanation: 'Build a typed API response envelope.',
              command: `// Reusable generic API response wrapper:
interface ApiResponse<TData> {
  success: boolean;
  statusCode: number;
  data: TData;
}

interface User {
  id: number;
  name: string;
}

const userRes: ApiResponse<User> = {
  success: true,
  statusCode: 200,
  data: { id: 1, name: "Sarah" }
};

// userRes.data.name is strongly typed as string with autocomplete!`
            }
          ],
          verification: 'Inspect `userRes.data` in your IDE to verify that autocomplete recognizes `id` and `name`.',
          expectedResult: 'Complete mastery of generic type variables and envelopes.',
          summary: 'Generics (<T>) allow writing reusable components while preserving exact type information.'
        },
        {
          id: 'generic-constraints-keyof',
          slug: 'generic-constraints-keyof',
          order: '7.2',
          title: 'Generic Constraints (T extends Shape) & keyof',
          subtitle: 'Restricting generic type arguments using extends and type-safe property lookup with <T, K extends keyof T> in baby steps.',
          chapterId: 'generics-and-constraints',
          chapterTitle: '07. Generics & Type Constraints',
          levelTitle: 'Level 7: Generics & Generic Constraints',
          goal: 'Master restricting generics with constraints and reading object keys safely with keyof.',
          prerequisites: ['Lesson 7.1 completed.'],
          concept: `### Generic Constraints (\`T extends Shape\`)
Sometimes \`<T>\` is too broad (allowing numbers, booleans, or null when we need an object with a \`.length\` property or an \`id\`).

We use **\`extends\`** to enforce that \`T\` must satisfy a minimum structural contract:
\`\`\`typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
\`\`\``,
          diagram: `flowchart TD
    Req["Call: getProperty(user, 'email')"] --> Check["K extends keyof User ('id' | 'name' | 'email')"]
    Check --> Valid["✅ 'email' is a valid key -> Returns user.email as string"]
    ReqBad["Call: getProperty(user, 'password')"] --> Err["❌ Error: Argument 'password' is not assignable to 'id' | 'name' | 'email'"]
    
    style Req fill:#cfe2ff,stroke:#084298,color:#084298
    style Check fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Valid fill:#d1e7dd,stroke:#198754,color:#0f5132
    style ReqBad fill:#f8d7da,stroke:#dc3545,color:#842029
    style Err fill:#f8d7da,stroke:#dc3545,color:#842029`,
          steps: [
            {
              title: 'Step 1: Type-Safe Property Reader with keyof Constraint',
              explanation: 'Prevent typos when reading object keys at compile time.',
              command: `function getProp<T, K extends keyof T>(record: T, key: K): T[K] {
  return record[key];
}

const product = { id: 101, title: "Monitor", price: 350 };

const title = getProp(product, "title"); // Inferred as string
const price = getProp(product, "price"); // Inferred as number

// getProp(product, "nonExistentKey"); 
// ❌ Error: Argument of type '"nonExistentKey"' is not assignable to parameter of type '"id" | "title" | "price"'.`
            }
          ],
          verification: 'Pass an invalid key to `getProp` and verify the compile-time error.',
          expectedResult: 'Deep understanding of generic constraints and keyof lookups.',
          summary: 'Use <T extends Base> to enforce structural contracts on generics and <K extends keyof T> for safe property lookups.'
        }
      ]
    }
  ]
};

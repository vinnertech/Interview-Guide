// Level 8: Advanced Type-Level Programming (keyof, typeof, conditional, mapped, template literals)
export const level8AdvancedTypes = {
  id: 'level-8',
  title: 'Level 8: Advanced Type-Level Programming',
  icon: 'bi-cpu-fill',
  color: '#6366f1',
  description: 'Master advanced type manipulations: keyof, typeof type operator, Indexed Access types, Conditional Types (T extends U ? X : Y), infer, Mapped Types, and Template Literal Types in baby steps.',
  chapters: [
    {
      id: 'advanced-type-system',
      title: '08. Type-Level Computation & Mapped Types',
      lessons: [
        {
          id: 'keyof-typeof-indexed-access-types',
          slug: 'keyof-typeof-indexed-access-types',
          order: '8.1',
          title: 'keyof, typeof Operator & Indexed Access Types',
          subtitle: 'Extracting union property keys with keyof, deriving types from values with typeof, and lookup types with T[K] in baby steps.',
          chapterId: 'advanced-type-system',
          chapterTitle: '08. Type-Level Computation & Mapped Types',
          levelTitle: 'Level 8: Advanced Type-Level Programming',
          goal: 'Master extracting property keys, querying value types, and indexing object properties at the type level.',
          prerequisites: ['Level 7 completed.'],
          concept: `### 1. The \`keyof\` Type Operator
The \`keyof\` operator takes an object type and produces a **union of its string/numeric property names**:
\`\`\`typescript
interface User { id: number; name: string; email: string; }
type UserKeys = keyof User; // "id" | "name" | "email"
\`\`\`

---

### 2. TypeScript \`typeof\` vs JavaScript \`typeof\`
- **JavaScript \`typeof\` (Runtime)**: Returns string runtime types (\`typeof 42 === "number"\`).
- **TypeScript \`typeof\` (Compile-Time)**: Refers to the type of an existing variable or constant value!
\`\`\`typescript
const appConfig = { apiUrl: "/api", retries: 3 };
type ConfigType = typeof appConfig; // { apiUrl: string; retries: number; }
\`\`\`

---

### 3. Indexed Access Types (\`T[K]\`)
Look up the exact property type from another interface:
\`\`\`typescript
type EmailType = User["email"]; // string
\`\`\``,
          diagram: `flowchart TD
    Obj["interface Employee { id: number; name: string; roles: string[] }"] --> K["keyof Employee -> 'id' | 'name' | 'roles'"]
    Obj --> I["Employee['roles'] -> string[]"]
    
    style Obj fill:#cfe2ff,stroke:#084298,color:#084298
    style K fill:#fff3cd,stroke:#ffc107,color:#664d03
    style I fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Combining typeof and keyof for Safe Constants',
              explanation: 'Create an automatic union of valid keys from an existing configuration object.',
              command: `const THEMES = {
  light: "#ffffff",
  dark: "#1e293b",
  midnight: "#0f172a"
} as const;

// 1. Derive type of entire object
type ThemeConfig = typeof THEMES;

// 2. Derive valid theme names: "light" | "dark" | "midnight"
type ThemeName = keyof typeof THEMES;

function applyTheme(theme: ThemeName) {
  console.log("Applying background color:", THEMES[theme]);
}

applyTheme("dark"); // ✅ Valid!`
            }
          ],
          verification: 'Pass an invalid theme name to `applyTheme` and observe TypeScript autocomplete.',
          expectedResult: 'Deep understanding of keyof, typeof, and indexed access lookup types.',
          summary: 'Use keyof to extract property unions, typeof to derive types from existing objects, and T[K] to look up property types.'
        },
        {
          id: 'conditional-infer-mapped-template-literals',
          slug: 'conditional-infer-mapped-template-literals',
          order: '8.2',
          title: 'Conditional Types, infer, Mapped Types & Template Literals',
          subtitle: 'Type branching (T extends U ? X : Y), unpacking types with infer, transforming properties with mapped types, and string template types in baby steps.',
          chapterId: 'advanced-type-system',
          chapterTitle: '08. Type-Level Computation & Mapped Types',
          levelTitle: 'Level 8: Advanced Type-Level Programming',
          goal: 'Understand type-level computations: conditional types, infer unpacking, mapped transformations, and template literal types.',
          prerequisites: ['Lesson 8.1 completed.'],
          concept: `### 1. Conditional Types (\`T extends U ? X : Y\`)
Allows types to branch dynamically depending on a type condition:
\`\`\`typescript
type IsString<T> = T extends string ? true : false;
type A = IsString<"hello">; // true
type B = IsString<123>;     // false
\`\`\`

---

### 2. Type Unpacking with \`infer\`
The \`infer\` keyword introduces a type variable within the conditional check to extract sub-types (like unwrapping Promise values):
\`\`\`typescript
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type ResolvedNumber = UnwrapPromise<Promise<number>>; // number
\`\`\`

---

### 3. Mapped Types & Template Literals:
Transform every property in an existing object, or construct typed event strings:
\`\`\`typescript
type EventName = \`on\${"Click" | "Hover" | "Change"}\`; // "onClick" | "onHover" | "onChange"
\`\`\``,
          diagram: `flowchart LR
    Input["Promise<User>"] --> Condition{"Is T a Promise<infer U>?"}
    Condition -->|Yes| Extract["Unwraps to 'User'"]
    Condition -->|No| Fallback["Returns 'T' as-is"]
    
    style Input fill:#cfe2ff,stroke:#084298,color:#084298
    style Condition fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Extract fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Fallback fill:#e2e3e5,stroke:#41464b,color:#141619`,
          steps: [
            {
              title: 'Step 1: Custom Mapped Type (Making all properties optional/nullable)',
              explanation: 'Iterate over properties using [K in keyof T].',
              command: `interface User {
  id: number;
  name: string;
  email: string;
}

// Custom Mapped Type: Makes all properties nullable
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

type NullableUser = Nullable<User>;
// Result: { id: number | null; name: string | null; email: string | null; }`
            },
            {
              title: 'Step 2: Template Literal Types for API Routes',
              explanation: 'Enforce strict REST API route prefixes.',
              command: `type ApiVersion = "v1" | "v2";
type Resource = "users" | "products" | "orders";

type ApiEndpoint = \`/api/\${ApiVersion}/\${Resource}\`;
// Inferred strictly as: 
// "/api/v1/users" | "/api/v1/products" | "/api/v1/orders" |
// "/api/v2/users" | "/api/v2/products" | "/api/v2/orders"

function fetchResource(endpoint: ApiEndpoint) {
  console.log("Fetching from endpoint:", endpoint);
}

fetchResource("/api/v1/users"); // ✅ Valid!`
            }
          ],
          verification: 'Try calling fetchResource with an invalid URL like `/api/v3/users` and observe the compiler error.',
          expectedResult: 'Advanced understanding of type-level computations and transformations.',
          summary: 'Conditional types, infer, mapped types, and template literals provide powerful type-level computations for advanced libraries and frameworks.'
        }
      ]
    }
  ]
};

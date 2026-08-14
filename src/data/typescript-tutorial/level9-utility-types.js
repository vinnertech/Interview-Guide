// Level 9: Standard Utility Types Deep-Dive
export const level9UtilityTypes = {
  id: 'level-9',
  title: 'Level 9: Standard Utility Types',
  icon: 'bi-tools',
  color: '#eab308',
  description: 'Master built-in TypeScript utility types: Partial, Required, Readonly, Pick, Omit, Record, Exclude, Extract, NonNullable, ReturnType, Parameters, and Awaited in baby steps.',
  chapters: [
    {
      id: 'utility-types-deep-dive',
      title: '09. Built-in Utility Types',
      lessons: [
        {
          id: 'object-transformation-utilities',
          slug: 'object-transformation-utilities',
          order: '9.1',
          title: 'Object Utilities: Partial, Required, Readonly, Pick, Omit & Record',
          subtitle: 'Transforming existing models for PATCH updates, creating immutable views, picking subsets, and dictionary mapping in baby steps.',
          chapterId: 'utility-types-deep-dive',
          chapterTitle: '09. Built-in Utility Types',
          levelTitle: 'Level 9: Standard Utility Types',
          goal: 'Master object manipulation utility types to avoid duplicating interfaces across API layers.',
          prerequisites: ['Level 8 completed.'],
          concept: `### Why Use Utility Types?
Instead of creating 10 separate interfaces for Create, Update, Preview, and Read models of a single Entity, TypeScript provides **Utility Types** to dynamically transform a single base interface!

---

### The 6 Essential Object Utility Types:
1. **\`Partial<T>\`**: Makes **all** properties optional (\`?\`). Ideal for PATCH/update payloads.
2. **\`Required<T>\`**: Makes **all** properties mandatory (strips away \`?\`).
3. **\`Readonly<T>\`**: Freezes **all** properties from reassignment.
4. **\`Pick<T, Keys>\`**: Selects only a subset of properties.
5. **\`Omit<T, Keys>\`**: Removes specific properties (e.g. omit \`id\` for \`CreateUserDTO\`).
6. **\`Record<Keys, ValueType>\`**: Constructs an object type with specified key names and values.`,
          diagram: `flowchart TD
    Base["interface User\n{ id, name, email, role, password }"] --> OmitU["Omit<User, 'id' | 'password'>\n(CreateUserDTO)"]
    Base --> PickU["Pick<User, 'id' | 'name'>\n(UserSummary)"]
    Base --> PartU["Partial<User>\n(UpdateUserDTO)"]
    
    style Base fill:#cfe2ff,stroke:#084298,color:#084298
    style OmitU fill:#d1e7dd,stroke:#198754,color:#0f5132
    style PickU fill:#fff3cd,stroke:#ffc107,color:#664d03
    style PartU fill:#e2e3e5,stroke:#41464b,color:#141619`,
          steps: [
            {
              title: 'Step 1: Pick vs Omit for DTO Models',
              explanation: 'Create DTOs without duplicating property declarations.',
              command: `interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  salary: number;
  status: "active" | "leave";
}

// 1. Create DTO (Client doesn't provide 'id' on insert):
type CreateEmployeeDTO = Omit<Employee, "id">;

// 2. Public Preview (Hide sensitive 'salary'):
type EmployeePreview = Pick<Employee, "id" | "firstName" | "lastName" | "email">;

// 3. Patch Update (All fields optional):
type UpdateEmployeeDTO = Partial<CreateEmployeeDTO>;`
            },
            {
              title: 'Step 2: Record<Keys, ValueType> for Dictionaries',
              explanation: 'Type-safe mappings between union keys and values.',
              command: `type UserRole = "admin" | "editor" | "viewer";

// Ensures EVERY role in UserRole is mapped to an array of permission strings:
const rolePermissions: Record<UserRole, string[]> = {
  admin: ["read", "write", "delete", "manage_users"],
  editor: ["read", "write"],
  viewer: ["read"]
};`
            }
          ],
          verification: 'Try adding an unknown key to `rolePermissions` or omitting a role, and observe TypeScript enforcing complete coverage.',
          expectedResult: 'Clean, DRY type architectures using standard object utility types.',
          summary: 'Use Partial for updates, Pick/Omit for DTO subsets, and Record for type-safe dictionary maps.'
        },
        {
          id: 'function-and-union-utilities',
          slug: 'function-and-union-utilities',
          order: '9.2',
          title: 'Union & Function Utilities: ReturnType, Parameters, Exclude & Awaited',
          subtitle: 'Extracting function return types, parameter tuples, filtering unions with Exclude/Extract, and unwrapping async Promises with Awaited in baby steps.',
          chapterId: 'utility-types-deep-dive',
          chapterTitle: '09. Built-in Utility Types',
          levelTitle: 'Level 9: Standard Utility Types',
          goal: 'Master function introspection and union filtering utilities.',
          prerequisites: ['Lesson 9.1 completed.'],
          concept: `### Introspection & Union Utilities

1. **\`ReturnType<Fn>\`**: Extracts the return type of a function automatically.
2. **\`Parameters<Fn>\`**: Extracts the parameters of a function as a Tuple type.
3. **\`Awaited<T>\`**: Recursively unwraps \`Promise<T>\` types (indispensable for async API services!).
4. **\`Exclude<Union, Members>\`**: Removes specific types from a union.
5. **\`Extract<Union, Members>\`**: Extracts only matching members from a union.
6. **\`NonNullable<T>\`**: Strips away \`null\` and \`undefined\` from a type.`,
          diagram: `flowchart LR
    Union["'read' | 'write' | 'delete'"] --> Ex["Exclude<'delete'>"]
    Ex --> Safe["'read' | 'write'"]
    
    style Union fill:#cfe2ff,stroke:#084298,color:#084298
    style Ex fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Safe fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: ReturnType and Awaited in Async Services',
              explanation: 'Infer data types directly from API client functions.',
              command: `async function fetchUserProfile(userId: number) {
  return {
    id: userId,
    name: "Sarah Connor",
    roles: ["admin", "architect"]
  };
}

// 1. Extracts the Promise type: Promise<{ id: number; name: string; roles: string[]; }>
type ApiPromise = ReturnType<typeof fetchUserProfile>;

// 2. Unwraps the Promise to get the raw payload: { id: number; name: string; roles: string[]; }
type UserProfileData = Awaited<ApiPromise>;`
            },
            {
              title: 'Step 2: Exclude and NonNullable',
              explanation: 'Filter unions cleanly.',
              command: `type EventAction = "click" | "hover" | "scroll" | "drag";
type PassiveEvent = Exclude<EventAction, "click" | "drag">; // "hover" | "scroll"

type RawInput = string | null | undefined;
type CleanInput = NonNullable<RawInput>; // string strictly`
            }
          ],
          verification: 'Inspect `UserProfileData` in your editor to verify that `Awaited<ReturnType<typeof fn>>` correctly extracts the unwrapped payload.',
          expectedResult: 'Advanced proficiency in utility types for functions and async data.',
          summary: 'Use ReturnType and Awaited to infer types from functions, and Exclude/NonNullable to refine unions.'
        }
      ]
    }
  ]
};

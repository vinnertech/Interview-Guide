// Level 8: Utility Types & Type Transformation (In-Depth Expanded Edition)
export const level8UtilityTypes = {
  id: 'level-8',
  title: 'Level 8: Built-in Utility Types',
  icon: 'bi-tools',
  color: '#8b5cf6',
  description: 'Master TypeScript standard utility types: Partial<T>, Required<T>, Readonly<T>, Pick<T, K>, Omit<T, K>, Record<K, T>, Exclude, Extract, NonNullable, ReturnType, and Parameters in baby steps.',
  chapters: [
    {
      id: 'utility-types-transformations',
      title: '08. Built-in Utility Types',
      lessons: [
        {
          id: 'partial-required-pick-omit-record',
          slug: 'partial-required-pick-omit-record',
          order: '8.1',
          title: 'Object Transformation: Partial, Required, Pick, Omit & Record',
          subtitle: 'Mutating property optionality, slicing subsets of interfaces with Pick/Omit, and creating dynamic mapped dictionaries with Record<K, T> in baby steps.',
          chapterId: 'utility-types-transformations',
          chapterTitle: '08. Built-in Utility Types',
          levelTitle: 'Level 8: Built-in Utility Types',
          goal: 'Master manipulating and deriving object shapes using standard TypeScript utility types.',
          prerequisites: ['Level 7 completed.'],
          concept: `### Standard Built-In Object Utility Types:

1. **\`Partial<T>\`**: Makes **all** properties in \`T\` optional (\`?\`). Ideal for \`updateUser(id, partialFields)\`.
2. **\`Required<T>\`**: Makes **all** properties in \`T\` mandatory, stripping any \`?\`.
3. **\`Readonly<T>\`**: Makes **all** properties immutable.
4. **\`Pick<T, Keys>\`**: Constructs a new type by choosing a specific subset of keys from \`T\`.
5. **\`Omit<T, Keys>\`**: Constructs a new type by removing specific keys from \`T\` (e.g. omitting sensitive \`passwordHash\`).
6. **\`Record<Keys, ValueType>\`**: Constructs an object type whose property keys are \`Keys\` and values are \`ValueType\`.`,
          diagram: `flowchart TD
    Base["interface User {\n  id: number;\n  name: string;\n  email: string;\n  passwordHash: string;\n}"] --> Pick["1. Pick<User, 'id' | 'name'>\n-> { id: number; name: string }"]
    Base --> Omit["2. Omit<User, 'passwordHash'>\n-> Safe public user object!"]
    Base --> Partial["3. Partial<User>\n-> All fields optional for PATCH updates"]
    
    style Base fill:#cfe2ff,stroke:#084298,color:#084298
    style Pick fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Omit fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Partial fill:#fff3cd,stroke:#ffc107,color:#664d03`,
          steps: [
            {
              title: 'Step 1: Partial, Pick, and Omit in REST API Handlers',
              explanation: 'Build safe types for User creation, updates, and public displays.',
              command: `interface User {
  id: number;
  name: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
}

// 1. Public user shape (Omit passwordHash)
type PublicUser = Omit<User, "passwordHash">;

// 2. PATCH update payload (All fields optional, omitting id and createdAt)
type UpdateUserDto = Partial<Omit<User, "id" | "createdAt" | "passwordHash">>;

function updateUser(id: number, fields: UpdateUserDto): void {
  console.log(\`Updating user \${id} with:\`, fields);
}

updateUser(1, { name: "Sarah Connor" }); // ✅ Valid PATCH payload`
            },
            {
              title: 'Step 2: Record<Keys, ValueType> for Dynamic Lookup Maps',
              explanation: 'Enforce that every role in a union has an assigned configuration.',
              command: `type UserRole = "admin" | "editor" | "viewer";

interface RolePermission {
  canDelete: boolean;
  canEdit: boolean;
}

// Record forces EVERY role in the union to be defined:
const rolePermissions: Record<UserRole, RolePermission> = {
  admin: { canDelete: true, canEdit: true },
  editor: { canDelete: false, canEdit: true },
  viewer: { canDelete: false, canEdit: false }
};`
            }
          ],
          verification: 'Try omitting a role from the Record object and observe TypeScript requiring all keys.',
          expectedResult: 'Mastery of object utility type transformations.',
          summary: 'Use Partial for updates, Omit for sanitizing sensitive fields, Pick for extracting subsets, and Record for complete key-value mappings.'
        }
      ]
    }
  ]
};

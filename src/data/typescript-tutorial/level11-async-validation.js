// Level 11: Asynchronous TypeScript & Runtime Validation
export const level11AsyncValidation = {
  id: 'level-11',
  title: 'Level 11: Async TypeScript & Runtime Validation',
  icon: 'bi-cloud-arrow-down-fill',
  color: '#0284c7',
  description: 'Master typing Promises (Promise<T>), async/await, safe error handling with unknown errors, and the critical distinction between compile-time types vs runtime JSON validation in baby steps.',
  chapters: [
    {
      id: 'async-and-validation',
      title: '11. Async TypeScript & Runtime Validation',
      lessons: [
        {
          id: 'typing-promises-async-await-errors',
          slug: 'typing-promises-async-await-errors',
          order: '11.1',
          title: 'Typing Promises, async/await & Safe Error Handling',
          subtitle: 'Explicit Promise<T> return types, handling unknown catch errors, and custom typed error classes in baby steps.',
          chapterId: 'async-and-validation',
          chapterTitle: '11. Async TypeScript & Runtime Validation',
          levelTitle: 'Level 11: Async TypeScript & Runtime Validation',
          goal: 'Master typing asynchronous functions and safely handle catch clause errors without using any.',
          prerequisites: ['Level 10 completed.'],
          concept: `### 1. Typing Asynchronous Functions

Every \`async\` function **always** returns a \`Promise<T>\`:

\`\`\`typescript
async function fetchUserCount(): Promise<number> {
  return 42; // TypeScript wraps the return value in Promise.resolve()
}
\`\`\`

---

### 2. The Catch Clause Trap: Why \`catch (error)\` is \`unknown\`!
In TypeScript, the catch variable in a \`try/catch\` block is typed as **\`unknown\`** (or \`any\` in legacy mode). 
You **cannot** assume \`error.message\` exists because JavaScript allows throwing *anything* (e.g. \`throw "Server crashed!"\` or \`throw 500\`).

\`\`\`typescript
try {
  await performAction();
} catch (err: unknown) {
  if (err instanceof Error) {
    console.error("Standard error message:", err.message);
  } else {
    console.error("Unknown error caught:", String(err));
  }
}
\`\`\``,
          diagram: `flowchart TD
    Try["try { await api.call() }"] --> Catch["catch (error: unknown)"]
    Catch --> Check{"Is error instanceof Error?"}
    Check -->|Yes| SafeMsg["Safe to read error.message & error.stack"]
    Check -->|No| Fallback["Convert unknown value to string: String(error)"]
    
    style Try fill:#cfe2ff,stroke:#084298,color:#084298
    style Catch fill:#fff3cd,stroke:#ffc107,color:#664d03
    style SafeMsg fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Fallback fill:#e2e3e5,stroke:#41464b,color:#141619`,
          steps: [
            {
              title: 'Step 1: Custom Typed Application Error Class',
              explanation: 'Create strongly-typed errors with HTTP status codes.',
              command: `class AppApiError extends Error {
  constructor(
    public readonly statusCode: number,
    message: string,
    public readonly errorCode?: string
  ) {
    super(message);
    this.name = "AppApiError";
    Object.setPrototypeOf(this, AppApiError.prototype);
  }
}

async function loadData(id: string): Promise<{ data: string }> {
  if (!id) {
    throw new AppApiError(400, "Invalid ID provided", "ERR_INVALID_ID");
  }
  return { data: "Success" };
}`
            }
          ],
          verification: 'Trigger an error in a try/catch block and verify how `instanceof` safely narrows the error type.',
          expectedResult: 'Type-safe asynchronous pipelines with bulletproof error handling.',
          summary: 'Async functions return Promise<T>. Always treat catch errors as unknown and narrow them using instanceof Error.'
        },
        {
          id: 'compile-time-types-vs-runtime-validation',
          slug: 'compile-time-types-vs-runtime-validation',
          order: '11.2',
          title: 'Compile-Time Types vs Runtime JSON Validation',
          subtitle: 'Why TypeScript does NOT validate runtime API responses, and how runtime validation schemas (Zod concept) protect your frontend in baby steps.',
          chapterId: 'async-and-validation',
          chapterTitle: '11. Async TypeScript & Runtime Validation',
          levelTitle: 'Level 11: Async TypeScript & Runtime Validation',
          goal: 'Understand why TypeScript types disappear at runtime and why external API responses require runtime validation.',
          prerequisites: ['Lesson 11.1 completed.'],
          concept: `### The Most Common TypeScript Misconception:
> ❌ **False Belief**: *"I declared \`interface User { id: number; email: string }\` so TypeScript will guarantee my backend API returns a number and an email!"*

**Truth**: TypeScript types are **completely erased** during compilation. When your frontend calls \`fetch("/api/users")\`, the browser receives raw untyped JSON at runtime. If the backend sends \`{ id: "wrong_string", email: null }\`, TypeScript will **NOT** throw an error — your app will crash when calling \`.toUpperCase()\`!

---

### The Production Data Flow Pattern:
\`\`\`text
External API JSON  --->  unknown Data  --->  Runtime Validation Schema  --->  Trusted Typed Domain Model
 (Untrusted Network)                          (e.g. Zod / manual validator)      (100% Guaranteed Safe!)
\`\`\``,
          diagram: `flowchart LR
    API["API JSON (Untrusted)"] --> Raw["const data: unknown = await res.json();"]
    Raw --> Validator["Runtime Schema Validation (isUser / Zod.parse)"]
    Validator -->|Valid| App["Safe Application Model (interface User)"]
    Validator -->|Invalid| Error["Catch Schema Error Early before UI crash"]
    
    style API fill:#cfe2ff,stroke:#084298,color:#084298
    style Raw fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Validator fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style App fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Error fill:#f8d7da,stroke:#dc3545,color:#842029`,
          steps: [
            {
              title: 'Step 1: Pure TypeScript Runtime Validator Function',
              explanation: 'Validate unknown API responses before trusting them.',
              command: `interface User {
  id: number;
  name: string;
  email: string;
}

// Runtime Type Guard Validator
function validateUser(data: unknown): data is User {
  if (typeof data !== "object" || data === null) return false;
  const obj = data as Record<string, unknown>;
  return (
    typeof obj.id === "number" &&
    typeof obj.name === "string" &&
    typeof obj.email === "string" &&
    obj.email.includes("@")
  );
}

async function fetchUserSafe(userId: number): Promise<User> {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`);
  const rawJson: unknown = await res.json();

  if (!validateUser(rawJson)) {
    throw new Error("API Contract Violation: Backend returned invalid user payload");
  }

  // Guaranteed 100% type-safe at runtime!
  return rawJson;
}`
            }
          ],
          verification: 'Simulate an invalid API payload and observe how the validator catches the schema mismatch before UI rendering.',
          expectedResult: 'Clear understanding of compile-time types vs runtime data validation.',
          summary: 'TypeScript checks types at compile-time, but cannot validate runtime network payloads. Use runtime validators to protect your application.'
        }
      ]
    }
  ]
};

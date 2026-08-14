// Level 3: Operators, Coercion & Control Flow (In-Depth Expanded Edition)
export const level3OperatorsControlFlow = {
  id: 'level-3',
  title: 'Level 3: Operators & Control Flow',
  icon: 'bi-signpost-split-fill',
  color: '#8b5cf6',
  description: 'Master strict equality (=== vs == vs Object.is), implicit type coercion, short-circuit evaluation, nullish coalescing (??), optional chaining (?.), loops, and error handling in baby steps.',
  chapters: [
    {
      id: 'operators-and-control-flow',
      title: '03. Operators, Coercion & Control Flow',
      lessons: [
        {
          id: 'equality-coercion-logical-operators',
          slug: 'equality-coercion-logical-operators',
          order: '3.1',
          title: 'Equality (=== vs ==), Type Coercion & Nullish Coalescing (??)',
          subtitle: 'Why loose equality creates production bugs, truthy/falsy values, short-circuit evaluation, and optional chaining (?.) in baby steps.',
          chapterId: 'operators-and-control-flow',
          chapterTitle: '03. Operators, Coercion & Control Flow',
          levelTitle: 'Level 3: Operators & Control Flow',
          goal: 'Master strict equality comparisons, avoid dangerous implicit type coercion bugs, and use modern operators like ?? and ?.',
          prerequisites: ['Level 2 completed.'],
          concept: `### 1. Strict Equality (\`===\`) vs Loose Equality (\`==\`)

In JavaScript, there are two equality comparison operators:

- **Strict Equality (\`===\`) [MANDATORY IN ENTERPRISE CODE]**:
  Compares both **Value AND Type**. If the types do not match, it immediately returns \`false\` without performing type conversion.
  \`\`\`javascript
  5 === "5"  // false (Number vs String)
  0 === false // false (Number vs Boolean)
  \`\`\`

- **Loose Equality (\`==\`) [DANGEROUS / AVOID]**:
  Attempts to convert both operands to a common type via **Implicit Coercion** before comparing. This produces catastrophic edge-case bugs:
  \`\`\`javascript
  0 == ""       // true!
  0 == "0"      // true!
  false == "0"  // true!
  null == undefined // true!
  [] == false   // true!
  \`\`\`

---

### 2. The 8 Falsy Values in JavaScript:
When evaluated in a boolean context (\`if (val)\`), only these **8 values evaluate to \`false\`**:
1. \`false\`
2. \`0\` and \`-0\`
3. \`0n\` (BigInt zero)
4. \`""\` (Empty string)
5. \`null\`
6. \`undefined\`
7. \`NaN\` (Not-a-Number)
8. \`document.all\`

*Everything else in JavaScript is TRUTHY (including \`[]\`, \`{}\`, and \`"0"\`!)*

---

### 3. Modern Safe Operators: \`??\` vs \`||\` and \`?.\`
- **Logical OR (\`||\`)**: Returns the right-hand value if the left side is **ANY falsy value** (e.g. \`0 || 10\` returns \`10\` — which breaks legitimate zero quantities!).
- **Nullish Coalescing (\`??\`)**: Returns the right-hand value **ONLY if the left side is strictly \`null\` or \`undefined\`** (preserves \`0\` and \`""\`!).
- **Optional Chaining (\`?.\`)**: Safely navigates deeply nested properties without throwing \`Cannot read property of undefined\`.`,
          diagram: `flowchart TD
    Check["Evaluating: user?.settings?.volume ?? 50"] --> P1{"Does user exist?"}
    P1 -->|No| Fallback["Returns 50 (No crash!)"]
    P1 -->|Yes| P2{"Does settings exist?"}
    P2 -->|No| Fallback
    P2 -->|Yes| P3{"Is volume null or undefined?"}
    P3 -->|Yes| Fallback
    P3 -->|No (e.g. volume is 0)| KeepZero["Returns 0 (Preserved!)"]
    
    style Check fill:#cfe2ff,stroke:#084298,color:#084298
    style P1 fill:#fff3cd,stroke:#ffc107,color:#664d03
    style P2 fill:#fff3cd,stroke:#ffc107,color:#664d03
    style P3 fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Fallback fill:#d1e7dd,stroke:#198754,color:#0f5132
    style KeepZero fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Strict Equality vs Loose Coercion Pitfalls',
              explanation: 'Observe why enterprise lint rules forbid loose equality `==`.',
              command: `// ❌ Loose Equality (Implicit Type Coercion Hazards):
console.log(0 == "");        // true (Unexpected!)
console.log([] == false);    // true (Unexpected!)

// ✅ Strict Equality (Safe & Predictable):
console.log(0 === "");       // false
console.log([] === false);   // false`
            },
            {
              title: 'Step 2: Nullish Coalescing (??) vs Logical OR (||)',
              explanation: 'Avoid the common bug where quantity 0 or empty string gets replaced by fallback.',
              command: `const userCart = {
  itemCount: 0, // Valid count of 0 items in cart!
  customMessage: ""
};

// ❌ Bug with Logical OR || (Treats 0 as falsy and overwrites it):
const countWithOR = userCart.itemCount || 10;
console.log("Count with ||:", countWithOR); // Output: 10 (BUG: Overwrote legitimate 0!)

// ✅ Correct with Nullish Coalescing ?? (Only falls back on null/undefined):
const countWithNullish = userCart.itemCount ?? 10;
console.log("Count with ??:", countWithNullish); // Output: 0 (CORRECT!)`
            },
            {
              title: 'Step 3: Safe Navigation with Optional Chaining (?.)',
              explanation: 'Prevent fatal runtime errors when reading optional nested objects.',
              command: `const apiResponse = {
  data: {
    user: {
      profile: null // Profile is not configured yet
    }
  }
};

// ❌ Traditional unsafe access crashes the app:
// console.log(apiResponse.data.user.profile.bio); // TypeError: Cannot read property 'bio' of null!

// ✅ Safe navigation with optional chaining:
const userBio = apiResponse.data?.user?.profile?.bio ?? "No bio available";
console.log("User Bio:", userBio); // Output: "No bio available"`
            }
          ],
          verification: 'Run these snippets in your browser console and compare the outputs of `||` vs `??` when testing with 0 and empty strings.',
          expectedResult: 'Clear understanding of strict equality, falsy values, nullish coalescing, and optional chaining.',
          commonMistakes: [
            {
              problem: 'Using `||` for default settings where `0` or `false` are valid user choices.',
              why: '`||` treats `0`, `false`, and `""` as falsy, unintentionally replacing valid user inputs with default values.',
              fix: 'Always use `??` (Nullish Coalescing) when setting default values.'
            }
          ],
          exercise: {
            title: 'Safely Read Nested User Preferences',
            description: 'Given `const user = { preferences: { notifications: { email: false } } }`, extract the email notification preference using `?.` and `??` with a default of `true`.',
            hint: 'Use `user?.preferences?.notifications?.email ?? true`.',
            solution: `const user = { preferences: { notifications: { email: false } } };
const emailPref = user?.preferences?.notifications?.email ?? true;

console.log("Email Notification Enabled:", emailPref); // Output: false (Preserved user choice!)`
          },
          quiz: {
            question: 'What is the output of `0 ?? 100` versus `0 || 100`?',
            options: [
              '0 and 0',
              '0 and 100',
              '100 and 0',
              '100 and 100'
            ],
            correctIndex: 1,
            explanation: '?? only triggers on null or undefined, so 0 ?? 100 evaluates to 0. || triggers on any falsy value, so 0 || 100 evaluates to 100.'
          },
          summary: 'Always use === for comparisons. Use ?? for default values to preserve 0 and false, and use ?. for safe nested object navigation.'
        }
      ]
    }
  ]
};

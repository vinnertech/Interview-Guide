// Level 6: Objects & Immutability Patterns (In-Depth Expanded Edition)
export const level6ObjectsImmutability = {
  id: 'level-6',
  title: 'Level 6: Objects & Immutability',
  icon: 'bi-boxes',
  color: '#ec4899',
  description: 'Master object literal syntax, destructuring, the spread operator ({ ...obj }), structuredClone, and JSON serialization in baby steps.',
  chapters: [
    {
      id: 'objects-and-immutability',
      title: '06. Objects, Memory & Immutability',
      lessons: [
        {
          id: 'objects-destructuring-spread-cloning',
          slug: 'objects-destructuring-spread-cloning',
          order: '6.1',
          title: 'Objects: Destructuring, Spread ({...obj}) & Deep Cloning',
          subtitle: 'Property shorthand, dynamic keys, shallow copy with spread vs deep copy with structuredClone, and JSON parsing in baby steps.',
          chapterId: 'objects-and-immutability',
          chapterTitle: '06. Objects, Memory & Immutability',
          levelTitle: 'Level 6: Objects & Immutability',
          goal: 'Master object manipulation, destructuring with aliases/defaults, and safe shallow vs deep cloning.',
          prerequisites: ['Level 5 completed.'],
          concept: `### 1. Object Destructuring with Aliases & Default Values
Destructuring allows extracting properties from objects into individual variables with optional renames and fallbacks:
\`\`\`javascript
const user = { firstName: "Sarah", role: "admin" };
const { firstName: name, role, department = "Engineering" } = user;
\`\`\`

---

### 2. Shallow Copy (\`{ ...spread }\`) vs Deep Copy (\`structuredClone\`)
- **Shallow Copy (\`{ ...user }\` or \`Object.assign\`)**: Creates a new top-level object, but **nested inner objects and arrays still share the exact same memory pointer**!
- **Deep Copy (\`structuredClone(user)\`)**: Native modern JavaScript method that recursively clones the entire object tree in heap memory without shared references.`,
          diagram: `flowchart TD
    Original["Original: { id: 1, config: { theme: 'dark' } }"] --> Spread["1. Shallow Copy: const copy = { ...Original }"]
    Spread --> ShallowRisk["⚠️ Mutating copy.config.theme = 'light' ALSO MUTATES Original.config!"]
    Original --> Deep["2. Deep Copy: const deep = structuredClone(Original)"]
    Deep --> DeepSafe["✅ Mutating deep.config has ZERO effect on Original!"]
    
    style Original fill:#cfe2ff,stroke:#084298,color:#084298
    style Spread fill:#fff3cd,stroke:#ffc107,color:#664d03
    style ShallowRisk fill:#f8d7da,stroke:#dc3545,color:#842029
    style Deep fill:#d1e7dd,stroke:#198754,color:#0f5132
    style DeepSafe fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Immutable State Updates with Spread ({ ...state })',
              explanation: 'Update nested properties without mutating original state.',
              command: `const initialProfile = {
  id: 101,
  username: "vinner_dev",
  stats: {
    followers: 1200,
    likes: 8500
  }
};

// Update followers immutably using nested spread:
const updatedProfile = {
  ...initialProfile,
  stats: {
    ...initialProfile.stats,
    followers: initialProfile.stats.followers + 1
  }
};

console.log("Original Followers:", initialProfile.stats.followers); // 1200 (Unchanged!)
console.log("Updated Followers:", updatedProfile.stats.followers);   // 1201`
            },
            {
              title: 'Step 2: Deep Cloning with structuredClone',
              explanation: 'Completely isolate complex nested configurations.',
              command: `const complexSettings = {
  database: {
    host: "localhost",
    credentials: { user: "admin", port: 5432 }
  }
};

const isolatedClone = structuredClone(complexSettings);
isolatedClone.database.credentials.port = 9000;

console.log("Original Port:", complexSettings.database.credentials.port); // 5432 (100% Isolated!)
console.log("Clone Port:", isolatedClone.database.credentials.port);       // 9000`
            }
          ],
          verification: 'Run the structuredClone example in your browser console to verify that the nested port in the original object remains 5432.',
          expectedResult: 'Mastery of immutable object updates, spread syntax, and deep cloning.',
          summary: 'Use spread ({ ...obj }) for shallow updates and structuredClone() when complete recursive isolation of nested data is required.'
        }
      ]
    }
  ]
};

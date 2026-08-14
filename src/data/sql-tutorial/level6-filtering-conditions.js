// Level 6: Filtering & Logical Conditions (In-Depth Expanded Edition)
export const level6FilteringConditions = {
  id: 'level-6',
  title: 'Level 6: Filtering & Logical Conditions',
  icon: 'bi-funnel-fill',
  color: '#8b5cf6',
  description: 'Master WHERE filtering, comparison operators, boolean logic (AND, OR, NOT), IN lists, BETWEEN ranges, LIKE pattern matching with wildcards (%, _), and operator precedence in baby steps.',
  chapters: [
    {
      id: 'filtering-and-conditions',
      title: '06. Filtering & Logical Conditions',
      lessons: [
        {
          id: 'where-and-or-not-in-between-like',
          slug: 'where-and-or-not-in-between-like',
          order: '6.1',
          title: 'Mastering WHERE: Logical Operators, IN, BETWEEN & LIKE Wildcards',
          subtitle: 'Filtering table rows: Comparison operators, operator precedence (AND before OR), range checking with BETWEEN, IN lists, and LIKE patterns with % and _ in baby steps.',
          chapterId: 'filtering-and-conditions',
          chapterTitle: '06. Filtering & Logical Conditions',
          levelTitle: 'Level 6: Filtering & Logical Conditions',
          goal: 'Master building complex, precise query filters using boolean logic, range bounds, and string pattern wildcards.',
          prerequisites: ['Level 5 completed.'],
          concept: `### The Logical Execution Order of a Query:
When SQL Server processes a query:
\`\`\`text
1. FROM    <- Selects the source table
2. WHERE   <- Evaluates filter predicates row-by-row
3. SELECT  <- Projects the requested output columns
4. ORDER BY<- Sorts the final result set
\`\`\`
Notice that **\`WHERE\` executes BEFORE \`SELECT\`**! This is why you cannot use column aliases created in \`SELECT\` inside your \`WHERE\` clause.

---

### Operator Precedence (AND has higher priority than OR!):
\`\`\`sql
-- ⚠️ Without parentheses, AND executes first:
WHERE DepartmentId = 1 OR DepartmentId = 2 AND Salary > 90000;
-- Is evaluated by SQL Server as:
WHERE DepartmentId = 1 OR (DepartmentId = 2 AND Salary > 90000);

-- ✅ ALWAYS use explicit parentheses to prevent business logic bugs!
WHERE (DepartmentId = 1 OR DepartmentId = 2) AND Salary > 90000;
\`\`\`

---

### Pattern Matching with LIKE Wildcards:
- **\`%\`**: Matches zero, one, or multiple characters (\`LIKE N'A%'\` -> starts with A; \`LIKE N'%tech.com'\` -> ends with tech.com).
- **\`_\`**: Matches exactly one single character (\`LIKE N'J_ne'\` -> matches Jane, June).
- **\`[a-z]\`**: Matches any single character within a specified range.`,
          diagram: `flowchart TD
    Rows["All Table Rows (e.g. 10,000 Employees)"] --> Filter["WHERE (DeptId IN (1, 2) AND Salary BETWEEN 80000 AND 120000)"]
    Filter --> Match{"Does row satisfy boolean condition?"}
    Match -->|Yes| Keep["Retained in Result Set (350 rows)"]
    Match -->|No| Discard["Discarded by SQL Filter Engine"]
    
    style Rows fill:#cfe2ff,stroke:#084298,color:#084298
    style Filter fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Match fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Keep fill:#10b981,color:#fff
    style Discard fill:#f8d7da,stroke:#dc3545,color:#842029`,
          steps: [
            {
              title: 'Step 1: Complex Multi-Condition Queries',
              explanation: 'Combine IN, BETWEEN, and LIKE wildcards.',
              command: `-- Find active employees in Engineering or Product with salary between $80k and $120k whose email ends in vinnertech.com:
SELECT 
    EmployeeId,
    FirstName,
    LastName,
    Email,
    Salary,
    DepartmentId
FROM dbo.Employees
WHERE 
    Status = N'Active'
    AND DepartmentId IN (1, 2)
    AND Salary BETWEEN 80000.00 AND 120000.00
    AND Email LIKE N'%@vinnertech.com';`
            }
          ],
          verification: 'Execute the query and observe how only rows matching all combined boolean predicates are returned.',
          expectedResult: 'High-precision data retrieval using robust SQL filters.',
          summary: 'Use WHERE with explicit parentheses, IN lists, BETWEEN ranges, and LIKE wildcards to filter rows precisely.'
        }
      ]
    }
  ]
};

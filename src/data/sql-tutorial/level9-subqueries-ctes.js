// Level 9: Subqueries, Set Operators & CTEs (In-Depth Expanded Edition)
export const level9SubqueriesCtes = {
  id: 'level-9',
  title: 'Level 9: Subqueries, Set Operators & CTEs',
  icon: 'bi-diagram-2-fill',
  color: '#8b5cf6',
  description: 'Master scalar & multi-row subqueries, correlated subqueries with EXISTS / NOT EXISTS, set operators (UNION, UNION ALL, INTERSECT, EXCEPT), and Common Table Expressions (CTEs) including recursive hierarchies in baby steps.',
  chapters: [
    {
      id: 'subqueries-set-and-ctes',
      title: '09. Subqueries, Sets & Common Table Expressions',
      lessons: [
        {
          id: 'subqueries-and-exists-operators',
          slug: 'subqueries-and-exists-operators',
          order: '9.1',
          title: 'Subqueries: Scalar, Multi-Row, Correlated & EXISTS',
          subtitle: 'Nested queries in WHERE and SELECT, correlated subqueries that execute per outer row, and why EXISTS is faster than IN for subquery validation in baby steps.',
          chapterId: 'subqueries-set-and-ctes',
          chapterTitle: '09. Subqueries, Sets & Common Table Expressions',
          levelTitle: 'Level 9: Subqueries, Set Operators & CTEs',
          goal: 'Master writing scalar subqueries, comparing list values with IN, and leveraging high-performance EXISTS / NOT EXISTS checks.',
          prerequisites: ['Level 8 completed.'],
          concept: `### What is a Subquery?
A **Subquery (Inner Query)** is a \`SELECT\` query nested inside another outer SQL statement (\`SELECT\`, \`INSERT\`, \`UPDATE\`, \`DELETE\`).

---

### The 3 Types of Subqueries:
1. **Scalar Subquery**: Returns **exactly ONE single value (1 row, 1 column)**. Can be used in \`SELECT\` or \`WHERE\` comparisons (e.g. \`WHERE Salary > (SELECT AVG(Salary) FROM dbo.Employees)\`).
2. **Multi-Row Subquery**: Returns a list of values (e.g. \`WHERE DepartmentId IN (SELECT DepartmentId FROM dbo.Departments WHERE ...)\`).
3. **Correlated Subquery**: References columns from the **outer query**, executing dynamically for every single row evaluated by the outer query!

---

### Why \`EXISTS\` Beats \`IN\` for Subqueries:
When checking if related records exist:
- **\`IN\`**: Must scan and load all matching inner values into memory before evaluating.
- **\`EXISTS\`**: Stops scanning as soon as the **very first matching record** is found (early exit optimization) and handles \`NULL\` safely without unexpected truth failures!`,
          diagram: `flowchart TD
    Outer["Outer Query: Employees Table"] --> Row["Evaluates Employee #1 (DeptId = 1)"]
    Row --> Exists{"EXISTS (SELECT 1 FROM HighBudgetDepts WHERE DeptId = 1)"}
    Exists -->|Found First Match!| FastReturn["⚡ Instant Early Exit: Returns TRUE!"]
    FastReturn --> Keep["Retains Employee #1 in Result Set"]
    
    style Outer fill:#cfe2ff,stroke:#084298,color:#084298
    style Row fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Exists fill:#fff3cd,stroke:#ffc107,color:#664d03
    style FastReturn fill:#10b981,color:#fff
    style Keep fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Finding Employees Paid Above Their Own Department Average',
              explanation: 'Use a correlated subquery.',
              command: `-- Correlated subquery: calculates average salary for each employee's specific department:
SELECT 
    e.EmployeeId,
    e.FirstName,
    e.LastName,
    e.Salary,
    e.DepartmentId
FROM dbo.Employees AS e
WHERE e.Salary > (
    SELECT AVG(d_emp.Salary)
    FROM dbo.Employees AS d_emp
    WHERE d_emp.DepartmentId = e.DepartmentId
);`
            },
            {
              title: 'Step 2: High-Performance NOT EXISTS Query',
              explanation: 'Find all departments that currently have zero assigned employees.',
              command: `-- Find empty departments using NOT EXISTS:
SELECT 
    d.DepartmentId,
    d.DepartmentName
FROM dbo.Departments AS d
WHERE NOT EXISTS (
    SELECT 1 
    FROM dbo.Employees AS e 
    WHERE e.DepartmentId = d.DepartmentId
);`
            }
          ],
          verification: 'Run both subqueries and inspect the output: verify accurate correlated calculations and early-exit matching.',
          expectedResult: 'Advanced query nesting and optimal existence verification.',
          summary: 'Use scalar subqueries for single-value comparisons, and prefer EXISTS / NOT EXISTS over IN for optimal execution plan performance.'
        },
        {
          id: 'common-table-expressions-and-recursion',
          slug: 'common-table-expressions-and-recursion',
          order: '9.2',
          title: 'Common Table Expressions (CTEs) & Recursive Hierarchies',
          subtitle: 'What is a CTE with WITH?, CTE vs subqueries, chaining multiple CTEs, and solving organizational tree hierarchies with Recursive CTEs in baby steps.',
          chapterId: 'subqueries-set-and-ctes',
          chapterTitle: '09. Subqueries, Sets & Common Table Expressions',
          levelTitle: 'Level 9: Subqueries, Set Operators & CTEs',
          goal: 'Master Common Table Expressions (WITH cte AS (...)) to make complex multi-step queries clean, readable, and capable of traversing recursive parent-child tree hierarchies.',
          prerequisites: ['Lesson 9.1 completed.'],
          concept: `### What is a Common Table Expression (CTE)?
A **CTE** is a named, temporary result set defined using the **\`WITH\`** clause that exists strictly for the scope of a single subsequent query.

---

### Why CTEs are Superior to Deeply Nested Subqueries:
1. **Readability & Maintainability**: Breaks down complex 200-line multi-join calculations into sequential, human-readable steps.
2. **Reusable in the Same Query**: You can reference the CTE multiple times in the main query.
3. **Recursive Queries**: CTEs can reference themselves to traverse organizational reporting trees, bill-of-materials, or category taxonomies without procedural loops!`,
          diagram: `flowchart TD
    Anchor["1. Anchor Member: Finds Root CEO (ManagerId IS NULL, Level = 1)"] --> Recurse["2. Recursive Member: Joins Employee.ManagerId to Previous Level"]
    Recurse --> Level2["Finds VPs (Level = 2)"]
    Level2 --> Level3["Finds Directors (Level = 3)"]
    Level3 --> Level4["Finds Engineers & Leads (Level = 4)"]
    Level4 --> Complete["3. Termination: Completes full tree hierarchy!"]
    
    style Anchor fill:#cfe2ff,stroke:#084298,color:#084298
    style Recurse fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Level2 fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Level3 fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Level4 fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Complete fill:#10b981,color:#fff`,
          steps: [
            {
              title: 'Step 1: Standard Multi-Step CTE Chaining',
              explanation: 'Calculate department payroll averages and filter top departments cleanly.',
              command: `WITH DeptPayroll AS (
    SELECT 
        DepartmentId,
        COUNT(*) AS EmployeeCount,
        SUM(Salary) AS TotalBudget
    FROM dbo.Employees
    WHERE Status = N'Active'
    GROUP BY DepartmentId
),
HighBudgetDepts AS (
    SELECT 
        DepartmentId,
        TotalBudget
    FROM DeptPayroll
    WHERE TotalBudget > 200000.00
)
SELECT 
    d.DepartmentName,
    hb.TotalBudget
FROM HighBudgetDepts AS hb
INNER JOIN dbo.Departments AS d
    ON d.DepartmentId = hb.DepartmentId;`
            },
            {
              title: 'Step 2: Recursive CTE for Organizational Tree Hierarchy',
              explanation: 'Traverse an organization chart from CEO down to engineers.',
              command: `WITH OrgHierarchy_CTE AS (
    -- 1. Anchor Member: Top-level executive (CEO):
    SELECT 
        EmployeeId,
        FirstName + N' ' + LastName AS EmployeeName,
        ManagerId,
        1 AS OrgLevel
    FROM dbo.Employees
    WHERE ManagerId IS NULL

    UNION ALL

    -- 2. Recursive Member: Joins subordinates to their managers:
    SELECT 
        e.EmployeeId,
        e.FirstName + N' ' + e.LastName AS EmployeeName,
        e.ManagerId,
        h.OrgLevel + 1 AS OrgLevel
    FROM dbo.Employees AS e
    INNER JOIN OrgHierarchy_CTE AS h
        ON e.ManagerId = h.EmployeeId
)
SELECT 
    OrgLevel,
    REPLICATE(N'   ', OrgLevel - 1) + EmployeeName AS HierarchyTree,
    EmployeeId,
    ManagerId
FROM OrgHierarchy_CTE
ORDER BY OrgLevel, EmployeeId;`
            }
          ],
          verification: 'Run the recursive CTE and observe how each level of the tree hierarchy is calculated and indented.',
          expectedResult: 'Clean, hierarchical traversal without procedural cursor loops.',
          summary: 'Use Common Table Expressions (WITH cte AS (...)) to make complex SQL clean and readable, and Recursive CTEs to traverse hierarchy trees effortlessly.'
        }
      ]
    }
  ]
};

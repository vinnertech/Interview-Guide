// Level 8: Table Joins & Relationships (In-Depth Expanded Edition)
export const level8JoinsRelationships = {
  id: 'level-8',
  title: 'Level 8: Table Joins & Relationships',
  icon: 'bi-intersect',
  color: '#0284c7',
  description: 'Master INNER JOIN, LEFT OUTER JOIN, RIGHT OUTER JOIN, FULL OUTER JOIN, CROSS JOIN, self joins, multi-table joins, and preventing Cartesian product disasters in baby steps.',
  chapters: [
    {
      id: 'joins-and-relationships',
      title: '08. Multi-Table Joins & Relational Queries',
      lessons: [
        {
          id: 'inner-left-right-full-joins',
          slug: 'inner-left-right-full-joins',
          order: '8.1',
          title: 'Mastering JOINs: INNER, LEFT, RIGHT, FULL & Self Joins',
          subtitle: 'Why relationships matter, matching keys with ON, why LEFT JOIN preserves non-matching parent rows, finding unmatched records, and avoiding Cartesian explosive joins in baby steps.',
          chapterId: 'joins-and-relationships',
          chapterTitle: '08. Multi-Table Joins & Relational Queries',
          levelTitle: 'Level 8: Table Joins & Relationships',
          goal: 'Master combining data across normalized relational tables using all join types and knowing exactly when to choose each.',
          prerequisites: ['Level 7 completed.'],
          concept: `### The Core Join Types Explained:

1. **\`INNER JOIN\`**: Returns **ONLY matching rows** present in BOTH tables. (If an employee has no department or a department has no employees, they are excluded!).
2. **\`LEFT OUTER JOIN (LEFT JOIN)\`**: Returns **ALL rows from the left table**, plus matching data from the right table. If no match exists on the right, all right-hand columns are returned as **\`NULL\`**.
3. **\`RIGHT OUTER JOIN (RIGHT JOIN)\`**: Returns **ALL rows from the right table**, with NULLs for unmatched left-hand rows. (In professional SQL, developers standardize on \`LEFT JOIN\` for readability).
4. **\`FULL OUTER JOIN\`**: Returns **ALL rows from BOTH tables**, matching them where possible and filling with \`NULL\` on either side where no match exists.
5. **\`CROSS JOIN\` (Cartesian Product)**: Pairs **every row from Table A with every row in Table B** ($M \times N$ rows). **Warning: Missing an \`ON\` condition in a join accidentally creates an expensive Cartesian product!**`,
          diagram: `flowchart LR
    Left["Left Table: dbo.Departments (4 rows)"] <-->|"ON d.DeptId = e.DeptId"| Right["Right Table: dbo.Employees (10 rows)"]
    
    subgraph JoinTypes["SQL Server Join Outcomes"]
      Inner["INNER JOIN: Only Depts WITH Employees"]
      LeftJ["LEFT JOIN: ALL Depts (Even empty ones with NULL employee fields)"]
      FullJ["FULL JOIN: All Depts + All Unassigned Employees"]
    end
    
    style Left fill:#cfe2ff,stroke:#084298,color:#084298
    style Right fill:#cfe2ff,stroke:#084298,color:#084298
    style Inner fill:#d1e7dd,stroke:#198754,color:#0f5132
    style LeftJ fill:#fff3cd,stroke:#ffc107,color:#664d03
    style FullJ fill:#10b981,color:#fff`,
          steps: [
            {
              title: 'Step 1: Comparing INNER JOIN vs LEFT JOIN',
              explanation: 'Observe how LEFT JOIN preserves departments that have zero employees.',
              command: `-- 1. INNER JOIN: Excludes departments that have 0 employees:
SELECT 
    d.DepartmentName,
    e.FirstName,
    e.LastName,
    e.Salary
FROM dbo.Departments AS d
INNER JOIN dbo.Employees AS e
    ON d.DepartmentId = e.DepartmentId;

-- 2. LEFT JOIN: Shows ALL departments (even if they have 0 employees):
SELECT 
    d.DepartmentName,
    COUNT(e.EmployeeId) AS EmployeeCount,
    ISNULL(AVG(e.Salary), 0.00) AS AvgSalary
FROM dbo.Departments AS d
LEFT JOIN dbo.Employees AS e
    ON d.DepartmentId = e.DepartmentId
GROUP BY d.DepartmentName;`
            },
            {
              title: 'Step 2: Self Join for Manager-Employee Hierarchies',
              explanation: 'Join a table to itself to resolve hierarchical reporting lines.',
              command: `-- Find each employee and their direct reporting manager:
SELECT 
    e.FirstName + N' ' + e.LastName AS EmployeeName,
    ISNULL(m.FirstName + N' ' + m.LastName, N'No Manager (CEO)') AS ManagerName
FROM dbo.Employees AS e
LEFT JOIN dbo.Employees AS m
    ON e.ManagerId = m.EmployeeId;`
            }
          ],
          verification: 'Observe how departments without employees show an EmployeeCount of 0 and AvgSalary of $0.00.',
          expectedResult: 'Clean, accurate multi-table relational data retrieval.',
          summary: 'Use INNER JOIN for mandatory matches, LEFT JOIN to preserve parent records with optional child matches, and Self Joins for organizational hierarchies.'
        }
      ]
    }
  ]
};

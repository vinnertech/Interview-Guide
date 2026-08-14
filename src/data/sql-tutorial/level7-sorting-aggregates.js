// Level 7: Sorting & Aggregate Functions (In-Depth Expanded Edition)
export const level7SortingAggregates = {
  id: 'level-7',
  title: 'Level 7: Sorting & Aggregate Functions',
  icon: 'bi-bar-chart-fill',
  color: '#06b6d4',
  description: 'Master ORDER BY with ASC/DESC, NULL sorting rules, aggregate calculations (COUNT, SUM, AVG, MIN, MAX), GROUP BY groupings, and post-aggregation filtering with HAVING in baby steps.',
  chapters: [
    {
      id: 'sorting-and-aggregates',
      title: '07. Sorting & Group Aggregations',
      lessons: [
        {
          id: 'order-by-and-aggregates-group-by-having',
          slug: 'order-by-and-aggregates-group-by-having',
          order: '7.1',
          title: 'Sorting (ORDER BY) & Group Aggregations (GROUP BY & HAVING)',
          subtitle: 'Multi-column sorting, COUNT(*) vs COUNT(column), why aggregate functions ignore NULLs, and the critical difference between WHERE vs HAVING in baby steps.',
          chapterId: 'sorting-and-aggregates',
          chapterTitle: '07. Sorting & Group Aggregations',
          levelTitle: 'Level 7: Sorting & Aggregate Functions',
          goal: 'Master calculating business analytics (totals, averages, department headcounts) using GROUP BY and filtering group results with HAVING.',
          prerequisites: ['Level 6 completed.'],
          concept: `### Logical Query Processing Sequence:
To master grouping and filtering, understand the exact 6-step logical sequence SQL Server uses:
\`\`\`text
1. FROM       <- Identifies source tables
2. WHERE      <- Filters individual raw rows BEFORE aggregation
3. GROUP BY   <- Collapses rows into distinct groups
4. HAVING     <- Filters aggregated groups AFTER GROUP BY
5. SELECT     <- Calculates aggregates and projects columns
6. ORDER BY   <- Sorts the final result set
\`\`\`

---

### Critical Difference: \`WHERE\` vs \`HAVING\`
- **\`WHERE\`**: Filters individual rows **before** any aggregation happens. (Cannot contain aggregate functions like \`WHERE SUM(Salary) > 10000\` ❌).
- **\`HAVING\`**: Filters aggregated group summaries **after** \`GROUP BY\` has executed. (\`HAVING COUNT(EmployeeId) > 5\` ✅).

---

### \`COUNT(*)\` vs \`COUNT(Column)\`:
- **\`COUNT(*)\`**: Counts **every row** in the table/group, regardless of NULL values.
- **\`COUNT(Commission)\`**: Counts **only rows where the specified column is NOT NULL**!`,
          diagram: `flowchart TD
    Raw["Raw Rows (10,000 Sales Orders)"] --> Where["1. WHERE OrderDate >= '2026-01-01' (Filters to 2,500 active rows)"]
    Where --> Group["2. GROUP BY CustomerId (Collapses into 400 Customer summary groups)"]
    Group --> Agg["3. Calculates SUM(TotalAmount), COUNT(OrderId)"]
    Agg --> Having["4. HAVING SUM(TotalAmount) >= 10000.00 (Keeps 85 High-Value VIP Customers)"]
    Having --> Order["5. ORDER BY TotalSpent DESC (Sorts highest spenders first)"]
    
    style Raw fill:#cfe2ff,stroke:#084298,color:#084298
    style Where fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Group fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Agg fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Having fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Order fill:#10b981,color:#fff`,
          steps: [
            {
              title: 'Step 1: Department Salary & Headcount Analytics Query',
              explanation: 'Group by department and filter groups with HAVING.',
              command: `-- Calculate headcount, average salary, and total payroll per department:
-- Only include active employees, and show only departments with more than 1 employee:
SELECT 
    DepartmentId,
    COUNT(*) AS TotalEmployees,
    AVG(Salary) AS AverageSalary,
    SUM(Salary) AS TotalPayroll,
    MIN(Salary) AS MinSalary,
    MAX(Salary) AS MaxSalary
FROM dbo.Employees
WHERE Status = N'Active'               -- Filters raw rows first!
GROUP BY DepartmentId                  -- Groups by department
HAVING COUNT(*) > 1                    -- Filters aggregated groups!
ORDER BY TotalPayroll DESC;            -- Sorts final output`
            }
          ],
          verification: 'Run the query and observe how `WHERE` and `HAVING` execute at different phases of the pipeline.',
          expectedResult: 'Accurate group aggregation and summary metrics calculation.',
          summary: 'Use GROUP BY to collapse rows into groups, calculate aggregate functions (COUNT, SUM, AVG), and use HAVING to filter aggregated results.'
        }
      ]
    }
  ]
};

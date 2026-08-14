// Level 10: Built-in Scalar & Window Functions (In-Depth Expanded Edition)
export const level10FunctionsWindowing = {
  id: 'level-10',
  title: 'Level 10: Built-in Scalar & Window Functions',
  icon: 'bi-calculator-fill',
  color: '#ec4899',
  description: 'Master String & Date functions, conditional CASE expressions, and advanced Window Functions (OVER, PARTITION BY, ROW_NUMBER, RANK, DENSE_RANK, LEAD, LAG, Running Totals) in baby steps.',
  chapters: [
    {
      id: 'functions-and-windowing',
      title: '10. Built-in Functions & Analytical Window Functions',
      lessons: [
        {
          id: 'window-functions-row-number-rank-lead-lag',
          slug: 'window-functions-row-number-rank-lead-lag',
          order: '10.1',
          title: 'Mastering Window Functions: OVER, PARTITION BY, Ranking & Offsets',
          subtitle: 'Why Window Functions calculate aggregations without collapsing rows, ROW_NUMBER vs RANK vs DENSE_RANK, running totals, and LEAD/LAG period-over-period growth in baby steps.',
          chapterId: 'functions-and-windowing',
          chapterTitle: '10. Built-in Functions & Analytical Window Functions',
          levelTitle: 'Level 10: Built-in Scalar & Window Functions',
          goal: 'Master calculating running totals, top-N rankings per department, and previous/next row comparisons using the OVER() clause without collapsing query rows.',
          prerequisites: ['Level 9 completed.'],
          concept: `### What is a Window Function?
A **Window Function** performs calculations across a set of table rows that are related to the current row.
- **GROUP BY vs Window Function**:
  - \`GROUP BY\` **collapses** multiple rows into a single summary row.
  - A **Window Function** computes the calculation **while preserving every individual row in the output!**

---

### Core Window Clauses:
- **\`OVER (PARTITION BY ... ORDER BY ...)\`**: Defines the "window" or slice of data evaluated for each row.
- **\`ROW_NUMBER()\`**: Unique sequential integer ($1, 2, 3, 4$). (Essential for Top-N per group and pagination!).
- **\`RANK()\`**: Ranks rows ($1, 2, 2, 4$). Ties skip ranks!
- **\`DENSE_RANK()\`**: Ranks rows ($1, 2, 2, 3$). Ties do NOT skip ranks!
- **\`LAG(col, 1)\` / \`LEAD(col, 1)\`**: Accesses the previous row or next row in the partition (ideal for month-over-month growth calculations).`,
          diagram: `flowchart TD
    Rows["Employee Rows"] --> Part["PARTITION BY DepartmentId (Slices data into Department Windows)"]
    Part --> Order["ORDER BY Salary DESC (Sorts within each window)"]
    Order --> Rank["ROW_NUMBER() / DENSE_RANK(): Ranks employees 1..N per department!"]
    Rank --> Running["SUM(Salary) OVER (...): Computes Cumulative Running Total!"]
    
    style Rows fill:#cfe2ff,stroke:#084298,color:#084298
    style Part fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Order fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Rank fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Running fill:#10b981,color:#fff`,
          steps: [
            {
              title: 'Step 1: Top-1 Paid Employee Per Department using ROW_NUMBER() and a CTE',
              explanation: 'Rank employees per department and filter rank #1.',
              command: `WITH RankedEmployees AS (
    SELECT 
        EmployeeId,
        FirstName,
        LastName,
        DepartmentId,
        Salary,
        ROW_NUMBER() OVER(
            PARTITION BY DepartmentId 
            ORDER BY Salary DESC
        ) AS SalaryRank
    FROM dbo.Employees
    WHERE Status = N'Active'
)
SELECT 
    DepartmentId,
    FirstName,
    LastName,
    Salary
FROM RankedEmployees
WHERE SalaryRank = 1; -- Returns only the #1 highest-paid employee per department!`
            },
            {
              title: 'Step 2: Calculating Running Totals and Month-over-Month Growth with LAG',
              explanation: 'Calculate cumulative running revenue and previous month comparisons.',
              command: `-- Calculate monthly sales, running cumulative revenue, and previous month comparison:
SELECT 
    SalesMonth,
    MonthlyRevenue,
    -- Running Cumulative Total:
    SUM(MonthlyRevenue) OVER(ORDER BY SalesMonth) AS CumulativeRevenue,
    -- Previous Month Revenue using LAG:
    LAG(MonthlyRevenue, 1) OVER(ORDER BY SalesMonth) AS PrevMonthRevenue,
    -- Growth Calculation:
    MonthlyRevenue - LAG(MonthlyRevenue, 1) OVER(ORDER BY SalesMonth) AS MonthOverMonthGrowth
FROM dbo.MonthlySalesSummary;`
            }
          ],
          verification: 'Observe how `ROW_NUMBER() OVER(PARTITION BY ...)` restarts numbering at 1 for every distinct department.',
          expectedResult: 'Advanced analytical query capability without procedural cursor loops.',
          summary: 'Use Window Functions with OVER (PARTITION BY ... ORDER BY ...) to compute ranks, running totals, and lead/lag comparisons while keeping all individual rows intact.'
        }
      ]
    }
  ]
};

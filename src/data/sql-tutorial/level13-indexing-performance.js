// Level 13: Indexing, Performance & SARGability (In-Depth Expanded Edition)
export const level13IndexingPerformance = {
  id: 'level-13',
  title: 'Level 13: Indexing, SARGability & Performance',
  icon: 'bi-speedometer2',
  color: '#e11d48',
  description: 'Master Clustered vs Nonclustered Indexes, Composite indexes, Covering indexes with INCLUDE, reading Execution Plans (Seek vs Scan, Key Lookup), and SARGable query optimization in baby steps.',
  chapters: [
    {
      id: 'indexing-and-performance',
      title: '13. Indexing Architecture & Query Tuning',
      lessons: [
        {
          id: 'clustered-vs-nonclustered-indexes-sargability',
          slug: 'clustered-vs-nonclustered-indexes-sargability',
          order: '13.1',
          title: 'Clustered vs Nonclustered Indexes & SARGable Query Tuning',
          subtitle: 'B-Tree architecture, why tables can have only 1 Clustered Index, Index Seek vs Table Scan, covering queries with INCLUDE, and avoiding unsargable functions in WHERE clauses in baby steps.',
          chapterId: 'indexing-and-performance',
          chapterTitle: '13. Indexing Architecture & Query Tuning',
          levelTitle: 'Level 13: Indexing, Performance & SARGability',
          goal: 'Master designing high-performance indexes based on real query workloads and writing SARGable query predicates that use Index Seeks.',
          prerequisites: ['Level 12 completed.'],
          concept: `### What is a Database Index?
An **Index** is an on-disk B-Tree data structure that enables SQL Server to find matching rows in **logarithmic time $O(\\log N)$** instead of scanning every page in the table!

---

### Clustered Index vs Nonclustered Index:
- **Clustered Index (1 Per Table)**:
  - **Physically reorders the actual table data rows on disk** by the key column.
  - The leaf level of the clustered B-Tree **IS the physical data itself**!
  - Automatically created on the \`PRIMARY KEY\` by default.
- **Nonclustered Index (Up to 999 Per Table)**:
  - A separate B-Tree structure containing the index key columns and a pointer (bookmark / clustering key) back to the actual data row.

---

### Covering Index with \`INCLUDE\`:
To eliminate expensive **Key Lookups**, use \`INCLUDE\` to attach non-key columns directly to the leaf pages of the nonclustered index:
\`\`\`sql
CREATE NONCLUSTERED INDEX IX_Employees_Dept_Salary
ON dbo.Employees (DepartmentId)
INCLUDE (FirstName, LastName, Salary);
\`\`\`

---

### The Golden Rule of SARGability (Search Argument Able):
> ⚠️ **NEVER wrap indexed columns inside functions in your \`WHERE\` clause!**
\`\`\`sql
-- ❌ NON-SARGABLE (Forces a catastrophic Table Scan over 10 Million rows!):
WHERE YEAR(OrderDate) = 2026

-- ✅ SARGABLE (Enables instant, pinpoint B-Tree Index Seek!):
WHERE OrderDate >= '2026-01-01' AND OrderDate < '2027-01-01'
\`\`\``,
          diagram: `flowchart TD
    Query["SELECT Email, Salary FROM dbo.Employees WHERE Email = 'alice@vinnertech.com'"] --> IndexCheck{"Does Nonclustered Index on Email exist?"}
    IndexCheck -->|Yes (Index Seek)| Fast["⚡ B-Tree Index Seek: Reads 3 Pages (< 1ms)"]
    IndexCheck -->|No (Table Scan)| Slow["🐢 Table Scan: Reads all 500,000 Pages from Disk!"]
    
    style Query fill:#cfe2ff,stroke:#084298,color:#084298
    style IndexCheck fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Fast fill:#10b981,color:#fff
    style Slow fill:#f8d7da,stroke:#dc3545,color:#842029`,
          steps: [
            {
              title: 'Step 1: Creating an Optimized Covering Nonclustered Index',
              explanation: 'Index for department lookups with included columns.',
              command: `-- Create covering index for department employee lookups:
CREATE NONCLUSTERED INDEX IX_Employees_DepartmentId_Status
ON dbo.Employees (DepartmentId, Status)
INCLUDE (FirstName, LastName, Email, Salary);
GO`
            },
            {
              title: 'Step 2: Comparing Execution Plans (Seek vs Scan)',
              explanation: 'Inspect query execution with SARGable date filtering.',
              command: `-- SARGable Range Filter enabling Index Seek:
SELECT 
    EmployeeId,
    FirstName,
    LastName,
    Email,
    Salary
FROM dbo.Employees
WHERE 
    DepartmentId = 1
    AND Status = N'Active'
    AND CreatedAt >= '2026-01-01' AND CreatedAt < '2027-01-01';`
            }
          ],
          verification: 'In SSMS, press Ctrl+M to enable Actual Execution Plan and verify the query shows an **Index Seek** with 0 Key Lookups.',
          expectedResult: 'Sub-millisecond query execution on million-row tables.',
          summary: 'Use Clustered indexes for primary sorting, Nonclustered indexes with INCLUDE for covering queries, and write SARGable range predicates to trigger Index Seeks.'
        }
      ]
    }
  ]
};

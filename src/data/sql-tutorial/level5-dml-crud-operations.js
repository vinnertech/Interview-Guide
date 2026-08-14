// Level 5: DML & Data Queries (In-Depth Expanded Edition)
export const level5DmlCrudOperations = {
  id: 'level-5',
  title: 'Level 5: DML & CRUD Data Operations',
  icon: 'bi-pencil-square',
  color: '#3b82f6',
  description: 'Master data manipulation (INSERT, UPDATE with WHERE, DELETE vs TRUNCATE vs DROP), basic SELECT queries, TOP, and the OUTPUT clause in baby steps.',
  chapters: [
    {
      id: 'dml-and-crud',
      title: '05. Data Manipulation & CRUD Operations',
      lessons: [
        {
          id: 'insert-update-delete-truncate',
          slug: 'insert-update-delete-truncate',
          order: '5.1',
          title: 'DML Core: INSERT, UPDATE with WHERE, DELETE vs TRUNCATE vs DROP',
          subtitle: 'Inserting single/multiple rows, why forgetting WHERE in UPDATE/DELETE destroys data, and comparing DELETE vs TRUNCATE vs DROP in baby steps.',
          chapterId: 'dml-and-crud',
          chapterTitle: '05. Data Manipulation & CRUD Operations',
          levelTitle: 'Level 5: DML & CRUD Data Operations',
          goal: 'Master inserting, updating, and deleting records safely, and understand the internal logging differences between DELETE, TRUNCATE, and DROP.',
          prerequisites: ['Level 4 completed.'],
          concept: `### The CRUD / DML Mapping:
- **CREATE**: \`INSERT INTO table (columns) VALUES (...);\`
- **READ**: \`SELECT columns FROM table;\`
- **UPDATE**: \`UPDATE table SET col = val WHERE condition;\`
- **DELETE**: \`DELETE FROM table WHERE condition;\`

---

### The #1 Golden Rule of SQL:
> ⚠️ **ALWAYS write your \`WHERE\` clause first when writing an \`UPDATE\` or \`DELETE\`!**
If you execute:
\`\`\`sql
-- 🚨 CATASTROPHIC DISASTER: Updates EVERY employee in the company!
UPDATE dbo.Employees SET Salary = 100000;
\`\`\`
Without a \`WHERE\` filter, SQL Server updates or deletes **every single row in the entire table!**

---

### DELETE vs TRUNCATE vs DROP Comparison:

| Operation | Command | Type | Transaction Log | WHERE Clause? | Resets Identity? |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **DELETE** | \`DELETE FROM Table\` | DML | Logs **every row deletion individually** (slow for millions of rows). | **YES** | NO |
| **TRUNCATE** | \`TRUNCATE TABLE Table\`| DDL | Minimally logged (deallocates pages instantly). | NO | **YES (Resets back to seed)** |
| **DROP** | \`DROP TABLE Table\` | DDL | Destroys table definition, indexes, constraints, and data. | NO | N/A (Table is deleted) |`,
          diagram: `flowchart TD
    Operation["Removing Data from Table"] --> NeedsWhere{"Do you want to delete specific rows?"}
    NeedsWhere -->|Yes| Delete["DELETE FROM dbo.Employees WHERE DeptId = 5;\n(Logged row-by-row, safe)"]
    NeedsWhere -->|No (Wipe entire table)| KeepSchema{"Do you want to keep the empty table structure?"}
    KeepSchema -->|Yes| Truncate["TRUNCATE TABLE dbo.Employees;\n(Blazing fast page deallocation, resets Identity)"]
    KeepSchema -->|No (Destroy table completely)| Drop["DROP TABLE dbo.Employees;\n(Removes table definition & data from database)"]
    
    style Operation fill:#cfe2ff,stroke:#084298,color:#084298
    style NeedsWhere fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Delete fill:#d1e7dd,stroke:#198754,color:#0f5132
    style KeepSchema fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Truncate fill:#f8d7da,stroke:#dc3545,color:#842029
    style Drop fill:#dc3545,color:#fff`,
          steps: [
            {
              title: 'Step 1: Inserting Multi-Row Sample Data',
              explanation: 'Insert departments and employee records.',
              command: `-- Insert Departments:
INSERT INTO dbo.Departments (DepartmentName)
VALUES 
    (N'Engineering'),
    (N'Product'),
    (N'HR');
GO

-- Insert Employees:
INSERT INTO dbo.Employees (FirstName, LastName, Email, DepartmentId, Salary, Status)
VALUES 
    (N'John', N'Doe', N'john.doe@vinnertech.com', 1, 95000.00, N'Active'),
    (N'Jane', N'Smith', N'jane.smith@vinnertech.com', 1, 110000.00, N'Active'),
    (N'Michael', N'Brown', N'michael.brown@vinnertech.com', 2, 88000.00, N'Active');
GO`
            },
            {
              title: 'Step 2: Safe Updates and Deletes with Explicit WHERE Clauses',
              explanation: 'Update and delete specific rows safely.',
              command: `-- 1. Update salary for a specific employee:
UPDATE dbo.Employees
SET Salary = 115000.00
WHERE Email = N'john.doe@vinnertech.com';

-- 2. Delete a single employee:
DELETE FROM dbo.Employees
WHERE EmployeeId = 3;`
            }
          ],
          verification: 'Query `SELECT * FROM dbo.Employees;` and verify that only the targeted employee records were modified.',
          expectedResult: 'Safe, controlled data manipulation with zero unintended row updates.',
          summary: 'Use INSERT to add rows, UPDATE with a WHERE clause to modify rows, DELETE for filtered removals, and TRUNCATE to quickly wipe tables.'
        }
      ]
    }
  ]
};

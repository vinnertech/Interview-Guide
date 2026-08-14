// Level 4: DDL & Table Constraints (In-Depth Expanded Edition)
export const level4TableConstraints = {
  id: 'level-4',
  title: 'Level 4: DDL & Table Constraints',
  icon: 'bi-shield-check',
  color: '#10b981',
  description: 'Master DDL (CREATE, ALTER, DROP), Primary Keys, Foreign Keys with cascading actions, UNIQUE, CHECK, and DEFAULT constraints in baby steps.',
  chapters: [
    {
      id: 'ddl-and-constraints',
      title: '04. Table Creation & Constraints',
      lessons: [
        {
          id: 'primary-foreign-keys-and-constraints',
          slug: 'primary-foreign-keys-and-constraints',
          order: '4.1',
          title: 'Mastering Constraints: PRIMARY KEY, FOREIGN KEY, UNIQUE & CHECK',
          subtitle: 'Why constraints are the guardians of data integrity, naming conventions (PK_, FK_, UQ_, CK_, DF_), and cascading deletes in baby steps.',
          chapterId: 'ddl-and-constraints',
          chapterTitle: '04. Table Creation & Constraints',
          levelTitle: 'Level 4: DDL & Table Constraints',
          goal: 'Master creating robust relational schemas with explicit named constraints that enforce business rules directly inside the database engine.',
          prerequisites: ['Level 3 completed.'],
          concept: `### Why Database Constraints Matter
Application validation can be bypassed by bugs, scripts, or direct SQL updates. **Database Constraints are the ultimate hardware-level guarantees of data integrity!**

---

### The 5 Core Constraints in SQL Server:
1. **\`PRIMARY KEY (PK)\`**: Guarantees uniqueness and non-nullability for row identification (creates a Clustered Index by default).
2. **\`FOREIGN KEY (FK)\`**: Enforces referential integrity between parent and child tables (prevents orphaned records).
3. **\`UNIQUE (UQ)\`**: Enforces that values in a column or set of columns are unique (e.g. \`Email\`, \`SSN\`).
4. **\`CHECK (CK)\`**: Validates that values satisfy a boolean logical expression (e.g. \`Salary > 0\`, \`Age >= 18\`).
5. **\`DEFAULT (DF)\`**: Automatically assigns a default value when omitted during an INSERT (\`CreatedAt DEFAULT SYSUTCDATETIME()\`).`,
          diagram: `flowchart TD
    Parent["Parent Table: dbo.Departments\n- DepartmentId (PK_Departments)"] 
    Child["Child Table: dbo.Employees\n- EmployeeId (PK_Employees)\n- DepartmentId (FK_Employees_Departments)\n- Email (UQ_Employees_Email)\n- Salary (CK_Employees_Salary >= 0)"]
    
    Child -->|"Foreign Key references"| Parent
    
    style Parent fill:#cfe2ff,stroke:#084298,color:#084298
    style Child fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Creating Related Tables with Standard Named Constraints',
              explanation: 'Build Departments and Employees tables with full constraint coverage.',
              command: `-- 1. Parent Table: Departments
CREATE TABLE dbo.Departments (
    DepartmentId INT IDENTITY(1,1) 
        CONSTRAINT PK_Departments PRIMARY KEY,
    DepartmentName NVARCHAR(100) NOT NULL 
        CONSTRAINT UQ_Departments_Name UNIQUE,
    CreatedAt DATETIME2 NOT NULL 
        CONSTRAINT DF_Departments_CreatedAt DEFAULT SYSUTCDATETIME()
);
GO

-- 2. Child Table: Employees
CREATE TABLE dbo.Employees (
    EmployeeId INT IDENTITY(1,1) 
        CONSTRAINT PK_Employees PRIMARY KEY,
    FirstName NVARCHAR(50) NOT NULL,
    LastName NVARCHAR(50) NOT NULL,
    Email NVARCHAR(255) NOT NULL 
        CONSTRAINT UQ_Employees_Email UNIQUE,
    DepartmentId INT NOT NULL 
        CONSTRAINT FK_Employees_Departments 
        FOREIGN KEY REFERENCES dbo.Departments(DepartmentId)
        ON DELETE NO ACTION, -- Prevents deleting a department that has active employees!
    Salary DECIMAL(18,2) NOT NULL 
        CONSTRAINT CK_Employees_Salary CHECK (Salary >= 0),
    Status NVARCHAR(20) NOT NULL 
        CONSTRAINT DF_Employees_Status DEFAULT N'Active'
        CONSTRAINT CK_Employees_Status CHECK (Status IN (N'Active', N'Inactive', N'On-Leave')),
    CreatedAt DATETIME2 NOT NULL 
        CONSTRAINT DF_Employees_CreatedAt DEFAULT SYSUTCDATETIME()
);
GO`
            }
          ],
          verification: 'Attempt to insert an employee with a negative salary or non-existent DepartmentId and observe SQL Server blocking the insert with a constraint error.',
          expectedResult: 'Impenetrable relational data integrity enforced at the database level.',
          summary: 'Use named constraints (PK_, FK_, UQ_, CK_, DF_) to protect referential integrity and enforce business validation rules in SQL Server.'
        }
      ]
    }
  ]
};

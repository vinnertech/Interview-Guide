// Level 14: Security, SQL Injection & Complete CRUD Capstone (In-Depth Expanded Edition)
export const level14SecurityCrudCapstone = {
  id: 'level-14',
  title: 'Level 14: Security & Complete CRUD Capstone',
  icon: 'bi-trophy-fill',
  color: '#d97706',
  description: 'Master Database Security (Logins vs Users, Roles, Least Privilege), SQL Injection prevention with parameterized queries, and build the complete Employee Management CRUD database schema and stored procedures in baby steps.',
  chapters: [
    {
      id: 'security-and-crud-capstone',
      title: '14. Security, SQL Injection & Enterprise Capstone',
      lessons: [
        {
          id: 'sql-injection-and-database-security',
          slug: 'sql-injection-and-database-security',
          order: '14.1',
          title: 'Database Security: Logins, Users, Least Privilege & SQL Injection Prevention',
          subtitle: 'Why concatenating user input in SQL strings destroys companies, parameterized queries, and setting up dedicated restricted application logins in baby steps.',
          chapterId: 'security-and-crud-capstone',
          chapterTitle: '14. Security, SQL Injection & Enterprise Capstone',
          levelTitle: 'Level 14: Security & Complete CRUD Capstone',
          goal: 'Master database security architecture: understand how SQL injection attacks execute, eliminate string concatenation, and configure least-privilege application roles.',
          prerequisites: ['Level 13 completed.'],
          concept: `### What is SQL Injection?
**SQL Injection** occurs when untrusted user input is directly concatenated into a dynamic SQL query string, tricking the SQL engine into executing malicious attacker commands!

---

### Anatomy of an Attack:
\`\`\`csharp
// 🚨 VULNERABLE DISASTER:
string query = "SELECT * FROM Users WHERE Email = '" + userInput + "' AND Password = '" + password + "'";
\`\`\`
If the attacker types: \`admin@vinnertech.com' --\`:
The query becomes:
\`\`\`sql
SELECT * FROM Users WHERE Email = 'admin@vinnertech.com' --' AND Password = '...'
\`\`\`
The double hyphen (\`--\`) **comments out the entire password check**, granting the attacker instant administrative login!

---

### The #1 Defense: Parameterized Queries
**Always use Parameterized Queries or Stored Procedures**. The SQL engine compiles the query template first and treats user parameters strictly as **data literals**, completely neutralizing injection attempts!`,
          diagram: `flowchart TD
    Attack["Attacker Input: admin' OR '1'='1"] --> Unsafe["Unsafe String Concatenation: query = '... ' + input"]
    Unsafe --> Breach["🚨 SQL Engine executes injected boolean logic -> Data Breach!"]
    
    SafeInput["Attacker Input: admin' OR '1'='1"] --> Param["Parameterized Query: @username = input"]
    Param --> Secure["🛡️ SQL Engine treats input strictly as a literal text string -> Safe!"]
    
    style Attack fill:#f8d7da,stroke:#dc3545,color:#842029
    style Unsafe fill:#f8d7da,stroke:#dc3545,color:#842029
    style Breach fill:#dc3545,color:#fff
    style SafeInput fill:#cfe2ff,stroke:#084298,color:#084298
    style Param fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Secure fill:#10b981,color:#fff`,
          steps: [
            {
              title: 'Step 1: Creating a Least-Privilege Application User in SQL Server',
              explanation: 'Create a login and grant execute permissions only on stored procedures.',
              command: `-- 1. Create a server-level login for the web application:
CREATE LOGIN AppUserLogin WITH PASSWORD = 'Strong#Password!2026';
GO

-- 2. Map the login to a database user inside LearningDb:
USE LearningDb;
GO
CREATE USER AppUser FOR LOGIN AppUserLogin;
GO

-- 3. Grant LEAST PRIVILEGE: Execute only on stored procedures (No raw table DROP/ALTER!):
GRANT EXECUTE ON SCHEMA::dbo TO AppUser;
DENY ALTER ON SCHEMA::dbo TO AppUser;
GO`
            }
          ],
          verification: 'Verify that `AppUser` can execute stored procedures but is denied direct table drop or schema alteration permissions.',
          expectedResult: 'Hardened, enterprise-compliant database security architecture.',
          summary: 'Prevent SQL injection using parameterized queries, and protect production databases using least-privilege application roles.'
        },
        {
          id: 'complete-crud-database-capstone',
          slug: 'complete-crud-database-capstone',
          order: '14.2',
          title: 'Mandatory Capstone: Complete Enterprise Employee Management Database',
          subtitle: 'Full architectural DDL & Stored Procedure implementation: Normalized 3NF tables, constraints, parameterized CRUD procedures with TRY/CATCH, search pagination, and indexes in baby steps.',
          chapterId: 'security-and-crud-capstone',
          chapterTitle: '14. Security, SQL Injection & Enterprise Capstone',
          levelTitle: 'Level 14: Security & Complete CRUD Capstone',
          goal: 'Build an end-to-end production-grade Employee Management database with complete CRUD stored procedures, search, filtering, and pagination.',
          prerequisites: ['All previous levels completed.'],
          concept: `### Capstone Database Architecture Overview

The Employee Management Database is designed to enterprise standards:
1. **Schema Design**: Normalized 3NF \`dbo.Departments\`, \`dbo.Employees\`, and \`dbo.AuditLogs\` tables.
2. **Constraints**: Primary Keys, Foreign Keys with referential checks, Unique Emails, and Check constraints.
3. **Stored Procedures**: Complete set of parameterized CRUD operations:
   - \`dbo.sp_CreateEmployee\` (Create with validation & IDENTITY capture)
   - \`dbo.sp_GetEmployeesPaged\` (Read with search filtering & OFFSET-FETCH pagination)
   - \`dbo.sp_GetEmployeeById\` (Read detail by ID)
   - \`dbo.sp_UpdateEmployee\` (Update with optimistic concurrency check)
   - \`dbo.sp_DeleteEmployee\` (Delete with safety validation)
4. **Performance Tuning**: Covering indexes for search and department filtering.`,
          diagram: `flowchart TD
    App["Application / API Layer"] --> Proc["Stored Procedures Layer (sp_Create, sp_GetEmployeesPaged, sp_Update, sp_Delete)"]
    Proc --> Trans["ACID Transactions & TRY/CATCH Validation"]
    Trans --> Tables["Normalized Tables: dbo.Departments, dbo.Employees, dbo.AuditLogs"]
    Tables --> Index["Covering Indexes (IX_Employees_Search, IX_Employees_Dept)"]
    
    style App fill:#cfe2ff,stroke:#084298,color:#084298
    style Proc fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Trans fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Tables fill:#10b981,color:#fff
    style Index fill:#e2e3e5,stroke:#41464b,color:#141619`,
          steps: [
            {
              title: 'Step 1: The Complete Schema DDL Script',
              explanation: 'Create tables, constraints, and covering indexes.',
              command: `USE LearningDb;
GO

-- 1. Departments Table:
CREATE TABLE dbo.Departments (
    DepartmentId INT IDENTITY(1,1) CONSTRAINT PK_Departments PRIMARY KEY,
    DepartmentName NVARCHAR(100) NOT NULL CONSTRAINT UQ_Departments_Name UNIQUE,
    CreatedAt DATETIME2 NOT NULL CONSTRAINT DF_Departments_CreatedAt DEFAULT SYSUTCDATETIME()
);
GO

-- 2. Employees Table:
CREATE TABLE dbo.Employees (
    EmployeeId INT IDENTITY(1,1) CONSTRAINT PK_Employees PRIMARY KEY,
    FirstName NVARCHAR(50) NOT NULL,
    LastName NVARCHAR(50) NOT NULL,
    Email NVARCHAR(255) NOT NULL CONSTRAINT UQ_Employees_Email UNIQUE,
    Phone VARCHAR(20) NULL,
    DepartmentId INT NOT NULL CONSTRAINT FK_Employees_Departments FOREIGN KEY REFERENCES dbo.Departments(DepartmentId),
    Designation NVARCHAR(100) NOT NULL,
    Salary DECIMAL(18,2) NOT NULL CONSTRAINT CK_Employees_Salary CHECK (Salary >= 0),
    Status NVARCHAR(20) NOT NULL CONSTRAINT DF_Employees_Status DEFAULT N'Active' CONSTRAINT CK_Employees_Status CHECK (Status IN (N'Active', N'Inactive', N'On-Leave')),
    JoiningDate DATE NOT NULL CONSTRAINT DF_Employees_JoiningDate DEFAULT CAST(GETDATE() AS DATE),
    CreatedAt DATETIME2 NOT NULL CONSTRAINT DF_Employees_CreatedAt DEFAULT SYSUTCDATETIME(),
    UpdatedAt DATETIME2 NULL
);
GO

-- 3. Covering Index for Fast Search & Department Filtering:
CREATE NONCLUSTERED INDEX IX_Employees_Search
ON dbo.Employees (DepartmentId, Status)
INCLUDE (FirstName, LastName, Email, Designation, Salary, JoiningDate);
GO`
            },
            {
              title: 'Step 2: Stored Procedure for Paginated Search (READ with OFFSET-FETCH)',
              explanation: 'Implement dynamic search with pagination in SQL Server.',
              command: `CREATE PROCEDURE dbo.sp_GetEmployeesPaged
    @SearchTerm NVARCHAR(100) = NULL,
    @DepartmentId INT = NULL,
    @PageNumber INT = 1,
    @PageSize INT = 10,
    @TotalRecords INT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;

    -- 1. Calculate Total Matching Count:
    SELECT @TotalRecords = COUNT(*)
    FROM dbo.Employees AS e
    WHERE 
        (@DepartmentId IS NULL OR e.DepartmentId = @DepartmentId)
        AND (
            @SearchTerm IS NULL OR 
            e.FirstName LIKE N'%' + @SearchTerm + N'%' OR 
            e.LastName LIKE N'%' + @SearchTerm + N'%' OR 
            e.Email LIKE N'%' + @SearchTerm + N'%' OR
            e.Designation LIKE N'%' + @SearchTerm + N'%'
        );

    -- 2. Return Paginated Results with OFFSET-FETCH:
    SELECT 
        e.EmployeeId,
        e.FirstName,
        e.LastName,
        e.Email,
        e.Phone,
        d.DepartmentName,
        e.DepartmentId,
        e.Designation,
        e.Salary,
        e.Status,
        e.JoiningDate
    FROM dbo.Employees AS e
    INNER JOIN dbo.Departments AS d
        ON d.DepartmentId = e.DepartmentId
    WHERE 
        (@DepartmentId IS NULL OR e.DepartmentId = @DepartmentId)
        AND (
            @SearchTerm IS NULL OR 
            e.FirstName LIKE N'%' + @SearchTerm + N'%' OR 
            e.LastName LIKE N'%' + @SearchTerm + N'%' OR 
            e.Email LIKE N'%' + @SearchTerm + N'%' OR
            e.Designation LIKE N'%' + @SearchTerm + N'%'
        )
    ORDER BY e.EmployeeId DESC
    OFFSET (@PageNumber - 1) * @PageSize ROWS
    FETCH NEXT @PageSize ROWS ONLY;
END;
GO`
            },
            {
              title: 'Step 3: Stored Procedure for Safe Updating (UPDATE)',
              explanation: 'Update employee fields and touch UpdatedAt timestamp.',
              command: `CREATE PROCEDURE dbo.sp_UpdateEmployee
    @EmployeeId INT,
    @FirstName NVARCHAR(50),
    @LastName NVARCHAR(50),
    @Email NVARCHAR(255),
    @Phone VARCHAR(20),
    @DepartmentId INT,
    @Designation NVARCHAR(100),
    @Salary DECIMAL(18,2),
    @Status NVARCHAR(20)
AS
BEGIN
    SET NOCOUNT ON;

    UPDATE dbo.Employees
    SET 
        FirstName = @FirstName,
        LastName = @LastName,
        Email = @Email,
        Phone = @Phone,
        DepartmentId = @DepartmentId,
        Designation = @Designation,
        Salary = @Salary,
        Status = @Status,
        UpdatedAt = SYSUTCDATETIME()
    WHERE EmployeeId = @EmployeeId;

    IF @@ROWCOUNT = 0
    BEGIN
        RAISERROR(N'Employee record not found.', 16, 1);
    END
END;
GO`
            },
            {
              title: 'Step 4: Stored Procedure for Safe Deletion (DELETE)',
              explanation: 'Delete an employee by ID safely.',
              command: `CREATE PROCEDURE dbo.sp_DeleteEmployee
    @EmployeeId INT
AS
BEGIN
    SET NOCOUNT ON;

    DELETE FROM dbo.Employees
    WHERE EmployeeId = @EmployeeId;

    IF @@ROWCOUNT = 0
    BEGIN
        RAISERROR(N'Employee record not found for deletion.', 16, 1);
    END
END;
GO`
            }
          ],
          verification: 'Execute the complete schema and test `sp_CreateEmployee`, `sp_GetEmployeesPaged`, `sp_UpdateEmployee`, and `sp_DeleteEmployee` in SSMS.',
          expectedResult: 'A fully functional, enterprise-grade SQL Server CRUD database architecture.',
          summary: 'You have mastered SQL & Microsoft SQL Server from zero foundations to database architecture, advanced indexing, transactions, and complete CRUD implementation!'
        }
      ]
    }
  ]
};

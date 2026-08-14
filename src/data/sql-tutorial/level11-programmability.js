// Level 11: Programmability (In-Depth Expanded Edition)
export const level11Programmability = {
  id: 'level-11',
  title: 'Level 11: Programmability (Views, Procs & Temp Tables)',
  icon: 'bi-code-square',
  color: '#6366f1',
  description: 'Master Views, Stored Procedures with input/output parameters, User-Defined Functions (Scalar vs TVFs), Table Variables (@table) vs Temporary Tables (#temp), and T-SQL control flow in baby steps.',
  chapters: [
    {
      id: 'programmability-views-procs',
      title: '11. Database Views, Stored Procedures & Functions',
      lessons: [
        {
          id: 'stored-procedures-and-views',
          slug: 'stored-procedures-and-views',
          order: '11.1',
          title: 'Stored Procedures & Views: Reusable Database Logic',
          subtitle: 'What is a View vs Table?, creating parameterized Stored Procedures, SET NOCOUNT ON, return values vs output parameters, and why stored procedures protect against SQL Injection in baby steps.',
          chapterId: 'programmability-views-procs',
          chapterTitle: '11. Database Views, Stored Procedures & Functions',
          levelTitle: 'Level 11: Programmability (Views, Procs & Temp Tables)',
          goal: 'Master creating reusable Views for simplified querying and parameterized Stored Procedures for secure, encapsulated backend CRUD operations.',
          prerequisites: ['Level 10 completed.'],
          concept: `### What is a Database View?
A **View** is a saved, named \`SELECT\` query stored in the database catalog that acts as a **Virtual Table**.
- It does **not store physical data** (unless indexed).
- It simplifies complex multi-table joins into a clean virtual table (\`SELECT * FROM dbo.v_ActiveEmployees\`).
- It hides sensitive columns (like passwords or SSNs) from reporting users.

---

### What is a Stored Procedure (\`CREATE PROCEDURE\`)?
A **Stored Procedure** is a compiled, executable batch of T-SQL statements that accepts input parameters, executes business logic, modifies tables, and returns result sets or output parameters.

---

### Why Use Stored Procedures?
1. **Security & SQL Injection Immunity**: Parameters are treated strictly as literal data values, making SQL injection impossible!
2. **Reduced Network Traffic**: A client app sends just \`EXEC dbo.GetEmployeeById 42\` instead of a 50-line raw SQL query over the network.
3. **Execution Plan Caching**: SQL Server compiles and caches the query execution plan in memory for lightning-fast repeated executions.
4. **\`SET NOCOUNT ON\`**: Suppresses the *"x rows affected"* message, reducing network round-trip packet overhead.`,
          diagram: `flowchart LR
    App["Backend API (.NET / Node / Java)"] -->|"EXEC dbo.CreateEmployee @FirstName, @Salary..."| Proc["Stored Procedure (dbo.CreateEmployee)"]
    Proc --> Validation["1. Validates inputs"]
    Proc --> Trans["2. Executes INSERT & fetches IDENTITY"]
    Trans --> Return["3. Returns new EmployeeId safely!"]
    
    style App fill:#cfe2ff,stroke:#084298,color:#084298
    style Proc fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Validation fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Trans fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Return fill:#10b981,color:#fff`,
          steps: [
            {
              title: 'Step 1: Creating a Virtual Reporting View',
              explanation: 'Encapsulate multi-table join logic.',
              command: `CREATE VIEW dbo.v_EmployeeDetails
AS
SELECT 
    e.EmployeeId,
    e.FirstName,
    e.LastName,
    e.Email,
    d.DepartmentName,
    e.Salary,
    e.Status,
    e.CreatedAt
FROM dbo.Employees AS e
INNER JOIN dbo.Departments AS d
    ON d.DepartmentId = e.DepartmentId;
GO

-- Querying the View just like a physical table:
SELECT * 
FROM dbo.v_EmployeeDetails 
WHERE DepartmentName = N'Engineering';`
            },
            {
              title: 'Step 2: Creating a Production-Grade CRUD Stored Procedure',
              explanation: 'Build a secure, parameterized procedure with error handling and identity output.',
              command: `CREATE PROCEDURE dbo.sp_CreateEmployee
    @FirstName NVARCHAR(50),
    @LastName NVARCHAR(50),
    @Email NVARCHAR(255),
    @DepartmentId INT,
    @Salary DECIMAL(18,2),
    @NewEmployeeId INT OUTPUT -- Returns the newly generated ID
AS
BEGIN
    SET NOCOUNT ON; -- Eliminates unnecessary network overhead

    -- 1. Input Validation:
    IF @Salary < 0
    BEGIN
        RAISERROR(N'Salary cannot be negative.', 16, 1);
        RETURN;
    END

    -- 2. Insert into table:
    INSERT INTO dbo.Employees (
        FirstName, 
        LastName, 
        Email, 
        DepartmentId, 
        Salary
    )
    VALUES (
        @FirstName, 
        @LastName, 
        @Email, 
        @DepartmentId, 
        @Salary
    );

    -- 3. Capture the newly generated IDENTITY ID:
    SET @NewEmployeeId = SCOPE_IDENTITY();
END;
GO`
            }
          ],
          verification: 'Execute `sp_CreateEmployee` with output parameter and confirm the new record is created and ID returned.',
          expectedResult: 'Clean, secure, parameterized database programmability.',
          summary: 'Use Views to simplify complex reporting queries, and Stored Procedures with SET NOCOUNT ON to encapsulate business operations securely.'
        }
      ]
    }
  ]
};

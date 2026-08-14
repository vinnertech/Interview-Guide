// Level 1: Absolute Beginner & Database Mental Models (In-Depth Expanded Edition)
export const level1DatabaseFoundations = {
  id: 'level-1',
  title: 'Level 1: Absolute Beginner & Database Mental Models',
  icon: 'bi-database-fill',
  color: '#e67e22',
  description: 'Understand what a database is, why spreadsheets fail at scale, RDBMS vs DBMS, SQL vs Microsoft SQL Server, and relational mental models in baby steps.',
  chapters: [
    {
      id: 'database-foundations',
      title: '01. Database Basics & Mental Models',
      lessons: [
        {
          id: 'what-is-a-database-and-rdbms',
          slug: 'what-is-a-database-and-rdbms',
          order: '1.1',
          title: 'What is a Database? (Data, Tables, Rows, Columns & RDBMS)',
          subtitle: 'The complete mental model: Why applications need databases, spreadsheets vs relational databases, and core definitions in baby steps.',
          chapterId: 'database-foundations',
          chapterTitle: '01. Database Basics & Mental Models',
          levelTitle: 'Level 1: Absolute Beginner & Database Mental Models',
          goal: 'Understand what a database is, why businesses cannot run on flat spreadsheets, and how Relational Database Management Systems organize data.',
          prerequisites: ['No prior database experience required!'],
          concept: `### What is Data?
**Data** is raw facts and figures (e.g. your name, an order timestamp, product price, or email address).

---

### What is a Database?
A **Database** is an organized, structured electronic container designed to store, retrieve, update, and manage vast volumes of data securely and reliably.

---

### Why Spreadsheets (Excel) Fail for Real Applications:
Beginners often ask: *"Why can't we just use Microsoft Excel as a database?"*
1. **Concurrency**: Multiple users editing an Excel sheet simultaneously cause file corruption and race conditions.
2. **Scale**: Excel fails when handling tens of millions of records.
3. **Data Integrity & Constraints**: In Excel, someone can accidentally type the word "Banana" into a Phone Number or Salary column. Databases strictly enforce **Data Types and Validation Rules**.
4. **Security & Auditing**: Databases enforce fine-grained role-based permissions down to specific tables and columns.

---

### Relational Model Building Blocks:
- **Table (Entity)**: A two-dimensional collection of related records (e.g. \`Employees\`, \`Customers\`).
- **Row (Record / Tuple)**: A single horizontal data entry representing one unique item (e.g. *Employee #101: John Doe*).
- **Column (Field / Attribute)**: A vertical characteristic shared across all records (e.g. \`Email\`, \`Salary\`, \`JoiningDate\`).
- **Primary Key (PK)**: A column whose value is strictly unique and never NULL, identifying each row without ambiguity.`,
          diagram: `flowchart TD
    App["Client Web Application (React / Node / .NET)"] --> API["Backend REST API"]
    API --> DBEngine["RDBMS Engine (Microsoft SQL Server)"]
    DBEngine --> Tables["Database: CompanyDB"]
    Tables --> T1["Table: Employees\n- Columns: ID (PK), Name, Email\n- Rows: Individual Employee Records"]
    Tables --> T2["Table: Departments\n- Columns: DeptID (PK), DeptName\n- Rows: Department Records"]
    
    style App fill:#cfe2ff,stroke:#084298,color:#084298
    style API fill:#fff3cd,stroke:#ffc107,color:#664d03
    style DBEngine fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Tables fill:#e2e3e5,stroke:#41464b,color:#141619
    style T1 fill:#f8d7da,stroke:#dc3545,color:#842029
    style T2 fill:#f8d7da,stroke:#dc3545,color:#842029`,
          steps: [
            {
              title: 'Step 1: Inspecting an Employee Relational Table Structure',
              explanation: 'Observe how columns enforce data types and rows represent unique records.',
              command: `-- Conceptual Table: Employees
-- +------------+---------------+-------------------------+--------------+
-- | EmployeeId | FullName      | Email                   | Salary       |
-- +------------+---------------+-------------------------+--------------+
-- | 1          | Alice Smith   | alice@vinnertech.com    | 95000.00     |
-- | 2          | Bob Johnson   | bob@vinnertech.com      | 82000.00     |
-- +------------+---------------+-------------------------+--------------+`
            }
          ],
          verification: 'Confirm you understand that a row represents one entity instance and a column represents an attribute.',
          expectedResult: 'Clear foundational grasp of database architecture.',
          commonMistakes: [
            {
              problem: 'Confusing a Database with a Database Management System (DBMS).',
              why: 'The database is the structured data itself; the DBMS (e.g. SQL Server) is the software engine that manages and queries it.',
              fix: 'Remember: SQL Server is the RDBMS software; CompanyDB is the database.'
            }
          ],
          quiz: {
            question: 'What is the primary role of a Primary Key in a relational database table?',
            options: [
              'To encrypt database passwords.',
              'To uniquely identify each individual row in a table with a non-null value.',
              'To sort records alphabetically by default.',
              'To allow duplicate records.'
            ],
            correctIndex: 1,
            explanation: 'A Primary Key uniquely identifies each row in a table and guarantees that duplicate rows cannot exist.'
          },
          summary: 'A relational database stores data in tables of rows and columns, enforcing strict data types and constraints to preserve data integrity.'
        },
        {
          id: 'sql-vs-sql-server-and-dialects',
          slug: 'sql-vs-sql-server-and-dialects',
          order: '1.2',
          title: 'SQL vs Microsoft SQL Server: Dialects & Ecosystem',
          subtitle: 'ANSI Standard SQL vs T-SQL (Transact-SQL), SQL Server vs MySQL vs PostgreSQL vs Oracle in baby steps.',
          chapterId: 'database-foundations',
          chapterTitle: '01. Database Basics & Mental Models',
          levelTitle: 'Level 1: Absolute Beginner & Database Mental Models',
          goal: 'Understand the difference between the standard SQL language and Microsoft SQL Server (T-SQL), and know how database dialects vary.',
          prerequisites: ['Lesson 1.1 completed.'],
          concept: `### SQL vs Microsoft SQL Server: The Crucial Distinction

- **SQL (Structured Query Language)**:
  SQL is the universal **declarative programming language** standardized by ANSI and ISO for querying and modifying relational databases.
  
- **Microsoft SQL Server (The RDBMS Software)**:
  Microsoft SQL Server is an enterprise relational database management system created by Microsoft. It implements standard SQL and extends it with **T-SQL (Transact-SQL)**!

---

### Dialect Comparison Table:

| Feature | ANSI Standard SQL | Microsoft SQL Server (T-SQL) | PostgreSQL | MySQL |
| :--- | :--- | :--- | :--- | :--- |
| **Limiting Rows** | \`FETCH FIRST n ROWS\` | \`TOP (n)\` or \`OFFSET-FETCH\` | \`LIMIT n\` | \`LIMIT n\` |
| **Auto-Increment PK**| \`GENERATED AS IDENTITY\` | \`IDENTITY(1,1)\` | \`SERIAL\` or \`IDENTITY\`| \`AUTO_INCREMENT\` |
| **Unicode Strings** | \`VARCHAR\` / \`NVARCHAR\` | \`NVARCHAR\` (prefixed \`N'text'\`)| \`VARCHAR\` (UTF-8 default)| \`VARCHAR\` (utf8mb4) |
| **Date Time** | \`TIMESTAMP\` | \`DATETIME2\` / \`GETDATE()\` | \`TIMESTAMPTZ\` / \`NOW()\` | \`DATETIME\` / \`NOW()\` |
| **Procedural Logic** | SQL/PSM | **T-SQL (\`IF\`, \`WHILE\`, \`TRY/CATCH\`)** | PL/pgSQL | MySQL Compound |`,
          diagram: `flowchart LR
    Standard["ANSI Standard SQL (Universal Standard)"] --> TSQL["Microsoft T-SQL (SQL Server)"]
    Standard --> PLSQL["PL/SQL (Oracle)"]
    Standard --> Postgres["PostgreSQL Dialect"]
    Standard --> MySQL["MySQL Dialect"]
    
    style Standard fill:#cfe2ff,stroke:#084298,color:#084298
    style TSQL fill:#d1e7dd,stroke:#198754,color:#0f5132
    style PLSQL fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Postgres fill:#e2e3e5,stroke:#41464b,color:#141619
    style MySQL fill:#f8d7da,stroke:#dc3545,color:#842029`,
          steps: [
            {
              title: 'Step 1: Comparing Standard SQL vs SQL Server T-SQL',
              explanation: 'Observe how SQL Server handles row limits and auto-increment identity.',
              command: `-- Standard ANSI SQL:
-- SELECT * FROM Employees FETCH FIRST 5 ROWS ONLY;

-- Microsoft SQL Server (T-SQL):
SELECT TOP (5) * 
FROM dbo.Employees;`
            }
          ],
          verification: 'You can clearly explain why LIMIT is used in MySQL/PostgreSQL while TOP / OFFSET-FETCH is used in SQL Server.',
          expectedResult: 'Clear understanding of SQL dialects and vendor-specific features.',
          summary: 'SQL is the universal querying standard; Microsoft SQL Server is Microsoft\'s RDBMS implementing SQL extended with T-SQL (Transact-SQL).'
        }
      ]
    }
  ]
};

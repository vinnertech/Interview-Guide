// Level 3: SQL Fundamentals & Data Types (In-Depth Expanded Edition)
export const level3DataTypesNulls = {
  id: 'level-3',
  title: 'Level 3: SQL Fundamentals & Data Types',
  icon: 'bi-filetype-sql',
  color: '#eab308',
  description: 'Master SQL syntax rules, keywords vs identifiers, exact numeric types, Unicode NVARCHAR vs VARCHAR, DATETIME2 vs DATE, and the tri-state logic of NULL in baby steps.',
  chapters: [
    {
      id: 'sql-syntax-and-data-types',
      title: '03. Syntax Rules, Data Types & NULL Logic',
      lessons: [
        {
          id: 'sql-data-types-deep-dive',
          slug: 'sql-data-types-deep-dive',
          order: '3.1',
          title: 'SQL Server Data Types: Numbers, Strings, Dates & GUIDs',
          subtitle: 'Why selecting the correct data type matters: INT vs BIGINT, DECIMAL(18,2) vs FLOAT for money, VARCHAR vs NVARCHAR (N prefix), and DATETIME2 in baby steps.',
          chapterId: 'sql-syntax-and-data-types',
          chapterTitle: '03. Syntax Rules, Data Types & NULL Logic',
          levelTitle: 'Level 3: SQL Fundamentals & Data Types',
          goal: 'Master selecting optimal SQL Server data types for data accuracy, storage efficiency, and index performance.',
          prerequisites: ['Level 2 completed.'],
          concept: `### Why Data Type Selection is Critical
Choosing the wrong data type causes **data truncation, precision loss in financial calculations, and severe table bloat**.

---

### Core SQL Server Data Type Matrix:

| Category | Recommended Data Type | Storage Size | Real-World Use Case |
| :--- | :--- | :--- | :--- |
| **Integer** | \`INT\` | 4 Bytes | Standard IDs and quantities (up to 2.14 Billion). |
| **Large Integer** | \`BIGINT\` | 8 Bytes | High-volume transaction IDs (up to 9 Quintillion). |
| **Exact Decimal** | \`DECIMAL(18,2)\` | 9 Bytes | **Financial amounts, salaries, product prices! (NEVER use FLOAT for money)**. |
| **Approximate** | \`FLOAT\` | 4–8 Bytes | Scientific measurements where rounding errors are acceptable. |
| **Unicode String** | \`NVARCHAR(n)\` | 2 bytes/char | International names, addresses, multi-language text. (Prefixed with \`N'text'\`). |
| **ASCII String** | \`VARCHAR(n)\` | 1 byte/char | Strictly English-only ASCII strings (e.g. status codes, postal codes). |
| **Date Only** | \`DATE\` | 3 Bytes | \`2026-08-14\` (Birth dates, invoice dates). |
| **Timestamp** | \`DATETIME2(7)\` | 6–8 Bytes | High-precision timestamps (replaces obsolete \`DATETIME\`). |
| **Boolean** | \`BIT\` | 1 Byte | \`1\` (True) or \`0\` (False). |
| **GUID / UUID** | \`UNIQUEIDENTIFIER\`| 16 Bytes | Distributed globally unique identifiers (\`NEWID()\`). |`,
          diagram: `flowchart TD
    DataChoice["What kind of data are you storing?"] --> Num{"Is it currency or financial?"}
    Num -->|Yes (Money / Salary)| Dec["DECIMAL(18,2) - Exact Fixed Precision!"]
    Num -->|No (Counts / IDs)| Int["INT or BIGINT"]
    DataChoice --> Str{"Does it contain international characters?"}
    Str -->|Yes (Names, UTF-16)| NVar["NVARCHAR(100) (Prefixed with N'...')"]
    Str -->|No (ASCII codes)| Var["VARCHAR(50)"]
    
    style DataChoice fill:#cfe2ff,stroke:#084298,color:#084298
    style Num fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Dec fill:#10b981,color:#fff
    style Int fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Str fill:#fff3cd,stroke:#ffc107,color:#664d03
    style NVar fill:#10b981,color:#fff
    style Var fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Inspecting Real Data Types in Table Definition',
              explanation: 'Create a clean, type-safe product table.',
              command: `CREATE TABLE dbo.Products (
    ProductId INT IDENTITY(1,1) PRIMARY KEY,
    ProductName NVARCHAR(150) NOT NULL,
    ProductCode VARCHAR(20) NOT NULL,
    Price DECIMAL(10,2) NOT NULL,
    IsActive BIT NOT NULL DEFAULT 1,
    CreatedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()
);`
            }
          ],
          verification: 'Confirm why `DECIMAL(10,2)` is chosen over `FLOAT` for product prices.',
          expectedResult: 'Deep understanding of data types and storage footprint.',
          summary: 'Use DECIMAL for financial amounts, NVARCHAR for international text, and DATETIME2 for modern timestamps.'
        },
        {
          id: 'understanding-null-three-valued-logic',
          slug: 'understanding-null-three-valued-logic',
          order: '3.2',
          title: 'Understanding NULL: Three-Valued Logic & IS NULL Filtering',
          subtitle: 'Why NULL is not zero, empty string, or false; three-valued logic (TRUE, FALSE, UNKNOWN), and IS NULL vs = NULL in baby steps.',
          chapterId: 'sql-syntax-and-data-types',
          chapterTitle: '03. Syntax Rules, Data Types & NULL Logic',
          levelTitle: 'Level 3: SQL Fundamentals & Data Types',
          goal: 'Master NULL semantics in SQL: understand three-valued logic and eliminate common comparison bugs.',
          prerequisites: ['Lesson 3.1 completed.'],
          concept: `### What is NULL in SQL?
**\`NULL\` means UNKNOWN or MISSING data**.
- \`NULL\` is **NOT** zero (\`0\`).
- \`NULL\` is **NOT** an empty string (\`''\`).
- \`NULL\` is **NOT** false (\`0\` in BIT).

---

### Three-Valued Logic in SQL:
In standard programming languages, boolean logic is binary: \`TRUE\` or \`FALSE\`.
In SQL, boolean comparisons produce **Three-Valued Logic**:
1. \`TRUE\`
2. \`FALSE\`
3. **\`UNKNOWN\`**

---

### The Deadly Beginner Mistake: \`Column = NULL\`
Because \`NULL\` represents unknown data, comparing anything with \`NULL\` using \`=\` yields **UNKNOWN**, which fails the \`WHERE\` filter:
\`\`\`sql
-- ❌ BUG: Returns 0 rows every time!
SELECT * FROM dbo.Employees WHERE MiddleName = NULL;

-- ✅ CORRECT: Uses IS NULL operator
SELECT * FROM dbo.Employees WHERE MiddleName IS NULL;

-- ✅ Filter non-null values:
SELECT * FROM dbo.Employees WHERE MiddleName IS NOT NULL;
\`\`\``,
          diagram: `flowchart TD
    Expr["Expression: Salary = NULL"] --> Result["Yields UNKNOWN (Not True, Not False!)"]
    Result --> WHERE["WHERE filter discards UNKNOWN rows"]
    WHERE --> Zero["0 rows returned!"]
    
    Correct["Expression: Salary IS NULL"] --> TrueResult["Yields TRUE for missing salary values"]
    TrueResult --> Found["Returns correct matching rows!"]
    
    style Expr fill:#f8d7da,stroke:#dc3545,color:#842029
    style Result fill:#f8d7da,stroke:#dc3545,color:#842029
    style WHERE fill:#f8d7da,stroke:#dc3545,color:#842029
    style Zero fill:#f8d7da,stroke:#dc3545,color:#842029
    style Correct fill:#d1e7dd,stroke:#198754,color:#0f5132
    style TrueResult fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Found fill:#10b981,color:#fff`,
          steps: [
            {
              title: 'Step 1: Handling NULL in Calculations with COALESCE and ISNULL',
              explanation: 'Replace NULL with default fallbacks.',
              command: `-- ISNULL (SQL Server specific) / COALESCE (ANSI Standard):
SELECT 
    EmployeeId,
    FirstName,
    ISNULL(MiddleName, N'N/A') AS MiddleName,
    COALESCE(Bonus, 0.00) AS BonusAmount
FROM dbo.Employees;`
            }
          ],
          verification: 'Run queries using `IS NULL` and `COALESCE` to verify missing values are safely handled.',
          expectedResult: 'Mastery of three-valued logic and NULL safety.',
          summary: 'NULL means unknown. Always compare using IS NULL or IS NOT NULL, and use COALESCE/ISNULL for safe default fallbacks.'
        }
      ]
    }
  ]
};

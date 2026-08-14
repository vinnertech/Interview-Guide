// Level 2: SQL Server Installation, Tools & Schemas (In-Depth Expanded Edition)
export const level2InstallationTools = {
  id: 'level-2',
  title: 'Level 2: SQL Server Installation, Tools & Schemas',
  icon: 'bi-server',
  color: '#d97706',
  description: 'Master SQL Server Developer & Express editions, SSMS vs Azure Data Studio, Windows vs SQL Server Authentication, the dbo schema, and creating your first database in baby steps.',
  chapters: [
    {
      id: 'sql-server-tools-and-schemas',
      title: '02. Tooling, Connection & Database Schemas',
      lessons: [
        {
          id: 'sql-server-editions-and-tools',
          slug: 'sql-server-editions-and-tools',
          order: '2.1',
          title: 'SQL Server Editions, SSMS & Azure Data Studio',
          subtitle: 'Developer vs Express vs Enterprise editions, installing SQL Server Management Studio (SSMS), Windows Authentication vs SQL Server Authentication in baby steps.',
          chapterId: 'sql-server-tools-and-schemas',
          chapterTitle: '02. Tooling, Connection & Database Schemas',
          levelTitle: 'Level 2: SQL Server Installation, Tools & Schemas',
          goal: 'Understand SQL Server editions, install SSMS, and securely connect to local and remote database instances.',
          prerequisites: ['Level 1 completed.'],
          concept: `### SQL Server Editions Overview:
1. **Developer Edition (Recommended for Learning)**: Free, full-featured edition with 100% of Enterprise features for non-production development.
2. **Express Edition**: Free lightweight edition with a 10 GB database size limit and resource limits (ideal for small local applications).
3. **Enterprise / Standard Edition**: Paid production server licenses for mission-critical enterprise environments.

---

### Management Tools: SSMS vs Azure Data Studio
- **SQL Server Management Studio (SSMS)**: The flagship Windows administrative IDE for database design, query optimization, execution plan inspection, and server maintenance.
- **Azure Data Studio**: Cross-platform (Windows, macOS, Linux) lightweight editor with built-in Jupyter SQL notebooks.

---

### Authentication Modes:
- **Windows Authentication (Integrated Security - RECOMMENDED)**: Uses your Windows OS login credentials. Highly secure, no passwords stored in application connection strings!
- **SQL Server Authentication**: Uses internal database logins (e.g. \`sa\`, \`app_user\`) with passwords. **Never hardcode the \`sa\` password in frontend apps!**`,
          diagram: `flowchart TD
    Client["Developer Workstation (SSMS / App)"] --> Auth{"Authentication Gate"}
    Auth -->|Windows Auth| Win["Windows Active Directory / Local User (Trusted)"]
    Auth -->|SQL Auth| Internal["SQL Server Internal User Verification"]
    Win --> Engine["SQL Server Database Engine (MSSQLSERVER)"]
    Internal --> Engine
    Engine --> DBs["Databases: master, model, msdb, tempdb, CompanyDB"]
    
    style Client fill:#cfe2ff,stroke:#084298,color:#084298
    style Auth fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Win fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Internal fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Engine fill:#10b981,color:#fff
    style DBs fill:#e2e3e5,stroke:#41464b,color:#141619`,
          steps: [
            {
              title: 'Step 1: Connecting to Local SQL Server Instance in SSMS',
              explanation: 'Open SSMS and enter server connection details.',
              command: `-- Server type: Database Engine
-- Server name: localhost OR . OR (localdb)\\MSSQLLocalDB
-- Authentication: Windows Authentication`
            },
            {
              title: 'Step 2: Creating Your First Practice Database',
              explanation: 'Execute CREATE DATABASE and switch context with USE.',
              command: `-- Create learning database
CREATE DATABASE LearningDb;
GO

-- Switch active database context
USE LearningDb;
GO`
            }
          ],
          verification: 'In SSMS Object Explorer, refresh the Databases folder and verify `LearningDb` appears.',
          expectedResult: 'A fresh, isolated development database ready for schema design.',
          summary: 'Use SQL Server Developer Edition with SSMS and Windows Authentication for local development.'
        },
        {
          id: 'database-schemas-and-system-databases',
          slug: 'database-schemas-and-system-databases',
          order: '2.2',
          title: 'Understanding Schemas (dbo) & System Databases',
          subtitle: 'What is dbo? Why schemas separate security boundaries, and understanding master, model, msdb, and tempdb in baby steps.',
          chapterId: 'sql-server-tools-and-schemas',
          chapterTitle: '02. Tooling, Connection & Database Schemas',
          levelTitle: 'Level 2: SQL Server Installation, Tools & Schemas',
          goal: 'Master using database schemas (dbo, sales, hr) to organize tables and understand the 4 core system databases in SQL Server.',
          prerequisites: ['Lesson 2.1 completed.'],
          concept: `### What is a Database Schema?
A **Schema** is a logical namespace and security boundary inside a database that groups related tables, views, and stored procedures:
- \`dbo\` stands for **Database Owner** (the default schema in SQL Server).
- Custom schemas (e.g. \`sales.Orders\`, \`hr.Employees\`, \`audit.Logs\`) organize objects cleanly and allow assigning security permissions per schema!

---

### The 4 Mandatory System Databases in SQL Server:
1. **\`master\`**: Stores all server-level system metadata, server logins, and system configurations. **If master is lost, the SQL instance cannot start!**
2. **\`model\`**: The template database. Every new database created with \`CREATE DATABASE\` copies its initial structure and settings from \`model\`.
3. **\`msdb\`**: Used by SQL Server Agent for scheduled backup jobs, maintenance plans, and alerts.
4. **\`tempdb\`**: Temporary workspace for temporary tables (\`#temp\`), table variables (\`@table\`), sorting buffers, and version store. **Recreated clean every time SQL Server restarts!**`,
          diagram: `flowchart TD
    DB["Database: EnterpriseDb"] --> S1["Schema: hr\n- hr.Employees\n- hr.Salaries"]
    DB --> S2["Schema: sales\n- sales.Customers\n- sales.Orders"]
    DB --> S3["Schema: dbo (Default)\n- dbo.Configurations"]
    
    style DB fill:#cfe2ff,stroke:#084298,color:#084298
    style S1 fill:#fff3cd,stroke:#ffc107,color:#664d03
    style S2 fill:#d1e7dd,stroke:#198754,color:#0f5132
    style S3 fill:#e2e3e5,stroke:#41464b,color:#141619`,
          steps: [
            {
              title: 'Step 1: Creating and Using Custom Schemas',
              explanation: 'Create schemas to organize HR and Sales domain models.',
              command: `USE LearningDb;
GO

-- Create organizational schemas:
CREATE SCHEMA hr;
GO

CREATE SCHEMA sales;
GO

-- Create a table inside the hr schema:
CREATE TABLE hr.Employees (
    EmployeeId INT IDENTITY(1,1) PRIMARY KEY,
    FullName NVARCHAR(100) NOT NULL
);
GO`
            }
          ],
          verification: 'Query `SELECT * FROM hr.Employees;` and verify that schema-qualified queries execute successfully.',
          expectedResult: 'Clean, professional schema organization following SQL Server enterprise best practices.',
          summary: 'Schemas organize tables into logical domains and security boundaries. Always use two-part naming (schema.table) like dbo.Employees or hr.Employees.'
        }
      ]
    }
  ]
};

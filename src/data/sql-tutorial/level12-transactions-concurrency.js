// Level 12: Transactions, Concurrency & Locking (In-Depth Expanded Edition)
export const level12TransactionsConcurrency = {
  id: 'level-12',
  title: 'Level 12: Transactions, Concurrency & Locking',
  icon: 'bi-arrow-left-right',
  color: '#dc2626',
  description: 'Master ACID properties, BEGIN TRAN, COMMIT, ROLLBACK, TRY/CATCH error handling, isolation levels (READ COMMITTED, SNAPSHOT, SERIALIZABLE), and deadlock resolution in baby steps.',
  chapters: [
    {
      id: 'transactions-and-concurrency',
      title: '12. ACID Transactions & Concurrency Control',
      lessons: [
        {
          id: 'acid-transactions-and-try-catch',
          slug: 'acid-transactions-and-try-catch',
          order: '12.1',
          title: 'ACID Properties & Transaction Error Handling with TRY/CATCH',
          subtitle: 'Atomicity, Consistency, Isolation, Durability, why multi-statement bank transfers require transactions, @@TRANCOUNT, and safe rollback patterns in baby steps.',
          chapterId: 'transactions-and-concurrency',
          chapterTitle: '12. ACID Transactions & Concurrency Control',
          levelTitle: 'Level 12: Transactions, Concurrency & Locking',
          goal: 'Master wrapping multi-table business operations in atomic ACID transactions with TRY/CATCH blocks to guarantee zero partial data corruption.',
          prerequisites: ['Level 11 completed.'],
          concept: `### What is a Database Transaction?
A **Transaction** is a single logical unit of work containing one or more SQL operations that must execute under the **ACID Guarantee**:

---

### The 4 Pillars of ACID:
1. **Atomicity ("All or Nothing")**: Either **ALL** operations inside the transaction succeed (\`COMMIT\`), or if any failure occurs, **EVERY change is completely undone** (\`ROLLBACK\`).
2. **Consistency**: The database transitions only between valid states, never violating constraints (\`CHECK\`, \`FK\`).
3. **Isolation**: Concurrent transactions executing at the same time cannot see each other's uncommitted intermediate data.
4. **Durability**: Once committed, the changes survive permanently across server crashes and power outages via the **Transaction Log (\`LDF\`)**.`,
          diagram: `flowchart TD
    Begin["1. BEGIN TRANSACTION (Bank Transfer: $500 from Alice to Bob)"] --> Debit["2. Deduct $500 from Alice's Account"]
    Debit --> Credit["3. Add $500 to Bob's Account"]
    Credit --> Check{"Did both operations succeed?"}
    Check -->|Yes| Commit["4. COMMIT TRANSACTION (Permanent write to disk!)"]
    Check -->|No (Error / Crash / Constraint)| Rollback["4. ROLLBACK TRANSACTION (Undo all changes safely!)"]
    
    style Begin fill:#cfe2ff,stroke:#084298,color:#084298
    style Debit fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Credit fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Check fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Commit fill:#10b981,color:#fff
    style Rollback fill:#f8d7da,stroke:#dc3545,color:#842029`,
          steps: [
            {
              title: 'Step 1: Implementing a Production-Grade Transaction with TRY/CATCH',
              explanation: 'Safely transfer budget between departments.',
              command: `CREATE PROCEDURE dbo.sp_TransferDepartmentBudget
    @FromDeptId INT,
    @ToDeptId INT,
    @Amount DECIMAL(18,2)
AS
BEGIN
    SET NOCOUNT ON;
    SET XACT_ABORT ON; -- Automatically rolls back on fatal run-time errors!

    BEGIN TRY
        BEGIN TRANSACTION;

        -- 1. Deduct amount from source department:
        UPDATE dbo.Departments
        SET TotalBudget = TotalBudget - @Amount
        WHERE DepartmentId = @FromDeptId;

        -- 2. Add amount to destination department:
        UPDATE dbo.Departments
        SET TotalBudget = TotalBudget + @Amount
        WHERE DepartmentId = @ToDeptId;

        -- 3. If both succeeded, commit changes:
        COMMIT TRANSACTION;
        PRINT N'Budget transferred successfully!';
    END TRY
    BEGIN CATCH
        -- 4. In case of any failure, roll back all intermediate changes:
        IF @@TRANCOUNT > 0
        BEGIN
            ROLLBACK TRANSACTION;
        END;

        -- Re-throw error details to application caller:
        DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();
        RAISERROR(@ErrorMessage, 16, 1);
    END CATCH;
END;
GO`
            }
          ],
          verification: 'Attempt transferring budget to an invalid DepartmentId: verify the transaction rolls back and no money is deducted from the source department.',
          expectedResult: 'Bulletproof transactional consistency guaranteeing zero partial updates.',
          summary: 'Use BEGIN TRANSACTION with TRY/CATCH and @@TRANCOUNT checks to ensure multi-step updates succeed completely or roll back entirely.'
        }
      ]
    }
  ]
};

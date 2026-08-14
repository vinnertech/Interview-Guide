export const level4Intermediate = {
  id: 'level-4',
  title: 'Level 4: Intermediate Git (Fixing Mistakes)',
  icon: 'bi-tools',
  color: '#ffc107',
  description: 'Master time-travel and error recovery: demystify merge conflicts, line-by-line git blame, safe reverts vs dangerous resets, and saving temporary experiments with git stash.',
  chapters: [
    {
      id: 'fixing-mistakes',
      title: '07. Conflict Resolution & Undoing Changes',
      lessons: [
        {
          id: 'resolving-merge-conflicts',
          slug: 'resolving-merge-conflicts',
          order: '4.1',
          title: 'Demystifying & Resolving Merge Conflicts',
          subtitle: 'Why merge conflicts happen, understanding conflict markers ("<<<<<<<", "=======", ">>>>>>>"), and fixing them calmly.',
          chapterId: 'fixing-mistakes',
          chapterTitle: '07. Conflict Resolution & Undoing Changes',
          levelTitle: 'Level 4: Intermediate Git (Fixing Mistakes)',
          goal: 'Understand the anatomy of a merge conflict and follow a calm, reliable 4-step process to resolve it.',
          prerequisites: [
            'Level 2 completed (Branching & Merging).'
          ],
          concept: `**Why do Merge Conflicts happen?**\nGit is remarkably smart at merging. If developer Alice edits the top of a file on \'feature-a\', and developer Bob edits the bottom of the same file on \'main\', Git merges them automatically without asking questions.\n\nA **Merge Conflict** only happens when:\n1. Two different branches edited the **exact same lines of code in the same file**.\n2. One branch edited a file while another branch deleted that same file.\n\nIn this scenario, Git stops and says: *"I cannot read your minds to know which code is the correct one. Please look at both versions, decide which one to keep, and tell me when you are done!"*\n\n### The Anatomy of Conflict Markers:\n\'\'\'text\n<<<<<<< HEAD (Current Branch / Target)\nconst API_URL = "https://api.vinnertech.com/v1";\n=======\nconst API_URL = "https://api.vinnertech.com/v2-beta";\n>>>>>>> feature/new-api (Incoming Branch)\n\'\'\'\n\n- **\'<<<<<<< HEAD\'**: Shows the code that exists on your current active branch.\n- **\'=======\'**: The dividing line between the two versions.\n- **\'>>>>>>> branch-name\'**: Shows the incoming code from the branch you are trying to merge.`,
          diagram: `flowchart TD
    A["Branch A edits Line 40: timeout = 5000"]
    B["Branch B edits Line 40: timeout = 8000"]
    A & B --> C["git merge triggers CONFLICT!"]
    C --> D["Git inserts <<<<<<< and >>>>>>> markers"]
    D --> E["Developer reviews & chooses correct line"]
    E --> F["Developer deletes markers, runs git add, and commits!"]
    
    style C fill:#f8d7da,stroke:#dc3545,color:#842029
    style E fill:#fff3cd,stroke:#ffc107,color:#664d03
    style F fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Check Which Files Are in Conflict',
              explanation: 'When Git halts with a conflict, run "git status" to see the list of "Unmerged paths".',
              command: 'git status',
              output: `You have unmerged paths.\n  (fix conflicts and run "git commit")\n\nUnmerged paths:\n  (use "git add <file>..." to mark resolution)\n\tboth modified:   src/config.js`
            },
            {
              title: 'Step 2: Open the File & Resolve the Conflict',
              explanation: 'Open "src/config.js" in VS Code or your editor. Decide whether to keep the HEAD version, the incoming version, or combine both. **Delete the conflict markers ("<<<<<<<", "=======", ">>>>>>>") completely**.',
              command: null
            },
            {
              title: 'Step 3: Stage the Resolved File',
              explanation: 'Tell Git that you have resolved the conflict in this file by running "git add".',
              command: 'git add src/config.js',
              commandDescription: 'Marks src/config.js as resolved.'
            },
            {
              title: 'Step 4: Complete the Merge Commit',
              explanation: 'Finalize the merge. Git will pre-populate a default merge commit message.',
              command: 'git commit -m "Merge branch \'feature/new-api\' and resolve config conflict"',
              output: `[main 4f2c91a] Merge branch 'feature/new-api' and resolve config conflict`
            },
            {
              title: 'Emergency Abort: If you panic or make a mess',
              explanation: 'If you made a mistake during conflict resolution and want to return everything to the exact state before you started the merge, run "git merge --abort".',
              command: 'git merge --abort',
              commandDescription: 'Cancels the merge and restores the pre-merge state safely.'
            }
          ],
          verification: 'Run "git status". It should report "nothing to commit, working tree clean".',
          expectedResult: 'The merge is successfully completed with conflict markers removed.',
          commonMistakes: [
            {
              problem: 'Accidentally leaving "<<<<<<< HEAD" or ">>>>>>>" in the source code and committing.',
              why: 'Forgetting to delete the marker lines causes syntax errors that break your build or application runtime.',
              fix: 'Always search your codebase for "<<<<<<<" before committing a merge resolution.'
            }
          ],
          quiz: {
            question: 'What should you do if a merge conflict becomes overwhelming and you want to completely cancel the merge?',
            options: [
              'Delete the `.git` folder.',
              'Run `git merge --abort` to return to the clean state before the merge was attempted.',
              'Restart your computer.',
              'Run `git push --force`.'
            ],
            correctIndex: 1,
            explanation: '"git merge --abort" safely cancels the in-progress merge and restores your repository to the state prior to calling "git merge".'
          },
          summary: 'Merge conflicts happen when the same lines are edited differently. Open the file, choose the correct code, delete the "<<<<<<<" markers, run "git add", and "git commit".'
        },
        {
          id: 'undoing-uncommitted-changes',
          slug: 'undoing-uncommitted-changes',
          order: '4.2',
          title: 'Undoing Uncommitted Changes: "git restore" & "git clean"',
          subtitle: 'Discard uncommitted edits, unstage files from the staging cart, and remove untracked files.',
          chapterId: 'fixing-mistakes',
          chapterTitle: '07. Conflict Resolution & Undoing Changes',
          levelTitle: 'Level 4: Intermediate Git (Fixing Mistakes)',
          goal: 'Learn how to safely discard local uncommitted file modifications using modern "git restore".',
          prerequisites: [
            'Level 1 mental model (Working Directory vs Staging Area).'
          ],
          concept: `We all write code that turns out to be a dead end. How do you throw away your messy local edits and restore your files to the clean state of the last commit?\n\nIn modern Git (Git 2.23+), the **\'git restore\'** command handles all uncommitted undo operations:\n\n1. **Unstage a file** (move from Staging cart back to Working Directory): \'git restore --staged <file>\'\n2. **Discard edits in Working Directory** (restore file to match last commit): \'git restore <file>\'\n3. **Delete all untracked garbage files**: \'git clean -fd\'`,
          steps: [
            {
              title: 'Step 1: Discard Edits in a Specific File',
              explanation: 'If you modified "app.js" but want to throw away all edits and restore it to the last commit snapshot:',
              command: 'git restore app.js',
              commandDescription: 'Discards local uncommitted changes in app.js.'
            },
            {
              title: 'Step 2: Unstage a File from the Staging Area',
              explanation: 'If you accidentally ran "git add secret.txt" and want to remove it from the staging cart without deleting your edits:',
              command: 'git restore --staged secret.txt',
              commandDescription: 'Removes secret.txt from staging while keeping your local edits intact in the Working Directory.'
            },
            {
              title: 'Step 3: Remove All Untracked Files and Folders',
              explanation: 'Remove all untracked test files created in your working directory. (Use "-n" first for a dry run preview!).',
              command: 'git clean -n  # Preview what will be deleted\ngit clean -fd # Force delete untracked files (f) and directories (d)',
              output: `Would remove test-scratch.txt\nRemoving test-scratch.txt`
            }
          ],
          warning: {
            title: '"git restore <file>" Cannot Be Undone!',
            message: 'Uncommitted changes have never been saved to Git\'s snapshot database. Once you run `git restore <file>`, those unstaged edits are permanently erased from your hard drive!',
            isDanger: true
          },
          verification: 'Run "git status" to verify the working tree is clean.',
          expectedResult: 'All unwanted uncommitted edits have been reverted.',
          quiz: {
            question: 'What is the modern Git command to unstage a file from the staging area without losing your local edits?',
            options: [
              'git delete --staged <file>',
              'git restore --staged <file>',
              'git unadd <file>',
              'git clean --staged'
            ],
            correctIndex: 1,
            explanation: '"git restore --staged <file>" moves the file out of the staging cart and back into unstaged working directory state.'
          },
          summary: 'Use "git restore <file>" to discard local edits, "git restore --staged <file>" to unstage files, and "git clean -fd" to remove untracked files.'
        },
        {
          id: 'undoing-committed-changes-revert-reset',
          slug: 'undoing-committed-changes-revert-reset',
          order: '4.3',
          title: 'Undoing Committed History: "git revert" vs. "git reset"',
          subtitle: 'The essential distinction between public-safe forward reverts and history-rewriting resets.',
          chapterId: 'fixing-mistakes',
          chapterTitle: '07. Conflict Resolution & Undoing Changes',
          levelTitle: 'Level 4: Intermediate Git (Fixing Mistakes)',
          goal: 'Master the difference between "git revert" (safe for shared branches) and "git reset" (--soft, --mixed, --hard).',
          prerequisites: [
            'Lesson 4.2 completed.'
          ],
          concept: `When you need to undo a commit that was already recorded in history, you have two choices:\n\n### 1. \'git revert\' (The Safe Forward Undo)\n\'git revert <commit-hash>\' does NOT delete history. Instead, it creates a **BRAND NEW commit** that applies the exact opposite mathematical inverse of the bad commit (if the bad commit added line 10, the revert commit removes line 10).\n\n✅ **Best Practice**: Always use \'git revert\' on public branches (\'main\') because it does not alter past history for your teammates!\n\n---\n\n### 2. \'git reset\' (The Time-Machine History Rewriter)\n\'git reset\' literally moves the branch pointer backwards in time as if the bad commit never happened.\n\n### The 3 Modes of \'git reset\':\n- **\'--soft\'**: Moves HEAD back. Keeps all changes staged in the Staging Area. (Great for redoing a commit message).\n- **\'--mixed\'** (Default): Moves HEAD back. Keeps changes in Working Directory but unstages them.\n- **\'--hard\' (DANGER)**: Moves HEAD back and **permanently destroys all uncommitted changes** in your Working Directory!`,
          diagram: `flowchart TD
    subgraph Revert ["git revert (Safe for Shared Branches)"]
        R1["Commit 1"] --> R2["Commit 2 (Bad Bug)"] --> R3["Commit 3 (Revert Commit 2 - Inverses changes!)"]
    end

    subgraph Reset ["git reset (Rewrites Local History)"]
        S1["Commit 1 (HEAD moves here!)"] -. "Commit 2 was deleted from history" .-> S2["Commit 2 (Vanished)"]
    end
    
    style Revert fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Reset fill:#f8d7da,stroke:#dc3545,color:#842029`,
          steps: [
            {
              title: 'Step 1: Safely Revert a Bad Commit on Main',
              explanation: 'Create a new commit that undoes the changes of commit "7a2f1b8".',
              command: 'git revert 7a2f1b8',
              output: `[main 8c1e2f9] Revert "feat: Add broken payment processor"\n 1 file changed, 15 deletions(-)`
            },
            {
              title: 'Step 2: Undo the Last Local Commit with "--soft"',
              explanation: 'If you made a commit locally 1 minute ago and want to uncommit it while keeping your files safely staged in your shopping cart:',
              command: 'git reset --soft HEAD~1',
              commandDescription: 'Moves HEAD back 1 commit (HEAD~1). Your files remain staged and ready to re-commit.'
            }
          ],
          warning: {
            title: 'The Golden Rule of "git reset"',
            message: '**NEVER use "git reset" on commits you have already pushed to GitHub!** If teammates have pulled those commits, resetting will break their repository history and cause severe push conflicts. Only reset private local commits.',
            isDanger: true
          },
          verification: 'Run "git log --oneline -n 3" to verify the commit history reflects your revert or reset.',
          expectedResult: '"git revert" adds a clean new inverse commit; "git reset --soft" places previous files back in staging.',
          quiz: {
            question: 'Why is "git revert" preferred over "git reset" when undoing a mistake on the shared "main" branch?',
            options: [
              '`git revert` is faster to type.',
              '`git revert` does not rewrite history; it safely adds a new commit that inverses the changes, preserving history for all team members.',
              '`git reset` is only for Linux.',
              '`git revert` deletes all files.'
            ],
            correctIndex: 1,
            explanation: '"git revert" preserves the commit history chain, ensuring nobody on your team experiences diverged history conflicts.'
          },
          summary: 'Use "git revert <hash>" for shared public branches (creates a new inverse commit). Use "git reset --soft HEAD~1" for private local commits.'
        },
        {
          id: 'git-stash-temporary-storage',
          slug: 'git-stash-temporary-storage',
          order: '4.4',
          title: 'Saving Work Temporarily: "git stash"',
          subtitle: 'The ultimate clipboard for stashing half-baked experiments so you can switch branches instantly.',
          chapterId: 'fixing-mistakes',
          chapterTitle: '07. Conflict Resolution & Undoing Changes',
          levelTitle: 'Level 4: Intermediate Git (Fixing Mistakes)',
          goal: 'Use "git stash" to store uncommitted work on a temporary shelf, switch branches to fix an urgent bug, and pop your work back.',
          prerequisites: [
            'Level 2 completed (Branching).'
          ],
          concept: `**The Real-World Dilemma:**\nYou are halfway through writing a complex 200-line feature on \'feature/checkout\'. Nothing compiles yet. Suddenly, your manager says:\n\n> *"Production is down! Drop everything and fix the login button on the main branch right now!"*\n\nIf you try to switch branches with 'git switch main', Git will block you because you have uncommitted changes. But you don't want to create a messy commit called *"half-finished broken code"*.\n\n### The Solution: \'git stash\'\n\'git stash\' takes all your dirty, uncommitted working directory changes and stashes them onto a **temporary clipboard shelf**. Your working directory becomes 100% clean, allowing you to switch branches, fix the bug, and then restore your stashed work later!`,
          steps: [
            {
              title: 'Step 1: Stash Your Dirty Changes',
              explanation: 'Save your uncommitted modifications onto the stash shelf with a descriptive label.',
              command: 'git stash save "WIP: halfway through stripe checkout"',
              output: `Saved working directory and index state On feature/checkout: WIP: halfway through stripe checkout`
            },
            {
              title: 'Step 2: Verify Your Working Directory is Clean',
              explanation: 'Now you are completely free to switch branches and do other work!',
              command: 'git status',
              output: `nothing to commit, working tree clean`
            },
            {
              title: 'Step 3: List All Stashed Items',
              explanation: 'Inspect your shelf of stashed work.',
              command: 'git stash list',
              output: `stash@{0}: On feature/checkout: WIP: halfway through stripe checkout`
            },
            {
              title: 'Step 4: Restore (Pop) Your Stashed Work',
              explanation: 'When you are ready to resume work, pop the changes off the shelf and apply them back to your files.',
              command: 'git stash pop',
              output: `On branch feature/checkout\nChanges not staged for commit:\n\tmodified:   checkout.js\nDropped stash@{0} (a8b2c1f...)`
            }
          ],
          practice: {
            title: 'Stash Untracked Files Too',
            task: 'By default, "git stash" only stashes modified tracked files. What flag do you include to also stash brand-new untracked files?',
            hint: 'Use the "-u" (or "--include-untracked") flag.',
            solution: {
              explanation: 'Include untracked files in the stash:',
              command: 'git stash -u'
            },
            expectedOutcome: 'Both modified and untracked files are tucked away safely in the stash.'
          },
          quiz: {
            question: 'What is the difference between "git stash pop" and "git stash apply"?',
            options: [
              '`git stash pop` applies changes and deletes them from the stash list; `git stash apply` applies changes but leaves them saved in the stash list.',
              '`git stash pop` deletes all branches.',
              '`git stash apply` only works on Windows.',
              'They are exact identical aliases.'
            ],
            correctIndex: 0,
            explanation: '"pop" restores the changes and removes the item from the stash shelf. "apply" restores the changes while keeping a copy in the stash.'
          },
          summary: 'Use "git stash" to temporarily shelf uncommitted edits, and "git stash pop" to restore your work when ready.'
        }
      ]
    }
  ]
};

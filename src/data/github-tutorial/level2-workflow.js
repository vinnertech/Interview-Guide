export const level2Workflow = {
  id: 'level-2',
  title: 'Level 2: Daily Developer Workflow',
  icon: 'bi-git',
  color: '#198754',
  description: 'Master the core daily loop: inspecting diffs, crafting atomic commits, isolated feature branching, fast-forward vs 3-way merging, and syncing with remote.',
  chapters: [
    {
      id: 'daily-loop',
      title: '03. Tracking & Committing Changes',
      lessons: [
        {
          id: 'tracking-changes-and-diffs',
          slug: 'tracking-changes-and-diffs',
          order: '2.1',
          title: 'Inspecting Changes: "git status" & "git diff"',
          subtitle: 'See exactly what lines changed, what is staged vs unstaged, and compare working states.',
          chapterId: 'daily-loop',
          chapterTitle: '03. Tracking & Committing Changes',
          levelTitle: 'Level 2: Daily Developer Workflow',
          goal: 'Learn how to inspect unstaged and staged changes line-by-line using "git diff" before committing.',
          prerequisites: [
            'Level 1 completed (Mental Model & First Commit).'
          ],
          concept: `Never commit blindly! Professional engineers always review their changes line-by-line before staging or committing them to avoid accidentally saving debug console logs, passwords, or incomplete syntax.\n\n### The Two Flavors of \'git diff\':\n1. **\'git diff\'** (without flags): Compares your **Working Directory** against the **Staging Area**. It shows changes you have made that are *NOT YET staged*.\n2. **\'git diff --staged\'** (or \'--cached\'): Compares the **Staging Area** against the **Last Commit**. It shows changes that *ARE staged and ready to be committed*!`,
          diagram: `flowchart TD
    A["Working Directory (Edited Files)"] -- "git diff (Unstaged Changes)" --> B["Staging Area (Index)"]
    B -- "git diff --staged (Ready to Commit)" --> C[("Last Commit (HEAD)")]
    
    style A fill:#fff3cd,stroke:#ffc107,color:#664d03
    style B fill:#cff4fc,stroke:#0dcaf0,color:#055160
    style C fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Check Current Status',
              explanation: 'Run "git status" to see an overview of modified and untracked files.',
              command: 'git status',
              output: `On branch main\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n\tmodified:   src/App.js\n\nno changes added to commit (use "git add" to track)`
            },
            {
              title: 'Step 2: Inspect Line-by-Line Changes (Unstaged)',
              explanation: 'View the exact lines that were added (green +) and removed (red -).',
              command: 'git diff',
              output: `diff --git a/src/App.js b/src/App.js\nindex 83a21..b91c2 100644\n--- a/src/App.js\n+++ b/src/App.js\n@@ -10,3 +10,4 @@ function App() {\n-  const title = "Old Title";\n+  const title = "Welcome to Our Platform";\n+  console.log("Debug mounted");`
            },
            {
              title: 'Step 3: Stage Specific Files',
              explanation: 'Stage only the file you intend to commit.',
              command: 'git add src/App.js',
              commandDescription: 'Moves src/App.js into the Staging Area.'
            },
            {
              title: 'Step 4: Inspect Staged Changes Before Committing',
              explanation: 'Confirm what is inside the staging cart by running "git diff --staged". Notice that "git diff" alone will now return empty because the changes are staged!',
              command: 'git diff --staged',
              output: `diff --git a/src/App.js b/src/App.js\nindex 83a21..b91c2 100644\n--- a/src/App.js\n+++ b/src/App.js\n@@ -10,3 +10,3 @@ function App() {\n-  const title = "Old Title";\n+  const title = "Welcome to Our Platform";`
            }
          ],
          verification: 'Running "git diff --staged" shows the exact patch that will be saved in your next commit snapshot.',
          expectedResult: 'You can clearly distinguish between unstaged diffs and staged diffs.',
          commonMistakes: [
            {
              problem: 'Running "git diff" after running "git add ." and wondering why it produces no output.',
              why: '"git diff" only checks unstaged files. Once staged, you must pass the "--staged" flag to view the diff.',
              fix: 'Use "git diff --staged" to view staged changes.'
            }
          ],
          quiz: {
            question: 'Which command shows changes that have been added to the staging area and are ready for the next commit?',
            options: [
              'git diff',
              'git diff --staged',
              'git status --all',
              'git show --staged'
            ],
            correctIndex: 1,
            explanation: '"git diff --staged" (or "git diff --cached") compares the staging area against the last commit (HEAD).'
          },
          summary: 'Use "git diff" to review unstaged modifications, and "git diff --staged" to review changes currently in the staging cart before committing.'
        },
        {
          id: 'meaningful-commits-and-messages',
          slug: 'meaningful-commits-and-messages',
          order: '2.2',
          title: 'Crafting Atomic Commits & Conventional Messages',
          subtitle: 'The industry gold standard for writing clean commit history that teammates and future you will appreciate.',
          chapterId: 'daily-loop',
          chapterTitle: '03. Tracking & Committing Changes',
          levelTitle: 'Level 2: Daily Developer Workflow',
          goal: 'Understand the concept of atomic commits and master the Conventional Commits specification.',
          prerequisites: [
            'Lesson 2.1 completed.'
          ],
          concept: `**What is an Atomic Commit?**\nAn **atomic commit** is a commit that encapsulates **one single logical change**. It should do one thing and do it completely.\n\n❌ **Bad (Mega-Commit)**: Editing the login page, refactoring the database, fixing 3 unrelated bugs, and updating CSS styles all in one commit with the message \'"fixed stuff and updated app"\'.\n\nWhy is this bad?\n- If the database change breaks production, reverting that commit will also delete your valid login page and CSS fixes!\n- Code reviews become an unreadable nightmare for your team.\n\n✅ **Good (Atomic Commits)**:\n- Commit 1: \'feat: Add login authentication form\'\n- Commit 2: \'fix: Correct mobile responsive padding on navbar\'\n- Commit 3: \'refactor: Optimize user SQL query index\'\n\n### The Conventional Commits Standard\nProfessional teams use the Conventional Commits format:\n\'\'\'text\n<type>(<optional scope>): <short description in imperative mood>\n\'\'\'\n\nCommon Types:\n- **\'feat\'**: A new feature for the user.\n- **\'fix\'**: A bugfix for the user.\n- **\'docs\'**: Changes to documentation only (e.g. README).\n- **\'style\'**: Formatting, missing semi-colons, no code logic changes.\n- **\'refactor\'**: Code change that neither fixes a bug nor adds a feature.\n- **\'test\'**: Adding or modifying automated unit/integration tests.\n- **\'chore\'**: Updating dependencies, build scripts, or config files.`,
          diagram: `flowchart TD
    subgraph BadHistory ["Confusing Mega-Commit History"]
        M1["Commit: 'updated stuff' (50 files, 4 different features)"]
    end

    subgraph AtomicHistory ["Clean Atomic Commit History"]
        A1["feat(auth): Add JWT token generation"] --> A2["fix(nav): Fix hamburger icon on mobile"] --> A3["docs: Update setup instructions in README"]
    end
    
    style BadHistory fill:#f8d7da,stroke:#dc3545,color:#842029
    style AtomicHistory fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Writing Commit Messages with Imperative Mood',
              explanation: 'Write commit messages in the **imperative present tense** (as if commanding the codebase). Complete the sentence: *"If applied, this commit will..."*\n\n- ✅ "feat: Add logout button to navigation" (If applied, this commit will *Add logout button*)\n- ❌ "Added logout button"\n- ❌ "Adds logout button"\n- ❌ "Adding logout button"',
              command: 'git commit -m "feat(auth): Add user password validation"'
            },
            {
              title: 'Amending the Last Commit (Fixing typos)',
              explanation: 'If you made a commit 10 seconds ago and realized you made a typo in the message or forgot to include a single file, you can amend it instead of creating a new commit.',
              command: 'git commit --amend -m "feat(auth): Add user password length validation"',
              commandDescription: 'Replaces the most recent commit with an updated message or newly staged files.'
            }
          ],
          warning: {
            title: 'Do Not Amend Public Commits!',
            message: '"git commit --amend" rewrites Git history by creating a brand new commit ID. **Only amend local commits** that you have NOT yet pushed to GitHub. Never amend commits that teammates have already pulled!',
            isDanger: true
          },
          verification: 'Run "git log --oneline -n 3" to verify your commits follow a clean, readable pattern.',
          expectedResult: `9f3c1a2 (HEAD -> main) feat(auth): Add user password length validation\n7a2f1b8 docs: Update project README`,
          quiz: {
            question: 'Which of the following is an example of a properly formatted Conventional Commit message?',
            options: [
              'Fixed some bugs in database yesterday',
              'fix(api): Resolve null pointer exception in payment endpoint',
              'WIP: working on stuff',
              'update'
            ],
            correctIndex: 1,
            explanation: '"fix(api): Resolve null pointer exception in payment endpoint" follows the "<type>(<scope>): <imperative description>" standard.'
          },
          summary: 'Keep commits atomic (one logical change per commit) and follow Conventional Commits ("feat:", "fix:", "docs:", "refactor:") in imperative present tense.'
        }
      ]
    },
    {
      id: 'branching-and-merging',
      title: '04. Branching & Merging',
      lessons: [
        {
          id: 'understanding-branches',
          slug: 'understanding-branches',
          order: '2.3',
          title: 'Understanding Branches: Isolated Parallel Universes',
          subtitle: 'Why branching is Git\'s killer feature, how branch pointers work, and modern `git switch`.',
          chapterId: 'branching-and-merging',
          chapterTitle: '04. Branching & Merging',
          levelTitle: 'Level 2: Daily Developer Workflow',
          goal: 'Create, switch between, and list Git branches to develop features in complete isolation from the production "main" branch.',
          prerequisites: [
            'Completed Chapter 03 (Tracking & Commits).'
          ],
          concept: `**What is a Branch?**\nIn Git, a branch is an isolated timeline of development. You can think of it as creating a **parallel universe** of your codebase.\n\nWhen you create a feature branch (e.g. \'feature/dark-mode\'), you can write experimental code, break things, and commit changes freely. The stable production code on the **\'main\'** branch remains 100% untouched and safe!\n\n### How Git Implements Branches (The Lightweight Pointer)\nIn older version control systems, creating a branch copied the entire project folder on disk (which was slow and ate up gigabytes of space).\n\nIn Git, **a branch is literally just a 41-byte text file** that points to a specific commit hash! Because it is just a pointer, creating a branch in Git is instantaneous (taking less than 1 millisecond) whether your repo has 10 files or 100,000 files.\n\n### What is \'HEAD\'?\n\'HEAD\' is Git's internal pointer that answers: *"Where am I right now?"* When you switch branches, Git simply points \'HEAD\' to the new branch and updates your Working Directory to match that snapshot.`,
          diagram: `flowchart TD
    C1["Commit #1 (Initial)"] --> C2["Commit #2 (Setup)"] --> C3["Commit #3 (Stable)"]
    
    C3 --> C4["Commit #4 (Navbar)"]
    C3 --> F1["Commit #5 (Dark Mode Test 1)"] --> F2["Commit #6 (Dark Mode Test 2)"]
    
    subgraph MainBranch ["main branch (Production Safe)"]
        C4
    end

    subgraph FeatureBranch ["feature/dark-mode branch (Experiment)"]
        F1
        F2
    end
    
    style MainBranch fill:#d1e7dd,stroke:#198754,color:#0f5132
    style FeatureBranch fill:#cff4fc,stroke:#0dcaf0,color:#055160`,
          steps: [
            {
              title: 'Step 1: List Existing Branches',
              explanation: 'Check which branch you are currently on. The active branch is highlighted with an asterisk (*).',
              command: 'git branch',
              output: `* main`
            },
            {
              title: 'Step 2: Create and Switch to a New Branch',
              explanation: 'Use the modern "git switch -c" command (introduced in Git 2.23) to create a new branch and switch to it in one command. (The legacy equivalent is "git checkout -b <name>").',
              command: 'git switch -c feature/user-profile',
              output: `Switched to a new branch 'feature/user-profile'`
            },
            {
              title: 'Step 3: Make Changes on the Feature Branch',
              explanation: 'Create a new file on your feature branch, stage it, and commit it.',
              command: 'echo "UserProfile Component" > profile.js\ngit add profile.js\ngit commit -m "feat: Create user profile component"',
              output: `[feature/user-profile e3a18f2] feat: Create user profile component\n 1 file changed, 1 insertion(+)`
            },
            {
              title: 'Step 4: Switch Back to main',
              explanation: 'Switch back to "main". Notice in your file explorer that "profile.js" disappears! It is safely stored in the "feature/user-profile" branch and will not touch "main" until merged.',
              command: 'git switch main',
              output: `Switched to branch 'main'`
            }
          ],
          verification: 'Run "git branch" to confirm both "main" and "feature/user-profile" exist and "main" is active.',
          expectedResult: `  feature/user-profile\n* main`,
          commonMistakes: [
            {
              problem: 'Working directly on "main" for days without creating a branch.',
              why: 'If your experimental work is broken when an emergency production bug fix is required, your broken code blocks the release.',
              fix: 'Rule of thumb: **Never commit directly to "main"**. Always create a branch ("git switch -c feature/xyz").'
            },
            {
              problem: 'Forgetting to switch branches before editing code.',
              why: 'You might accidentally write feature code on the wrong branch.',
              fix: 'Always check "git status" or "git branch" before you start coding.'
            }
          ],
          quiz: {
            question: 'What is a branch in Git internally?',
            options: [
              'A complete duplicate copy of the entire project folder taking up large disk space.',
              'A lightweight 41-byte pointer to a specific commit hash.',
              'A special server hosted on GitHub.',
              'A compression archive file.'
            ],
            correctIndex: 1,
            explanation: 'In Git, branches are simply lightweight pointers to commits. That is why creating and deleting branches is instantaneous.'
          },
          summary: 'Branches allow isolated parallel development. Use "git switch -c <name>" to create and switch branches, and "git switch main" to return to the main branch.'
        },
        {
          id: 'merging-branches',
          slug: 'merging-branches',
          order: '2.4',
          title: 'Merging Branches: Fast-Forward vs. 3-Way Merge',
          subtitle: 'How to bring feature branch code back into main, understand merge algorithms, and clean up branches.',
          chapterId: 'branching-and-merging',
          chapterTitle: '04. Branching & Merging',
          levelTitle: 'Level 2: Daily Developer Workflow',
          goal: 'Merge a completed feature branch back into the "main" branch and delete the obsolete feature branch.',
          prerequisites: [
            'Lesson 2.3 completed (Branches).'
          ],
          concept: `**What is Merging?**\nMerging is the process of taking the independent commit history from one branch and integrating it into another branch.\n\n### The Two Types of Merges in Git:\n\n1. **Fast-Forward Merge (Linear)**:\nIf the \'main\' branch has NOT received any new commits since you created your feature branch, Git does not need to do any complex calculations. It simply moves the \'main\' pointer *fast-forward* to point to the latest commit on your feature branch!\n\n2. **3-Way Merge (Recursive / Merge Commit)**:\nIf other teammates committed changes to \'main\' while you were working on your feature branch, the histories have diverged. Git looks at:\n- 1. The Common Ancestor commit (where you split off)\n- 2. The tip of \'main\'\n- 3. The tip of your feature branch\n\nGit combines the changes automatically and creates a special **Merge Commit** with two parent commits!`,
          diagram: `flowchart TD
    subgraph FastForward ["Fast-Forward Merge (No new commits on main)"]
        FF1["C1"] --> FF2["C2"] --> FF3["C3 (main was here)"] --> FF4["C4 (feature)"]
        FF4 -.-> FF_MAIN["main pointer just moves to C4!"]
    end

    subgraph ThreeWay ["3-Way Merge Commit (Diverged branches)"]
        TW1["C1"] --> TW2["C2 (Ancestor)"]
        TW2 --> TW3["C3 (Teammate commit on main)"]
        TW2 --> TW4["C4 (Your feature commit)"]
        TW3 --> TW5["Merge Commit (Combines C3 & C4)"]
        TW4 --> TW5
    end
    
    style FastForward fill:#d1e7dd,stroke:#198754,color:#0f5132
    style ThreeWay fill:#cff4fc,stroke:#0dcaf0,color:#055160`,
          steps: [
            {
              title: 'Step 1: Switch to the Target Receiving Branch',
              explanation: 'Always switch to the branch you want to merge **INTO** (usually "main").',
              command: 'git switch main',
              output: `Switched to branch 'main'`
            },
            {
              title: 'Step 2: Merge the Feature Branch',
              explanation: 'Execute "git merge" specifying the name of the feature branch you want to bring in.',
              command: 'git merge feature/user-profile',
              output: `Updating 7a2f1b8..e3a18f2\nFast-forward\n profile.js | 1 +\n 1 file changed, 1 insertion(+)`
            },
            {
              title: 'Step 3: Delete the Obsolete Feature Branch',
              explanation: 'Once a feature branch is merged, its code is safely recorded in "main". Delete the feature branch pointer to keep your repository clean.',
              command: 'git branch -d feature/user-profile',
              output: `Deleted branch feature/user-profile (was e3a18f2).`
            }
          ],
          verification: 'Run "git log --oneline --graph" to view the commit graph showing your merged changes on "main".',
          expectedResult: `* e3a18f2 (HEAD -> main) feat: Create user profile component\n* 7a2f1b8 Initial commit: Add project README`,
          commonMistakes: [
            {
              problem: 'Running "git merge main" while still sitting on "feature/user-profile".',
              why: 'This pulls "main" into your feature branch instead of bringing your feature into "main".',
              fix: 'Always switch to the destination branch first ("git switch main"), then run "git merge feature-name".'
            },
            {
              problem: 'Using "-D" (uppercase) instead of "-d" (lowercase) when deleting branches.',
              why: '"-d" safely refuses to delete a branch if it contains unmerged commits. "-D" forces deletion and can cause data loss.',
              fix: 'Always use safe lowercase "git branch -d". Only use "-D" if you intentionally want to discard abandoned experiments.'
            }
          ],
          quiz: {
            question: 'When does Git perform a Fast-Forward merge instead of creating a 3-way merge commit?',
            options: [
              'When the target branch (main) has received no new commits since the feature branch was created.',
              'When both branches have exactly 10 commits.',
              'When you merge using a GitHub Pull Request.',
              'When the repository is smaller than 10MB.'
            ],
            correctIndex: 0,
            explanation: 'A Fast-Forward merge occurs when there is a straight linear path from the target branch to the feature branch with no intervening commits.'
          },
          summary: 'To merge: switch to the destination branch ("git switch main"), run "git merge <feature-branch>", and delete the merged branch with "git branch -d <feature-branch>".'
        },
        {
          id: 'syncing-remote-fetch-pull',
          slug: 'syncing-remote-fetch-pull',
          order: '2.5',
          title: 'Syncing with GitHub: "git fetch" vs. "git pull"',
          subtitle: 'Understand the critical difference between fetching metadata and merging remote changes.',
          chapterId: 'branching-and-merging',
          chapterTitle: '04. Branching & Merging',
          levelTitle: 'Level 2: Daily Developer Workflow',
          goal: 'Understand what remote-tracking branches are and when to use "git fetch" vs "git pull".',
          prerequisites: [
            'Lesson 2.4 completed (Merging).'
          ],
          concept: `When collaborating with team members on GitHub, your teammates will constantly push new commits to the cloud. How do you bring those changes down to your computer?\n\n### The Difference:\n- **\'git fetch\' (Safe Inspection)**: Downloads new commits, branches, and tags from GitHub into your local \'.git\' database, but **DOES NOT touch your active Working Directory or modify your files**! It updates your remote-tracking pointers (e.g. \'origin/main\'). This is 100% safe and never causes merge conflicts.\n- **\'git pull\' (Fetch + Auto-Merge)**: Runs \'git fetch\' and immediately attempts to merge the downloaded commits into your active local branch.\n\n\'\'\'text\ngit pull = git fetch + git merge FETCH_HEAD\n\'\'\'\n\n### The Remote Tracking Branch (\'origin/main\')\nThink of \'origin/main\' as a local bookmark reflecting what the \'main\' branch looked like on GitHub the last time you fetched.`,
          diagram: `flowchart LR
    subgraph GitHub ["GitHub Cloud (origin)"]
        GH_MAIN["main: Commit C1, C2, C3"]
    end

    subgraph LocalDB ["Your Local .git Database"]
        REMOTE_REF["origin/main (Bookmark)"]
        LOCAL_MAIN["local main branch"]
    end

    subgraph Workspace ["Your Working Directory"]
        FILES["Active Files in VS Code"]
    end

    GH_MAIN -- "git fetch (Downloads data safely)" --> REMOTE_REF
    REMOTE_REF -- "git merge origin/main" --> LOCAL_MAIN
    LOCAL_MAIN --> FILES
    
    style GitHub fill:#cfe2ff,stroke:#084298
    style LocalDB fill:#e2e3e5,stroke:#41464b
    style Workspace fill:#d1e7dd,stroke:#198754`,
          steps: [
            {
              title: 'Step 1: Safely Fetch Updates from GitHub',
              explanation: 'Download any new commits made by team members without altering your working code.',
              command: 'git fetch origin',
              output: `remote: Enumerating objects: 5, done.\nremote: Total 5 (delta 1), reused 5 (delta 1)\nUnpacking objects: 100% (5/5), done.\nFrom https://github.com/company/project\n   7a2f1b8..b4c91a2  main       -> origin/main`
            },
            {
              title: 'Step 2: Inspect What Changed Before Merging',
              explanation: 'Compare your local "main" branch with the newly fetched "origin/main" bookmark.',
              command: 'git log main..origin/main --oneline',
              output: `b4c91a2 feat(api): Add payment gateway webhook`
            },
            {
              title: 'Step 3: Pull (Fetch & Merge)',
              explanation: 'When ready to update your local branch, run "git pull".',
              command: 'git pull origin main',
              output: `Updating 7a2f1b8..b4c91a2\nFast-forward\n api/webhook.js | 24 ++++++++++++++++++++++++\n 1 file changed, 24 insertions(+)`
            }
          ],
          verification: 'Running "git status" shows "Your branch is up to date with \'origin/main\'.`',
          expectedResult: 'Local branch has incorporated all new commits from GitHub.',
          commonMistakes: [
            {
              problem: 'Running "git pull" with uncommitted changes in your working directory.',
              why: 'If incoming commits touch the same files you are currently editing, Git will abort with "error: Your local changes to the following files would be overwritten by merge".',
              fix: 'Always commit your work first ("git commit") or save it temporarily using "git stash" before pulling.'
            }
          ],
          quiz: {
            question: 'What is the key difference between "git fetch" and "git pull"?',
            options: [
              '`git fetch` deletes files; `git pull` adds files.',
              '`git fetch` only downloads data without modifying your working files; `git pull` downloads and immediately merges changes into your active branch.',
              '`git fetch` is for private repositories only.',
              '`git pull` uninstalls packages.'
            ],
            correctIndex: 1,
            explanation: '"git fetch" downloads commits into local remote-tracking branches safely. "git pull" combines "git fetch" followed immediately by "git merge".'
          },
          summary: 'Use "git fetch" to safely check for updates without altering your files; use "git pull" to fetch and merge in a single step.'
        },
        {
          id: 'the-github-flow',
          slug: 'the-github-flow',
          order: '2.6',
          title: 'The GitHub Flow: The Professional Team Lifecycle',
          subtitle: 'The lightweight, branch-based workflow used by top tech companies to ship software continuously.',
          chapterId: 'branching-and-merging',
          chapterTitle: '04. Branching & Merging',
          levelTitle: 'Level 2: Daily Developer Workflow',
          goal: 'Understand the standard 6-step lifecycle that every software engineer follows in professional environments.',
          prerequisites: [
            'Completed Lessons 2.1 through 2.5.'
          ],
          concept: `**What is The GitHub Flow?**\nThe GitHub Flow is a simple, battle-tested branching strategy created by GitHub. It ensures that the **\'main\'** branch is ALWAYS deployable, stable, and protected.\n\n### The 6 Golden Steps of GitHub Flow:\n\n1. **1. Create a Branch**: Branch off \'main\' with a descriptive name (\'feature/login-modal\' or \'fix/navbar-overflow\').\n2. **2. Add Commits**: Make atomic commits locally with clear messages.\n3. **3. Open a Pull Request (PR)**: Push your branch to GitHub and open a PR to start a discussion with teammates.\n4. **4. Code Review & CI/CD**: Teammates review your code, leave feedback, and automated tests (GitHub Actions) run.\n5. **5. Merge**: Once approved and tests pass, merge the PR into \'main\'.\n6. **6. Deploy & Delete Branch**: The code on \'main\' deploys to production, and the feature branch is deleted.`,
          diagram: `flowchart LR
    A["1. main (Clean & Deployable)"] --> B["2. Create branch: feature/cart"]
    B --> C["3. Add commits locally"]
    C --> D["4. Open Pull Request on GitHub"]
    D --> E["5. Code Review & Tests Pass"]
    E --> F["6. Merge into main & Deploy!"]
    
    style A fill:#198754,color:#fff
    style B fill:#0dcaf0,color:#000
    style C fill:#ffc107,color:#000
    style D fill:#0d6efd,color:#fff
    style E fill:#6f42c1,color:#fff
    style F fill:#198754,color:#fff`,
          steps: [
            {
              title: 'Branch Naming Conventions in Production Teams',
              explanation: 'Top engineering teams follow structured naming conventions for branches:\n\n- "feature/short-description" (e.g. "feature/stripe-checkout")\n- "bugfix/issue-description" (e.g. "bugfix/cart-item-count")\n- "hotfix/critical-production-bug" (e.g. "hotfix/security-patch-login")\n- "refactor/component-name" (e.g. "refactor/navbar-styles")',
              command: null
            }
          ],
          verification: 'You can recite the 6 steps of the GitHub Flow and explain why nobody pushes directly to main.',
          expectedResult: 'You understand the team lifecycle from feature branch to Pull Request and deployment.',
          commonMistakes: [
            {
              problem: 'Letting feature branches live for months without merging.',
              why: 'Long-lived branches diverge massively from "main", leading to catastrophic merge conflicts.',
              fix: 'Keep feature branches small, short-lived (1-3 days), and merge frequently.'
            }
          ],
          quiz: {
            question: 'In the GitHub Flow, what should always be true about the "main" branch?',
            options: [
              'It should contain experimental unfinished code.',
              'It should always be stable, tested, and deployable to production.',
              'It should be deleted every week.',
              'Only managers are allowed to read it.'
            ],
            correctIndex: 1,
            explanation: 'The core rule of GitHub Flow is that anything on the "main" branch is always production-ready and deployable.'
          },
          summary: 'The GitHub Flow consists of 6 steps: Create Branch -> Commit -> Open PR -> Review & Test -> Merge -> Deploy.'
        }
      ]
    }
  ]
};

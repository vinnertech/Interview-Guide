export const level5Advanced = {
  id: 'level-5',
  title: 'Level 5: Advanced Git & Internals',
  icon: 'bi-cpu-fill',
  color: '#6f42c1',
  description: 'Master senior-level Git operations: clean linear histories with rebasing, squashing commits with interactive rebase, cherry-picking, recovering deleted branches with git reflog, and Git object database internals.',
  chapters: [
    {
      id: 'advanced-git-ops',
      title: '08. Rebasing, Cherry-Picking & Reflog',
      lessons: [
        {
          id: 'merge-vs-rebase',
          slug: 'merge-vs-rebase',
          order: '5.1',
          title: 'Merge vs. Rebase: Creating Clean Linear History',
          subtitle: 'The ultimate comparison between "git merge" and "git rebase", and the Golden Rule of Rebasing.',
          chapterId: 'advanced-git-ops',
          chapterTitle: '08. Rebasing, Cherry-Picking & Reflog',
          levelTitle: 'Level 5: Advanced Git & Internals',
          goal: 'Understand what "git rebase" does under the hood and choose when to use merge vs rebase.',
          prerequisites: [
            'Level 2 (Branching & Merging) and Level 4 (Conflicts).'
          ],
          concept: `When you need to incorporate changes from \'main\' into your feature branch, you have two approaches:\n\n### 1. The Merge Approach (\'git merge main\')\n- **What it does**: Creates a new 3-way Merge Commit on your feature branch.\n- **Pros**: Non-destructive, preserves the exact historical timeline.\n- **Cons**: Clutters the Git log graph with criss-crossing diamond branches and dozens of *"Merge branch 'main' into feature"* commits.\n\n### 2. The Rebase Approach (\'git rebase main\')\n- **What it does**: Literally changes the **base** of your feature branch! Git takes all your feature branch commits, temporarily sets them aside, moves your branch to the very tip of \'main\', and re-applies your commits one by one on top of the newest code.\n- **Result**: A perfectly flat, beautiful, **100% linear history** as if you just started writing your feature today!\n\n### ⚠️ The Golden Rule of Rebasing:\n**NEVER rebase a public branch that other people are working on!** Only rebase your own private local feature branches before opening a Pull Request.`,
          diagram: `flowchart TD
    subgraph BeforeRebase ["Before Rebase (Diverged from C2)"]
        B1["C1"] --> B2["C2 (Split point)"]
        B2 --> B3["C3 (main)"] --> B4["C4 (main)"]
        B2 --> F1["F1 (feature)"] --> F2["F2 (feature)"]
    end

    subgraph AfterRebase ["After 'git rebase main' (Linear History)"]
        A1["C1"] --> A2["C2"] --> A3["C3"] --> A4["C4 (main)"] --> F1_NEW["F1' (Re-applied)"] --> F2_NEW["F2' (Re-applied)"]
    end
    
    style BeforeRebase fill:#fff3cd,stroke:#ffc107,color:#664d03
    style AfterRebase fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Switch to Your Feature Branch',
              explanation: 'Make sure you are on the branch you want to rebase.',
              command: 'git switch feature/new-dashboard'
            },
            {
              title: 'Step 2: Rebase on Top of Main',
              explanation: 'Re-apply your commits on top of the latest "main" branch.',
              command: 'git rebase main',
              output: `First, rewinding head to replay your work on top of it...\nApplying: feat: Add dashboard charts\nApplying: feat: Connect analytics API`
            },
            {
              title: 'Handling Conflicts During a Rebase',
              explanation: 'If a conflict occurs, Git pauses. Fix the conflict, run "git add <file>", and tell Git to continue with "git rebase --continue". (Do NOT run "git commit"!).',
              command: 'git add src/charts.js\ngit rebase --continue',
              output: `Applying: feat: Add dashboard charts`
            }
          ],
          warning: {
            title: 'Rebasing Changes Commit Hashes',
            message: 'Because re-applying a commit changes its parent and timestamp, every rebased commit receives a brand new SHA-1 hash. That is why rebasing shared public branches breaks team synchronization.',
            isDanger: true
          },
          verification: 'Run "git log --oneline --graph". Notice your feature branch sits in a straight, linear line directly above the latest commit on "main".',
          expectedResult: 'A clean linear commit history with zero merge commits.',
          quiz: {
            question: 'Why do engineering teams use "git rebase main" before opening a Pull Request?',
            options: [
              'To delete the repository history.',
              'To keep the project history clean and linear by replaying feature commits on top of the latest code on main.',
              'Because merging is disabled in modern Git.',
              'To avoid having to write tests.'
            ],
            correctIndex: 1,
            explanation: 'Rebasing produces a clean, linear commit log without messy intermediate merge bubbles.'
          },
          summary: 'Use "git rebase main" on private feature branches to produce a clean linear history. Always respect the rule: never rebase public shared branches.'
        },
        {
          id: 'interactive-rebase-squashing',
          slug: 'interactive-rebase-squashing',
          order: '5.2',
          title: 'Interactive Rebase: Squashing & Rewriting History',
          subtitle: 'Clean up messy "wip", "fixed typo", "trying again" commits into polished, professional commits before opening a PR.',
          chapterId: 'advanced-git-ops',
          chapterTitle: '08. Rebasing, Cherry-Picking & Reflog',
          levelTitle: 'Level 5: Advanced Git & Internals',
          goal: 'Use "git rebase -i" to squash 5 messy WIP commits into 1 clean, production-ready commit.',
          prerequisites: [
            'Lesson 5.1 (Merge vs Rebase).'
          ],
          concept: `While developing a feature over three days, your commit history might look like this:\n\n- \'commit 1: WIP starting auth\'\n- \'commit 2: typo fix\'\n- \'commit 3: forgot semicolon\'\n- \'commit 4: trying again\'\n- \'commit 5: it finally works!\'\n\nYou do NOT want your senior tech lead to see 5 messy trial-and-error commits in your Pull Request.\n\n### The Superpower of Interactive Rebase (\'git rebase -i\')\nInteractive rebase opens an editor allowing you to rewrite, reorder, squash, or delete past commits before sharing them.\n\n### Interactive Rebase Commands:\n- **\'pick\'**: Keep the commit as is.\n- **\'squash\' (s)**: Melds this commit into the previous commit and combines their messages.\n- **\'fixup\' (f)**: Melds this commit into the previous commit and **discards** this commit\'s message.\n- **\'reword\' (r)**: Keep the commit, but edit the commit message.\n- **\'drop\' (d)**: Completely delete this commit from history.`,
          diagram: `flowchart TD
    subgraph Messy ["5 Messy Local Commits"]
        M1["wip auth"] --> M2["fix typo"] --> M3["trying again"] --> M4["fixed test"] --> M5["done"]
    end

    subgraph Polished ["1 Polished Squashed Commit"]
        P1["feat(auth): Implement user login and JWT authentication"]
    end

    Messy -- "git rebase -i HEAD~5 (squash / fixup)" --> Polished
    
    style Messy fill:#f8d7da,stroke:#dc3545,color:#842029
    style Polished fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Start an Interactive Rebase for the Last 3 Commits',
              explanation: 'Tell Git you want to interactively edit the last 3 commits ("HEAD~3").',
              command: 'git rebase -i HEAD~3'
            },
            {
              title: 'Step 2: Choose Actions in the Interactive Todo File',
              explanation: 'Git displays your commits in chronological order (oldest at the top):\n\n"""text\npick a1b2c3d feat(auth): Initial user schema\nsquash e4f5a6b fix typo in schema\nsquash c7d8e9f add missing validation\n"""\n\nSave and close the editor.',
              command: null
            },
            {
              title: 'Step 3: Write the New Consolidated Commit Message',
              explanation: 'Git opens a second screen allowing you to write one clean, unified commit message for the squashed result.',
              command: null,
              output: `[detached HEAD 3f8a1c2] feat(auth): Implement comprehensive user schema with validations\nSuccessfully rebased and updated refs/heads/feature/auth.`
            }
          ],
          verification: 'Run "git log --oneline -n 3". Your 3 messy commits have been fused into 1 beautiful, pristine commit!',
          expectedResult: 'A single atomic commit in history.',
          quiz: {
            question: 'What is the difference between "squash" and "fixup" in an interactive rebase?',
            options: [
              '`squash` keeps and combines commit messages; `fixup` combines the changes but discards the newer commit\'s message.',
              '`squash` deletes files; `fixup` creates branches.',
              '`fixup` only works for Python code.',
              'There is no difference.'
            ],
            correctIndex: 0,
            explanation: 'Both combine commits into the preceding commit, but "fixup" discards the log message of the commit being squashed, keeping the log cleaner.'
          },
          summary: 'Use "git rebase -i HEAD~N" to squash, reorder, reword, and polish messy local commits into clean atomic history.'
        },
        {
          id: 'cherry-picking-and-reflog',
          slug: 'cherry-picking-and-reflog',
          order: '5.3',
          title: 'Cherry-Picking & The Git Reflog (Resurrecting Lost Work)',
          subtitle: 'Pluck individual commits between branches with "git cherry-pick" and recover "permanently deleted" branches with "git reflog".',
          chapterId: 'advanced-git-ops',
          chapterTitle: '08. Rebasing, Cherry-Picking & Reflog',
          levelTitle: 'Level 5: Advanced Git & Internals',
          goal: 'Learn how to copy a single commit from one branch to another, and use "git reflog" to recover a deleted branch.',
          prerequisites: [
            'Lessons 5.1 & 5.2.'
          ],
          concept: `### 1. \'git cherry-pick <commit-hash>\'\nSometimes another developer wrote a critical 5-line security fix on \'feature-payments\'. You need that exact bugfix on your \'release-v1\' branch right now, but you do NOT want to merge all 50 other experimental payment commits!\n\n**\'git cherry-pick\'** allows you to pluck **one specific commit** by its SHA-1 hash and apply it directly onto your current branch.\n\n---\n\n### 2. \'git reflog\' (Git\'s Black Box Flight Recorder)\nHave you ever accidentally deleted a branch with 'git branch -D', or run 'git reset --hard' and felt immediate panic that you lost your work forever?\n\n**In Git, almost nothing is ever truly deleted immediately.**\n\nGit maintains a hidden log called the **Reference Log (\'reflog\')** that records **every single time \'HEAD\' moves** (switching branches, committing, rebasing, resetting, pulling).\n\nEven if a branch is deleted, its commits still exist in the '.git' database for 30 to 90 days. You can find the commit hash in 'git reflog' and resurrect the branch instantly!`,
          diagram: `flowchart TD
    subgraph CherryPick ["Cherry-Pick (Plucking One Commit)"]
        BR1["Branch A: Commit 1 -> Commit 2 (Security Fix) -> Commit 3"]
        BR2["Branch B: Commit X -> Commit Y"]
        BR1 -. "git cherry-pick [Commit 2]" .-> BR2_NEW["Branch B: Commit X -> Commit Y -> Commit 2'"]
    end

    subgraph Reflog ["Git Reflog (Safety Net)"]
        R1["HEAD@{0}: reset --hard (Mistake!)"]
        R2["HEAD@{1}: commit: Important Feature (Safe in Reflog!)"]
        R2 -. "git branch recovered-feature HEAD@{1}" .-> RESURRECT["Branch Resurrected!"]
    end
    
    style CherryPick fill:#cff4fc,stroke:#0dcaf0
    style Reflog fill:#d1e7dd,stroke:#198754`,
          steps: [
            {
              title: 'Step 1: Cherry-Pick a Specific Commit',
              explanation: 'Switch to your target branch and cherry-pick commit "8f2a1b9".',
              command: 'git switch release-v1\ngit cherry-pick 8f2a1b9',
              output: `[release-v1 4e1c9a8] fix(sec): Patch SQL injection vulnerability\n Date: Fri Aug 14 12:00:00 2026\n 1 file changed, 3 insertions(+)`
            },
            {
              title: 'Step 2: Inspect the Reflog to Find "Lost" Work',
              explanation: 'View the chronological history of all HEAD movements on your machine.',
              command: 'git reflog -n 5',
              output: `4e1c9a8 (HEAD -> release-v1) HEAD@{0}: cherry-pick: fix(sec): Patch SQL injection\n7a2f1b8 HEAD@{1}: checkout: moving from main to release-v1\n3f8a1c2 (main) HEAD@{2}: reset: moving to HEAD~1\n9b1c8f4 HEAD@{3}: commit: Accidental deleted work\n1a2b3c4 HEAD@{4}: checkout: moving from feature to main`
            },
            {
              title: 'Step 3: Resurrect a Deleted Commit or Branch',
              explanation: 'Create a brand new branch pointing directly to the commit from the reflog ("HEAD@{3}").',
              command: 'git branch recovered-branch HEAD@{3}',
              commandDescription: 'Resurrects the deleted commit into a new branch named recovered-branch.'
            }
          ],
          verification: 'Switch to "recovered-branch" and run "git log". All your "lost" files and commits are back!',
          expectedResult: 'Full recovery of unreferenced commits via reflog pointer restoration.',
          quiz: {
            question: 'If you accidentally delete a branch using "git branch -D", how can you recover the lost commits?',
            options: [
              'You cannot; they are erased from the hard drive instantly.',
              'Run `git reflog` to locate the commit hash prior to deletion, then create a new branch pointing to that hash.',
              'Re-install Git.',
              'Email GitHub technical support.'
            ],
            correctIndex: 1,
            explanation: 'The "git reflog" records all recent HEAD positions, allowing you to easily resurrect deleted branches and commits.'
          },
          summary: 'Use "git cherry-pick <hash>" to copy an individual commit to your branch. Use "git reflog" to recover any lost commits or deleted branches.'
        },
        {
          id: 'git-internals-object-database',
          slug: 'git-internals-object-database',
          order: '5.4',
          title: 'Git Internals: Blobs, Trees, Commits & Objects',
          subtitle: 'Look under the hood of ".git/objects" to understand content-addressable storage and cryptographic SHA-1 hashes.',
          chapterId: 'advanced-git-ops',
          chapterTitle: '08. Rebasing, Cherry-Picking & Reflog',
          levelTitle: 'Level 5: Advanced Git & Internals',
          goal: 'Understand how Git stores data internally as a directed acyclic graph (DAG) of Blobs, Trees, and Commits.',
          prerequisites: [
            'Completed Level 1 through Level 5.'
          ],
          concept: `**Git is fundamentally a Content-Addressable Key-Value Database.**\n\nWhen you save files in Git, Git compresses the content and computes a 40-character cryptographic **SHA-1 hash** (e.g. \'7a2f1b8c9d...\'). The hash is the **key**, and the compressed file content is the **value** stored inside \'.git/objects\'.\n\n### The 4 Core Object Types in Git:\n\n1. **Blob (Binary Large Object)**: Stores pure file content (text, images, code). **Note**: A blob does NOT store the filename or file permissions — only the raw content!\n2. **Tree Object**: Represents a directory. It lists filenames, file permissions, and links each filename to its corresponding Blob hash or child Tree hash.\n3. **Commit Object**: Stores the metadata of a snapshot:\n   - Pointer to the root **Tree** object.\n   - Pointer(s) to the **Parent Commit(s)**.\n   - Author name, email, and timestamp.\n   - The commit log message.\n4. **Annotated Tag**: A permanent named bookmark pointing to a specific commit.`,
          diagram: `flowchart TD
    subgraph CommitObject ["Commit Object (Hash: c81a...)"]
        META["Author: John Doe\nMessage: Initial commit"]
        PARENT["Parent: (none)"]
    end

    subgraph RootTree ["Root Tree Object (Directory)"]
        T1["README.md -> Blob: 8a3f..."]
        T2["src/ -> Sub-Tree: 4b1c..."]
    end

    subgraph SubTree ["Sub-Tree (src folder)"]
        S1["app.js -> Blob: 9d2e..."]
    end

    subgraph Blobs ["Blobs (Pure File Contents)"]
        B1["'# My Project'"]
        B2["'console.log(hello);'"]
    end

    CommitObject --> RootTree
    RootTree --> T1 & T2
    T2 --> SubTree
    T1 --> B1
    SubTree --> S1
    S1 --> B2
    
    style CommitObject fill:#d1e7dd,stroke:#198754
    style RootTree fill:#cfe2ff,stroke:#084298
    style SubTree fill:#cfe2ff,stroke:#084298
    style Blobs fill:#fff3cd,stroke:#ffc107`,
          steps: [
            {
              title: 'Inspect Any Git Object with "git cat-file"',
              explanation: 'Use Git\'s low-level plumbing tool `git cat-file` to view the type and content of any hash.',
              command: 'git cat-file -t HEAD  # Check object type\ngit cat-file -p HEAD  # Pretty-print content',
              output: `tree 4b825dc642cb6eb9a060e54bf8d69288fbee4904\nauthor Your Name <you@example.com> 1723630000 +0000\ncommitter Your Name <you@example.com> 1723630000 +0000\n\nfeat: Initial commit`
            }
          ],
          verification: 'You can explain why two identical files with different filenames share the exact same Blob in Git storage.',
          expectedResult: 'Deep architectural understanding of Git\'s content-addressable storage.',
          quiz: {
            question: 'Which Git object type is responsible for storing directory structure and filenames?',
            options: [
              'Blob',
              'Tree',
              'Commit',
              'Tag'
            ],
            correctIndex: 1,
            explanation: 'Tree objects represent directories. They map filenames and file modes to their corresponding Blob and sub-tree SHA-1 hashes.'
          },
          summary: 'Git stores snapshots as a DAG of Blobs (file content), Trees (directories & filenames), and Commits (snapshot metadata & parent links).'
        }
      ]
    }
  ]
};

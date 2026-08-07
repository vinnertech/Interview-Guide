export const gitPart2 = [
    // --- PART 3: BRANCHING & MERGING (51-75) ---
    {
        id: 51,
        title: "Why are Git branches used?",
        category: "Branching & Merging",
        difficulty: "Beginner",
        explanation: "Branches allow you to diverge from the main line of development (like `main`) and continue to do work without messing up that main line. They are essential for isolating features, bug fixes, and experiments safely.",
        summary: "To isolate new work from the stable main codebase."
    },
    {
        id: 52,
        title: "How do you create a branch?",
        category: "Branching & Merging",
        difficulty: "Beginner",
        priority: "High",
        explanation: "You use the `git branch` command followed by the desired name.",
        code: "git branch feature-login",
        summary: "Use `git branch <branch-name>`."
    },
    {
        id: 53,
        title: "How do you switch to another branch?",
        category: "Branching & Merging",
        difficulty: "Beginner",
        explanation: "You use `git switch` or the older `git checkout` command.",
        code: "git switch feature-login",
        summary: "Use `git switch <branch-name>`."
    },
    {
        id: 54,
        title: "How do you create and switch to a branch in one command?",
        category: "Branching & Merging",
        difficulty: "Beginner",
        explanation: "You can pass the `-c` flag to `git switch`, or the `-b` flag to `git checkout`.",
        code: "git switch -c feature-login\n# or\ngit checkout -b feature-login",
        summary: "Use `git switch -c <branch-name>`."
    },
    {
        id: 55,
        title: "How do you delete a local branch?",
        category: "Branching & Merging",
        difficulty: "Intermediate",
        explanation: "You use `git branch -d`. If the branch hasn't been merged and you want to force delete it (losing the work), use a capital `-D`.",
        code: "git branch -d feature-login",
        summary: "Use `git branch -d <branch-name>`."
    },
    {
        id: 56,
        title: "How do you delete a remote branch?",
        category: "Branching & Merging",
        difficulty: "Intermediate",
        explanation: "You push an empty pointer to the remote using the `--delete` flag.",
        code: "git push origin --delete feature-login",
        summary: "Use `git push origin --delete <branch-name>`."
    },
    {
        id: 57,
        title: "What is branch tracking?",
        category: "Branching & Merging",
        difficulty: "Intermediate",
        explanation: "Branch tracking is a direct relationship between a local branch and a remote branch. When a local branch tracks a remote branch (e.g., `origin/main`), Git knows exactly where to `push` to and `pull` from when you don't explicitly specify a target.",
        summary: "A link between a local branch and its remote counterpart."
    },
    {
        id: 58,
        title: "What is an upstream branch?",
        category: "Branching & Merging",
        difficulty: "Intermediate",
        explanation: "An upstream branch is the remote branch that a local branch is tracking. You set it the first time you push a new local branch using the `-u` or `--set-upstream` flag.",
        code: "git push -u origin feature-login",
        summary: "The remote branch linked to your local branch."
    },
    {
        id: 59,
        title: "What is branch divergence?",
        category: "Branching & Merging",
        difficulty: "Advanced",
        explanation: "Divergence happens when your local branch and the remote branch have both received new, different commits since the last time they were synced. You must resolve this divergence by merging or rebasing before you can push.",
        summary: "When local and remote histories split and both have unique commits."
    },
    {
        id: 60,
        title: "What is merging?",
        category: "Branching & Merging",
        difficulty: "Beginner",
        priority: "High",
        explanation: "Merging is the process of taking the changes from one branch (e.g., a feature branch) and integrating them into another branch (e.g., `main`).",
        code: "git switch main\ngit merge feature-login",
        summary: "Combining changes from one branch into another."
    },
    {
        id: 61,
        title: "What is a fast-forward merge?",
        category: "Branching & Merging",
        difficulty: "Intermediate",
        explanation: "If you merge branch A into branch B, and branch B hasn't had any new commits since branch A was created, Git simply moves the pointer of branch B forward to match branch A. No new 'merge commit' is created.",
        summary: "A simple merge where Git just moves the branch pointer forward without creating a merge commit."
    },
    {
        id: 62,
        title: "What is a three-way merge?",
        category: "Branching & Merging",
        difficulty: "Advanced",
        explanation: "If the target branch has received new commits since the feature branch was created, Git cannot fast-forward. It uses a three-way merge algorithm (comparing the two branch tips and their common ancestor) and creates a new 'merge commit' to tie the histories together.",
        summary: "A merge that ties two divergent histories together by creating a special merge commit."
    },
    {
        id: 63,
        title: "What is a merge commit?",
        category: "Branching & Merging",
        difficulty: "Intermediate",
        explanation: "A special commit created during a three-way merge. Unlike a normal commit which has one parent, a merge commit has two parent commits, representing the joining of two separate lines of history.",
        summary: "A commit with two parents that ties two branch histories together."
    },
    {
        id: 64,
        title: "What is a merge conflict?",
        category: "Branching & Merging",
        difficulty: "Beginner",
        priority: "High",
        explanation: "A merge conflict occurs when Git cannot automatically resolve the differences between two branches being merged. Git pauses the merge process and asks the developer to manually resolve the conflict.",
        summary: "When Git cannot automatically reconcile different changes to the same code."
    },
    {
        id: 65,
        title: "Why do merge conflicts occur?",
        category: "Branching & Merging",
        difficulty: "Intermediate",
        explanation: "They typically occur when two developers modify the exact same lines of the exact same file in different ways, or when one developer modifies a file that another developer deleted.",
        summary: "When two branches modify the same line of code in conflicting ways."
    },
    {
        id: 66,
        title: "How do you resolve a merge conflict?",
        category: "Real-World Scenarios",
        difficulty: "Senior",
        priority: "High",
        explanation: "### Scenario: Two developers modified the same file.\n```text\ngit pull\n     ↓\nConflict occurs\n     ↓\ngit status\n     ↓\nOpen conflicted files\n     ↓\nResolve conflicts\n     ↓\ngit add\n     ↓\ngit commit\n     ↓\ngit push\n```\n**Explanation:** Run `git status` to see conflicted files. Open the file; Git marks conflicts with `<<<<<<<`, `=======`, and `>>>>>>>`. Edit the file to keep the correct changes and remove the markers. Finally, `git add` the file and `git commit` to complete the merge.",
        summary: "Open the file, choose the correct changes, remove Git markers, add, and commit."
    },
    {
        id: 67,
        title: "What is the difference between git merge and git rebase?",
        category: "Branching & Merging",
        difficulty: "Senior",
        priority: "High",
        explanation: "Both integrate changes, but in different ways:\n- **Merge:** Takes the feature branch and ties it into `main` with a merge commit. It is non-destructive but creates a messy, branching history.\n- **Rebase:** Takes the feature branch commits and literally rewrites them to start from the current tip of `main`. It creates a clean linear history but rewrites commit hashes.",
        summary: "Merge creates a merge commit; Rebase rewrites history to make it linear."
    },
    {
        id: 68,
        title: "When should you use merge instead of rebase?",
        category: "Real-World Scenarios",
        difficulty: "Senior",
        priority: "High",
        explanation: "### Merge\n```text\nmain ────────●────────●\n              \\      /\nfeature        ●────●\n```\nUse merge when integrating a completed feature branch into a shared public branch (like `main`). Merging preserves the exact historical timeline of what happened and when, without destroying commit hashes.",
        summary: "Use merge when combining branches into public/shared branches like `main`."
    },
    {
        id: 69,
        title: "When should you use rebase?",
        category: "Real-World Scenarios",
        difficulty: "Senior",
        priority: "High",
        explanation: "### Rebase\n```text\nmain ────────●────────●\n                       \\\nfeature                 ●────●\n```\nUse rebase on your LOCAL, unpublished feature branch to update it with the latest changes from `main`. **Golden Rule:** Never blindly rebase shared/public branches, as rewriting history will cause massive conflicts for other developers.",
        summary: "Use rebase to update your local private branch with changes from main to keep history linear."
    },
    {
        id: 70,
        title: "What is an interactive rebase?",
        category: "Branching & Merging",
        difficulty: "Advanced",
        explanation: "Interactive rebase (`git rebase -i`) lets you rewrite local commit history. It opens an editor allowing you to reorder, edit, drop, or squash commits together before pushing them to the server.",
        summary: "A powerful tool to rewrite, clean up, and combine local commits."
    },
    {
        id: 71,
        title: "What is git rebase -i used for?",
        category: "Branching & Merging",
        difficulty: "Advanced",
        explanation: "It is mostly used for cleaning up a messy local commit history. If you have 5 \"work in progress\" commits, you use `-i` to combine (squash) them into one clean, descriptive commit before creating a Pull Request.",
        summary: "Cleaning up local commit history before sharing it."
    },
    {
        id: 72,
        title: "What is squashing commits?",
        category: "Branching & Merging",
        difficulty: "Intermediate",
        explanation: "Squashing is the process of taking multiple distinct commits and condensing them into a single, comprehensive commit.",
        summary: "Combining multiple commits into one."
    },
    {
        id: 73,
        title: "Why should you squash commits?",
        category: "Branching & Merging",
        difficulty: "Intermediate",
        explanation: "To keep the `main` branch history clean and readable. A Pull Request might have 20 small commits like 'fix typo', 'fix tests', 'WIP'. Squashing them turns them into a single commit: 'Feature: Login Module'.",
        summary: "To keep project history clean, readable, and easy to revert."
    },
    {
        id: 74,
        title: "What is cherry-picking?",
        category: "Branching & Merging",
        difficulty: "Advanced",
        priority: "High",
        explanation: "Cherry-picking is the act of picking exactly one specific commit from another branch and applying it to your current branch, without merging the entire branch.",
        code: "git cherry-pick <commit-hash>",
        summary: "Applying a specific single commit from another branch to your current branch."
    },
    {
        id: 75,
        title: "When would you use git cherry-pick?",
        category: "Real-World Scenarios",
        difficulty: "Senior",
        explanation: "### Scenario: A critical production fix exists on another branch.\n```text\nfeature branch\n      │\n      ● Fix Commit\n      │\n      ▼\nrelease branch\n      │\n      ●\n      │\n   cherry-pick\n      │\n      ▼\n      ● Fix\n```\nIf a developer fixed a bug in a massive feature branch, but you need that bug fix *right now* on the production release branch, you cherry-pick only that specific fix commit.",
        summary: "When you need a specific bug fix from another branch without pulling in all the other work."
    },

    // --- PART 4: RESET, REVERT, REBASE & RECOVERY (76-95) ---
    {
        id: 76,
        title: "What is git reset?",
        category: "Reset, Revert & Recovery",
        difficulty: "Intermediate",
        priority: "High",
        explanation: "`git reset` is a powerful command used to undo local changes by moving the HEAD pointer backward in history to a previous commit, essentially erasing recent local commits.",
        summary: "Moves the branch pointer backward to erase recent local commits."
    },
    {
        id: 77,
        title: "What is the difference between git reset --soft, --mixed, and --hard?",
        category: "Reset, Revert & Recovery",
        difficulty: "Advanced",
        priority: "High",
        explanation: "- **--soft:** Moves HEAD back. Changes remain in your Staging Area.\n- **--mixed (default):** Moves HEAD back. Changes are removed from Staging Area but remain in Working Directory.\n- **--hard:** Moves HEAD back AND permanently wipes out the Working Directory. Changes are lost.",
        summary: "Soft keeps changes staged; Mixed unstages them; Hard completely deletes them."
    },
    {
        id: 78,
        title: "git reset vs git revert?",
        category: "Real-World Scenarios",
        difficulty: "Senior",
        priority: "High",
        explanation: "### Reset vs Revert\n```text\nLocal/unpublished history\n        ↓\n       reset\n\nShared/public history\n        ↓\n       revert\n```\n- **Reset:** Erases history. Safe for local, unpublished work.\n- **Revert:** Creates a *new* commit that applies the exact opposite changes. Safe for public branches.",
        summary: "Reset rewrites history; Revert moves history forward safely by creating an undo commit."
    },
    {
        id: 79,
        title: "When should you use git revert instead of git reset?",
        category: "Real-World Scenarios",
        difficulty: "Senior",
        explanation: "### Scenario: You pushed a bad commit to the shared `main` branch.\nNever use `reset` on a shared branch because it rewrites history. If you reset and force-push, you will break the repository for everyone else. Instead, use `git revert <commit-hash>`. This creates a new commit that undoes the bad code, preserving a safe, linear history for the team.",
        summary: "Whenever the commit has already been pushed to a shared remote repository."
    },
    {
        id: 80,
        title: "What happens when you execute git reset --hard?",
        category: "Reset, Revert & Recovery",
        difficulty: "Advanced",
        explanation: "Git immediately updates the branch pointer to the specified commit, clears the Staging Area, and completely overwrites your Working Directory to match that commit. Any uncommitted local work is destroyed.",
        summary: "All uncommitted local changes are permanently deleted, and the project is rolled back."
    },
    {
        id: 81,
        title: "How do you undo the latest commit?",
        category: "Real-World Scenarios",
        difficulty: "Intermediate",
        explanation: "If you haven't pushed yet, run `git reset HEAD~1` (or `--soft` if you want to keep the changes staged). This steps back exactly one commit.",
        code: "git reset --soft HEAD~1",
        summary: "Use `git reset HEAD~1`."
    },
    {
        id: 82,
        title: "How do you undo a commit that has already been pushed?",
        category: "Real-World Scenarios",
        difficulty: "Intermediate",
        explanation: "You must use `git revert <commit-hash>`. Then push the resulting revert commit. Never `reset` and force-push on shared branches.",
        code: "git revert HEAD\ngit push",
        summary: "Use `git revert` followed by `git push`."
    },
    {
        id: 83,
        title: "How do you remove a file from the last commit?",
        category: "Reset, Revert & Recovery",
        difficulty: "Advanced",
        explanation: "If you committed a file by accident, run `git reset --soft HEAD~1` to undo the commit but keep the files staged. Then use `git restore --staged <file>` to unstage the specific file. Finally, commit again.",
        summary: "Soft reset, unstage the file, and commit again."
    },
    {
        id: 84,
        title: "How do you modify the last commit?",
        category: "Real-World Scenarios",
        difficulty: "Intermediate",
        explanation: "### Scenario: You committed locally but forgot a file.\nYou don't need to create a new commit. Just stage the forgotten file (`git add`), then run `git commit --amend`. This alters the previous commit to include the new file.",
        summary: "Use `git commit --amend`."
    },
    {
        id: 85,
        title: "What is git commit --amend?",
        category: "Reset, Revert & Recovery",
        difficulty: "Intermediate",
        explanation: "It replaces the very last commit with a new commit. It is used to fix the commit message or add missing files. **Warning:** Because it changes the commit hash, do not amend commits that have already been pushed.",
        code: "git commit --amend -m \"New improved message\"",
        summary: "Modifies the most recent commit."
    },
    {
        id: 86,
        title: "How do you recover a deleted branch?",
        category: "Reset, Revert & Recovery",
        difficulty: "Senior",
        explanation: "Even if a branch is deleted, its commits still exist in Git's database until garbage collection runs. You can find the hash of the tip of the deleted branch using `git reflog`, and then recreate the branch from that hash.",
        code: "git reflog\n# find hash, e.g. abc1234\ngit branch feature-recovered abc1234",
        summary: "Find the commit hash in `git reflog` and create a new branch pointing to it."
    },
    {
        id: 87,
        title: "What is git reflog?",
        category: "Reset, Revert & Recovery",
        difficulty: "Senior",
        priority: "High",
        explanation: "Reflog (Reference Log) is a local, chronological history of every single time the HEAD pointer moved in your local repository. It records commits, resets, checkouts, and merges. It is the ultimate safety net.",
        summary: "A local diary of every movement of the HEAD pointer, used to recover lost work."
    },
    {
        id: 88,
        title: "How can git reflog help recover lost commits?",
        category: "Real-World Scenarios",
        difficulty: "Senior",
        explanation: "### Scenario: You executed `git reset --hard` and lost commits.\n```text\ngit reflog\n   ↓\nFind lost commit hash\n   ↓\nCreate/recover branch\n   ↓\nVerify changes\n```\n`reflog` shows the hash of the commit you were on *before* you ran the disastrous reset command. You can simply `git reset --hard <old-hash>` to get it all back.",
        summary: "It shows the hashes of commits that are no longer accessible via normal branch history."
    },
    {
        id: 89,
        title: "How do you recover changes after git reset --hard?",
        category: "Reset, Revert & Recovery",
        difficulty: "Senior",
        explanation: "You can ONLY recover committed changes. Uncommitted changes destroyed by `--hard` are gone forever. For committed changes, run `git reflog`, find the old commit hash, and run `git reset --hard <old-hash>`.",
        summary: "Use `git reflog` to find the old commit hash, then reset back to it."
    },
    {
        id: 90,
        title: "How do you move a commit from one branch to another?",
        category: "Reset, Revert & Recovery",
        difficulty: "Advanced",
        explanation: "Switch to the correct branch, use `git cherry-pick <hash>` to copy the commit. Then switch back to the wrong branch, and use `git reset --hard HEAD~1` to remove it from there.",
        summary: "Cherry-pick it to the correct branch, then reset it off the wrong branch."
    },
    {
        id: 91,
        title: "How do you remove unwanted commits from a branch?",
        category: "Reset, Revert & Recovery",
        difficulty: "Advanced",
        explanation: "You can use an interactive rebase (`git rebase -i HEAD~5`). An editor will open. Change the word `pick` to `drop` (or `d`) next to the commits you want to delete. Save and close.",
        summary: "Use interactive rebase and `drop` the commits."
    },
    {
        id: 92,
        title: "How do you combine multiple commits?",
        category: "Reset, Revert & Recovery",
        difficulty: "Advanced",
        explanation: "Use interactive rebase (`git rebase -i HEAD~5`). Change the word `pick` to `squash` (or `s`) for the commits you want to merge into the commit directly above them.",
        summary: "Use interactive rebase and `squash` the commits together."
    },
    {
        id: 93,
        title: "How do you change a commit message?",
        category: "Reset, Revert & Recovery",
        difficulty: "Intermediate",
        explanation: "If it's the very last commit, use `git commit --amend -m \"New message\"`. If it's an older commit, use interactive rebase (`git rebase -i`) and mark the commit with `reword` (or `r`).",
        summary: "Use `git commit --amend` for the latest, or interactive rebase for older commits."
    },
    {
        id: 94,
        title: "How do you temporarily save uncommitted changes?",
        category: "Reset, Revert & Recovery",
        difficulty: "Intermediate",
        explanation: "Use `git stash`. It removes your modifications and puts them on a hidden stack, leaving you with a clean working directory so you can switch branches.",
        summary: "Use `git stash`."
    },
    {
        id: 95,
        title: "How do you recover changes from Git stash?",
        category: "Reset, Revert & Recovery",
        difficulty: "Intermediate",
        explanation: "Use `git stash pop`. This takes the top item off the stash stack, applies the changes back to your working directory, and deletes the stash record.",
        summary: "Use `git stash pop`."
    }
];

export const gitQuestions = [
  {
    "id": 1,
    "title": "What is Git?",
    "category": "Git Fundamentals",
    "difficulty": "Beginner",
    "priority": "High",
    "explanation": "Git is a free, open-source Distributed Version Control System (DVCS) designed to handle everything from small to very large projects with speed and efficiency. It tracks changes in source code during software development and enables multiple developers to work together non-linearly.",
    "summary": "A distributed version control system for tracking changes in source code."
  },
  {
    "id": 2,
    "title": "Why is Git called a distributed version control system?",
    "category": "Git Fundamentals",
    "difficulty": "Beginner",
    "priority": "High",
    "explanation": "Unlike centralized systems where only the server has the full history, in Git, every developer's local computer contains a complete, self-contained copy of the entire repository—including its full history and all branches. You can work entirely offline and commit locally.",
    "summary": "Because every user has a full local copy of the entire repository history."
  },
  {
    "id": 3,
    "title": "What is version control?",
    "category": "Git Fundamentals",
    "difficulty": "Beginner",
    "explanation": "Version control (or source control) is a system that records changes to a file or set of files over time so that you can recall specific versions later. It allows you to revert files to a previous state, compare changes, and see who modified what.",
    "summary": "A system that tracks changes to files over time."
  },
  {
    "id": 4,
    "title": "Centralized vs distributed version control?",
    "category": "Git Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "- **Centralized (CVCS):** Relies on a single central server (e.g., SVN, TFS). If the server goes down, nobody can commit or view history. You only have the latest snapshot locally.\n- **Distributed (DVCS):** Every client fully mirrors the repository (e.g., Git). If the server goes down, you still have the full history locally and can continue working.",
    "summary": "Centralized relies on one server; Distributed gives everyone a full offline copy."
  },
  {
    "id": 5,
    "title": "Git vs SVN?",
    "category": "Git Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "- **Git:** Distributed, stores full history locally, branching is extremely lightweight and fast, works offline.\n- **SVN (Subversion):** Centralized, relies on network connection to the central server for commits/history, branching is heavyweight (copies directories).",
    "summary": "Git is modern, fast, distributed, and offline-capable. SVN is older, centralized, and network-dependent."
  },
  {
    "id": 6,
    "title": "What are the advantages of Git?",
    "category": "Git Fundamentals",
    "difficulty": "Beginner",
    "explanation": "1. **Speed & Performance:** Most operations are local.\n2. **Offline Capability:** You can commit, branch, and view history without internet.\n3. **Branching:** Lightweight and fast to create/merge branches.\n4. **Data Integrity:** Everything is cryptographically hashed (SHA-1).\n5. **Distributed:** No single point of failure.",
    "summary": "Fast, distributed, secure, excellent branching, and offline capable."
  },
  {
    "id": 7,
    "title": "What is a Git repository?",
    "category": "Git Fundamentals",
    "difficulty": "Beginner",
    "priority": "High",
    "explanation": "A Git repository (or repo) is a directory where Git has been initialized to track files. It contains a hidden `.git` folder that stores all the version control data, including commits, branches, and tags.",
    "summary": "A directory tracked by Git, storing all project files and their history."
  },
  {
    "id": 8,
    "title": "What is the difference between a local and remote repository?",
    "category": "Git Fundamentals",
    "difficulty": "Beginner",
    "explanation": "- **Local Repository:** The Git repo sitting on your physical computer. You commit your daily work here.\n- **Remote Repository:** The Git repo hosted on a server (like GitHub or Azure Repos). You push your local commits here to share with the team.",
    "summary": "Local is on your machine; Remote is on a server."
  },
  {
    "id": 9,
    "title": "What is the Git working directory?",
    "category": "Git Fundamentals",
    "difficulty": "Beginner",
    "priority": "High",
    "explanation": "The Working Directory (or Working Tree) consists of the actual files you currently see and can edit on your computer's file system. It is a single checkout of one version of the project.",
    "summary": "The actual files on your computer that you are currently editing."
  },
  {
    "id": 10,
    "title": "What is the staging area/index?",
    "category": "Git Fundamentals",
    "difficulty": "Beginner",
    "priority": "High",
    "explanation": "The Staging Area (or Index) is a middle-ground between your Working Directory and your Repository. It is where you place (stage) files using `git add` to prepare them for the next commit. It allows you to selectively choose which modified files should be included in the commit.",
    "summary": "A preparatory area where you select specific modified files to be included in the next commit."
  },
  {
    "id": 11,
    "title": "What is the Git commit?",
    "category": "Git Fundamentals",
    "difficulty": "Beginner",
    "priority": "High",
    "explanation": "A commit is a snapshot of your repository at a specific point in time. It contains the changes you staged, an author name, a timestamp, a commit message, and a unique 40-character SHA-1 hash. It is permanently saved in the local repository's history.",
    "summary": "A permanent snapshot of the staged files, representing a specific version of your project."
  },
  {
    "id": 12,
    "title": "What is the Git HEAD?",
    "category": "Git Fundamentals",
    "difficulty": "Intermediate",
    "priority": "High",
    "explanation": "HEAD is a pointer that refers to the current commit you are looking at in your working directory. Usually, it points to the name of the branch you are currently on (which in turn points to the latest commit). If you checkout a specific older commit, you are in a 'detached HEAD' state.",
    "summary": "A pointer to the current commit/branch your working directory is based on."
  },
  {
    "id": 13,
    "title": "What is a branch?",
    "category": "Git Fundamentals",
    "difficulty": "Beginner",
    "priority": "High",
    "explanation": "A branch is a movable pointer to a specific commit. It represents an independent line of development. You can create a branch to work on a new feature in isolation without affecting the main codebase.",
    "summary": "An independent line of development, represented by a pointer to a commit."
  },
  {
    "id": 14,
    "title": "What is a tag?",
    "category": "Git Fundamentals",
    "difficulty": "Beginner",
    "explanation": "A tag is a static, immovable pointer to a specific commit. Unlike branches which move forward as new commits are added, tags stay fixed. They are primarily used to mark release versions (e.g., `v1.0.0`).",
    "summary": "A fixed label marking a specific commit, typically used for releases."
  },
  {
    "id": 15,
    "title": "What is a Git object?",
    "category": "Git Fundamentals",
    "difficulty": "Advanced",
    "explanation": "Git is fundamentally a key-value data store. Data is stored as 'objects' inside the `.git/objects` directory, keyed by their SHA-1 hash. Every file, directory structure, commit, and tag is a Git object.",
    "summary": "The fundamental data structures Git uses to store repository data."
  },
  {
    "id": 16,
    "title": "What are blobs, trees, commits, and tags in Git?",
    "category": "Git Fundamentals",
    "difficulty": "Advanced",
    "explanation": "These are the 4 types of Git objects:\n1. **Blob:** Stores file content (but not the file name).\n2. **Tree:** Stores directory structure (maps file names to blobs/other trees).\n3. **Commit:** Stores metadata (author, message) and points to the top-level Tree.\n4. **Tag:** An annotated tag pointing to a commit.",
    "summary": "Blobs = file contents, Trees = directories, Commits = snapshots, Tags = fixed labels."
  },
  {
    "id": 17,
    "title": "What is .git?",
    "category": "Git Fundamentals",
    "difficulty": "Beginner",
    "explanation": "The `.git` directory is the hidden folder created when you run `git init`. It contains the entire repository database, including configuration, hooks, branches, and all the objects (history). If you delete this folder, you lose all Git history, but your working files remain.",
    "summary": "The hidden database directory that stores all Git history and configuration."
  },
  {
    "id": 18,
    "title": "What is .gitignore?",
    "category": "Git Fundamentals",
    "difficulty": "Beginner",
    "priority": "High",
    "explanation": "A text file named `.gitignore` tells Git which files or directories to intentionally untrack and ignore (e.g., build artifacts like `bin/`, `obj/`, `node_modules/`, or log files).",
    "summary": "A file specifying patterns of files that Git should ignore and never commit."
  },
  {
    "id": 19,
    "title": "Why should sensitive files be included in .gitignore?",
    "category": "Git Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "If you commit sensitive files (like `.env` containing database passwords or API keys), they become part of the repository's permanent history. When pushed to GitHub, anyone with access (or the whole world, if public) can steal those credentials. Adding them to `.gitignore` prevents them from ever being tracked.",
    "tip": "If you accidentally commit a secret, adding it to `.gitignore` later does NOT remove it from history. You must rotate the secret immediately.",
    "summary": "To prevent API keys, passwords, and secrets from being permanently written into version control history."
  },
  {
    "id": 20,
    "title": "What is Git configuration?",
    "category": "Git Fundamentals",
    "difficulty": "Beginner",
    "explanation": "Git configuration allows you to customize how Git operates. This includes setting your author name and email, default text editor, line-ending behaviors, and custom aliases.",
    "summary": "Settings that define how Git behaves on your system."
  },
  {
    "id": 21,
    "title": "What are Git global, local, and system configurations?",
    "category": "Git Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "- **System (`--system`):** Applies to all users on the computer.\n- **Global (`--global`):** Applies to a specific user account on the computer (usually where you set your name/email).\n- **Local (`--local`):** Applies only to the specific repository you are currently in. Local overrides Global, which overrides System.",
    "summary": "System = all users, Global = your user profile, Local = specific repository."
  },
  {
    "id": 22,
    "title": "How do you configure username and email in Git?",
    "category": "Git Fundamentals",
    "difficulty": "Beginner",
    "code": "git config --global user.name \"John Doe\"\ngit config --global user.email \"john@example.com\"",
    "summary": "Using the `git config --global` command."
  },
  {
    "id": 23,
    "title": "What is git init?",
    "category": "Git Fundamentals",
    "difficulty": "Beginner",
    "priority": "High",
    "explanation": "The `git init` command creates a new, empty Git repository in your current directory by creating the hidden `.git` folder. It turns a normal folder into a Git-tracked folder.",
    "code": "git init",
    "summary": "Initializes a new, empty Git repository."
  },
  {
    "id": 24,
    "title": "What is git clone?",
    "category": "Git Fundamentals",
    "difficulty": "Beginner",
    "priority": "High",
    "explanation": "The `git clone` command downloads a complete copy of an existing remote repository (like one on GitHub) to your local machine. It automatically sets up the remote connection (`origin`) so you can push/pull later.",
    "code": "git clone https://github.com/user/repo.git",
    "summary": "Downloads an existing remote repository to your local computer."
  },
  {
    "id": 25,
    "title": "What is the difference between git init and git clone?",
    "category": "Git Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "- **git init:** Used when you are starting a brand new project locally from scratch.\n- **git clone:** Used when the project already exists on a server (GitHub) and you want to download it to your machine.",
    "summary": "Init creates a new repo from scratch; Clone copies an existing repo from a server."
  },
  {
    "id": 26,
    "title": "What does git status do?",
    "category": "Essential Git Commands",
    "difficulty": "Beginner",
    "priority": "High",
    "explanation": "It shows the current state of your working directory and staging area. It tells you which files are modified, which are staged for the next commit, and which are untracked.",
    "summary": "Displays the status of tracked, untracked, and staged files."
  },
  {
    "id": 27,
    "title": "What does git add do?",
    "category": "Essential Git Commands",
    "difficulty": "Beginner",
    "priority": "High",
    "explanation": "The `git add` command moves changes from the Working Directory into the Staging Area, preparing them to be included in the next commit.",
    "code": "git add index.html",
    "summary": "Stages files for the next commit."
  },
  {
    "id": 28,
    "title": "What is the difference between git add . and git add -A?",
    "category": "Essential Git Commands",
    "difficulty": "Intermediate",
    "explanation": "- **git add .** : Stages all modified and new files in the current directory and its subdirectories. (In older Git versions, it ignored deleted files, but modern Git treats them nearly identically).\n- **git add -A** (or `--all`): Stages absolutely all changes (new, modified, and deleted) across the entire repository, regardless of what directory you are currently in.",
    "summary": "`git add .` stages the current directory; `git add -A` stages the entire repository."
  },
  {
    "id": 29,
    "title": "What does git commit do?",
    "category": "Essential Git Commands",
    "difficulty": "Beginner",
    "priority": "High",
    "explanation": "It takes everything currently in the Staging Area and permanently records it as a snapshot (commit) in the local repository's history.",
    "code": "git commit -m \"Fix login bug\"",
    "summary": "Records staged changes permanently in the local history."
  },
  {
    "id": 30,
    "title": "What does git push do?",
    "category": "Essential Git Commands",
    "difficulty": "Beginner",
    "priority": "High",
    "explanation": "It uploads your local repository's commits to the remote repository (e.g., GitHub). This is how you share your local work with the rest of your team.",
    "code": "git push origin main",
    "summary": "Uploads local commits to a remote server."
  },
  {
    "id": 31,
    "title": "What does git pull do?",
    "category": "Essential Git Commands",
    "difficulty": "Beginner",
    "priority": "High",
    "explanation": "It downloads the latest changes from the remote repository and immediately merges them into your current local working branch. Under the hood, `git pull` is essentially `git fetch` followed by `git merge`.",
    "code": "git pull origin main",
    "summary": "Downloads and immediately merges remote changes into your local branch."
  },
  {
    "id": 32,
    "title": "What does git fetch do?",
    "category": "Essential Git Commands",
    "difficulty": "Intermediate",
    "priority": "High",
    "explanation": "It downloads commits, branches, and tags from the remote repository into your local repository, but it DOES NOT merge them or modify your working files. It just updates your local copy of the remote tracking branches.",
    "code": "git fetch origin",
    "summary": "Downloads remote changes without merging them into your working files."
  },
  {
    "id": 33,
    "title": "git fetch vs git pull?",
    "category": "Real-World Scenarios",
    "difficulty": "Senior",
    "priority": "High",
    "explanation": "### Fetch\n```text\nRemote Repository\n       ↓\n     fetch\n       ↓\nRemote-tracking branch\n       ↓\nLocal working branch unchanged\n```\n### Pull\n```text\ngit pull\n   │\n   ├── fetch\n   │\n   └── merge/rebase\n```\n**Interview Tip:** Prefer `fetch` when you want to review what other developers have done before integrating it. It's safer because it doesn't force a merge conflict in your working directory immediately.",
    "summary": "Fetch only downloads data; Pull downloads and forces an immediate merge."
  },
  {
    "id": 34,
    "title": "What does git remote do?",
    "category": "Essential Git Commands",
    "difficulty": "Intermediate",
    "explanation": "It lets you manage the connections to remote repositories. You can add, view, rename, or remove URLs for repositories hosted on GitHub or Azure Repos.",
    "summary": "Manages connections to remote servers."
  },
  {
    "id": 35,
    "title": "What does git remote -v show?",
    "category": "Essential Git Commands",
    "difficulty": "Beginner",
    "explanation": "It lists all configured remote repository connections along with their URLs, showing both the `fetch` and `push` addresses.",
    "code": "git remote -v\n# origin  https://github.com/user/repo.git (fetch)\n# origin  https://github.com/user/repo.git (push)",
    "summary": "Displays the URLs of your remote repositories."
  },
  {
    "id": 36,
    "title": "What does git log do?",
    "category": "Essential Git Commands",
    "difficulty": "Beginner",
    "priority": "High",
    "explanation": "It displays the commit history for the current branch. It shows the commit hash, author, date, and commit message in chronological order.",
    "summary": "Displays the repository's commit history."
  },
  {
    "id": 37,
    "title": "How do you view a compact Git history?",
    "category": "Essential Git Commands",
    "difficulty": "Intermediate",
    "explanation": "You use the `--oneline` flag. It condenses each commit to a single line showing the short hash and the commit message. You can add `--graph` to see an ASCII representation of branches.",
    "code": "git log --oneline --graph",
    "summary": "Use `git log --oneline`."
  },
  {
    "id": 38,
    "title": "What does git diff do?",
    "category": "Essential Git Commands",
    "difficulty": "Intermediate",
    "priority": "High",
    "explanation": "By default, `git diff` shows the line-by-line differences between your current Working Directory and the Staging Area. It highlights what code you have changed but haven't added yet.",
    "summary": "Shows the exact code changes that have not yet been staged."
  },
  {
    "id": 39,
    "title": "How do you compare two commits?",
    "category": "Essential Git Commands",
    "difficulty": "Intermediate",
    "explanation": "You can pass the hashes of the two commits to `git diff`.",
    "code": "git diff <commit-hash-1> <commit-hash-2>",
    "summary": "Use `git diff hash1 hash2`."
  },
  {
    "id": 40,
    "title": "What does git show do?",
    "category": "Essential Git Commands",
    "difficulty": "Intermediate",
    "explanation": "It displays the metadata and the exact code changes (diff) introduced by a specific commit. By default, running just `git show` will display the very last commit (HEAD).",
    "code": "git show <commit-hash>",
    "summary": "Shows the details and code changes of a specific commit."
  },
  {
    "id": 41,
    "title": "What does git checkout do?",
    "category": "Essential Git Commands",
    "difficulty": "Beginner",
    "explanation": "Historically, `git checkout` was an overloaded command used to do two very different things: switch between branches, AND restore files in the working directory to a previous state.",
    "summary": "An older command used to switch branches or restore files."
  },
  {
    "id": 42,
    "title": "What does git switch do?",
    "category": "Essential Git Commands",
    "difficulty": "Beginner",
    "explanation": "Introduced in Git 2.23, `git switch` specifically handles switching between branches (taking over that responsibility from `git checkout`). It is safer and clearer.",
    "code": "git switch feature-branch\n# Create and switch:\ngit switch -c new-feature",
    "summary": "The modern command used exclusively to switch branches."
  },
  {
    "id": 43,
    "title": "git checkout vs git switch?",
    "category": "Essential Git Commands",
    "difficulty": "Intermediate",
    "explanation": "`git checkout` is the older, multi-purpose command that switches branches AND modifies files. `git switch` is a newer, dedicated command that ONLY switches branches, making it safer and less confusing for beginners.",
    "summary": "`switch` is the modern, safer replacement for switching branches."
  },
  {
    "id": 44,
    "title": "What does git restore do?",
    "category": "Essential Git Commands",
    "difficulty": "Intermediate",
    "explanation": "Introduced in Git 2.23 alongside `switch`, `git restore` is the dedicated command for discarding uncommitted changes in your working directory or un-staging files.",
    "code": "git restore file.txt",
    "summary": "The modern command to discard uncommitted changes in files."
  },
  {
    "id": 45,
    "title": "git restore vs git reset?",
    "category": "Essential Git Commands",
    "difficulty": "Advanced",
    "explanation": "`git restore` modifies files in your Working Directory or Staging Area without moving the HEAD pointer. `git reset` moves the HEAD pointer to a different commit (rewriting history) and optionally modifies the working directory.",
    "summary": "`restore` undoes file changes; `reset` undoes commits."
  },
  {
    "id": 46,
    "title": "What does git rm do?",
    "category": "Essential Git Commands",
    "difficulty": "Intermediate",
    "explanation": "It removes a file from the Working Directory and also automatically stages the deletion. If you only want to remove it from Git tracking but keep it on your hard drive, use `--cached`.",
    "code": "git rm --cached sensitive.env",
    "summary": "Deletes a file and stages the deletion."
  },
  {
    "id": 47,
    "title": "What does git mv do?",
    "category": "Essential Git Commands",
    "difficulty": "Intermediate",
    "explanation": "It renames or moves a file and automatically stages the change. It is equivalent to physically moving the file, running `git rm` on the old path, and `git add` on the new path.",
    "code": "git mv oldname.js newname.js",
    "summary": "Renames a file and stages the rename."
  },
  {
    "id": 48,
    "title": "What does git clean do?",
    "category": "Essential Git Commands",
    "difficulty": "Advanced",
    "explanation": "It removes completely untracked files from your working directory. It is a dangerous command because it permanently deletes files that Git doesn't know about. Always use `-n` (dry run) first.",
    "code": "git clean -fd",
    "summary": "Permanently deletes untracked files from the working directory."
  },
  {
    "id": 49,
    "title": "What does git stash do?",
    "category": "Essential Git Commands",
    "difficulty": "Intermediate",
    "priority": "High",
    "explanation": "It takes your modified, uncommitted changes and saves them temporarily on a stack, leaving you with a clean working directory. This is useful when you need to switch branches quickly but aren't ready to commit your current work.",
    "summary": "Temporarily shelves uncommitted changes so you can work on something else."
  },
  {
    "id": 50,
    "title": "How do you apply a stashed change?",
    "category": "Essential Git Commands",
    "difficulty": "Intermediate",
    "explanation": "You use `git stash pop` to apply the most recent stash to your working directory and immediately remove it from the stash stack. Alternatively, `git stash apply` applies it but keeps it in the stack.",
    "code": "git stash pop",
    "summary": "Use `git stash pop`."
  },
  {
    "id": 51,
    "title": "Why are Git branches used?",
    "category": "Branching & Merging",
    "difficulty": "Beginner",
    "explanation": "Branches allow you to diverge from the main line of development (like `main`) and continue to do work without messing up that main line. They are essential for isolating features, bug fixes, and experiments safely.",
    "summary": "To isolate new work from the stable main codebase."
  },
  {
    "id": 52,
    "title": "How do you create a branch?",
    "category": "Branching & Merging",
    "difficulty": "Beginner",
    "priority": "High",
    "explanation": "You use the `git branch` command followed by the desired name.",
    "code": "git branch feature-login",
    "summary": "Use `git branch <branch-name>`."
  },
  {
    "id": 53,
    "title": "How do you switch to another branch?",
    "category": "Branching & Merging",
    "difficulty": "Beginner",
    "explanation": "You use `git switch` or the older `git checkout` command.",
    "code": "git switch feature-login",
    "summary": "Use `git switch <branch-name>`."
  },
  {
    "id": 54,
    "title": "How do you create and switch to a branch in one command?",
    "category": "Branching & Merging",
    "difficulty": "Beginner",
    "explanation": "You can pass the `-c` flag to `git switch`, or the `-b` flag to `git checkout`.",
    "code": "git switch -c feature-login\n# or\ngit checkout -b feature-login",
    "summary": "Use `git switch -c <branch-name>`."
  },
  {
    "id": 55,
    "title": "How do you delete a local branch?",
    "category": "Branching & Merging",
    "difficulty": "Intermediate",
    "explanation": "You use `git branch -d`. If the branch hasn't been merged and you want to force delete it (losing the work), use a capital `-D`.",
    "code": "git branch -d feature-login",
    "summary": "Use `git branch -d <branch-name>`."
  },
  {
    "id": 56,
    "title": "How do you delete a remote branch?",
    "category": "Branching & Merging",
    "difficulty": "Intermediate",
    "explanation": "You push an empty pointer to the remote using the `--delete` flag.",
    "code": "git push origin --delete feature-login",
    "summary": "Use `git push origin --delete <branch-name>`."
  },
  {
    "id": 57,
    "title": "What is branch tracking?",
    "category": "Branching & Merging",
    "difficulty": "Intermediate",
    "explanation": "Branch tracking is a direct relationship between a local branch and a remote branch. When a local branch tracks a remote branch (e.g., `origin/main`), Git knows exactly where to `push` to and `pull` from when you don't explicitly specify a target.",
    "summary": "A link between a local branch and its remote counterpart."
  },
  {
    "id": 58,
    "title": "What is an upstream branch?",
    "category": "Branching & Merging",
    "difficulty": "Intermediate",
    "explanation": "An upstream branch is the remote branch that a local branch is tracking. You set it the first time you push a new local branch using the `-u` or `--set-upstream` flag.",
    "code": "git push -u origin feature-login",
    "summary": "The remote branch linked to your local branch."
  },
  {
    "id": 59,
    "title": "What is branch divergence?",
    "category": "Branching & Merging",
    "difficulty": "Advanced",
    "explanation": "Divergence happens when your local branch and the remote branch have both received new, different commits since the last time they were synced. You must resolve this divergence by merging or rebasing before you can push.",
    "summary": "When local and remote histories split and both have unique commits."
  },
  {
    "id": 60,
    "title": "What is merging?",
    "category": "Branching & Merging",
    "difficulty": "Beginner",
    "priority": "High",
    "explanation": "Merging is the process of taking the changes from one branch (e.g., a feature branch) and integrating them into another branch (e.g., `main`).",
    "code": "git switch main\ngit merge feature-login",
    "summary": "Combining changes from one branch into another."
  },
  {
    "id": 61,
    "title": "What is a fast-forward merge?",
    "category": "Branching & Merging",
    "difficulty": "Intermediate",
    "explanation": "If you merge branch A into branch B, and branch B hasn't had any new commits since branch A was created, Git simply moves the pointer of branch B forward to match branch A. No new 'merge commit' is created.",
    "summary": "A simple merge where Git just moves the branch pointer forward without creating a merge commit."
  },
  {
    "id": 62,
    "title": "What is a three-way merge?",
    "category": "Branching & Merging",
    "difficulty": "Advanced",
    "explanation": "If the target branch has received new commits since the feature branch was created, Git cannot fast-forward. It uses a three-way merge algorithm (comparing the two branch tips and their common ancestor) and creates a new 'merge commit' to tie the histories together.",
    "summary": "A merge that ties two divergent histories together by creating a special merge commit."
  },
  {
    "id": 63,
    "title": "What is a merge commit?",
    "category": "Branching & Merging",
    "difficulty": "Intermediate",
    "explanation": "A special commit created during a three-way merge. Unlike a normal commit which has one parent, a merge commit has two parent commits, representing the joining of two separate lines of history.",
    "summary": "A commit with two parents that ties two branch histories together."
  },
  {
    "id": 64,
    "title": "What is a merge conflict?",
    "category": "Branching & Merging",
    "difficulty": "Beginner",
    "priority": "High",
    "explanation": "A merge conflict occurs when Git cannot automatically resolve the differences between two branches being merged. Git pauses the merge process and asks the developer to manually resolve the conflict.",
    "summary": "When Git cannot automatically reconcile different changes to the same code."
  },
  {
    "id": 65,
    "title": "Why do merge conflicts occur?",
    "category": "Branching & Merging",
    "difficulty": "Intermediate",
    "explanation": "They typically occur when two developers modify the exact same lines of the exact same file in different ways, or when one developer modifies a file that another developer deleted.",
    "summary": "When two branches modify the same line of code in conflicting ways."
  },
  {
    "id": 66,
    "title": "How do you resolve a merge conflict?",
    "category": "Real-World Scenarios",
    "difficulty": "Senior",
    "priority": "High",
    "explanation": "### Scenario: Two developers modified the same file.\n```text\ngit pull\n     ↓\nConflict occurs\n     ↓\ngit status\n     ↓\nOpen conflicted files\n     ↓\nResolve conflicts\n     ↓\ngit add\n     ↓\ngit commit\n     ↓\ngit push\n```\n**Explanation:** Run `git status` to see conflicted files. Open the file; Git marks conflicts with `<<<<<<<`, `=======`, and `>>>>>>>`. Edit the file to keep the correct changes and remove the markers. Finally, `git add` the file and `git commit` to complete the merge.",
    "summary": "Open the file, choose the correct changes, remove Git markers, add, and commit."
  },
  {
    "id": 67,
    "title": "What is the difference between git merge and git rebase?",
    "category": "Branching & Merging",
    "difficulty": "Senior",
    "priority": "High",
    "explanation": "Both integrate changes, but in different ways:\n- **Merge:** Takes the feature branch and ties it into `main` with a merge commit. It is non-destructive but creates a messy, branching history.\n- **Rebase:** Takes the feature branch commits and literally rewrites them to start from the current tip of `main`. It creates a clean linear history but rewrites commit hashes.",
    "summary": "Merge creates a merge commit; Rebase rewrites history to make it linear."
  },
  {
    "id": 68,
    "title": "When should you use merge instead of rebase?",
    "category": "Real-World Scenarios",
    "difficulty": "Senior",
    "priority": "High",
    "explanation": "### Merge\n```text\nmain ────────●────────●\n              \\      /\nfeature        ●────●\n```\nUse merge when integrating a completed feature branch into a shared public branch (like `main`). Merging preserves the exact historical timeline of what happened and when, without destroying commit hashes.",
    "summary": "Use merge when combining branches into public/shared branches like `main`."
  },
  {
    "id": 69,
    "title": "When should you use rebase?",
    "category": "Real-World Scenarios",
    "difficulty": "Senior",
    "priority": "High",
    "explanation": "### Rebase\n```text\nmain ────────●────────●\n                       \\\nfeature                 ●────●\n```\nUse rebase on your LOCAL, unpublished feature branch to update it with the latest changes from `main`. **Golden Rule:** Never blindly rebase shared/public branches, as rewriting history will cause massive conflicts for other developers.",
    "summary": "Use rebase to update your local private branch with changes from main to keep history linear."
  },
  {
    "id": 70,
    "title": "What is an interactive rebase?",
    "category": "Branching & Merging",
    "difficulty": "Advanced",
    "explanation": "Interactive rebase (`git rebase -i`) lets you rewrite local commit history. It opens an editor allowing you to reorder, edit, drop, or squash commits together before pushing them to the server.",
    "summary": "A powerful tool to rewrite, clean up, and combine local commits."
  },
  {
    "id": 71,
    "title": "What is git rebase -i used for?",
    "category": "Branching & Merging",
    "difficulty": "Advanced",
    "explanation": "It is mostly used for cleaning up a messy local commit history. If you have 5 \"work in progress\" commits, you use `-i` to combine (squash) them into one clean, descriptive commit before creating a Pull Request.",
    "summary": "Cleaning up local commit history before sharing it."
  },
  {
    "id": 72,
    "title": "What is squashing commits?",
    "category": "Branching & Merging",
    "difficulty": "Intermediate",
    "explanation": "Squashing is the process of taking multiple distinct commits and condensing them into a single, comprehensive commit.",
    "summary": "Combining multiple commits into one."
  },
  {
    "id": 73,
    "title": "Why should you squash commits?",
    "category": "Branching & Merging",
    "difficulty": "Intermediate",
    "explanation": "To keep the `main` branch history clean and readable. A Pull Request might have 20 small commits like 'fix typo', 'fix tests', 'WIP'. Squashing them turns them into a single commit: 'Feature: Login Module'.",
    "summary": "To keep project history clean, readable, and easy to revert."
  },
  {
    "id": 74,
    "title": "What is cherry-picking?",
    "category": "Branching & Merging",
    "difficulty": "Advanced",
    "priority": "High",
    "explanation": "Cherry-picking is the act of picking exactly one specific commit from another branch and applying it to your current branch, without merging the entire branch.",
    "code": "git cherry-pick <commit-hash>",
    "summary": "Applying a specific single commit from another branch to your current branch."
  },
  {
    "id": 75,
    "title": "When would you use git cherry-pick?",
    "category": "Real-World Scenarios",
    "difficulty": "Senior",
    "explanation": "### Scenario: A critical production fix exists on another branch.\n```text\nfeature branch\n      │\n      ● Fix Commit\n      │\n      ▼\nrelease branch\n      │\n      ●\n      │\n   cherry-pick\n      │\n      ▼\n      ● Fix\n```\nIf a developer fixed a bug in a massive feature branch, but you need that bug fix *right now* on the production release branch, you cherry-pick only that specific fix commit.",
    "summary": "When you need a specific bug fix from another branch without pulling in all the other work."
  },
  {
    "id": 76,
    "title": "What is git reset?",
    "category": "Reset, Revert & Recovery",
    "difficulty": "Intermediate",
    "priority": "High",
    "explanation": "`git reset` is a powerful command used to undo local changes by moving the HEAD pointer backward in history to a previous commit, essentially erasing recent local commits.",
    "summary": "Moves the branch pointer backward to erase recent local commits."
  },
  {
    "id": 77,
    "title": "What is the difference between git reset --soft, --mixed, and --hard?",
    "category": "Reset, Revert & Recovery",
    "difficulty": "Advanced",
    "priority": "High",
    "explanation": "- **--soft:** Moves HEAD back. Changes remain in your Staging Area.\n- **--mixed (default):** Moves HEAD back. Changes are removed from Staging Area but remain in Working Directory.\n- **--hard:** Moves HEAD back AND permanently wipes out the Working Directory. Changes are lost.",
    "summary": "Soft keeps changes staged; Mixed unstages them; Hard completely deletes them."
  },
  {
    "id": 78,
    "title": "git reset vs git revert?",
    "category": "Real-World Scenarios",
    "difficulty": "Senior",
    "priority": "High",
    "explanation": "### Reset vs Revert\n```text\nLocal/unpublished history\n        ↓\n       reset\n\nShared/public history\n        ↓\n       revert\n```\n- **Reset:** Erases history. Safe for local, unpublished work.\n- **Revert:** Creates a *new* commit that applies the exact opposite changes. Safe for public branches.",
    "summary": "Reset rewrites history; Revert moves history forward safely by creating an undo commit."
  },
  {
    "id": 79,
    "title": "When should you use git revert instead of git reset?",
    "category": "Real-World Scenarios",
    "difficulty": "Senior",
    "explanation": "### Scenario: You pushed a bad commit to the shared `main` branch.\nNever use `reset` on a shared branch because it rewrites history. If you reset and force-push, you will break the repository for everyone else. Instead, use `git revert <commit-hash>`. This creates a new commit that undoes the bad code, preserving a safe, linear history for the team.",
    "summary": "Whenever the commit has already been pushed to a shared remote repository."
  },
  {
    "id": 80,
    "title": "What happens when you execute git reset --hard?",
    "category": "Reset, Revert & Recovery",
    "difficulty": "Advanced",
    "explanation": "Git immediately updates the branch pointer to the specified commit, clears the Staging Area, and completely overwrites your Working Directory to match that commit. Any uncommitted local work is destroyed.",
    "summary": "All uncommitted local changes are permanently deleted, and the project is rolled back."
  },
  {
    "id": 81,
    "title": "How do you undo the latest commit?",
    "category": "Real-World Scenarios",
    "difficulty": "Intermediate",
    "explanation": "If you haven't pushed yet, run `git reset HEAD~1` (or `--soft` if you want to keep the changes staged). This steps back exactly one commit.",
    "code": "git reset --soft HEAD~1",
    "summary": "Use `git reset HEAD~1`."
  },
  {
    "id": 82,
    "title": "How do you undo a commit that has already been pushed?",
    "category": "Real-World Scenarios",
    "difficulty": "Intermediate",
    "explanation": "You must use `git revert <commit-hash>`. Then push the resulting revert commit. Never `reset` and force-push on shared branches.",
    "code": "git revert HEAD\ngit push",
    "summary": "Use `git revert` followed by `git push`."
  },
  {
    "id": 83,
    "title": "How do you remove a file from the last commit?",
    "category": "Reset, Revert & Recovery",
    "difficulty": "Advanced",
    "explanation": "If you committed a file by accident, run `git reset --soft HEAD~1` to undo the commit but keep the files staged. Then use `git restore --staged <file>` to unstage the specific file. Finally, commit again.",
    "summary": "Soft reset, unstage the file, and commit again."
  },
  {
    "id": 84,
    "title": "How do you modify the last commit?",
    "category": "Real-World Scenarios",
    "difficulty": "Intermediate",
    "explanation": "### Scenario: You committed locally but forgot a file.\nYou don't need to create a new commit. Just stage the forgotten file (`git add`), then run `git commit --amend`. This alters the previous commit to include the new file.",
    "summary": "Use `git commit --amend`."
  },
  {
    "id": 85,
    "title": "What is git commit --amend?",
    "category": "Reset, Revert & Recovery",
    "difficulty": "Intermediate",
    "explanation": "It replaces the very last commit with a new commit. It is used to fix the commit message or add missing files. **Warning:** Because it changes the commit hash, do not amend commits that have already been pushed.",
    "code": "git commit --amend -m \"New improved message\"",
    "summary": "Modifies the most recent commit."
  },
  {
    "id": 86,
    "title": "How do you recover a deleted branch?",
    "category": "Reset, Revert & Recovery",
    "difficulty": "Senior",
    "explanation": "Even if a branch is deleted, its commits still exist in Git's database until garbage collection runs. You can find the hash of the tip of the deleted branch using `git reflog`, and then recreate the branch from that hash.",
    "code": "git reflog\n# find hash, e.g. abc1234\ngit branch feature-recovered abc1234",
    "summary": "Find the commit hash in `git reflog` and create a new branch pointing to it."
  },
  {
    "id": 87,
    "title": "What is git reflog?",
    "category": "Reset, Revert & Recovery",
    "difficulty": "Senior",
    "priority": "High",
    "explanation": "Reflog (Reference Log) is a local, chronological history of every single time the HEAD pointer moved in your local repository. It records commits, resets, checkouts, and merges. It is the ultimate safety net.",
    "summary": "A local diary of every movement of the HEAD pointer, used to recover lost work."
  },
  {
    "id": 88,
    "title": "How can git reflog help recover lost commits?",
    "category": "Real-World Scenarios",
    "difficulty": "Senior",
    "explanation": "### Scenario: You executed `git reset --hard` and lost commits.\n```text\ngit reflog\n   ↓\nFind lost commit hash\n   ↓\nCreate/recover branch\n   ↓\nVerify changes\n```\n`reflog` shows the hash of the commit you were on *before* you ran the disastrous reset command. You can simply `git reset --hard <old-hash>` to get it all back.",
    "summary": "It shows the hashes of commits that are no longer accessible via normal branch history."
  },
  {
    "id": 89,
    "title": "How do you recover changes after git reset --hard?",
    "category": "Reset, Revert & Recovery",
    "difficulty": "Senior",
    "explanation": "You can ONLY recover committed changes. Uncommitted changes destroyed by `--hard` are gone forever. For committed changes, run `git reflog`, find the old commit hash, and run `git reset --hard <old-hash>`.",
    "summary": "Use `git reflog` to find the old commit hash, then reset back to it."
  },
  {
    "id": 90,
    "title": "How do you move a commit from one branch to another?",
    "category": "Reset, Revert & Recovery",
    "difficulty": "Advanced",
    "explanation": "Switch to the correct branch, use `git cherry-pick <hash>` to copy the commit. Then switch back to the wrong branch, and use `git reset --hard HEAD~1` to remove it from there.",
    "summary": "Cherry-pick it to the correct branch, then reset it off the wrong branch."
  },
  {
    "id": 91,
    "title": "How do you remove unwanted commits from a branch?",
    "category": "Reset, Revert & Recovery",
    "difficulty": "Advanced",
    "explanation": "You can use an interactive rebase (`git rebase -i HEAD~5`). An editor will open. Change the word `pick` to `drop` (or `d`) next to the commits you want to delete. Save and close.",
    "summary": "Use interactive rebase and `drop` the commits."
  },
  {
    "id": 92,
    "title": "How do you combine multiple commits?",
    "category": "Reset, Revert & Recovery",
    "difficulty": "Advanced",
    "explanation": "Use interactive rebase (`git rebase -i HEAD~5`). Change the word `pick` to `squash` (or `s`) for the commits you want to merge into the commit directly above them.",
    "summary": "Use interactive rebase and `squash` the commits together."
  },
  {
    "id": 93,
    "title": "How do you change a commit message?",
    "category": "Reset, Revert & Recovery",
    "difficulty": "Intermediate",
    "explanation": "If it's the very last commit, use `git commit --amend -m \"New message\"`. If it's an older commit, use interactive rebase (`git rebase -i`) and mark the commit with `reword` (or `r`).",
    "summary": "Use `git commit --amend` for the latest, or interactive rebase for older commits."
  },
  {
    "id": 94,
    "title": "How do you temporarily save uncommitted changes?",
    "category": "Reset, Revert & Recovery",
    "difficulty": "Intermediate",
    "explanation": "Use `git stash`. It removes your modifications and puts them on a hidden stack, leaving you with a clean working directory so you can switch branches.",
    "summary": "Use `git stash`."
  },
  {
    "id": 95,
    "title": "How do you recover changes from Git stash?",
    "category": "Reset, Revert & Recovery",
    "difficulty": "Intermediate",
    "explanation": "Use `git stash pop`. This takes the top item off the stash stack, applies the changes back to your working directory, and deletes the stash record.",
    "summary": "Use `git stash pop`."
  },
  {
    "id": 96,
    "title": "What is GitHub?",
    "category": "GitHub",
    "difficulty": "Beginner",
    "priority": "High",
    "explanation": "GitHub is a web-based hosting service for Git repositories. It provides a graphical interface, collaboration features like Pull Requests and Issues, and automation tools like GitHub Actions, making it the largest hub for open-source and private development.",
    "summary": "A cloud platform that hosts Git repositories and provides collaboration and CI/CD tools."
  },
  {
    "id": 97,
    "title": "Git vs GitHub?",
    "category": "GitHub",
    "difficulty": "Beginner",
    "priority": "High",
    "explanation": "- **Git:** The underlying command-line version control software installed on your local computer.\n- **GitHub:** A cloud-based website and service that hosts Git repositories. You use Git to push code to GitHub.",
    "summary": "Git is the tool; GitHub is the hosting service."
  },
  {
    "id": 98,
    "title": "What is a GitHub repository?",
    "category": "GitHub",
    "difficulty": "Beginner",
    "explanation": "A cloud-hosted version of a Git repository. It contains all the project files, commit history, branches, issues, pull requests, and project settings.",
    "summary": "A project hosted on GitHub containing code, history, and collaboration data."
  },
  {
    "id": 99,
    "title": "What is a GitHub Organization?",
    "category": "GitHub",
    "difficulty": "Intermediate",
    "explanation": "A shared account where businesses or open-source projects can collaborate across many repositories at once. It provides advanced permissions, billing, and team management compared to a personal account.",
    "summary": "A shared workspace for companies to manage multiple repositories and teams."
  },
  {
    "id": 100,
    "title": "What is a GitHub fork?",
    "category": "GitHub",
    "difficulty": "Intermediate",
    "priority": "High",
    "explanation": "A fork is a personal, server-side copy of someone else's repository. Forking allows you to freely experiment with changes without affecting the original project. It is the foundation of open-source contribution.",
    "summary": "Creating a personal copy of another user's repository on your GitHub account."
  },
  {
    "id": 101,
    "title": "Fork vs clone?",
    "category": "GitHub",
    "difficulty": "Intermediate",
    "explanation": "- **Fork:** A server-side action on GitHub that copies a repo from Account A to Account B.\n- **Clone:** A client-side Git command that downloads a repo from GitHub to your local computer's hard drive.",
    "summary": "Fork copies a repo on the server; Clone downloads a repo to your computer."
  },
  {
    "id": 102,
    "title": "What is a GitHub Pull Request?",
    "category": "GitHub",
    "difficulty": "Beginner",
    "priority": "High",
    "explanation": "A Pull Request (PR) is a formal request asking the owners of a repository to review and merge your code changes (usually from a feature branch) into the main branch. It provides a UI for code review, discussion, and automated checks.",
    "summary": "A formal request to review and merge code changes into the main branch."
  },
  {
    "id": 103,
    "title": "What is a Pull Request workflow?",
    "category": "Real-World Scenarios",
    "difficulty": "Senior",
    "priority": "High",
    "explanation": "### PR Workflow\n```text\nmain\n │\n ├── feature/login\n │\n ▼\nDeveloper\n │\n ▼\nCommit & Push\n │\n ▼\nCreate Pull Request\n │\n ├── CI Build\n ├── Unit Tests\n ├── Security Scan\n └── Code Review\n │\n ▼\nApproval & Merge\n```\n**Explanation:** A developer creates a branch, pushes code, and opens a PR. Automated CI pipelines run tests. Senior developers review the code. Once approved and tests pass, it is merged into `main`.",
    "summary": "Create branch -> Push -> Open PR -> CI Checks -> Code Review -> Merge."
  },
  {
    "id": 104,
    "title": "What is a draft Pull Request?",
    "category": "GitHub",
    "difficulty": "Intermediate",
    "explanation": "A Draft PR is a Pull Request marked as \"work in progress\". It indicates that the code is not yet ready for formal review or merging, preventing accidental merges while still allowing others to see your progress.",
    "summary": "A PR marked as work-in-progress, which cannot be merged until marked ready."
  },
  {
    "id": 105,
    "title": "What is a code review?",
    "category": "GitHub",
    "difficulty": "Beginner",
    "explanation": "The process where other developers read your submitted code in a Pull Request, leave comments, suggest improvements, and ultimately approve or reject the changes before they are merged.",
    "summary": "Peers reviewing your code for bugs, quality, and standards before merging."
  },
  {
    "id": 106,
    "title": "What are GitHub Issues?",
    "category": "GitHub",
    "difficulty": "Beginner",
    "explanation": "A built-in tracking system for tasks, enhancements, and bugs. Developers and users can open issues to discuss problems or plan new features.",
    "summary": "A built-in ticketing system for tracking bugs and tasks."
  },
  {
    "id": 107,
    "title": "What are GitHub Projects?",
    "category": "GitHub",
    "difficulty": "Intermediate",
    "explanation": "A project management tool built into GitHub (similar to Jira or Trello). It allows you to organize Issues and Pull Requests into Kanban boards, tables, and timelines.",
    "summary": "A Kanban-style project management board for organizing work."
  },
  {
    "id": 108,
    "title": "What are GitHub Labels?",
    "category": "GitHub",
    "difficulty": "Beginner",
    "explanation": "Color-coded tags (e.g., `bug`, `enhancement`, `help wanted`) applied to Issues and Pull Requests to categorize and easily filter them.",
    "summary": "Color-coded tags used to categorize Issues and PRs."
  },
  {
    "id": 109,
    "title": "What are GitHub Milestones?",
    "category": "GitHub",
    "difficulty": "Intermediate",
    "explanation": "Milestones group related Issues and Pull Requests together with a specific due date. They are typically used to track progress toward a specific release version (e.g., `v1.0.0 Release`).",
    "summary": "Groups of issues tracking progress toward a specific goal or release date."
  },
  {
    "id": 110,
    "title": "What is GitHub Actions?",
    "category": "GitHub",
    "difficulty": "Intermediate",
    "priority": "High",
    "explanation": "GitHub's native Continuous Integration and Continuous Deployment (CI/CD) platform. It allows you to automate workflows directly in your repository (e.g., automatically running tests when a PR is opened).",
    "summary": "GitHub's native CI/CD and automation platform."
  },
  {
    "id": 111,
    "title": "What is a GitHub Actions workflow?",
    "category": "GitHub",
    "difficulty": "Advanced",
    "explanation": "### Conceptual Workflow\n```text\nDeveloper Push\n      ↓\nGitHub Repository\n      ↓\nGitHub Actions\n      ↓\nBuild\n      ↓\nTest\n      ↓\nDeploy\n```\nA workflow is a configurable automated process made up of one or more jobs. Workflows are defined by a YAML file in the `.github/workflows` directory.",
    "summary": "An automated process defined in YAML that runs jobs like building and testing code."
  },
  {
    "id": 112,
    "title": "What is a GitHub Actions runner?",
    "category": "GitHub",
    "difficulty": "Advanced",
    "explanation": "A runner is the virtual machine (Linux, Windows, or macOS) that actually executes the steps defined in your GitHub Actions workflow. You can use GitHub-hosted runners or host your own.",
    "summary": "The server/VM that executes your automated workflow jobs."
  },
  {
    "id": 113,
    "title": "What is a GitHub Actions secret?",
    "category": "GitHub",
    "difficulty": "Intermediate",
    "explanation": "Encrypted environment variables (like API keys or cloud deployment passwords) stored safely in GitHub settings. They can be injected into GitHub Actions workflows without exposing them in the source code.",
    "summary": "Encrypted variables used to safely pass credentials to CI/CD pipelines."
  },
  {
    "id": 114,
    "title": "How do you protect the main branch?",
    "category": "GitHub",
    "difficulty": "Intermediate",
    "explanation": "You navigate to Repository Settings > Branches, and add a Branch Protection Rule for `main`. This prevents anyone from pushing directly to `main` and enforces the use of Pull Requests.",
    "summary": "By enabling Branch Protection Rules in the repository settings."
  },
  {
    "id": 115,
    "title": "What are branch protection rules?",
    "category": "GitHub",
    "difficulty": "Intermediate",
    "priority": "High",
    "explanation": "Rules enforced by the server to prevent bad code from entering a branch. Common rules include:\n- Require Pull Request reviews before merging.\n- Require status checks (CI builds/tests) to pass.\n- Prevent force pushes (`git push -f`).\n- Prevent branch deletion.",
    "summary": "Server-side rules that enforce code quality and security standards before code can be merged."
  },
  {
    "id": 116,
    "title": "What is Azure Repos?",
    "category": "Azure Repos",
    "difficulty": "Beginner",
    "explanation": "Azure Repos is Microsoft's set of version control tools provided as part of Azure DevOps. It supports both Git repositories and Team Foundation Version Control (TFVC).",
    "summary": "Microsoft's version control hosting service inside Azure DevOps."
  },
  {
    "id": 117,
    "title": "What is Azure Repos Git?",
    "category": "Azure Repos",
    "difficulty": "Beginner",
    "explanation": "It is simply standard Git, hosted by Azure DevOps. It uses the exact same Git commands (`clone`, `commit`, `push`) as any other Git provider. It is entirely standard and distributed.",
    "summary": "Standard Git repositories hosted in Azure DevOps."
  },
  {
    "id": 118,
    "title": "Azure Repos vs GitHub?",
    "category": "Azure Repos",
    "difficulty": "Senior",
    "explanation": "- **Azure Repos:** Deeply integrated with Azure Boards (work tracking) and Azure Pipelines. Heavily focused on enterprise governance, strict branch policies, and Active Directory integration.\n- **GitHub:** The leader in open-source. Has Actions, Advanced Security, and a massive community. Many enterprises are slowly migrating from Azure Repos to GitHub Enterprise.",
    "summary": "Azure Repos is highly integrated for enterprise Microsoft shops; GitHub is the industry standard for open-source and modern CI/CD."
  },
  {
    "id": 119,
    "title": "What is an Azure DevOps Organization?",
    "category": "Azure Repos",
    "difficulty": "Intermediate",
    "explanation": "The top-level container in Azure DevOps representing a company or a large division. It contains one or more Projects and handles billing and high-level user access (Azure AD).",
    "summary": "The top-level account/container for your company in Azure DevOps."
  },
  {
    "id": 120,
    "title": "What is an Azure DevOps Project?",
    "category": "Azure Repos",
    "difficulty": "Intermediate",
    "explanation": "A container within an Organization that groups together a specific software application's Repos, Boards (Agile tracking), Pipelines (CI/CD), and Artifacts.",
    "summary": "A workspace grouping related repositories, pipelines, and tasks."
  },
  {
    "id": 121,
    "title": "What is an Azure Repository?",
    "category": "Azure Repos",
    "difficulty": "Beginner",
    "explanation": "A specific Git repository living inside an Azure DevOps Project. A single Project can contain dozens of Repositories.",
    "summary": "A Git repository hosted in an Azure DevOps Project."
  },
  {
    "id": 122,
    "title": "What is a Pull Request in Azure Repos?",
    "category": "Azure Repos",
    "difficulty": "Beginner",
    "explanation": "Exactly the same concept as a GitHub PR: a request to review code and merge a feature branch into the main branch. It features an excellent side-by-side diff viewer and comment system.",
    "summary": "Azure's interface for reviewing and merging code."
  },
  {
    "id": 123,
    "title": "GitHub Pull Request vs Azure Repos Pull Request?",
    "category": "Azure Repos",
    "difficulty": "Intermediate",
    "explanation": "Conceptually identical. Azure Repos PRs traditionally had slightly stricter enforcement of branch policies (like tying PRs directly to Work Items in Azure Boards), but GitHub has largely caught up with these enterprise features.",
    "summary": "They are functionally identical, though Azure PRs deeply integrate with Azure Boards."
  },
  {
    "id": 124,
    "title": "How do you create a branch in Azure Repos?",
    "category": "Azure Repos",
    "difficulty": "Beginner",
    "explanation": "You usually create it locally using `git switch -c new-branch` and push it, or you can create it directly in the Azure DevOps web UI under the 'Branches' tab.",
    "summary": "Locally via Git, or via the Azure DevOps web interface."
  },
  {
    "id": 125,
    "title": "How do you clone an Azure Git repository?",
    "category": "Azure Repos",
    "difficulty": "Beginner",
    "explanation": "Navigate to the Repo in Azure DevOps, click the 'Clone' button, copy the HTTPS or SSH URL, and run `git clone <URL>` in your terminal.",
    "summary": "Use `git clone` with the URL provided in the Azure Repos UI."
  },
  {
    "id": 126,
    "title": "How do you create a Pull Request in Azure Repos?",
    "category": "Azure Repos",
    "difficulty": "Beginner",
    "explanation": "Push your branch to Azure Repos. Navigate to the 'Pull Requests' tab in the web UI, click 'New Pull Request', select your source branch and target branch, and provide a title.",
    "summary": "Push your branch, then use the 'New Pull Request' button in the web UI."
  },
  {
    "id": 127,
    "title": "What are branch policies in Azure Repos?",
    "category": "Azure Repos",
    "difficulty": "Intermediate",
    "priority": "High",
    "explanation": "Branch policies are strict rules applied to important branches (like `main`). They enforce code quality by requiring PRs (disallowing direct pushes), requiring a minimum number of reviewers, enforcing linked Work Items, and requiring successful CI builds.",
    "summary": "Rules that protect branches by enforcing code reviews, linked tasks, and passing builds."
  },
  {
    "id": 128,
    "title": "How do you require reviewers before merging?",
    "category": "Azure Repos",
    "difficulty": "Intermediate",
    "explanation": "In Azure Repos, go to Branch Policies for the `main` branch, and enable 'Require a minimum number of reviewers'. Set the count (e.g., 2). The PR cannot be merged until 2 people approve it.",
    "summary": "Configure 'Require a minimum number of reviewers' in Branch Policies."
  },
  {
    "id": 129,
    "title": "How do you enforce successful builds before merging?",
    "category": "Azure Repos",
    "difficulty": "Intermediate",
    "priority": "High",
    "explanation": "In Branch Policies, enable 'Build Validation'. You select an Azure Pipeline that compiles the code and runs tests. If the pipeline fails, the PR's Merge button is disabled.",
    "summary": "Add a 'Build Validation' policy pointing to your CI pipeline."
  },
  {
    "id": 130,
    "title": "How do you integrate Azure Repos with Azure Pipelines?",
    "category": "Azure Repos",
    "difficulty": "Advanced",
    "explanation": "You place an `azure-pipelines.yml` file in your repository. Azure Pipelines reads this file. By configuring a CI trigger (`trigger: - main`), the pipeline automatically runs whenever code is pushed or a PR is created.",
    "summary": "By adding an `azure-pipelines.yml` file to the repository."
  },
  {
    "id": 131,
    "title": "What is Git Bash?",
    "category": "Git Bash",
    "difficulty": "Beginner",
    "priority": "High",
    "explanation": "Git Bash is an application for Microsoft Windows environments which provides an emulation layer for a Git command-line experience. It brings standard Unix/Linux shell commands (like `ls`, `cd`, `cat`) to Windows.",
    "summary": "A terminal for Windows that emulates a Unix/Linux command-line environment."
  },
  {
    "id": 132,
    "title": "Git Bash vs Windows Command Prompt?",
    "category": "Git Bash",
    "difficulty": "Intermediate",
    "explanation": "Command Prompt (`cmd.exe`) uses older Windows DOS commands (like `dir`). Git Bash uses powerful Unix/Linux commands (like `ls`) and provides a much better environment for running Git and shell scripts.",
    "summary": "Git Bash uses Unix commands; Command Prompt uses Windows DOS commands."
  },
  {
    "id": 133,
    "title": "Git Bash vs PowerShell?",
    "category": "Git Bash",
    "difficulty": "Intermediate",
    "explanation": "PowerShell is Microsoft's modern, object-oriented shell and scripting language. It is incredibly powerful for Windows administration. However, many developers prefer Git Bash because it standardizes the terminal experience across Windows, Mac, and Linux.",
    "summary": "PowerShell is for advanced Windows scripting; Git Bash provides a cross-platform Unix experience."
  },
  {
    "id": 134,
    "title": "How do you navigate directories using Git Bash?",
    "category": "Git Bash",
    "difficulty": "Beginner",
    "explanation": "Use the `cd` (change directory) command.",
    "code": "cd Documents/Project\ncd ..   # Move up one folder",
    "summary": "Use the `cd` command."
  },
  {
    "id": 135,
    "title": "How do you create a directory using Git Bash?",
    "category": "Git Bash",
    "difficulty": "Beginner",
    "explanation": "Use the `mkdir` (make directory) command.",
    "code": "mkdir new-folder",
    "summary": "Use `mkdir <folder-name>`."
  },
  {
    "id": 136,
    "title": "How do you create a file using Git Bash?",
    "category": "Git Bash",
    "difficulty": "Beginner",
    "explanation": "Use the `touch` command.",
    "code": "touch index.html",
    "summary": "Use `touch <file-name>`."
  },
  {
    "id": 137,
    "title": "How do you delete a file or directory?",
    "category": "Git Bash",
    "difficulty": "Beginner",
    "explanation": "Use the `rm` command for files. Use `rm -rf` to force delete a directory and all its contents (be very careful!).",
    "code": "rm file.txt\nrm -rf folder-name",
    "summary": "Use `rm` for files and `rm -rf` for folders."
  },
  {
    "id": 138,
    "title": "How do you list hidden files?",
    "category": "Git Bash",
    "difficulty": "Beginner",
    "explanation": "Use the `ls -a` or `ls -la` command. The `-a` flag tells the `ls` (list) command to show ALL files, including hidden ones like `.git`.",
    "code": "ls -la",
    "summary": "Use `ls -a` or `ls -la`."
  },
  {
    "id": 139,
    "title": "How do you search for files or text using Git Bash?",
    "category": "Git Bash",
    "difficulty": "Intermediate",
    "explanation": "Use `find` to search for files by name. Use `grep` to search for specific text *inside* files.",
    "code": "find . -name \"*.js\"\ngrep -r \"password\" .",
    "summary": "Use `find` for file names and `grep` for text inside files."
  },
  {
    "id": 140,
    "title": "How do you configure Git and SSH using Git Bash?",
    "category": "Git Bash",
    "difficulty": "Intermediate",
    "explanation": "You run standard Git config commands, and use the built-in `ssh-keygen` utility to generate SSH keys for secure authentication.",
    "code": "git config --global user.name \"Name\"\nssh-keygen -t ed25519 -C \"email@example.com\"",
    "summary": "Use `git config` and `ssh-keygen` directly in the terminal."
  },
  {
    "id": 141,
    "title": "How do you authenticate Git with GitHub?",
    "category": "Git Security",
    "difficulty": "Beginner",
    "explanation": "You can authenticate using either HTTPS (which requires a Personal Access Token instead of a password) or SSH (which requires you to generate an SSH key pair and add the public key to your GitHub account).",
    "summary": "Via HTTPS with a Personal Access Token (PAT) or via SSH keys."
  },
  {
    "id": 142,
    "title": "HTTPS vs SSH authentication?",
    "category": "Git Security",
    "difficulty": "Intermediate",
    "explanation": "- **HTTPS:** Uses standard port 443. Good for strict firewalls. Requires caching your PAT so you aren't prompted every time.\n- **SSH:** Uses port 22. Highly secure and doesn't require a token/password after initial setup, but might be blocked by some corporate firewalls.",
    "summary": "HTTPS uses a token; SSH uses a cryptographic key pair."
  },
  {
    "id": 143,
    "title": "What is an SSH key?",
    "category": "Git Security",
    "difficulty": "Intermediate",
    "explanation": "An SSH key is a pair of cryptographic keys (one public, one private) used to securely authenticate your computer with a remote server (like GitHub) without needing a password. The private key stays secret on your machine, while the public key is uploaded to GitHub.",
    "summary": "A public/private key pair used for secure, passwordless authentication."
  },
  {
    "id": 144,
    "title": "How do you generate an SSH key using Git Bash?",
    "category": "Git Security",
    "difficulty": "Intermediate",
    "explanation": "Open Git Bash and run the `ssh-keygen` command, specifying the modern `ed25519` algorithm.",
    "code": "ssh-keygen -t ed25519 -C \"your_email@example.com\"",
    "summary": "Use the `ssh-keygen` command."
  },
  {
    "id": 145,
    "title": "What is a Personal Access Token (PAT)?",
    "category": "Git Security",
    "difficulty": "Beginner",
    "explanation": "Since GitHub deprecated basic password authentication, a PAT is a secure, scoped, and revocable string (like a password) generated from your GitHub account. You use it in place of your password when authenticating via HTTPS.",
    "summary": "A secure, scoped token used instead of a password for HTTPS authentication."
  },
  {
    "id": 146,
    "title": "Why should passwords never be committed to Git?",
    "category": "Git Security",
    "difficulty": "Beginner",
    "priority": "High",
    "explanation": "Git history is permanent and distributed. If you commit a password and push it to GitHub, everyone who clones the repo has that password. Even if you delete it in a future commit, it remains forever in the history of the previous commit.",
    "summary": "Because Git history is permanent; anyone can view the history of the file and steal the password."
  },
  {
    "id": 147,
    "title": "What should you do if an API key is accidentally committed?",
    "category": "Real-World Scenarios",
    "difficulty": "Senior",
    "priority": "High",
    "explanation": "### Scenario: You accidentally committed an AWS key to GitHub.\n1. **Immediately revoke/rotate the credential** in AWS. Assume it has already been compromised.\n2. Remove the secret from your working code and add the file to `.gitignore`.\n3. Rewrite the Git history using tools like `git filter-repo` or BFG Repo-Cleaner to permanently purge it from the repository's database.\n4. Force push the cleaned history.\n5. Audit your logs to ensure the key wasn't maliciously used.\n\n*Interview Tip: Simply deleting the key and making a new commit is the WRONG answer, as the key remains in the history.*",
    "summary": "Revoke the key immediately, remove it from code, and purge the Git history using `git filter-repo`."
  },
  {
    "id": 148,
    "title": "How do you remove sensitive data from Git history?",
    "category": "Git Security",
    "difficulty": "Advanced",
    "explanation": "You must rewrite history. The modern, recommended way is using `git filter-repo`. You provide the string or file you want to purge, and it rewrites every commit to exclude it. You then `git push --force` to overwrite the remote history.",
    "summary": "Use a tool like `git filter-repo` to rewrite the repository's history."
  },
  {
    "id": 149,
    "title": "What are Git hooks?",
    "category": "Git Security",
    "difficulty": "Intermediate",
    "priority": "High",
    "explanation": "Git hooks are custom scripts that Git executes automatically before or after events such as commit, push, and receive. \n- **Client-side hooks:** Run on the developer's machine (e.g., `pre-commit` to lint code or scan for secrets before a commit is created).\n- **Server-side hooks:** Run on the remote server (e.g., `pre-receive` to reject a push if it doesn't meet standards).",
    "example": "```text\nDeveloper\n    ↓\ngit commit\n    ↓\npre-commit hook\n    ↓\nLint / Format / Secret Check\n    ↓\nCommit\n```",
    "summary": "Scripts that run automatically in response to Git events, often used to enforce code quality."
  },
  {
    "id": 150,
    "title": "What Git branching strategy would you use for a production project?",
    "category": "Real-World Scenarios",
    "difficulty": "Senior",
    "priority": "High",
    "explanation": "### 1. GitHub Flow (Simple & CI/CD Focused)\nBest for continuous deployment (SaaS). You have a single `main` branch. Developers create feature branches, open PRs, and merge directly to `main`, which deploys immediately.\n\n### 2. GitFlow (Strict Release Cycles)\nBest for versioned software (like mobile apps). Uses `main` for production, `develop` for daily work, and specific branches for `feature/`, `release/`, and `hotfix/`.\n\n### 3. Trunk-Based Development (Agile & Fast)\nBest for mature CI/CD teams. Developers push directly to `main` (or very short-lived branches) multiple times a day. Requires heavy automated testing and feature flags.",
    "summary": "GitHub Flow for SaaS, GitFlow for versioned software, or Trunk-Based Development for rapid CI/CD."
  }
];

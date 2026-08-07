export const gitPart1 = [
    // --- PART 1: GIT FUNDAMENTALS (1-25) ---
    {
        id: 1,
        title: "What is Git?",
        category: "Git Fundamentals",
        difficulty: "Beginner",
        priority: "High",
        explanation: "Git is a free, open-source Distributed Version Control System (DVCS) designed to handle everything from small to very large projects with speed and efficiency. It tracks changes in source code during software development and enables multiple developers to work together non-linearly.",
        summary: "A distributed version control system for tracking changes in source code."
    },
    {
        id: 2,
        title: "Why is Git called a distributed version control system?",
        category: "Git Fundamentals",
        difficulty: "Beginner",
        priority: "High",
        explanation: "Unlike centralized systems where only the server has the full history, in Git, every developer's local computer contains a complete, self-contained copy of the entire repository—including its full history and all branches. You can work entirely offline and commit locally.",
        summary: "Because every user has a full local copy of the entire repository history."
    },
    {
        id: 3,
        title: "What is version control?",
        category: "Git Fundamentals",
        difficulty: "Beginner",
        explanation: "Version control (or source control) is a system that records changes to a file or set of files over time so that you can recall specific versions later. It allows you to revert files to a previous state, compare changes, and see who modified what.",
        summary: "A system that tracks changes to files over time."
    },
    {
        id: 4,
        title: "Centralized vs distributed version control?",
        category: "Git Fundamentals",
        difficulty: "Intermediate",
        explanation: "- **Centralized (CVCS):** Relies on a single central server (e.g., SVN, TFS). If the server goes down, nobody can commit or view history. You only have the latest snapshot locally.\n- **Distributed (DVCS):** Every client fully mirrors the repository (e.g., Git). If the server goes down, you still have the full history locally and can continue working.",
        summary: "Centralized relies on one server; Distributed gives everyone a full offline copy."
    },
    {
        id: 5,
        title: "Git vs SVN?",
        category: "Git Fundamentals",
        difficulty: "Intermediate",
        explanation: "- **Git:** Distributed, stores full history locally, branching is extremely lightweight and fast, works offline.\n- **SVN (Subversion):** Centralized, relies on network connection to the central server for commits/history, branching is heavyweight (copies directories).",
        summary: "Git is modern, fast, distributed, and offline-capable. SVN is older, centralized, and network-dependent."
    },
    {
        id: 6,
        title: "What are the advantages of Git?",
        category: "Git Fundamentals",
        difficulty: "Beginner",
        explanation: "1. **Speed & Performance:** Most operations are local.\n2. **Offline Capability:** You can commit, branch, and view history without internet.\n3. **Branching:** Lightweight and fast to create/merge branches.\n4. **Data Integrity:** Everything is cryptographically hashed (SHA-1).\n5. **Distributed:** No single point of failure.",
        summary: "Fast, distributed, secure, excellent branching, and offline capable."
    },
    {
        id: 7,
        title: "What is a Git repository?",
        category: "Git Fundamentals",
        difficulty: "Beginner",
        priority: "High",
        explanation: "A Git repository (or repo) is a directory where Git has been initialized to track files. It contains a hidden `.git` folder that stores all the version control data, including commits, branches, and tags.",
        summary: "A directory tracked by Git, storing all project files and their history."
    },
    {
        id: 8,
        title: "What is the difference between a local and remote repository?",
        category: "Git Fundamentals",
        difficulty: "Beginner",
        explanation: "- **Local Repository:** The Git repo sitting on your physical computer. You commit your daily work here.\n- **Remote Repository:** The Git repo hosted on a server (like GitHub or Azure Repos). You push your local commits here to share with the team.",
        summary: "Local is on your machine; Remote is on a server."
    },
    {
        id: 9,
        title: "What is the Git working directory?",
        category: "Git Fundamentals",
        difficulty: "Beginner",
        priority: "High",
        explanation: "The Working Directory (or Working Tree) consists of the actual files you currently see and can edit on your computer's file system. It is a single checkout of one version of the project.",
        summary: "The actual files on your computer that you are currently editing."
    },
    {
        id: 10,
        title: "What is the staging area/index?",
        category: "Git Fundamentals",
        difficulty: "Beginner",
        priority: "High",
        explanation: "The Staging Area (or Index) is a middle-ground between your Working Directory and your Repository. It is where you place (stage) files using `git add` to prepare them for the next commit. It allows you to selectively choose which modified files should be included in the commit.",
        summary: "A preparatory area where you select specific modified files to be included in the next commit."
    },
    {
        id: 11,
        title: "What is the Git commit?",
        category: "Git Fundamentals",
        difficulty: "Beginner",
        priority: "High",
        explanation: "A commit is a snapshot of your repository at a specific point in time. It contains the changes you staged, an author name, a timestamp, a commit message, and a unique 40-character SHA-1 hash. It is permanently saved in the local repository's history.",
        summary: "A permanent snapshot of the staged files, representing a specific version of your project."
    },
    {
        id: 12,
        title: "What is the Git HEAD?",
        category: "Git Fundamentals",
        difficulty: "Intermediate",
        priority: "High",
        explanation: "HEAD is a pointer that refers to the current commit you are looking at in your working directory. Usually, it points to the name of the branch you are currently on (which in turn points to the latest commit). If you checkout a specific older commit, you are in a 'detached HEAD' state.",
        summary: "A pointer to the current commit/branch your working directory is based on."
    },
    {
        id: 13,
        title: "What is a branch?",
        category: "Git Fundamentals",
        difficulty: "Beginner",
        priority: "High",
        explanation: "A branch is a movable pointer to a specific commit. It represents an independent line of development. You can create a branch to work on a new feature in isolation without affecting the main codebase.",
        summary: "An independent line of development, represented by a pointer to a commit."
    },
    {
        id: 14,
        title: "What is a tag?",
        category: "Git Fundamentals",
        difficulty: "Beginner",
        explanation: "A tag is a static, immovable pointer to a specific commit. Unlike branches which move forward as new commits are added, tags stay fixed. They are primarily used to mark release versions (e.g., `v1.0.0`).",
        summary: "A fixed label marking a specific commit, typically used for releases."
    },
    {
        id: 15,
        title: "What is a Git object?",
        category: "Git Fundamentals",
        difficulty: "Advanced",
        explanation: "Git is fundamentally a key-value data store. Data is stored as 'objects' inside the `.git/objects` directory, keyed by their SHA-1 hash. Every file, directory structure, commit, and tag is a Git object.",
        summary: "The fundamental data structures Git uses to store repository data."
    },
    {
        id: 16,
        title: "What are blobs, trees, commits, and tags in Git?",
        category: "Git Fundamentals",
        difficulty: "Advanced",
        explanation: "These are the 4 types of Git objects:\n1. **Blob:** Stores file content (but not the file name).\n2. **Tree:** Stores directory structure (maps file names to blobs/other trees).\n3. **Commit:** Stores metadata (author, message) and points to the top-level Tree.\n4. **Tag:** An annotated tag pointing to a commit.",
        summary: "Blobs = file contents, Trees = directories, Commits = snapshots, Tags = fixed labels."
    },
    {
        id: 17,
        title: "What is .git?",
        category: "Git Fundamentals",
        difficulty: "Beginner",
        explanation: "The `.git` directory is the hidden folder created when you run `git init`. It contains the entire repository database, including configuration, hooks, branches, and all the objects (history). If you delete this folder, you lose all Git history, but your working files remain.",
        summary: "The hidden database directory that stores all Git history and configuration."
    },
    {
        id: 18,
        title: "What is .gitignore?",
        category: "Git Fundamentals",
        difficulty: "Beginner",
        priority: "High",
        explanation: "A text file named `.gitignore` tells Git which files or directories to intentionally untrack and ignore (e.g., build artifacts like `bin/`, `obj/`, `node_modules/`, or log files).",
        summary: "A file specifying patterns of files that Git should ignore and never commit."
    },
    {
        id: 19,
        title: "Why should sensitive files be included in .gitignore?",
        category: "Git Fundamentals",
        difficulty: "Intermediate",
        explanation: "If you commit sensitive files (like `.env` containing database passwords or API keys), they become part of the repository's permanent history. When pushed to GitHub, anyone with access (or the whole world, if public) can steal those credentials. Adding them to `.gitignore` prevents them from ever being tracked.",
        tip: "If you accidentally commit a secret, adding it to `.gitignore` later does NOT remove it from history. You must rotate the secret immediately.",
        summary: "To prevent API keys, passwords, and secrets from being permanently written into version control history."
    },
    {
        id: 20,
        title: "What is Git configuration?",
        category: "Git Fundamentals",
        difficulty: "Beginner",
        explanation: "Git configuration allows you to customize how Git operates. This includes setting your author name and email, default text editor, line-ending behaviors, and custom aliases.",
        summary: "Settings that define how Git behaves on your system."
    },
    {
        id: 21,
        title: "What are Git global, local, and system configurations?",
        category: "Git Fundamentals",
        difficulty: "Intermediate",
        explanation: "- **System (`--system`):** Applies to all users on the computer.\n- **Global (`--global`):** Applies to a specific user account on the computer (usually where you set your name/email).\n- **Local (`--local`):** Applies only to the specific repository you are currently in. Local overrides Global, which overrides System.",
        summary: "System = all users, Global = your user profile, Local = specific repository."
    },
    {
        id: 22,
        title: "How do you configure username and email in Git?",
        category: "Git Fundamentals",
        difficulty: "Beginner",
        code: "git config --global user.name \"John Doe\"\ngit config --global user.email \"john@example.com\"",
        summary: "Using the `git config --global` command."
    },
    {
        id: 23,
        title: "What is git init?",
        category: "Git Fundamentals",
        difficulty: "Beginner",
        priority: "High",
        explanation: "The `git init` command creates a new, empty Git repository in your current directory by creating the hidden `.git` folder. It turns a normal folder into a Git-tracked folder.",
        code: "git init",
        summary: "Initializes a new, empty Git repository."
    },
    {
        id: 24,
        title: "What is git clone?",
        category: "Git Fundamentals",
        difficulty: "Beginner",
        priority: "High",
        explanation: "The `git clone` command downloads a complete copy of an existing remote repository (like one on GitHub) to your local machine. It automatically sets up the remote connection (`origin`) so you can push/pull later.",
        code: "git clone https://github.com/user/repo.git",
        summary: "Downloads an existing remote repository to your local computer."
    },
    {
        id: 25,
        title: "What is the difference between git init and git clone?",
        category: "Git Fundamentals",
        difficulty: "Intermediate",
        explanation: "- **git init:** Used when you are starting a brand new project locally from scratch.\n- **git clone:** Used when the project already exists on a server (GitHub) and you want to download it to your machine.",
        summary: "Init creates a new repo from scratch; Clone copies an existing repo from a server."
    },

    // --- PART 2: ESSENTIAL GIT COMMANDS (26-50) ---
    {
        id: 26,
        title: "What does git status do?",
        category: "Essential Git Commands",
        difficulty: "Beginner",
        priority: "High",
        explanation: "It shows the current state of your working directory and staging area. It tells you which files are modified, which are staged for the next commit, and which are untracked.",
        summary: "Displays the status of tracked, untracked, and staged files."
    },
    {
        id: 27,
        title: "What does git add do?",
        category: "Essential Git Commands",
        difficulty: "Beginner",
        priority: "High",
        explanation: "The `git add` command moves changes from the Working Directory into the Staging Area, preparing them to be included in the next commit.",
        code: "git add index.html",
        summary: "Stages files for the next commit."
    },
    {
        id: 28,
        title: "What is the difference between git add . and git add -A?",
        category: "Essential Git Commands",
        difficulty: "Intermediate",
        explanation: "- **git add .** : Stages all modified and new files in the current directory and its subdirectories. (In older Git versions, it ignored deleted files, but modern Git treats them nearly identically).\n- **git add -A** (or `--all`): Stages absolutely all changes (new, modified, and deleted) across the entire repository, regardless of what directory you are currently in.",
        summary: "`git add .` stages the current directory; `git add -A` stages the entire repository."
    },
    {
        id: 29,
        title: "What does git commit do?",
        category: "Essential Git Commands",
        difficulty: "Beginner",
        priority: "High",
        explanation: "It takes everything currently in the Staging Area and permanently records it as a snapshot (commit) in the local repository's history.",
        code: "git commit -m \"Fix login bug\"",
        summary: "Records staged changes permanently in the local history."
    },
    {
        id: 30,
        title: "What does git push do?",
        category: "Essential Git Commands",
        difficulty: "Beginner",
        priority: "High",
        explanation: "It uploads your local repository's commits to the remote repository (e.g., GitHub). This is how you share your local work with the rest of your team.",
        code: "git push origin main",
        summary: "Uploads local commits to a remote server."
    },
    {
        id: 31,
        title: "What does git pull do?",
        category: "Essential Git Commands",
        difficulty: "Beginner",
        priority: "High",
        explanation: "It downloads the latest changes from the remote repository and immediately merges them into your current local working branch. Under the hood, `git pull` is essentially `git fetch` followed by `git merge`.",
        code: "git pull origin main",
        summary: "Downloads and immediately merges remote changes into your local branch."
    },
    {
        id: 32,
        title: "What does git fetch do?",
        category: "Essential Git Commands",
        difficulty: "Intermediate",
        priority: "High",
        explanation: "It downloads commits, branches, and tags from the remote repository into your local repository, but it DOES NOT merge them or modify your working files. It just updates your local copy of the remote tracking branches.",
        code: "git fetch origin",
        summary: "Downloads remote changes without merging them into your working files."
    },
    {
        id: 33,
        title: "git fetch vs git pull?",
        category: "Real-World Scenarios", // Using scenario category for emphasis
        difficulty: "Senior",
        priority: "High",
        explanation: "### Fetch\n```text\nRemote Repository\n       ↓\n     fetch\n       ↓\nRemote-tracking branch\n       ↓\nLocal working branch unchanged\n```\n### Pull\n```text\ngit pull\n   │\n   ├── fetch\n   │\n   └── merge/rebase\n```\n**Interview Tip:** Prefer `fetch` when you want to review what other developers have done before integrating it. It's safer because it doesn't force a merge conflict in your working directory immediately.",
        summary: "Fetch only downloads data; Pull downloads and forces an immediate merge."
    },
    {
        id: 34,
        title: "What does git remote do?",
        category: "Essential Git Commands",
        difficulty: "Intermediate",
        explanation: "It lets you manage the connections to remote repositories. You can add, view, rename, or remove URLs for repositories hosted on GitHub or Azure Repos.",
        summary: "Manages connections to remote servers."
    },
    {
        id: 35,
        title: "What does git remote -v show?",
        category: "Essential Git Commands",
        difficulty: "Beginner",
        explanation: "It lists all configured remote repository connections along with their URLs, showing both the `fetch` and `push` addresses.",
        code: "git remote -v\n# origin  https://github.com/user/repo.git (fetch)\n# origin  https://github.com/user/repo.git (push)",
        summary: "Displays the URLs of your remote repositories."
    },
    {
        id: 36,
        title: "What does git log do?",
        category: "Essential Git Commands",
        difficulty: "Beginner",
        priority: "High",
        explanation: "It displays the commit history for the current branch. It shows the commit hash, author, date, and commit message in chronological order.",
        summary: "Displays the repository's commit history."
    },
    {
        id: 37,
        title: "How do you view a compact Git history?",
        category: "Essential Git Commands",
        difficulty: "Intermediate",
        explanation: "You use the `--oneline` flag. It condenses each commit to a single line showing the short hash and the commit message. You can add `--graph` to see an ASCII representation of branches.",
        code: "git log --oneline --graph",
        summary: "Use `git log --oneline`."
    },
    {
        id: 38,
        title: "What does git diff do?",
        category: "Essential Git Commands",
        difficulty: "Intermediate",
        priority: "High",
        explanation: "By default, `git diff` shows the line-by-line differences between your current Working Directory and the Staging Area. It highlights what code you have changed but haven't added yet.",
        summary: "Shows the exact code changes that have not yet been staged."
    },
    {
        id: 39,
        title: "How do you compare two commits?",
        category: "Essential Git Commands",
        difficulty: "Intermediate",
        explanation: "You can pass the hashes of the two commits to `git diff`.",
        code: "git diff <commit-hash-1> <commit-hash-2>",
        summary: "Use `git diff hash1 hash2`."
    },
    {
        id: 40,
        title: "What does git show do?",
        category: "Essential Git Commands",
        difficulty: "Intermediate",
        explanation: "It displays the metadata and the exact code changes (diff) introduced by a specific commit. By default, running just `git show` will display the very last commit (HEAD).",
        code: "git show <commit-hash>",
        summary: "Shows the details and code changes of a specific commit."
    },
    {
        id: 41,
        title: "What does git checkout do?",
        category: "Essential Git Commands",
        difficulty: "Beginner",
        explanation: "Historically, `git checkout` was an overloaded command used to do two very different things: switch between branches, AND restore files in the working directory to a previous state.",
        summary: "An older command used to switch branches or restore files."
    },
    {
        id: 42,
        title: "What does git switch do?",
        category: "Essential Git Commands",
        difficulty: "Beginner",
        explanation: "Introduced in Git 2.23, `git switch` specifically handles switching between branches (taking over that responsibility from `git checkout`). It is safer and clearer.",
        code: "git switch feature-branch\n# Create and switch:\ngit switch -c new-feature",
        summary: "The modern command used exclusively to switch branches."
    },
    {
        id: 43,
        title: "git checkout vs git switch?",
        category: "Essential Git Commands",
        difficulty: "Intermediate",
        explanation: "`git checkout` is the older, multi-purpose command that switches branches AND modifies files. `git switch` is a newer, dedicated command that ONLY switches branches, making it safer and less confusing for beginners.",
        summary: "`switch` is the modern, safer replacement for switching branches."
    },
    {
        id: 44,
        title: "What does git restore do?",
        category: "Essential Git Commands",
        difficulty: "Intermediate",
        explanation: "Introduced in Git 2.23 alongside `switch`, `git restore` is the dedicated command for discarding uncommitted changes in your working directory or un-staging files.",
        code: "git restore file.txt",
        summary: "The modern command to discard uncommitted changes in files."
    },
    {
        id: 45,
        title: "git restore vs git reset?",
        category: "Essential Git Commands",
        difficulty: "Advanced",
        explanation: "`git restore` modifies files in your Working Directory or Staging Area without moving the HEAD pointer. `git reset` moves the HEAD pointer to a different commit (rewriting history) and optionally modifies the working directory.",
        summary: "`restore` undoes file changes; `reset` undoes commits."
    },
    {
        id: 46,
        title: "What does git rm do?",
        category: "Essential Git Commands",
        difficulty: "Intermediate",
        explanation: "It removes a file from the Working Directory and also automatically stages the deletion. If you only want to remove it from Git tracking but keep it on your hard drive, use `--cached`.",
        code: "git rm --cached sensitive.env",
        summary: "Deletes a file and stages the deletion."
    },
    {
        id: 47,
        title: "What does git mv do?",
        category: "Essential Git Commands",
        difficulty: "Intermediate",
        explanation: "It renames or moves a file and automatically stages the change. It is equivalent to physically moving the file, running `git rm` on the old path, and `git add` on the new path.",
        code: "git mv oldname.js newname.js",
        summary: "Renames a file and stages the rename."
    },
    {
        id: 48,
        title: "What does git clean do?",
        category: "Essential Git Commands",
        difficulty: "Advanced",
        explanation: "It removes completely untracked files from your working directory. It is a dangerous command because it permanently deletes files that Git doesn't know about. Always use `-n` (dry run) first.",
        code: "git clean -fd",
        summary: "Permanently deletes untracked files from the working directory."
    },
    {
        id: 49,
        title: "What does git stash do?",
        category: "Essential Git Commands",
        difficulty: "Intermediate",
        priority: "High",
        explanation: "It takes your modified, uncommitted changes and saves them temporarily on a stack, leaving you with a clean working directory. This is useful when you need to switch branches quickly but aren't ready to commit your current work.",
        summary: "Temporarily shelves uncommitted changes so you can work on something else."
    },
    {
        id: 50,
        title: "How do you apply a stashed change?",
        category: "Essential Git Commands",
        difficulty: "Intermediate",
        explanation: "You use `git stash pop` to apply the most recent stash to your working directory and immediately remove it from the stash stack. Alternatively, `git stash apply` applies it but keeps it in the stack.",
        code: "git stash pop",
        summary: "Use `git stash pop`."
    }
];

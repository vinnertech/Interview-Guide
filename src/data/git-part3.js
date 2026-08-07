export const gitPart3 = [
    // --- PART 5: GITHUB (96-115) ---
    {
        id: 96,
        title: "What is GitHub?",
        category: "GitHub",
        difficulty: "Beginner",
        priority: "High",
        explanation: "GitHub is a web-based hosting service for Git repositories. It provides a graphical interface, collaboration features like Pull Requests and Issues, and automation tools like GitHub Actions, making it the largest hub for open-source and private development.",
        summary: "A cloud platform that hosts Git repositories and provides collaboration and CI/CD tools."
    },
    {
        id: 97,
        title: "Git vs GitHub?",
        category: "GitHub",
        difficulty: "Beginner",
        priority: "High",
        explanation: "- **Git:** The underlying command-line version control software installed on your local computer.\n- **GitHub:** A cloud-based website and service that hosts Git repositories. You use Git to push code to GitHub.",
        summary: "Git is the tool; GitHub is the hosting service."
    },
    {
        id: 98,
        title: "What is a GitHub repository?",
        category: "GitHub",
        difficulty: "Beginner",
        explanation: "A cloud-hosted version of a Git repository. It contains all the project files, commit history, branches, issues, pull requests, and project settings.",
        summary: "A project hosted on GitHub containing code, history, and collaboration data."
    },
    {
        id: 99,
        title: "What is a GitHub Organization?",
        category: "GitHub",
        difficulty: "Intermediate",
        explanation: "A shared account where businesses or open-source projects can collaborate across many repositories at once. It provides advanced permissions, billing, and team management compared to a personal account.",
        summary: "A shared workspace for companies to manage multiple repositories and teams."
    },
    {
        id: 100,
        title: "What is a GitHub fork?",
        category: "GitHub",
        difficulty: "Intermediate",
        priority: "High",
        explanation: "A fork is a personal, server-side copy of someone else's repository. Forking allows you to freely experiment with changes without affecting the original project. It is the foundation of open-source contribution.",
        summary: "Creating a personal copy of another user's repository on your GitHub account."
    },
    {
        id: 101,
        title: "Fork vs clone?",
        category: "GitHub",
        difficulty: "Intermediate",
        explanation: "- **Fork:** A server-side action on GitHub that copies a repo from Account A to Account B.\n- **Clone:** A client-side Git command that downloads a repo from GitHub to your local computer's hard drive.",
        summary: "Fork copies a repo on the server; Clone downloads a repo to your computer."
    },
    {
        id: 102,
        title: "What is a GitHub Pull Request?",
        category: "GitHub",
        difficulty: "Beginner",
        priority: "High",
        explanation: "A Pull Request (PR) is a formal request asking the owners of a repository to review and merge your code changes (usually from a feature branch) into the main branch. It provides a UI for code review, discussion, and automated checks.",
        summary: "A formal request to review and merge code changes into the main branch."
    },
    {
        id: 103,
        title: "What is a Pull Request workflow?",
        category: "Real-World Scenarios",
        difficulty: "Senior",
        priority: "High",
        explanation: "### PR Workflow\n```text\nmain\n │\n ├── feature/login\n │\n ▼\nDeveloper\n │\n ▼\nCommit & Push\n │\n ▼\nCreate Pull Request\n │\n ├── CI Build\n ├── Unit Tests\n ├── Security Scan\n └── Code Review\n │\n ▼\nApproval & Merge\n```\n**Explanation:** A developer creates a branch, pushes code, and opens a PR. Automated CI pipelines run tests. Senior developers review the code. Once approved and tests pass, it is merged into `main`.",
        summary: "Create branch -> Push -> Open PR -> CI Checks -> Code Review -> Merge."
    },
    {
        id: 104,
        title: "What is a draft Pull Request?",
        category: "GitHub",
        difficulty: "Intermediate",
        explanation: "A Draft PR is a Pull Request marked as \"work in progress\". It indicates that the code is not yet ready for formal review or merging, preventing accidental merges while still allowing others to see your progress.",
        summary: "A PR marked as work-in-progress, which cannot be merged until marked ready."
    },
    {
        id: 105,
        title: "What is a code review?",
        category: "GitHub",
        difficulty: "Beginner",
        explanation: "The process where other developers read your submitted code in a Pull Request, leave comments, suggest improvements, and ultimately approve or reject the changes before they are merged.",
        summary: "Peers reviewing your code for bugs, quality, and standards before merging."
    },
    {
        id: 106,
        title: "What are GitHub Issues?",
        category: "GitHub",
        difficulty: "Beginner",
        explanation: "A built-in tracking system for tasks, enhancements, and bugs. Developers and users can open issues to discuss problems or plan new features.",
        summary: "A built-in ticketing system for tracking bugs and tasks."
    },
    {
        id: 107,
        title: "What are GitHub Projects?",
        category: "GitHub",
        difficulty: "Intermediate",
        explanation: "A project management tool built into GitHub (similar to Jira or Trello). It allows you to organize Issues and Pull Requests into Kanban boards, tables, and timelines.",
        summary: "A Kanban-style project management board for organizing work."
    },
    {
        id: 108,
        title: "What are GitHub Labels?",
        category: "GitHub",
        difficulty: "Beginner",
        explanation: "Color-coded tags (e.g., `bug`, `enhancement`, `help wanted`) applied to Issues and Pull Requests to categorize and easily filter them.",
        summary: "Color-coded tags used to categorize Issues and PRs."
    },
    {
        id: 109,
        title: "What are GitHub Milestones?",
        category: "GitHub",
        difficulty: "Intermediate",
        explanation: "Milestones group related Issues and Pull Requests together with a specific due date. They are typically used to track progress toward a specific release version (e.g., `v1.0.0 Release`).",
        summary: "Groups of issues tracking progress toward a specific goal or release date."
    },
    {
        id: 110,
        title: "What is GitHub Actions?",
        category: "GitHub",
        difficulty: "Intermediate",
        priority: "High",
        explanation: "GitHub's native Continuous Integration and Continuous Deployment (CI/CD) platform. It allows you to automate workflows directly in your repository (e.g., automatically running tests when a PR is opened).",
        summary: "GitHub's native CI/CD and automation platform."
    },
    {
        id: 111,
        title: "What is a GitHub Actions workflow?",
        category: "GitHub",
        difficulty: "Advanced",
        explanation: "### Conceptual Workflow\n```text\nDeveloper Push\n      ↓\nGitHub Repository\n      ↓\nGitHub Actions\n      ↓\nBuild\n      ↓\nTest\n      ↓\nDeploy\n```\nA workflow is a configurable automated process made up of one or more jobs. Workflows are defined by a YAML file in the `.github/workflows` directory.",
        summary: "An automated process defined in YAML that runs jobs like building and testing code."
    },
    {
        id: 112,
        title: "What is a GitHub Actions runner?",
        category: "GitHub",
        difficulty: "Advanced",
        explanation: "A runner is the virtual machine (Linux, Windows, or macOS) that actually executes the steps defined in your GitHub Actions workflow. You can use GitHub-hosted runners or host your own.",
        summary: "The server/VM that executes your automated workflow jobs."
    },
    {
        id: 113,
        title: "What is a GitHub Actions secret?",
        category: "GitHub",
        difficulty: "Intermediate",
        explanation: "Encrypted environment variables (like API keys or cloud deployment passwords) stored safely in GitHub settings. They can be injected into GitHub Actions workflows without exposing them in the source code.",
        summary: "Encrypted variables used to safely pass credentials to CI/CD pipelines."
    },
    {
        id: 114,
        title: "How do you protect the main branch?",
        category: "GitHub",
        difficulty: "Intermediate",
        explanation: "You navigate to Repository Settings > Branches, and add a Branch Protection Rule for `main`. This prevents anyone from pushing directly to `main` and enforces the use of Pull Requests.",
        summary: "By enabling Branch Protection Rules in the repository settings."
    },
    {
        id: 115,
        title: "What are branch protection rules?",
        category: "GitHub",
        difficulty: "Intermediate",
        priority: "High",
        explanation: "Rules enforced by the server to prevent bad code from entering a branch. Common rules include:\n- Require Pull Request reviews before merging.\n- Require status checks (CI builds/tests) to pass.\n- Prevent force pushes (`git push -f`).\n- Prevent branch deletion.",
        summary: "Server-side rules that enforce code quality and security standards before code can be merged."
    },

    // --- PART 6: AZURE REPOS / AZURE GIT (116-130) ---
    {
        id: 116,
        title: "What is Azure Repos?",
        category: "Azure Repos",
        difficulty: "Beginner",
        explanation: "Azure Repos is Microsoft's set of version control tools provided as part of Azure DevOps. It supports both Git repositories and Team Foundation Version Control (TFVC).",
        summary: "Microsoft's version control hosting service inside Azure DevOps."
    },
    {
        id: 117,
        title: "What is Azure Repos Git?",
        category: "Azure Repos",
        difficulty: "Beginner",
        explanation: "It is simply standard Git, hosted by Azure DevOps. It uses the exact same Git commands (`clone`, `commit`, `push`) as any other Git provider. It is entirely standard and distributed.",
        summary: "Standard Git repositories hosted in Azure DevOps."
    },
    {
        id: 118,
        title: "Azure Repos vs GitHub?",
        category: "Azure Repos",
        difficulty: "Senior",
        explanation: "- **Azure Repos:** Deeply integrated with Azure Boards (work tracking) and Azure Pipelines. Heavily focused on enterprise governance, strict branch policies, and Active Directory integration.\n- **GitHub:** The leader in open-source. Has Actions, Advanced Security, and a massive community. Many enterprises are slowly migrating from Azure Repos to GitHub Enterprise.",
        summary: "Azure Repos is highly integrated for enterprise Microsoft shops; GitHub is the industry standard for open-source and modern CI/CD."
    },
    {
        id: 119,
        title: "What is an Azure DevOps Organization?",
        category: "Azure Repos",
        difficulty: "Intermediate",
        explanation: "The top-level container in Azure DevOps representing a company or a large division. It contains one or more Projects and handles billing and high-level user access (Azure AD).",
        summary: "The top-level account/container for your company in Azure DevOps."
    },
    {
        id: 120,
        title: "What is an Azure DevOps Project?",
        category: "Azure Repos",
        difficulty: "Intermediate",
        explanation: "A container within an Organization that groups together a specific software application's Repos, Boards (Agile tracking), Pipelines (CI/CD), and Artifacts.",
        summary: "A workspace grouping related repositories, pipelines, and tasks."
    },
    {
        id: 121,
        title: "What is an Azure Repository?",
        category: "Azure Repos",
        difficulty: "Beginner",
        explanation: "A specific Git repository living inside an Azure DevOps Project. A single Project can contain dozens of Repositories.",
        summary: "A Git repository hosted in an Azure DevOps Project."
    },
    {
        id: 122,
        title: "What is a Pull Request in Azure Repos?",
        category: "Azure Repos",
        difficulty: "Beginner",
        explanation: "Exactly the same concept as a GitHub PR: a request to review code and merge a feature branch into the main branch. It features an excellent side-by-side diff viewer and comment system.",
        summary: "Azure's interface for reviewing and merging code."
    },
    {
        id: 123,
        title: "GitHub Pull Request vs Azure Repos Pull Request?",
        category: "Azure Repos",
        difficulty: "Intermediate",
        explanation: "Conceptually identical. Azure Repos PRs traditionally had slightly stricter enforcement of branch policies (like tying PRs directly to Work Items in Azure Boards), but GitHub has largely caught up with these enterprise features.",
        summary: "They are functionally identical, though Azure PRs deeply integrate with Azure Boards."
    },
    {
        id: 124,
        title: "How do you create a branch in Azure Repos?",
        category: "Azure Repos",
        difficulty: "Beginner",
        explanation: "You usually create it locally using `git switch -c new-branch` and push it, or you can create it directly in the Azure DevOps web UI under the 'Branches' tab.",
        summary: "Locally via Git, or via the Azure DevOps web interface."
    },
    {
        id: 125,
        title: "How do you clone an Azure Git repository?",
        category: "Azure Repos",
        difficulty: "Beginner",
        explanation: "Navigate to the Repo in Azure DevOps, click the 'Clone' button, copy the HTTPS or SSH URL, and run `git clone <URL>` in your terminal.",
        summary: "Use `git clone` with the URL provided in the Azure Repos UI."
    },
    {
        id: 126,
        title: "How do you create a Pull Request in Azure Repos?",
        category: "Azure Repos",
        difficulty: "Beginner",
        explanation: "Push your branch to Azure Repos. Navigate to the 'Pull Requests' tab in the web UI, click 'New Pull Request', select your source branch and target branch, and provide a title.",
        summary: "Push your branch, then use the 'New Pull Request' button in the web UI."
    },
    {
        id: 127,
        title: "What are branch policies in Azure Repos?",
        category: "Azure Repos",
        difficulty: "Intermediate",
        priority: "High",
        explanation: "Branch policies are strict rules applied to important branches (like `main`). They enforce code quality by requiring PRs (disallowing direct pushes), requiring a minimum number of reviewers, enforcing linked Work Items, and requiring successful CI builds.",
        summary: "Rules that protect branches by enforcing code reviews, linked tasks, and passing builds."
    },
    {
        id: 128,
        title: "How do you require reviewers before merging?",
        category: "Azure Repos",
        difficulty: "Intermediate",
        explanation: "In Azure Repos, go to Branch Policies for the `main` branch, and enable 'Require a minimum number of reviewers'. Set the count (e.g., 2). The PR cannot be merged until 2 people approve it.",
        summary: "Configure 'Require a minimum number of reviewers' in Branch Policies."
    },
    {
        id: 129,
        title: "How do you enforce successful builds before merging?",
        category: "Azure Repos",
        difficulty: "Intermediate",
        priority: "High",
        explanation: "In Branch Policies, enable 'Build Validation'. You select an Azure Pipeline that compiles the code and runs tests. If the pipeline fails, the PR's Merge button is disabled.",
        summary: "Add a 'Build Validation' policy pointing to your CI pipeline."
    },
    {
        id: 130,
        title: "How do you integrate Azure Repos with Azure Pipelines?",
        category: "Azure Repos",
        difficulty: "Advanced",
        explanation: "You place an `azure-pipelines.yml` file in your repository. Azure Pipelines reads this file. By configuring a CI trigger (`trigger: - main`), the pipeline automatically runs whenever code is pushed or a PR is created.",
        summary: "By adding an `azure-pipelines.yml` file to the repository."
    },

    // --- PART 7: GIT BASH (131-140) ---
    {
        id: 131,
        title: "What is Git Bash?",
        category: "Git Bash",
        difficulty: "Beginner",
        priority: "High",
        explanation: "Git Bash is an application for Microsoft Windows environments which provides an emulation layer for a Git command-line experience. It brings standard Unix/Linux shell commands (like `ls`, `cd`, `cat`) to Windows.",
        summary: "A terminal for Windows that emulates a Unix/Linux command-line environment."
    },
    {
        id: 132,
        title: "Git Bash vs Windows Command Prompt?",
        category: "Git Bash",
        difficulty: "Intermediate",
        explanation: "Command Prompt (`cmd.exe`) uses older Windows DOS commands (like `dir`). Git Bash uses powerful Unix/Linux commands (like `ls`) and provides a much better environment for running Git and shell scripts.",
        summary: "Git Bash uses Unix commands; Command Prompt uses Windows DOS commands."
    },
    {
        id: 133,
        title: "Git Bash vs PowerShell?",
        category: "Git Bash",
        difficulty: "Intermediate",
        explanation: "PowerShell is Microsoft's modern, object-oriented shell and scripting language. It is incredibly powerful for Windows administration. However, many developers prefer Git Bash because it standardizes the terminal experience across Windows, Mac, and Linux.",
        summary: "PowerShell is for advanced Windows scripting; Git Bash provides a cross-platform Unix experience."
    },
    {
        id: 134,
        title: "How do you navigate directories using Git Bash?",
        category: "Git Bash",
        difficulty: "Beginner",
        explanation: "Use the `cd` (change directory) command.",
        code: "cd Documents/Project\ncd ..   # Move up one folder",
        summary: "Use the `cd` command."
    },
    {
        id: 135,
        title: "How do you create a directory using Git Bash?",
        category: "Git Bash",
        difficulty: "Beginner",
        explanation: "Use the `mkdir` (make directory) command.",
        code: "mkdir new-folder",
        summary: "Use `mkdir <folder-name>`."
    },
    {
        id: 136,
        title: "How do you create a file using Git Bash?",
        category: "Git Bash",
        difficulty: "Beginner",
        explanation: "Use the `touch` command.",
        code: "touch index.html",
        summary: "Use `touch <file-name>`."
    },
    {
        id: 137,
        title: "How do you delete a file or directory?",
        category: "Git Bash",
        difficulty: "Beginner",
        explanation: "Use the `rm` command for files. Use `rm -rf` to force delete a directory and all its contents (be very careful!).",
        code: "rm file.txt\nrm -rf folder-name",
        summary: "Use `rm` for files and `rm -rf` for folders."
    },
    {
        id: 138,
        title: "How do you list hidden files?",
        category: "Git Bash",
        difficulty: "Beginner",
        explanation: "Use the `ls -a` or `ls -la` command. The `-a` flag tells the `ls` (list) command to show ALL files, including hidden ones like `.git`.",
        code: "ls -la",
        summary: "Use `ls -a` or `ls -la`."
    },
    {
        id: 139,
        title: "How do you search for files or text using Git Bash?",
        category: "Git Bash",
        difficulty: "Intermediate",
        explanation: "Use `find` to search for files by name. Use `grep` to search for specific text *inside* files.",
        code: "find . -name \"*.js\"\ngrep -r \"password\" .",
        summary: "Use `find` for file names and `grep` for text inside files."
    },
    {
        id: 140,
        title: "How do you configure Git and SSH using Git Bash?",
        category: "Git Bash",
        difficulty: "Intermediate",
        explanation: "You run standard Git config commands, and use the built-in `ssh-keygen` utility to generate SSH keys for secure authentication.",
        code: "git config --global user.name \"Name\"\nssh-keygen -t ed25519 -C \"email@example.com\"",
        summary: "Use `git config` and `ssh-keygen` directly in the terminal."
    }
];

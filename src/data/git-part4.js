export const gitPart4 = [
    // --- PART 8: GIT SECURITY & BEST PRACTICES (141-150) ---
    {
        id: 141,
        title: "How do you authenticate Git with GitHub?",
        category: "Git Security",
        difficulty: "Beginner",
        explanation: "You can authenticate using either HTTPS (which requires a Personal Access Token instead of a password) or SSH (which requires you to generate an SSH key pair and add the public key to your GitHub account).",
        summary: "Via HTTPS with a Personal Access Token (PAT) or via SSH keys."
    },
    {
        id: 142,
        title: "HTTPS vs SSH authentication?",
        category: "Git Security",
        difficulty: "Intermediate",
        explanation: "- **HTTPS:** Uses standard port 443. Good for strict firewalls. Requires caching your PAT so you aren't prompted every time.\n- **SSH:** Uses port 22. Highly secure and doesn't require a token/password after initial setup, but might be blocked by some corporate firewalls.",
        summary: "HTTPS uses a token; SSH uses a cryptographic key pair."
    },
    {
        id: 143,
        title: "What is an SSH key?",
        category: "Git Security",
        difficulty: "Intermediate",
        explanation: "An SSH key is a pair of cryptographic keys (one public, one private) used to securely authenticate your computer with a remote server (like GitHub) without needing a password. The private key stays secret on your machine, while the public key is uploaded to GitHub.",
        summary: "A public/private key pair used for secure, passwordless authentication."
    },
    {
        id: 144,
        title: "How do you generate an SSH key using Git Bash?",
        category: "Git Security",
        difficulty: "Intermediate",
        explanation: "Open Git Bash and run the `ssh-keygen` command, specifying the modern `ed25519` algorithm.",
        code: "ssh-keygen -t ed25519 -C \"your_email@example.com\"",
        summary: "Use the `ssh-keygen` command."
    },
    {
        id: 145,
        title: "What is a Personal Access Token (PAT)?",
        category: "Git Security",
        difficulty: "Beginner",
        explanation: "Since GitHub deprecated basic password authentication, a PAT is a secure, scoped, and revocable string (like a password) generated from your GitHub account. You use it in place of your password when authenticating via HTTPS.",
        summary: "A secure, scoped token used instead of a password for HTTPS authentication."
    },
    {
        id: 146,
        title: "Why should passwords never be committed to Git?",
        category: "Git Security",
        difficulty: "Beginner",
        priority: "High",
        explanation: "Git history is permanent and distributed. If you commit a password and push it to GitHub, everyone who clones the repo has that password. Even if you delete it in a future commit, it remains forever in the history of the previous commit.",
        summary: "Because Git history is permanent; anyone can view the history of the file and steal the password."
    },
    {
        id: 147,
        title: "What should you do if an API key is accidentally committed?",
        category: "Real-World Scenarios",
        difficulty: "Senior",
        priority: "High",
        explanation: "### Scenario: You accidentally committed an AWS key to GitHub.\n1. **Immediately revoke/rotate the credential** in AWS. Assume it has already been compromised.\n2. Remove the secret from your working code and add the file to `.gitignore`.\n3. Rewrite the Git history using tools like `git filter-repo` or BFG Repo-Cleaner to permanently purge it from the repository's database.\n4. Force push the cleaned history.\n5. Audit your logs to ensure the key wasn't maliciously used.\n\n*Interview Tip: Simply deleting the key and making a new commit is the WRONG answer, as the key remains in the history.*",
        summary: "Revoke the key immediately, remove it from code, and purge the Git history using `git filter-repo`."
    },
    {
        id: 148,
        title: "How do you remove sensitive data from Git history?",
        category: "Git Security",
        difficulty: "Advanced",
        explanation: "You must rewrite history. The modern, recommended way is using `git filter-repo`. You provide the string or file you want to purge, and it rewrites every commit to exclude it. You then `git push --force` to overwrite the remote history.",
        summary: "Use a tool like `git filter-repo` to rewrite the repository's history."
    },
    {
        id: 149,
        title: "What are Git hooks?",
        category: "Git Security",
        difficulty: "Intermediate",
        priority: "High",
        explanation: "Git hooks are custom scripts that Git executes automatically before or after events such as commit, push, and receive. \n- **Client-side hooks:** Run on the developer's machine (e.g., `pre-commit` to lint code or scan for secrets before a commit is created).\n- **Server-side hooks:** Run on the remote server (e.g., `pre-receive` to reject a push if it doesn't meet standards).",
        example: "```text\nDeveloper\n    ↓\ngit commit\n    ↓\npre-commit hook\n    ↓\nLint / Format / Secret Check\n    ↓\nCommit\n```",
        summary: "Scripts that run automatically in response to Git events, often used to enforce code quality."
    },
    {
        id: 150,
        title: "What Git branching strategy would you use for a production project?",
        category: "Real-World Scenarios",
        difficulty: "Senior",
        priority: "High",
        explanation: "### 1. GitHub Flow (Simple & CI/CD Focused)\nBest for continuous deployment (SaaS). You have a single `main` branch. Developers create feature branches, open PRs, and merge directly to `main`, which deploys immediately.\n\n### 2. GitFlow (Strict Release Cycles)\nBest for versioned software (like mobile apps). Uses `main` for production, `develop` for daily work, and specific branches for `feature/`, `release/`, and `hotfix/`.\n\n### 3. Trunk-Based Development (Agile & Fast)\nBest for mature CI/CD teams. Developers push directly to `main` (or very short-lived branches) multiple times a day. Requires heavy automated testing and feature flags.",
        summary: "GitHub Flow for SaaS, GitFlow for versioned software, or Trunk-Based Development for rapid CI/CD."
    }
];

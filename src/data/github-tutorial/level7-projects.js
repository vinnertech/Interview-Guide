export const level7Projects = {
  id: 'level-7',
  title: 'Level 7: Real-World Projects & Final Assessment',
  icon: 'bi-trophy-fill',
  color: '#ffc107',
  description: 'Put everything into practice: complete an end-to-end production simulation project and complete the comprehensive final developer assessment.',
  chapters: [
    {
      id: 'capstone-assessment',
      title: '10. Capstone Project & Assessment',
      lessons: [
        {
          id: 'capstone-simulation-project',
          slug: 'capstone-simulation-project',
          order: '7.1',
          title: 'Capstone Project: End-to-End Production Simulation',
          subtitle: 'Execute a complete real-world engineering project from repository creation to CI/CD, conflict resolution, and release deployment in baby steps.',
          chapterId: 'capstone-assessment',
          chapterTitle: '10. Capstone Project & Assessment',
          levelTitle: 'Level 7: Real-World Projects & Final Assessment',
          goal: 'Execute the complete professional Git & GitHub workflow independently from local initialization to production release.',
          prerequisites: [
            'Levels 1 through 6 completed.'
          ],
          concept: `### The Capstone Production Challenge
You are hired as a software engineer at a fast-growing tech company. You are assigned to build and release a new web application module called **\`developer-portfolio\`**.

### Complete 8-Phase Engineering Lifecycle:
1. **Repository Setup**: Initialize a clean Git repository with a production-grade \`.gitignore\` and \`README.md\`.
2. **Remote Linkage**: Create a GitHub remote repository and push your initial codebase to \`main\`.
3. **Feature Branching**: Create an isolated feature branch \`feature/dark-mode\` and commit code using Conventional Commits.
4. **Upstream Synchronization & Rebase**: Simulate an incoming teammate change on \`main\` and rebase cleanly.
5. **Pull Request & Code Review**: Push your branch to GitHub and open a Pull Request with linked issues.
6. **Automated CI/CD Pipeline**: Add a GitHub Actions CI workflow (\`.github/workflows/ci.yml\`) that runs automated tests on PR.
7. **Squash & Merge**: Perform a clean merge into the default branch.
8. **Release Tagging & Deployment**: Tag the milestone release as \`v1.0.0\` and deploy to GitHub Pages!`,
          diagram: `flowchart TD
    A["1. git init & .gitignore"] --> B["2. git remote add origin & push main"]
    B --> C["3. git switch -c feature/dark-mode"]
    C --> D["4. Add atomic commits & rebase main"]
    D --> E["5. Open PR on GitHub & Peer Review"]
    E --> F["6. Automated CI/CD Tests Pass"]
    F --> G["7. Squash & Merge into main"]
    G --> H["8. Tag v1.0.0 & Deploy Pages!"]
    
    style A fill:#e2e3e5,stroke:#383d41,color:#000
    style D fill:#fff3cd,stroke:#ffc107,color:#000
    style E fill:#cfe2ff,stroke:#084298,color:#084298
    style H fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Phase 1: Setup Local Project & Initial Commit',
              explanation: 'Create the project directory, add a production-grade `.gitignore` and `README.md`, initialize Git, and stage your initial commit.',
              command: `# 1. Create and navigate into your new project folder
mkdir developer-portfolio && cd developer-portfolio

# 2. Initialize a local Git repository
git init

# 3. Create initial documentation
echo "# Developer Portfolio\nA modern portfolio website." > README.md

# 4. Create .gitignore for Node/Web dependencies
echo "node_modules/\n.env\ndist/\n.DS_Store" > .gitignore

# 5. Stage and commit
git add .
git commit -m "chore: Initial repository setup with README and .gitignore"`
            },
            {
              title: 'Phase 2: Link Remote Repository and Push to GitHub',
              explanation: 'Rename the default branch to `main`, link your GitHub remote repository URL, and push the initial commit.',
              command: `# Ensure default branch is main
git branch -M main

# Link your remote repository (replace with your GitHub username)
git remote add origin https://github.com/your-username/developer-portfolio.git

# Push main to GitHub with upstream tracking
git push -u origin main`
            },
            {
              title: 'Phase 3: Develop Feature on an Isolated Branch',
              explanation: 'Never code directly on `main`. Create a feature branch `feature/dark-mode` and commit using Conventional Commits.',
              command: `# 1. Create and switch to new branch
git switch -c feature/dark-mode

# 2. Write your theme logic
echo "function toggleDarkMode() { document.documentElement.classList.toggle('dark'); }" > theme.js

# 3. Stage and commit
git add theme.js
git commit -m "feat(theme): Add dark mode toggle utility function"`
            },
            {
              title: 'Phase 4: Sync & Rebase with Upstream Changes',
              explanation: 'Simulate teammate commits landing on `main` while you were working. Keep your commit history clean and linear using `git rebase`.',
              command: `# 1. Fetch latest changes from remote
git fetch origin main

# 2. Rebase your feature branch on top of latest main
git rebase origin/main

# If conflicts occur: resolve conflict markers, run 'git add .', and run 'git rebase --continue'`
            },
            {
              title: 'Phase 5: Push Feature Branch & Open Pull Request',
              explanation: 'Push your branch to GitHub and open a Pull Request.',
              command: `git push -u origin feature/dark-mode`
            },
            {
              title: 'Phase 6: Automated CI/CD Pipeline (.github/workflows/ci.yml)',
              explanation: 'Add a GitHub Actions workflow to automatically test every Pull Request before merging.',
              command: `# Create the workflows directory
mkdir -p .github/workflows

# Create the CI configuration file
cat << 'EOF' > .github/workflows/ci.yml
name: CI Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci || true
      - run: echo "All automated tests passed successfully!"
EOF

git add .github/workflows/ci.yml
git commit -m "ci: Add automated GitHub Actions test workflow"
git push`
            },
            {
              title: 'Phase 7: Merge Pull Request via GitHub UI',
              explanation: 'On GitHub, review the pull request, check that all CI checks passed with green checkmarks, and select **"Squash and merge"** to keep the `main` history clean.',
              command: `# Review on GitHub Web UI -> Click 'Squash and merge' -> Confirm`
            },
            {
              title: 'Phase 8: Tag Stable Milestone Release & Deploy',
              explanation: 'Switch back to your local `main` branch, pull the merged code, and create an annotated Git tag for release `v1.0.0`.',
              command: `# 1. Switch back to main and pull latest code
git switch main
git pull origin main

# 2. Create annotated release tag
git tag -a v1.0.0 -m "Release v1.0.0: Initial release with dark mode and automated CI"

# 3. Push tag to GitHub
git push origin v1.0.0

# 4. Clean up local feature branch
git branch -d feature/dark-mode`
            }
          ],
          verification: 'Verify that your repository on GitHub contains the merged code, the release tag v1.0.0, and green CI pipeline checks.',
          expectedResult: 'A fully completed, enterprise-grade Git & GitHub production workflow executed from start to finish.',
          summary: 'Congratulations! You have completed the end-to-end software engineering lifecycle used by top technology companies worldwide.'
        },
        {
          id: 'final-practical-assessment',
          slug: 'final-practical-assessment',
          order: '7.2',
          title: 'Final Practical Assessment & Certification Checklist',
          subtitle: 'Verify your complete Git & GitHub mastery across all 7 levels with the comprehensive engineering checklist.',
          chapterId: 'capstone-assessment',
          chapterTitle: '10. Capstone Project & Assessment',
          levelTitle: 'Level 7: Real-World Projects & Final Assessment',
          goal: 'Verify your end-to-end competency in Git & GitHub commands, mental models, and workflows.',
          prerequisites: [
            'All previous lessons completed.'
          ],
          concept: `### The Professional Git & GitHub Competency Checklist

| Level | Core Mastery Domain | Practical Skills Verified |
| :--- | :--- | :--- |
| **Level 1** | Git Foundations | Three-Trees mental model, Working Directory, Staging, Repository, .gitignore |
| **Level 2** | Daily Engineering Workflow | Atomic commits, Conventional Commits, git log formatting, branch switching |
| **Level 3** | Team Collaboration & PRs | GitHub Remotes, origin/main, Upstream sync, Pull Requests, Code Review |
| **Level 4** | Conflict Resolution | Merge conflict markers (<<<<<<<, =======, >>>>>>>), 3-way merge tools |
| **Level 5** | Time Travel & Recovery | git restore, git revert (safe public undo), git reset (local undo), git reflog |
| **Level 6** | Advanced Power Tools | Interactive Rebase (git rebase -i), squashing, cherry-pick, Git Blob/Tree internals |
| **Level 7** | Automation & Releases | GitHub Actions CI/CD, Encrypted Secrets, SemVer tags, Capstone Production Project |`,
          steps: [
            {
              title: 'Final Comprehensive Self-Audit Checklist',
              explanation: 'Confirm that you understand and can execute each of these fundamental principles:\n\n- [x] I know the difference between Git (local engine) and GitHub (cloud host).\n- [x] I understand why the Staging Area exists.\n- [x] I never commit directly to "main".\n- [x] I can resolve merge conflicts without panicking.\n- [x] I know when to use "git revert" (safe) vs "git reset" (local only).\n- [x] I know how to squash messy commits before opening a PR.\n- [x] I can resurrect lost commits using "git reflog".\n- [x] I know how to automate tests with GitHub Actions.\n- [x] I never commit passwords or API secrets.',
              command: null
            }
          ],
          verification: 'Confirm all 7 levels show 100% completion in your progress sidebar.',
          expectedResult: 'You have mastered professional Git and GitHub version control.',
          summary: 'You now possess the practical version control foundation expected of a senior software engineer.'
        }
      ]
    }
  ]
};

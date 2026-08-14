export const level3Collaboration = {
  id: 'level-3',
  title: 'Level 3: Collaboration & GitHub Ecosystem',
  icon: 'bi-people-fill',
  color: '#0dcaf0',
  description: 'Master team collaboration on GitHub: creating Pull Requests, conducting code reviews, organizing work with Issues & Projects, .gitignore rules, and forking open-source repositories.',
  chapters: [
    {
      id: 'pull-requests-reviews',
      title: '05. Pull Requests & Code Reviews',
      lessons: [
        {
          id: 'pull-requests-mastery',
          slug: 'pull-requests-mastery',
          order: '3.1',
          title: 'Mastering Pull Requests (PRs)',
          subtitle: 'How to propose changes, write effective PR descriptions, link issues, and compare base vs. compare branches.',
          chapterId: 'pull-requests-reviews',
          chapterTitle: '05. Pull Requests & Code Reviews',
          levelTitle: 'Level 3: Collaboration & GitHub Ecosystem',
          goal: 'Understand the anatomy of a Pull Request, how to open one on GitHub, and how to link issues automatically with keywords.',
          prerequisites: [
            'Level 2 completed (GitHub Flow).'
          ],
          concept: `**What is a Pull Request (PR)?**\nA Pull Request is not a Git command — it is a **GitHub collaboration feature**. It is an official notification to your team members saying:\n\n> *"I finished building feature X on my branch. Please review my code diffs, discuss suggestions, run tests, and if everything looks good, **pull** my changes into the main branch!"*\n\n### The Two Critical Branches of Every PR:\n1. **\'base\' (Target Branch)**: The destination branch you want to merge *into* (e.g. \'main\' or \'development\').\n2. **\'compare\' (Source Branch)**: The feature branch containing your new commits (e.g. \'feature/user-login\').\n\n### Auto-Closing Issues with Special Keywords\nIf your PR solves an open GitHub Issue (e.g. Issue #42), you can write special keywords in your PR description:\n- \'Closes #42\'\n- \'Fixes #42\'\n- \'Resolves #42\'\n\nWhen the PR is merged into \'main\', GitHub will **automatically close Issue #42** for you!`,
          diagram: `flowchart LR
    subgraph FeatureBranch ["compare: feature/login"]
        C1["Commit A"] --> C2["Commit B"]
    end

    subgraph TargetBranch ["base: main"]
        M1["Production Code"]
    end

    FeatureBranch -- "Opens Pull Request" --> PR["GitHub PR #15\n- Diffs\n- Conversations\n- CI/CD Checks"]
    PR -- "Approved & Merged" --> TargetBranch
    
    style FeatureBranch fill:#cff4fc,stroke:#0dcaf0,color:#055160
    style TargetBranch fill:#d1e7dd,stroke:#198754,color:#0f5132
    style PR fill:#fff3cd,stroke:#ffc107,color:#664d03`,
          steps: [
            {
              title: 'Step 1: Push Your Feature Branch to GitHub',
              explanation: 'Upload your local branch to GitHub so GitHub can see the commits.',
              command: 'git push -u origin feature/login-modal',
              output: `Total 4 (delta 1), reused 0 (delta 0)\nTo https://github.com/company/repo.git\n * [new branch]      feature/login-modal -> feature/login-modal`
            },
            {
              title: 'Step 2: Open the Pull Request on GitHub.com',
              explanation: '1. Navigate to your repository on GitHub.com.\n2. Click the yellow banner: **Compare & pull request**.\n3. Verify "base: main" ← "compare: feature/login-modal".\n4. Enter a clear title and description explaining what changed and why.\n5. Click **Create pull request** (or click the arrow to create a **Draft Pull Request** if it is still work-in-progress).',
              command: null
            }
          ],
          verification: 'Check the PR page on GitHub: the "Files changed" tab should show only the exact lines of code you added or modified.',
          expectedResult: 'GitHub shows your open Pull Request with all automated checks pending/passed.',
          commonMistakes: [
            {
              problem: 'Opening a PR with the "base" set to the wrong branch (e.g. merging into "release" instead of "main").',
              why: 'This compares changes against the wrong baseline, showing hundreds of unrelated commits.',
              fix: 'You can change the "base" branch at any time by clicking the "Edit" button next to the PR title on GitHub.'
            }
          ],
          quiz: {
            question: 'What happens when you write "Closes #14" in a GitHub Pull Request description?',
            options: [
              'Git immediately deletes branch #14.',
              'GitHub automatically closes Issue #14 when the Pull Request is merged into the default branch.',
              'GitHub sends an email to 14 developers.',
              'The Pull Request is cancelled.'
            ],
            correctIndex: 1,
            explanation: 'GitHub recognizes closing keywords like "Closes #14", "Fixes #14", and automatically transitions the linked issue to Closed upon merge.'
          },
          summary: 'A Pull Request is a code review discussion on GitHub comparing a "compare" feature branch against a "base" target branch.'
        },
        {
          id: 'code-reviews-mastery',
          slug: 'code-reviews-mastery',
          order: '3.2',
          title: 'Conducting Professional Code Reviews',
          subtitle: 'How to leave constructive feedback, suggest direct code edits in comments, and approve or request changes.',
          chapterId: 'pull-requests-reviews',
          chapterTitle: '05. Pull Requests & Code Reviews',
          levelTitle: 'Level 3: Collaboration & GitHub Ecosystem',
          goal: 'Learn how senior developers review code, leave multi-line feedback, use GitHub suggestion blocks, and make review decisions.',
          prerequisites: [
            'Lesson 3.1 completed.'
          ],
          concept: `**Why do Code Reviews matter?**\nCode review is not about catching typos or judging teammates — it is about **shared knowledge, code quality, security, and mentorship**.\n\n### The Three Review Decisions on GitHub:\n1. **Comment**: Leave general feedback or ask clarifying questions without approving or blocking the PR.\n2. **Approve**: Submit feedback and approve merging the changes into \'main\'.\n3. **Request changes**: Submit feedback that **must be addressed** before the PR can be merged.\n\n### GitHub Suggestion Blocks\nRather than typing *"Change line 15 from var to const"*, GitHub allows reviewers to insert a **Suggestion Block**. The author can apply the suggested fix directly with a single click button right inside GitHub!`,
          diagram: `flowchart TD
    Reviewer["Reviewer inspects 'Files changed' tab"] --> Sugg["Adds comments & inline suggestions"]
    Sugg --> Decision{"Review Decision"}
    Decision -- "Approve" --> Ready["PR ready to merge"]
    Decision -- "Request Changes" --> Fixes["Author pushes new commits to branch"]
    Fixes --> Reviewer
    
    style Reviewer fill:#cfe2ff,stroke:#084298
    style Ready fill:#d1e7dd,stroke:#198754
    style Fixes fill:#f8d7da,stroke:#dc3545`,
          steps: [
            {
              title: 'How to Use Suggestion Markdown Blocks on GitHub',
              explanation: 'When commenting on a line of code in the "Files changed" tab, click the **Insert a suggestion** icon (or write triple backticks with "suggestion").\n\n"""markdown\n"""suggestion\nconst MAX_RETRIES = 5;\n"""\n"""\n\nThe author can click **Commit suggestion** to apply it instantly!',
              command: null
            }
          ],
          verification: 'You know how to start a review, leave comments, and make review approvals.',
          expectedResult: 'You can collaborate effectively as a peer reviewer on GitHub.',
          commonMistakes: [
            {
              problem: 'Leaving single comments instead of using "Start a review".',
              why: 'Leaving individual comments sends a barrage of separate notification emails for every single line touched.',
              fix: 'Always click **Start a review**, add all your comments, and click **Finish your review** to send one single consolidated notification.'
            }
          ],
          quiz: {
            question: 'What is the benefit of using "Start a review" instead of submitting single comments on a GitHub PR?',
            options: [
              'It hides the reviewer\'s identity.',
              'It batches all your comments into a single notification and lets you submit an official Approve/Request Changes decision.',
              'It bypasses automated testing.',
              'It automatically merges the code.'
            ],
            correctIndex: 1,
            explanation: 'Batching comments via "Start a review" provides a cohesive review experience and avoids spamming authors with dozens of single-line emails.'
          },
          summary: 'Use the "Files changed" tab to inspect diffs, use suggestion blocks for quick fixes, and submit a single batched review with an Approve or Request Changes decision.'
        }
      ]
    },
    {
      id: 'repo-organization',
      title: '06. Repo Organization & Open Source',
      lessons: [
        {
          id: 'essential-repo-files',
          slug: 'essential-repo-files',
          order: '3.3',
          title: 'Essential Repo Files: README, .gitignore & LICENSE',
          subtitle: 'The files every professional repository must have and how to master .gitignore pattern syntax.',
          chapterId: 'repo-organization',
          chapterTitle: '06. Repo Organization & Open Source',
          levelTitle: 'Level 3: Collaboration & GitHub Ecosystem',
          goal: 'Master the syntax of ".gitignore" and understand the role of "README.md", "LICENSE", and "CONTRIBUTING.md".',
          prerequisites: [
            'Completed Level 1 & 2.'
          ],
          concept: `**1. \'.gitignore\' (The Security & Cleanliness Shield)**\nNever commit compiled binaries, 'node_modules', '.env' secret files, or operating system junk (like '.DS_Store' or 'Thumbs.db') into Git!\n\nA \'.gitignore\' file sits in the root of your repository and tells Git which files or patterns to completely ignore.\n\n### Common \'.gitignore\' Pattern Syntax:\n- \'node_modules/\': Ignores the entire \'node_modules\' folder anywhere in the project.\n- \'*.log\': Ignores all files ending with \'.log\' extension (wildcard \'*\').\n- \'.env\': Ignores the secret environment variables file.\n- \'!important.log\': An exclamation mark \'!\' negates an ignore rule (i.e. tracks this specific file even if \'*.log\' is ignored).\n- \'/dist\': Ignores the \'dist\' folder only in the root directory.\n- \'build/**/temp\': Double asterisk \'**\' matches any number of nested directories.\n\n**2. \'README.md\'**: The front page of your project formatted in Markdown.\n**3. \'LICENSE\'**: Tells others what they can and cannot legally do with your open-source code (e.g. MIT, Apache 2.0, GPL).\n**4. \'CONTRIBUTING.md\'**: Guidelines for how outside developers can submit bug reports and PRs.`,
          steps: [
            {
              title: 'Step 1: Create a Production-Ready .gitignore File',
              explanation: 'Create a ".gitignore" file and add rules for dependencies, build outputs, environment files, and system junk.',
              command: `cat << 'EOF' > .gitignore
# Dependencies
node_modules/
vendor/

# Environment secrets (NEVER COMMIT SECRETS!)
.env
.env.local
*.pem
*.key

# Build outputs
dist/
build/
bin/
obj/

# Logs
*.log
npm-debug.log*

# OS Junk
.DS_Store
Thumbs.db
EOF`,
              commandDescription: 'Creates standard .gitignore rules.'
            },
            {
              title: 'Step 2: Check if a Specific File is Ignored',
              explanation: 'If you are unsure why Git is ignoring (or tracking) a file, use "git check-ignore -v".',
              command: 'git check-ignore -v .env',
              output: `.gitignore:6:.env\t.env`
            }
          ],
          verification: 'Run "git status". Notice that "node_modules" or ".env" files no longer appear in untracked files.',
          expectedResult: 'Git completely ignores all files matching the patterns in .gitignore.',
          commonMistakes: [
            {
              problem: 'Adding a file to ".gitignore" AFTER it was already committed to Git history.',
              why: '".gitignore" ONLY ignores untracked files! If a file is already committed, Git continues tracking it.',
              fix: 'Remove it from Git tracking without deleting it from disk: "git rm --cached <file>" then commit.'
            }
          ],
          quiz: {
            question: 'What happens if you commit your ".env" file containing API passwords, and then add ".env" to ".gitignore" afterwards?',
            options: [
              'Git automatically purges the password from your past commit history.',
              'The file is still stored in past Git commits and history, exposing your secrets unless you actively purge history and rotate the API keys.',
              'Git crashes.',
              'GitHub encrypts the file automatically.'
            ],
            correctIndex: 1,
            explanation: '".gitignore" only stops new files from being tracked. Past commits still retain the file unless rewritten.'
          },
          summary: 'Use ".gitignore" to prevent secret keys, build artifacts, and dependency directories from ever being committed to version control.'
        },
        {
          id: 'forks-and-open-source',
          slug: 'forks-and-open-source',
          order: '3.4',
          title: 'Forks & Open Source Contribution Workflow',
          subtitle: 'How to contribute to any public open-source project on GitHub when you do not have write access.',
          chapterId: 'repo-organization',
          chapterTitle: '06. Repo Organization & Open Source',
          levelTitle: 'Level 3: Collaboration & GitHub Ecosystem',
          goal: 'Understand what a Fork is, configure "upstream" and "origin" remotes, and open an open-source contribution Pull Request.',
          prerequisites: [
            'Completed Lessons 3.1 & 3.3.'
          ],
          concept: `**What is a Fork?**\nA Fork is a **server-side copy of someone else\'s GitHub repository** created inside your own GitHub personal account.\n\nWhen you want to contribute to an open-source project (like React, VS Code, or Python), you do not have direct write access to push branches to their repository. Instead, you:\n1. **Fork** their repository to your account (giving you full write access to your personal copy).\n2. **Clone** your fork to your computer.\n3. Make your changes on a feature branch and push to your fork.\n4. Open a **Cross-Repository Pull Request** from your fork to the original repository!\n\n### The Two Remotes in Open Source:\n- **\'origin\'**: Points to YOUR personal fork (\'https://github.com/YOU/project.git\').\n- **\'upstream\'**: Points to the ORIGINAL central repository (\'https://github.com/ORIGINAL-OWNER/project.git\').`,
          diagram: `flowchart TD
    ORIGINAL[("Original Project (Upstream)\ne.g. facebook/react")] -- "Fork on GitHub" --> FORK[("Your Fork (Origin)\ne.g. your-username/react")]
    FORK -- "git clone" --> LOCAL[("Your Local Computer")]
    LOCAL -- "git push origin" --> FORK
    FORK -- "Open Cross-Repo Pull Request" --> ORIGINAL
    ORIGINAL -- "git fetch upstream (Sync changes)" --> LOCAL
    
    style ORIGINAL fill:#cfe2ff,stroke:#084298
    style FORK fill:#cff4fc,stroke:#0dcaf0
    style LOCAL fill:#d1e7dd,stroke:#198754`,
          steps: [
            {
              title: 'Step 1: Fork the Project on GitHub.com',
              explanation: 'Go to the public repository on GitHub and click the **Fork** button in the top-right corner.',
              command: null
            },
            {
              title: 'Step 2: Clone YOUR Fork to Your Computer',
              explanation: 'Clone your personal fork.',
              command: 'git clone https://github.com/YOUR-USERNAME/open-source-project.git\ncd open-source-project'
            },
            {
              title: 'Step 3: Add the Original Project as "upstream"',
              explanation: 'Configure a remote link to the original project so you can sync future updates made by the core maintainers.',
              command: 'git remote add upstream https://github.com/ORIGINAL-OWNER/open-source-project.git'
            },
            {
              title: 'Step 4: Keep Your Fork Synchronized with Upstream',
              explanation: 'Whenever you want to update your local copy with the latest code from the original project, fetch and merge upstream.',
              command: 'git fetch upstream\ngit switch main\ngit merge upstream/main\ngit push origin main',
              commandDescription: 'Pulls the latest changes from upstream/main and updates your personal GitHub fork.'
            }
          ],
          verification: 'Run "git remote -v" to confirm both "origin" (your fork) and "upstream" (the original repo) are configured.',
          expectedResult: `origin    https://github.com/YOU/project.git (fetch)\norigin    https://github.com/YOU/project.git (push)\nupstream  https://github.com/ORIGINAL/project.git (fetch)\nupstream  https://github.com/ORIGINAL/project.git (push)`,
          quiz: {
            question: 'What is the role of the "upstream" remote in an open-source forking workflow?',
            options: [
              'It deletes your personal fork.',
              'It points to the original, official repository so you can sync the latest changes made by maintainers.',
              'It is a backup on your local USB drive.',
              'It automatically publishes npm packages.'
            ],
            correctIndex: 1,
            explanation: 'The "upstream" remote refers to the original repository from which you created your fork, allowing you to stay in sync with ongoing development.'
          },
          summary: 'In open source: Fork on GitHub -> Clone your fork ("origin") -> Add original repo as "upstream" -> Sync with "git fetch upstream" -> Open cross-repo PR.'
        }
      ]
    }
  ]
};

export const level6Automation = {
  id: 'level-6',
  title: 'Level 6: GitHub Actions, CI/CD & Security',
  icon: 'bi-robot',
  color: '#d63384',
  description: 'Master enterprise automation: writing GitHub Actions YAML workflows, automated CI/CD testing pipelines, managing encrypted repository secrets, Dependabot, branch protection rules, and automated GitHub Pages deployment.',
  chapters: [
    {
      id: 'github-actions-cicd',
      title: '09. GitHub Actions & CI/CD Pipelines',
      lessons: [
        {
          id: 'intro-to-github-actions',
          slug: 'intro-to-github-actions',
          order: '6.1',
          title: 'Introduction to GitHub Actions: Automation at Scale',
          subtitle: 'The anatomy of a GitHub Actions workflow: Events, Runners, Jobs, Steps, and YAML syntax.',
          chapterId: 'github-actions-cicd',
          chapterTitle: '09. GitHub Actions & CI/CD Pipelines',
          levelTitle: 'Level 6: GitHub Actions, CI/CD & Security',
          goal: 'Understand the architecture of GitHub Actions and write your first automated ".github/workflows/ci.yml" pipeline.',
          prerequisites: [
            'Level 1 through Level 3 completed.'
          ],
          concept: `**What is GitHub Actions?**\nGitHub Actions is a built-in continuous integration and continuous delivery (**CI/CD**) platform that allows you to automate your build, test, and deployment pipeline.\n\nYou can trigger automated virtual machines (runners) whenever an event happens on GitHub (e.g. when someone pushes code, opens a Pull Request, or creates a release).\n\n### The Core Anatomy of GitHub Actions:\n1. **Workflow**: An automated process defined in a YAML file located inside \'.github/workflows/\' in your repository root.\n2. **Events (\'on:\')**: The trigger that starts the workflow (e.g. \'push\', \'pull_request\', or a \'schedule\' cron job).\n3. **Jobs (\'jobs:\')**: A series of steps that execute on the **same runner virtual machine** (e.g. \'ubuntu-latest\', \'windows-latest\', or \'macos-latest\'). By default, multiple jobs run in parallel!\n4. **Steps (\'steps:\')**: Individual tasks within a job. A step can either run a shell command (\'run:\') or execute a pre-packaged community action (\'uses:\', like \'actions/checkout@v4\').`,
          diagram: `flowchart TD
    E["Event: Push or Pull Request"] --> W[".github/workflows/ci.yml"]
    W --> J1["Job 1: Lint & Unit Tests (Ubuntu VM)"]
    W --> J2["Job 2: Security Vulnerability Scan"]
    J1 --> S1["Step 1: actions/checkout@v4"]
    S1 --> S2["Step 2: actions/setup-node@v4"]
    S2 --> S3["Step 3: npm ci & npm test"]
    
    style E fill:#ffc107,color:#000
    style W fill:#cfe2ff,stroke:#084298
    style J1 fill:#d1e7dd,stroke:#198754
    style J2 fill:#d1e7dd,stroke:#198754`,
          steps: [
            {
              title: 'Step 1: Create the Workflow Directory',
              explanation: 'GitHub strictly looks for workflows inside the special hidden directory path ".github/workflows/".',
              command: 'mkdir -p .github/workflows\ntouch .github/workflows/ci.yml'
            },
            {
              title: 'Step 2: Write a Production CI Workflow',
              explanation: 'Define an automated test pipeline that runs on every push and pull request to "main".',
              command: `cat << 'EOF' > .github/workflows/ci.yml
name: Continuous Integration

# 1. Trigger Event
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

# 2. Jobs
jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      # Step 1: Check out repo code into the runner VM
      - name: Checkout Source Code
        uses: actions/checkout@v4

      # Step 2: Set up Node.js runtime
      - name: Setup Node.js Environment
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      # Step 3: Install dependencies cleanly
      - name: Install Dependencies
        run: npm ci

      # Step 4: Run automated tests
      - name: Run Test Suite
        run: npm test

      # Step 5: Verify production build
      - name: Build Project
        run: npm run build
EOF`,
              commandDescription: 'Defines a production CI workflow file.'
            },
            {
              title: 'Step 3: Commit and Push to GitHub',
              explanation: 'Commit the workflow file and push to GitHub. GitHub will immediately detect the file and trigger the Actions runner!',
              command: 'git add .github/workflows/ci.yml\ngit commit -m "ci: Add automated test and build workflow"\ngit push origin main'
            }
          ],
          verification: 'Navigate to the **Actions** tab on your GitHub repository. You will see your workflow running in real-time with green checkmarks for every step!',
          expectedResult: 'GitHub Actions executes your test suite and reports green checks on your commits and PRs.',
          commonMistakes: [
            {
              problem: 'Putting the YAML file in ".github/workflow" (singular) instead of ".github/workflows" (plural).',
              why: 'GitHub requires the exact directory name ".github/workflows/".',
              fix: 'Ensure the folder name is spelled "workflows".'
            }
          ],
          quiz: {
            question: 'What is the purpose of "uses: actions/checkout@v4" in a GitHub Actions step?',
            options: [
              'It pays for GitHub Pro subscription.',
              'It clones your repository code onto the runner virtual machine so subsequent steps can access your project files.',
              'It uninstalls Git from the server.',
              'It shuts down the server.'
            ],
            correctIndex: 1,
            explanation: 'The "actions/checkout" action downloads the repository code onto the runner VM so build and test scripts can execute against it.'
          },
          summary: 'GitHub Actions automates CI/CD using YAML workflows stored in ".github/workflows/" that execute jobs on virtual runners upon triggers like "push" and "pull_request".'
        },
        {
          id: 'secrets-and-security-governance',
          slug: 'secrets-and-security-governance',
          order: '6.2',
          title: 'GitHub Secrets, Dependabot & Branch Protection',
          subtitle: 'Securing your codebase with encrypted repository secrets, Dependabot vulnerability alerts, and branch protection rules.',
          chapterId: 'github-actions-cicd',
          chapterTitle: '09. GitHub Actions & CI/CD Pipelines',
          levelTitle: 'Level 6: GitHub Actions, CI/CD & Security',
          goal: 'Master enterprise security: store encrypted API keys in GitHub Secrets, enable automated Dependabot PRs, and configure branch protection on "main".',
          prerequisites: [
            'Lesson 6.1 (GitHub Actions).'
          ],
          concept: `**1. GitHub Encrypted Secrets**\nNever hardcode database passwords, AWS keys, or API tokens into your code or GitHub Actions YAML files! GitHub provides **Encrypted Secrets** (stored in Settings > Secrets and variables > Actions). They are encrypted with Libsodium before being saved and are automatically masked (shown as \'***\') in all workflow console logs.\n\nUsage in YAML:\n\'\'\'yaml\nenv:\n  DATABASE_URL: \${{ secrets.PROD_DB_URL }}\n  AWS_ACCESS_KEY_ID: \${{ secrets.AWS_KEY }}\n\'\'\'\n\n---\n\n**2. Dependabot**\nGitHub\'s built-in security bot continuously scans your \'package.json\' or dependencies for known CVE vulnerabilities. When a vulnerable package is detected, Dependabot **automatically opens a Pull Request** with the security patch ready for you to test and merge!\n\n---\n\n**3. Branch Protection Rules**\nIn enterprise teams, developers are physically blocked from pushing directly to \'main\'. You configure branch protection rules:\n- Require a Pull Request before merging.\n- Require at least 1 or 2 peer code review approvals.\n- Require all CI/CD test checks to pass before merging is allowed.\n- Require linear commit history.`,
          diagram: `flowchart TD
    DEV["Developer attempts direct push to main"] -- "Blocked by Branch Protection Rule" --> X["❌ Push Rejected!"]
    DEV -- "Opens PR" --> PR["Pull Request"]
    PR --> CI["CI/CD Automated Tests (Passed ✅)"]
    PR --> REV["2 Senior Peer Reviews (Approved ✅)"]
    CI & REV --> MERGE["Merged into main safely!"]
    
    style X fill:#f8d7da,stroke:#dc3545,color:#842029
    style MERGE fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'How to Add a Repository Secret on GitHub',
              explanation: '1. On GitHub.com, go to **Settings** > **Secrets and variables** > **Actions**.\n2. Click **New repository secret**.\n3. Name: "DEPLOY_TOKEN", Value: paste your secret token.\n4. Click **Add secret**.\n\nNow you can securely access it in workflows as "${{ secrets.DEPLOY_TOKEN }}".',
              command: null
            },
            {
              title: 'How to Configure Branch Protection for main',
              explanation: '1. Go to **Settings** > **Branches** (or **Rules** > **Rulesets**).\n2. Add a rule for branch pattern: "main".\n3. Check **Require a pull request before merging**.\n4. Check **Require approvals** (1).\n5. Check **Require status checks to pass before merging** (select your CI workflow).',
              command: null
            }
          ],
          warning: {
            title: 'Accidental Secret Leaks',
            message: 'If you ever accidentally commit an API key or password to GitHub, assume it is compromised within seconds by internet scrapers. Immediately rotate/invalidate the key at the provider (AWS, Stripe, etc.)!',
            isDanger: true
          },
          verification: 'Attempt to run "git push origin main" directly. GitHub will reject the push with "remote: error: GH006: Protected branch update failed".',
          expectedResult: 'All code changes are forced through peer review and automated testing.',
          quiz: {
            question: 'How does GitHub Actions protect your secret keys from being leaked in terminal logs?',
            options: [
              'It deletes the logs after 1 minute.',
              'It automatically masks all secret values with asterisks (`***`) in console outputs.',
              'Secrets are only visible to system administrators.',
              'It renames the secrets.'
            ],
            correctIndex: 1,
            explanation: 'GitHub Actions automatically redacts and masks any secret string that appears in workflow logs with "***".'
          },
          summary: 'Use GitHub Encrypted Secrets ("${{ secrets.KEY }}") for private credentials, enable Dependabot for automated CVE patches, and enforce Branch Protection on "main".'
        },
        {
          id: 'releases-tags-github-pages',
          slug: 'releases-tags-github-pages',
          order: '6.3',
          title: 'Releases, Semantic Versioning & GitHub Pages',
          subtitle: 'Create annotated git tags, publish official GitHub Releases with changelogs, and deploy static sites with GitHub Pages.',
          chapterId: 'github-actions-cicd',
          chapterTitle: '09. GitHub Actions & CI/CD Pipelines',
          levelTitle: 'Level 6: GitHub Actions, CI/CD & Security',
          goal: 'Master Semantic Versioning ("v1.0.0"), create annotated Git tags, publish GitHub Releases, and deploy web applications to GitHub Pages.',
          prerequisites: [
            'Level 1 through Level 6 completed.'
          ],
          concept: `**1. Semantic Versioning (SemVer: \'MAJOR.MINOR.PATCH\')**\nProfessional software follows SemVer (e.g. \'v2.4.1\'):\n- **MAJOR (\'2.0.0\')**: Breaking API changes that are incompatible with older versions.\n- **MINOR (\'1.3.0\')**: New backwards-compatible features added.\n- **PATCH (\'1.3.1\')**: Backwards-compatible bugfixes.\n\n---\n\n**2. Git Tags vs GitHub Releases**\n- **Git Tag (\'git tag -a v1.0.0\')**: A permanent, immutable Git pointer pointing to a specific commit hash in history marking a release milestone.\n- **GitHub Release**: A GitHub wrapper around a Git tag that includes downloadable binary assets (e.g. '.zip', '.exe', '.apk'), release notes, and changelogs.\n\n---\n\n**3. GitHub Pages**\nGitHub Pages is a free static web hosting service provided by GitHub directly from your repository (serving HTML, CSS, JavaScript, and client-side React apps) at \'https://username.github.io/repository-name/\'.`,
          diagram: `flowchart LR
    C["git tag -a v1.0.0 -m 'Release v1.0.0'"] --> P["git push origin v1.0.0"]
    P --> R["GitHub Release Published"]
    R --> D["GitHub Pages Automated Deployment (Live on Web!)"]
    
    style C fill:#fff3cd,stroke:#ffc107
    style R fill:#d1e7dd,stroke:#198754
    style D fill:#0dcaf0,stroke:#084298`,
          steps: [
            {
              title: 'Step 1: Create an Annotated Git Tag',
              explanation: 'Create an annotated tag with metadata and message.',
              command: 'git tag -a v1.0.0 -m "Release version 1.0.0: Initial production release"',
              commandDescription: 'Creates an annotated tag v1.0.0.'
            },
            {
              title: 'Step 2: Push the Tag to GitHub',
              explanation: 'By default, "git push" does not push tags. You must explicitly push tags using "--tags" or specifying the tag name.',
              command: 'git push origin v1.0.0',
              output: `* [new tag]         v1.0.0 -> v1.0.0`
            },
            {
              title: 'Step 3: Publish a GitHub Release',
              explanation: '1. On GitHub.com, go to **Releases** > **Draft a new release**.\n2. Select your tag "v1.0.0".\n3. Click **Generate release notes** (GitHub will automatically summarize all merged PRs!).\n4. Click **Publish release**.',
              command: null
            },
            {
              title: 'Step 4: Enable GitHub Pages for Your Web App',
              explanation: 'In **Settings** > **Pages**, set Source to **GitHub Actions** or **Deploy from a branch** (select "gh-pages" or "main / root"). Your website will be live in under 60 seconds!',
              command: null
            }
          ],
          verification: 'Run "git tag -l" to inspect local tags, and visit your live GitHub Pages URL.',
          expectedResult: 'Release published with automated changelog and web application live on GitHub Pages.',
          quiz: {
            question: 'In Semantic Versioning ("v2.1.4"), what does incrementing the MAJOR version (to "v3.0.0") signify?',
            options: [
              'A small CSS bugfix.',
              'Breaking changes that are incompatible with previous versions.',
              'Adding a unit test.',
              'No changes were made.'
            ],
            correctIndex: 1,
            explanation: 'In SemVer, incrementing the MAJOR version signals breaking API changes that require consumers to update their implementation.'
          },
          summary: 'Use "git tag -a v1.0.0" to mark milestones, publish GitHub Releases for changelogs, and deploy static web applications with GitHub Pages.'
        }
      ]
    }
  ]
};

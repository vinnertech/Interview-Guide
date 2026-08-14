export const level1Beginner = {
  id: 'level-1',
  title: 'Level 1: Absolute Beginner',
  icon: 'bi-rocket-takeoff-fill',
  color: '#0d6efd',
  description: 'Start from absolute zero. Understand version control, the difference between Git and GitHub, installation, the three-tree mental model, and making your first commit.',
  chapters: [
    {
      id: 'fundamentals',
      title: '01. Fundamentals & Mental Model',
      lessons: [
        {
          id: 'welcome',
          slug: 'welcome',
          order: '1.1',
          title: 'Welcome to the Guide & Prerequisites',
          subtitle: 'What this course covers, how to navigate it, and what you need before typing your first command.',
          chapterId: 'fundamentals',
          chapterTitle: '01. Fundamentals & Mental Model',
          levelTitle: 'Level 1: Absolute Beginner',
          goal: 'Understand the course roadmap and set up your mindset for learning Git and GitHub professionally without memorizing commands blindly.',
          prerequisites: [
            'A computer running Windows, macOS, or Linux.',
            'A basic familiarity with opening files and folders.',
            'No prior Git, terminal, or programming knowledge required — we start from absolute zero!'
          ],
          concept: `**Welcome to the Complete Git & GitHub Learning Guide!**\n\nSoftware development is fundamentally collaborative. When multiple engineers write code for the same application simultaneously, they need a safe, dependable system to record their changes, experiment with new ideas without breaking production, and merge their work smoothly.\n\nThat system is **Git**, and the global platform that hosts it is **GitHub**.\n\nThroughout this course, you will not simply memorize commands like \'git push\' or \'git commit\'. Instead, you will build a clear mental model of **what happens internally under the hood**. Once you understand how Git stores snapshots and tracks branches, you will never feel lost or panic when facing a merge conflict or broken branch.`,
          diagram: `flowchart LR
    A["Beginner: Mental Model & First Commit"] --> B["Daily Workflow: Branches & Merging"]
    B --> C["Collaboration: Pull Requests & Code Review"]
    C --> D["Intermediate: Conflict Resolution & Stashing"]
    D --> E["Advanced: Rebase, Reflog & Internals"]
    E --> F["Professional: GitHub Actions & CI/CD"]
    
    style A fill:#0d6efd,color:#fff
    style B fill:#198754,color:#fff
    style C fill:#0dcaf0,color:#000
    style D fill:#ffc107,color:#000
    style E fill:#6f42c1,color:#fff
    style F fill:#d63384,color:#fff`,
          steps: [
            {
              title: 'Step 1: Understand the Course Structure',
              explanation: 'This course is divided into 7 progressive levels. Each lesson contains a clear objective, theoretical concept, visual diagrams, step-by-step practical commands, common beginner mistakes, hands-on exercises, and an interactive knowledge check.',
              command: null
            },
            {
              title: 'Step 2: Check Your Terminal / Command Line',
              explanation: 'Git is primarily operated through the terminal (Command Prompt/PowerShell on Windows, Terminal on macOS/Linux). Open your terminal to make sure you have access to a command prompt.',
              command: 'echo "Ready to learn Git and GitHub!"',
              output: 'Ready to learn Git and GitHub!'
            }
          ],
          verification: 'Confirm you can open your terminal and run basic shell commands.',
          expectedResult: 'The echo command prints the confirmation text in your terminal.',
          commonMistakes: [
            {
              problem: 'Trying to memorize 100+ commands before understanding the fundamentals.',
              why: 'Memorization leads to panic when a command produces an unexpected prompt.',
              fix: 'Focus on understanding the 3 main areas of Git (Working Directory, Staging Area, Repository) first.'
            }
          ],
          realWorldScenario: 'At enterprise companies, every single feature, bugfix, and deployment flows through Git and GitHub. Mastering this tool is as essential to software engineering as writing code itself.',
          quiz: {
            question: 'What is the primary purpose of version control in software development?',
            options: [
              'To speed up the computer CPU processing rate.',
              'To record changes over time so you can track history, revert mistakes, and collaborate safely.',
              'To automatically write code using artificial intelligence.',
              'To host video streaming services.'
            ],
            correctIndex: 1,
            explanation: 'Version control systems (VCS) like Git record file modifications over time, allowing developers to inspect history, restore previous versions, and work together concurrently.'
          },
          summary: 'Git is the underlying version control tool; GitHub is the cloud platform. By understanding the core mental model first, you will build long-term mastery rather than superficial command recall.'
        },
        {
          id: 'version-control-explained',
          slug: 'version-control-explained',
          order: '1.2',
          title: 'What is Version Control & Why Do We Need It?',
          subtitle: 'The evolution from manual file backups (final_v2_FINAL.zip) to distributed version control systems.',
          chapterId: 'fundamentals',
          chapterTitle: '01. Fundamentals & Mental Model',
          levelTitle: 'Level 1: Absolute Beginner',
          goal: 'Understand why manual backups fail and how Distributed Version Control Systems (DVCS) solve collaboration at scale.',
          prerequisites: [
            'Completed Lesson 1.1 (Welcome).'
          ],
          concept: `**The Nightmare of Manual Backups**\n\nBefore version control existed, developers backed up their code by duplicating folders manually with names like:\n\n- \'project_final.zip\'\n- \'project_final_v2.zip\'\n- \'project_final_really_final_DO_NOT_DELETE.zip\'\n\nThis manual approach suffers from critical flaws:\n1. **No Accountability**: You cannot tell *who* changed a specific line or *why* they changed it.\n2. **High Risk of Overwrites**: If two developers edit the same file simultaneously and copy it back to a shared drive, one person will overwrite the other person's hard work.\n3. **No Rollback Safety**: If a bug crashes production, finding which specific change broke it requires tedious manual comparison.\n\n**What is a Version Control System (VCS)?**\nA Version Control System is software that automatically captures **snapshots** of your entire project over time. You can think of each snapshot as a "save point" in a video game. If you make a mistake or break a feature, you can travel back in time to any previous save point with absolute precision.`,
          diagram: `flowchart TD
    subgraph Bad ["Manual Approach (Fragile)"]
        F1["app_v1.zip"] --> F2["app_v2_fixed.zip"] --> F3["app_final_real.zip"]
    end

    subgraph Good ["Git Version Control (Robust)"]
        C1["Commit #1: Initial layout"] --> C2["Commit #2: Added login page"] --> C3["Commit #3: Fixed mobile CSS"]
    end
    
    style Bad fill:#f8d7da,stroke:#dc3545,color:#842029
    style Good fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Centralized vs. Distributed Version Control',
              explanation: 'Early systems (like SVN or CVS) were **Centralized** — every developer relied on a single central server. If the server was down, nobody could commit changes or view history.\n\n**Git is Distributed (DVCS)**: Every developer has a complete, self-contained copy of the entire project repository and its full history on their own computer. You can commit, create branches, and inspect history completely offline!',
              command: null
            }
          ],
          verification: 'You understand that Git is distributed, meaning your local machine holds the full history.',
          expectedResult: 'You can articulate the difference between centralized VCS and distributed VCS.',
          commonMistakes: [
            {
              problem: 'Thinking Git requires an active internet connection to work.',
              why: 'Git works entirely locally on your hard drive. Internet connection is only required when syncing with GitHub (pushing/pulling).',
              fix: 'Remember that Git is local; GitHub is the cloud host.'
            }
          ],
          realWorldScenario: 'When Facebook, Google, or Microsoft engineers work on massive codebases with tens of thousands of commits daily, distributed version control ensures their work never conflicts or blocks other developers.',
          quiz: {
            question: 'What is the main advantage of a Distributed Version Control System (like Git)?',
            options: [
              'It requires an active internet connection for every single operation.',
              'Every developer has a complete copy of the repository history locally and can work offline.',
              'It deletes previous versions automatically to save hard drive space.',
              'It only works for a single developer.'
            ],
            correctIndex: 1,
            explanation: 'In a distributed system, every clone is a full backup of the entire project history, allowing fast, offline local commits.'
          },
          summary: 'Version control gives your project a time machine. Git is distributed, fast, and gives every developer an independent, complete copy of the project history.'
        },
        {
          id: 'git-vs-github',
          slug: 'git-vs-github',
          order: '1.3',
          title: 'Git vs. GitHub: What Is the Difference?',
          subtitle: 'The number one point of confusion for beginners clearly untangled with analogies.',
          chapterId: 'fundamentals',
          chapterTitle: '01. Fundamentals & Mental Model',
          levelTitle: 'Level 1: Absolute Beginner',
          goal: 'Clearly separate the local command-line tool (Git) from the cloud collaboration platform (GitHub).',
          prerequisites: [
            'Completed Lesson 1.2 (Version Control Explained).'
          ],
          concept: `One of the most common mistakes beginners make is using the terms **Git** and **GitHub** interchangeably. They are completely different technologies that work together!\n\n### The Analogy\n- **Git is like the engine in a car.** It is the local mechanism that actually does the mechanical work of tracking files, creating branches, and recording commits on your computer.\n- **GitHub is like a global parking garage and dealership network.** It is a web-based service where millions of developers park their Git engines in the cloud to share them with team members.\n\n| Feature | Git | GitHub |\n| :--- | :--- | :--- |\n| **What is it?** | A local Command Line Tool (VCS) | A cloud-based web platform |\n| **Where does it run?** | Locally on your computer | In the cloud (hosted by Microsoft) |\n| **Requires Internet?** | No! Works 100% offline | Yes (for syncing and web features) |\n| **Core Capabilities** | Staging, Committing, Branching, Merging | Hosting, Pull Requests, Issues, Actions, UI |\n| **Creator** | Linus Torvalds (2005) | Chris Wanstrath, PJ Hyett, Tom Preston-Werner (2008) |`,
          diagram: `flowchart TD
    subgraph Local ["Your Local Machine"]
        G["Git CLI (Engine)"] --> LR[("Local Repository")]
    end
    
    subgraph Cloud ["GitHub Cloud Platform"]
        GH[("Remote Repository")]
        PR["Pull Requests & Code Reviews"]
        ACT["GitHub Actions (CI/CD)"]
        ISS["Issues & Project Boards"]
        GH --- PR
        GH --- ACT
        GH --- ISS
    end
    
    LR <== "Sync via Internet (git push / pull)" ==> GH
    
    style Local fill:#e9ecef,stroke:#6c757d
    style Cloud fill:#cff4fc,stroke:#0dcaf0`,
          steps: [
            {
              title: 'Understand Other Git Platforms',
              explanation: 'Because Git is an open-source standard, you can also host Git repositories on alternatives like **GitLab**, **Bitbucket**, or **Azure DevOps**. GitHub is simply the most popular platform in the world with over 100 million developers.',
              command: null
            }
          ],
          verification: 'You can clearly explain to another developer why Git is not owned by GitHub.',
          expectedResult: 'You understand that Git is installed locally, while GitHub is accessed via a browser or API.',
          commonMistakes: [
            {
              problem: 'Assuming that running "git commit" uploads your files to GitHub.',
              why: '"git commit" only saves the snapshot to your local database on your hard drive.',
              fix: 'You must explicitly run "git push" to transfer local commits to GitHub.'
            }
          ],
          realWorldScenario: 'You can write code on an airplane with no Wi-Fi, create 10 Git branches, and make 50 commits with Git. When your plane lands and connects to Wi-Fi, you run "git push" to upload your work to GitHub.',
          quiz: {
            question: 'Which of the following operations requires an active internet connection?',
            options: [
              'Running `git init` to initialize a new repository.',
              'Running `git commit` to save a local snapshot.',
              'Running `git branch` to create a new branch.',
              'Running `git push` to upload local commits to GitHub.'
            ],
            correctIndex: 3,
            explanation: 'Only network commands that communicate with the remote server (such as "git push", "git pull", "git clone", "git fetch") require an active internet connection.'
          },
          summary: 'Git is the local version control command-line tool. GitHub is the cloud hosting platform for collaborating on Git repositories.'
        },
        {
          id: 'installation-and-setup',
          slug: 'installation-and-setup',
          order: '1.4',
          title: 'Installing & Configuring Git',
          subtitle: 'Step-by-step installation instructions for Windows, Mac, and Linux, plus essential global configuration.',
          chapterId: 'fundamentals',
          chapterTitle: '01. Fundamentals & Mental Model',
          levelTitle: 'Level 1: Absolute Beginner',
          goal: 'Install Git on your operating system and configure your global developer name and email address.',
          prerequisites: [
            'A computer with administrative privileges to install software.'
          ],
          concept: `Before you can record snapshots with Git, Git needs to know **who you are**.\n\nEvery time a commit is created, Git permanently stamps that commit with the author's **name** and **email address**. This ensures that in a team of 50 developers, everyone knows who wrote each specific line of code.\n\nWe set this identity using the \'git config\' command.`,
          steps: [
            {
              title: 'Step 1: Install Git on Your Computer',
              explanation: 'Download and install Git according to your operating system:\n\n- **Windows**: Download the installer from [git-scm.com](https://git-scm.com/download/win). Keep the recommended defaults during installation.\n- **macOS**: Open Terminal and run "xcode-select --install" or use Homebrew: "brew install git".\n- **Linux (Ubuntu/Debian)**: Run "sudo apt update && sudo apt install git".',
              command: 'git --version',
              output: 'git version 2.44.0'
            },
            {
              title: 'Step 2: Configure Your Developer Name',
              explanation: 'Set your global author name. Use your real name or GitHub username so team members can recognize your commits.',
              command: 'git config --global user.name "Your Name"',
              commandDescription: 'Configures your name across all Git repositories on this machine.'
            },
            {
              title: 'Step 3: Configure Your Developer Email',
              explanation: 'Set your email address. **Important**: Use the exact same email address you plan to use for your GitHub account so GitHub can link your commits to your profile avatar!',
              command: 'git config --global user.email "your.email@example.com"',
              commandDescription: 'Configures your author email address globally.'
            },
            {
              title: 'Step 4: Configure Default Branch Name to "main"',
              explanation: 'Modern Git and GitHub standards use "main" as the default branch name instead of the older legacy "master" name.',
              command: 'git config --global init.defaultBranch main',
              commandDescription: 'Ensures all newly initialized repositories use main as their primary branch.'
            }
          ],
          verification: 'Run "git config --list" in your terminal to view your configured global settings.',
          expectedResult: `user.name=Your Name\nuser.email=your.email@example.com\ninit.defaultbranch=main`,
          commonMistakes: [
            {
              problem: 'Typing literal placeholder text "Your Name" instead of your actual name.',
              why: 'Beginners sometimes copy-paste without replacing the string inside quotes.',
              fix: 'Run the command again with your actual name in quotes, e.g. "git config --global user.name "John Doe"".'
            },
            {
              problem: 'Using a different email address than the one registered on your GitHub account.',
              why: 'If the emails do not match, your commits on GitHub will show as anonymous and will not count towards your GitHub contribution green squares.',
              fix: 'Verify the email in GitHub Settings > Emails and match it with "git config --global user.email".'
            }
          ],
          practice: {
            title: 'Verify Your Global Settings',
            task: 'Run the command to print only the configured username and user email from Git configuration.',
            hint: 'You can pass a specific key to "git config", such as "git config user.name".',
            solution: {
              explanation: 'Query the specific config keys individually:',
              command: 'git config user.name\ngit config user.email'
            },
            expectedOutcome: 'Your terminal prints your name and email on two separate lines.'
          },
          quiz: {
            question: 'What happens if you do not configure your git user.name and user.email before making your first commit?',
            options: [
              'Git will automatically delete your hard drive.',
              'Git will halt and refuse to create the commit until you provide an author identity.',
              'Git will automatically invent a fake name for you.',
              'Git will send an SMS to Microsoft.'
            ],
            correctIndex: 1,
            explanation: 'Git requires an author name and email for every commit to ensure accountability in version history.'
          },
          summary: 'Install Git from git-scm.com and configure "user.name", "user.email", and "init.defaultBranch main" using "git config --global".'
        },
        {
          id: 'mental-model-three-trees',
          slug: 'mental-model-three-trees',
          order: '1.5',
          title: 'The Core Mental Model: The Three Trees of Git',
          subtitle: 'The most important architectural concept in Git: Working Directory, Staging Area, and Repository.',
          chapterId: 'fundamentals',
          chapterTitle: '01. Fundamentals & Mental Model',
          levelTitle: 'Level 1: Absolute Beginner',
          goal: 'Understand the three stages of a file in Git and why the Staging Area is Git\'s superpower.',
          prerequisites: [
            'Completed Lesson 1.4 (Installing & Configuring Git).'
          ],
          concept: `To master Git, you must understand the **Three Trees architecture**.\n\nWhen you work on a project tracked by Git, your files exist in one of three distinct areas:\n\n1. **Working Directory (Your Workspace)**: The actual files and folders you see on your desktop or inside your code editor (like VS Code). Here you edit, create, and delete files.\n2. **Staging Area (Index / Preparation Area)**: The transition zone where you gather and review specific changes you want to include in your next snapshot. Think of it as a **shopping cart** or a **staging table for a camera shot**.\n3. **Local Repository (.git directory)**: The permanent database on your hard drive where Git stores all your completed commits (snapshots). Once a commit is here, it is safely recorded forever.\n\n### Why does the Staging Area exist?\nIn other version control systems, saving a snapshot saves *every single file* you touched. But in real life, you might have edited 5 files: 3 files for a login feature, and 2 files experimenting with a color change.\n\nThe Staging Area allows you to **cherry-pick exactly which files to package together into a clean, logical commit**, leaving your experimental files out!`,
          diagram: `flowchart LR
    A["1. Working Directory\n(Your active edits)"] -- "git add [file]" --> B["2. Staging Area\n(The preparation cart)"]
    B -- "git commit -m" --> C[("3. Local Repository\n(.git Database)")]
    C -- "git push origin" --> D[("4. GitHub Cloud\n(Remote Repo)")]
    
    style A fill:#ffc107,color:#000
    style B fill:#0dcaf0,color:#000
    style C fill:#198754,color:#fff
    style D fill:#0d6efd,color:#fff`,
          steps: [
            {
              title: 'The 4 States of a File in Git',
              explanation: 'A file inside your project is always in one of these four states:\n\n1. **Untracked**: A brand new file Git has never seen before.\n2. **Modified**: An existing tracked file that has new changes in the Working Directory.\n3. **Staged**: A modified/untracked file that has been marked with "git add" to go into the next commit.\n4. **Committed**: Changes that are safely saved in the ".git" database.',
              command: null
            }
          ],
          verification: 'You can explain the purpose of the Staging Area and why we don\'t jump straight from Working Directory to Repository.',
          expectedResult: 'You understand that "git add" stages files, and "git commit" permanently saves them.',
          commonMistakes: [
            {
              problem: 'Thinking that editing a file automatically stages it.',
              why: 'Git never automatically stages your changes unless you explicitly tell it to.',
              fix: 'Always use "git add" to stage modified files before running "git commit".'
            }
          ],
          quiz: {
            question: 'What is the primary role of the Git Staging Area (Index)?',
            options: [
              'To upload files to GitHub immediately.',
              'To act as a temporary draft area where you prepare and craft clean, logical commits.',
              'To compress image files.',
              'To compile JavaScript code into binary.'
            ],
            correctIndex: 1,
            explanation: 'The Staging Area lets developers organize and inspect exactly which changes will be included in the next permanent commit.'
          },
          summary: 'Git uses 3 local zones: Working Directory (active files), Staging Area (draft cart for next snapshot), and Local Repository (permanent snapshot database).'
        }
      ]
    },
    {
      id: 'first-repository',
      title: '02. Your First Repository & Commits',
      lessons: [
        {
          id: 'git-init-and-first-commit',
          slug: 'git-init-and-first-commit',
          order: '1.6',
          title: 'Creating a Repository: "git init" & First Commit',
          subtitle: 'Initialize your first repository from scratch, understand the hidden ".git" folder, and record your first commit.',
          chapterId: 'first-repository',
          chapterTitle: '02. Your First Repository & Commits',
          levelTitle: 'Level 1: Absolute Beginner',
          goal: 'Initialize a new Git repository, create a project file, inspect its status, stage it, and save your first permanent commit.',
          prerequisites: [
            'Git installed and configured (Lesson 1.4).',
            'Understanding of the Three Trees mental model (Lesson 1.5).'
          ],
          concept: `**What is a Repository ("Repo")?**\nA repository is simply a folder on your computer that Git is actively watching and tracking. When you turn a normal folder into a Git repository, Git creates a hidden subfolder called \'.git\'.\n\nInside this hidden \'.git\' folder, Git stores the entire database of all snapshots, commit logs, branches, and configuration. If you ever delete the \'.git\' folder, the project simply reverts to a normal folder without history.\n\n**The Golden Cycle of Daily Git Development:**\n\'\'\'text\n1. Modify files  ->  2. Check status (git status)  ->  3. Stage files (git add)  ->  4. Commit (git commit)\n\'\'\'`,
          steps: [
            {
              title: 'Step 1: Create a Project Directory',
              explanation: 'Create a new folder on your computer and navigate into it using your terminal.',
              command: 'mkdir my-first-repo\ncd my-first-repo',
              commandBreakdown: [
                { part: 'mkdir my-first-repo', meaning: 'Make a new directory named my-first-repo' },
                { part: 'cd my-first-repo', meaning: 'Change directory into the newly created folder' }
              ]
            },
            {
              title: 'Step 2: Initialize the Git Repository',
              explanation: 'Tell Git to start tracking this directory. This command creates the hidden ".git" folder.',
              command: 'git init',
              output: 'Initialized empty Git repository in /path/to/my-first-repo/.git/'
            },
            {
              title: 'Step 3: Create a File and Check Status',
              explanation: 'Create an initial "README.md" file. Then run "git status" to see how Git views this new file.',
              command: 'echo "# My First Project" > README.md\ngit status',
              output: `On branch main\n\nNo commits yet\n\nUntracked files:\n  (use "git add <file>..." to include in what will be committed)\n\tREADME.md\n\nnothing added to commit but untracked files present (use "git add" to track)`
            },
            {
              title: 'Step 4: Stage the File',
              explanation: 'Move the "README.md" file from the Working Directory into the Staging Area.',
              command: 'git add README.md',
              commandDescription: 'Stages README.md for the upcoming commit. (To stage all files in the current folder, you can use "git add .")'
            },
            {
              title: 'Step 5: Record Your First Commit',
              explanation: 'Permanently save the staged snapshot into the repository with a descriptive commit message.',
              command: 'git commit -m "Initial commit: Add project README"',
              output: `[main (root-commit) 7a2f1b8] Initial commit: Add project README\n 1 file changed, 1 insertion(+)\n create mode 100644 README.md`
            }
          ],
          verification: 'Run "git log" to inspect your project\'s permanent commit history.',
          expectedResult: `commit 7a2f1b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a (HEAD -> main)\nAuthor: Your Name <your.email@example.com>\nDate:   Fri Aug 14 10:00:00 2026 +0000\n\n    Initial commit: Add project README`,
          commonMistakes: [
            {
              problem: 'Running "git init" inside your computer\'s User/Home directory or Desktop root.',
              why: 'This accidentally turns your entire hard drive or desktop into one gigantic Git repository!',
              fix: 'Always create a dedicated project folder first ("mkdir my-app"), "cd" into it, and ONLY then run "git init".'
            },
            {
              problem: 'Forgetting the "-m" flag in "git commit".',
              why: 'If you just type "git commit", Git opens a terminal text editor (Vim or Nano) which can confuse beginners.',
              fix: 'Always supply the inline message flag: "git commit -m "Your message"". (If stuck in Vim, press Escape, type ":wq", and hit Enter).'
            }
          ],
          practice: {
            title: 'Make a Second Commit',
            task: 'Add a new file called "app.js" with "console.log("Hello Git!");", stage it, and commit it with the message "Add application entry file".',
            hint: 'Use "echo", "git add app.js", and "git commit -m "Add application entry file"".',
            solution: {
              explanation: 'Create the file, stage it, and commit it:',
              command: 'echo "console.log(\'Hello Git!\');" > app.js\ngit add app.js\ngit commit -m "Add application entry file"'
            },
            expectedOutcome: 'Git confirms 1 file changed with a new commit hash.'
          },
          quiz: {
            question: 'What does the hidden ".git" folder contain?',
            options: [
              'Virus definitions.',
              'The complete database, commit logs, branches, and version history of the repository.',
              'Temporary files that should be deleted regularly.',
              'A copy of your operating system kernel.'
            ],
            correctIndex: 1,
            explanation: 'The ".git" directory contains the entire repository database and all history. Never manually delete it unless you want to discard all Git tracking!'
          },
          summary: 'Use "git init" to initialize a repo, "git status" to see what changed, "git add" to stage changes, and "git commit -m "message"" to record a permanent snapshot.'
        },
        {
          id: 'connecting-to-github',
          slug: 'connecting-to-github',
          order: '1.7',
          title: 'Connecting Local Git to GitHub: "git remote" & "git push"',
          subtitle: 'Create a repository on GitHub, link your local repo to the remote origin, and push your code to the cloud.',
          chapterId: 'first-repository',
          chapterTitle: '02. Your First Repository & Commits',
          levelTitle: 'Level 1: Absolute Beginner',
          goal: 'Create a remote repository on GitHub, configure the remote origin on your local machine, and push your commits to the cloud.',
          prerequisites: [
            'A free account created on [github.com](https://github.com).',
            'A local repository with at least one commit (Lesson 1.6).'
          ],
          concept: `**What is a "Remote"?**\nA remote is a reference (a bookmark URL) pointing to a copy of your repository hosted on the internet (like on GitHub) or another network.\n\nBy convention in the Git world, the primary central remote repository is given the default nickname **\'origin\'**.\n\n### The Relationship:\n- **Local Repository**: On your laptop.\n- **Remote Repository (\'origin\')**: In the GitHub cloud.\n- **\'git push\'**: Uploads your local commits to the remote repository.\n- **\'git pull\'**: Downloads remote commits from GitHub to your local machine.`,
          diagram: `flowchart LR
    subgraph YourLaptop ["Your Computer"]
        L[("Local Repo\n(branch: main)")]
    end
    
    subgraph GitHubServer ["GitHub Cloud"]
        R[("Remote Repo 'origin'\n(branch: main)")]
    end
    
    L -- "git push -u origin main" --> R
    R -- "git pull origin main" --> L
    
    style YourLaptop fill:#e2e3e5,stroke:#41464b
    style GitHubServer fill:#cfe2ff,stroke:#084298`,
          steps: [
            {
              title: 'Step 1: Create an Empty Repository on GitHub.com',
              explanation: '1. Log into [github.com](https://github.com).\n2. In the top right corner, click the **+** icon and select **New repository**.\n3. Enter the repository name (e.g. "my-first-repo").\n4. **Important**: Leave "Add a README file", ".gitignore", and "License" **UNCHECKED** (because we already created a local README!).\n5. Click **Create repository**.',
              command: null
            },
            {
              title: 'Step 2: Add the Remote Origin URL',
              explanation: 'Copy the HTTPS repository URL from GitHub and add it as a remote named "origin" to your local repository.',
              command: 'git remote add origin https://github.com/YOUR-USERNAME/my-first-repo.git',
              commandBreakdown: [
                { part: 'git remote add', meaning: 'Add a new remote link' },
                { part: 'origin', meaning: 'The default standard nickname for this remote' },
                { part: 'https://github.com/...', meaning: 'The target cloud URL of your GitHub repository' }
              ]
            },
            {
              title: 'Step 3: Verify the Remote Connection',
              explanation: 'List the configured remotes to confirm the URL is set properly for fetching and pushing.',
              command: 'git remote -v',
              output: `origin  https://github.com/YOUR-USERNAME/my-first-repo.git (fetch)\norigin  https://github.com/YOUR-USERNAME/my-first-repo.git (push)`
            },
            {
              title: 'Step 4: Push Your Commits to GitHub',
              explanation: 'Upload your "main" branch commits to the remote "origin". The "-u" flag sets the upstream tracking reference so future pushes only require typing "git push".',
              command: 'git push -u origin main',
              output: `Enumerating objects: 3, done.\nCounting objects: 100% (3/3), done.\nWriting objects: 100% (3/3), 220 bytes | 220.00 KiB/s, done.\nTotal 3 (delta 0), reused 0 (delta 0)\nTo https://github.com/YOUR-USERNAME/my-first-repo.git\n * [new branch]      main -> main\nBranch 'main' set up to track remote branch 'main' from 'origin'.`
            }
          ],
          verification: 'Open your browser and refresh your GitHub repository page. You will see your README.md and commit history live on GitHub!',
          expectedResult: 'The GitHub webpage displays your committed files and shows "1 commit".',
          commonMistakes: [
            {
              problem: 'Authentication Error / Password Rejected when pushing to GitHub.',
              why: 'GitHub discontinued plain account password authentication in 2021 for security reasons.',
              fix: 'You must authenticate using a **Personal Access Token (PAT)** or an **SSH Key**. (When prompted in the browser/CLI, use GitHub Credential Manager or paste your PAT).'
            },
            {
              problem: 'Initializing a README on GitHub while also having local commits, causing "failed to push some refs" error.',
              why: 'GitHub created an initial commit that does not exist in your local history.',
              fix: 'Always create an EMPTY repository on GitHub when pushing an existing local repo, or run "git pull origin main --rebase" before pushing.'
            }
          ],
          quiz: {
            question: 'What does the "-u" flag in "git push -u origin main" do?',
            options: [
              'It uninstalls Git from your computer.',
              'It sets the upstream tracking reference so future pushes and pulls on this branch only require `git push` or `git pull`.',
              'It deletes the remote branch.',
              'It forces Git to bypass all security checks.'
            ],
            correctIndex: 1,
            explanation: 'The "-u" (or "--set-upstream") flag links your local "main" branch to the remote "origin/main" branch.'
          },
          summary: 'Use "git remote add origin <URL>" to link your local repository to GitHub, and "git push -u origin main" to upload your code to the cloud.'
        },
        {
          id: 'cloning-a-repository',
          slug: 'cloning-a-repository',
          order: '1.8',
          title: 'Cloning Existing Repositories: "git clone"',
          subtitle: 'How to download any public or private repository from GitHub to your computer with full commit history.',
          chapterId: 'first-repository',
          chapterTitle: '02. Your First Repository & Commits',
          levelTitle: 'Level 1: Absolute Beginner',
          goal: 'Clone a project from GitHub to your local machine and verify that its complete history and branches were downloaded.',
          prerequisites: [
            'Git installed on your machine (Lesson 1.4).'
          ],
          concept: `**What is 'git clone'?**\n\nWhen you start working on an existing team project or open-source library, you do not start with 'git init'. Instead, you use **'git clone'**.\n\n'git clone' does four things automatically in a single command:\n1. Creates a new folder on your computer with the repository name.\n2. Initializes a Git repository ('git init') inside that folder.\n3. Adds the remote URL as 'origin' automatically ('git remote add origin ...').\n4. Downloads all files, every commit, and every branch in the repository\'s history ('git fetch' and 'git checkout main').\n\nUnlike simply downloading a '.zip' file from GitHub, cloning gives you the **entire working version control history** and immediately links your local copy to the remote repository!`,
          diagram: `flowchart TD
    GH[("GitHub Cloud Repository\n(e.g., facebook/react)")] -- "git clone https://..." --> L[("Your Local Machine\n(Complete copy with full history & origin set)")]
    
    style GH fill:#0d6efd,color:#fff
    style L fill:#198754,color:#fff`,
          steps: [
            {
              title: 'Step 1: Obtain the Clone URL from GitHub',
              explanation: 'On any GitHub repository page, click the green **<> Code** button and copy the HTTPS URL.',
              command: null
            },
            {
              title: 'Step 2: Run the Clone Command',
              explanation: 'In your terminal, navigate to the folder where you keep projects (e.g. "cd ~/projects") and run "git clone" followed by the URL.',
              command: 'git clone https://github.com/octocat/Hello-World.git',
              output: `Cloning into 'Hello-World'...\nremote: Enumerating objects: 13, done.\nremote: Total 13 (delta 0), reused 0 (delta 0), pack-reused 13\nReceiving objects: 100% (13/13), done.`
            },
            {
              title: 'Step 3: Enter the Cloned Folder',
              explanation: 'Navigate into the newly created project folder and inspect the commit log.',
              command: 'cd Hello-World\ngit log --oneline -n 3',
              output: `7fd1a60 (HEAD -> master, origin/master, origin/HEAD) Merge pull request #6\n7629613 Fix grammar in README\n553c207 Create README`
            }
          ],
          verification: 'Run "git remote -v" inside the cloned directory. Notice that "origin" is already automatically configured for you!',
          expectedResult: `origin  https://github.com/octocat/Hello-World.git (fetch)\norigin  https://github.com/octocat/Hello-World.git (push)`,
          commonMistakes: [
            {
              problem: 'Running "git clone" inside an existing Git repository folder.',
              why: 'Nesting one Git repository inside another creates confusing submodule conflicts.',
              fix: 'Always check "git status" before cloning. If it says "fatal: not a git repository", you are safe to clone there.'
            },
            {
              problem: 'Cloning to a custom folder name without knowing how.',
              why: 'By default, Git creates a folder with the repository\'s name.',
              fix: 'To specify a custom folder name, append the name at the end: "git clone <URL> my-custom-folder".'
            }
          ],
          practice: {
            title: 'Clone a Repository with a Custom Name',
            task: 'Clone the octocat Hello-World repository into a folder specifically named "my-sample-app".',
            hint: 'Pass the folder name as the second argument after the URL.',
            solution: {
              explanation: 'Append the folder name to the command:',
              command: 'git clone https://github.com/octocat/Hello-World.git my-sample-app'
            },
            expectedOutcome: 'A folder named my-sample-app is created containing the cloned repository.'
          },
          quiz: {
            question: 'What is the key difference between downloading a ZIP file of a repo from GitHub vs running "git clone"?',
            options: [
              'A ZIP file is faster to download.',
              '`git clone` downloads the full Git version history, creates the `.git` database, and automatically configures the `origin` remote.',
              'Downloading a ZIP file requires command line knowledge.',
              'There is no difference.'
            ],
            correctIndex: 1,
            explanation: 'A ZIP file only gives you a static snapshot of the files without any Git tracking or history. "git clone" provides the full Git database and remote link.'
          },
          summary: 'Use "git clone <URL>" to download an existing repository along with its entire commit history and automatic remote configuration.'
        }
      ]
    }
  ]
};

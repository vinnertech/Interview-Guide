export const interviewQuestions = [
  {
    "category": "Azure DevOps Fundamentals",
    "title": "What is Azure DevOps?",
    "explanation": "Azure DevOps is a comprehensive, cloud-based platform provided by Microsoft that offers a complete set of tools to support the entire software development lifecycle (SDLC). It bridges the gap between software development (Dev) and IT operations (Ops).\n\nIt enables teams to plan work, collaborate on code development, and build and deploy applications seamlessly. It is highly extensible, deeply integrated with the Microsoft ecosystem (Azure, Visual Studio), but also completely agnostic and capable of deploying to AWS, GCP, or on-premises servers using any language.",
    "code": "",
    "example": "",
    "tip": "Always mention that it is a *collection of services* covering the entire SDLC, not just a CI/CD tool.",
    "summary": "Microsoft's cloud platform providing end-to-end SDLC and CI/CD tools",
    "id": 1
  },
  {
    "category": "Azure DevOps Fundamentals",
    "title": "What are the main services provided by Azure DevOps?",
    "explanation": "Azure DevOps consists of five core services:\n1. **Azure Boards**: An agile planning and project management tool using Kanban and Scrum methodologies to track work items, bugs, and epics.\n2. **Azure Repos**: Provides unlimited, cloud-hosted private Git repositories for source control.\n3. **Azure Pipelines**: A powerful CI/CD engine that automatically builds, tests, and deploys code to any platform.\n4. **Azure Test Plans**: A suite of tools for manual and exploratory testing.\n5. **Azure Artifacts**: A package management system to create, host, and share Maven, npm, NuGet, and Python packages.",
    "code": "",
    "example": "",
    "tip": "Memorize these five core services. They are the absolute foundation of the platform.",
    "summary": "Boards, Repos, Pipelines, Test Plans, and Artifacts",
    "id": 2
  },
  {
    "category": "Azure DevOps Fundamentals",
    "title": "What is the difference between Azure DevOps Services and Azure DevOps Server?",
    "explanation": "The core difference lies in hosting and management.\n- **Azure DevOps Services**: The cloud-hosted version (formerly VSTS). Microsoft manages the infrastructure, scaling, and high availability. It receives automatic, continuous updates.\n- **Azure DevOps Server**: The on-premises version (formerly TFS - Team Foundation Server). The customer is entirely responsible for hosting, managing the servers, performing backups, and installing manual updates. It is used primarily by organizations with extremely strict data compliance and isolation requirements.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Services is cloud-hosted by Microsoft; Server is on-premises managed by the customer",
    "id": 3
  },
  {
    "category": "Azure DevOps Fundamentals",
    "title": "What are Azure Boards, Repos, Pipelines, Test Plans, and Artifacts?",
    "explanation": "These are the fundamental pillars of Azure DevOps:\n- **Boards**: Tracks 'What needs to be done' (Agile, Jira alternative).\n- **Repos**: Stores 'The Code' (Git, GitHub alternative).\n- **Pipelines**: Handles 'How to build and deploy it' (CI/CD, Jenkins alternative).\n- **Test Plans**: Handles 'Is the software behaving correctly' (Manual testing).\n- **Artifacts**: Stores 'Compiled packages and libraries' (Nexus/Artifactory alternative).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "The 5 core services handling Agile, Code, CI/CD, Testing, and Packages",
    "id": 4
  },
  {
    "category": "Azure DevOps Fundamentals",
    "title": "What is an Azure DevOps Organization?",
    "explanation": "An Organization in Azure DevOps is the highest level of logical grouping. It represents a company, an enterprise, or a large department.\n\nAn Organization connects a group of related projects, allowing them to share resources like users, billing, licensing, extensions, and custom domain configurations. It is bound to exactly one Microsoft Entra ID (formerly Azure Active Directory) tenant for centralized identity and access management.",
    "code": "",
    "example": "URL format: `https://dev.azure.com/{organization_name}`",
    "tip": "",
    "summary": "The highest-level container grouping related projects for a company",
    "id": 5
  },
  {
    "category": "Azure DevOps Fundamentals",
    "title": "What is a Project in Azure DevOps?",
    "explanation": "A Project is a container inside an Organization that provides a secure, isolated workspace for a specific software application or team initiative.\n\nEvery project contains its own set of Repositories, Pipelines, Boards, Artifacts, and Teams. Projects ensure strict isolation—users in Project A cannot access source code in Project B unless explicitly granted cross-project permissions.",
    "code": "",
    "example": "URL format: `https://dev.azure.com/{organization}/{project}`",
    "tip": "",
    "summary": "An isolated workspace for a specific application containing its code and pipelines",
    "id": 6
  },
  {
    "category": "Azure DevOps Fundamentals",
    "title": "Organization vs Project in Azure DevOps?",
    "explanation": "- **Organization**: The umbrella entity. It manages billing, active directory integration (Entra ID), global security policies, and user licensing. There is usually one per company.\n- **Project**: The isolated workspace within the Organization. It contains the actual source code, boards, and CI/CD pipelines. There are usually dozens or hundreds of projects within an Organization.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Organization manages billing and users; Project contains actual code and pipelines",
    "id": 7
  },
  {
    "category": "Azure DevOps Fundamentals",
    "title": "What is a Team in Azure DevOps?",
    "explanation": "A Team is a logical grouping of users within a Project. \n\nTeams are used to manage Agile planning. Each Team gets its own dedicated Product Backlog, Kanban Board, and Sprint Dashboard. By dividing a large Project into multiple Teams (e.g., 'Frontend Team', 'Backend Team'), dozens of developers can work in the same Project repository without their Agile boards becoming impossibly cluttered.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A grouping of users within a project to manage separate Agile boards and backlogs",
    "id": 8
  },
  {
    "category": "Azure DevOps Fundamentals",
    "title": "What are Areas and Iterations?",
    "explanation": "These are crucial classification nodes in Azure Boards.\n- **Area Paths**: Used to logically group work items by feature, component, or team. For example: `ProjectName/Frontend/UI` vs `ProjectName/Backend/Database`.\n- **Iteration Paths**: Used to group work items by timeframes or sprints. For example: `ProjectName/Release 1/Sprint 4`.",
    "code": "",
    "example": "",
    "tip": "Teams are mapped directly to specific Area Paths and Iteration Paths to filter what appears on their specific Kanban board.",
    "summary": "Area Paths group work by feature; Iteration Paths group work by time (sprints)",
    "id": 9
  },
  {
    "category": "Azure DevOps Fundamentals",
    "title": "What are permissions in Azure DevOps?",
    "explanation": "Permissions dictate exactly what an identity (User or Group) can do within Azure DevOps. They are incredibly granular and can be set at almost every level: Organization level, Project level, Repo level, or even down to a specific branch or individual pipeline.\nPermissions operate on an 'Allow', 'Deny', or 'Not Set' system, where an explicit 'Deny' always overrides an 'Allow'.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Granular rules defining access levels across orgs, projects, repos, and pipelines",
    "id": 10
  },
  {
    "category": "Azure DevOps Fundamentals",
    "title": "What are security groups in Azure DevOps?",
    "explanation": "Security Groups are collections of users used to manage permissions efficiently at scale, adhering to Role-Based Access Control (RBAC).\nInstead of assigning permissions to individual users (which is an administrative nightmare), you assign permissions to a Group (e.g., `Contributors`, `Project Administrators`, `Readers`), and simply add users to that group. Azure DevOps provides default groups, and you can create custom ones.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Groups of users used to manage permissions efficiently via RBAC",
    "id": 11
  },
  {
    "category": "Azure DevOps Fundamentals",
    "title": "What is a Personal Access Token (PAT)?",
    "explanation": "A Personal Access Token (PAT) is an alternative to a password used to authenticate into Azure DevOps from third-party tools, CLI scripts, or external systems (like Git on a local machine, or a script calling the REST API).\n\nPATs are highly secure because they can be strictly scoped to specific actions (e.g., 'Read Code Only', 'Trigger Builds Only') and they have an automatic expiration date.",
    "code": "",
    "example": "",
    "tip": "Never hardcode PATs in source code. They should be treated identically to passwords.",
    "summary": "A scoped, expiring token used for programmatic authentication instead of a password",
    "id": 12
  },
  {
    "category": "Azure DevOps Fundamentals",
    "title": "How do you create and manage a PAT?",
    "explanation": "To create a PAT:\n1. Click the User Settings icon (top right near your profile) -> 'Personal Access Tokens'.\n2. Click 'New Token'.\n3. Provide a Name, set the Expiration date (max 1 year).\n4. Select the specific Scopes (e.g., Code: Read, Build: Execute) to enforce the Principle of Least Privilege.\n5. Copy the generated token immediately (it is never shown again).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Created via User Settings with specific scopes and expiration dates",
    "id": 13
  },
  {
    "category": "Azure DevOps Fundamentals",
    "title": "What is a Service Connection?",
    "explanation": "A Service Connection is a secure bridge that allows Azure DevOps to connect to and authenticate with external, third-party services and platforms without exposing raw credentials in pipelines.\n\nFor example, to deploy a web app to an Azure Subscription, you create an 'Azure Resource Manager (ARM)' Service Connection. Azure DevOps stores the Managed Identity or Service Principal securely. Pipelines simply reference the Service Connection by name.",
    "code": "",
    "example": "",
    "tip": "This is one of the most important concepts for CI/CD. It is how Pipelines talk to the outside world safely.",
    "summary": "A secure bridge allowing pipelines to authenticate with external services (like Azure or AWS)",
    "id": 14
  },
  {
    "category": "Azure DevOps Fundamentals",
    "title": "What is an Agent in Azure DevOps?",
    "explanation": "An Agent is a compute infrastructure resource (a virtual machine or container) that runs the actual work defined in your Azure Pipelines. \nWhen a pipeline is triggered, Azure DevOps sends the pipeline's steps to an available Agent. The Agent checks out the code, executes the build scripts, runs the tests, and reports the logs back to Azure DevOps.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A virtual machine or container that physically executes pipeline tasks",
    "id": 15
  },
  {
    "category": "Azure DevOps Fundamentals",
    "title": "Microsoft-hosted vs self-hosted agents?",
    "explanation": "- **Microsoft-Hosted Agents**: VMs managed entirely by Microsoft in the Azure cloud. They are spun up fresh for every single pipeline job and destroyed immediately after. They require zero maintenance but can be slower and cannot access private internal corporate networks easily.\n- **Self-Hosted Agents**: VMs or physical servers managed by the customer (on-prem or in a private cloud). You install the Azure DevOps agent software on them. They can access secure internal databases, cache build artifacts between runs (much faster), and have custom software installed.",
    "code": "",
    "example": "",
    "tip": "If an interviewer asks 'How do we deploy to an internal database behind a strict firewall?', the answer is always a Self-Hosted Agent.",
    "summary": "MS-Hosted are ephemeral and maintenance-free; Self-Hosted are managed, faster, and can access private networks",
    "id": 16
  },
  {
    "category": "Azure DevOps Fundamentals",
    "title": "What is an Agent Pool?",
    "explanation": "An Agent Pool is a logical grouping or cluster of multiple Agents.\nWhen a pipeline runs, it does not target a specific Agent machine; it targets an Agent Pool. Azure DevOps looks at the pool, finds the first Agent that is Idle (not currently running a job), and assigns the work to it. This provides load balancing and high availability.",
    "code": "pool:\n  name: 'My-Self-Hosted-Ubuntu-Pool'",
    "example": "",
    "tip": "",
    "summary": "A cluster of agents providing load balancing for pipeline jobs",
    "id": 17
  },
  {
    "category": "Azure DevOps Fundamentals",
    "title": "What is a Build Agent?",
    "explanation": "A Build Agent is simply an Agent that is currently executing a Continuous Integration (CI) pipeline. Its job is typically to compile source code, run automated unit tests, and package the output into an Artifact. It requires tools like MSBuild, Node, or Maven to be installed on it.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "An agent tasked specifically with compiling code and running CI tests",
    "id": 18
  },
  {
    "category": "Azure DevOps Fundamentals",
    "title": "What is a Deployment Agent?",
    "explanation": "A Deployment Agent is an Agent executing a Continuous Deployment (CD) pipeline. Its job is to take the compiled Artifact generated by the Build Agent and deploy it to a target environment (like Dev, QA, or Production). It requires tools like Azure CLI, kubectl, or PowerShell to interact with the hosting environments.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "An agent tasked specifically with deploying artifacts to target environments",
    "id": 19
  },
  {
    "category": "Azure DevOps Fundamentals",
    "title": "What is the difference between CI, Continuous Delivery, and Continuous Deployment?",
    "explanation": "- **Continuous Integration (CI)**: Code is frequently merged into the main branch. Every merge triggers an automated build and unit tests to ensure the code compiles and isn't broken.\n- **Continuous Delivery**: Extends CI. The artifact is automatically deployed to staging/QA environments. However, deployment to Production requires a **manual human approval** button click.\n- **Continuous Deployment**: The ultimate automation. If CI and automated testing pass, the code is deployed straight to Production automatically without ANY human intervention.",
    "code": "",
    "example": "",
    "tip": "Continuous Delivery = Manual Prod Deployment. Continuous Deployment = Automated Prod Deployment.",
    "summary": "CI = Auto Build/Test. Delivery = Manual Prod Deploy. Deployment = Auto Prod Deploy.",
    "id": 20
  },
  {
    "category": "Azure Boards",
    "title": "What is Azure Boards?",
    "explanation": "Azure Boards is a web-based service providing Agile project management tools. It offers deep integration with Azure Repos and Pipelines, allowing teams to track User Stories, Bugs, Tasks, and Epics through customizable Kanban boards, Sprint backlogs, and interactive dashboards.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "The Agile project management and work tracking service of Azure DevOps",
    "id": 21
  },
  {
    "category": "Azure Boards",
    "title": "What is a Work Item?",
    "explanation": "A Work Item is the fundamental unit of tracking in Azure Boards. It represents a piece of work that needs to be accomplished, tracked, or investigated.\nEvery work item is assigned a unique ID across the entire Organization and contains fields for title, description, assignee, state, priority, and discussions.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "The fundamental database record tracking a piece of work, bug, or requirement",
    "id": 22
  },
  {
    "category": "Azure Boards",
    "title": "What are the different types of Work Items?",
    "explanation": "The types of Work Items depend on the exact Process Template chosen when creating the Project (Scrum, Agile, CMMI, or Basic). \nIn a standard Agile template, the types are:\n- Epic\n- Feature\n- User Story\n- Task\n- Bug\n- Issue",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Depends on the Process Template, but commonly Epic, Feature, Story, Task, and Bug",
    "id": 23
  },
  {
    "category": "Azure Boards",
    "title": "What is an Epic?",
    "explanation": "An Epic is the highest level of work breakdown. It represents a massive, strategic initiative or a major business objective that spans across multiple teams, multiple sprints, or even multiple months. Epics are too large to be completed in a single iteration.",
    "code": "",
    "example": "\"Overhaul the entire E-Commerce Checkout Experience\"",
    "tip": "",
    "summary": "A massive strategic initiative spanning multiple sprints",
    "id": 24
  },
  {
    "category": "Azure Boards",
    "title": "What is a Feature?",
    "explanation": "A Feature is a child of an Epic. It represents a distinct, deliverable piece of functionality that provides value to the user. Features are usually large enough to span a few sprints and are broken down further into User Stories.",
    "code": "",
    "example": "\"Implement Apple Pay Integration for Checkout\"",
    "tip": "",
    "summary": "A distinct, deliverable piece of functionality (child of an Epic)",
    "id": 25
  },
  {
    "category": "Azure Boards",
    "title": "What is a User Story?",
    "explanation": "A User Story (or Product Backlog Item in Scrum) is a child of a Feature. It defines a specific requirement from the perspective of an end-user. It must be small enough to be completely finished within a single Sprint.",
    "code": "",
    "example": "\"As a customer, I want to see the Apple Pay button on the cart page, so I can checkout quickly.\"",
    "tip": "Always mention the standard format: 'As a [role], I want [feature], so that [value]'.",
    "summary": "A specific user requirement that can be completed in a single sprint",
    "id": 26
  },
  {
    "category": "Azure Boards",
    "title": "What is a Task?",
    "explanation": "A Task is the lowest level of work breakdown. It is a child of a User Story or a Bug. \nTasks represent the actual, granular technical work that a developer or QA engineer must perform to complete the parent User Story. Tasks are typically estimated in hours.",
    "code": "",
    "example": "\"Add ApplePay SDK to React frontend\", \"Create API endpoint for Apple Pay token validation\"",
    "tip": "",
    "summary": "Granular technical work items required to complete a User Story",
    "id": 27
  },
  {
    "category": "Azure Boards",
    "title": "What is a Bug?",
    "explanation": "A Bug represents a defect, error, or unexpected behavior in the software that needs to be fixed. Bugs can be linked to existing User Stories, or they can stand alone. They track reproduction steps, system info, and severity.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A defect or error in the software that must be fixed",
    "id": 28
  },
  {
    "category": "Azure Boards",
    "title": "What is the hierarchy between Epic, Feature, User Story, and Task?",
    "explanation": "The strict Agile hierarchy in Azure Boards is:\n1. **Epic** (Largest: Strategic goal)\n2. **Feature** (Child of Epic: Shippable component)\n3. **User Story** (Child of Feature: Sprint-sized requirement)\n4. **Task** (Child of Story: Hourly technical work)",
    "code": "",
    "example": "",
    "tip": "Understanding this parent-child hierarchy is crucial for navigating Boards.",
    "summary": "Epic -> Feature -> User Story -> Task",
    "id": 29
  },
  {
    "category": "Azure Boards",
    "title": "What is a Product Backlog?",
    "explanation": "The Product Backlog is a comprehensive, prioritized master list of all User Stories, Features, and Bugs that are planned for the product. It is owned and prioritized by the Product Owner. It acts as the single source of truth for all future work.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A prioritized master list of all future work for the product",
    "id": 30
  },
  {
    "category": "Azure Boards",
    "title": "What is a Sprint?",
    "explanation": "A Sprint (or Iteration) is a strict, time-boxed period (usually 2 to 4 weeks) during which a development team commits to completing a specific subset of work from the Product Backlog and delivering a usable increment of software.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A 2 to 4 week time-boxed period to deliver a software increment",
    "id": 31
  },
  {
    "category": "Azure Boards",
    "title": "What is Sprint Planning?",
    "explanation": "Sprint Planning is a Scrum ceremony held at the very beginning of a Sprint. The team and the Product Owner review the highest-priority items in the Product Backlog, discuss technical complexity, estimate the effort (using Story Points), and agree on which items to pull into the current Sprint Backlog.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A meeting to select and estimate backlog items for the upcoming sprint",
    "id": 32
  },
  {
    "category": "Azure Boards",
    "title": "What is a Sprint Backlog?",
    "explanation": "The Sprint Backlog is the specific subset of User Stories and Bugs that have been actively pulled from the master Product Backlog and committed to by the development team for the *current* active Sprint. It is highly volatile as tasks are constantly updated daily.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "The specific subset of work committed to for the current active sprint",
    "id": 33
  },
  {
    "category": "Azure Boards",
    "title": "What is a Kanban Board?",
    "explanation": "A Kanban Board is a visual workflow management tool. In Azure Boards, it displays work items as cards organized in columns representing their state (e.g., 'To Do', 'Doing', 'In PR', 'Done'). It provides instant visual transparency into the team's progress and highlights bottlenecks.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A visual board with columns representing work states (To Do, Doing, Done)",
    "id": 34
  },
  {
    "category": "Azure Boards",
    "title": "Scrum vs Kanban in Azure Boards?",
    "explanation": "- **Scrum**: Relies on strict time-boxed Sprints. Work is committed to for a 2-week period. The board resets every sprint. Great for feature-driven product development.\n- **Kanban**: Continuous flow. There are no strict sprints; work is continuously pulled from the backlog as capacity allows, heavily relying on WIP (Work In Progress) limits. Great for maintenance or support teams handling incoming tickets.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Scrum uses time-boxed sprints; Kanban is a continuous flow of work",
    "id": 35
  },
  {
    "category": "Azure Boards",
    "title": "What are Area Paths?",
    "explanation": "Area Paths allow you to group work items by logical product, component, or team boundaries. \nFor instance, if you have a massive project, you create Area Paths for `Database`, `Frontend`, and `Mobile`. Teams are configured to only see work items that are assigned to their specific Area Path.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A routing mechanism to group work items by product feature or component",
    "id": 36
  },
  {
    "category": "Azure Boards",
    "title": "What are Iteration Paths?",
    "explanation": "Iteration Paths allow you to group work items by time. \nThey map directly to Sprints. When you assign a User Story to Iteration `Sprint 24`, it officially becomes part of that sprint's backlog and will appear on the Sprint 24 Taskboard.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A routing mechanism to group work items into specific time-boxed Sprints",
    "id": 37
  },
  {
    "category": "Azure Boards",
    "title": "What is a Work Item Query?",
    "explanation": "A Query in Azure Boards is a highly customizable search filter used to extract specific lists of work items from the massive database.\nYou use a UI-based query builder to create filters like `Work Item Type = Bug AND State = Active AND Assigned To = @Me`. Queries are the backbone for creating custom Dashboards and charts.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A highly customizable search filter to find specific work items",
    "id": 38
  },
  {
    "category": "Azure Boards",
    "title": "What are Shared Queries?",
    "explanation": "By default, queries you create are 'My Queries' (visible only to you). \n'Shared Queries' are saved into a public folder accessible by the entire team. They are critical because custom Dashboard widgets (like Pie Charts or Burn-down charts) can ONLY be powered by Shared Queries.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Queries saved publicly so the entire team and Dashboard widgets can access them",
    "id": 39
  },
  {
    "category": "Azure Boards",
    "title": "How do you track sprint progress in Azure Boards?",
    "explanation": "Sprint progress is primarily tracked using two tools:\n1. **The Sprint Taskboard**: Developers move task cards from 'To Do' to 'Done'.\n2. **Burndown Chart**: A built-in analytical chart that compares the ideal trend line of work remaining against the actual hours remaining in the sprint. If the actual line stays below the ideal line, the team is on track.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Using the Sprint Taskboard and the Sprint Burndown chart",
    "id": 40
  },
  {
    "category": "Azure Repos & Git",
    "title": "What is Azure Repos?",
    "explanation": "Azure Repos is a set of version control tools provided by Azure DevOps that you can use to manage your code.\nIt supports two distinct types of version control systems:\n- **Git**: Distributed version control (the absolute industry standard).\n- **Team Foundation Version Control (TFVC)**: Centralized version control (legacy, mostly used by older enterprise projects).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Azure DevOps' version control service supporting Git and TFVC",
    "id": 41
  },
  {
    "category": "Azure Repos & Git",
    "title": "What is Git?",
    "explanation": "Git is a free, open-source distributed version control system designed to handle everything from small to massive projects with speed and efficiency.\nUnlike centralized systems, every developer in Git has a complete local copy (clone) of the entire repository history, meaning most operations can be performed offline without connecting to the central server.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A distributed version control system where everyone has a full history copy",
    "id": 42
  },
  {
    "category": "Azure Repos & Git",
    "title": "Git vs TFVC?",
    "explanation": "- **Git**: Distributed. Every developer has a full clone of the repo on their local machine. Commits are done locally. Branching is extremely lightweight and fast. It is the modern standard.\n- **TFVC (Team Foundation Version Control)**: Centralized. Developers have only one version of a file on their machine. To edit a file, they must 'check it out', locking it on the server so others cannot edit it concurrently. Branching is path-based and heavy.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Git is distributed and lightweight; TFVC is centralized and relies on file-locking",
    "id": 43
  },
  {
    "category": "Azure Repos & Git",
    "title": "What is a Git repository?",
    "explanation": "A Git repository (or 'repo') is a virtual storage space where your project's files, folders, and their complete revision history are stored. It contains all the commits, branches, and tags. Repositories can be hosted locally on a developer's machine or remotely on services like Azure Repos, GitHub, or GitLab.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A virtual storage space containing files and their complete revision history",
    "id": 44
  },
  {
    "category": "Azure Repos & Git",
    "title": "What is a branch?",
    "explanation": "A branch in Git is an independent line of development. It allows developers to isolate their work (like building a new feature or fixing a bug) without affecting the stable `main` codebase. Once the work on the branch is complete and tested, it can be merged back into the `main` branch.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "An independent, isolated line of development to work on features or fixes safely",
    "id": 45
  },
  {
    "category": "Azure Repos & Git",
    "title": "What is the difference between local and remote branches?",
    "explanation": "- **Local Branches**: Branches that exist only on your physical machine. You create them, commit to them, and switch between them entirely offline.\n- **Remote Branches**: Branches that live on the central server (e.g., Azure Repos). You use `git push` to upload a local branch to a remote branch so other team members can see it or pull it.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Local exists offline on your machine; Remote exists on the central server (Azure Repos)",
    "id": 46
  },
  {
    "category": "Azure Repos & Git",
    "title": "What is git clone?",
    "explanation": "`git clone` is the command used to create an exact copy of a remote repository on your local machine. It downloads all files, branches, and the entire commit history, and automatically sets up a remote connection (usually named `origin`) pointing back to the server.",
    "code": "git clone https://dev.azure.com/org/project/_git/repo",
    "example": "",
    "tip": "",
    "summary": "Downloads an exact copy of a remote repository to your local machine",
    "id": 47
  },
  {
    "category": "Azure Repos & Git",
    "title": "What is git fetch?",
    "explanation": "`git fetch` contacts the remote repository and downloads all new commits, branches, and tags that have been pushed by other developers since your last update. \nCrucially, it **does not merge** or modify your current working files. It only updates your local knowledge of the remote repository's state.",
    "code": "git fetch origin",
    "example": "",
    "tip": "",
    "summary": "Downloads new remote data without modifying your working files",
    "id": 48
  },
  {
    "category": "Azure Repos & Git",
    "title": "What is git pull?",
    "explanation": "`git pull` is a combination command. It first runs `git fetch` to download new data from the remote repository, and then immediately runs `git merge` to integrate those changes into your current active local branch.",
    "code": "git pull origin main",
    "example": "",
    "tip": "",
    "summary": "Downloads remote data and immediately merges it into your active branch",
    "id": 49
  },
  {
    "category": "Azure Repos & Git",
    "title": "git fetch vs git pull?",
    "explanation": "- **git fetch**: Safe. It only downloads data. It allows you to inspect what others have done before applying their changes to your code.\n- **git pull**: Aggressive. It downloads data and forcefully attempts to merge it into your working directory immediately. This can lead to unexpected merge conflicts if you have uncommitted local changes.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Fetch is safe and only downloads; Pull downloads and forcefully merges",
    "id": 50
  },
  {
    "category": "Azure Repos & Git",
    "title": "What is git push?",
    "explanation": "`git push` is the command used to upload your local commits and branches to a remote repository (like Azure Repos). This is how you share your completed work with the rest of the team so they can review it or pull it.",
    "code": "git push origin feature/login-page",
    "example": "",
    "tip": "",
    "summary": "Uploads local commits and branches to the remote repository",
    "id": 51
  },
  {
    "category": "Azure Repos & Git",
    "title": "What is git commit?",
    "explanation": "A commit in Git is a snapshot of your repository at a specific point in time. It permanently records the changes you made to files in your local database. Every commit has a unique alphanumeric hash (SHA-1), an author, a date, and a descriptive commit message.",
    "code": "git commit -m \"Fix typo in login screen\"",
    "example": "",
    "tip": "",
    "summary": "Saves a permanent snapshot of your file changes to the local repository",
    "id": 52
  },
  {
    "category": "Azure Repos & Git",
    "title": "What is git merge?",
    "explanation": "`git merge` integrates changes from one branch into another. \nFor example, merging a `feature` branch into the `main` branch combines the histories. A merge takes all the commits from the feature branch, applies them to the main branch, and creates a new 'merge commit' that ties both histories together.",
    "code": "git merge feature/login-page",
    "example": "",
    "tip": "",
    "summary": "Combines changes from one branch into another, creating a merge commit",
    "id": 53
  },
  {
    "category": "Azure Repos & Git",
    "title": "What is git rebase?",
    "explanation": "`git rebase` is an alternative to merging. Instead of creating a merge commit, it takes the commits from your feature branch and 'replays' them one-by-one onto the very tip of the target branch (like `main`).\nThis rewrites project history to create a perfectly linear commit graph without any ugly merge commit 'bubbles'.",
    "code": "git rebase main",
    "example": "",
    "tip": "Never rebase commits that have already been pushed to a public/shared remote branch. It will rewrite history and break your coworkers' local repositories.",
    "summary": "Replays commits on top of another branch to create a perfectly linear history",
    "id": 54
  },
  {
    "category": "Azure Repos & Git",
    "title": "Merge vs rebase?",
    "explanation": "- **Merge**: Preserves exact chronological history. Creates a 'merge commit' indicating when branches joined. Can result in a messy, spider-web-like commit graph on large teams.\n- **Rebase**: Rewrites history. Creates a clean, linear, easy-to-read commit graph. However, it is dangerous if used on shared public branches because it changes commit hashes.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Merge preserves true history but is messy; Rebase rewrites history for a clean linear graph",
    "id": 55
  },
  {
    "category": "Azure Repos & Git",
    "title": "What is a merge conflict?",
    "explanation": "A merge conflict occurs when Git attempts to merge two branches, but finds that the exact same line in the exact same file was modified differently on both branches (or a file was deleted on one branch and edited on the other). Git cannot safely determine which version to keep, so it pauses the merge and asks a human to resolve it.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Occurs when the same line of code is edited differently on two branches being merged",
    "id": 56
  },
  {
    "category": "Azure Repos & Git",
    "title": "How do you resolve a merge conflict?",
    "explanation": "When a conflict happens, Git injects conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) directly into the affected files.\nTo resolve it:\n1. Open the file in an IDE (like VS Code).\n2. Review the 'Current Change' vs 'Incoming Change'.\n3. Manually edit the file to keep the correct code and delete the conflict markers.\n4. Save the file, run `git add`, and then `git commit` to finalize the merge.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Manually edit the file to choose the correct code, remove markers, add, and commit",
    "id": 57
  },
  {
    "category": "Azure Repos & Git",
    "title": "What is a Pull Request?",
    "explanation": "A Pull Request (PR) is a formal request to merge a completed feature branch into a target branch (like `main`).\nIt acts as a collaboration gateway where team members can review the code diff, leave comments, require automated build validations, and ultimately approve or reject the merge. PRs are a feature of hosting platforms (Azure Repos, GitHub), not native Git itself.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A formal request on a hosting platform to review and merge code into the main branch",
    "id": 58
  },
  {
    "category": "Azure Repos & Git",
    "title": "What is the Pull Request workflow in Azure Repos?",
    "explanation": "1. Developer creates a local branch and writes code.\n2. Developer pushes the branch to Azure Repos.\n3. Developer opens a Pull Request via the Azure DevOps UI, targeting `main`.\n4. Branch policies trigger automated CI builds to ensure the code compiles.\n5. Team members review the code, leave comments, and hit 'Approve'.\n6. Once all policies pass, the developer clicks 'Complete' to merge the code into `main`.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Push branch -> Open PR -> Auto Builds Trigger -> Peers Review -> Approve -> Merge",
    "id": 59
  },
  {
    "category": "Azure Repos & Git",
    "title": "What are branch policies?",
    "explanation": "Branch Policies in Azure Repos are strict rules applied to critical branches (like `main` or `release`). They prevent developers from pushing code directly to the branch and enforce quality standards before a Pull Request is allowed to be merged.",
    "code": "",
    "example": "",
    "tip": "Branch policies are how you enforce DevOps governance. Mentioning them is highly valued by interviewers.",
    "summary": "Strict rules enforcing quality and review standards before code can be merged",
    "id": 60
  },
  {
    "category": "Azure Repos & Git",
    "title": "How do you enforce code reviews?",
    "explanation": "In Azure Repos, you enforce code reviews by applying a Branch Policy to the `main` branch called **'Require a minimum number of reviewers'**. \nYou set the minimum number (usually 1 or 2). Until the required number of distinct team members have reviewed the PR and explicitly clicked 'Approve', the 'Complete Merge' button remains disabled.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "By enabling the 'Require a minimum number of reviewers' branch policy",
    "id": 61
  },
  {
    "category": "Azure Repos & Git",
    "title": "How do you require minimum reviewers?",
    "explanation": "Navigate to Repos -> Branches. Click the three dots next to `main` -> Branch Policies. Turn on 'Require a minimum number of reviewers'. Set the count to 1 or 2. You can also optionally check the box 'Allow requestors to approve their own changes' (though this is typically discouraged).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Configured in Branch Policies under the 'Require reviewers' setting",
    "id": 62
  },
  {
    "category": "Azure Repos & Git",
    "title": "How do you prevent direct commits to the main branch?",
    "explanation": "The moment you apply *any* Branch Policy to the `main` branch (like requiring reviewers or build validation), Azure Repos automatically locks the branch. Direct `git push origin main` commands are completely rejected. Developers are strictly forced to create a new branch and open a Pull Request.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Applying any Branch Policy automatically locks the branch from direct pushes",
    "id": 63
  },
  {
    "category": "Azure Repos & Git",
    "title": "What are required build validations?",
    "explanation": "Build Validation is a specific Branch Policy that links an Azure CI Pipeline to Pull Requests. \nWhen a developer opens a PR, Azure DevOps automatically queues the linked CI pipeline to build the PR's code and run unit tests. The PR cannot be merged unless the CI pipeline finishes with a 'Success' status, guaranteeing broken code never reaches `main`.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A policy requiring an automated CI pipeline to succeed before a PR can be merged",
    "id": 64
  },
  {
    "category": "Azure Repos & Git",
    "title": "What are status checks in Pull Requests?",
    "explanation": "Status checks allow external services to block a Pull Request. \nFor example, if you use SonarQube for static code analysis, SonarQube can post a status back to the PR. If the code has major security vulnerabilities, the SonarQube status check fails, which in turn blocks the Azure DevOps PR from being merged.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "External validations (like SonarQube) that must pass before a PR can merge",
    "id": 65
  },
  {
    "category": "Azure Repos & Git",
    "title": "What is a Git tag?",
    "explanation": "A tag is a permanent, immutable pointer to a specific commit in the repository history. Unlike branches, tags do not move when new commits are made. They are almost exclusively used to mark specific release points, such as version `v1.0.0` or `v2.3.1`.",
    "code": "git tag -a v1.0.0 -m \"Release version 1.0.0\"\ngit push origin v1.0.0",
    "example": "",
    "tip": "",
    "summary": "An immutable pointer to a specific commit, usually marking a release version",
    "id": 66
  },
  {
    "category": "Azure Repos & Git",
    "title": "What is Git branching strategy?",
    "explanation": "A branching strategy is a strict set of rules a team agrees upon regarding how branches are named, when they are created, and how they merge back together. It dictates the workflow for pushing new features, handling hotfixes, and preparing production releases without causing merge chaos.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A team agreement on how branches are created, named, and merged to prevent chaos",
    "id": 67
  },
  {
    "category": "Azure Repos & Git",
    "title": "What is GitFlow?",
    "explanation": "GitFlow is a strict, complex branching strategy. It uses two long-lived branches:\n1. `main`: Contains strictly production-ready code. Commits here must be tagged with version numbers.\n2. `develop`: The active integration branch.\nFeatures are branched off `develop`. Releases are branched off `develop` to `release/*` branches. Emergency fixes branch off `main` into `hotfix/*` branches.",
    "code": "",
    "example": "",
    "tip": "GitFlow is considered legacy by many modern DevOps engineers because it prevents continuous deployment due to its complexity.",
    "summary": "A strict strategy using main, develop, feature, release, and hotfix branches",
    "id": 68
  },
  {
    "category": "Azure Repos & Git",
    "title": "GitFlow vs trunk-based development?",
    "explanation": "- **GitFlow**: Multiple long-lived branches (`main`, `develop`, `release`). High isolation, but results in massive 'merge hell' when bringing large features together. Hard to automate CI/CD perfectly.\n- **Trunk-Based Development**: The modern standard. There is only ONE long-lived branch (`main`). Developers create very short-lived feature branches, integrate them into `main` daily via small PRs, and rely heavily on feature flags. Perfect for Continuous Deployment.",
    "code": "",
    "example": "",
    "tip": "Always advocate for Trunk-based development in modern DevOps interviews.",
    "summary": "GitFlow is complex with multiple branches; Trunk-based integrates to main daily",
    "id": 69
  },
  {
    "category": "Azure Repos & Git",
    "title": "What branching strategy would you recommend for a .NET application?",
    "explanation": "I would recommend **Trunk-Based Development** combined with Azure DevOps Branch Policies.\nAll developers branch directly off `main` to create short-lived feature branches. They merge back to `main` via Pull Requests. The PR enforces a CI build and requires at least one peer review. Once merged to `main`, an automated CD pipeline immediately deploys the artifact to the QA environment.",
    "code": "",
    "example": "",
    "tip": "Explain the full lifecycle: branch off main -> PR -> branch policy build -> merge -> auto-deploy to QA.",
    "summary": "Trunk-based development with strict PR branch policies validating every merge",
    "id": 70
  },
  {
    "category": "Azure Pipelines Fundamentals",
    "title": "What is Azure Pipelines?",
    "explanation": "Azure Pipelines is a cloud service that provides Continuous Integration (CI) and Continuous Delivery (CD). \nIt automatically builds, tests, and deploys your code to any platform or cloud (Azure, AWS, GCP). It supports multiple languages (Node.js, Python, Java, PHP, Ruby, C/C++, .NET, Android, iOS) and works with any Git repository, including GitHub, Bitbucket, and Azure Repos.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A cloud service for automated CI/CD that supports any language and platform",
    "id": 71
  },
  {
    "category": "Azure Pipelines Fundamentals",
    "title": "What is a CI pipeline?",
    "explanation": "A Continuous Integration (CI) pipeline is an automated workflow that runs every time a developer commits code to the repository. \nIts primary responsibilities are:\n1. Downloading the source code.\n2. Restoring dependencies (e.g., `npm install`, `dotnet restore`).\n3. Compiling the code.\n4. Running automated unit and integration tests.\n5. Packaging the compiled code into an Artifact.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "An automated workflow that builds code and runs tests upon every commit",
    "id": 72
  },
  {
    "category": "Azure Pipelines Fundamentals",
    "title": "What is a CD pipeline?",
    "explanation": "A Continuous Delivery/Deployment (CD) pipeline takes over where the CI pipeline finishes. \nIt takes the immutable, tested Artifact produced by the CI pipeline and deploys it to a target hosting environment (like a Dev server, QA environment, or Production cloud service). It handles server configurations, database migrations, and release approvals.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "An automated workflow that deploys the CI artifact to target environments",
    "id": 73
  },
  {
    "category": "Azure Pipelines Fundamentals",
    "title": "What is a build pipeline?",
    "explanation": "In the classic Azure DevOps terminology, a 'Build Pipeline' is synonymous with a CI Pipeline. It is responsible solely for checking out code, building it, testing it, and producing a 'Drop' (the compiled artifact).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "The classic Azure DevOps term for a CI Pipeline",
    "id": 74
  },
  {
    "category": "Azure Pipelines Fundamentals",
    "title": "What is a release pipeline?",
    "explanation": "In classic Azure DevOps terminology, a 'Release Pipeline' is synonymous with a CD Pipeline. It consumes the output of a Build Pipeline and pushes it through multiple environments (Stages) like Dev -> Test -> Prod, enforcing manual approvals along the way.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "The classic Azure DevOps term for a CD Pipeline handling multi-stage deployments",
    "id": 75
  },
  {
    "category": "Azure Pipelines Fundamentals",
    "title": "YAML pipeline vs Classic pipeline?",
    "explanation": "- **Classic Pipeline**: Created using a drag-and-drop web UI editor. The pipeline configuration is stored hidden in the Azure DevOps database. It is largely considered legacy.\n- **YAML Pipeline**: Created by writing code (Infrastructure as Code). The pipeline definition is stored as a `.yml` file directly inside the source code repository alongside the application code. It provides version control, peer reviews via PRs, and is the modern standard.",
    "code": "",
    "example": "",
    "tip": "Always strongly advocate for YAML pipelines in interviews.",
    "summary": "Classic is legacy UI-based; YAML is modern code-based and stored in the repo",
    "id": 76
  },
  {
    "category": "Azure Pipelines Fundamentals",
    "title": "What is a YAML pipeline?",
    "explanation": "A YAML pipeline is a CI/CD process defined entirely in a YAML text file (usually named `azure-pipelines.yml`). Because the pipeline is defined as code and stored in the repository, any changes to the build process require a commit and can be peer-reviewed, ensuring the pipeline's history is tracked exactly like application code.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A CI/CD process defined in a text file and stored in source control",
    "id": 77
  },
  {
    "category": "Azure Pipelines Fundamentals",
    "title": "What is azure-pipelines.yml?",
    "explanation": "`azure-pipelines.yml` is the default filename that Azure DevOps looks for in the root of your repository to define a YAML pipeline. When you create a new pipeline in Azure DevOps and point it to a repo containing this file, it will automatically parse it and set up the CI/CD workflow.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "The default configuration file for defining an Azure Pipeline",
    "id": 78
  },
  {
    "category": "Azure Pipelines Fundamentals",
    "title": "What are stages in Azure Pipelines?",
    "explanation": "Stages are the highest-level logical boundaries in a pipeline, usually representing distinct phases of a software delivery lifecycle. \nFor example, a complete CI/CD pipeline might have three stages: `Build`, `DeployToQA`, and `DeployToProd`. Stages run sequentially by default and can have manual approval gates between them.",
    "code": "stages:\n- stage: Build\n- stage: DeployToQA",
    "example": "",
    "tip": "",
    "summary": "Major logical divisions in a pipeline, often representing environments",
    "id": 79
  },
  {
    "category": "Azure Pipelines Fundamentals",
    "title": "What are jobs?",
    "explanation": "A Job is a collection of steps that run sequentially on a single Agent machine. \nEvery Stage contains at least one Job. Jobs within the *same* Stage run in parallel by default across multiple Agents. If a Job fails, the entire Stage typically fails.",
    "code": "jobs:\n- job: RunTests\n  pool: { vmImage: 'ubuntu-latest' }",
    "example": "",
    "tip": "Remember: Jobs define *where* the work runs (the Agent Pool).",
    "summary": "A collection of steps executed on a single Agent machine",
    "id": 80
  },
  {
    "category": "Azure Pipelines Fundamentals",
    "title": "What are steps?",
    "explanation": "Steps are the smallest building blocks of a pipeline. They represent the actual linear sequence of operations that happen inside a Job. A step can be a predefined Task, a raw script (Bash/PowerShell), or a reference to a Template. Steps within a job always run sequentially on the exact same agent.",
    "code": "steps:\n- script: echo \"Hello World\"\n- task: NodeTool@0",
    "example": "",
    "tip": "",
    "summary": "The linear sequence of operations executed sequentially inside a Job",
    "id": 81
  },
  {
    "category": "Azure Pipelines Fundamentals",
    "title": "What are tasks?",
    "explanation": "A Task is a pre-packaged, reusable script provided by Microsoft or third-party marketplace publishers. Instead of writing 50 lines of complex PowerShell to zip a folder and upload it to Azure Storage, you simply use the pre-built `AzureFileCopy@4` task and provide it a few parameters.",
    "code": "- task: DotNetCoreCLI@2\n  inputs:\n    command: 'build'",
    "example": "",
    "tip": "",
    "summary": "Pre-packaged, reusable scripts that simplify complex pipeline operations",
    "id": 82
  },
  {
    "category": "Azure Pipelines Fundamentals",
    "title": "What is a pipeline trigger?",
    "explanation": "A trigger defines exactly *when* and *why* a pipeline should automatically start running. \nThe most common type is a CI trigger (Push trigger), which tells Azure DevOps to run the pipeline every time a commit is pushed to a specific branch (like `main`).",
    "code": "trigger:\n  branches:\n    include:\n      - main",
    "example": "",
    "tip": "",
    "summary": "An event configuration that automatically starts a pipeline execution",
    "id": 83
  },
  {
    "category": "Azure Pipelines Fundamentals",
    "title": "What is a scheduled trigger?",
    "explanation": "A scheduled trigger (or cron trigger) starts a pipeline at a specific time of day, regardless of whether code has changed. It uses standard POSIX cron syntax.\nThis is often used for running massive, long-running End-to-End integration test suites overnight when server load is low.",
    "code": "schedules:\n- cron: \"0 0 * * *\"\n  displayName: Daily midnight build\n  branches:\n    include:\n    - main",
    "example": "",
    "tip": "",
    "summary": "Starts a pipeline automatically at specific times using cron syntax",
    "id": 84
  },
  {
    "category": "Azure Pipelines Fundamentals",
    "title": "What is a manual pipeline trigger?",
    "explanation": "To prevent a pipeline from ever running automatically (disabling CI triggers), you explicitly set the trigger to `none`. The pipeline will then only run when a user manually clicks the 'Run Pipeline' button in the Azure DevOps UI.",
    "code": "trigger: none",
    "example": "",
    "tip": "",
    "summary": "Disables automatic triggers so the pipeline only runs when manually started",
    "id": 85
  },
  {
    "category": "Azure Pipelines Fundamentals",
    "title": "What is a pipeline variable?",
    "explanation": "A pipeline variable provides a way to store data that you want to pass into your pipeline steps. You can define variables directly in the YAML file to avoid hardcoding values like file paths or environment names. Variables are accessed using macro syntax: `$(VariableName)`.",
    "code": "variables:\n  buildConfiguration: 'Release'\n\nsteps:\n- script: dotnet build -c $(buildConfiguration)",
    "example": "",
    "tip": "",
    "summary": "Key-value pairs used to avoid hardcoding values in pipeline scripts",
    "id": 86
  },
  {
    "category": "Azure Pipelines Fundamentals",
    "title": "What is a variable group?",
    "explanation": "A Variable Group is a centralized vault stored securely in the Azure DevOps Library UI, rather than in the YAML file. \nVariable groups allow you to share the exact same set of variables (like API endpoints or connection strings) across dozens of different pipelines. They can also securely link to Azure Key Vault to fetch live secrets.",
    "code": "variables:\n- group: my-production-variables",
    "example": "",
    "tip": "",
    "summary": "A centralized collection of variables that can be shared across multiple pipelines",
    "id": 87
  },
  {
    "category": "Azure Pipelines Fundamentals",
    "title": "What are pipeline parameters?",
    "explanation": "Parameters (unlike variables) are evaluated at *compile time*, before the pipeline even starts running. They are primarily used to allow a user to select options from a dropdown menu when they manually click 'Run Pipeline', or to pass dynamic configurations into reusable YAML Templates.",
    "code": "parameters:\n- name: environment\n  type: string\n  default: 'dev'\n  values: ['dev', 'qa', 'prod']",
    "example": "",
    "tip": "",
    "summary": "Compile-time values used for user-input selections and template configurations",
    "id": 88
  },
  {
    "category": "Azure Pipelines Fundamentals",
    "title": "Variable vs parameter?",
    "explanation": "- **Parameter**: Evaluated at compile-time (before the pipeline runs). Strong typing (string, boolean). Can be used to conditionally inject entire stages or jobs. Syntax is `${{ parameters.name }}`.\n- **Variable**: Evaluated at runtime (during the run). Loosely typed strings. Can be modified dynamically by a script *during* the pipeline execution. Syntax is `$(variableName)`.",
    "code": "",
    "example": "",
    "tip": "This is a very common advanced question. Remember: Parameters = Compile time. Variables = Run time.",
    "summary": "Parameters are compile-time and strictly typed; Variables are runtime and dynamic",
    "id": 89
  },
  {
    "category": "Azure Pipelines Fundamentals",
    "title": "What are pipeline secrets?",
    "explanation": "Pipeline secrets are encrypted variables (like passwords, API keys, and connection strings). When defined in the Azure DevOps UI, their values are masked with `***` in the logs. They are not automatically mapped as environment variables in scripts; they must be explicitly passed in as inputs to tasks to prevent accidental leakage.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Encrypted variables that are masked in logs and must be explicitly mapped to tasks",
    "id": 90
  },
  {
    "category": "Azure Pipelines Fundamentals",
    "title": "How do you securely store passwords and connection strings?",
    "explanation": "You should never store secrets in plain text in the YAML file. The best practice is:\n1. Create a **Variable Group** in the Azure DevOps Library.\n2. Link the Variable Group directly to an **Azure Key Vault** using a Service Connection.\n3. Azure DevOps will fetch the secrets securely from Azure Key Vault at runtime, ensuring no human ever sees the raw passwords.",
    "code": "",
    "example": "",
    "tip": "Always mention Azure Key Vault integration for enterprise security questions.",
    "summary": "By linking Variable Groups to Azure Key Vault",
    "id": 91
  },
  {
    "category": "Azure Pipelines Fundamentals",
    "title": "What is a pipeline artifact?",
    "explanation": "A Pipeline Artifact is the compiled, packaged, deployable output produced by a CI build stage (like a `.zip` file of a web app, or a `.dll` file). \nThe CI stage uses the `PublishPipelineArtifact` task to upload this file to Azure DevOps storage so that subsequent CD deployment stages can download and deploy it.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "The compiled, deployable file produced by a build and uploaded for deployment",
    "id": 92
  },
  {
    "category": "Azure Pipelines Fundamentals",
    "title": "What is the difference between build artifacts and pipeline artifacts?",
    "explanation": "- **Build Artifacts** (`PublishBuildArtifacts@1`): The older, legacy task. Slower, and primarily used in classic pipelines.\n- **Pipeline Artifacts** (`PublishPipelineArtifact@1`): The modern, much faster version. It uses deduplication and is heavily optimized for YAML pipelines and multi-stage CI/CD. Always use Pipeline Artifacts for new projects.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Pipeline Artifacts are the modern, faster, deduplicated version of legacy Build Artifacts",
    "id": 93
  },
  {
    "category": "Azure Pipelines Fundamentals",
    "title": "What are pipeline environments?",
    "explanation": "An Environment is a logical target that your pipeline deploys to (e.g., `Production`, `QA`). \nDefining an Environment in Azure DevOps gives you access to powerful CD features like deployment history, resource tracking, and most importantly, **Manual Approvals and Checks**, which pause the pipeline until a human approves the deployment.",
    "code": "jobs:\n- deployment: DeployWeb\n  environment: 'Production'",
    "example": "",
    "tip": "",
    "summary": "Logical deployment targets that enable manual approvals and deployment history",
    "id": 94
  },
  {
    "category": "Azure Pipelines Fundamentals",
    "title": "How do you create a multi-stage CI/CD pipeline?",
    "explanation": "You define multiple `stage` blocks in a single YAML file.\nThe first stage (Build) compiles the code and publishes a Pipeline Artifact. \nThe subsequent stages (DeployQA, DeployProd) define `dependsOn` to ensure they run sequentially. They use a `deployment` job which automatically downloads the artifact and deploys it to an `environment`.",
    "code": "stages:\n- stage: Build\n- stage: DeployQA\n  dependsOn: Build\n- stage: DeployProd\n  dependsOn: DeployQA",
    "example": "",
    "tip": "",
    "summary": "By defining sequential stages for Build and Deploy within a single YAML file",
    "id": 95
  },
  {
    "category": "YAML Pipelines",
    "title": "What is YAML?",
    "explanation": "YAML (YAML Ain't Markup Language) is a human-readable data serialization standard. It is extensively used for configuration files. In Azure DevOps (and Kubernetes, Docker Compose, GitHub Actions), it relies heavily on indentation (spaces, not tabs) to denote structure and hierarchy.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A human-readable configuration language that relies on indentation for structure",
    "id": 96
  },
  {
    "category": "YAML Pipelines",
    "title": "What is the basic structure of an Azure DevOps YAML pipeline?",
    "explanation": "The strict hierarchical structure from top to bottom is:\n1. `trigger`: When it runs.\n2. `pool`: Where it runs (Agent Pool).\n3. `variables`: Global variables.\n4. `stages`: Logical divisions.\n5. `jobs`: Execution units within a stage.\n6. `steps`: The individual tasks/scripts that do the work.",
    "code": "",
    "example": "",
    "tip": "Memorize this hierarchy: trigger -> pool -> variables -> stages -> jobs -> steps.",
    "summary": "Trigger -> Pool -> Variables -> Stages -> Jobs -> Steps",
    "id": 97
  },
  {
    "category": "YAML Pipelines",
    "title": "What is the trigger section?",
    "explanation": "The `trigger` section defines the Continuous Integration conditions. It specifies which branch updates should automatically queue the pipeline. You can include or exclude specific branches, file paths, or even specific tags.",
    "code": "trigger:\n  branches:\n    include: [ main, release/* ]\n  paths:\n    exclude: [ docs/* ]",
    "example": "",
    "tip": "",
    "summary": "Defines the branch and path conditions that automatically start a CI build",
    "id": 98
  },
  {
    "category": "YAML Pipelines",
    "title": "What is the pr trigger?",
    "explanation": "The `pr` trigger defines Pull Request validation behavior. It dictates which target branches should trigger an automated build when a developer creates a PR against them. This is how Azure DevOps enforces build validation policies.",
    "code": "pr:\n  branches:\n    include: [ main ]",
    "example": "",
    "tip": "",
    "summary": "Defines which Pull Requests automatically trigger a validation build",
    "id": 99
  },
  {
    "category": "YAML Pipelines",
    "title": "What is a stage?",
    "explanation": "A `stage` is an independent phase of the pipeline. Stages can run sequentially (using `dependsOn`) or in parallel. By organizing a pipeline into stages (e.g., Build, Test, Deploy), you can easily view the overall progress in the UI and replay specific failed stages without re-running the entire pipeline.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "An independent, replayable phase of the pipeline (like Build or Deploy)",
    "id": 100
  },
  {
    "category": "YAML Pipelines",
    "title": "What is a job?",
    "explanation": "A `job` is a collection of steps that run consecutively on the exact same agent. If you have two jobs in a stage, Azure DevOps will try to grab two separate agents and run them simultaneously (in parallel). Therefore, files created in Job A cannot be seen by Job B unless they are published as Artifacts.",
    "code": "",
    "example": "",
    "tip": "Understanding that Jobs run in parallel on different agents is critical for debugging missing file errors.",
    "summary": "A collection of steps running on a single agent; multiple jobs run in parallel",
    "id": 101
  },
  {
    "category": "YAML Pipelines",
    "title": "What is a deployment job?",
    "explanation": "A `deployment` job is a special type of job specifically designed for CD. \nUnlike a normal job, it integrates directly with Azure DevOps Environments (enabling approval gates). Furthermore, by default, a deployment job automatically injects a step to download all pipeline artifacts, saving you from writing the download task manually.",
    "code": "jobs:\n- deployment: DeployProd\n  environment: 'production'\n  strategy:\n    runOnce:\n      deploy:\n        steps:\n        - script: echo Deploying...",
    "example": "",
    "tip": "",
    "summary": "A specialized job that connects to Environments and automatically downloads artifacts",
    "id": 102
  },
  {
    "category": "YAML Pipelines",
    "title": "What is a step?",
    "explanation": "A `step` is a single action within a job. It can be a command-line script, a PowerShell script, or a pre-packaged Task (like `DotNetCoreCLI@2`). Steps are guaranteed to run sequentially, one after the other, on the same agent machine, sharing the exact same file system workspace.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A single action, script, or task executed sequentially within a job",
    "id": 103
  },
  {
    "category": "YAML Pipelines",
    "title": "What is a task?",
    "explanation": "A `task` is a pre-written piece of logic provided by Azure DevOps. Instead of writing complex scripts to interact with cloud APIs, tasks encapsulate that logic into YAML inputs. Examples include `Docker@2` for building images, or `AzureRmWebAppDeployment@4` for deploying to Azure.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A pre-written, reusable piece of logic with predefined inputs",
    "id": 104
  },
  {
    "category": "YAML Pipelines",
    "title": "What is a script step?",
    "explanation": "The `script` keyword is a shortcut for the Command Line task. It runs raw bash commands on Linux/macOS agents, or cmd commands on Windows agents. It is the most universal and portable way to execute custom logic in a pipeline.",
    "code": "- script: |\n    echo \"Starting build...\"\n    npm ci\n    npm run build\n  displayName: 'Build Frontend'",
    "example": "",
    "tip": "",
    "summary": "A step that executes raw bash or cmd shell commands",
    "id": 105
  },
  {
    "category": "YAML Pipelines",
    "title": "What is a template in YAML?",
    "explanation": "A Template is a separate YAML file that contains reusable pipeline logic. You can extract common steps, jobs, or even entire stages into a template file, and then reference (`include`) that template in dozens of different application pipelines. This promotes DRY (Don't Repeat Yourself) principles in DevOps.",
    "code": "# In main pipeline:\nsteps:\n- template: templates/npm-build-steps.yml",
    "example": "",
    "tip": "Templates are the key to Enterprise CI/CD architecture.",
    "summary": "A separate YAML file containing reusable logic to prevent code duplication",
    "id": 106
  },
  {
    "category": "YAML Pipelines",
    "title": "Why should YAML templates be used?",
    "explanation": "In an enterprise with 50 microservices, writing 50 identical CI pipelines is a maintenance nightmare. If security requirements change, you'd have to update 50 files. \nBy using templates, you define the 'standard build process' once in a central template repository. All 50 microservices simply reference the template. Updating the template instantly updates the process for all 50 services.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "To enforce standardized, central processes and prevent maintenance nightmares across many projects",
    "id": 107
  },
  {
    "category": "YAML Pipelines",
    "title": "What are reusable YAML templates?",
    "explanation": "Reusable templates can define `steps`, `jobs`, `stages`, or `variables`. They can be stored in the same repository, or crucially, in an entirely different repository dedicated just to DevOps configurations. The calling pipeline simply checks out the DevOps repository and references the template path.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Templates defining steps, jobs, or stages that can be shared across different repositories",
    "id": 108
  },
  {
    "category": "YAML Pipelines",
    "title": "What are template parameters?",
    "explanation": "To make templates truly reusable, they accept parameters. For example, a generic 'Deploy to Web App' template needs to know *which* Web App to deploy to. The calling pipeline passes the specific App Name as a parameter to the template.",
    "code": "# template.yml expects a parameter:\nparameters:\n- name: appName\n\n# main.yml passes it:\n- template: template.yml\n  parameters:\n    appName: 'my-frontend-app'",
    "example": "",
    "tip": "",
    "summary": "Variables passed into a template to customize its behavior for specific applications",
    "id": 109
  },
  {
    "category": "YAML Pipelines",
    "title": "What are runtime expressions?",
    "explanation": "Runtime expressions `$(variableName)` are evaluated *while the pipeline is actively running on the agent*. They are used for values that might change dynamically during execution (like a timestamp generated by a script, or a value fetched from an API).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Expressions `$(...)` evaluated dynamically while the pipeline is executing",
    "id": 110
  },
  {
    "category": "YAML Pipelines",
    "title": "What are compile-time expressions?",
    "explanation": "Compile-time expressions `${{ expression }}` are evaluated *before the pipeline starts*, during the initial YAML parsing phase by Azure DevOps. They are used for template parameters, IF conditions that completely add or remove jobs from the pipeline structure, and loop iterations.",
    "code": "${{ if eq(parameters.deployProd, true) }}:\n  - stage: Production",
    "example": "",
    "tip": "",
    "summary": "Expressions `${{ ... }}` evaluated during YAML parsing to determine pipeline structure",
    "id": 111
  },
  {
    "category": "YAML Pipelines",
    "title": "What is the difference between $() and ${{ }}?",
    "explanation": "- **$()** is the runtime macro syntax. Azure DevOps simply passes it to the Agent, and the Agent replaces it with the variable's value right before the script runs.\n- **${{ }}** is the compile-time expression syntax. Azure DevOps evaluates it before the pipeline even launches, meaning it can be used to alter the actual YAML structure (like inserting conditional steps).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "$() is evaluated at runtime by the Agent; ${{ }} is evaluated at compile-time by Azure DevOps",
    "id": 112
  },
  {
    "category": "YAML Pipelines",
    "title": "What is $[] in Azure Pipelines?",
    "explanation": "`$[]` is a specialized runtime expression syntax used to define variable values that depend on the evaluation of a logical condition during execution. It is often used to map outputs from one job to variables in another job.",
    "code": "variables:\n  isMain: $[eq(variables['Build.SourceBranch'], 'refs/heads/main')]",
    "example": "",
    "tip": "",
    "summary": "A runtime condition expression used to evaluate logical statements into variables",
    "id": 113
  },
  {
    "category": "YAML Pipelines",
    "title": "How do you define conditions in YAML?",
    "explanation": "You use the `condition` keyword. By default, a step or job only runs if all previous steps/jobs succeeded. You can override this to run based on specific logic, such as only running a deployment job if the branch is `main`.",
    "code": "jobs:\n- job: Deploy\n  condition: and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/main'))",
    "example": "",
    "tip": "",
    "summary": "Using the `condition` keyword with logical functions like `and()`, `eq()`, and `succeeded()`",
    "id": 114
  },
  {
    "category": "YAML Pipelines",
    "title": "How do you run a stage only when the previous stage succeeds?",
    "explanation": "This is the default behavior in Azure Pipelines! As long as you define the sequence using the `dependsOn` keyword, a stage will automatically be skipped if the stage it depends on fails. You can explicitly reinforce it using `condition: succeeded()`.",
    "code": "- stage: QA\n  dependsOn: Build\n  condition: succeeded()",
    "example": "",
    "tip": "",
    "summary": "It is the default behavior when using the `dependsOn` keyword",
    "id": 115
  },
  {
    "category": "YAML Pipelines",
    "title": "How do you run a pipeline only for a specific branch?",
    "explanation": "You configure the `trigger` section at the top of the YAML file to `include` only the specific branch you want, and optionally `exclude` others.",
    "code": "trigger:\n  branches:\n    include:\n    - release/*\n    exclude:\n    - main",
    "example": "",
    "tip": "",
    "summary": "By configuring the `trigger.branches.include` array in the YAML file",
    "id": 116
  },
  {
    "category": "YAML Pipelines",
    "title": "How do you define environment-specific variables?",
    "explanation": "The cleanest way is to create multiple Variable Groups in the Azure DevOps Library (e.g., `app-vars-dev`, `app-vars-prod`). \nThen, in your YAML, you map the variable group conditionally at the stage level based on the environment being deployed.",
    "code": "- stage: DeployDev\n  variables:\n  - group: app-vars-dev",
    "example": "",
    "tip": "",
    "summary": "By referencing different Variable Groups at the Stage level",
    "id": 117
  },
  {
    "category": "YAML Pipelines",
    "title": "How do you create reusable CI/CD templates?",
    "explanation": "1. Create a dedicated Git repository for DevOps templates (e.g., `pipeline-templates`).\n2. Write a parameterized `ci-template.yml` file.\n3. In your application repository's YAML file, declare a `resources` block connecting to the templates repository.\n4. Use the `template` keyword referencing the template file `@` the resource name.",
    "code": "resources:\n  repositories:\n    - repository: templates\n      type: git\n      name: pipeline-templates\n\njobs:\n- template: ci-template.yml@templates",
    "example": "",
    "tip": "",
    "summary": "Store templates in a dedicated repo, import them using `resources`, and reference them with `@`",
    "id": 118
  },
  {
    "category": "YAML Pipelines",
    "title": "How do you pass output variables between jobs?",
    "explanation": "Passing variables between jobs (which run on different agents) requires a specific workflow:\n1. In Job A, define a step that sets the output variable using a special logging command: `echo \"##vso[task.setvariable variable=myVar;isOutput=true]myValue\"`\n2. Give the step a `name` (e.g., `ProduceVar`).\n3. In Job B, explicitly declare `dependsOn: JobA`.\n4. In Job B's variables, map the output using dependency syntax: `$[ dependencies.JobA.outputs['ProduceVar.myVar'] ]`.",
    "code": "",
    "example": "",
    "tip": "This syntax is notoriously tricky. Mentioning `isOutput=true` and `dependencies.` shows deep expertise.",
    "summary": "Set variable with `isOutput=true` in Job A, and map it using `dependencies.JobA.outputs` in Job B",
    "id": 119
  },
  {
    "category": "YAML Pipelines",
    "title": "How would you design a reusable enterprise YAML pipeline?",
    "explanation": "I would design a heavily templated architecture. \n1. **Core Templates**: A central repo containing generic templates (`build-dotnet.yml`, `deploy-azure-webapp.yml`).\n2. **App Pipelines**: Individual app repos contain a tiny `azure-pipelines.yml` that only defines parameters (App Name, .NET version) and calls the central templates.\n3. **Variable Groups**: Tied to Azure Key Vault for environment secrets.\n4. **Environments**: Used for PROD to enforce manual approval gates from management.",
    "code": "",
    "example": "",
    "tip": "This is a Senior DevOps Architect answer. Emphasize centralization and security.",
    "summary": "Centralized template repository, tiny app pipelines passing parameters, and Key Vault integration",
    "id": 120
  },
  {
    "category": "CI/CD & Build Automation",
    "title": "What is Continuous Integration?",
    "explanation": "Continuous Integration (CI) is a DevOps practice where developers frequently merge their code changes into a central repository (like the `main` branch). \nEvery merge automatically triggers a build pipeline. The pipeline compiles the code and runs automated unit tests to ensure the new code hasn't broken the application. The primary goal is to find and fix bugs faster, improve software quality, and reduce the time it takes to validate and release new updates.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Automated building and testing of code every time a developer commits",
    "id": 121
  },
  {
    "category": "CI/CD & Build Automation",
    "title": "What is Continuous Delivery?",
    "explanation": "Continuous Delivery (CD) is the logical extension of CI. After the code is successfully built and tested, it is automatically deployed to staging or pre-production environments. \nHowever, the crucial distinction is that the final deployment to Production is **triggered manually**. A human must click an 'Approve' button. This ensures business leaders have control over exactly when new features go live.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Automated deployment to staging, but requires manual human approval for Production",
    "id": 122
  },
  {
    "category": "CI/CD & Build Automation",
    "title": "What is Continuous Deployment?",
    "explanation": "Continuous Deployment goes one step further than Continuous Delivery. \nIn this model, every change that passes all stages of your production pipeline (CI builds, automated tests, integration tests) is released to your customers **automatically**, with absolutely no human intervention. It relies on extremely robust automated testing.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Fully automated deployment to Production with zero human intervention",
    "id": 123
  },
  {
    "category": "CI/CD & Build Automation",
    "title": "What is the difference between Continuous Delivery and Continuous Deployment?",
    "explanation": "The difference is exactly one click.\n- **Continuous Delivery**: Has a manual approval gate before production.\n- **Continuous Deployment**: Deploys to production automatically the second tests pass.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Delivery has a manual approval gate for Prod; Deployment is fully automatic",
    "id": 124
  },
  {
    "category": "CI/CD & Build Automation",
    "title": "What should happen during a CI pipeline?",
    "explanation": "A standard CI pipeline should:\n1. Check out the source code.\n2. Restore packages/dependencies (NuGet, npm).\n3. Compile the code.\n4. Run Unit Tests.\n5. Run Code Quality/Security checks (SonarQube).\n6. Publish Test and Coverage Results.\n7. Package the compiled application into a `.zip` or container image.\n8. Publish the Pipeline Artifact.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Checkout -> Restore -> Build -> Test -> Analyze -> Package -> Publish Artifact",
    "id": 125
  },
  {
    "category": "CI/CD & Build Automation",
    "title": "What should happen during a CD pipeline?",
    "explanation": "A standard CD pipeline should:\n1. Download the immutable Artifact produced by CI.\n2. Replace tokenized variables with environment-specific values (e.g., swapping a Dev DB string for a QA DB string).\n3. Deploy the application to the target server/PaaS (e.g., Azure Web App).\n4. Run automated Integration or Smoke Tests against the deployed app.\n5. Wait for manual approvals if promoting to the next environment.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Download Artifact -> Substitute Variables -> Deploy -> Smoke Test -> Wait for Approval",
    "id": 126
  },
  {
    "category": "CI/CD & Build Automation",
    "title": "How do you build a .NET application using Azure Pipelines?",
    "explanation": "You use the `DotNetCoreCLI@2` task. This task wraps the standard `dotnet` command line interface. You typically use it multiple times in your pipeline: first with the `restore` command, then `build`, then `test`, and finally `publish`.",
    "code": "- task: DotNetCoreCLI@2\n  inputs:\n    command: 'build'\n    projects: '**/*.csproj'\n    arguments: '--configuration Release'",
    "example": "",
    "tip": "",
    "summary": "By using the DotNetCoreCLI@2 task to run restore, build, and publish commands",
    "id": 127
  },
  {
    "category": "CI/CD & Build Automation",
    "title": "How do you restore NuGet packages in a pipeline?",
    "explanation": "You use the `DotNetCoreCLI@2` task with the `command` set to `restore`. If you are using private feeds hosted in Azure Artifacts, you use the `vstsFeed` input to authenticate with your organization's private package registry.",
    "code": "- task: DotNetCoreCLI@2\n  inputs:\n    command: 'restore'\n    projects: '**/*.csproj'\n    feedsToUse: 'select'\n    vstsFeed: 'MyPrivateFeed'",
    "example": "",
    "tip": "",
    "summary": "Using the DotNetCoreCLI task with the 'restore' command",
    "id": 128
  },
  {
    "category": "CI/CD & Build Automation",
    "title": "How do you build an ASP.NET Core application?",
    "explanation": "To build an ASP.NET Core app for deployment, you must 'publish' it. You use the `DotNetCoreCLI@2` task with the `publish` command. You instruct it to output the compiled DLLs and static files into the `$(Build.ArtifactStagingDirectory)`, and you set `zipAfterPublish` to true to package it into a deployable zip file.",
    "code": "- task: DotNetCoreCLI@2\n  inputs:\n    command: 'publish'\n    publishWebProjects: true\n    arguments: '--configuration Release --output $(Build.ArtifactStagingDirectory)'\n    zipAfterPublish: true",
    "example": "",
    "tip": "",
    "summary": "Use the 'publish' command to compile the app and output a zip file into the Staging Directory",
    "id": 129
  },
  {
    "category": "CI/CD & Build Automation",
    "title": "How do you run unit tests in Azure Pipelines?",
    "explanation": "You use the `DotNetCoreCLI@2` task with the `test` command. This automatically finds any test projects (e.g., `*Tests.csproj`), executes them, and logs the results to the console.",
    "code": "- task: DotNetCoreCLI@2\n  inputs:\n    command: 'test'\n    projects: '**/*Tests.csproj'\n    arguments: '--configuration Release'",
    "example": "",
    "tip": "",
    "summary": "Using the DotNetCoreCLI task with the 'test' command pointed at Test projects",
    "id": 130
  },
  {
    "category": "CI/CD & Build Automation",
    "title": "How do you publish test results?",
    "explanation": "To get rich visual charts in the Azure DevOps UI showing which tests passed and failed, you must output the test results to a file (like `.trx` for .NET, or `JUnit` for Java/Node), and then use the `PublishTestResults@2` task to upload that file to the pipeline run.",
    "code": "- task: DotNetCoreCLI@2\n  inputs:\n    command: 'test'\n    arguments: '--logger trx --results-directory $(Agent.TempDirectory)'\n\n- task: PublishTestResults@2\n  inputs:\n    testResultsFormat: 'VSTest'\n    testResultsFiles: '$(Agent.TempDirectory)/**/*.trx'",
    "example": "",
    "tip": "",
    "summary": "Export results to a file (like .trx) and use the PublishTestResults task to upload them",
    "id": 131
  },
  {
    "category": "CI/CD & Build Automation",
    "title": "How do you generate code coverage reports?",
    "explanation": "For .NET, you add Coverlet to your test project. In the pipeline, you run the `test` command and pass the argument `/p:CollectCoverage=true /p:CoverletOutputFormat=cobertura`. This generates an XML file detailing exactly which lines of code were executed during the tests.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Run tests with a coverage tool (like Coverlet for .NET) to generate a Cobertura XML file",
    "id": 132
  },
  {
    "category": "CI/CD & Build Automation",
    "title": "How do you publish code coverage?",
    "explanation": "Once your test tool generates a Cobertura or JaCoCo XML file, you use the `PublishCodeCoverageResults@1` task. This task parses the XML and generates a beautiful HTML report inside the Azure DevOps UI, showing the exact percentage of code covered by tests.",
    "code": "- task: PublishCodeCoverageResults@1\n  inputs:\n    codeCoverageTool: 'Cobertura'\n    summaryFileLocation: '$(Agent.TempDirectory)/**/coverage.cobertura.xml'",
    "example": "",
    "tip": "",
    "summary": "Use the PublishCodeCoverageResults task pointing to the generated XML coverage file",
    "id": 133
  },
  {
    "category": "CI/CD & Build Automation",
    "title": "How do you create build artifacts?",
    "explanation": "During the CI phase, tasks output their compiled files into a special temporary folder on the agent machine called `$(Build.ArtifactStagingDirectory)`. You usually instruct your build tool (like `dotnet publish` or `npm run build`) to place its final `.zip` or output files there.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Instruct build tools to output their final files into $(Build.ArtifactStagingDirectory)",
    "id": 134
  },
  {
    "category": "CI/CD & Build Automation",
    "title": "How do you publish artifacts?",
    "explanation": "Once files are in the staging directory, they are still just sitting on the temporary Agent machine. You must use the `PublishPipelineArtifact@1` task to upload them from the Agent up into Azure DevOps cloud storage so they are permanently attached to the build run.",
    "code": "- task: PublishPipelineArtifact@1\n  inputs:\n    targetPath: '$(Build.ArtifactStagingDirectory)'\n    artifact: 'drop'",
    "example": "",
    "tip": "",
    "summary": "Use PublishPipelineArtifact to upload the staging directory to Azure DevOps storage",
    "id": 135
  },
  {
    "category": "CI/CD & Build Automation",
    "title": "How do you download artifacts in another stage?",
    "explanation": "If you are using a `deployment` job, Azure DevOps magically injects an invisible task that automatically downloads all artifacts published by the pipeline.\nIf you are using a regular `job`, you must manually use the `DownloadPipelineArtifact@2` task to pull the artifact down to the new agent.",
    "code": "- task: DownloadPipelineArtifact@2\n  inputs:\n    buildType: 'current'\n    artifactName: 'drop'\n    targetPath: '$(Pipeline.Workspace)'",
    "example": "",
    "tip": "",
    "summary": "Deployment jobs do it automatically; normal jobs use the DownloadPipelineArtifact task",
    "id": 136
  },
  {
    "category": "CI/CD & Build Automation",
    "title": "How do you deploy an ASP.NET Core application?",
    "explanation": "After downloading the `.zip` artifact, you use a deployment task specific to your hosting provider. \nFor Azure App Services, you use the `AzureRmWebAppDeployment@4` task, providing it with your Service Connection name and the App Service name.",
    "code": "- task: AzureRmWebAppDeployment@4\n  inputs:\n    ConnectionType: 'AzureRM'\n    azureSubscription: 'My-Azure-Service-Connection'\n    appType: 'webApp'\n    WebAppName: 'my-prod-website'\n    packageForLinux: '$(Pipeline.Workspace)/drop/*.zip'",
    "example": "",
    "tip": "",
    "summary": "Using the AzureRmWebAppDeployment task connected to an Azure Service Connection",
    "id": 137
  },
  {
    "category": "CI/CD & Build Automation",
    "title": "How do you implement CI/CD for multiple environments?",
    "explanation": "You define multiple `stage` blocks in your YAML (e.g., `Build`, `DeployDev`, `DeployQA`, `DeployProd`). \nThe `Build` stage runs first and publishes the artifact. \nEach subsequent Deploy stage downloads that *exact same artifact*, maps environment-specific Variable Groups, and deploys it to the respective environment. The Production stage typically maps to an Azure DevOps `environment` to enforce manual approvals.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "By creating sequential YAML stages that deploy the same artifact using different variable groups",
    "id": 138
  },
  {
    "category": "CI/CD & Build Automation",
    "title": "How do you promote the same build artifact between environments?",
    "explanation": "You rely on the `dependsOn` keyword. \n`DeployQA` depends on `DeployDev`. `DeployProd` depends on `DeployQA`. Because they are all in the same pipeline run, they all automatically download the exact same artifact (`drop`) produced in the initial `Build` stage. You NEVER rebuild the code between environments.",
    "code": "",
    "example": "",
    "tip": "This is the most critical rule of CI/CD. Never rebuild for QA. Rebuilding creates a new, untested binary.",
    "summary": "By relying on pipeline dependencies and downloading the artifact produced in the CI stage",
    "id": 139
  },
  {
    "category": "CI/CD & Build Automation",
    "title": "Why is building once and deploying many times recommended?",
    "explanation": "If you recompile the code specifically for QA, and then recompile it again for Production, you cannot guarantee that what goes to Production is exactly what was tested in QA. Dependency versions might have updated slightly, or compilation timestamps changed. \nBuilding once creates an immutable artifact. Promoting that exact same `.zip` file guarantees that the exact bytes tested in QA are what go to Production.",
    "code": "",
    "example": "",
    "tip": "Use the word 'Immutable Artifact' to impress the interviewer.",
    "summary": "It ensures the exact binary tested in QA is identical to the one deployed to Production",
    "id": 140
  },
  {
    "category": "CI/CD & Build Automation",
    "title": "How do you handle environment-specific configuration?",
    "explanation": "Since you are deploying the exact same artifact to Dev and Prod, you cannot hardcode database connection strings in `appsettings.json`. \nInstead, you leave them blank or tokenized (`#{DbConnectionString}#`) in the code. During the CD pipeline stage, you use tasks like **File Transform** or **Replace Tokens** to inject the environment-specific values from your Variable Groups into the configuration files just before deploying.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "By using token replacement tasks during CD to inject variables into configuration files",
    "id": 141
  },
  {
    "category": "CI/CD & Build Automation",
    "title": "How do you implement automated rollback?",
    "explanation": "Azure DevOps does not have a native 'magic rollback' button. \nTo rollback, you generally implement a 'Fix Forward' approach by creating a hotfix branch and rapidly pushing a new build. \nAlternatively, you can manually navigate to an older, successful Pipeline Run in Azure DevOps and simply click 'Redeploy' on that specific run's Production stage to overwrite the broken app with the older artifact.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "By re-deploying a previously successful pipeline run, or pushing a hotfix forward",
    "id": 142
  },
  {
    "category": "CI/CD & Build Automation",
    "title": "How do you handle pipeline failures?",
    "explanation": "Azure DevOps sends email notifications and can integrate with Slack/Teams upon failure. \nYou investigate the failure by clicking into the Pipeline Run, navigating to the specific failed Job, and reading the raw console logs. Common failures include failed unit tests, missing dependencies, or authentication issues with Service Connections.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "By reviewing the raw console logs of the failed job in the Azure DevOps UI",
    "id": 143
  },
  {
    "category": "CI/CD & Build Automation",
    "title": "How do you retry failed pipeline tasks?",
    "explanation": "In Azure DevOps, you can specify a `retryCountOnTaskFailure` on any individual task. If the task fails (e.g., due to a temporary network timeout when downloading npm packages), Azure DevOps will automatically wait and retry the task up to the specified number of times before failing the whole job.",
    "code": "- task: Npm@1\n  retryCountOnTaskFailure: 3\n  inputs:\n    command: 'install'",
    "example": "",
    "tip": "Very useful for tasks that rely on flaky external network services.",
    "summary": "By setting the `retryCountOnTaskFailure` property on the task in YAML",
    "id": 144
  },
  {
    "category": "CI/CD & Build Automation",
    "title": "How do you reduce pipeline execution time?",
    "explanation": "To speed up slow pipelines:\n1. **Caching**: Use the `Cache@2` task to cache `node_modules` or `.nuget` folders between runs so they don't download from the internet every time.\n2. **Parallelism**: Split large test suites into multiple Jobs that run concurrently on different agents.\n3. **Self-Hosted Agents**: Use self-hosted VMs with more CPU/RAM and persistent local caches, rather than ephemeral Microsoft-hosted agents.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "By using dependency caching, parallel job execution, and more powerful self-hosted agents",
    "id": 145
  },
  {
    "category": "Release & Deployment",
    "title": "What is a Release Pipeline?",
    "explanation": "In classic Azure DevOps, a Release Pipeline is a visual UI tool dedicated entirely to Continuous Delivery/Deployment. \nIt takes a compiled artifact and pushes it through a defined sequence of Stages (e.g., Dev -> QA -> UAT -> Prod). It excels at managing complex pre-deployment approvals and post-deployment gates. In modern Azure DevOps, this functionality is replicated inside YAML pipelines using `environments` and `deployment` jobs.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A pipeline dedicated to deploying artifacts across multiple stages and environments",
    "id": 146
  },
  {
    "category": "Release & Deployment",
    "title": "What is a deployment stage?",
    "explanation": "A deployment stage represents a specific physical or logical target environment in the deployment lifecycle (e.g., 'Staging', 'Production'). Each stage contains the specific tasks and variables required to deploy the application to that environment. A Release Pipeline is simply a sequential chain of these stages.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A phase representing a specific target environment (e.g., Staging, Production)",
    "id": 147
  },
  {
    "category": "Release & Deployment",
    "title": "What is an Environment in Azure DevOps?",
    "explanation": "An Environment is a collection of resources (like Kubernetes clusters, VMs, or Web Apps) that you target with deployments from a YAML pipeline. \nCrucially, assigning a job to an Environment is the *only* way to inject manual approvals and automated checks into a YAML pipeline.",
    "code": "jobs:\n- deployment: DeployWeb\n  environment: 'Production'",
    "example": "",
    "tip": "",
    "summary": "A logical target for YAML deployments that enables approvals and checks",
    "id": 148
  },
  {
    "category": "Release & Deployment",
    "title": "What are environment approvals?",
    "explanation": "Approvals are manual gates placed on an Environment. \nWhen a YAML pipeline reaches a job targeting that Environment, the pipeline immediately pauses. It sends an email to designated users or groups. The pipeline will not resume deploying until one of those users explicitly clicks 'Approve' in the Azure DevOps UI.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A manual gate that pauses the pipeline until a human authorizes the deployment",
    "id": 149
  },
  {
    "category": "Release & Deployment",
    "title": "What are checks in Azure DevOps?",
    "explanation": "Checks are *automated* gates placed on an Environment. \nInstead of waiting for a human, a Check can automatically query an external API (like ServiceNow for an approved change ticket), query Azure Monitor for active alerts, or evaluate an Azure Policy. If the automated check fails, the deployment is rejected.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Automated gates that query external systems before allowing a deployment",
    "id": 150
  },
  {
    "category": "Release & Deployment",
    "title": "How do you configure manual approval before production deployment?",
    "explanation": "1. Go to Pipelines -> Environments.\n2. Create an Environment named `Production`.\n3. Click the three dots -> 'Approvals and checks'.\n4. Add an 'Approval' and select the specific Users or Azure Active Directory Groups who are authorized to approve.\n5. In your YAML, target `environment: 'Production'`. The pipeline will now pause automatically.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "By adding an Approval check to the target Environment in the Azure DevOps UI",
    "id": 151
  },
  {
    "category": "Release & Deployment",
    "title": "How do you restrict production deployments?",
    "explanation": "Production deployments should be heavily restricted using multiple layers:\n1. **Branch Policies**: Only code merged into `main` via PR can trigger a production release.\n2. **Environment Approvals**: Require a QA manager or Product Owner to manually approve the deployment.\n3. **Environment Security**: Restrict which users or pipelines even have 'Deploy' permissions on the Production Environment object itself.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Using Branch Policies on code, and Approvals/Security restrictions on the Environment",
    "id": 152
  },
  {
    "category": "Release & Deployment",
    "title": "What is a deployment group?",
    "explanation": "A Deployment Group is a logical set of target machines that have the Azure DevOps deployment agent installed on them. \nIt is used primarily for deploying to clusters of bare-metal VMs or on-premises servers. When a release targets a Deployment Group, the pipeline scripts execute simultaneously across every machine in the group (e.g., updating 10 IIS web servers at once).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A group of VMs/servers with installed agents, used for simultaneous multi-machine deployments",
    "id": 153
  },
  {
    "category": "Release & Deployment",
    "title": "What is a deployment job?",
    "explanation": "In YAML pipelines, a `deployment` job is a specialized job used to deploy code. It has three unique features:\n1. It integrates with Azure DevOps Environments (enabling approvals).\n2. It automatically downloads all pipeline artifacts.\n3. It natively supports advanced deployment strategies (like `runOnce`, `canary`, or `rolling`).",
    "code": "jobs:\n- deployment: DeployProd\n  environment: 'production'\n  strategy:\n    runOnce:\n      deploy:\n        steps:\n        - script: echo Deploying...",
    "example": "",
    "tip": "",
    "summary": "A YAML job that links to Environments, auto-downloads artifacts, and supports deployment strategies",
    "id": 154
  },
  {
    "category": "Release & Deployment",
    "title": "Deployment job vs normal job?",
    "explanation": "- **Normal Job**: Generic execution. Runs scripts, builds code, publishes artifacts. Does NOT support Environments, approvals, or deployment strategies.\n- **Deployment Job**: Specifically for CD. Connects to Environments, pauses for human approval, automatically downloads artifacts, and can execute canary/rolling strategies.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Deployment jobs support Environments, approvals, and complex deployment strategies",
    "id": 155
  },
  {
    "category": "Release & Deployment",
    "title": "What is a deployment strategy?",
    "explanation": "A deployment strategy defines *how* the new version of your application replaces the old version. \nThe simplest strategy is `runOnce` (just overwrite the old app immediately). However, to minimize downtime or risk, advanced strategies like `rolling`, `canary`, or `blue-green` are used to gradually introduce the new version.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "The method used to replace the old application version with the new one",
    "id": 156
  },
  {
    "category": "Release & Deployment",
    "title": "What is a rolling deployment?",
    "explanation": "A rolling deployment updates a cluster of servers one by one (or in small batches). \nFor example, if you have 10 web servers, a rolling deployment takes 2 servers offline, updates them, brings them back online, and then moves to the next 2. This guarantees zero downtime because at least 8 servers are always running and serving traffic.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Updating a cluster of servers gradually in batches to ensure zero downtime",
    "id": 157
  },
  {
    "category": "Release & Deployment",
    "title": "What is a canary deployment?",
    "explanation": "A canary deployment releases the new version to a very small percentage of users (e.g., 5%). \nYou monitor the logs and telemetry of this 5% to see if the new version is throwing errors or causing user complaints. If it is stable, you gradually increase the traffic (10%, 50%, 100%). If it fails, you immediately route the 5% back to the old version.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Releasing a new version to a small subset of users to test stability before a full rollout",
    "id": 158
  },
  {
    "category": "Release & Deployment",
    "title": "What is a blue-green deployment?",
    "explanation": "Blue-Green deployment involves running two identical production environments. \n'Blue' is the current live version. 'Green' is idle. You deploy the new code entirely to 'Green' and test it thoroughly. Once verified, you simply flip the network router/load balancer to instantly point 100% of live traffic to 'Green'. If a massive bug is found, rollback is instant by flipping the router back to 'Blue'.",
    "code": "",
    "example": "",
    "tip": "This is the safest deployment strategy for mission-critical applications.",
    "summary": "Deploying to an idle parallel environment, then instantly flipping live traffic to it",
    "id": 159
  },
  {
    "category": "Release & Deployment",
    "title": "Blue-green vs canary deployment?",
    "explanation": "- **Blue-Green**: Flips 100% of traffic instantly between two fully scaled environments. Safest and fastest rollback, but costs 2x the infrastructure.\n- **Canary**: Gradually shifts small percentages of traffic (5%, 10%) to the new version on the same infrastructure. Better for catching edge-case bugs without affecting the whole user base.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Blue-Green swaps 100% of traffic instantly; Canary gradually shifts traffic percentages",
    "id": 160
  },
  {
    "category": "Release & Deployment",
    "title": "How do you implement zero-downtime deployment?",
    "explanation": "You achieve zero-downtime deployment by utilizing deployment strategies like Blue-Green, Rolling, or Canary. \nIn Azure Web Apps, the most common way is using **Deployment Slots**. You deploy the new artifact to a 'Staging Slot', wait for it to warm up, and then execute a 'Swap' command to instantly swap the Staging and Production slots with zero dropped requests.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "By using Deployment Slots (Blue-Green) or Rolling updates to ensure the app is always serving requests",
    "id": 161
  },
  {
    "category": "Release & Deployment",
    "title": "How do you implement rollback?",
    "explanation": "If using a Blue-Green strategy, rollback is an instant router flip back to the previous environment.\nIf overwriting the app (runOnce), rollback usually involves maintaining a CI/CD setup where you can easily navigate to the *previous successful Pipeline Run* in Azure DevOps and manually click 'Redeploy'. This overwrites the broken app with the older, stable artifact.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Flipping a Blue-Green router, or manually redeploying a previously successful artifact",
    "id": 162
  },
  {
    "category": "Release & Deployment",
    "title": "How do you deploy database changes safely?",
    "explanation": "Databases should be deployed using code-first migrations (like Entity Framework Migrations) or state-based tools (like DACPACs / SqlPackage). \nThe pipeline generates an automated SQL migration script. This script should ideally be reviewed by a DBA via a Pull Request. During deployment, the pipeline executes the script against the target database before the application code is swapped.",
    "code": "",
    "example": "",
    "tip": "Always mention that DB deployments are the riskiest part of CD and require strict versioning.",
    "summary": "Using automated migration scripts (EF Core/DACPAC) integrated into the deployment pipeline",
    "id": 163
  },
  {
    "category": "Release & Deployment",
    "title": "How do you handle failed production deployments?",
    "explanation": "1. Stop the bleeding: Immediately rollback by redeploying the previous stable artifact or swapping the Blue-Green slot back.\n2. Investigate: Gather application logs (App Insights) and pipeline deployment logs.\n3. Fix Forward: Create a hotfix branch from `main`, implement the fix, run through the CI pipeline, and deploy the new version through QA to Prod.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Rollback immediately to restore service, investigate logs, and push a hotfix forward",
    "id": 164
  },
  {
    "category": "Release & Deployment",
    "title": "How do you implement deployment gates/checks?",
    "explanation": "Deployment gates (Checks) are configured on the Environment object in Azure DevOps.\nYou can configure gates to query Azure Monitor Alerts. If an alert (e.g., High CPU) fires during the first 10 minutes of deployment, the gate fails and the deployment is aborted. You can also configure gates to call custom REST APIs or Azure Functions for bespoke validation logic.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Configure automated rules on the Environment to query Azure Monitor or external APIs",
    "id": 165
  },
  {
    "category": "Azure Test Plans",
    "title": "What is Azure Test Plans?",
    "explanation": "Azure Test Plans is a service inside Azure DevOps designed for Manual, Exploratory, and User Acceptance Testing (UAT). \nIt provides a rich set of tools to create step-by-step test scripts, assign them to QA testers, and track the exact pass/fail results of those tests. It is deeply integrated with Azure Boards, so bugs found during testing are immediately linked to the original User Story.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A service for authoring, executing, and tracking manual and exploratory testing",
    "id": 166
  },
  {
    "category": "Azure Test Plans",
    "title": "What is a Test Case?",
    "explanation": "A Test Case is a specific type of Work Item in Azure DevOps.\nIt defines a set of step-by-step actions that a human tester must perform to validate a specific piece of functionality. For each step, it defines the 'Action' (e.g., 'Click the login button') and the 'Expected Result' (e.g., 'The dashboard loads').",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A work item defining step-by-step actions and expected results for manual validation",
    "id": 167
  },
  {
    "category": "Azure Test Plans",
    "title": "What is a Test Suite?",
    "explanation": "A Test Suite is a logical grouping of related Test Cases. \nFor example, you might create a 'Login Test Suite' containing test cases for valid login, invalid password, and locked account. \nTest Suites can be 'Static' (you manually drag and drop cases into them) or 'Requirement-Based' (they automatically pull all test cases linked to a specific User Story).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A logical folder or grouping used to organize multiple Test Cases",
    "id": 168
  },
  {
    "category": "Azure Test Plans",
    "title": "What is a Test Plan?",
    "explanation": "A Test Plan is the highest level container. It groups together multiple Test Suites for a specific release or iteration (Sprint). \nFor example, 'Release v2.0 Test Plan' would contain the 'Login Suite', 'Checkout Suite', and 'Profile Suite'.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "The highest-level container grouping Test Suites for a specific release or sprint",
    "id": 169
  },
  {
    "category": "Azure Test Plans",
    "title": "Test Plan vs Test Suite?",
    "explanation": "Hierarchy: **Test Plan -> Test Suite -> Test Case**.\nThe Test Plan represents the overall testing effort for a sprint or release. The Test Suite categorizes the tests into functional areas. The Test Case is the actual script executed by the tester.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Plan is the overall container; Suite categorizes by feature; Case is the actual test",
    "id": 170
  },
  {
    "category": "Azure Test Plans",
    "title": "How do you create manual test cases?",
    "explanation": "Navigate to Test Plans -> select a Test Suite -> click 'New Test Case'. A grid opens where you manually type the sequence of Actions and their Expected Results. You can also parameterize the test case (using `@username`, `@password`) to run the exact same steps multiple times with different sets of data.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "By defining step-by-step Actions and Expected Results in the Test Plans UI",
    "id": 171
  },
  {
    "category": "Azure Test Plans",
    "title": "How do you link test cases to User Stories?",
    "explanation": "The most efficient way is to create a 'Requirement-Based Test Suite'. When you create this suite, you select a User Story. Azure DevOps automatically links any test cases you create inside this suite to that specific User Story, ensuring end-to-end traceability from requirement to verification.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "By creating a Requirement-Based Test Suite targeting a specific User Story",
    "id": 172
  },
  {
    "category": "Azure Test Plans",
    "title": "What is exploratory testing?",
    "explanation": "Exploratory testing is unscripted testing. Instead of following a strict Test Case step-by-step, the tester freely interacts with the application to find edge-case bugs. Azure DevOps provides a browser extension ('Test & Feedback') that records screenshots, video, and DOM interactions while the tester explores, making it very easy to generate a rich Bug report with one click.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Unscripted testing using a browser extension to record steps and quickly log bugs",
    "id": 173
  },
  {
    "category": "Azure Test Plans",
    "title": "How do you track test execution?",
    "explanation": "In Azure Test Plans, testers click 'Run for web application' on a Test Case. A side-panel runner opens, displaying the steps. The tester clicks 'Pass' (green check) or 'Fail' (red X) for each individual step. If a step fails, the runner prompts them to instantly create a Bug, automatically attaching the failed step information.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Using the web runner to explicitly mark each step as Pass or Fail, logging bugs inline",
    "id": 174
  },
  {
    "category": "Azure Test Plans",
    "title": "How can Azure Pipelines integrate with automated tests?",
    "explanation": "If a QA engineer writes automated UI tests (like Selenium or Playwright), those tests are executed by the CI/CD Pipeline, not manually in Test Plans. \nThe pipeline runs the tests, and the `PublishTestResults` task links the automated execution results back into Azure DevOps, providing integrated reporting alongside the manual tests.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Pipelines run the automated code (Selenium/Playwright) and publish the results back",
    "id": 175
  },
  {
    "category": "Azure Artifacts",
    "title": "What is Azure Artifacts?",
    "explanation": "Azure Artifacts is a fully managed package management service within Azure DevOps. \nIt allows teams to create, host, version, and share reusable code libraries (like NuGet for .NET, npm for Node, Maven for Java, or PIP for Python) securely within the organization, without uploading them to public registries.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A private, managed package repository for NuGet, npm, Maven, and Python packages",
    "id": 176
  },
  {
    "category": "Azure Artifacts",
    "title": "What are feeds in Azure Artifacts?",
    "explanation": "A Feed is a container for packages. \nYou can create an 'Organization-scoped feed' (accessible to all projects in the org) or a 'Project-scoped feed' (isolated to one project). Pipelines authenticate to these feeds to download dependencies during the build process.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A secure container that hosts specific collections of published packages",
    "id": 177
  },
  {
    "category": "Azure Artifacts",
    "title": "What package types are supported?",
    "explanation": "Azure Artifacts natively supports five major package types:\n1. **NuGet** (.NET)\n2. **npm** (JavaScript/Node.js)\n3. **Maven** (Java)\n4. **Universal Packages** (Generic large binaries/files)\n5. **Python** (PyPI)",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "NuGet, npm, Maven, Universal Packages, and Python",
    "id": 178
  },
  {
    "category": "Azure Artifacts",
    "title": "How do you publish a NuGet package?",
    "explanation": "In a CI pipeline, you first use `dotnet pack` to compile your class library into a `.nupkg` file. \nThen, you use the `NuGetCommand@2` task with the `push` command, pointing it to the specific URL of your Azure Artifacts feed.",
    "code": "- task: DotNetCoreCLI@2\n  inputs:\n    command: 'pack'\n\n- task: NuGetCommand@2\n  inputs:\n    command: 'push'\n    publishVstsFeed: 'MyOrg/MyFeed'",
    "example": "",
    "tip": "",
    "summary": "Use dotnet pack to create a .nupkg, then NuGetCommand task to push it to a feed",
    "id": 179
  },
  {
    "category": "Azure Artifacts",
    "title": "How do you consume a private NuGet package?",
    "explanation": "To download a private package, you must tell the `dotnet restore` task where to find it. You configure the `DotNetCoreCLI@2` restore command to use the `vstsFeed` input. Azure DevOps automatically injects the necessary authentication token to access the private feed.",
    "code": "- task: DotNetCoreCLI@2\n  inputs:\n    command: 'restore'\n    feedsToUse: 'select'\n    vstsFeed: 'MyOrg/MyFeed'",
    "example": "",
    "tip": "",
    "summary": "Configure the dotnet restore pipeline task to target the specific vstsFeed name",
    "id": 180
  },
  {
    "category": "Azure Artifacts",
    "title": "What is an upstream source?",
    "explanation": "An Upstream Source allows your private Azure Artifacts feed to act as a proxy for a public registry (like `npmjs.com` or `nuget.org`).\nWhen a pipeline requests a package (e.g., `react`), the feed downloads it from the public internet, caches a copy forever in your private feed, and gives it to the pipeline. If the public registry goes down, your builds continue to work because you have a cached copy.",
    "code": "",
    "example": "",
    "tip": "Upstream sources are critical for Enterprise stability. Mentioning them shows maturity.",
    "summary": "A proxy that caches public packages into your private feed to protect against internet outages",
    "id": 181
  },
  {
    "category": "Azure Artifacts",
    "title": "How do you manage package versions?",
    "explanation": "Azure Artifacts treats packages as immutable. You cannot overwrite version `1.0.0` once it is published. If you make a bug fix, you must bump the version (e.g., `1.0.1` or `1.1.0`) according to Semantic Versioning (SemVer) rules before the pipeline can successfully publish it to the feed.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Packages are immutable; you must strictly bump the Semantic Version (SemVer) to publish updates",
    "id": 182
  },
  {
    "category": "Security & Real-World",
    "title": "What is a Service Connection?",
    "explanation": "A Service Connection is a secure authentication object in Azure DevOps used to connect pipelines to external services (like Azure, AWS, Docker Hub, or SonarQube). \nIt stores the authentication credentials securely, so developers do not have to put passwords in YAML files. Pipelines simply reference the connection by its given name.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A secure object storing credentials to authenticate pipelines against external services",
    "id": 183
  },
  {
    "category": "Security & Real-World",
    "title": "What types of service connections are commonly used?",
    "explanation": "1. **Azure Resource Manager (ARM)**: To deploy resources to Microsoft Azure.\n2. **Docker Registry**: To push container images to Docker Hub or ACR.\n3. **Kubernetes**: To deploy manifests to a cluster using `kubectl`.\n4. **GitHub**: To check out code if the repo is hosted on GitHub.\n5. **Generic REST**: To authenticate against custom internal APIs.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "ARM (Azure), Docker Registry, Kubernetes, GitHub, and Generic REST",
    "id": 184
  },
  {
    "category": "Security & Real-World",
    "title": "How do you connect Azure DevOps to Azure?",
    "explanation": "You create an **Azure Resource Manager (ARM) Service Connection**.\nModern security standards dictate using **Workload Identity Federation (OIDC)** or a **Managed Identity** rather than an expiring Service Principal secret. The Service Connection securely establishes trust between the Azure DevOps Project and the target Azure Subscription.",
    "code": "",
    "example": "",
    "tip": "Always explicitly mention 'Workload Identity Federation'. It is the modern standard replacing secrets.",
    "summary": "By creating an ARM Service Connection using Workload Identity Federation (OIDC)",
    "id": 185
  },
  {
    "category": "Security & Real-World",
    "title": "What is a Managed Identity?",
    "explanation": "A Managed Identity is a feature of Microsoft Entra ID (Azure AD) that provides Azure services (like VMs, App Services, or Self-Hosted Agents) with an automatically managed identity. \nIt eliminates the need for developers to manage credentials or rotate passwords, as Azure handles the authentication seamlessly in the background.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "An automatically managed Entra ID identity that eliminates the need for hardcoded credentials",
    "id": 186
  },
  {
    "category": "Security & Real-World",
    "title": "Service Principal vs Managed Identity?",
    "explanation": "- **Service Principal**: Similar to a \"service account\". You must manually generate a Client ID and a Secret (password), store the secret securely, and manually rotate it before it expires.\n- **Managed Identity**: Fully automated by Azure. There are no passwords to manage, leak, or rotate. It is far more secure.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Service Principals require manual secret management; Managed Identities are fully automated and passwordless",
    "id": 187
  },
  {
    "category": "Security & Real-World",
    "title": "How should secrets be stored in Azure DevOps?",
    "explanation": "Secrets (like DB connection strings or API keys) should **never** be stored in source code. \nThe acceptable ways are:\n1. As 'Secret Variables' inside a Pipeline (masked in logs).\n2. Inside an Azure DevOps 'Variable Group' marked as secret.\n3. **Best Practice**: Stored externally in **Azure Key Vault**, with a Variable Group securely linking to the Vault to pull them only at runtime.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Externally in Azure Key Vault, accessed at runtime via linked Variable Groups",
    "id": 188
  },
  {
    "category": "Security & Real-World",
    "title": "What is Azure Key Vault integration?",
    "explanation": "Instead of storing secrets in Azure DevOps, you store them in Azure Key Vault (a highly secure cloud HSM).\nYou configure an Azure DevOps Variable Group to link to the Key Vault. When a pipeline runs, it connects to the Vault via a Service Connection, downloads the secrets directly into the agent's memory, uses them, and then discards them when the pipeline finishes.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Linking pipelines to Key Vault so secrets are fetched dynamically at runtime and never permanently stored",
    "id": 189
  },
  {
    "category": "Security & Real-World",
    "title": "How do you retrieve Key Vault secrets during a pipeline?",
    "explanation": "1. Create an ARM Service Connection with 'Reader' and 'Secret User' permissions to the Key Vault.\n2. Go to Pipelines -> Library -> Create a Variable Group.\n3. Toggle 'Link secrets from an Azure key vault'.\n4. Select the Service Connection and the Key Vault name.\n5. Select which specific secrets the pipeline is allowed to download. \n6. Reference the Variable Group in the YAML `variables:` section.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Link a Variable Group to the Key Vault using an ARM Service Connection",
    "id": 190
  },
  {
    "category": "Security & Real-World",
    "title": "How do you prevent secrets from appearing in pipeline logs?",
    "explanation": "If a variable is formally registered as a 'Secret' (either in the UI by clicking the padlock icon, or pulled from Key Vault), Azure DevOps automatically scrubs the logs. If a script accidentally runs `echo $(MyDbPassword)`, Azure DevOps intercepts the output and replaces the actual string with `***` before writing it to the log file.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Azure DevOps automatically masks registered secret variables with `***` in all console logs",
    "id": 191
  },
  {
    "category": "Security & Real-World",
    "title": "How do you implement least-privilege access in Azure DevOps?",
    "explanation": "1. Do not use Global PATs; use scoped PATs.\n2. Do not assign users to 'Project Administrators' unless absolutely necessary. Use 'Contributors'.\n3. Use Branch Policies to lock the `main` branch.\n4. Lock down Service Connections so only specific pipelines can use them.\n5. Restrict Environment approvals to specific senior groups, not individuals.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "By aggressively using scoped tokens, strict branch policies, and locking down Service Connections",
    "id": 192
  },
  {
    "category": "Security & Real-World",
    "title": "Your production deployment failed halfway through. How would you troubleshoot and recover?",
    "explanation": "**Troubleshoot**:\n1. I immediately check the pipeline logs in Azure DevOps to find the exact failed task (e.g., did the database migration fail, or did the web app deployment timeout?).\n2. I check the target environment (e.g., Azure App Insights or Kubernetes pod logs) for runtime application errors.\n\n**Recover**:\nIf it's a mission-critical outage, I do not waste time debugging in Production. I instantly initiate a rollback. If using Blue-Green slots, I flip the traffic router back. If using standard deployment, I navigate to the previous successful Pipeline run and click 'Redeploy' to overwrite the broken state with the last known good artifact. Then, I debug the issue in a lower environment.",
    "code": "",
    "example": "",
    "tip": "Emphasize speed of recovery. Rollback first, debug second.",
    "summary": "Immediately rollback to restore service, then investigate pipeline and application logs",
    "id": 193
  },
  {
    "category": "Security & Real-World",
    "title": "Your pipeline takes 30 minutes to complete. How would you identify and improve the bottleneck?",
    "explanation": "1. **Identify**: I review the pipeline execution timeline in Azure DevOps. It clearly shows the duration of every job and task.\n2. **Dependency Resolution**: If `npm install` takes 10 minutes, I implement the `Cache@2` task to cache `node_modules` between runs.\n3. **Test Parallelization**: If UI tests take 15 minutes, I split them into multiple jobs and run them concurrently on different agents.\n4. **Agent Upgrade**: If compilation is slow, I migrate from slow Microsoft-hosted agents to powerful self-hosted VMs with NVMe drives.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Analyze the timeline, implement caching, parallelize tests, and upgrade to self-hosted agents",
    "id": 194
  },
  {
    "category": "Security & Real-World",
    "title": "A developer accidentally pushed directly to the main branch. How would you prevent this from happening again?",
    "explanation": "I would immediately apply a **Branch Policy** to the `main` branch. \nThe moment any policy is applied (such as 'Require a minimum number of reviewers' set to 1), Azure DevOps fundamentally locks the branch. Any future attempt to run `git push origin main` directly will be rejected with an access denied error, forcing developers to use feature branches and Pull Requests.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Apply a Branch Policy to the main branch, which automatically locks it against direct pushes",
    "id": 195
  },
  {
    "category": "Security & Real-World",
    "title": "Your application works locally but fails during the Azure Pipeline build. How would you troubleshoot it?",
    "explanation": "This is the classic 'works on my machine' issue.\n1. **Check for missing files**: The developer might have forgotten to commit a new file (so it exists locally but not in Git). I check the PR file diff.\n2. **Check Agent Environment**: The Microsoft-hosted agent might be using a different version of Node or .NET than the local machine. I explicitly specify the version in the YAML using `UseDotNet@2` or `NodeTool@0`.\n3. **Check relative paths**: Build scripts might rely on hardcoded local paths like `C:\\Projects\\` which do not exist on the Linux build agent.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Look for uncommitted files, mismatched tool versions, and hardcoded absolute paths",
    "id": 196
  },
  {
    "category": "Security & Real-World",
    "title": "Your pipeline succeeds but the application fails after deployment. What would you check?",
    "explanation": "If the pipeline reports 'Success', it only means the artifact was successfully transferred to the server. It does *not* mean the app booted up correctly.\n1. **Configuration**: I verify that the Variable Replacement task successfully injected the correct environment variables (e.g., the Prod DB string wasn't accidentally swapped with the Dev DB string).\n2. **Application Logs**: I immediately check Azure Application Insights or the App Service Log Stream for startup exceptions (like 500.30 INPROC failure in .NET).\n3. **Database State**: I ensure the database migrations were actually applied to the target environment.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Check for incorrect configuration variables, missing DB migrations, and review Application Insights logs",
    "id": 197
  },
  {
    "category": "Security & Real-World",
    "title": "How would you design a CI/CD pipeline for a .NET Core Web API + Angular + SQL Server application?",
    "explanation": "I would use a single YAML pipeline with multiple stages.\n\n**Stage 1: Build (CI)**\n- **Job A (.NET)**: `DotNetCoreCLI` to restore, build, test, and publish the API. Output to `drop-api`.\n- **Job B (Angular)**: `npm ci`, `npm run test`, `npm run build --prod`. Output to `drop-web`.\n\n**Stage 2: Deploy to QA (CD)**\n- **Job**: Depends on Build. Downloads both artifacts.\n- **DB Task**: Runs EF Core migrations or DACPAC against the QA SQL Database.\n- **API Task**: Azure Web App task to deploy the .NET API artifact.\n- **Web Task**: Azure Web App task to deploy the Angular static files.\n\n**Stage 3: Deploy to PROD (CD)**\n- Identical to QA, but tied to a 'Production' Environment to enforce manual approval gates.",
    "code": "",
    "example": "",
    "tip": "Break the answer down by architectural components (API, Web, DB) and stages (Build, QA, Prod).",
    "summary": "Parallel build jobs for API and Web, followed by sequential deployment stages executing DB migrations and app deployments",
    "id": 198
  },
  {
    "category": "Security & Real-World",
    "title": "How would you design separate Dev → QA → UAT → Production deployment stages with approvals and environment-specific configuration?",
    "explanation": "1. **Artifact**: The pipeline generates a single immutable artifact during the Build stage.\n2. **Configuration**: I create four distinct Variable Groups in Azure DevOps (`vars-dev`, `vars-qa`, etc.), linked to Azure Key Vault.\n3. **Stages**: I define four sequential Deployment Stages in the YAML (`DeployDev` -> `DeployQA` -> `DeployUAT` -> `DeployProd`).\n4. **Approvals**: I map the UAT and PROD stages to corresponding Azure DevOps Environments. I configure the UAT environment to require QA Lead approval, and the PROD environment to require Management approval. The pipeline will automatically pause and wait at these boundaries.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Use one immutable artifact, environment-specific Variable Groups, and Azure DevOps Environments for approval gates",
    "id": 199
  },
  {
    "category": "Security & Real-World",
    "title": "How would you design a production-grade Azure DevOps CI/CD pipeline with Git branching, PR validation, unit tests, code quality checks, security scanning, artifact management, approvals, deployment, rollback, and monitoring?",
    "explanation": "This is an end-to-end architectural question.\n\n1. **Version Control**: Trunk-based development. Developers PR into `main`. The PR triggers a build validation pipeline.\n2. **CI Pipeline**: Triggers on PR or merge to `main`. It restores dependencies, compiles code, runs Unit Tests, runs SonarQube (Code Quality), runs WhiteSource (Security/SCA), packages the code, and publishes to Azure Artifacts.\n3. **CD Pipeline (Dev/QA)**: Automatically downloads the artifact, replaces variables via Key Vault, and deploys to Azure Web Apps.\n4. **CD Pipeline (Prod)**: Targets a 'Production' Environment, which triggers a Manual Approval from the release team. Uses a Blue-Green deployment strategy via Deployment Slots to guarantee zero-downtime.\n5. **Monitoring**: Azure Application Insights is integrated. If failure rates spike post-deployment, the router instantly flips traffic back to the Blue slot for immediate rollback.",
    "code": "",
    "example": "",
    "tip": "This is the ultimate capstone question. Speak confidently about the flow from code commit all the way to production monitoring.",
    "summary": "Trunk-based PR validation -> CI build + SonarQube -> Auto deploy to QA -> Manual Approval for Prod -> Blue-Green Slot Swap -> App Insights Monitoring",
    "id": 200
  }
];
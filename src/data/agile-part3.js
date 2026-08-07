export const agilePart3 = [
    // --- PART 5: SCRUM CEREMONIES & METRICS (76-90) ---
    {
        id: 76,
        title: "What is the Daily Scrum?",
        category: "Scrum Ceremonies",
        difficulty: "Beginner",
        priority: "High",
        explanation: "A strictly timeboxed 15-minute daily meeting for the Developers to inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary.",
        summary: "A 15-minute daily standup meeting for developers to synchronize work."
    },
    {
        id: 77,
        title: "What are the three common Daily Scrum questions?",
        category: "Scrum Ceremonies",
        difficulty: "Beginner",
        explanation: "1. What did I do yesterday that helped the team meet the Sprint Goal?\n2. What will I do today to help the team meet the Sprint Goal?\n3. Do I see any blockers/impediments preventing me from meeting the Sprint Goal?",
        summary: "What did you do yesterday? What will you do today? Are there any blockers?"
    },
    {
        id: 78,
        title: "What is Sprint Review?",
        category: "Scrum Ceremonies",
        difficulty: "Intermediate",
        priority: "High",
        explanation: "A meeting at the end of the Sprint where the Scrum Team presents the working software (the Increment) to stakeholders. The goal is to gather feedback and adapt the Product Backlog. It is not just a \"demo\" but a working session.",
        summary: "Presenting the completed work to stakeholders to gather feedback."
    },
    {
        id: 79,
        title: "What is Sprint Retrospective?",
        category: "Scrum Ceremonies",
        difficulty: "Intermediate",
        priority: "High",
        explanation: "The final ceremony of the Sprint. The Scrum Team discusses *how* they worked together (processes, tools, communication) and identifies actionable improvements for the next Sprint. (What went well? What didn't? What will we improve?)",
        summary: "An internal team meeting to discuss how to improve processes for the next Sprint."
    },
    {
        id: 80,
        title: "Sprint Review vs Sprint Retrospective?",
        category: "Scrum Ceremonies",
        difficulty: "Intermediate",
        explanation: "- **Review:** Focuses on the *Product* (the software built) and involves stakeholders.\n- **Retrospective:** Focuses on the *Process* (how the team worked) and is strictly internal to the Scrum Team.",
        summary: "Review is about the product; Retrospective is about the team's process."
    },
    {
        id: 81,
        title: "What is Backlog Refinement?",
        category: "Scrum Ceremonies",
        difficulty: "Intermediate",
        priority: "High",
        explanation: "The ongoing process of adding detail, estimates, and order to items in the Product Backlog. The team breaks down large Epics into User Stories and clarifies Acceptance Criteria so they are ready for the next Sprint Planning.",
        summary: "Preparing and detailing backlog items for future Sprints."
    },
    {
        id: 82,
        title: "What is Story Point estimation?",
        category: "Scrum Metrics",
        difficulty: "Intermediate",
        priority: "High",
        explanation: "A relative unit of measure used by Agile teams to estimate the effort, complexity, and risk of a User Story, rather than estimating in pure hours.",
        summary: "Estimating complexity and effort relatively, rather than using hours."
    },
    {
        id: 83,
        title: "What is Planning Poker?",
        category: "Scrum Metrics",
        difficulty: "Intermediate",
        priority: "High",
        explanation: "A gamified estimation technique. Developers discuss a User Story and then simultaneously reveal cards with Story Point values (usually Fibonacci numbers: 1, 2, 3, 5, 8). This prevents anchoring bias and forces discussion if estimates differ wildly.",
        summary: "A gamified consensus-building technique for estimating Story Points."
    },
    {
        id: 84,
        title: "What is velocity?",
        category: "Scrum Metrics",
        difficulty: "Intermediate",
        priority: "High",
        explanation: "The total number of Story Points a Scrum team successfully completes within a single Sprint. It is used exclusively to forecast how much work the team can pull into future Sprints.",
        summary: "The amount of work (in Story Points) a team completes in one Sprint."
    },
    {
        id: 85,
        title: "How is Sprint velocity calculated?",
        category: "Scrum Metrics",
        difficulty: "Intermediate",
        explanation: "You add up the Story Points of all *fully completed* (met the Definition of Done) User Stories in a Sprint. Partially completed stories contribute 0 points to velocity.",
        summary: "Summing the Story Points of all 100% completed stories."
    },
    {
        id: 86,
        title: "What is a Burndown Chart?",
        category: "Scrum Metrics",
        difficulty: "Intermediate",
        priority: "High",
        explanation: "A graph that shows the amount of work *remaining* in the Sprint across time. The line starts high and \"burns down\" towards zero by the last day of the Sprint.",
        summary: "A chart tracking the remaining work left in a Sprint."
    },
    {
        id: 87,
        title: "What is a Burnup Chart?",
        category: "Scrum Metrics",
        difficulty: "Intermediate",
        priority: "High",
        explanation: "A graph showing how much work has been *completed* toward a goal, while also plotting changes to the total project scope. It is excellent for tracking long-term release progress.",
        summary: "A chart tracking completed work and changes in total scope."
    },
    {
        id: 88,
        title: "Burndown vs Burnup chart?",
        category: "Scrum Metrics",
        difficulty: "Senior",
        explanation: "- **Burndown:** Tracks remaining work. Excellent for daily Sprint tracking. Cannot easily show if scope was added.\n- **Burnup:** Tracks completed work and total scope. Excellent for showing stakeholders why a project is delayed (e.g., \"We are working fast, but scope keeps increasing\").",
        summary: "Burndown tracks remaining work; Burnup tracks completed work and scope changes."
    },
    {
        id: 89,
        title: "What is capacity planning?",
        category: "Scrum Metrics",
        difficulty: "Intermediate",
        priority: "High",
        explanation: "Calculating the actual availability of the team for the upcoming Sprint by subtracting holidays, vacations, and meetings, to ensure the team doesn't overcommit.",
        summary: "Calculating the actual hours the team is available to work in a Sprint."
    },
    {
        id: 90,
        title: "What is technical debt in Agile?",
        category: "Scrum Metrics",
        difficulty: "Intermediate",
        priority: "High",
        explanation: "The implied cost of future refactoring caused by choosing a \"quick and dirty\" solution now instead of a better approach that would take longer. Agile teams must balance feature delivery against paying down technical debt.",
        summary: "The future cost of taking poor technical shortcuts today."
    },

    // --- PART 6: REAL-WORLD AGILE & WATERFALL SCENARIOS (91-100) ---
    {
        id: 91,
        title: "What would you do if a customer changes requirements in the middle of a Sprint?",
        category: "Real-World Scenarios",
        difficulty: "Senior",
        priority: "High",
        explanation: "### Scenario: A sudden requirement change mid-Sprint.\n```text\nNew Requirement\n      ↓\nUnderstand Priority\n      ↓\nDiscuss with Product Owner\n      ↓\nAssess Sprint Impact\n      ↓\nIf Urgent → Re-plan appropriately\n      ↓\nIf Not Urgent → Product Backlog\n```\n**Explanation:** Developers shouldn't abandon current work. The PO must evaluate priority. If urgent, scope must be swapped out of the Sprint. If not, it goes to the Backlog for the next Sprint.",
        summary: "Discuss priority with the PO. If urgent, swap out existing Sprint scope; otherwise, backlog it."
    },
    {
        id: 92,
        title: "What would you do if a User Story cannot be completed within the Sprint?",
        category: "Real-World Scenarios",
        difficulty: "Senior",
        priority: "High",
        explanation: "The story is not \"Done\" and yields 0 Story Points for velocity. It is moved back to the Product Backlog, re-estimated, and likely prioritized for the next Sprint. The team must discuss *why* it failed during the Retrospective to prevent it from happening again.",
        summary: "Move it back to the Product Backlog, earn 0 points, and discuss the root cause in the Retrospective."
    },
    {
        id: 93,
        title: "What would you do if a developer disagrees with the Product Owner?",
        category: "Real-World Scenarios",
        difficulty: "Senior",
        explanation: "It depends on the disagreement. If it is about *What* to build or prioritization, the PO has the final say. If it is about *How* to build it (technical implementation) or *How much effort* it takes, the Developers have the final say. The Scrum Master should facilitate a resolution if conflict escalates.",
        summary: "The PO decides *what* to build; Developers decide *how* to build it."
    },
    {
        id: 94,
        title: "What would you do if the team consistently misses Sprint commitments?",
        category: "Real-World Scenarios",
        difficulty: "Senior",
        priority: "High",
        explanation: "Investigate during the Retrospective. The team is likely overestimating capacity or underestimating complexity (Story Points). We should reduce the number of points committed in the next Sprint, identify hidden blockers (tech debt, unplanned work), and focus on breaking stories down into smaller pieces.",
        summary: "Reduce committed Story Points, analyze blockers, and improve story estimation during the Retrospective."
    },
    {
        id: 95,
        title: "What would you do if the Product Owner keeps adding urgent work?",
        category: "Real-World Scenarios",
        difficulty: "Senior",
        explanation: "The Scrum Master must step in to protect the team. The rule is that the Sprint Backlog is locked during the Sprint. If the PO constantly injects work, it breaks the Scrum framework. We need to educate the PO on prioritization or shorten the Sprint length to 1 week so they don't have to wait as long.",
        summary: "The Scrum Master must protect the Sprint scope and coach the PO on Scrum rules."
    },
    {
        id: 96,
        title: "What would you do if a critical production defect is discovered during a Sprint?",
        category: "Real-World Scenarios",
        difficulty: "Senior",
        priority: "High",
        explanation: "### Scenario: A Sev-1 bug in Production.\n```text\nProduction Incident\n        ↓\nAssess Severity\n        ↓\nHandle Immediately\n        ↓\nFix + Test + Deploy\n        ↓\nCommunicate impact to Sprint Goal\n```\nProduction stability always trumps the Sprint Goal. The team swarms the bug. If this causes the Sprint Goal to fail, we accept the failure and discuss root cause in the Retrospective.",
        summary: "Drop Sprint work to fix the production issue immediately, accepting the risk to the Sprint Goal."
    },
    {
        id: 97,
        title: "How would you handle changing requirements in a Waterfall project?",
        category: "Real-World Scenarios",
        difficulty: "Senior",
        explanation: "You must follow a formal Change Control process. The client submits a change request, architects analyze the impact on budget/timeline, and stakeholders formally approve it. Only then do you modify the SRS, redesign the system, and rewrite code.",
        summary: "By initiating a formal, documented Change Control process."
    },
    {
        id: 98,
        title: "A Waterfall project is delayed during testing. What would you do?",
        category: "Real-World Scenarios",
        difficulty: "Senior",
        explanation: "This is the classic Waterfall trap. Because testing is at the very end, delays here threaten the release date. You cannot easily add developers to QA. You must communicate the delay, prioritize critical bugs, and potentially defer non-critical bugs to a post-release patch (maintenance phase).",
        summary: "Prioritize critical bugs and negotiate deferring minor defects to a post-launch maintenance patch."
    },
    {
        id: 99,
        title: "How would you decide whether to use Agile or Waterfall for a new project?",
        category: "Real-World Scenarios",
        difficulty: "Senior",
        priority: "High",
        explanation: "Evaluate the project constraints. If the scope is 100% fixed, heavily regulated (medical/aerospace), and changes are unlikely, choose Waterfall. If the product is evolving, the market changes fast, and frequent releases are required, choose Agile.",
        summary: "Waterfall for fixed-scope/regulated projects; Agile for evolving, fast-paced projects."
    },
    {
        id: 100,
        title: "Explain how you would manage a software project from requirements through production using Agile.",
        category: "Real-World Scenarios",
        difficulty: "Senior",
        explanation: "1. Define Product Vision.\n2. Create and prioritize the Product Backlog.\n3. Run Backlog Refinement to detail User Stories.\n4. Hold Sprint Planning to commit to a Sprint Backlog.\n5. Execute a 2-week Sprint with Daily Scrums.\n6. Test continuously (CI/CD).\n7. Hold Sprint Review to demo working software to stakeholders.\n8. Hold Sprint Retrospective to improve processes.\n9. Release Increment to production.\n10. Repeat.",
        summary: "Vision -> Backlog -> Planning -> 2-Week Sprint -> Daily Scrum -> Review -> Retrospective -> Repeat."
    }
];

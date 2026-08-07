export const agilePart1 = [
    // --- PART 1: SOFTWARE DEVELOPMENT MODELS & SDLC (1-15) ---
    {
        id: 1,
        title: "What is SDLC?",
        category: "SDLC & Models",
        difficulty: "Beginner",
        explanation: "SDLC stands for Software Development Life Cycle. It is a structured process used by software industry to design, develop, and test high-quality software. It provides a framework to manage the entire lifecycle of an application from inception to retirement.",
        summary: "Software Development Life Cycle is a structured process for building software."
    },
    {
        id: 2,
        title: "What are the different phases of SDLC?",
        category: "SDLC & Models",
        difficulty: "Beginner",
        explanation: "The standard phases are:\n1. **Requirement Gathering & Analysis**\n2. **Design**\n3. **Implementation (Coding)**\n4. **Testing**\n5. **Deployment**\n6. **Maintenance**",
        summary: "Requirements, Design, Implementation, Testing, Deployment, Maintenance."
    },
    {
        id: 3,
        title: "What are the commonly used SDLC models?",
        category: "SDLC & Models",
        difficulty: "Beginner",
        explanation: "Common models include Waterfall, Agile, Scrum (a framework of Agile), Iterative, Spiral, and V-Model.",
        summary: "Waterfall, Agile, Spiral, Iterative, and V-Model."
    },
    {
        id: 4,
        title: "What is the Waterfall model?",
        category: "SDLC & Models",
        difficulty: "Beginner",
        priority: "High",
        explanation: "The Waterfall model is a sequential, linear approach to software development. Each phase of the SDLC must be completed in its entirety before the next phase can begin, flowing steadily downwards like a waterfall.",
        summary: "A linear, sequential development model where phases do not overlap."
    },
    {
        id: 5,
        title: "What is the Agile model?",
        category: "SDLC & Models",
        difficulty: "Beginner",
        priority: "High",
        explanation: "Agile is an iterative and incremental approach to software development. It emphasizes flexibility, continuous improvement, and rapid delivery of working software through collaboration between cross-functional teams and customers.",
        summary: "An iterative, flexible approach focused on continuous delivery and collaboration."
    },
    {
        id: 6,
        title: "Why are software development methodologies required?",
        category: "SDLC & Models",
        difficulty: "Intermediate",
        explanation: "Without a methodology, development becomes chaotic. Methodologies provide structure, define roles, ensure predictable timelines and budgets, mitigate risks, and enforce quality standards.",
        summary: "To provide structure, predictability, and quality control to software projects."
    },
    {
        id: 7,
        title: "What is the difference between a methodology and a framework?",
        category: "SDLC & Models",
        difficulty: "Intermediate",
        explanation: "- **Methodology:** A set of principles and practices (e.g., Agile).\n- **Framework:** A specific set of rules, roles, and ceremonies implementing a methodology (e.g., Scrum is a framework implementing Agile methodology).",
        summary: "Methodology is the philosophy; framework is the specific rules to implement it."
    },
    {
        id: 8,
        title: "What are the advantages of following an SDLC model?",
        category: "SDLC & Models",
        difficulty: "Beginner",
        explanation: "It provides a clear plan, helps track progress, improves quality, ensures customer requirements are met, and makes project management predictable.",
        summary: "Provides clear planning, tracking, and quality assurance."
    },
    {
        id: 9,
        title: "What factors should be considered when selecting an SDLC model?",
        category: "SDLC & Models",
        difficulty: "Intermediate",
        explanation: "Factors include project size, requirement clarity, expected changes, team expertise, timeline, budget, and regulatory constraints.",
        summary: "Clarity of requirements, project size, flexibility needed, and budget."
    },
    {
        id: 10,
        title: "What is iterative development?",
        category: "SDLC & Models",
        difficulty: "Intermediate",
        priority: "High",
        explanation: "Iterative development involves building a system through repeated cycles (iterations). You build a basic version, review it, refine it, and repeat until the final product is achieved.",
        summary: "Building software through repeated refinement cycles."
    },
    {
        id: 11,
        title: "What is incremental development?",
        category: "SDLC & Models",
        difficulty: "Intermediate",
        priority: "High",
        explanation: "Incremental development breaks the software into smaller, standalone modules. Each module is fully developed and delivered piece by piece (increment) until the entire system is complete.",
        summary: "Delivering software piece by piece."
    },
    {
        id: 12,
        title: "Iterative vs incremental development?",
        category: "SDLC & Models",
        difficulty: "Senior",
        explanation: "- **Iterative:** Focuses on refining the whole product over time (like painting a sketch, then coloring, then detailing).\n- **Incremental:** Focuses on delivering fully finished parts of the product one by one (like building a car by first delivering the engine, then the wheels, etc.).\n- **Agile** is BOTH iterative and incremental.",
        summary: "Iterative refines the whole; Incremental delivers in finished pieces."
    },
    {
        id: 13,
        title: "What is a sequential development model?",
        category: "SDLC & Models",
        difficulty: "Beginner",
        explanation: "A model where development moves in a straight line through consecutive phases without overlapping (like Waterfall).",
        summary: "Linear development with non-overlapping phases."
    },
    {
        id: 14,
        title: "What is adaptive software development?",
        category: "SDLC & Models",
        difficulty: "Intermediate",
        explanation: "A methodology built around rapid creation and evolution of software in response to changing requirements, focusing on continuous learning and adaptation (highly related to Agile).",
        summary: "Development focused on rapidly adapting to change."
    },
    {
        id: 15,
        title: "Agile vs traditional software development?",
        category: "SDLC & Models",
        difficulty: "Senior",
        priority: "High",
        explanation: "Traditional (Waterfall) is predictive, sequential, and resistant to change. Agile is adaptive, iterative, and welcomes changing requirements even late in the process.",
        summary: "Traditional is predictive and rigid; Agile is adaptive and flexible."
    },

    // --- PART 2: WATERFALL MODEL (16-35) ---
    {
        id: 16,
        title: "What is the Waterfall model?",
        category: "Waterfall Model",
        difficulty: "Beginner",
        priority: "High",
        explanation: "The Waterfall model is a sequential software development process. It flows downwards through defined phases: Requirements, Design, Implementation, Testing, Deployment, and Maintenance. A new phase only begins when the previous one is fully signed off.",
        summary: "A linear, sequential methodology where phases don't overlap."
    },
    {
        id: 17,
        title: "Why is it called the Waterfall model?",
        category: "Waterfall Model",
        difficulty: "Beginner",
        explanation: "Because progress flows in one direction downwards through the phases, much like a waterfall. You generally cannot \"flow backward\" easily.",
        summary: "Because progress flows strictly downwards through phases."
    },
    {
        id: 18,
        title: "What are the phases of the Waterfall model?",
        category: "Waterfall Model",
        difficulty: "Beginner",
        priority: "High",
        explanation: "1. Requirements Analysis\n2. System Design\n3. Implementation (Coding)\n4. Testing\n5. Deployment\n6. Maintenance",
        summary: "Requirements, Design, Code, Test, Deploy, Maintain."
    },
    {
        id: 19,
        title: "Explain the Waterfall development lifecycle.",
        category: "Waterfall Model",
        difficulty: "Intermediate",
        explanation: "All requirements are gathered upfront. The architecture is fully designed based on those requirements. The entire system is then coded. After coding is 100% complete, testing begins. Finally, the finished product is deployed.",
        summary: "A process where each phase must be 100% complete before the next starts."
    },
    {
        id: 20,
        title: "What happens during the requirements phase?",
        category: "Waterfall Model",
        difficulty: "Beginner",
        explanation: "Business analysts gather all customer needs and document them in a Software Requirement Specification (SRS) document. No coding occurs here.",
        summary: "Gathering and documenting all system requirements upfront."
    },
    {
        id: 21,
        title: "What happens during the design phase?",
        category: "Waterfall Model",
        difficulty: "Beginner",
        explanation: "Architects and senior developers take the SRS and create a complete architecture and technical design (database schemas, class diagrams) for the entire system.",
        summary: "Creating the technical blueprint for the entire system."
    },
    {
        id: 22,
        title: "What happens during the implementation phase?",
        category: "Waterfall Model",
        difficulty: "Beginner",
        explanation: "Developers write code based entirely on the design documents. The goal is to build the complete system.",
        summary: "Writing code to build the system according to the design."
    },
    {
        id: 23,
        title: "What happens during the testing phase?",
        category: "Waterfall Model",
        difficulty: "Beginner",
        explanation: "QA engineers test the fully built system against the original requirements to find defects. Testing only starts after all coding is finished.",
        summary: "Testing the completed system for defects."
    },
    {
        id: 24,
        title: "What happens during deployment?",
        category: "Waterfall Model",
        difficulty: "Beginner",
        explanation: "The fully tested software is released to the customer or installed in the production environment.",
        summary: "Releasing the finished software to users."
    },
    {
        id: 25,
        title: "What happens during maintenance?",
        category: "Waterfall Model",
        difficulty: "Beginner",
        explanation: "Fixing bugs found in production and making minor enhancements over the life of the software.",
        summary: "Ongoing support and bug fixing in production."
    },
    {
        id: 26,
        title: "What are the advantages of Waterfall?",
        category: "Waterfall Model",
        difficulty: "Intermediate",
        priority: "High",
        explanation: "1. Simple and easy to understand.\n2. Phases do not overlap, making management easy.\n3. Extensive documentation ensures knowledge is preserved.\n4. Works well for small projects with clearly defined, unchanging requirements.",
        summary: "Simple management, clear milestones, and heavy documentation."
    },
    {
        id: 27,
        title: "What are the disadvantages of Waterfall?",
        category: "Waterfall Model",
        difficulty: "Intermediate",
        priority: "High",
        explanation: "1. Highly inflexible to changing requirements.\n2. Working software is delivered very late in the lifecycle.\n3. High risk; testing is delayed until the end, so architectural flaws are found late.\n4. Poor model for complex, long, or evolving projects.",
        summary: "Inflexible, late delivery of working software, and late risk discovery."
    },
    {
        id: 28,
        title: "What are the limitations of Waterfall?",
        category: "Waterfall Model",
        difficulty: "Intermediate",
        explanation: "It assumes that all requirements can be known perfectly upfront. It struggles if the customer changes their mind, because revisiting the design phase is costly and time-consuming.",
        summary: "It cannot easily adapt to changing requirements."
    },
    {
        id: 29,
        title: "When should you use the Waterfall model?",
        category: "Real-World Scenarios",
        difficulty: "Senior",
        priority: "High",
        explanation: "Use Waterfall when:\n- Requirements are 100% known, clear, and fixed.\n- The technology stack is well-understood.\n- The project is short and simple.\n- Regulatory or contractual obligations demand strict phases and heavy documentation (e.g., aerospace, healthcare).",
        summary: "For fixed-scope, well-understood, or highly regulated projects."
    },
    {
        id: 30,
        title: "When should you avoid Waterfall?",
        category: "Real-World Scenarios",
        difficulty: "Senior",
        priority: "High",
        explanation: "Avoid Waterfall when requirements are vague, the project is large/complex, the technology is new, or the customer expects to see working prototypes early and often.",
        summary: "For complex projects where requirements are expected to change."
    },
    {
        id: 31,
        title: "How does Waterfall handle changing requirements?",
        category: "Waterfall Model",
        difficulty: "Senior",
        priority: "High",
        explanation: "Very poorly. Any change request requires formal approval, going back to the Requirements phase, rewriting the SRS, updating the design, and rewriting the code. It is a highly expensive and rigid process.",
        summary: "Poorly. It requires formal change requests and restarting previous phases."
    },
    {
        id: 32,
        title: "How are defects handled in Waterfall?",
        category: "Waterfall Model",
        difficulty: "Intermediate",
        explanation: "Defects found during the testing phase are sent back to developers. However, if a design flaw is found during testing, it is extremely expensive to fix because the entire architecture was already built.",
        summary: "Defects are found late, making architectural fixes very expensive."
    },
    {
        id: 33,
        title: "How is testing performed in Waterfall?",
        category: "Waterfall Model",
        difficulty: "Intermediate",
        priority: "High",
        explanation: "Testing is a distinct, isolated phase that only begins after 100% of the implementation phase is complete.",
        summary: "As a separate phase at the very end of development."
    },
    {
        id: 34,
        title: "What is requirement sign-off in Waterfall?",
        category: "Waterfall Model",
        difficulty: "Intermediate",
        explanation: "A formal agreement where the client explicitly approves the Requirements document (SRS). Once signed off, the requirements are \"frozen\" and changes are generally not allowed without a formal Change Control process.",
        summary: "Freezing requirements through a formal customer approval."
    },
    {
        id: 35,
        title: "What is the role of documentation in Waterfall?",
        category: "Waterfall Model",
        difficulty: "Intermediate",
        priority: "High",
        explanation: "Documentation is critical and extensive. Since phases are isolated, documentation (SRS, Design Docs, Test Plans) acts as the primary communication mechanism between teams passing work to the next phase.",
        summary: "It is extensive and serves as the primary communication between phases."
    }
];

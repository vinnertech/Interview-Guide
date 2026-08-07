export const dockerk8sQuestions = [
  // 1-10: Docker Fundamentals
  {
    id: 1,
    title: "What is Docker and why is it used?",
    category: "Docker Fundamentals",
    difficulty: "Beginner",
    explanation: "Docker is an open-source platform that enables developers to build, deploy, run, update, and manage containers. Containers are standardized, executable components that combine application source code with all the operating system libraries and dependencies required to run the code in any environment.\n\nDocker is used because it solves the 'it works on my machine' problem by providing a consistent and isolated environment across development, testing, and production. It is highly lightweight compared to traditional virtual machines, spins up in milliseconds, and allows organizations to achieve high density and resource utilization.",
    example: "If a developer builds a Node.js application locally on a Mac, they can package it into a Docker container. That exact same container can then run flawlessly on a Windows server in QA or a Linux cluster in AWS production without any environmental configuration drift.",
    tip: "Mention the 'it works on my machine' problem and contrast containers with traditional VMs to show you understand both the 'what' and 'why'.",
    mistake: "Don't say Docker *is* virtualization. It is OS-level virtualization (containerization), not hardware virtualization.",
    summary: "Docker is a containerization platform that packages apps and dependencies into portable, isolated containers to guarantee consistent execution across all environments."
  },
  {
    id: 2,
    title: "Docker vs Virtual Machine: What are the primary differences?",
    category: "Docker Fundamentals",
    difficulty: "Beginner",
    explanation: "The primary difference lies in architecture. A Virtual Machine (VM) virtualizes the hardware. Every VM runs a full 'guest' Operating System (OS) on top of a hypervisor, which makes it heavy, slow to boot, and resource-intensive.\n\nDocker, conversely, virtualizes the Operating System. Containers share the host machine's OS kernel and do not require a guest OS. This makes containers extremely lightweight (megabytes instead of gigabytes), fast to start (milliseconds), and allows running significantly more containers than VMs on the same hardware.",
    example: "Running 10 Node.js apps on VMs requires 10 complete Linux OS installations taking up GBs of RAM and disk space. Running 10 Node.js containers only runs the Node.js processes, all sharing the single underlying host OS kernel, using a fraction of the resources.",
    tip: "Use the phrase 'OS-level virtualization vs Hardware-level virtualization'. Interviewers look for the word 'kernel sharing'.",
    summary: "VMs virtualize hardware and require a full guest OS per instance. Docker virtualizes the OS, allowing containers to share the host's kernel, making them lightweight and fast."
  },
  {
    id: 3,
    title: "Explain the Docker Architecture.",
    category: "Docker Fundamentals",
    difficulty: "Intermediate",
    explanation: "Docker uses a client-server architecture. The primary components are:\n\n1. **Docker Client**: The CLI (`docker`) or UI tool that users interact with. It sends REST API requests to the daemon.\n2. **Docker Daemon (dockerd)**: The background service running on the host machine. It listens for API requests and manages Docker objects (images, containers, networks, volumes).\n3. **Docker Desktop/Engine**: The overarching runtime environment containing the daemon and client.\n4. **Docker Registries**: A stateless, highly scalable server side application that stores and lets you distribute Docker images (e.g., Docker Hub, AWS ECR).\n5. **Docker Objects**: The entities used to assemble an application, primarily Images (read-only templates) and Containers (runnable instances of images).",
    tip: "Be prepared to draw this out mentally or verbally. Highlight that the client and daemon can run on the same system or remotely.",
    summary: "Docker has a client-server architecture consisting of the Docker Client (CLI), Docker Daemon (manages objects), and Registries (stores images)."
  },
  {
    id: 4,
    title: "What is the difference between a Docker Image and a Docker Container?",
    category: "Docker Fundamentals",
    difficulty: "Beginner",
    explanation: "A **Docker Image** is an immutable (read-only) template that contains the instructions, source code, libraries, dependencies, tools, and other files needed for an application to run. It represents the application at rest.\n\nA **Docker Container** is a runnable, running, or stopped instance of a Docker Image. It is the application in execution. When a container is started from an image, Docker adds a read-write layer on top of the image's read-only layers, allowing the container to modify files and store state.",
    example: "An image is like a class blueprint in Object-Oriented Programming, while a container is the instantiated object created from that class.",
    tip: "Use the Class/Object analogy or Recipe/Cake analogy. It quickly demonstrates your understanding to the interviewer.",
    summary: "An image is a read-only template containing the app and dependencies. A container is a running instance of that image with an added read-write layer."
  },
  {
    id: 5,
    title: "What is a Dockerfile?",
    category: "Docker Fundamentals",
    difficulty: "Beginner",
    explanation: "A Dockerfile is a simple text file that contains a sequential list of instructions and commands that the Docker daemon uses to build a Docker image automatically. Each instruction in a Dockerfile creates a new layer in the resulting image.\n\nCommon instructions include `FROM` (base image), `WORKDIR` (set working directory), `COPY` (copy files from host), `RUN` (execute commands like `npm install`), and `CMD` (default command when container starts).",
    code: "FROM node:18-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nCMD [\"node\", \"server.js\"]",
    tip: "Know the basic commands by heart. If asked to write one on a whiteboard, keep it simple and clean.",
    summary: "A Dockerfile is a text document containing all the sequential instructions needed to build a Docker image."
  },
  {
    id: 6,
    title: "What are Docker image layers and how does caching work?",
    category: "Docker Fundamentals",
    difficulty: "Intermediate",
    explanation: "A Docker image is built up from a series of layers. Each instruction in a Dockerfile (like `RUN`, `COPY`, `ADD`) creates a new layer. Layers are stacked and each one represents a delta (change) from the layer below it.\n\nDocker uses a layer cache to speed up builds. When you build an image, Docker checks if it already has a cached layer for each instruction. If an instruction and its parent layers haven't changed, Docker reuses the cached layer. If a layer changes (e.g., source code is modified), that layer and **all subsequent layers** are invalidated and must be rebuilt.",
    example: "This is why in a Node.js Dockerfile, we COPY `package.json` and `RUN npm install` *before* copying the rest of the source code. The source code changes frequently, but dependencies change rarely. This maximizes cache hits for the heavy `npm install` step.",
    tip: "Explain *why* layer ordering matters for caching. This is a classic senior-level check.",
    summary: "Images consist of stacked layers created by Dockerfile instructions. Docker caches these layers; if a layer changes, all subsequent layers must be rebuilt."
  },
  {
    id: 7,
    title: "What is the difference between CMD and ENTRYPOINT in a Dockerfile?",
    category: "Docker Fundamentals",
    difficulty: "Intermediate",
    explanation: "`ENTRYPOINT` configures a container that will run as an executable. It specifies the command that will *always* be executed when the container starts. It is very hard to override (requires `--entrypoint` flag).\n\n`CMD` provides default arguments to the `ENTRYPOINT`, or provides a default command if no `ENTRYPOINT` is specified. Crucially, `CMD` is easily overridden by passing arguments at the end of the `docker run` command.",
    example: "If Dockerfile has: `ENTRYPOINT [\"ping\"]` and `CMD [\"localhost\"]`.\nRunning `docker run myimg` executes `ping localhost`.\nRunning `docker run myimg google.com` overrides CMD and executes `ping google.com`.",
    tip: "Use ENTRYPOINT for the core executable (what the container *is*), and CMD for default parameters (what it *does* by default).",
    mistake: "Assuming they are interchangeable. Overriding CMD is common; overriding ENTRYPOINT is rare.",
    summary: "ENTRYPOINT defines the unchangeable main executable. CMD provides default arguments that can be easily overridden at runtime."
  },
  {
    id: 8,
    title: "What is the difference between COPY and ADD?",
    category: "Docker Fundamentals",
    difficulty: "Beginner",
    explanation: "Both `COPY` and `ADD` are used to copy files from the host into the Docker image.\n\n`COPY` is the preferred, simpler command. It simply copies files or directories from your local host to the container's file system.\n\n`ADD` does the same thing but has two extra features: it can download files from a remote URL, and it automatically extracts local compressed archives (like `.tar.gz`) into the destination directory.",
    tip: "Always recommend `COPY` unless you explicitly need the auto-extraction feature of `ADD`. Downloading from URLs via `ADD` is an anti-pattern (use `RUN curl/wget` instead to manage layers/cache better).",
    summary: "COPY simply moves local files into the image. ADD does that but also supports remote URLs and automatic extraction of tarballs."
  },
  {
    id: 9,
    title: "What is a .dockerignore file?",
    category: "Docker Fundamentals",
    difficulty: "Beginner",
    explanation: "A `.dockerignore` file operates exactly like a `.gitignore` file. It allows you to specify files and directories that should be ignored when Docker copies files from the build context (your local machine) to the Docker daemon and eventually into the image.\n\nThis is crucial for preventing large, unnecessary, or sensitive files (like `node_modules`, `.git`, `.env` files, or build artifacts) from bloating the image size and compromising security.",
    example: "node_modules/\n.git/\n.env\n*.log",
    tip: "Mention that it speeds up the build process because it prevents the Docker daemon from needlessly receiving large directories from the local context.",
    summary: "A file used to exclude files and directories from the Docker build context, reducing image size, improving build speed, and enhancing security."
  },
  {
    id: 10,
    title: "What are Multi-stage builds?",
    category: "Docker Fundamentals",
    difficulty: "Advanced",
    explanation: "Multi-stage builds allow you to use multiple `FROM` statements in a single Dockerfile. Each `FROM` instruction begins a new stage of the build. You can selectively copy artifacts from one stage to another, leaving behind everything you don't need in the final image.\n\nThis is primarily used to drastically reduce the size of the final production image. You can use a heavy image with all compilers and SDKs in the 'build' stage, compile your binary, and then copy only the compiled binary into a tiny, lightweight 'production' stage (like `alpine` or `scratch`).",
    code: "# Build stage\nFROM golang:1.20 AS builder\nWORKDIR /app\nCOPY . .\nRUN go build -o myapp\n\n# Production stage\nFROM alpine:latest\nWORKDIR /app\nCOPY --from=builder /app/myapp .\nCMD [\"./myapp\"]",
    tip: "This is a critical senior-level concept. Emphasize that it separates the build environment from the runtime environment.",
    summary: "A technique using multiple FROM statements to create intermediate build environments, copying only the final compiled artifacts into a tiny production image."
  },
  {
    id: 11,
    title: "How do you reduce the size of a Docker image?",
    category: "Images & Containers",
    difficulty: "Intermediate",
    explanation: "Image optimization is critical for fast deployments and lower storage costs. Techniques include:\n\n1. **Use Multi-stage builds**: Only ship the compiled artifact, not the build tools.\n2. **Use smaller base images**: Use `alpine` or `distroless` instead of full Debian/Ubuntu images.\n3. **Minimize layers**: Combine multiple `RUN` commands into a single `RUN` command using `&&` to reduce the number of layers.\n4. **Use .dockerignore**: Exclude unnecessary files (`.git`, `node_modules`).\n5. **Clean up package managers**: Run `apt-get clean` or `rm -rf /var/lib/apt/lists/*` in the same `RUN` step after installing packages.",
    tip: "Always start your answer with Multi-stage builds and Alpine images, as these provide the most dramatic reductions.",
    summary: "Reduce size by using multi-stage builds, smaller base images (Alpine), minimizing layers by chaining RUN commands, and cleaning up cached packages."
  }
];

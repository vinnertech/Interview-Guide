export const dockerk8sQuestions = [
  {
    "id": 1,
    "title": "What is Docker and why is it used?",
    "category": "Docker Fundamentals",
    "difficulty": "Beginner",
    "explanation": "Docker is an open-source platform that enables developers to build, deploy, run, update, and manage containers. Containers are standardized, executable components that combine application source code with all the operating system libraries and dependencies required to run the code in any environment.\n\nDocker is used because it solves the 'it works on my machine' problem by providing a consistent and isolated environment across development, testing, and production. It is highly lightweight compared to traditional virtual machines, spins up in milliseconds, and allows organizations to achieve high density and resource utilization.",
    "example": "If a developer builds a Node.js application locally on a Mac, they can package it into a Docker container. That exact same container can then run flawlessly on a Windows server in QA or a Linux cluster in AWS production without any environmental configuration drift.",
    "tip": "Mention the 'it works on my machine' problem and contrast containers with traditional VMs to show you understand both the 'what' and 'why'.",
    "mistake": "Don't say Docker *is* virtualization. It is OS-level virtualization (containerization), not hardware virtualization.",
    "summary": "Docker is a containerization platform that packages apps and dependencies into portable, isolated containers to guarantee consistent execution across all environments."
  },
  {
    "id": 2,
    "title": "Docker vs Virtual Machine: What are the primary differences?",
    "category": "Docker Fundamentals",
    "difficulty": "Beginner",
    "explanation": "The primary difference lies in architecture. A Virtual Machine (VM) virtualizes the hardware. Every VM runs a full 'guest' Operating System (OS) on top of a hypervisor, which makes it heavy, slow to boot, and resource-intensive.\n\nDocker, conversely, virtualizes the Operating System. Containers share the host machine's OS kernel and do not require a guest OS. This makes containers extremely lightweight (megabytes instead of gigabytes), fast to start (milliseconds), and allows running significantly more containers than VMs on the same hardware.",
    "example": "Running 10 Node.js apps on VMs requires 10 complete Linux OS installations taking up GBs of RAM and disk space. Running 10 Node.js containers only runs the Node.js processes, all sharing the single underlying host OS kernel, using a fraction of the resources.",
    "tip": "Use the phrase 'OS-level virtualization vs Hardware-level virtualization'. Interviewers look for the word 'kernel sharing'.",
    "summary": "VMs virtualize hardware and require a full guest OS per instance. Docker virtualizes the OS, allowing containers to share the host's kernel, making them lightweight and fast."
  },
  {
    "id": 3,
    "title": "Explain the Docker Architecture.",
    "category": "Docker Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "Docker uses a client-server architecture. The primary components are:\n\n1. **Docker Client**: The CLI (`docker`) or UI tool that users interact with. It sends REST API requests to the daemon.\n2. **Docker Daemon (dockerd)**: The background service running on the host machine. It listens for API requests and manages Docker objects (images, containers, networks, volumes).\n3. **Docker Desktop/Engine**: The overarching runtime environment containing the daemon and client.\n4. **Docker Registries**: A stateless, highly scalable server side application that stores and lets you distribute Docker images (e.g., Docker Hub, AWS ECR).\n5. **Docker Objects**: The entities used to assemble an application, primarily Images (read-only templates) and Containers (runnable instances of images).",
    "tip": "Be prepared to draw this out mentally or verbally. Highlight that the client and daemon can run on the same system or remotely.",
    "summary": "Docker has a client-server architecture consisting of the Docker Client (CLI), Docker Daemon (manages objects), and Registries (stores images)."
  },
  {
    "id": 4,
    "title": "What is the difference between a Docker Image and a Docker Container?",
    "category": "Docker Fundamentals",
    "difficulty": "Beginner",
    "explanation": "A **Docker Image** is an immutable (read-only) template that contains the instructions, source code, libraries, dependencies, tools, and other files needed for an application to run. It represents the application at rest.\n\nA **Docker Container** is a runnable, running, or stopped instance of a Docker Image. It is the application in execution. When a container is started from an image, Docker adds a read-write layer on top of the image's read-only layers, allowing the container to modify files and store state.",
    "example": "An image is like a class blueprint in Object-Oriented Programming, while a container is the instantiated object created from that class.",
    "tip": "Use the Class/Object analogy or Recipe/Cake analogy. It quickly demonstrates your understanding to the interviewer.",
    "summary": "An image is a read-only template containing the app and dependencies. A container is a running instance of that image with an added read-write layer."
  },
  {
    "id": 5,
    "title": "What is a Dockerfile?",
    "category": "Docker Fundamentals",
    "difficulty": "Beginner",
    "explanation": "A Dockerfile is a simple text file that contains a sequential list of instructions and commands that the Docker daemon uses to build a Docker image automatically. Each instruction in a Dockerfile creates a new layer in the resulting image.\n\nCommon instructions include `FROM` (base image), `WORKDIR` (set working directory), `COPY` (copy files from host), `RUN` (execute commands like `npm install`), and `CMD` (default command when container starts).",
    "code": "FROM node:18-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nCMD [\"node\", \"server.js\"]",
    "tip": "Know the basic commands by heart. If asked to write one on a whiteboard, keep it simple and clean.",
    "summary": "A Dockerfile is a text document containing all the sequential instructions needed to build a Docker image."
  },
  {
    "id": 6,
    "title": "What are Docker image layers and how does caching work?",
    "category": "Docker Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "A Docker image is built up from a series of layers. Each instruction in a Dockerfile (like `RUN`, `COPY`, `ADD`) creates a new layer. Layers are stacked and each one represents a delta (change) from the layer below it.\n\nDocker uses a layer cache to speed up builds. When you build an image, Docker checks if it already has a cached layer for each instruction. If an instruction and its parent layers haven't changed, Docker reuses the cached layer. If a layer changes (e.g., source code is modified), that layer and **all subsequent layers** are invalidated and must be rebuilt.",
    "example": "This is why in a Node.js Dockerfile, we COPY `package.json` and `RUN npm install` *before* copying the rest of the source code. The source code changes frequently, but dependencies change rarely. This maximizes cache hits for the heavy `npm install` step.",
    "tip": "Explain *why* layer ordering matters for caching. This is a classic senior-level check.",
    "summary": "Images consist of stacked layers created by Dockerfile instructions. Docker caches these layers; if a layer changes, all subsequent layers must be rebuilt."
  },
  {
    "id": 7,
    "title": "What is the difference between CMD and ENTRYPOINT in a Dockerfile?",
    "category": "Docker Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "`ENTRYPOINT` configures a container that will run as an executable. It specifies the command that will *always* be executed when the container starts. It is very hard to override (requires `--entrypoint` flag).\n\n`CMD` provides default arguments to the `ENTRYPOINT`, or provides a default command if no `ENTRYPOINT` is specified. Crucially, `CMD` is easily overridden by passing arguments at the end of the `docker run` command.",
    "example": "If Dockerfile has: `ENTRYPOINT [\"ping\"]` and `CMD [\"localhost\"]`.\nRunning `docker run myimg` executes `ping localhost`.\nRunning `docker run myimg google.com` overrides CMD and executes `ping google.com`.",
    "tip": "Use ENTRYPOINT for the core executable (what the container *is*), and CMD for default parameters (what it *does* by default).",
    "mistake": "Assuming they are interchangeable. Overriding CMD is common; overriding ENTRYPOINT is rare.",
    "summary": "ENTRYPOINT defines the unchangeable main executable. CMD provides default arguments that can be easily overridden at runtime."
  },
  {
    "id": 8,
    "title": "What is the difference between COPY and ADD?",
    "category": "Docker Fundamentals",
    "difficulty": "Beginner",
    "explanation": "Both `COPY` and `ADD` are used to copy files from the host into the Docker image.\n\n`COPY` is the preferred, simpler command. It simply copies files or directories from your local host to the container's file system.\n\n`ADD` does the same thing but has two extra features: it can download files from a remote URL, and it automatically extracts local compressed archives (like `.tar.gz`) into the destination directory.",
    "tip": "Always recommend `COPY` unless you explicitly need the auto-extraction feature of `ADD`. Downloading from URLs via `ADD` is an anti-pattern (use `RUN curl/wget` instead to manage layers/cache better).",
    "summary": "COPY simply moves local files into the image. ADD does that but also supports remote URLs and automatic extraction of tarballs."
  },
  {
    "id": 9,
    "title": "What is a .dockerignore file?",
    "category": "Docker Fundamentals",
    "difficulty": "Beginner",
    "explanation": "A `.dockerignore` file operates exactly like a `.gitignore` file. It allows you to specify files and directories that should be ignored when Docker copies files from the build context (your local machine) to the Docker daemon and eventually into the image.\n\nThis is crucial for preventing large, unnecessary, or sensitive files (like `node_modules`, `.git`, `.env` files, or build artifacts) from bloating the image size and compromising security.",
    "example": "node_modules/\n.git/\n.env\n*.log",
    "tip": "Mention that it speeds up the build process because it prevents the Docker daemon from needlessly receiving large directories from the local context.",
    "summary": "A file used to exclude files and directories from the Docker build context, reducing image size, improving build speed, and enhancing security."
  },
  {
    "id": 10,
    "title": "What are Multi-stage builds?",
    "category": "Docker Fundamentals",
    "difficulty": "Advanced",
    "explanation": "Multi-stage builds allow you to use multiple `FROM` statements in a single Dockerfile. Each `FROM` instruction begins a new stage of the build. You can selectively copy artifacts from one stage to another, leaving behind everything you don't need in the final image.\n\nThis is primarily used to drastically reduce the size of the final production image. You can use a heavy image with all compilers and SDKs in the 'build' stage, compile your binary, and then copy only the compiled binary into a tiny, lightweight 'production' stage (like `alpine` or `scratch`).",
    "code": "# Build stage\nFROM golang:1.20 AS builder\nWORKDIR /app\nCOPY . .\nRUN go build -o myapp\n\n# Production stage\nFROM alpine:latest\nWORKDIR /app\nCOPY --from=builder /app/myapp .\nCMD [\"./myapp\"]",
    "tip": "This is a critical senior-level concept. Emphasize that it separates the build environment from the runtime environment.",
    "summary": "A technique using multiple FROM statements to create intermediate build environments, copying only the final compiled artifacts into a tiny production image."
  },
  {
    "id": 11,
    "title": "How do you reduce the size of a Docker image?",
    "category": "Images & Containers",
    "difficulty": "Intermediate",
    "explanation": "Image optimization is critical for fast deployments and lower storage costs. Techniques include:\n\n1. **Use Multi-stage builds**: Only ship the compiled artifact, not the build tools.\n2. **Use smaller base images**: Use `alpine` or `distroless` instead of full Debian/Ubuntu images.\n3. **Minimize layers**: Combine multiple `RUN` commands into a single `RUN` command using `&&` to reduce the number of layers.\n4. **Use .dockerignore**: Exclude unnecessary files (`.git`, `node_modules`).\n5. **Clean up package managers**: Run `apt-get clean` or `rm -rf /var/lib/apt/lists/*` in the same `RUN` step after installing packages.",
    "tip": "Always start your answer with Multi-stage builds and Alpine images, as these provide the most dramatic reductions.",
    "summary": "Reduce size by using multi-stage builds, smaller base images (Alpine), minimizing layers by chaining RUN commands, and cleaning up cached packages."
  },
  {
    "id": 12,
    "title": "What happens if a Docker container crashes?",
    "category": "Images & Containers",
    "difficulty": "Intermediate",
    "explanation": "If a Docker container crashes or the main process (PID 1) exits, the container stops running. Any data written to the container's writable layer (not persisted in a volume) remains intact but inaccessible until the container is restarted or committed to an image.\n\nYou can use Docker restart policies (e.g., `--restart always` or `--restart on-failure`) to automatically restart a container if it crashes. However, for production workloads, orchestration tools like Kubernetes are preferred for managing crashes and maintaining desired state.",
    "example": "If a Node.js API container throws an UnhandledPromiseRejection, the process dies, and the container transitions to an 'Exited' state.",
    "tip": "Mention PID 1. A container only lives as long as its primary process (PID 1) is running.",
    "summary": "The container stops when its main process dies. Restart policies can automatically revive it, but orchestration is better for production."
  },
  {
    "id": 13,
    "title": "Explain Docker Volumes vs Bind Mounts.",
    "category": "Images & Containers",
    "difficulty": "Intermediate",
    "explanation": "Both mechanisms allow containers to persist data outside their lifecycle.\n\n**Volumes**: Managed entirely by Docker. They are stored in a part of the host filesystem managed by Docker (`/var/lib/docker/volumes/`). They are easier to back up, migrate, and are isolated from the host OS's core file structure. This is the recommended approach for databases and persistent data.\n\n**Bind Mounts**: Maps a specific file or directory on the host machine to a directory in the container. The host path must be explicitly provided. They rely on the host machine's directory structure and OS. Commonly used during development to mount source code into a container for hot-reloading.",
    "tip": "Use Bind Mounts for Dev (hot-reloading code), Volumes for Prod (persistent database storage).",
    "summary": "Volumes are managed by Docker and are best for production persistence. Bind Mounts rely on specific host paths and are best for dev hot-reloading."
  },
  {
    "id": 14,
    "title": "How do you share data between two containers?",
    "category": "Images & Containers",
    "difficulty": "Intermediate",
    "explanation": "You can share data by mounting the same Docker Volume or Bind Mount to both containers.\n\nWhen creating or running the containers, you define a volume (e.g., `docker volume create my-data`) and mount it to a specific path in Container A, and then mount that exact same volume to a path in Container B. Any files written to the volume by Container A will immediately be accessible by Container B.",
    "example": "docker run -v my-data:/app/data container_a\ndocker run -v my-data:/shared/data container_b",
    "summary": "Mount the exact same Docker Volume or Bind Mount to both containers. Changes made by one are instantly visible to the other."
  },
  {
    "id": 15,
    "title": "What is Docker Compose?",
    "category": "Images & Containers",
    "difficulty": "Beginner",
    "explanation": "Docker Compose is a tool for defining and running multi-container Docker applications. Instead of running multiple `docker run` commands manually, you use a declarative YAML file (`docker-compose.yml`) to configure your application's services, networks, and volumes.\n\nWith a single command (`docker-compose up`), you can create and start all the services from your configuration. It is primarily used for local development, testing, and staging environments to spin up an app, its database, and caching layer simultaneously.",
    "code": "version: '3.8'\nservices:\n  web:\n    build: .\n    ports:\n      - \"8000:8000\"\n  db:\n    image: postgres\n    environment:\n      POSTGRES_PASSWORD: secret",
    "tip": "Emphasize that Compose is mostly for development and testing, whereas Kubernetes is for production orchestration.",
    "summary": "A tool that uses a declarative YAML file to define and spin up multi-container applications (like a web app + database) with a single command."
  },
  {
    "id": 16,
    "title": "What are the default network drivers in Docker?",
    "category": "Docker Commands & Networking",
    "difficulty": "Advanced",
    "explanation": "Docker uses network drivers to control how containers communicate. The default drivers are:\n\n1. **Bridge (default)**: Creates a private internal network on the host. Containers on the same bridge can communicate via IP (or DNS if it's a custom bridge). Used for standalone containers.\n2. **Host**: Removes network isolation between the container and the Docker host. The container uses the host's networking namespace directly (e.g., binding to port 80 in the container binds to port 80 on the host).\n3. **None**: Disables all networking for the container.\n4. **Overlay**: Connects multiple Docker daemons together and enables swarm services to communicate with each other. Used for multi-host networking.\n5. **Macvlan**: Assigns a MAC address to a container, making it appear as a physical device on the network.",
    "tip": "Understand the difference between the default bridge (docker0) and user-defined bridges (which provide automatic DNS resolution).",
    "summary": "Bridge (isolated internal network), Host (shares host network), None (no network), Overlay (multi-host communication), and Macvlan (appears as physical device)."
  },
  {
    "id": 17,
    "title": "How do containers communicate with each other on the same host?",
    "category": "Docker Commands & Networking",
    "difficulty": "Intermediate",
    "explanation": "Containers communicate via a Docker network. By default, they are attached to the default `bridge` network and can communicate using their internal IP addresses.\n\nHowever, best practice dictates creating a **user-defined bridge network**. When containers are attached to a user-defined bridge, Docker provides automatic DNS resolution. This means Container A can communicate with Container B simply by using its container name (e.g., `http://container-b:8080`) instead of hardcoding IP addresses.",
    "example": "docker network create my-net\ndocker run --network my-net --name web my-web-app\ndocker run --network my-net --name db postgres\n// 'web' can now ping 'db' by name.",
    "summary": "They communicate over a Docker network. Using a user-defined bridge network is best because it provides automatic DNS resolution via container names."
  },
  {
    "id": 18,
    "title": "What is port mapping (publishing) in Docker?",
    "category": "Docker Commands & Networking",
    "difficulty": "Beginner",
    "explanation": "By default, a container is completely isolated from the outside world. To allow external traffic to reach an application inside a container, you must map (publish) a port on the host machine to a port inside the container using the `-p` or `--publish` flag.\n\nFormat: `-p <host_port>:<container_port>`.",
    "example": "`docker run -p 8080:80 nginx`\nThis routes traffic hitting port 8080 on your laptop (the host) into port 80 inside the Nginx container.",
    "mistake": "Confusing the order of ports. It is always HOST_PORT : CONTAINER_PORT.",
    "summary": "Port mapping exposes an isolated container port to a port on the host machine, allowing external access to the containerized application."
  },
  {
    "id": 19,
    "title": "Scenario: Your container exits immediately after starting. How do you troubleshoot?",
    "category": "Scenarios",
    "difficulty": "Intermediate",
    "explanation": "When a container exits immediately, it means the main process (PID 1) finished execution or crashed. To troubleshoot:\n\n1. Check the logs: Run `docker logs <container_id>`. This will usually show the error, stack trace, or missing environment variable causing the crash.\n2. Inspect the image: Use `docker inspect` to check the `Cmd` and `Entrypoint` to see what process is actually trying to run.\n3. Run interactively: Override the entrypoint to open a shell instead of running the app. `docker run -it --entrypoint /bin/sh <image>`. Once inside, manually run the startup command to see exactly where it fails.\n4. Check exit code: `docker ps -a` shows the exit code. Code `137` usually means OOM (Out of Memory) killed by the host, while `1` means an application error.",
    "tip": "Interviewers want to see a logical troubleshooting flow: Logs -> Inspect -> Override Entrypoint.",
    "summary": "Troubleshoot by reading `docker logs`, checking the exit code in `docker ps -a`, and overriding the entrypoint with `/bin/sh` to run the process manually inside the container."
  },
  {
    "id": 20,
    "title": "Scenario: Docker image is too large. How do you fix it?",
    "category": "Scenarios",
    "difficulty": "Intermediate",
    "explanation": "To drastically reduce image size:\n1. Move to a Multi-stage build. Compile the app in a builder stage and copy only the final binary/artifacts to the production stage.\n2. Swap the base image from a full OS (like `ubuntu` or `node:18`) to a minimal one (like `alpine` or `node:18-alpine`).\n3. Ensure a `.dockerignore` file is used to prevent `node_modules` or `.git` from being copied in.\n4. Collapse `RUN` layers (e.g., `RUN apt-get update && apt-get install -y vim`).\n5. Clean up package manager caches (`rm -rf /var/cache/apk/*`) in the same layer they are used.",
    "summary": "Use multi-stage builds, switch to Alpine base images, utilize `.dockerignore`, and clean up package caches in the same RUN layer."
  },
  {
    "id": 21,
    "title": "Senior Level: Explain Docker Security Best Practices.",
    "category": "Senior Level",
    "difficulty": "Advanced",
    "explanation": "For production environments, securing containers is paramount. Best practices include:\n\n1. **Run as non-root**: By default, containers run as root. Always create a dedicated user in the Dockerfile (`USER appuser`) to minimize privilege escalation risks.\n2. **Use minimal base images**: Distroless or Alpine images reduce the attack surface by removing shells and unnecessary utilities.\n3. **Scan images**: Integrate tools like Trivy, Clair, or Snyk in the CI/CD pipeline to scan for CVEs before pushing to registries.\n4. **Read-only root filesystem**: Run containers with `--read-only` to prevent attackers from modifying system files.\n5. **Drop capabilities**: Use `--cap-drop=ALL` and only add back required Linux capabilities.\n6. **Never hardcode secrets**: Inject secrets via environment variables or volume mounts at runtime, never in the Dockerfile.",
    "tip": "Running as non-root and dropping capabilities are the two most impressive points to bring up in a senior interview.",
    "summary": "Run as non-root, use minimal base images, scan for vulnerabilities in CI/CD, mount root filesystems as read-only, and drop unnecessary Linux capabilities."
  },
  {
    "id": 22,
    "title": "Docker Commands: Essential CLI commands",
    "category": "Quick Revision",
    "difficulty": "Beginner",
    "explanation": "Here is a quick revision of essential Docker commands:\n\n- `docker build -t app:1.0 .` (Builds image from Dockerfile)\n- `docker run -d -p 80:80 nginx` (Runs a container in detached mode with port mapping)\n- `docker ps` (Lists running containers)\n- `docker ps -a` (Lists all containers, including stopped)\n- `docker stop <id>` (Gracefully stops a container)\n- `docker kill <id>` (Force kills a container)\n- `docker logs -f <id>` (Tails container logs)\n- `docker exec -it <id> /bin/bash` (Opens an interactive terminal inside a running container)\n- `docker rm <id>` (Removes a stopped container)\n- `docker rmi <image>` (Removes an image)\n- `docker system prune` (Cleans up unused containers, networks, and dangling images)",
    "summary": "Revision of core commands: build, run, ps, logs, exec, rm, rmi, and system prune."
  },
  {
    "id": 51,
    "title": "What is Kubernetes and why is it needed?",
    "category": "Kubernetes Fundamentals",
    "difficulty": "Beginner",
    "explanation": "Kubernetes (K8s) is an open-source container orchestration platform originally developed by Google. While Docker is great for packaging and running individual containers, it doesn't provide a way to manage hundreds of containers across multiple servers.\n\nKubernetes solves this by automating the deployment, scaling, load balancing, networking, and management of containerized applications. It ensures high availability (if a node dies, K8s moves the containers to a healthy node) and handles zero-downtime rolling deployments.",
    "example": "If you have a web application that needs to scale from 2 containers to 50 containers during Black Friday, Kubernetes can automatically scale them out across a cluster of 10 virtual machines, load balance traffic between them, and scale them back down when traffic drops.",
    "tip": "Always position Docker as the container runtime and Kubernetes as the orchestrator/manager.",
    "summary": "Kubernetes is a container orchestration tool that automates deployment, scaling, and management of containers across a cluster of machines."
  },
  {
    "id": 52,
    "title": "Explain the Kubernetes Architecture (Control Plane vs Worker Nodes).",
    "category": "Kubernetes Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "A Kubernetes cluster consists of two main parts:\n\n1. **Control Plane (Master Nodes)**: The brain of the cluster. It manages the state, schedules applications, and responds to events. It does *not* run application workloads.\n2. **Worker Nodes**: The machines that actually run the containerized applications.\n\nThe Control Plane and Worker Nodes communicate via the Kubernetes API to ensure the actual state of the cluster matches the desired state.",
    "tip": "Be prepared to break down the specific components inside the Control Plane and Worker nodes in follow-up questions.",
    "summary": "The architecture is split into a Control Plane (brain/management) and Worker Nodes (machines running the actual application containers)."
  },
  {
    "id": 53,
    "title": "What are the core components of the Kubernetes Control Plane?",
    "category": "Kubernetes Fundamentals",
    "difficulty": "Advanced",
    "explanation": "The Control Plane consists of four primary components:\n\n1. **kube-apiserver**: The frontend of the control plane. All communication (from kubectl, worker nodes, etc.) goes through the API server via REST.\n2. **etcd**: A consistent and highly-available key-value store. It acts as the ultimate source of truth for all cluster data and state.\n3. **kube-scheduler**: Watches for newly created Pods that have no assigned node, and selects a worker node for them to run on based on resource requirements and constraints.\n4. **kube-controller-manager**: Runs controller processes (like Node Controller, ReplicaSet Controller). It constantly watches the state of the cluster and makes changes to move the current state toward the desired state.",
    "summary": "The Control Plane contains the API Server (communication), etcd (state database), Scheduler (assigns pods to nodes), and Controller Manager (maintains desired state)."
  },
  {
    "id": 54,
    "title": "What are the core components of a Worker Node?",
    "category": "Kubernetes Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "A Worker Node runs three critical components:\n\n1. **kubelet**: An agent that runs on every node. It communicates with the Control Plane's API server. It ensures that the containers described in PodSpecs are actually running and healthy on its node.\n2. **kube-proxy**: A network proxy that runs on every node. It maintains network rules, allowing network communication to your Pods from network sessions inside or outside of your cluster (implements Kubernetes Services).\n3. **Container Runtime**: The software responsible for actually running the containers (e.g., containerd, CRI-O, or historically Docker).",
    "summary": "Worker nodes contain the kubelet (manages pods locally), kube-proxy (handles networking rules), and a container runtime (executes the containers)."
  },
  {
    "id": 61,
    "title": "What is a Pod?",
    "category": "Kubernetes Core Objects",
    "difficulty": "Beginner",
    "explanation": "A Pod is the smallest, most basic deployable object in Kubernetes. You do not deploy containers directly in Kubernetes; you deploy Pods.\n\nA Pod represents a single instance of a running process in your cluster. It contains one or more tightly coupled containers that share the same network namespace (they share the same IP address and can communicate via `localhost`) and can share storage volumes.",
    "example": "Usually, it's one container per Pod (e.g., a Node.js app). However, you might use a multi-container Pod if you have a tightly coupled helper process, like a main Nginx web server container alongside a sidecar container that pulls updated configurations from a Git repo.",
    "mistake": "Saying Kubernetes runs containers. Technically true, but the management unit is *always* the Pod.",
    "summary": "A Pod is the smallest deployable unit in Kubernetes, wrapping one or more tightly coupled containers that share network and storage."
  },
  {
    "id": 62,
    "title": "What is a ReplicaSet and how does it relate to a Deployment?",
    "category": "Kubernetes Core Objects",
    "difficulty": "Intermediate",
    "explanation": "A **ReplicaSet** ensures that a specified number of identical Pod replicas are running at any given time. If a Pod crashes or is deleted, the ReplicaSet creates a new one to maintain the desired count.\n\nA **Deployment** is a higher-level concept that manages ReplicaSets. You rarely create ReplicaSets directly. Instead, you create a Deployment, which creates the ReplicaSet for you. Deployments provide declarative updates (like rolling updates and rollbacks) for Pods.",
    "tip": "Explain that Deployments are the standard way to deploy stateless applications, as they handle the lifecycle and versioning of ReplicaSets natively.",
    "summary": "A ReplicaSet maintains a fixed number of running Pods. A Deployment manages ReplicaSets, enabling rolling updates and rollbacks."
  },
  {
    "id": 63,
    "title": "What is a Kubernetes Service?",
    "category": "Kubernetes Core Objects",
    "difficulty": "Intermediate",
    "explanation": "Pods are ephemeral; they are born, they die, and they get new IP addresses when recreated. You cannot rely on a Pod's IP address for communication.\n\nA **Service** provides a stable, static IP address and DNS name that acts as a reliable load balancer in front of a set of Pods (grouped by labels). Even if the underlying Pods are destroyed and recreated, the Service IP remains constant, ensuring continuous connectivity.",
    "summary": "A Service acts as a static load balancer and stable networking endpoint for a dynamic set of underlying Pods."
  },
  {
    "id": 64,
    "title": "Explain the different types of Kubernetes Services.",
    "category": "Kubernetes Networking",
    "difficulty": "Advanced",
    "explanation": "There are four primary types of Services:\n\n1. **ClusterIP (Default)**: Exposes the service on an internal IP in the cluster. It is only reachable from *within* the cluster.\n2. **NodePort**: Exposes the service on each Worker Node's IP at a static port (between 30000-32767). It is reachable from outside the cluster by hitting `<NodeIP>:<NodePort>`.\n3. **LoadBalancer**: Provisions a cloud provider's external load balancer (e.g., AWS ELB, Azure LB) and assigns a public IP address. It automatically creates a NodePort and ClusterIP underneath.\n4. **ExternalName**: Maps the service to a DNS name (e.g., an external database) instead of routing to Pods.",
    "summary": "ClusterIP (internal only), NodePort (opens a port on all nodes), LoadBalancer (provisions cloud LB for public access), ExternalName (DNS alias)."
  },
  {
    "id": 71,
    "title": "Scenario: A Pod is stuck in 'CrashLoopBackOff'. How do you troubleshoot?",
    "category": "Scenarios",
    "difficulty": "Intermediate",
    "explanation": "CrashLoopBackOff means the container starts, crashes immediately, and Kubernetes keeps trying to restart it with an increasing delay.\n\nTroubleshooting flow:\n1. Check logs: `kubectl logs <pod-name>`. This often reveals the application error.\n2. Check previous logs: If the pod already restarted, view the crashed container's logs via `kubectl logs <pod-name> --previous`.\n3. Check events: `kubectl describe pod <pod-name>` and look at the 'Events' section at the bottom for errors regarding image pulling, mounting volumes, or failed health probes.\n4. Common causes: Misconfigured environment variables, missing ConfigMaps/Secrets, or the application failing to bind to a port.",
    "tip": "The `--previous` flag for logs is a 'pro-tip' that shows you have real-world debugging experience.",
    "summary": "Use `kubectl logs` (and `--previous`) to find app errors, and `kubectl describe pod` to check for Kubernetes-level issues like missing secrets or failed probes."
  },
  {
    "id": 72,
    "title": "Scenario: A Pod is stuck in 'Pending'. Why?",
    "category": "Scenarios",
    "difficulty": "Intermediate",
    "explanation": "'Pending' means the Pod has been accepted by the API server but hasn't been scheduled to a Worker Node yet.\n\nCommon causes:\n1. **Insufficient Resources**: The cluster nodes do not have enough free CPU or Memory to satisfy the Pod's resource *requests*.\n2. **Taints and Tolerations**: The Pod doesn't have the required tolerations to be scheduled on the available tainted nodes.\n3. **Node Selector / Affinity rules**: The Pod specifies a node selector (e.g., `disktype: ssd`) that no node matches.\n4. **PVC Issues**: The Pod is waiting for a PersistentVolumeClaim to bind to a PersistentVolume.\n\nRun `kubectl describe pod <pod-name>` to see the exact scheduling failure reason in the events.",
    "summary": "Pending usually means the Scheduler cannot find a suitable node due to resource exhaustion (CPU/RAM) or unmatched scheduling constraints (Taints/Affinity/PVCs)."
  },
  {
    "id": 91,
    "title": "Senior Level: How does Kubernetes handle Self-Healing and High Availability?",
    "category": "Senior Level",
    "difficulty": "Advanced",
    "explanation": "Kubernetes achieves self-healing via continuous control loops managed by the Controller Manager. \n\nIf a Worker Node goes down, the Node Controller detects the missing heartbeat. After a timeout (default 5 mins), the Pods on that node are marked for deletion. The ReplicaSet Controller notices the actual number of Pods is lower than the desired number, so it creates replacement Pods, and the Scheduler schedules them onto healthy nodes.\n\nHealth probes (`livenessProbe` and `readinessProbe`) ensure application-level self-healing. If a `livenessProbe` fails, the kubelet kills the container and restarts it according to its restart policy.",
    "summary": "Continuous control loops compare desired state vs actual state. If nodes fail or probes fail, Kubernetes automatically reschedules or restarts Pods to restore the desired state."
  },
  {
    "id": 92,
    "title": "Production Architecture: Explain a typical Kubernetes CI/CD flow.",
    "category": "Production Architecture",
    "difficulty": "Advanced",
    "explanation": "A standard production flow:\n\n1. **Code**: Developer pushes code to a Git repository (e.g., GitHub).\n2. **CI Pipeline**: A tool like GitHub Actions/Jenkins triggers. It runs unit tests and static code analysis.\n3. **Build & Scan**: The CI tool builds the Docker image and scans it for vulnerabilities using tools like Trivy.\n4. **Registry**: The secure image is pushed to a Container Registry (e.g., ECR, Docker Hub) with a unique tag (e.g., Git commit hash).\n5. **CD Pipeline**: A tool like ArgoCD or Flux (GitOps) detects the new image tag in the manifests repo and applies the changes to Kubernetes.\n6. **Deployment**: Kubernetes performs a Rolling Update, gracefully terminating old Pods and starting new ones, automatically updating the LoadBalancer/Ingress routing.",
    "summary": "Git Push -> CI (Test/Build/Scan) -> Push to Registry -> CD (GitOps/ArgoCD) -> K8s Rolling Deployment via Ingress/LoadBalancer."
  },
  {
    "id": 93,
    "title": "kubectl Commands: Essential CLI commands",
    "category": "Quick Revision",
    "difficulty": "Beginner",
    "explanation": "Here is a quick revision of essential kubectl commands:\n\n- `kubectl apply -f manifest.yaml` (Creates or updates resources based on a file)\n- `kubectl get pods -n <namespace>` (Lists pods in a namespace)\n- `kubectl describe pod <pod_name>` (Shows detailed state and events of a pod)\n- `kubectl logs <pod_name>` (Tails the application logs)\n- `kubectl logs <pod_name> --previous` (Views logs of a previously crashed instance)\n- `kubectl exec -it <pod_name> -- /bin/bash` (Opens an interactive shell in the pod)\n- `kubectl get svc` (Lists services)\n- `kubectl delete pod <pod_name>` (Deletes a pod; the ReplicaSet will recreate it)",
    "summary": "Revision of core commands: apply, get pods, describe, logs (and --previous), exec, and delete."
  },
  {
    "id": 94,
    "title": "Preparation Roadmap: How to master Docker & Kubernetes?",
    "category": "Roadmap",
    "difficulty": "Beginner",
    "explanation": "To prepare for a DevOps interview, follow this structured roadmap:\n\n**Phase 1: Docker Basics**\nUnderstand the difference between VMs and Containers -> Docker Architecture -> Dockerfile instructions -> Images vs Containers.\n\n**Phase 2: Docker Advanced**\nNetworking (Bridge/Host) -> Volumes vs Bind Mounts -> Multi-stage builds -> Image optimization & Security.\n\n**Phase 3: K8s Basics**\nWhy K8s? -> Control Plane vs Worker Nodes -> Pods -> ReplicaSets -> Deployments (Rolling Updates) -> Services (ClusterIP/NodePort/LoadBalancer).\n\n**Phase 4: K8s Advanced**\nConfigMaps/Secrets -> PV/PVC -> Ingress -> Probes -> Resource Limits -> HPA (Autoscaling) -> RBAC -> Troubleshooting (CrashLoopBackOff).",
    "summary": "Follow the sequence: Docker Fundamentals -> Docker Networking/Storage -> K8s Architecture -> Core Objects -> Advanced K8s (Storage, Ingress, RBAC, Probes)."
  },
  {
    "id": 95,
    "title": "Top 50: What is an Ingress and how is it different from a LoadBalancer?",
    "category": "Top 50 Questions",
    "difficulty": "Intermediate",
    "explanation": "A **LoadBalancer** service provisions a cloud provider's external load balancer (L4 - TCP/UDP) for *each* service you expose. If you have 10 microservices, you get 10 expensive load balancers.\n\nAn **Ingress** operates at the application layer (L7 - HTTP/HTTPS). It is a smart router that sits behind a *single* LoadBalancer. It examines the HTTP request (hostnames or URL paths) and routes traffic to the appropriate internal ClusterIP services based on routing rules.",
    "example": "If a user hits `api.example.com/users`, Ingress routes it to the User Service. If they hit `api.example.com/orders`, it routes to the Order Service, all using just one external IP address.",
    "summary": "LoadBalancers operate at Layer 4 and cost money per service. Ingress operates at Layer 7, providing smart HTTP routing to multiple services using a single entry point."
  }
];

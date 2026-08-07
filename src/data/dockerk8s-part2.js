export const dockerk8sPart2 = [
  {
    id: 12,
    title: "What happens if a Docker container crashes?",
    category: "Images & Containers",
    difficulty: "Intermediate",
    explanation: "If a Docker container crashes or the main process (PID 1) exits, the container stops running. Any data written to the container's writable layer (not persisted in a volume) remains intact but inaccessible until the container is restarted or committed to an image.\n\nYou can use Docker restart policies (e.g., `--restart always` or `--restart on-failure`) to automatically restart a container if it crashes. However, for production workloads, orchestration tools like Kubernetes are preferred for managing crashes and maintaining desired state.",
    example: "If a Node.js API container throws an UnhandledPromiseRejection, the process dies, and the container transitions to an 'Exited' state.",
    tip: "Mention PID 1. A container only lives as long as its primary process (PID 1) is running.",
    summary: "The container stops when its main process dies. Restart policies can automatically revive it, but orchestration is better for production."
  },
  {
    id: 13,
    title: "Explain Docker Volumes vs Bind Mounts.",
    category: "Images & Containers",
    difficulty: "Intermediate",
    explanation: "Both mechanisms allow containers to persist data outside their lifecycle.\n\n**Volumes**: Managed entirely by Docker. They are stored in a part of the host filesystem managed by Docker (`/var/lib/docker/volumes/`). They are easier to back up, migrate, and are isolated from the host OS's core file structure. This is the recommended approach for databases and persistent data.\n\n**Bind Mounts**: Maps a specific file or directory on the host machine to a directory in the container. The host path must be explicitly provided. They rely on the host machine's directory structure and OS. Commonly used during development to mount source code into a container for hot-reloading.",
    tip: "Use Bind Mounts for Dev (hot-reloading code), Volumes for Prod (persistent database storage).",
    summary: "Volumes are managed by Docker and are best for production persistence. Bind Mounts rely on specific host paths and are best for dev hot-reloading."
  },
  {
    id: 14,
    title: "How do you share data between two containers?",
    category: "Images & Containers",
    difficulty: "Intermediate",
    explanation: "You can share data by mounting the same Docker Volume or Bind Mount to both containers.\n\nWhen creating or running the containers, you define a volume (e.g., `docker volume create my-data`) and mount it to a specific path in Container A, and then mount that exact same volume to a path in Container B. Any files written to the volume by Container A will immediately be accessible by Container B.",
    example: "docker run -v my-data:/app/data container_a\ndocker run -v my-data:/shared/data container_b",
    summary: "Mount the exact same Docker Volume or Bind Mount to both containers. Changes made by one are instantly visible to the other."
  },
  {
    id: 15,
    title: "What is Docker Compose?",
    category: "Images & Containers",
    difficulty: "Beginner",
    explanation: "Docker Compose is a tool for defining and running multi-container Docker applications. Instead of running multiple `docker run` commands manually, you use a declarative YAML file (`docker-compose.yml`) to configure your application's services, networks, and volumes.\n\nWith a single command (`docker-compose up`), you can create and start all the services from your configuration. It is primarily used for local development, testing, and staging environments to spin up an app, its database, and caching layer simultaneously.",
    code: "version: '3.8'\nservices:\n  web:\n    build: .\n    ports:\n      - \"8000:8000\"\n  db:\n    image: postgres\n    environment:\n      POSTGRES_PASSWORD: secret",
    tip: "Emphasize that Compose is mostly for development and testing, whereas Kubernetes is for production orchestration.",
    summary: "A tool that uses a declarative YAML file to define and spin up multi-container applications (like a web app + database) with a single command."
  },
  // 16-30 Docker Networking & Commands & Scenarios
  {
    id: 16,
    title: "What are the default network drivers in Docker?",
    category: "Docker Commands & Networking",
    difficulty: "Advanced",
    explanation: "Docker uses network drivers to control how containers communicate. The default drivers are:\n\n1. **Bridge (default)**: Creates a private internal network on the host. Containers on the same bridge can communicate via IP (or DNS if it's a custom bridge). Used for standalone containers.\n2. **Host**: Removes network isolation between the container and the Docker host. The container uses the host's networking namespace directly (e.g., binding to port 80 in the container binds to port 80 on the host).\n3. **None**: Disables all networking for the container.\n4. **Overlay**: Connects multiple Docker daemons together and enables swarm services to communicate with each other. Used for multi-host networking.\n5. **Macvlan**: Assigns a MAC address to a container, making it appear as a physical device on the network.",
    tip: "Understand the difference between the default bridge (docker0) and user-defined bridges (which provide automatic DNS resolution).",
    summary: "Bridge (isolated internal network), Host (shares host network), None (no network), Overlay (multi-host communication), and Macvlan (appears as physical device)."
  },
  {
    id: 17,
    title: "How do containers communicate with each other on the same host?",
    category: "Docker Commands & Networking",
    difficulty: "Intermediate",
    explanation: "Containers communicate via a Docker network. By default, they are attached to the default `bridge` network and can communicate using their internal IP addresses.\n\nHowever, best practice dictates creating a **user-defined bridge network**. When containers are attached to a user-defined bridge, Docker provides automatic DNS resolution. This means Container A can communicate with Container B simply by using its container name (e.g., `http://container-b:8080`) instead of hardcoding IP addresses.",
    example: "docker network create my-net\ndocker run --network my-net --name web my-web-app\ndocker run --network my-net --name db postgres\n// 'web' can now ping 'db' by name.",
    summary: "They communicate over a Docker network. Using a user-defined bridge network is best because it provides automatic DNS resolution via container names."
  },
  {
    id: 18,
    title: "What is port mapping (publishing) in Docker?",
    category: "Docker Commands & Networking",
    difficulty: "Beginner",
    explanation: "By default, a container is completely isolated from the outside world. To allow external traffic to reach an application inside a container, you must map (publish) a port on the host machine to a port inside the container using the `-p` or `--publish` flag.\n\nFormat: `-p <host_port>:<container_port>`.",
    example: "`docker run -p 8080:80 nginx`\nThis routes traffic hitting port 8080 on your laptop (the host) into port 80 inside the Nginx container.",
    mistake: "Confusing the order of ports. It is always HOST_PORT : CONTAINER_PORT.",
    summary: "Port mapping exposes an isolated container port to a port on the host machine, allowing external access to the containerized application."
  },
  {
    id: 19,
    title: "Scenario: Your container exits immediately after starting. How do you troubleshoot?",
    category: "Scenarios",
    difficulty: "Intermediate",
    explanation: "When a container exits immediately, it means the main process (PID 1) finished execution or crashed. To troubleshoot:\n\n1. Check the logs: Run `docker logs <container_id>`. This will usually show the error, stack trace, or missing environment variable causing the crash.\n2. Inspect the image: Use `docker inspect` to check the `Cmd` and `Entrypoint` to see what process is actually trying to run.\n3. Run interactively: Override the entrypoint to open a shell instead of running the app. `docker run -it --entrypoint /bin/sh <image>`. Once inside, manually run the startup command to see exactly where it fails.\n4. Check exit code: `docker ps -a` shows the exit code. Code `137` usually means OOM (Out of Memory) killed by the host, while `1` means an application error.",
    tip: "Interviewers want to see a logical troubleshooting flow: Logs -> Inspect -> Override Entrypoint.",
    summary: "Troubleshoot by reading `docker logs`, checking the exit code in `docker ps -a`, and overriding the entrypoint with `/bin/sh` to run the process manually inside the container."
  },
  {
    id: 20,
    title: "Scenario: Docker image is too large. How do you fix it?",
    category: "Scenarios",
    difficulty: "Intermediate",
    explanation: "To drastically reduce image size:\n1. Move to a Multi-stage build. Compile the app in a builder stage and copy only the final binary/artifacts to the production stage.\n2. Swap the base image from a full OS (like `ubuntu` or `node:18`) to a minimal one (like `alpine` or `node:18-alpine`).\n3. Ensure a `.dockerignore` file is used to prevent `node_modules` or `.git` from being copied in.\n4. Collapse `RUN` layers (e.g., `RUN apt-get update && apt-get install -y vim`).\n5. Clean up package manager caches (`rm -rf /var/cache/apk/*`) in the same layer they are used.",
    summary: "Use multi-stage builds, switch to Alpine base images, utilize `.dockerignore`, and clean up package caches in the same RUN layer."
  },
  {
    id: 21,
    title: "Senior Level: Explain Docker Security Best Practices.",
    category: "Senior Level",
    difficulty: "Advanced",
    explanation: "For production environments, securing containers is paramount. Best practices include:\n\n1. **Run as non-root**: By default, containers run as root. Always create a dedicated user in the Dockerfile (`USER appuser`) to minimize privilege escalation risks.\n2. **Use minimal base images**: Distroless or Alpine images reduce the attack surface by removing shells and unnecessary utilities.\n3. **Scan images**: Integrate tools like Trivy, Clair, or Snyk in the CI/CD pipeline to scan for CVEs before pushing to registries.\n4. **Read-only root filesystem**: Run containers with `--read-only` to prevent attackers from modifying system files.\n5. **Drop capabilities**: Use `--cap-drop=ALL` and only add back required Linux capabilities.\n6. **Never hardcode secrets**: Inject secrets via environment variables or volume mounts at runtime, never in the Dockerfile.",
    tip: "Running as non-root and dropping capabilities are the two most impressive points to bring up in a senior interview.",
    summary: "Run as non-root, use minimal base images, scan for vulnerabilities in CI/CD, mount root filesystems as read-only, and drop unnecessary Linux capabilities."
  },
  {
    id: 22,
    title: "Docker Commands: Essential CLI commands",
    category: "Quick Revision",
    difficulty: "Beginner",
    explanation: "Here is a quick revision of essential Docker commands:\n\n- `docker build -t app:1.0 .` (Builds image from Dockerfile)\n- `docker run -d -p 80:80 nginx` (Runs a container in detached mode with port mapping)\n- `docker ps` (Lists running containers)\n- `docker ps -a` (Lists all containers, including stopped)\n- `docker stop <id>` (Gracefully stops a container)\n- `docker kill <id>` (Force kills a container)\n- `docker logs -f <id>` (Tails container logs)\n- `docker exec -it <id> /bin/bash` (Opens an interactive terminal inside a running container)\n- `docker rm <id>` (Removes a stopped container)\n- `docker rmi <image>` (Removes an image)\n- `docker system prune` (Cleans up unused containers, networks, and dangling images)",
    summary: "Revision of core commands: build, run, ps, logs, exec, rm, rmi, and system prune."
  }
];

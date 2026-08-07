export const dockerk8sPart4 = [
  // Senior Level & Production Architecture
  {
    id: 91,
    title: "Senior Level: How does Kubernetes handle Self-Healing and High Availability?",
    category: "Senior Level",
    difficulty: "Advanced",
    explanation: "Kubernetes achieves self-healing via continuous control loops managed by the Controller Manager. \n\nIf a Worker Node goes down, the Node Controller detects the missing heartbeat. After a timeout (default 5 mins), the Pods on that node are marked for deletion. The ReplicaSet Controller notices the actual number of Pods is lower than the desired number, so it creates replacement Pods, and the Scheduler schedules them onto healthy nodes.\n\nHealth probes (`livenessProbe` and `readinessProbe`) ensure application-level self-healing. If a `livenessProbe` fails, the kubelet kills the container and restarts it according to its restart policy.",
    summary: "Continuous control loops compare desired state vs actual state. If nodes fail or probes fail, Kubernetes automatically reschedules or restarts Pods to restore the desired state."
  },
  {
    id: 92,
    title: "Production Architecture: Explain a typical Kubernetes CI/CD flow.",
    category: "Production Architecture",
    difficulty: "Advanced",
    explanation: "A standard production flow:\n\n1. **Code**: Developer pushes code to a Git repository (e.g., GitHub).\n2. **CI Pipeline**: A tool like GitHub Actions/Jenkins triggers. It runs unit tests and static code analysis.\n3. **Build & Scan**: The CI tool builds the Docker image and scans it for vulnerabilities using tools like Trivy.\n4. **Registry**: The secure image is pushed to a Container Registry (e.g., ECR, Docker Hub) with a unique tag (e.g., Git commit hash).\n5. **CD Pipeline**: A tool like ArgoCD or Flux (GitOps) detects the new image tag in the manifests repo and applies the changes to Kubernetes.\n6. **Deployment**: Kubernetes performs a Rolling Update, gracefully terminating old Pods and starting new ones, automatically updating the LoadBalancer/Ingress routing.",
    summary: "Git Push -> CI (Test/Build/Scan) -> Push to Registry -> CD (GitOps/ArgoCD) -> K8s Rolling Deployment via Ingress/LoadBalancer."
  },
  {
    id: 93,
    title: "kubectl Commands: Essential CLI commands",
    category: "Quick Revision",
    difficulty: "Beginner",
    explanation: "Here is a quick revision of essential kubectl commands:\n\n- `kubectl apply -f manifest.yaml` (Creates or updates resources based on a file)\n- `kubectl get pods -n <namespace>` (Lists pods in a namespace)\n- `kubectl describe pod <pod_name>` (Shows detailed state and events of a pod)\n- `kubectl logs <pod_name>` (Tails the application logs)\n- `kubectl logs <pod_name> --previous` (Views logs of a previously crashed instance)\n- `kubectl exec -it <pod_name> -- /bin/bash` (Opens an interactive shell in the pod)\n- `kubectl get svc` (Lists services)\n- `kubectl delete pod <pod_name>` (Deletes a pod; the ReplicaSet will recreate it)",
    summary: "Revision of core commands: apply, get pods, describe, logs (and --previous), exec, and delete."
  },
  {
    id: 94,
    title: "Preparation Roadmap: How to master Docker & Kubernetes?",
    category: "Roadmap",
    difficulty: "Beginner",
    explanation: "To prepare for a DevOps interview, follow this structured roadmap:\n\n**Phase 1: Docker Basics**\nUnderstand the difference between VMs and Containers -> Docker Architecture -> Dockerfile instructions -> Images vs Containers.\n\n**Phase 2: Docker Advanced**\nNetworking (Bridge/Host) -> Volumes vs Bind Mounts -> Multi-stage builds -> Image optimization & Security.\n\n**Phase 3: K8s Basics**\nWhy K8s? -> Control Plane vs Worker Nodes -> Pods -> ReplicaSets -> Deployments (Rolling Updates) -> Services (ClusterIP/NodePort/LoadBalancer).\n\n**Phase 4: K8s Advanced**\nConfigMaps/Secrets -> PV/PVC -> Ingress -> Probes -> Resource Limits -> HPA (Autoscaling) -> RBAC -> Troubleshooting (CrashLoopBackOff).",
    summary: "Follow the sequence: Docker Fundamentals -> Docker Networking/Storage -> K8s Architecture -> Core Objects -> Advanced K8s (Storage, Ingress, RBAC, Probes)."
  },
  {
    id: 95,
    title: "Top 50: What is an Ingress and how is it different from a LoadBalancer?",
    category: "Top 50 Questions",
    difficulty: "Intermediate",
    explanation: "A **LoadBalancer** service provisions a cloud provider's external load balancer (L4 - TCP/UDP) for *each* service you expose. If you have 10 microservices, you get 10 expensive load balancers.\n\nAn **Ingress** operates at the application layer (L7 - HTTP/HTTPS). It is a smart router that sits behind a *single* LoadBalancer. It examines the HTTP request (hostnames or URL paths) and routes traffic to the appropriate internal ClusterIP services based on routing rules.",
    example: "If a user hits `api.example.com/users`, Ingress routes it to the User Service. If they hit `api.example.com/orders`, it routes to the Order Service, all using just one external IP address.",
    summary: "LoadBalancers operate at Layer 4 and cost money per service. Ingress operates at Layer 7, providing smart HTTP routing to multiple services using a single entry point."
  }
];

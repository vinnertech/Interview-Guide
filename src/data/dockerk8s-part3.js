export const dockerk8sPart3 = [
  // 51-60 Kubernetes Fundamentals & Architecture
  {
    id: 51,
    title: "What is Kubernetes and why is it needed?",
    category: "Kubernetes Fundamentals",
    difficulty: "Beginner",
    explanation: "Kubernetes (K8s) is an open-source container orchestration platform originally developed by Google. While Docker is great for packaging and running individual containers, it doesn't provide a way to manage hundreds of containers across multiple servers.\n\nKubernetes solves this by automating the deployment, scaling, load balancing, networking, and management of containerized applications. It ensures high availability (if a node dies, K8s moves the containers to a healthy node) and handles zero-downtime rolling deployments.",
    example: "If you have a web application that needs to scale from 2 containers to 50 containers during Black Friday, Kubernetes can automatically scale them out across a cluster of 10 virtual machines, load balance traffic between them, and scale them back down when traffic drops.",
    tip: "Always position Docker as the container runtime and Kubernetes as the orchestrator/manager.",
    summary: "Kubernetes is a container orchestration tool that automates deployment, scaling, and management of containers across a cluster of machines."
  },
  {
    id: 52,
    title: "Explain the Kubernetes Architecture (Control Plane vs Worker Nodes).",
    category: "Kubernetes Fundamentals",
    difficulty: "Intermediate",
    explanation: "A Kubernetes cluster consists of two main parts:\n\n1. **Control Plane (Master Nodes)**: The brain of the cluster. It manages the state, schedules applications, and responds to events. It does *not* run application workloads.\n2. **Worker Nodes**: The machines that actually run the containerized applications.\n\nThe Control Plane and Worker Nodes communicate via the Kubernetes API to ensure the actual state of the cluster matches the desired state.",
    tip: "Be prepared to break down the specific components inside the Control Plane and Worker nodes in follow-up questions.",
    summary: "The architecture is split into a Control Plane (brain/management) and Worker Nodes (machines running the actual application containers)."
  },
  {
    id: 53,
    title: "What are the core components of the Kubernetes Control Plane?",
    category: "Kubernetes Fundamentals",
    difficulty: "Advanced",
    explanation: "The Control Plane consists of four primary components:\n\n1. **kube-apiserver**: The frontend of the control plane. All communication (from kubectl, worker nodes, etc.) goes through the API server via REST.\n2. **etcd**: A consistent and highly-available key-value store. It acts as the ultimate source of truth for all cluster data and state.\n3. **kube-scheduler**: Watches for newly created Pods that have no assigned node, and selects a worker node for them to run on based on resource requirements and constraints.\n4. **kube-controller-manager**: Runs controller processes (like Node Controller, ReplicaSet Controller). It constantly watches the state of the cluster and makes changes to move the current state toward the desired state.",
    summary: "The Control Plane contains the API Server (communication), etcd (state database), Scheduler (assigns pods to nodes), and Controller Manager (maintains desired state)."
  },
  {
    id: 54,
    title: "What are the core components of a Worker Node?",
    category: "Kubernetes Fundamentals",
    difficulty: "Intermediate",
    explanation: "A Worker Node runs three critical components:\n\n1. **kubelet**: An agent that runs on every node. It communicates with the Control Plane's API server. It ensures that the containers described in PodSpecs are actually running and healthy on its node.\n2. **kube-proxy**: A network proxy that runs on every node. It maintains network rules, allowing network communication to your Pods from network sessions inside or outside of your cluster (implements Kubernetes Services).\n3. **Container Runtime**: The software responsible for actually running the containers (e.g., containerd, CRI-O, or historically Docker).",
    summary: "Worker nodes contain the kubelet (manages pods locally), kube-proxy (handles networking rules), and a container runtime (executes the containers)."
  },
  
  // 61-70 Kubernetes Core Objects
  {
    id: 61,
    title: "What is a Pod?",
    category: "Kubernetes Core Objects",
    difficulty: "Beginner",
    explanation: "A Pod is the smallest, most basic deployable object in Kubernetes. You do not deploy containers directly in Kubernetes; you deploy Pods.\n\nA Pod represents a single instance of a running process in your cluster. It contains one or more tightly coupled containers that share the same network namespace (they share the same IP address and can communicate via `localhost`) and can share storage volumes.",
    example: "Usually, it's one container per Pod (e.g., a Node.js app). However, you might use a multi-container Pod if you have a tightly coupled helper process, like a main Nginx web server container alongside a sidecar container that pulls updated configurations from a Git repo.",
    mistake: "Saying Kubernetes runs containers. Technically true, but the management unit is *always* the Pod.",
    summary: "A Pod is the smallest deployable unit in Kubernetes, wrapping one or more tightly coupled containers that share network and storage."
  },
  {
    id: 62,
    title: "What is a ReplicaSet and how does it relate to a Deployment?",
    category: "Kubernetes Core Objects",
    difficulty: "Intermediate",
    explanation: "A **ReplicaSet** ensures that a specified number of identical Pod replicas are running at any given time. If a Pod crashes or is deleted, the ReplicaSet creates a new one to maintain the desired count.\n\nA **Deployment** is a higher-level concept that manages ReplicaSets. You rarely create ReplicaSets directly. Instead, you create a Deployment, which creates the ReplicaSet for you. Deployments provide declarative updates (like rolling updates and rollbacks) for Pods.",
    tip: "Explain that Deployments are the standard way to deploy stateless applications, as they handle the lifecycle and versioning of ReplicaSets natively.",
    summary: "A ReplicaSet maintains a fixed number of running Pods. A Deployment manages ReplicaSets, enabling rolling updates and rollbacks."
  },
  {
    id: 63,
    title: "What is a Kubernetes Service?",
    category: "Kubernetes Core Objects",
    difficulty: "Intermediate",
    explanation: "Pods are ephemeral; they are born, they die, and they get new IP addresses when recreated. You cannot rely on a Pod's IP address for communication.\n\nA **Service** provides a stable, static IP address and DNS name that acts as a reliable load balancer in front of a set of Pods (grouped by labels). Even if the underlying Pods are destroyed and recreated, the Service IP remains constant, ensuring continuous connectivity.",
    summary: "A Service acts as a static load balancer and stable networking endpoint for a dynamic set of underlying Pods."
  },
  {
    id: 64,
    title: "Explain the different types of Kubernetes Services.",
    category: "Kubernetes Networking",
    difficulty: "Advanced",
    explanation: "There are four primary types of Services:\n\n1. **ClusterIP (Default)**: Exposes the service on an internal IP in the cluster. It is only reachable from *within* the cluster.\n2. **NodePort**: Exposes the service on each Worker Node's IP at a static port (between 30000-32767). It is reachable from outside the cluster by hitting `<NodeIP>:<NodePort>`.\n3. **LoadBalancer**: Provisions a cloud provider's external load balancer (e.g., AWS ELB, Azure LB) and assigns a public IP address. It automatically creates a NodePort and ClusterIP underneath.\n4. **ExternalName**: Maps the service to a DNS name (e.g., an external database) instead of routing to Pods.",
    summary: "ClusterIP (internal only), NodePort (opens a port on all nodes), LoadBalancer (provisions cloud LB for public access), ExternalName (DNS alias)."
  },
  
  // 71-80 Scenarios & Storage
  {
    id: 71,
    title: "Scenario: A Pod is stuck in 'CrashLoopBackOff'. How do you troubleshoot?",
    category: "Scenarios",
    difficulty: "Intermediate",
    explanation: "CrashLoopBackOff means the container starts, crashes immediately, and Kubernetes keeps trying to restart it with an increasing delay.\n\nTroubleshooting flow:\n1. Check logs: `kubectl logs <pod-name>`. This often reveals the application error.\n2. Check previous logs: If the pod already restarted, view the crashed container's logs via `kubectl logs <pod-name> --previous`.\n3. Check events: `kubectl describe pod <pod-name>` and look at the 'Events' section at the bottom for errors regarding image pulling, mounting volumes, or failed health probes.\n4. Common causes: Misconfigured environment variables, missing ConfigMaps/Secrets, or the application failing to bind to a port.",
    tip: "The `--previous` flag for logs is a 'pro-tip' that shows you have real-world debugging experience.",
    summary: "Use `kubectl logs` (and `--previous`) to find app errors, and `kubectl describe pod` to check for Kubernetes-level issues like missing secrets or failed probes."
  },
  {
    id: 72,
    title: "Scenario: A Pod is stuck in 'Pending'. Why?",
    category: "Scenarios",
    difficulty: "Intermediate",
    explanation: "'Pending' means the Pod has been accepted by the API server but hasn't been scheduled to a Worker Node yet.\n\nCommon causes:\n1. **Insufficient Resources**: The cluster nodes do not have enough free CPU or Memory to satisfy the Pod's resource *requests*.\n2. **Taints and Tolerations**: The Pod doesn't have the required tolerations to be scheduled on the available tainted nodes.\n3. **Node Selector / Affinity rules**: The Pod specifies a node selector (e.g., `disktype: ssd`) that no node matches.\n4. **PVC Issues**: The Pod is waiting for a PersistentVolumeClaim to bind to a PersistentVolume.\n\nRun `kubectl describe pod <pod-name>` to see the exact scheduling failure reason in the events.",
    summary: "Pending usually means the Scheduler cannot find a suitable node due to resource exhaustion (CPU/RAM) or unmatched scheduling constraints (Taints/Affinity/PVCs)."
  }
];

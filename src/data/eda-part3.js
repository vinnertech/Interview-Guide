export const edaPart3 = [
    // --- APACHE KAFKA (61-75) ---
    {
        id: 61,
        title: "What is Apache Kafka?",
        category: "Apache Kafka",
        difficulty: "Beginner",
        explanation: "Apache Kafka is an open-source, distributed event streaming platform used for high-throughput, low-latency, and fault-tolerant data pipelines and streaming analytics. It is fundamentally an immutable, append-only commit log.",
        summary: "A high-performance, distributed event streaming platform built on an append-only commit log."
    },
    {
        id: 62,
        title: "Why is Kafka used?",
        category: "Apache Kafka",
        difficulty: "Beginner",
        explanation: "Kafka is used when you need to process massive volumes of data (millions of events per second) reliably, store events for long periods, replay past events, or perform real-time stream processing.",
        summary: "For massive scale, high throughput, event replay, and long-term event retention."
    },
    {
        id: 63,
        title: "Kafka vs RabbitMQ?",
        category: "Apache Kafka",
        difficulty: "Intermediate",
        explanation: "- **RabbitMQ:** Smart broker, dumb consumers. Excellent at complex routing, task distribution, and deleting messages after processing.\n- **Kafka:** Dumb broker, smart consumers. Excellent at massive throughput, event streaming, retaining history (append-only log), and allowing multiple consumers to read the exact same events at their own pace.",
        summary: "RabbitMQ is for traditional message routing. Kafka is for massive event streaming and data history."
    },
    {
        id: 64,
        title: "What is a Kafka broker?",
        category: "Apache Kafka",
        difficulty: "Beginner",
        explanation: "A Kafka broker is a single server within a Kafka cluster. It receives messages from producers, writes them to disk, and serves them to consumers.",
        summary: "A single Kafka server node."
    },
    {
        id: 65,
        title: "What is a Kafka cluster?",
        category: "Apache Kafka",
        difficulty: "Beginner",
        explanation: "A group of multiple Kafka brokers working together. Clustering provides data replication, high availability, and the ability to scale horizontally.",
        summary: "A network of Kafka brokers working together to share the load and provide fault tolerance."
    },
    {
        id: 66,
        title: "What is a Kafka topic?",
        category: "Apache Kafka",
        difficulty: "Beginner",
        explanation: "A topic is a logical name/category to which events are published. It is similar to a table in a database. Topics in Kafka are multi-subscriber; any number of consumers can read from a topic.",
        summary: "The category or feed name where records are published."
    },
    {
        id: 67,
        title: "What is a Kafka partition?",
        category: "Apache Kafka",
        difficulty: "Intermediate",
        explanation: "A topic is split into multiple Partitions. Each partition is a distinct, ordered, append-only sequence of records physically stored on a broker's disk. Partitions allow a single topic's data to be split across multiple servers.",
        summary: "A physical division of a topic that enables parallel processing and horizontal scalability."
    },
    {
        id: 68,
        title: "Why are Kafka topics divided into partitions?",
        category: "Apache Kafka",
        difficulty: "Intermediate",
        explanation: "For scalability. If a topic had only one partition, its throughput would be limited by the disk and network of a single broker. By partitioning, producers and consumers can write and read from multiple brokers in parallel.",
        summary: "To distribute data across multiple brokers, enabling massive parallel processing."
    },
    {
        id: 69,
        title: "What is a Kafka offset?",
        category: "Apache Kafka",
        difficulty: "Intermediate",
        explanation: "Every message written to a partition is assigned a sequential ID number called the offset. The offset acts as the message's unique identifier within that partition and dictates the strict ordering.",
        summary: "A unique, sequential ID assigned to every message within a specific partition."
    },
    {
        id: 70,
        title: "What is a Kafka producer?",
        category: "Apache Kafka",
        difficulty: "Beginner",
        explanation: "An application that publishes data to a Kafka topic. By default, the producer balances data across all partitions, or uses a 'Partition Key' to send specific data to specific partitions.",
        summary: "The application that writes events to Kafka."
    },
    {
        id: 71,
        title: "What is a Kafka consumer?",
        category: "Apache Kafka",
        difficulty: "Beginner",
        explanation: "An application that subscribes to a topic (or multiple topics) and reads the data from its partitions. Unlike RabbitMQ, consuming a message in Kafka does NOT delete it.",
        summary: "The application that reads events from Kafka without deleting them."
    },
    {
        id: 72,
        title: "What is a Consumer Group?",
        category: "Apache Kafka",
        difficulty: "Intermediate",
        explanation: "A Consumer Group is a set of consumer instances cooperating to consume data from a topic. Kafka assigns the topic's partitions evenly among the consumers in the group. **Rule:** A partition can only be read by ONE consumer within a specific group at a time.",
        summary: "A group of consumers working together. Kafka automatically load-balances partitions among them."
    },
    {
        id: 73,
        title: "How does Kafka achieve scalability?",
        category: "Apache Kafka",
        difficulty: "Intermediate",
        explanation: "Kafka achieves scalability through Partitions and Consumer Groups. If you have 10 partitions, you can spin up 10 consumer instances in a consumer group, and each instance will read from exactly one partition in parallel.",
        summary: "By distributing data across partitions, which can be read in parallel by multiple consumers in a group."
    },
    {
        id: 74,
        title: "What is replication in Kafka?",
        category: "Apache Kafka",
        difficulty: "Intermediate",
        explanation: "To prevent data loss, Kafka copies the data from a partition to other brokers. A replication factor of 3 means the data exists on 3 different brokers. One broker acts as the Leader, and two act as Followers.",
        summary: "Copying partition data across multiple brokers for fault tolerance."
    },
    {
        id: 75,
        title: "What happens when a Kafka broker fails?",
        category: "Apache Kafka",
        difficulty: "Intermediate",
        explanation: "If a broker fails, ZooKeeper (or KRaft in newer versions) detects it. If the failed broker was the Leader for any partitions, a Follower replica on another surviving broker is automatically promoted to be the new Leader, ensuring zero downtime.",
        summary: "A follower replica automatically takes over as the new Leader."
    },

    // --- KAFKA ADVANCED (76-85) ---
    {
        id: 76,
        title: "What is the difference between leader and follower replicas?",
        category: "Kafka Advanced",
        difficulty: "Advanced",
        explanation: "- **Leader Replica:** Handles all read and write requests for a partition.\n- **Follower Replica:** Passively replicates data from the Leader. It does not serve client requests (usually), it only exists for backup.",
        summary: "The Leader handles all I/O; the Follower just copies the Leader as a backup."
    },
    {
        id: 77,
        title: "What is the ISR (In-Sync Replica)?",
        category: "Kafka Advanced",
        difficulty: "Senior",
        explanation: "The ISR is the list of Follower replicas that are currently up-to-date with the Leader. If a follower falls too far behind (e.g., due to network issues), it is removed from the ISR list. Only nodes in the ISR can be elected as the new Leader.",
        summary: "The subset of follower replicas that are fully caught up with the Leader."
    },
    {
        id: 78,
        title: "What is Kafka retention?",
        category: "Kafka Advanced",
        difficulty: "Intermediate",
        explanation: "Kafka does not delete messages when consumed. Instead, it deletes them based on a retention policy—either Time-based (e.g., delete data older than 7 days) or Size-based (e.g., delete oldest data when the topic reaches 100GB).",
        summary: "The configuration dictating how long Kafka stores data before deleting it (by time or size)."
    },
    {
        id: 79,
        title: "How does Kafka store messages?",
        category: "Kafka Advanced",
        difficulty: "Advanced",
        explanation: "Kafka writes messages sequentially to an append-only commit log on disk. Because sequential disk reads/writes are extremely fast (often faster than random memory access), Kafka achieves incredible throughput while safely writing everything to disk.",
        summary: "By appending sequentially to physical log files on the broker's disk."
    },
    {
        id: 80,
        title: "Can a Kafka message be deleted immediately after consumption?",
        category: "Kafka Advanced",
        difficulty: "Intermediate",
        explanation: "No. Kafka retains all messages according to the retention policy regardless of whether they have been consumed. This allows multiple different consumer groups, or new consumers, to replay and read the exact same data again from the past.",
        summary: "No, messages are deleted by retention policies, allowing for event replay."
    },
    {
        id: 81,
        title: "What is consumer offset management?",
        category: "Kafka Advanced",
        difficulty: "Advanced",
        explanation: "Since Kafka doesn't delete messages, it keeps track of what the consumer has read by storing the Consumer Offset (the ID of the last read message) in a special internal topic called `__consumer_offsets`. When a consumer restarts, it fetches this offset to resume reading where it left off.",
        summary: "Kafka tracking the last-read message ID for a consumer group so it can resume after a restart."
    },
    {
        id: 82,
        title: "What is auto-commit?",
        category: "Kafka Advanced",
        difficulty: "Intermediate",
        explanation: "By default, the Kafka consumer automatically commits its offset every 5 seconds in the background. While easy, this can lead to data loss if the consumer crashes after committing the offset but before actually finishing processing the data.",
        summary: "The consumer automatically saving its progress on a timer."
    },
    {
        id: 83,
        title: "Manual offset commit vs automatic offset commit?",
        category: "Kafka Advanced",
        difficulty: "Senior",
        explanation: "For reliable systems (at-least-once delivery), you must disable auto-commit (`enable.auto.commit=false`). The consumer must manually commit the offset only AFTER it has successfully processed the message and saved the results to its database.",
        summary: "Disable auto-commit and manually commit the offset only after successful processing to prevent data loss."
    },
    {
        id: 84,
        title: "What is Kafka partition ordering?",
        category: "Kafka Advanced",
        difficulty: "Senior",
        explanation: "Kafka guarantees strict message ordering ONLY within a single partition. It does NOT guarantee global ordering across an entire topic. If ordering is critical, you must ensure all related messages go to the same partition.",
        summary: "Kafka strictly guarantees message order within a single partition, but not across the entire topic."
    },
    {
        id: 85,
        title: "How do you guarantee message ordering in Kafka?",
        category: "Kafka Advanced",
        difficulty: "Senior",
        explanation: "You guarantee ordering by using a 'Partition Key'. When the producer sends an event (like `OrderUpdated`), it specifies the `OrderId` as the key. Kafka hashes the key and guarantees that all events with the same `OrderId` are routed to the exact same partition. Since a partition is read by one consumer sequentially, ordering is preserved.",
        summary: "Use a Partition Key (like CustomerId) to force related events into the same ordered partition."
    }
];

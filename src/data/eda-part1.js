export const edaPart1 = [
    // --- EVENT-DRIVEN ARCHITECTURE (1-20) ---
    {
        id: 1,
        title: "What is Event-Driven Architecture (EDA)?",
        category: "Event-Driven Architecture",
        difficulty: "Beginner",
        explanation: "Event-Driven Architecture (EDA) is a software design pattern where decoupled applications asynchronously publish and subscribe to events via a message broker. Instead of systems requesting data from one another (synchronous API calls), systems react to state changes (events) as they occur.",
        summary: "A software architecture pattern where decoupled services asynchronously communicate by producing and consuming events."
    },
    {
        id: 2,
        title: "What is an event?",
        category: "Event-Driven Architecture",
        difficulty: "Beginner",
        explanation: "An event is a record of a significant change in state or an action that has happened in the past. It is an immutable fact. For example, `OrderPlaced`, `UserRegistered`, or `PaymentProcessed`.",
        tip: "Always name events in the past tense (e.g., `OrderCreated`, not `CreateOrder`).",
        summary: "An immutable record of a state change that has occurred in the past."
    },
    {
        id: 3,
        title: "What is event-driven communication?",
        category: "Event-Driven Architecture",
        difficulty: "Beginner",
        explanation: "It is an asynchronous communication model where a sender (producer) emits an event to a broker without knowing who will receive it. Receivers (consumers) listen for specific events and process them independently. The producer and consumer do not wait for each other.",
        summary: "Asynchronous, decoupled communication where producers emit events and consumers react to them."
    },
    {
        id: 4,
        title: "What are the main components of an event-driven architecture?",
        category: "Event-Driven Architecture",
        difficulty: "Beginner",
        explanation: "1. **Event Producers:** Applications that generate and publish events.\n2. **Message Broker (Event Router/Bus):** The middleware (e.g., RabbitMQ, Kafka) that ingests, stores, and routes events.\n3. **Event Consumers:** Applications that listen to the broker and react to events.",
        summary: "Event Producers, a Message Broker, and Event Consumers."
    },
    {
        id: 5,
        title: "What is the difference between synchronous and asynchronous communication?",
        category: "Event-Driven Architecture",
        difficulty: "Beginner",
        explanation: "- **Synchronous (REST/gRPC):** The caller makes a request and blocks (waits) until the receiver processes it and returns a response. If the receiver is down, the request fails.\n- **Asynchronous (EDA):** The caller sends a message to a broker and immediately moves on. The receiver processes it whenever it is ready. The caller is not blocked.",
        summary: "Synchronous blocks waiting for a response; Asynchronous sends a message and moves on immediately."
    },
    {
        id: 6,
        title: "What are the advantages of event-driven architecture?",
        category: "Event-Driven Architecture",
        difficulty: "Intermediate",
        explanation: "1. **Loose Coupling:** Services do not know about each other.\n2. **Scalability:** Producers and consumers scale independently.\n3. **Resiliency:** If a consumer goes down, messages are stored in the broker and processed when it recovers.\n4. **Extensibility:** You can add new consumers to an event without modifying the producer.",
        summary: "Loose coupling, extreme scalability, high resiliency, and easy extensibility."
    },
    {
        id: 7,
        title: "What are the disadvantages of event-driven architecture?",
        category: "Event-Driven Architecture",
        difficulty: "Intermediate",
        explanation: "1. **Complexity:** Harder to trace and debug workflows across multiple services.\n2. **Eventual Consistency:** Data is not updated instantly across all services.\n3. **Message Ordering:** Guaranteeing the order of events can be difficult.\n4. **Duplicate Processing:** Consumers must be idempotent to handle duplicate messages.",
        summary: "High architectural complexity, eventual consistency, and challenges with ordering and duplicates."
    },
    {
        id: 8,
        title: "What is loose coupling?",
        category: "Event-Driven Architecture",
        difficulty: "Intermediate",
        explanation: "Loose coupling is a design principle where components or services have minimal dependencies on each other. A change in one service does not require a change in another, and the failure of one service does not cascade and crash others.",
        summary: "Minimizing dependencies between services so they can evolve and fail independently."
    },
    {
        id: 9,
        title: "How does EDA help achieve loose coupling?",
        category: "Event-Driven Architecture",
        difficulty: "Intermediate",
        explanation: "In EDA, the producer only needs to know about the Message Broker and the event schema. It does not know the IP address, API contract, or even the existence of the consumers. This removes direct HTTP dependencies.",
        summary: "Producers and consumers only depend on the Message Broker and the event schema, not on each other."
    },
    {
        id: 10,
        title: "What is a producer?",
        category: "Event-Driven Architecture",
        difficulty: "Beginner",
        explanation: "A producer (or publisher) is the application or service that creates an event and sends it to the message broker. It is responsible for the 'fire' part of 'fire and forget'.",
        summary: "The application that creates and sends an event to the message broker."
    },
    {
        id: 11,
        title: "What is a consumer?",
        category: "Event-Driven Architecture",
        difficulty: "Beginner",
        explanation: "A consumer (or subscriber) is the application that connects to the message broker, listens for specific events, pulls them off the queue/topic, and executes business logic in response.",
        summary: "The application that listens for and processes events from the message broker."
    },
    {
        id: 12,
        title: "What is a message broker?",
        category: "Event-Driven Architecture",
        difficulty: "Beginner",
        explanation: "A message broker is the architectural middleware that facilitates communication between producers and consumers. It receives messages, validates them, routes them, stores them if consumers are offline, and delivers them.",
        example: "RabbitMQ, Apache Kafka, Azure Service Bus, and Amazon SQS.",
        summary: "The middleware infrastructure that routes, stores, and delivers messages between services."
    },
    {
        id: 13,
        title: "What is a queue?",
        category: "Event-Driven Architecture",
        difficulty: "Beginner",
        explanation: "A queue is a data structure within a message broker that holds messages in a First-In-First-Out (FIFO) manner until a consumer is ready to process them. Once a message is consumed successfully, it is typically deleted from the queue.",
        summary: "A FIFO buffer that holds messages until they are processed by a single consumer."
    },
    {
        id: 14,
        title: "What is a topic?",
        category: "Event-Driven Architecture",
        difficulty: "Beginner",
        explanation: "A topic is a named channel or category to which producers publish messages. Unlike a queue, multiple independent consumers (or consumer groups) can subscribe to the same topic and each receive a copy of the message.",
        summary: "A broadcast channel where multiple independent consumers can receive the same message."
    },
    {
        id: 15,
        title: "Queue vs Topic?",
        category: "Event-Driven Architecture",
        difficulty: "Intermediate",
        explanation: "- **Queue (Point-to-Point):** A message is consumed by exactly ONE consumer. Used for distributing work/tasks.\n- **Topic (Pub/Sub):** A message is consumed by MULTIPLE consumers simultaneously. Used for broadcasting events (e.g., `OrderPlaced` sent to EmailService, InventoryService, and AnalyticsService).",
        summary: "Queues are for 1-to-1 task distribution. Topics are for 1-to-Many event broadcasting."
    },
    {
        id: 16,
        title: "What is publish/subscribe (Pub/Sub)?",
        category: "Event-Driven Architecture",
        difficulty: "Intermediate",
        explanation: "Pub/Sub is a messaging pattern where the sender (publisher) broadcasts a message to a topic. Any number of receivers (subscribers) who have expressed interest in that topic will receive a copy of the message. The publisher has no knowledge of the subscribers.",
        summary: "A 1-to-Many broadcasting pattern using Topics."
    },
    {
        id: 17,
        title: "What is point-to-point messaging?",
        category: "Event-Driven Architecture",
        difficulty: "Intermediate",
        explanation: "A messaging pattern where a sender sends a message to a specific queue, and exactly one receiver consumes it. Even if multiple consumer instances are listening to the queue, the broker ensures only one instance gets the message (load balancing).",
        summary: "A 1-to-1 pattern using Queues, ideal for load balancing worker tasks."
    },
    {
        id: 18,
        title: "What is event notification vs event-carried state transfer?",
        category: "Event-Driven Architecture",
        difficulty: "Senior",
        explanation: "- **Event Notification:** The event contains minimal data (e.g., `OrderId: 123`). The consumer must make a synchronous API call back to the producer to get the full order details.\n- **Event-Carried State Transfer:** The event contains all necessary state (e.g., the entire Order object). The consumer updates its own local database, eliminating the need to query the producer.",
        summary: "Notification sends just an ID (requiring an API callback). State Transfer sends the full data payload."
    },
    {
        id: 19,
        title: "What is an event contract?",
        category: "Event-Driven Architecture",
        difficulty: "Intermediate",
        explanation: "An event contract is the schema (structure) of the message payload (usually JSON, Avro, or Protobuf). Both the producer and consumer must agree on this schema. If the producer changes the schema and breaks the contract, the consumer will fail to deserialize the message.",
        summary: "The agreed-upon data schema (JSON/Avro) for the event payload."
    },
    {
        id: 20,
        title: "What challenges exist when designing event-driven microservices?",
        category: "Event-Driven Architecture",
        difficulty: "Senior",
        explanation: "Key challenges include:\n1. Handling duplicate messages (Idempotency).\n2. Handling out-of-order messages.\n3. Managing distributed transactions (requires Saga pattern).\n4. Ensuring messages are not lost if the database commits but the broker publish fails (requires Outbox pattern).\n5. Debugging complex asynchronous flows.",
        summary: "Idempotency, ordering, distributed transactions (Saga), and guaranteed publishing (Outbox)."
    },

    // --- MESSAGING & RELIABILITY (21-30) ---
    {
        id: 21,
        title: "What is message delivery?",
        category: "Messaging & Reliability",
        difficulty: "Beginner",
        explanation: "Message delivery refers to the guarantees provided by the message broker regarding how and if a message will reach the consumer. There are three main semantics: At-most-once, At-least-once, and Exactly-once.",
        summary: "The specific guarantees a broker provides for delivering a message to a consumer."
    },
    {
        id: 22,
        title: "What is at-most-once delivery?",
        category: "Messaging & Reliability",
        difficulty: "Intermediate",
        explanation: "The message is delivered 0 or 1 times. It is \"fire and forget\". If the consumer crashes while processing, the message is lost forever. It has the highest performance but lowest reliability.",
        summary: "Fire-and-forget. The message might be lost, but it will never be duplicated."
    },
    {
        id: 23,
        title: "What is at-least-once delivery?",
        category: "Messaging & Reliability",
        difficulty: "Intermediate",
        explanation: "The message is delivered 1 or more times. The broker waits for an explicit acknowledgment (ACK) from the consumer. If the consumer crashes before ACKing, the broker resends the message. This guarantees no data loss, but can result in duplicate messages.",
        summary: "Guaranteed delivery, but the consumer might receive the same message more than once."
    },
    {
        id: 24,
        title: "What is exactly-once delivery?",
        category: "Messaging & Reliability",
        difficulty: "Senior",
        explanation: "The Holy Grail of messaging. The message is delivered and processed exactly 1 time. It requires complex coordination between the producer, broker, and consumer to guarantee neither duplicates nor loss occur.",
        summary: "The message is delivered and processed exactly 1 time. Hardest to implement."
    },
    {
        id: 25,
        title: "Why is exactly-once delivery difficult in distributed systems?",
        category: "Messaging & Reliability",
        difficulty: "Senior",
        explanation: "Because networks are unreliable. If a consumer successfully processes a message in its database but the network drops the ACK sent back to the broker, the broker will assume failure and resend the message, violating the \"exactly-once\" rule.",
        summary: "Network failures during the Acknowledgment phase cause brokers to resend messages, resulting in duplicates."
    },
    {
        id: 26,
        title: "What is message acknowledgment?",
        category: "Messaging & Reliability",
        difficulty: "Intermediate",
        explanation: "It is a signal sent from the consumer back to the message broker stating, \"I have successfully processed this message, you can now safely delete it from the queue.\" It is the foundation of at-least-once delivery.",
        summary: "A signal from consumer to broker confirming successful processing so the message can be deleted."
    },
    {
        id: 27,
        title: "What happens when a consumer fails before acknowledging a message?",
        category: "Messaging & Reliability",
        difficulty: "Intermediate",
        explanation: "The message broker will realize the consumer's connection dropped (or a timeout occurred) without receiving an ACK. The broker will then put the message back into the queue and deliver it to another consumer (or retry the same one when it recovers).",
        summary: "The broker requeues the message and delivers it again (causing a potential duplicate)."
    },
    {
        id: 28,
        title: "What is message retry?",
        category: "Messaging & Reliability",
        difficulty: "Intermediate",
        explanation: "When a consumer encounters a transient error (e.g., database timeout or API rate limit) while processing a message, it can Negative-Acknowledge (NACK) the message or simply let it timeout, prompting the broker to redeliver it for a retry.",
        summary: "Redelivering a message that failed due to a temporary error."
    },
    {
        id: 29,
        title: "What is a Dead Letter Queue (DLQ)?",
        category: "Messaging & Reliability",
        difficulty: "Intermediate",
        explanation: "A Dead Letter Queue is a special queue where messages are sent if they cannot be processed successfully after a maximum number of retry attempts. This prevents \"poison messages\" from infinitely looping and blocking the main queue.",
        summary: "A parking lot queue for messages that permanently fail processing, allowing for manual investigation."
    },
    {
        id: 30,
        title: "What is idempotent message processing?",
        category: "Messaging & Reliability",
        difficulty: "Senior",
        explanation: "Idempotency means that processing the same message multiple times has the exact same effect as processing it once. Because brokers guarantee at-least-once delivery, consumers MUST be idempotent. This is usually achieved by storing the `MessageId` in the database and checking if it already exists before processing.",
        summary: "Designing consumers so that receiving duplicate messages does not corrupt system state."
    }
];

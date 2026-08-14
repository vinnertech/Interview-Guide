export const edaQuestions = [
  {
    "id": 1,
    "title": "What is Event-Driven Architecture (EDA)?",
    "category": "Event-Driven Architecture",
    "difficulty": "Beginner",
    "explanation": "Event-Driven Architecture (EDA) is a software design pattern where decoupled applications asynchronously publish and subscribe to events via a message broker. Instead of systems requesting data from one another (synchronous API calls), systems react to state changes (events) as they occur.",
    "summary": "A software architecture pattern where decoupled services asynchronously communicate by producing and consuming events."
  },
  {
    "id": 2,
    "title": "What is an event?",
    "category": "Event-Driven Architecture",
    "difficulty": "Beginner",
    "explanation": "An event is a record of a significant change in state or an action that has happened in the past. It is an immutable fact. For example, `OrderPlaced`, `UserRegistered`, or `PaymentProcessed`.",
    "tip": "Always name events in the past tense (e.g., `OrderCreated`, not `CreateOrder`).",
    "summary": "An immutable record of a state change that has occurred in the past."
  },
  {
    "id": 3,
    "title": "What is event-driven communication?",
    "category": "Event-Driven Architecture",
    "difficulty": "Beginner",
    "explanation": "It is an asynchronous communication model where a sender (producer) emits an event to a broker without knowing who will receive it. Receivers (consumers) listen for specific events and process them independently. The producer and consumer do not wait for each other.",
    "summary": "Asynchronous, decoupled communication where producers emit events and consumers react to them."
  },
  {
    "id": 4,
    "title": "What are the main components of an event-driven architecture?",
    "category": "Event-Driven Architecture",
    "difficulty": "Beginner",
    "explanation": "1. **Event Producers:** Applications that generate and publish events.\n2. **Message Broker (Event Router/Bus):** The middleware (e.g., RabbitMQ, Kafka) that ingests, stores, and routes events.\n3. **Event Consumers:** Applications that listen to the broker and react to events.",
    "summary": "Event Producers, a Message Broker, and Event Consumers."
  },
  {
    "id": 5,
    "title": "What is the difference between synchronous and asynchronous communication?",
    "category": "Event-Driven Architecture",
    "difficulty": "Beginner",
    "explanation": "- **Synchronous (REST/gRPC):** The caller makes a request and blocks (waits) until the receiver processes it and returns a response. If the receiver is down, the request fails.\n- **Asynchronous (EDA):** The caller sends a message to a broker and immediately moves on. The receiver processes it whenever it is ready. The caller is not blocked.",
    "summary": "Synchronous blocks waiting for a response; Asynchronous sends a message and moves on immediately."
  },
  {
    "id": 6,
    "title": "What are the advantages of event-driven architecture?",
    "category": "Event-Driven Architecture",
    "difficulty": "Intermediate",
    "explanation": "1. **Loose Coupling:** Services do not know about each other.\n2. **Scalability:** Producers and consumers scale independently.\n3. **Resiliency:** If a consumer goes down, messages are stored in the broker and processed when it recovers.\n4. **Extensibility:** You can add new consumers to an event without modifying the producer.",
    "summary": "Loose coupling, extreme scalability, high resiliency, and easy extensibility."
  },
  {
    "id": 7,
    "title": "What are the disadvantages of event-driven architecture?",
    "category": "Event-Driven Architecture",
    "difficulty": "Intermediate",
    "explanation": "1. **Complexity:** Harder to trace and debug workflows across multiple services.\n2. **Eventual Consistency:** Data is not updated instantly across all services.\n3. **Message Ordering:** Guaranteeing the order of events can be difficult.\n4. **Duplicate Processing:** Consumers must be idempotent to handle duplicate messages.",
    "summary": "High architectural complexity, eventual consistency, and challenges with ordering and duplicates."
  },
  {
    "id": 8,
    "title": "What is loose coupling?",
    "category": "Event-Driven Architecture",
    "difficulty": "Intermediate",
    "explanation": "Loose coupling is a design principle where components or services have minimal dependencies on each other. A change in one service does not require a change in another, and the failure of one service does not cascade and crash others.",
    "summary": "Minimizing dependencies between services so they can evolve and fail independently."
  },
  {
    "id": 9,
    "title": "How does EDA help achieve loose coupling?",
    "category": "Event-Driven Architecture",
    "difficulty": "Intermediate",
    "explanation": "In EDA, the producer only needs to know about the Message Broker and the event schema. It does not know the IP address, API contract, or even the existence of the consumers. This removes direct HTTP dependencies.",
    "summary": "Producers and consumers only depend on the Message Broker and the event schema, not on each other."
  },
  {
    "id": 10,
    "title": "What is a producer?",
    "category": "Event-Driven Architecture",
    "difficulty": "Beginner",
    "explanation": "A producer (or publisher) is the application or service that creates an event and sends it to the message broker. It is responsible for the 'fire' part of 'fire and forget'.",
    "summary": "The application that creates and sends an event to the message broker."
  },
  {
    "id": 11,
    "title": "What is a consumer?",
    "category": "Event-Driven Architecture",
    "difficulty": "Beginner",
    "explanation": "A consumer (or subscriber) is the application that connects to the message broker, listens for specific events, pulls them off the queue/topic, and executes business logic in response.",
    "summary": "The application that listens for and processes events from the message broker."
  },
  {
    "id": 12,
    "title": "What is a message broker?",
    "category": "Event-Driven Architecture",
    "difficulty": "Beginner",
    "explanation": "A message broker is the architectural middleware that facilitates communication between producers and consumers. It receives messages, validates them, routes them, stores them if consumers are offline, and delivers them.",
    "example": "RabbitMQ, Apache Kafka, Azure Service Bus, and Amazon SQS.",
    "summary": "The middleware infrastructure that routes, stores, and delivers messages between services."
  },
  {
    "id": 13,
    "title": "What is a queue?",
    "category": "Event-Driven Architecture",
    "difficulty": "Beginner",
    "explanation": "A queue is a data structure within a message broker that holds messages in a First-In-First-Out (FIFO) manner until a consumer is ready to process them. Once a message is consumed successfully, it is typically deleted from the queue.",
    "summary": "A FIFO buffer that holds messages until they are processed by a single consumer."
  },
  {
    "id": 14,
    "title": "What is a topic?",
    "category": "Event-Driven Architecture",
    "difficulty": "Beginner",
    "explanation": "A topic is a named channel or category to which producers publish messages. Unlike a queue, multiple independent consumers (or consumer groups) can subscribe to the same topic and each receive a copy of the message.",
    "summary": "A broadcast channel where multiple independent consumers can receive the same message."
  },
  {
    "id": 15,
    "title": "Queue vs Topic?",
    "category": "Event-Driven Architecture",
    "difficulty": "Intermediate",
    "explanation": "- **Queue (Point-to-Point):** A message is consumed by exactly ONE consumer. Used for distributing work/tasks.\n- **Topic (Pub/Sub):** A message is consumed by MULTIPLE consumers simultaneously. Used for broadcasting events (e.g., `OrderPlaced` sent to EmailService, InventoryService, and AnalyticsService).",
    "summary": "Queues are for 1-to-1 task distribution. Topics are for 1-to-Many event broadcasting."
  },
  {
    "id": 16,
    "title": "What is publish/subscribe (Pub/Sub)?",
    "category": "Event-Driven Architecture",
    "difficulty": "Intermediate",
    "explanation": "Pub/Sub is a messaging pattern where the sender (publisher) broadcasts a message to a topic. Any number of receivers (subscribers) who have expressed interest in that topic will receive a copy of the message. The publisher has no knowledge of the subscribers.",
    "summary": "A 1-to-Many broadcasting pattern using Topics."
  },
  {
    "id": 17,
    "title": "What is point-to-point messaging?",
    "category": "Event-Driven Architecture",
    "difficulty": "Intermediate",
    "explanation": "A messaging pattern where a sender sends a message to a specific queue, and exactly one receiver consumes it. Even if multiple consumer instances are listening to the queue, the broker ensures only one instance gets the message (load balancing).",
    "summary": "A 1-to-1 pattern using Queues, ideal for load balancing worker tasks."
  },
  {
    "id": 18,
    "title": "What is event notification vs event-carried state transfer?",
    "category": "Event-Driven Architecture",
    "difficulty": "Senior",
    "explanation": "- **Event Notification:** The event contains minimal data (e.g., `OrderId: 123`). The consumer must make a synchronous API call back to the producer to get the full order details.\n- **Event-Carried State Transfer:** The event contains all necessary state (e.g., the entire Order object). The consumer updates its own local database, eliminating the need to query the producer.",
    "summary": "Notification sends just an ID (requiring an API callback). State Transfer sends the full data payload."
  },
  {
    "id": 19,
    "title": "What is an event contract?",
    "category": "Event-Driven Architecture",
    "difficulty": "Intermediate",
    "explanation": "An event contract is the schema (structure) of the message payload (usually JSON, Avro, or Protobuf). Both the producer and consumer must agree on this schema. If the producer changes the schema and breaks the contract, the consumer will fail to deserialize the message.",
    "summary": "The agreed-upon data schema (JSON/Avro) for the event payload."
  },
  {
    "id": 20,
    "title": "What challenges exist when designing event-driven microservices?",
    "category": "Event-Driven Architecture",
    "difficulty": "Senior",
    "explanation": "Key challenges include:\n1. Handling duplicate messages (Idempotency).\n2. Handling out-of-order messages.\n3. Managing distributed transactions (requires Saga pattern).\n4. Ensuring messages are not lost if the database commits but the broker publish fails (requires Outbox pattern).\n5. Debugging complex asynchronous flows.",
    "summary": "Idempotency, ordering, distributed transactions (Saga), and guaranteed publishing (Outbox)."
  },
  {
    "id": 21,
    "title": "What is message delivery?",
    "category": "Messaging & Reliability",
    "difficulty": "Beginner",
    "explanation": "Message delivery refers to the guarantees provided by the message broker regarding how and if a message will reach the consumer. There are three main semantics: At-most-once, At-least-once, and Exactly-once.",
    "summary": "The specific guarantees a broker provides for delivering a message to a consumer."
  },
  {
    "id": 22,
    "title": "What is at-most-once delivery?",
    "category": "Messaging & Reliability",
    "difficulty": "Intermediate",
    "explanation": "The message is delivered 0 or 1 times. It is \"fire and forget\". If the consumer crashes while processing, the message is lost forever. It has the highest performance but lowest reliability.",
    "summary": "Fire-and-forget. The message might be lost, but it will never be duplicated."
  },
  {
    "id": 23,
    "title": "What is at-least-once delivery?",
    "category": "Messaging & Reliability",
    "difficulty": "Intermediate",
    "explanation": "The message is delivered 1 or more times. The broker waits for an explicit acknowledgment (ACK) from the consumer. If the consumer crashes before ACKing, the broker resends the message. This guarantees no data loss, but can result in duplicate messages.",
    "summary": "Guaranteed delivery, but the consumer might receive the same message more than once."
  },
  {
    "id": 24,
    "title": "What is exactly-once delivery?",
    "category": "Messaging & Reliability",
    "difficulty": "Senior",
    "explanation": "The Holy Grail of messaging. The message is delivered and processed exactly 1 time. It requires complex coordination between the producer, broker, and consumer to guarantee neither duplicates nor loss occur.",
    "summary": "The message is delivered and processed exactly 1 time. Hardest to implement."
  },
  {
    "id": 25,
    "title": "Why is exactly-once delivery difficult in distributed systems?",
    "category": "Messaging & Reliability",
    "difficulty": "Senior",
    "explanation": "Because networks are unreliable. If a consumer successfully processes a message in its database but the network drops the ACK sent back to the broker, the broker will assume failure and resend the message, violating the \"exactly-once\" rule.",
    "summary": "Network failures during the Acknowledgment phase cause brokers to resend messages, resulting in duplicates."
  },
  {
    "id": 26,
    "title": "What is message acknowledgment?",
    "category": "Messaging & Reliability",
    "difficulty": "Intermediate",
    "explanation": "It is a signal sent from the consumer back to the message broker stating, \"I have successfully processed this message, you can now safely delete it from the queue.\" It is the foundation of at-least-once delivery.",
    "summary": "A signal from consumer to broker confirming successful processing so the message can be deleted."
  },
  {
    "id": 27,
    "title": "What happens when a consumer fails before acknowledging a message?",
    "category": "Messaging & Reliability",
    "difficulty": "Intermediate",
    "explanation": "The message broker will realize the consumer's connection dropped (or a timeout occurred) without receiving an ACK. The broker will then put the message back into the queue and deliver it to another consumer (or retry the same one when it recovers).",
    "summary": "The broker requeues the message and delivers it again (causing a potential duplicate)."
  },
  {
    "id": 28,
    "title": "What is message retry?",
    "category": "Messaging & Reliability",
    "difficulty": "Intermediate",
    "explanation": "When a consumer encounters a transient error (e.g., database timeout or API rate limit) while processing a message, it can Negative-Acknowledge (NACK) the message or simply let it timeout, prompting the broker to redeliver it for a retry.",
    "summary": "Redelivering a message that failed due to a temporary error."
  },
  {
    "id": 29,
    "title": "What is a Dead Letter Queue (DLQ)?",
    "category": "Messaging & Reliability",
    "difficulty": "Intermediate",
    "explanation": "A Dead Letter Queue is a special queue where messages are sent if they cannot be processed successfully after a maximum number of retry attempts. This prevents \"poison messages\" from infinitely looping and blocking the main queue.",
    "summary": "A parking lot queue for messages that permanently fail processing, allowing for manual investigation."
  },
  {
    "id": 30,
    "title": "What is idempotent message processing?",
    "category": "Messaging & Reliability",
    "difficulty": "Senior",
    "explanation": "Idempotency means that processing the same message multiple times has the exact same effect as processing it once. Because brokers guarantee at-least-once delivery, consumers MUST be idempotent. This is usually achieved by storing the `MessageId` in the database and checking if it already exists before processing.",
    "summary": "Designing consumers so that receiving duplicate messages does not corrupt system state."
  },
  {
    "id": 31,
    "title": "What is RabbitMQ?",
    "category": "RabbitMQ",
    "difficulty": "Beginner",
    "explanation": "RabbitMQ is a highly popular, open-source message broker written in Erlang. It acts as middleware that receives messages from producers, routes them based on complex rules, and delivers them to consumers.",
    "summary": "A traditional, open-source message broker specialized in complex routing and task distribution."
  },
  {
    "id": 32,
    "title": "Why is RabbitMQ used?",
    "category": "RabbitMQ",
    "difficulty": "Beginner",
    "explanation": "It is primarily used for asynchronous task distribution, decoupling microservices, and acting as a shock-absorber during traffic spikes to prevent databases and APIs from being overwhelmed.",
    "summary": "To decouple services, distribute heavy tasks asynchronously, and buffer traffic spikes."
  },
  {
    "id": 33,
    "title": "What protocol does RabbitMQ commonly use?",
    "category": "RabbitMQ",
    "difficulty": "Beginner",
    "explanation": "RabbitMQ implements the AMQP (Advanced Message Queuing Protocol) 0-9-1 by default, though it also supports MQTT, STOMP, and HTTP.",
    "summary": "AMQP (Advanced Message Queuing Protocol)."
  },
  {
    "id": 34,
    "title": "What is AMQP?",
    "category": "RabbitMQ",
    "difficulty": "Intermediate",
    "explanation": "AMQP is an open standard, binary application layer protocol designed for messaging middleware. It defines the architecture of Exchanges, Bindings, and Queues that RabbitMQ relies upon.",
    "summary": "A standardized messaging protocol defining Exchanges, Bindings, and Queues."
  },
  {
    "id": 35,
    "title": "What are the major components of RabbitMQ?",
    "category": "RabbitMQ",
    "difficulty": "Beginner",
    "explanation": "The major components are the Producer, the Exchange, the Binding (with Routing Key), the Queue, and the Consumer.",
    "summary": "Producer, Exchange, Binding, Queue, Consumer."
  },
  {
    "id": 36,
    "title": "What is a Producer in RabbitMQ?",
    "category": "RabbitMQ",
    "difficulty": "Beginner",
    "explanation": "A Producer is an application that creates and sends messages. Crucially, in RabbitMQ, a producer NEVER sends a message directly to a queue. It always sends it to an Exchange.",
    "summary": "An application that publishes messages to an Exchange."
  },
  {
    "id": 37,
    "title": "What is a Consumer?",
    "category": "RabbitMQ",
    "difficulty": "Beginner",
    "explanation": "An application that connects to RabbitMQ and subscribes to a specific Queue to receive and process messages.",
    "summary": "An application that reads messages from a Queue."
  },
  {
    "id": 38,
    "title": "What is a Queue?",
    "category": "RabbitMQ",
    "difficulty": "Beginner",
    "explanation": "A Queue is a sequential, FIFO buffer in RabbitMQ that stores messages until they can be safely consumed and acknowledged.",
    "summary": "A buffer that stores messages until consumed."
  },
  {
    "id": 39,
    "title": "What is an Exchange?",
    "category": "RabbitMQ",
    "difficulty": "Intermediate",
    "explanation": "An Exchange is the message routing agent. It receives messages from producers and pushes them to zero, one, or multiple queues based on rules (Exchange Types and Bindings).",
    "summary": "The routing engine that receives messages and decides which Queues should get them."
  },
  {
    "id": 40,
    "title": "What is a Binding?",
    "category": "RabbitMQ",
    "difficulty": "Intermediate",
    "explanation": "A Binding is a link (or relationship) between an Exchange and a Queue. It tells the Exchange, 'Please route messages to this Queue.'",
    "summary": "The connection linking an Exchange to a specific Queue."
  },
  {
    "id": 41,
    "title": "What is a Routing Key?",
    "category": "RabbitMQ",
    "difficulty": "Intermediate",
    "explanation": "A Routing Key is a string attribute added to a message by the producer. The Exchange looks at this key and compares it against the Binding rules to decide which queues should receive the message.",
    "summary": "A label on a message used by the Exchange to determine where to route it."
  },
  {
    "id": 42,
    "title": "How does a message flow through RabbitMQ?",
    "category": "RabbitMQ",
    "difficulty": "Intermediate",
    "explanation": "1. Producer publishes a message to an Exchange with a Routing Key.\n2. The Exchange compares the Routing Key against its Bindings.\n3. The Exchange routes the message into the appropriate Queue(s).\n4. The Consumer reads the message from the Queue.",
    "example": "Producer → Exchange → Binding → Queue → Consumer",
    "summary": "Producer -> Exchange -> Queue -> Consumer."
  },
  {
    "id": 43,
    "title": "What is a Direct Exchange?",
    "category": "RabbitMQ",
    "difficulty": "Intermediate",
    "explanation": "A Direct Exchange routes a message to a queue ONLY if the message's Routing Key exactly matches the Queue's Binding Key. E.g., routing key `pdf.create` matches binding key `pdf.create`.",
    "summary": "Routes messages via exact matches of the Routing Key."
  },
  {
    "id": 44,
    "title": "What is a Fanout Exchange?",
    "category": "RabbitMQ",
    "difficulty": "Intermediate",
    "explanation": "A Fanout Exchange ignores the routing key completely. It simply broadcasts a copy of the message to ALL queues that are bound to it. This is the classic Pub/Sub pattern.",
    "summary": "Broadcasts messages to all bound queues, ignoring routing keys."
  },
  {
    "id": 45,
    "title": "What is a Topic Exchange?",
    "category": "RabbitMQ",
    "difficulty": "Advanced",
    "explanation": "A Topic Exchange routes messages based on wildcard pattern matching of the routing key. Routing keys are dot-separated (e.g., `user.created.europe`). Bindings can use `*` (matches one word) or `#` (matches zero or more words). E.g., binding `user.*.europe`.",
    "summary": "Routes messages based on wildcard pattern matching (using * and #) of the routing key."
  },
  {
    "id": 46,
    "title": "What is a Headers Exchange?",
    "category": "RabbitMQ",
    "difficulty": "Advanced",
    "explanation": "Instead of using the routing key, a Headers Exchange routes messages based on attributes found in the message headers. It allows for more complex routing rules (e.g., matching ANY or ALL specific headers).",
    "summary": "Routes messages based on HTTP-style message headers rather than a routing key."
  },
  {
    "id": 47,
    "title": "Direct vs Topic vs Fanout Exchange?",
    "category": "RabbitMQ",
    "difficulty": "Intermediate",
    "explanation": "- **Direct:** Exact match routing. (Task queues)\n- **Topic:** Pattern match routing. (Complex event routing)\n- **Fanout:** Broadcast to all. (Pub/Sub notifications)",
    "summary": "Direct = Exact match, Topic = Wildcard match, Fanout = Broadcast to all."
  },
  {
    "id": 48,
    "title": "What is Consumer Acknowledgment?",
    "category": "RabbitMQ",
    "difficulty": "Intermediate",
    "explanation": "It is how RabbitMQ knows a message was processed successfully. By default in many libraries, auto-ack is enabled (message deleted as soon as sent to consumer). For reliability, use manual-ack: the consumer explicitly sends `basic.ack` only after processing the message. If the consumer crashes before `basic.ack`, RabbitMQ requeues it.",
    "code": "channel.BasicAck(deliveryTag: ea.DeliveryTag, multiple: false);",
    "summary": "A manual signal sent by the consumer confirming successful processing so RabbitMQ can delete the message."
  },
  {
    "id": 49,
    "title": "What is Prefetch Count?",
    "category": "RabbitMQ",
    "difficulty": "Advanced",
    "explanation": "Prefetch (or QoS) dictates how many unacknowledged messages RabbitMQ will send to a consumer at once. A prefetch of 1 means RabbitMQ won't send a new message until the consumer ACKs the current one. This ensures fair load balancing among multiple workers.",
    "summary": "The maximum number of unacknowledged messages a consumer can hold at one time."
  },
  {
    "id": 50,
    "title": "How does RabbitMQ handle failed messages?",
    "category": "RabbitMQ",
    "difficulty": "Intermediate",
    "explanation": "If a consumer encounters an error, it can send a `basic.nack` or `basic.reject`. Depending on the parameters, RabbitMQ will either put the message back at the head of the queue (requeue = true) or discard it/send it to a Dead Letter Exchange (requeue = false).",
    "summary": "Consumers can Negative-Acknowledge (NACK) messages, causing them to be requeued or dead-lettered."
  },
  {
    "id": 51,
    "title": "What is a Dead Letter Exchange (DLX)?",
    "category": "RabbitMQ Advanced",
    "difficulty": "Senior",
    "explanation": "A DLX is a normal exchange to which messages are routed if they \"die\" in a queue. A message dies if it is rejected without requeue, expires due to TTL, or if the queue is full.",
    "summary": "An exchange that receives messages that have failed or expired from other queues."
  },
  {
    "id": 52,
    "title": "What is a Dead Letter Queue (DLQ)?",
    "category": "RabbitMQ Advanced",
    "difficulty": "Senior",
    "explanation": "A DLQ is simply a queue bound to a Dead Letter Exchange. It holds the failed \"poison\" messages so engineers can inspect them later without them blocking the main system.",
    "summary": "A storage queue for failed messages, bound to a Dead Letter Exchange."
  },
  {
    "id": 53,
    "title": "How do you implement retry in RabbitMQ?",
    "category": "RabbitMQ Advanced",
    "difficulty": "Senior",
    "explanation": "RabbitMQ lacks built-in delayed retries. You implement it using a DLX + TTL approach. The failed message goes to a \"Wait Queue\" with a Time-To-Live (e.g., 5 mins). When it expires, it is routed via another DLX back to the Main Queue.",
    "summary": "By routing failed messages to a delay queue with a TTL, which dead-letters back to the main queue."
  },
  {
    "id": 54,
    "title": "What is message durability?",
    "category": "RabbitMQ Advanced",
    "difficulty": "Advanced",
    "explanation": "Message durability ensures messages survive a RabbitMQ server crash. To achieve this, you must set `Persistent = true` (delivery mode 2) when publishing the message.",
    "summary": "Marking a message to be written to disk so it survives a broker restart."
  },
  {
    "id": 55,
    "title": "Persistent message vs durable queue?",
    "category": "RabbitMQ Advanced",
    "difficulty": "Advanced",
    "explanation": "- **Durable Queue:** The queue definition itself survives a server restart.\n- **Persistent Message:** The message data inside the queue is written to disk and survives a restart.\nYou must have BOTH for true data safety.",
    "summary": "Durable queue saves the queue metadata; Persistent message saves the actual message data to disk."
  },
  {
    "id": 56,
    "title": "What happens when RabbitMQ restarts?",
    "category": "RabbitMQ Advanced",
    "difficulty": "Intermediate",
    "explanation": "All Non-Durable queues are deleted. All Non-Persistent messages inside Durable queues are lost. Only Persistent messages inside Durable queues are recovered from disk.",
    "summary": "In-memory data is lost. Only durable queues with persistent messages are restored."
  },
  {
    "id": 57,
    "title": "What is RabbitMQ Publisher Confirm?",
    "category": "RabbitMQ Advanced",
    "difficulty": "Senior",
    "explanation": "Publisher Confirms are an extension that provides safety on the producer side. The producer asks RabbitMQ to send back an ACK once the broker has successfully written the message to disk (or replicated it). If the producer doesn't get the confirm, it knows to retry publishing.",
    "summary": "An acknowledgment from RabbitMQ to the Producer confirming the message is safely stored."
  },
  {
    "id": 58,
    "title": "Publisher Confirm vs Consumer Acknowledgment?",
    "category": "RabbitMQ Advanced",
    "difficulty": "Advanced",
    "explanation": "- **Publisher Confirm:** RabbitMQ ACKing to the Producer. (Guarantees message reached the broker).\n- **Consumer Acknowledgment:** Consumer ACKing to RabbitMQ. (Guarantees message was successfully processed).",
    "summary": "Publisher Confirms protect against Producer-to-Broker failure. Consumer ACKs protect against Broker-to-Consumer failure."
  },
  {
    "id": 59,
    "title": "What is RabbitMQ clustering?",
    "category": "RabbitMQ Advanced",
    "difficulty": "Senior",
    "explanation": "Clustering connects multiple RabbitMQ nodes together to share state (exchanges, bindings, users). By default, queues reside on a single node. To achieve true High Availability, you must configure Quorum Queues (which use Raft consensus to replicate queue data across nodes).",
    "summary": "Connecting multiple nodes to share configuration and replicate queue data for High Availability."
  },
  {
    "id": 60,
    "title": "How would you design a highly available RabbitMQ architecture?",
    "category": "RabbitMQ Advanced",
    "difficulty": "Senior",
    "explanation": "1. Cluster 3+ RabbitMQ nodes.\n2. Use a Load Balancer (HAProxy) in front of the nodes.\n3. Use Quorum Queues to replicate message data across nodes.\n4. Enable Publisher Confirms on the producers.\n5. Use Durable Queues, Persistent Messages, and Manual Consumer ACKs.",
    "summary": "Use a cluster with Quorum Queues, a Load Balancer, Publisher Confirms, and Manual ACKs."
  },
  {
    "id": 61,
    "title": "What is Apache Kafka?",
    "category": "Apache Kafka",
    "difficulty": "Beginner",
    "explanation": "Apache Kafka is an open-source, distributed event streaming platform used for high-throughput, low-latency, and fault-tolerant data pipelines and streaming analytics. It is fundamentally an immutable, append-only commit log.",
    "summary": "A high-performance, distributed event streaming platform built on an append-only commit log."
  },
  {
    "id": 62,
    "title": "Why is Kafka used?",
    "category": "Apache Kafka",
    "difficulty": "Beginner",
    "explanation": "Kafka is used when you need to process massive volumes of data (millions of events per second) reliably, store events for long periods, replay past events, or perform real-time stream processing.",
    "summary": "For massive scale, high throughput, event replay, and long-term event retention."
  },
  {
    "id": 63,
    "title": "Kafka vs RabbitMQ?",
    "category": "Apache Kafka",
    "difficulty": "Intermediate",
    "explanation": "- **RabbitMQ:** Smart broker, dumb consumers. Excellent at complex routing, task distribution, and deleting messages after processing.\n- **Kafka:** Dumb broker, smart consumers. Excellent at massive throughput, event streaming, retaining history (append-only log), and allowing multiple consumers to read the exact same events at their own pace.",
    "summary": "RabbitMQ is for traditional message routing. Kafka is for massive event streaming and data history."
  },
  {
    "id": 64,
    "title": "What is a Kafka broker?",
    "category": "Apache Kafka",
    "difficulty": "Beginner",
    "explanation": "A Kafka broker is a single server within a Kafka cluster. It receives messages from producers, writes them to disk, and serves them to consumers.",
    "summary": "A single Kafka server node."
  },
  {
    "id": 65,
    "title": "What is a Kafka cluster?",
    "category": "Apache Kafka",
    "difficulty": "Beginner",
    "explanation": "A group of multiple Kafka brokers working together. Clustering provides data replication, high availability, and the ability to scale horizontally.",
    "summary": "A network of Kafka brokers working together to share the load and provide fault tolerance."
  },
  {
    "id": 66,
    "title": "What is a Kafka topic?",
    "category": "Apache Kafka",
    "difficulty": "Beginner",
    "explanation": "A topic is a logical name/category to which events are published. It is similar to a table in a database. Topics in Kafka are multi-subscriber; any number of consumers can read from a topic.",
    "summary": "The category or feed name where records are published."
  },
  {
    "id": 67,
    "title": "What is a Kafka partition?",
    "category": "Apache Kafka",
    "difficulty": "Intermediate",
    "explanation": "A topic is split into multiple Partitions. Each partition is a distinct, ordered, append-only sequence of records physically stored on a broker's disk. Partitions allow a single topic's data to be split across multiple servers.",
    "summary": "A physical division of a topic that enables parallel processing and horizontal scalability."
  },
  {
    "id": 68,
    "title": "Why are Kafka topics divided into partitions?",
    "category": "Apache Kafka",
    "difficulty": "Intermediate",
    "explanation": "For scalability. If a topic had only one partition, its throughput would be limited by the disk and network of a single broker. By partitioning, producers and consumers can write and read from multiple brokers in parallel.",
    "summary": "To distribute data across multiple brokers, enabling massive parallel processing."
  },
  {
    "id": 69,
    "title": "What is a Kafka offset?",
    "category": "Apache Kafka",
    "difficulty": "Intermediate",
    "explanation": "Every message written to a partition is assigned a sequential ID number called the offset. The offset acts as the message's unique identifier within that partition and dictates the strict ordering.",
    "summary": "A unique, sequential ID assigned to every message within a specific partition."
  },
  {
    "id": 70,
    "title": "What is a Kafka producer?",
    "category": "Apache Kafka",
    "difficulty": "Beginner",
    "explanation": "An application that publishes data to a Kafka topic. By default, the producer balances data across all partitions, or uses a 'Partition Key' to send specific data to specific partitions.",
    "summary": "The application that writes events to Kafka."
  },
  {
    "id": 71,
    "title": "What is a Kafka consumer?",
    "category": "Apache Kafka",
    "difficulty": "Beginner",
    "explanation": "An application that subscribes to a topic (or multiple topics) and reads the data from its partitions. Unlike RabbitMQ, consuming a message in Kafka does NOT delete it.",
    "summary": "The application that reads events from Kafka without deleting them."
  },
  {
    "id": 72,
    "title": "What is a Consumer Group?",
    "category": "Apache Kafka",
    "difficulty": "Intermediate",
    "explanation": "A Consumer Group is a set of consumer instances cooperating to consume data from a topic. Kafka assigns the topic's partitions evenly among the consumers in the group. **Rule:** A partition can only be read by ONE consumer within a specific group at a time.",
    "summary": "A group of consumers working together. Kafka automatically load-balances partitions among them."
  },
  {
    "id": 73,
    "title": "How does Kafka achieve scalability?",
    "category": "Apache Kafka",
    "difficulty": "Intermediate",
    "explanation": "Kafka achieves scalability through Partitions and Consumer Groups. If you have 10 partitions, you can spin up 10 consumer instances in a consumer group, and each instance will read from exactly one partition in parallel.",
    "summary": "By distributing data across partitions, which can be read in parallel by multiple consumers in a group."
  },
  {
    "id": 74,
    "title": "What is replication in Kafka?",
    "category": "Apache Kafka",
    "difficulty": "Intermediate",
    "explanation": "To prevent data loss, Kafka copies the data from a partition to other brokers. A replication factor of 3 means the data exists on 3 different brokers. One broker acts as the Leader, and two act as Followers.",
    "summary": "Copying partition data across multiple brokers for fault tolerance."
  },
  {
    "id": 75,
    "title": "What happens when a Kafka broker fails?",
    "category": "Apache Kafka",
    "difficulty": "Intermediate",
    "explanation": "If a broker fails, ZooKeeper (or KRaft in newer versions) detects it. If the failed broker was the Leader for any partitions, a Follower replica on another surviving broker is automatically promoted to be the new Leader, ensuring zero downtime.",
    "summary": "A follower replica automatically takes over as the new Leader."
  },
  {
    "id": 76,
    "title": "What is the difference between leader and follower replicas?",
    "category": "Kafka Advanced",
    "difficulty": "Advanced",
    "explanation": "- **Leader Replica:** Handles all read and write requests for a partition.\n- **Follower Replica:** Passively replicates data from the Leader. It does not serve client requests (usually), it only exists for backup.",
    "summary": "The Leader handles all I/O; the Follower just copies the Leader as a backup."
  },
  {
    "id": 77,
    "title": "What is the ISR (In-Sync Replica)?",
    "category": "Kafka Advanced",
    "difficulty": "Senior",
    "explanation": "The ISR is the list of Follower replicas that are currently up-to-date with the Leader. If a follower falls too far behind (e.g., due to network issues), it is removed from the ISR list. Only nodes in the ISR can be elected as the new Leader.",
    "summary": "The subset of follower replicas that are fully caught up with the Leader."
  },
  {
    "id": 78,
    "title": "What is Kafka retention?",
    "category": "Kafka Advanced",
    "difficulty": "Intermediate",
    "explanation": "Kafka does not delete messages when consumed. Instead, it deletes them based on a retention policy—either Time-based (e.g., delete data older than 7 days) or Size-based (e.g., delete oldest data when the topic reaches 100GB).",
    "summary": "The configuration dictating how long Kafka stores data before deleting it (by time or size)."
  },
  {
    "id": 79,
    "title": "How does Kafka store messages?",
    "category": "Kafka Advanced",
    "difficulty": "Advanced",
    "explanation": "Kafka writes messages sequentially to an append-only commit log on disk. Because sequential disk reads/writes are extremely fast (often faster than random memory access), Kafka achieves incredible throughput while safely writing everything to disk.",
    "summary": "By appending sequentially to physical log files on the broker's disk."
  },
  {
    "id": 80,
    "title": "Can a Kafka message be deleted immediately after consumption?",
    "category": "Kafka Advanced",
    "difficulty": "Intermediate",
    "explanation": "No. Kafka retains all messages according to the retention policy regardless of whether they have been consumed. This allows multiple different consumer groups, or new consumers, to replay and read the exact same data again from the past.",
    "summary": "No, messages are deleted by retention policies, allowing for event replay."
  },
  {
    "id": 81,
    "title": "What is consumer offset management?",
    "category": "Kafka Advanced",
    "difficulty": "Advanced",
    "explanation": "Since Kafka doesn't delete messages, it keeps track of what the consumer has read by storing the Consumer Offset (the ID of the last read message) in a special internal topic called `__consumer_offsets`. When a consumer restarts, it fetches this offset to resume reading where it left off.",
    "summary": "Kafka tracking the last-read message ID for a consumer group so it can resume after a restart."
  },
  {
    "id": 82,
    "title": "What is auto-commit?",
    "category": "Kafka Advanced",
    "difficulty": "Intermediate",
    "explanation": "By default, the Kafka consumer automatically commits its offset every 5 seconds in the background. While easy, this can lead to data loss if the consumer crashes after committing the offset but before actually finishing processing the data.",
    "summary": "The consumer automatically saving its progress on a timer."
  },
  {
    "id": 83,
    "title": "Manual offset commit vs automatic offset commit?",
    "category": "Kafka Advanced",
    "difficulty": "Senior",
    "explanation": "For reliable systems (at-least-once delivery), you must disable auto-commit (`enable.auto.commit=false`). The consumer must manually commit the offset only AFTER it has successfully processed the message and saved the results to its database.",
    "summary": "Disable auto-commit and manually commit the offset only after successful processing to prevent data loss."
  },
  {
    "id": 84,
    "title": "What is Kafka partition ordering?",
    "category": "Kafka Advanced",
    "difficulty": "Senior",
    "explanation": "Kafka guarantees strict message ordering ONLY within a single partition. It does NOT guarantee global ordering across an entire topic. If ordering is critical, you must ensure all related messages go to the same partition.",
    "summary": "Kafka strictly guarantees message order within a single partition, but not across the entire topic."
  },
  {
    "id": 85,
    "title": "How do you guarantee message ordering in Kafka?",
    "category": "Kafka Advanced",
    "difficulty": "Senior",
    "explanation": "You guarantee ordering by using a 'Partition Key'. When the producer sends an event (like `OrderUpdated`), it specifies the `OrderId` as the key. Kafka hashes the key and guarantees that all events with the same `OrderId` are routed to the exact same partition. Since a partition is read by one consumer sequentially, ordering is preserved.",
    "summary": "Use a Partition Key (like CustomerId) to force related events into the same ordered partition."
  },
  {
    "id": 86,
    "title": "What is Redis?",
    "category": "Redis & Caching",
    "difficulty": "Beginner",
    "explanation": "Redis (Remote Dictionary Server) is an open-source, in-memory, key-value data store. Because it holds all data in RAM, it delivers sub-millisecond response times, making it the industry standard for caching, session management, and real-time leaderboards.",
    "summary": "A blazing fast, in-memory key-value database primarily used for caching."
  },
  {
    "id": 87,
    "title": "Why is Redis commonly used as a distributed cache?",
    "category": "Redis & Caching",
    "difficulty": "Beginner",
    "explanation": "Because it stores data in memory (RAM) rather than on disk, it is exceptionally fast. It sits in front of a primary database (like SQL Server) to intercept read requests, drastically reducing database load and speeding up API response times.",
    "summary": "Its in-memory nature makes it fast enough to shield slower relational databases from heavy read traffic."
  },
  {
    "id": 88,
    "title": "What is caching?",
    "category": "Redis & Caching",
    "difficulty": "Beginner",
    "explanation": "Caching is the process of storing a copy of frequently accessed or expensive-to-compute data in a fast, temporary storage layer (the cache) so that future requests for that data can be served much faster.",
    "summary": "Storing frequently accessed data in high-speed memory for faster retrieval."
  },
  {
    "id": 89,
    "title": "What is distributed caching?",
    "category": "Redis & Caching",
    "difficulty": "Intermediate",
    "explanation": "In a microservices or load-balanced environment, multiple web servers exist. If caching is local to one server (in-memory cache), the other servers don't have that data. A distributed cache (like Redis) hosts the cache on a separate centralized cluster so all web servers access the exact same cached data.",
    "summary": "A centralized caching system shared by multiple application servers."
  },
  {
    "id": 90,
    "title": "In-memory cache vs distributed cache?",
    "category": "Redis & Caching",
    "difficulty": "Intermediate",
    "explanation": "- **In-Memory (Local) Cache:** Fast, but tied to a single server's RAM. Data is lost on server restart. Not scalable across multiple instances.\n- **Distributed Cache:** Slightly slower (network hop), but highly scalable, shared across all servers, and survives individual application restarts.",
    "summary": "In-memory is local to one server; Distributed is an external cluster shared by all servers."
  },
  {
    "id": 91,
    "title": "What are the advantages of Redis over local memory cache?",
    "category": "Redis & Caching",
    "difficulty": "Intermediate",
    "explanation": "1. Data consistency across all load-balanced servers.\n2. Survives application deployments and server restarts.\n3. Can scale out its own memory limits by clustering.\n4. Offers advanced data structures (Hashes, Sets, Sorted Sets) rather than just plain strings.",
    "summary": "Shared state across servers, persistence, and advanced data structures."
  },
  {
    "id": 92,
    "title": "What Redis data structures are commonly used?",
    "category": "Redis & Caching",
    "difficulty": "Intermediate",
    "explanation": "Unlike simple memcached, Redis supports:\n1. **Strings:** Standard key-value (often holding serialized JSON).\n2. **Lists:** Ordered collections (good for message queues).\n3. **Sets:** Unordered collections of unique items.\n4. **Sorted Sets:** Ordered by a score (used for Leaderboards).\n5. **Hashes:** Objects with fields (like a C# Dictionary).",
    "summary": "Strings, Lists, Sets, Sorted Sets, and Hashes."
  },
  {
    "id": 93,
    "title": "What is a Redis Key-Value pair?",
    "category": "Redis & Caching",
    "difficulty": "Beginner",
    "explanation": "All data in Redis is accessed via a unique Key (a string). The Value can be any of the supported data structures. Keys are often namespaced with colons, e.g., `product:1234:details`.",
    "summary": "The fundamental way data is stored and retrieved in Redis."
  },
  {
    "id": 94,
    "title": "What is TTL in Redis?",
    "category": "Redis & Caching",
    "difficulty": "Beginner",
    "explanation": "TTL stands for Time-To-Live. It is a configuration applied to a Redis key that dictates how long the key should exist before Redis automatically deletes it. E.g., setting a TTL of 3600 seconds means the cache expires in 1 hour.",
    "summary": "Time-To-Live: The duration before Redis automatically deletes the data."
  },
  {
    "id": 95,
    "title": "What is cache expiration?",
    "category": "Redis & Caching",
    "difficulty": "Intermediate",
    "explanation": "It is the process of setting a TTL so that data doesn't stay in the cache forever. This is crucial because memory is limited and expensive, and data eventually becomes stale. Once expired, the next request will result in a 'Cache Miss'.",
    "summary": "Automatically removing data from the cache after a set time to free up memory and prevent stale data."
  },
  {
    "id": 96,
    "title": "What is the Cache-Aside pattern?",
    "category": "Redis & Caching",
    "difficulty": "Senior",
    "explanation": "The most common caching pattern. The application code first asks the cache. If the data is there (Hit), it returns it. If not (Miss), the application queries the Database, saves the result into the Cache, and then returns it.",
    "summary": "The application acts as the middleman, checking the cache first and falling back to the DB on a miss."
  },
  {
    "id": 97,
    "title": "What is write-through caching?",
    "category": "Redis & Caching",
    "difficulty": "Advanced",
    "explanation": "When the application updates a record, it writes to the Cache and the Database simultaneously in a single transaction. This ensures the cache is always perfectly in sync, but it adds latency to write operations.",
    "summary": "Updating the cache and the database at the exact same time."
  },
  {
    "id": 98,
    "title": "What is write-behind caching?",
    "category": "Redis & Caching",
    "difficulty": "Advanced",
    "explanation": "The application only writes updates directly to the Cache and immediately returns success to the user. An asynchronous background process later flushes the cached changes down to the actual Database. Very fast, but risks data loss if the cache crashes.",
    "summary": "Writing to the cache immediately and updating the database asynchronously later."
  },
  {
    "id": 99,
    "title": "What is cache invalidation?",
    "category": "Redis & Caching",
    "difficulty": "Senior",
    "explanation": "As Phil Karlton said, 'There are only two hard things in Computer Science: cache invalidation and naming things.' Invalidation is the process of proactively deleting or updating a cache key when the underlying database record changes, ensuring users don't see stale data before the TTL expires.",
    "summary": "Proactively removing stale data from the cache when the underlying database record is modified."
  },
  {
    "id": 100,
    "title": "How would you design a production-ready Redis caching solution?",
    "category": "Redis & Caching",
    "difficulty": "Senior",
    "explanation": "1. Use Redis Cluster for high availability and sharding.\n2. Implement the Cache-Aside pattern.\n3. Always set a TTL to prevent memory leaks.\n4. Handle Cache Invalidation via event-driven messaging (e.g., listening to DB change events to clear keys).\n5. Protect against 'Cache Stampedes' using distributed locks or background refresh.",
    "summary": "Use Redis Cluster, Cache-Aside, strict TTLs, and event-driven invalidation."
  }
];

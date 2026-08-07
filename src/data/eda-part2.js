export const edaPart2 = [
    // --- RABBITMQ (31-50) ---
    {
        id: 31,
        title: "What is RabbitMQ?",
        category: "RabbitMQ",
        difficulty: "Beginner",
        explanation: "RabbitMQ is a highly popular, open-source message broker written in Erlang. It acts as middleware that receives messages from producers, routes them based on complex rules, and delivers them to consumers.",
        summary: "A traditional, open-source message broker specialized in complex routing and task distribution."
    },
    {
        id: 32,
        title: "Why is RabbitMQ used?",
        category: "RabbitMQ",
        difficulty: "Beginner",
        explanation: "It is primarily used for asynchronous task distribution, decoupling microservices, and acting as a shock-absorber during traffic spikes to prevent databases and APIs from being overwhelmed.",
        summary: "To decouple services, distribute heavy tasks asynchronously, and buffer traffic spikes."
    },
    {
        id: 33,
        title: "What protocol does RabbitMQ commonly use?",
        category: "RabbitMQ",
        difficulty: "Beginner",
        explanation: "RabbitMQ implements the AMQP (Advanced Message Queuing Protocol) 0-9-1 by default, though it also supports MQTT, STOMP, and HTTP.",
        summary: "AMQP (Advanced Message Queuing Protocol)."
    },
    {
        id: 34,
        title: "What is AMQP?",
        category: "RabbitMQ",
        difficulty: "Intermediate",
        explanation: "AMQP is an open standard, binary application layer protocol designed for messaging middleware. It defines the architecture of Exchanges, Bindings, and Queues that RabbitMQ relies upon.",
        summary: "A standardized messaging protocol defining Exchanges, Bindings, and Queues."
    },
    {
        id: 35,
        title: "What are the major components of RabbitMQ?",
        category: "RabbitMQ",
        difficulty: "Beginner",
        explanation: "The major components are the Producer, the Exchange, the Binding (with Routing Key), the Queue, and the Consumer.",
        summary: "Producer, Exchange, Binding, Queue, Consumer."
    },
    {
        id: 36,
        title: "What is a Producer in RabbitMQ?",
        category: "RabbitMQ",
        difficulty: "Beginner",
        explanation: "A Producer is an application that creates and sends messages. Crucially, in RabbitMQ, a producer NEVER sends a message directly to a queue. It always sends it to an Exchange.",
        summary: "An application that publishes messages to an Exchange."
    },
    {
        id: 37,
        title: "What is a Consumer?",
        category: "RabbitMQ",
        difficulty: "Beginner",
        explanation: "An application that connects to RabbitMQ and subscribes to a specific Queue to receive and process messages.",
        summary: "An application that reads messages from a Queue."
    },
    {
        id: 38,
        title: "What is a Queue?",
        category: "RabbitMQ",
        difficulty: "Beginner",
        explanation: "A Queue is a sequential, FIFO buffer in RabbitMQ that stores messages until they can be safely consumed and acknowledged.",
        summary: "A buffer that stores messages until consumed."
    },
    {
        id: 39,
        title: "What is an Exchange?",
        category: "RabbitMQ",
        difficulty: "Intermediate",
        explanation: "An Exchange is the message routing agent. It receives messages from producers and pushes them to zero, one, or multiple queues based on rules (Exchange Types and Bindings).",
        summary: "The routing engine that receives messages and decides which Queues should get them."
    },
    {
        id: 40,
        title: "What is a Binding?",
        category: "RabbitMQ",
        difficulty: "Intermediate",
        explanation: "A Binding is a link (or relationship) between an Exchange and a Queue. It tells the Exchange, 'Please route messages to this Queue.'",
        summary: "The connection linking an Exchange to a specific Queue."
    },
    {
        id: 41,
        title: "What is a Routing Key?",
        category: "RabbitMQ",
        difficulty: "Intermediate",
        explanation: "A Routing Key is a string attribute added to a message by the producer. The Exchange looks at this key and compares it against the Binding rules to decide which queues should receive the message.",
        summary: "A label on a message used by the Exchange to determine where to route it."
    },
    {
        id: 42,
        title: "How does a message flow through RabbitMQ?",
        category: "RabbitMQ",
        difficulty: "Intermediate",
        explanation: "1. Producer publishes a message to an Exchange with a Routing Key.\n2. The Exchange compares the Routing Key against its Bindings.\n3. The Exchange routes the message into the appropriate Queue(s).\n4. The Consumer reads the message from the Queue.",
        example: "Producer → Exchange → Binding → Queue → Consumer",
        summary: "Producer -> Exchange -> Queue -> Consumer."
    },
    {
        id: 43,
        title: "What is a Direct Exchange?",
        category: "RabbitMQ",
        difficulty: "Intermediate",
        explanation: "A Direct Exchange routes a message to a queue ONLY if the message's Routing Key exactly matches the Queue's Binding Key. E.g., routing key `pdf.create` matches binding key `pdf.create`.",
        summary: "Routes messages via exact matches of the Routing Key."
    },
    {
        id: 44,
        title: "What is a Fanout Exchange?",
        category: "RabbitMQ",
        difficulty: "Intermediate",
        explanation: "A Fanout Exchange ignores the routing key completely. It simply broadcasts a copy of the message to ALL queues that are bound to it. This is the classic Pub/Sub pattern.",
        summary: "Broadcasts messages to all bound queues, ignoring routing keys."
    },
    {
        id: 45,
        title: "What is a Topic Exchange?",
        category: "RabbitMQ",
        difficulty: "Advanced",
        explanation: "A Topic Exchange routes messages based on wildcard pattern matching of the routing key. Routing keys are dot-separated (e.g., `user.created.europe`). Bindings can use `*` (matches one word) or `#` (matches zero or more words). E.g., binding `user.*.europe`.",
        summary: "Routes messages based on wildcard pattern matching (using * and #) of the routing key."
    },
    {
        id: 46,
        title: "What is a Headers Exchange?",
        category: "RabbitMQ",
        difficulty: "Advanced",
        explanation: "Instead of using the routing key, a Headers Exchange routes messages based on attributes found in the message headers. It allows for more complex routing rules (e.g., matching ANY or ALL specific headers).",
        summary: "Routes messages based on HTTP-style message headers rather than a routing key."
    },
    {
        id: 47,
        title: "Direct vs Topic vs Fanout Exchange?",
        category: "RabbitMQ",
        difficulty: "Intermediate",
        explanation: "- **Direct:** Exact match routing. (Task queues)\n- **Topic:** Pattern match routing. (Complex event routing)\n- **Fanout:** Broadcast to all. (Pub/Sub notifications)",
        summary: "Direct = Exact match, Topic = Wildcard match, Fanout = Broadcast to all."
    },
    {
        id: 48,
        title: "What is Consumer Acknowledgment?",
        category: "RabbitMQ",
        difficulty: "Intermediate",
        explanation: "It is how RabbitMQ knows a message was processed successfully. By default in many libraries, auto-ack is enabled (message deleted as soon as sent to consumer). For reliability, use manual-ack: the consumer explicitly sends `basic.ack` only after processing the message. If the consumer crashes before `basic.ack`, RabbitMQ requeues it.",
        code: "channel.BasicAck(deliveryTag: ea.DeliveryTag, multiple: false);",
        summary: "A manual signal sent by the consumer confirming successful processing so RabbitMQ can delete the message."
    },
    {
        id: 49,
        title: "What is Prefetch Count?",
        category: "RabbitMQ",
        difficulty: "Advanced",
        explanation: "Prefetch (or QoS) dictates how many unacknowledged messages RabbitMQ will send to a consumer at once. A prefetch of 1 means RabbitMQ won't send a new message until the consumer ACKs the current one. This ensures fair load balancing among multiple workers.",
        summary: "The maximum number of unacknowledged messages a consumer can hold at one time."
    },
    {
        id: 50,
        title: "How does RabbitMQ handle failed messages?",
        category: "RabbitMQ",
        difficulty: "Intermediate",
        explanation: "If a consumer encounters an error, it can send a `basic.nack` or `basic.reject`. Depending on the parameters, RabbitMQ will either put the message back at the head of the queue (requeue = true) or discard it/send it to a Dead Letter Exchange (requeue = false).",
        summary: "Consumers can Negative-Acknowledge (NACK) messages, causing them to be requeued or dead-lettered."
    },

    // --- RABBITMQ ADVANCED (51-60) ---
    {
        id: 51,
        title: "What is a Dead Letter Exchange (DLX)?",
        category: "RabbitMQ Advanced",
        difficulty: "Senior",
        explanation: "A DLX is a normal exchange to which messages are routed if they \"die\" in a queue. A message dies if it is rejected without requeue, expires due to TTL, or if the queue is full.",
        summary: "An exchange that receives messages that have failed or expired from other queues."
    },
    {
        id: 52,
        title: "What is a Dead Letter Queue (DLQ)?",
        category: "RabbitMQ Advanced",
        difficulty: "Senior",
        explanation: "A DLQ is simply a queue bound to a Dead Letter Exchange. It holds the failed \"poison\" messages so engineers can inspect them later without them blocking the main system.",
        summary: "A storage queue for failed messages, bound to a Dead Letter Exchange."
    },
    {
        id: 53,
        title: "How do you implement retry in RabbitMQ?",
        category: "RabbitMQ Advanced",
        difficulty: "Senior",
        explanation: "RabbitMQ lacks built-in delayed retries. You implement it using a DLX + TTL approach. The failed message goes to a \"Wait Queue\" with a Time-To-Live (e.g., 5 mins). When it expires, it is routed via another DLX back to the Main Queue.",
        summary: "By routing failed messages to a delay queue with a TTL, which dead-letters back to the main queue."
    },
    {
        id: 54,
        title: "What is message durability?",
        category: "RabbitMQ Advanced",
        difficulty: "Advanced",
        explanation: "Message durability ensures messages survive a RabbitMQ server crash. To achieve this, you must set `Persistent = true` (delivery mode 2) when publishing the message.",
        summary: "Marking a message to be written to disk so it survives a broker restart."
    },
    {
        id: 55,
        title: "Persistent message vs durable queue?",
        category: "RabbitMQ Advanced",
        difficulty: "Advanced",
        explanation: "- **Durable Queue:** The queue definition itself survives a server restart.\n- **Persistent Message:** The message data inside the queue is written to disk and survives a restart.\nYou must have BOTH for true data safety.",
        summary: "Durable queue saves the queue metadata; Persistent message saves the actual message data to disk."
    },
    {
        id: 56,
        title: "What happens when RabbitMQ restarts?",
        category: "RabbitMQ Advanced",
        difficulty: "Intermediate",
        explanation: "All Non-Durable queues are deleted. All Non-Persistent messages inside Durable queues are lost. Only Persistent messages inside Durable queues are recovered from disk.",
        summary: "In-memory data is lost. Only durable queues with persistent messages are restored."
    },
    {
        id: 57,
        title: "What is RabbitMQ Publisher Confirm?",
        category: "RabbitMQ Advanced",
        difficulty: "Senior",
        explanation: "Publisher Confirms are an extension that provides safety on the producer side. The producer asks RabbitMQ to send back an ACK once the broker has successfully written the message to disk (or replicated it). If the producer doesn't get the confirm, it knows to retry publishing.",
        summary: "An acknowledgment from RabbitMQ to the Producer confirming the message is safely stored."
    },
    {
        id: 58,
        title: "Publisher Confirm vs Consumer Acknowledgment?",
        category: "RabbitMQ Advanced",
        difficulty: "Advanced",
        explanation: "- **Publisher Confirm:** RabbitMQ ACKing to the Producer. (Guarantees message reached the broker).\n- **Consumer Acknowledgment:** Consumer ACKing to RabbitMQ. (Guarantees message was successfully processed).",
        summary: "Publisher Confirms protect against Producer-to-Broker failure. Consumer ACKs protect against Broker-to-Consumer failure."
    },
    {
        id: 59,
        title: "What is RabbitMQ clustering?",
        category: "RabbitMQ Advanced",
        difficulty: "Senior",
        explanation: "Clustering connects multiple RabbitMQ nodes together to share state (exchanges, bindings, users). By default, queues reside on a single node. To achieve true High Availability, you must configure Quorum Queues (which use Raft consensus to replicate queue data across nodes).",
        summary: "Connecting multiple nodes to share configuration and replicate queue data for High Availability."
    },
    {
        id: 60,
        title: "How would you design a highly available RabbitMQ architecture?",
        category: "RabbitMQ Advanced",
        difficulty: "Senior",
        explanation: "1. Cluster 3+ RabbitMQ nodes.\n2. Use a Load Balancer (HAProxy) in front of the nodes.\n3. Use Quorum Queues to replicate message data across nodes.\n4. Enable Publisher Confirms on the producers.\n5. Use Durable Queues, Persistent Messages, and Manual Consumer ACKs.",
        summary: "Use a cluster with Quorum Queues, a Load Balancer, Publisher Confirms, and Manual ACKs."
    }
];

export const edaPart4 = [
    // --- REDIS & DISTRIBUTED CACHING (86-100) ---
    {
        id: 86,
        title: "What is Redis?",
        category: "Redis & Caching",
        difficulty: "Beginner",
        explanation: "Redis (Remote Dictionary Server) is an open-source, in-memory, key-value data store. Because it holds all data in RAM, it delivers sub-millisecond response times, making it the industry standard for caching, session management, and real-time leaderboards.",
        summary: "A blazing fast, in-memory key-value database primarily used for caching."
    },
    {
        id: 87,
        title: "Why is Redis commonly used as a distributed cache?",
        category: "Redis & Caching",
        difficulty: "Beginner",
        explanation: "Because it stores data in memory (RAM) rather than on disk, it is exceptionally fast. It sits in front of a primary database (like SQL Server) to intercept read requests, drastically reducing database load and speeding up API response times.",
        summary: "Its in-memory nature makes it fast enough to shield slower relational databases from heavy read traffic."
    },
    {
        id: 88,
        title: "What is caching?",
        category: "Redis & Caching",
        difficulty: "Beginner",
        explanation: "Caching is the process of storing a copy of frequently accessed or expensive-to-compute data in a fast, temporary storage layer (the cache) so that future requests for that data can be served much faster.",
        summary: "Storing frequently accessed data in high-speed memory for faster retrieval."
    },
    {
        id: 89,
        title: "What is distributed caching?",
        category: "Redis & Caching",
        difficulty: "Intermediate",
        explanation: "In a microservices or load-balanced environment, multiple web servers exist. If caching is local to one server (in-memory cache), the other servers don't have that data. A distributed cache (like Redis) hosts the cache on a separate centralized cluster so all web servers access the exact same cached data.",
        summary: "A centralized caching system shared by multiple application servers."
    },
    {
        id: 90,
        title: "In-memory cache vs distributed cache?",
        category: "Redis & Caching",
        difficulty: "Intermediate",
        explanation: "- **In-Memory (Local) Cache:** Fast, but tied to a single server's RAM. Data is lost on server restart. Not scalable across multiple instances.\n- **Distributed Cache:** Slightly slower (network hop), but highly scalable, shared across all servers, and survives individual application restarts.",
        summary: "In-memory is local to one server; Distributed is an external cluster shared by all servers."
    },
    {
        id: 91,
        title: "What are the advantages of Redis over local memory cache?",
        category: "Redis & Caching",
        difficulty: "Intermediate",
        explanation: "1. Data consistency across all load-balanced servers.\n2. Survives application deployments and server restarts.\n3. Can scale out its own memory limits by clustering.\n4. Offers advanced data structures (Hashes, Sets, Sorted Sets) rather than just plain strings.",
        summary: "Shared state across servers, persistence, and advanced data structures."
    },
    {
        id: 92,
        title: "What Redis data structures are commonly used?",
        category: "Redis & Caching",
        difficulty: "Intermediate",
        explanation: "Unlike simple memcached, Redis supports:\n1. **Strings:** Standard key-value (often holding serialized JSON).\n2. **Lists:** Ordered collections (good for message queues).\n3. **Sets:** Unordered collections of unique items.\n4. **Sorted Sets:** Ordered by a score (used for Leaderboards).\n5. **Hashes:** Objects with fields (like a C# Dictionary).",
        summary: "Strings, Lists, Sets, Sorted Sets, and Hashes."
    },
    {
        id: 93,
        title: "What is a Redis Key-Value pair?",
        category: "Redis & Caching",
        difficulty: "Beginner",
        explanation: "All data in Redis is accessed via a unique Key (a string). The Value can be any of the supported data structures. Keys are often namespaced with colons, e.g., `product:1234:details`.",
        summary: "The fundamental way data is stored and retrieved in Redis."
    },
    {
        id: 94,
        title: "What is TTL in Redis?",
        category: "Redis & Caching",
        difficulty: "Beginner",
        explanation: "TTL stands for Time-To-Live. It is a configuration applied to a Redis key that dictates how long the key should exist before Redis automatically deletes it. E.g., setting a TTL of 3600 seconds means the cache expires in 1 hour.",
        summary: "Time-To-Live: The duration before Redis automatically deletes the data."
    },
    {
        id: 95,
        title: "What is cache expiration?",
        category: "Redis & Caching",
        difficulty: "Intermediate",
        explanation: "It is the process of setting a TTL so that data doesn't stay in the cache forever. This is crucial because memory is limited and expensive, and data eventually becomes stale. Once expired, the next request will result in a 'Cache Miss'.",
        summary: "Automatically removing data from the cache after a set time to free up memory and prevent stale data."
    },
    {
        id: 96,
        title: "What is the Cache-Aside pattern?",
        category: "Redis & Caching",
        difficulty: "Senior",
        explanation: "The most common caching pattern. The application code first asks the cache. If the data is there (Hit), it returns it. If not (Miss), the application queries the Database, saves the result into the Cache, and then returns it.",
        summary: "The application acts as the middleman, checking the cache first and falling back to the DB on a miss."
    },
    {
        id: 97,
        title: "What is write-through caching?",
        category: "Redis & Caching",
        difficulty: "Advanced",
        explanation: "When the application updates a record, it writes to the Cache and the Database simultaneously in a single transaction. This ensures the cache is always perfectly in sync, but it adds latency to write operations.",
        summary: "Updating the cache and the database at the exact same time."
    },
    {
        id: 98,
        title: "What is write-behind caching?",
        category: "Redis & Caching",
        difficulty: "Advanced",
        explanation: "The application only writes updates directly to the Cache and immediately returns success to the user. An asynchronous background process later flushes the cached changes down to the actual Database. Very fast, but risks data loss if the cache crashes.",
        summary: "Writing to the cache immediately and updating the database asynchronously later."
    },
    {
        id: 99,
        title: "What is cache invalidation?",
        category: "Redis & Caching",
        difficulty: "Senior",
        explanation: "As Phil Karlton said, 'There are only two hard things in Computer Science: cache invalidation and naming things.' Invalidation is the process of proactively deleting or updating a cache key when the underlying database record changes, ensuring users don't see stale data before the TTL expires.",
        summary: "Proactively removing stale data from the cache when the underlying database record is modified."
    },
    {
        id: 100,
        title: "How would you design a production-ready Redis caching solution?",
        category: "Redis & Caching",
        difficulty: "Senior",
        explanation: "1. Use Redis Cluster for high availability and sharding.\n2. Implement the Cache-Aside pattern.\n3. Always set a TTL to prevent memory leaks.\n4. Handle Cache Invalidation via event-driven messaging (e.g., listening to DB change events to clear keys).\n5. Protect against 'Cache Stampedes' using distributed locks or background refresh.",
        summary: "Use Redis Cluster, Cache-Aside, strict TTLs, and event-driven invalidation."
    }
];

// Level 9: HTTP, Fetch API, REST & State Handling
export const level9HttpFetchRest = {
  id: 'level-9',
  title: 'Level 9: HTTP, Fetch API & REST',
  icon: 'bi-globe2',
  color: '#0284c7',
  description: 'Master RESTful HTTP methods (GET, POST, PUT, DELETE), JSON payload parsing with fetch(), status code handling, and the 3-State UI Pattern.',
  chapters: [
    {
      id: 'http-and-fetch',
      title: '09. HTTP, REST & The Fetch API',
      lessons: [
        {
          id: 'fetch-api-and-rest-crud-flow',
          slug: 'fetch-api-and-rest-crud-flow',
          order: '9.1',
          title: 'The Fetch API: GET, POST, PUT & DELETE Requests',
          subtitle: 'Connecting frontend JavaScript to backend REST APIs, headers, JSON body payloads, and status code verification in baby steps.',
          chapterId: 'http-and-fetch',
          chapterTitle: '09. HTTP, REST & The Fetch API',
          levelTitle: 'Level 9: HTTP, Fetch API & REST',
          goal: 'Master making real HTTP network requests using fetch() for full CRUD operations and verify HTTP response headers.',
          prerequisites: ['Level 8 completed.'],
          concept: `### REST API & HTTP Methods Mapping

Frontend JavaScript communicates with backend web servers using the **HTTP protocol**:

| Action | HTTP Method | Endpoint Example | Purpose |
| :--- | :--- | :--- | :--- |
| **Read (List)** | \`GET\` | \`/api/employees\` | Retrieves a list of records. |
| **Create** | \`POST\` | \`/api/employees\` | Sends JSON payload to create a new record. |
| **Update** | \`PUT\` / \`PATCH\` | \`/api/employees/12\` | Modifies an existing record. |
| **Delete** | \`DELETE\` | \`/api/employees/12\` | Removes a record permanently. |

---

### Important Fetch API Gotcha: \`response.ok\`
Unlike Axios or jQuery, **\`fetch()\` does NOT reject on HTTP 404 or 500 errors**! It only rejects on total network failure (offline/DNS error). Therefore, you must always check \`if (!response.ok)\` manually!`,
          diagram: `flowchart LR
    Browser["1. Browser fetch('/api/data')"] --> Request["2. HTTP Request (Method + Headers + Body)"]
    Request --> Server[("3. Backend Web API / Server")]
    Server --> Response["4. HTTP Response (Status 200 OK + JSON)"]
    Response --> Parse["5. response.json()"]
    Parse --> UI["6. Update DOM with Data"]
    
    style Browser fill:#cfe2ff,stroke:#084298,color:#084298
    style Server fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Response fill:#d1e7dd,stroke:#198754,color:#0f5132
    style UI fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Fetching Data with Status Verification (GET)',
              explanation: 'Always verify response.ok before attempting to parse JSON.',
              command: `async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    // Crucial check: verify HTTP 200-299 status range
    if (!response.ok) {
      throw new Error(\`HTTP Error: \${response.status} \${response.statusText}\`);
    }
    
    const users = await response.json();
    console.log("Fetched Users Count:", users.length);
    console.log("First User:", users[0].name);
  } catch (error) {
    console.error("Network or API Error:", error.message);
  }
}

loadUsers();`
            },
            {
              title: 'Step 2: Sending JSON Data with POST Request',
              explanation: 'Specify method: "POST", headers, and stringify the payload body.',
              command: `async function createNewPost(postData) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    });

    if (!response.ok) {
      throw new Error(\`Creation Failed: \${response.status}\`);
    }

    const createdRecord = await response.json();
    console.log("Created Record ID:", createdRecord.id);
  } catch (err) {
    console.error("POST Failed:", err.message);
  }
}

createNewPost({ title: "Mastering JS", body: "Complete Guide", userId: 1 });`
            }
          ],
          verification: 'Run both fetch functions in the browser console. Open Developer Tools -> Network tab to inspect the actual HTTP requests and JSON responses.',
          expectedResult: 'Clean communication with REST API endpoints for GET and POST requests.',
          summary: 'Use the Fetch API to communicate with REST backends. Always verify response.ok, set JSON Content-Type headers for POST/PUT requests, and handle network errors in try/catch.'
        },
        {
          id: 'three-state-ui-pattern-loading-error-data',
          slug: 'three-state-ui-pattern-loading-error-data',
          order: '9.2',
          title: 'The 3-State UI Pattern: Loading, Error & Data States',
          subtitle: 'Building professional user experiences with spinner/skeleton loading states, error boundaries, and empty state fallbacks in baby steps.',
          chapterId: 'http-and-fetch',
          chapterTitle: '09. HTTP, REST & The Fetch API',
          levelTitle: 'Level 9: HTTP, Fetch API & REST',
          goal: 'Master building resilient frontend interfaces that clearly reflect all 3 states of any asynchronous API call.',
          prerequisites: ['Lesson 9.1 completed.'],
          concept: `### Why the 3-State UI Pattern is Mandatory in Production

When querying any remote server, network latency is guaranteed. A professional application must cleanly render:
1. **Loading State**: Displays a spinner or skeleton placeholder so the user knows data is arriving.
2. **Error State**: Displays a helpful retry button and friendly message if the network drops or API returns 500.
3. **Success / Empty State**: Displays the formatted table or an empty illustration if 0 records match.`,
          diagram: `flowchart TD
    Init["User Opens Page"] --> State1["1. State: LOADING (Show Skeleton Placeholder)"]
    State1 --> Fetch["fetch('/api/products')"]
    Fetch --> Check{"Network Response?"}
    Check -->|"200 OK & Items > 0"| State2["2. State: SUCCESS (Render Product Grid)"]
    Check -->|"200 OK & Items == 0"| State3["3. State: EMPTY (Show 'No items found')"]
    Check -->|"Error / 500 / Offline"| State4["4. State: ERROR (Show Error Box & Retry Button)"]
    
    style State1 fill:#cfe2ff,stroke:#084298,color:#084298
    style State2 fill:#d1e7dd,stroke:#198754,color:#0f5132
    style State3 fill:#fff3cd,stroke:#ffc107,color:#664d03
    style State4 fill:#f8d7da,stroke:#dc3545,color:#842029`,
          steps: [
            {
              title: 'Step 1: Implementing 3-State UI Rendering in Vanilla JavaScript',
              explanation: 'Build a container that dynamically switches between Loading, Error, and Data states.',
              command: `const container = document.querySelector("#app-root");

async function renderProducts() {
  // 1. Enter Loading State
  container.innerHTML = \`
    <div class="text-center p-5">
      <div class="spinner-border text-primary" role="status"></div>
      <p class="text-muted mt-2">Loading catalog from server...</p>
    </div>
  \`;

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    if (!res.ok) throw new Error("Failed to load products from server");
    
    const items = await res.json();

    // 2. Check for Empty State
    if (items.length === 0) {
      container.innerHTML = \`<div class="alert alert-info">No products available at this time.</div>\`;
      return;
    }

    // 3. Render Success Data State
    container.innerHTML = \`
      <div class="list-group">
        \${items.map(item => \`
          <div class="list-group-item">
            <h6 class="fw-bold mb-1">\${item.title}</h6>
            <p class="text-muted small mb-0">\${item.body}</p>
          </div>
        \`).join('')}
      </div>
    \`;
  } catch (err) {
    // 4. Render Error State with Retry button
    container.innerHTML = \`
      <div class="alert alert-danger">
        <h6><i class="bi bi-exclamation-octagon-fill me-2"></i>Unable to Load Data</h6>
        <p class="small mb-2">\${err.message}</p>
        <button class="btn btn-sm btn-outline-danger" onclick="renderProducts()">Retry Connection</button>
      </div>
    \`;
  }
}`
            }
          ],
          verification: 'Run renderProducts() in an HTML page. Observe how the UI transitions seamlessly from loading spinner to data rendering or error state.',
          expectedResult: 'Robust UI patterns that handle slow networks and API outages gracefully.',
          summary: 'Always account for Loading, Error, and Empty states when integrating frontend JavaScript with backend APIs.'
        }
      ]
    }
  ]
};

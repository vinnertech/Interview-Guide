export const dotnetcorePart3 = [
    // --- MIDDLEWARE / FILTERS / ERROR HANDLING (101-115) ---
    {
        id: 101,
        title: "What is the difference between Use, Run, and Map in Middleware?",
        category: "Middleware & Error Handling",
        difficulty: "Intermediate",
        explanation: "- **Use:** Adds a middleware to the pipeline. It can call `next()` to pass execution to the next middleware.\n- **Run:** A terminal middleware. It executes and immediately returns the response. It never calls `next()`.\n- **Map:** Branches the pipeline based on the request path (e.g., executing specific middleware only for `/api`).",
        summary: "Use passes to the next middleware. Run terminates the pipeline. Map branches the pipeline."
    },
    {
        id: 102,
        title: "Why is Middleware ordering important?",
        category: "Middleware & Error Handling",
        difficulty: "Intermediate",
        explanation: "Because the pipeline is sequential, the order dictates execution. For example, `UseAuthentication()` must execute *before* `UseAuthorization()` (you must know who the user is before deciding what they can do). `UseExceptionHandler()` should be first so it can catch errors thrown by any subsequent middleware.",
        summary: "Order dictates execution sequence. Auth must happen before Authorization."
    },
    {
        id: 103,
        title: "How do you create Custom Middleware?",
        category: "Middleware & Error Handling",
        difficulty: "Intermediate",
        explanation: "Create a class with a constructor accepting `RequestDelegate next`. Implement an `InvokeAsync(HttpContext context)` method. Write your logic (e.g., logging), call `await _next(context)`, and then optionally write logic for the outgoing response.",
        summary: "Create a class with a RequestDelegate constructor and an InvokeAsync method."
    },
    {
        id: 104,
        title: "What is Exception Middleware?",
        category: "Middleware & Error Handling",
        difficulty: "Intermediate",
        explanation: "It is middleware placed at the very beginning of the pipeline (like `UseExceptionHandler`). It wraps the entire pipeline in a `try-catch` block, catching any unhandled exceptions thrown further down the line.",
        summary: "Middleware that acts as a global try-catch block for the entire application."
    },
    {
        id: 105,
        title: "How do you implement Global Exception Handling in Web API?",
        category: "Middleware & Error Handling",
        difficulty: "Advanced",
        explanation: "In modern ASP.NET Core, use `app.UseExceptionHandler()` pointing to a specific error controller, OR create a custom Exception Middleware class that catches exceptions, logs them, and returns a standardized JSON `ProblemDetails` response (usually 500 status code).",
        summary: "Use UseExceptionHandler or write a custom middleware to catch errors and return ProblemDetails."
    },
    {
        id: 106,
        title: "What is ProblemDetails?",
        category: "Middleware & Error Handling",
        difficulty: "Intermediate",
        explanation: "It is an RFC-standardized JSON format for returning HTTP error details in Web APIs. It includes standard fields like `type`, `title`, `status`, `detail`, and `instance`.",
        summary: "A standardized JSON format for API error responses."
    },
    {
        id: 107,
        title: "How should you handle Production Error Responses?",
        category: "Middleware & Error Handling",
        difficulty: "Advanced",
        explanation: "In production, never expose raw stack traces to the client (security risk). Global exception handling should log the full exception internally, but return a generic, friendly message to the client (e.g., 'An unexpected error occurred') alongside a correlation ID for debugging.",
        summary: "Log the stack trace internally, but hide it from the client, returning a generic error message."
    },
    {
        id: 108,
        title: "What are MVC Filters?",
        category: "Middleware & Error Handling",
        difficulty: "Intermediate",
        explanation: "Filters allow custom code to run before or after specific stages in the MVC action execution pipeline. They are usually applied as attributes to Controllers or Actions.",
        summary: "Code that runs at specific stages of the MVC/API execution lifecycle."
    },
    {
        id: 109,
        title: "What are the different types of Filters?",
        category: "Middleware & Error Handling",
        difficulty: "Intermediate",
        explanation: "1. **Authorization Filters:** Run first to determine if the user is authorized.\n2. **Resource Filters:** Run after authorization, good for caching.\n3. **Action Filters:** Run immediately before and after an action method.\n4. **Exception Filters:** Run if an unhandled exception occurs in the action.\n5. **Result Filters:** Run before/after the result (like JSON rendering) executes.",
        summary: "Authorization, Resource, Action, Exception, and Result filters."
    },
    {
        id: 110,
        title: "What is the difference between Middleware and Filters?",
        category: "Middleware & Error Handling",
        difficulty: "Advanced",
        explanation: "Middleware operates globally on the HTTP request, independent of MVC. It knows nothing about Controllers or Actions. Filters operate specifically *within* the MVC routing pipeline and have access to MVC contexts (like `ModelState` or Action parameters).",
        summary: "Middleware is global HTTP processing; Filters are specific to the MVC/API execution lifecycle."
    },
    {
        id: 111,
        title: "When should you use Middleware vs an Action Filter?",
        category: "Middleware & Error Handling",
        difficulty: "Advanced",
        explanation: "Use **Middleware** for global concerns that apply to all requests (CORS, Authentication, Global logging, Global exception handling). Use **Filters** for logic that only applies to specific controllers or needs access to controller state (like validating `ModelState` or caching a specific endpoint).",
        summary: "Middleware for global HTTP concerns; Filters for controller-specific logic."
    },
    {
        id: 112,
        title: "Scenario: How would you implement centralized exception handling for all APIs?",
        category: "Middleware & Error Handling",
        difficulty: "Senior",
        explanation: "I would create a custom `ExceptionHandlingMiddleware`. \n1. Inject `ILogger`.\n2. Wrap `await _next(context)` in a `try-catch`.\n3. In the `catch (Exception ex)` block, log the error with its StackTrace.\n4. Set `context.Response.StatusCode = 500` and `ContentType = \"application/json\"`.\n5. Create a `ProblemDetails` object with a generic error message.\n6. Serialize and write it to the response.\n7. Register it at the very top of `Program.cs` pipeline.",
        summary: "Write a custom middleware wrapping the pipeline in a try-catch, logging the error, and returning ProblemDetails."
    },
    {
        id: 113,
        title: "Scenario: Middleware Ordering",
        category: "Middleware & Error Handling",
        difficulty: "Senior",
        explanation: "Consider this order:\n1. `UseExceptionHandler` (Must be first to catch anything below it)\n2. `UseHttpsRedirection`\n3. `UseRouting` (Finds the endpoint)\n4. `UseCors` (Must be before Auth to handle preflight)\n5. `UseAuthentication` (Identifies the user)\n6. `UseAuthorization` (Checks permissions)\n7. `MapControllers` (Executes the endpoint)\nIf Auth is placed after MapControllers, the endpoints will never be secured.",
        summary: "Order is strictly sequential. Routing -> CORS -> Auth -> Controllers."
    },
    {
        id: 114,
        title: "What is centralized logging?",
        category: "Middleware & Error Handling",
        difficulty: "Intermediate",
        explanation: "Instead of writing logs to text files on individual servers, centralized logging streams logs to a central system (like Seq, ELK Stack, or Azure Application Insights) so you can query and monitor them across a distributed microservice architecture.",
        summary: "Streaming logs from all servers to a central searchable database."
    },
    {
        id: 115,
        title: "How do you log in ASP.NET Core?",
        category: "Middleware & Error Handling",
        difficulty: "Beginner",
        explanation: "You inject `ILogger<T>` into your controller or service via the constructor. You then use methods like `_logger.LogInformation()`, `LogWarning()`, or `LogError()`.",
        summary: "By injecting the built-in ILogger<T> interface."
    },

    // --- AUTHENTICATION & AUTHORIZATION (116-130) ---
    {
        id: 116,
        title: "What is the difference between Authentication and Authorization?",
        category: "Authentication & Authorization",
        difficulty: "Beginner",
        explanation: "- **Authentication:** Identity verification. \"Who are you?\" (e.g., logging in with username/password to get a token).\n- **Authorization:** Permissions verification. \"What are you allowed to do?\" (e.g., checking if the user is an Admin).",
        summary: "Authentication verifies identity; Authorization verifies permissions."
    },
    {
        id: 117,
        title: "What is ASP.NET Core Identity?",
        category: "Authentication & Authorization",
        difficulty: "Intermediate",
        explanation: "It is an API that supports user interface login functionality. It manages users, passwords, profile data, roles, claims, tokens, and email confirmation natively using Entity Framework Core.",
        summary: "A built-in membership system for managing users, passwords, and roles."
    },
    {
        id: 118,
        title: "What is Cookie Authentication?",
        category: "Authentication & Authorization",
        difficulty: "Intermediate",
        explanation: "Standard for MVC web applications. Upon login, the server encrypts user data into a Cookie and sends it to the browser. The browser automatically sends this cookie on every subsequent request. Vulnerable to CSRF attacks if not protected.",
        summary: "Session management using encrypted browser cookies. Common in MVC apps."
    },
    {
        id: 119,
        title: "What is JWT (JSON Web Token)?",
        category: "Authentication & Authorization",
        difficulty: "Intermediate",
        explanation: "JWT is an open standard for securely transmitting information between parties as a JSON object. It is stateless, digitally signed (using a secret or public/private key), and used heavily in REST APIs.",
        summary: "A secure, stateless JSON token used for authenticating API requests."
    },
    {
        id: 120,
        title: "Explain the JWT flow.",
        category: "Authentication & Authorization",
        difficulty: "Intermediate",
        explanation: "1. Client POSTs credentials to `/login`.\n2. Server verifies them and creates a JWT signed with a secret key.\n3. Server returns the JWT.\n4. Client stores it.\n5. Client sends it in the `Authorization: Bearer <token>` header on future requests.\n6. Server validates the signature without needing to check the database.",
        summary: "Login -> Get Token -> Send Token in Header -> Server Validates Signature."
    },
    {
        id: 121,
        title: "What is the structure of a JWT?",
        category: "Authentication & Authorization",
        difficulty: "Intermediate",
        explanation: "It consists of three parts separated by dots (`.`):\n1. **Header:** Algorithm and token type.\n2. **Payload:** The claims (user ID, roles, expiration).\n3. **Signature:** Created by hashing the Header + Payload + Server Secret. Ensures the token hasn't been tampered with.",
        summary: "Header, Payload (Claims), and Signature."
    },
    {
        id: 122,
        title: "What are Claims in ASP.NET Core?",
        category: "Authentication & Authorization",
        difficulty: "Intermediate",
        explanation: "A claim is a piece of information about a user. Instead of just roles, a claim is a key-value pair. E.g., `DateOfBirth: 1990-01-01`, `Email: user@test.com`, or `Role: Admin`.",
        summary: "Key-value pairs representing specific details or permissions about a user."
    },
    {
        id: 123,
        title: "What is Claims-based authorization?",
        category: "Authentication & Authorization",
        difficulty: "Advanced",
        explanation: "Authorization based on the presence or value of a specific claim. Instead of checking if a user is an \"Admin\", you check if they possess the \"CanEditUsers = true\" claim. This allows for highly granular permissions.",
        summary: "Authorizing users based on specific key-value pairs (claims) they possess."
    },
    {
        id: 124,
        title: "What is Role-based authorization?",
        category: "Authentication & Authorization",
        difficulty: "Beginner",
        explanation: "A simpler form of authorization where users are assigned roles (e.g., Admin, Manager, User). You restrict access using `[Authorize(Roles = \"Admin\")]`.",
        summary: "Restricting access based on a user's assigned role."
    },
    {
        id: 125,
        title: "Role vs Policy authorization?",
        category: "Authentication & Authorization",
        difficulty: "Intermediate",
        explanation: "- **Role:** Simple, checks string names (`Roles=\"Admin\"`).\n- **Policy:** Complex, evaluates rules. A policy can require a specific role, a specific claim, a minimum age, or evaluate custom C# logic (e.g., `[Authorize(Policy = \"AtLeast18\")]`).",
        summary: "Roles are simple strings; Policies are complex, rule-based evaluations."
    },
    {
        id: 126,
        title: "What does the [Authorize] attribute do?",
        category: "Authentication & Authorization",
        difficulty: "Beginner",
        explanation: "When placed on a Controller or Action, it prevents unauthenticated users from accessing the endpoint. It returns a `401 Unauthorized` (for APIs) or redirects to the login page (for MVC).",
        summary: "Secures an endpoint, requiring the user to be logged in."
    },
    {
        id: 127,
        title: "What does [AllowAnonymous] do?",
        category: "Authentication & Authorization",
        difficulty: "Beginner",
        explanation: "It bypasses authorization. If a Controller has `[Authorize]`, you can place `[AllowAnonymous]` on specific actions (like `Login` or `Register`) so anyone can access them.",
        summary: "Bypasses [Authorize], allowing unauthenticated access."
    },
    {
        id: 128,
        title: "Scenario: JWT Access vs Refresh Tokens",
        category: "Authentication & Authorization",
        difficulty: "Senior",
        explanation: "Access tokens should have a short lifespan (e.g., 15 mins) for security. When it expires, the client uses a long-lived Refresh Token (stored securely, e.g., HttpOnly cookie) to request a new Access Token. Refresh tokens are stored in the DB, allowing the server to revoke a user's access by deleting the refresh token.",
        summary: "Short-lived access tokens for speed; long-lived database-backed refresh tokens for security and revocation."
    },
    {
        id: 129,
        title: "How do you implement JWT in ASP.NET Core?",
        category: "Authentication & Authorization",
        difficulty: "Intermediate",
        explanation: "1. Add the `Microsoft.AspNetCore.Authentication.JwtBearer` NuGet package.\n2. In `Program.cs`, call `builder.Services.AddAuthentication().AddJwtBearer(...)`.\n3. Configure it with your Issuer, Audience, and a `SymmetricSecurityKey` matching your secret.\n4. Add `app.UseAuthentication()` before `app.UseAuthorization()`.",
        summary: "Register the JwtBearer authentication scheme and configure token validation parameters."
    },
    {
        id: 130,
        title: "Is it secure to store JWTs in LocalStorage?",
        category: "Authentication & Authorization",
        difficulty: "Advanced",
        explanation: "No. LocalStorage is accessible by JavaScript, making it vulnerable to XSS (Cross-Site Scripting) attacks where hackers steal the token. Best practice is storing JWTs in an `HttpOnly` cookie, which JS cannot read.",
        mistake: "Storing sensitive tokens in LocalStorage in enterprise applications.",
        summary: "No, it is vulnerable to XSS. Use HttpOnly cookies."
    },

    // --- PERFORMANCE, TESTING & DEPLOYMENT (131-150) ---
    {
        id: 131,
        title: "How do you optimize API performance?",
        category: "Performance & Testing",
        difficulty: "Advanced",
        explanation: "1. Use `async/await` strictly (no blocking calls).\n2. Implement Caching (Redis/Memory).\n3. Optimize DB queries (Indexes, avoid N+1, avoid `Select *`).\n4. Use Pagination for large datasets.\n5. Use Data Projection (DTOs) to send only required fields.\n6. Enable Response Compression (Gzip/Brotli).",
        summary: "Async I/O, caching, DB optimization, pagination, and data projection."
    },
    {
        id: 132,
        title: "What is Response Caching?",
        category: "Performance & Testing",
        difficulty: "Intermediate",
        explanation: "It involves adding HTTP cache headers (like `Cache-Control`) to the response, instructing the client's browser or intermediate proxies to cache the API response for a specific duration.",
        summary: "Adding HTTP headers to instruct clients to cache the response."
    },
    {
        id: 133,
        title: "Memory Cache vs Distributed Cache?",
        category: "Performance & Testing",
        difficulty: "Intermediate",
        explanation: "- **Memory Cache (`IMemoryCache`):** Stores data in the RAM of the local web server. Extremely fast, but useless in a multi-server (load balanced) environment because data isn't shared.\n- **Distributed Cache (`IDistributedCache`):** Stores data in an external service (like Redis). Slower than Memory Cache, but data is shared across all servers.",
        summary: "Memory is local server RAM; Distributed uses an external shared service like Redis."
    },
    {
        id: 134,
        title: "What is Redis?",
        category: "Performance & Testing",
        difficulty: "Intermediate",
        explanation: "Redis is an open-source, in-memory, distributed key-value database. It is the industry standard for distributed caching in microservices to alleviate database load.",
        summary: "An ultra-fast in-memory database used for distributed caching."
    },
    {
        id: 135,
        title: "What is async/await?",
        category: "Performance & Testing",
        difficulty: "Beginner",
        explanation: "A syntax that makes writing asynchronous C# code look synchronous. It frees up the web server's main thread while waiting for I/O operations (like database queries or API calls) to complete, allowing the server to handle more concurrent requests.",
        summary: "A mechanism to free up server threads during slow I/O operations, drastically improving scalability."
    },
    {
        id: 136,
        title: "What is a Task?",
        category: "Performance & Testing",
        difficulty: "Intermediate",
        explanation: "A `Task` represents an asynchronous operation. `Task` is used when a method doesn't return a value (like `void`). `Task<T>` is used when the method returns a value of type `T`.",
        summary: "An object representing an asynchronous operation."
    },
    {
        id: 137,
        title: "What is ValueTask<T>?",
        category: "Performance & Testing",
        difficulty: "Advanced",
        explanation: "`ValueTask<T>` is a struct-based alternative to `Task<T>`. Because `Task` is a class, instantiating it allocates memory on the heap. If an async method completes synchronously most of the time (e.g., reading from cache), `ValueTask` avoids garbage collection overhead.",
        summary: "A lightweight, struct-based alternative to Task used for high-performance memory optimization."
    },
    {
        id: 138,
        title: "Why should you avoid .Result or .Wait() on a Task?",
        category: "Performance & Testing",
        difficulty: "Advanced",
        explanation: "Calling `.Result` or `.Wait()` blocks the executing thread until the async operation completes (Sync-over-Async). This completely defeats the purpose of async, limits scalability, and can cause catastrophic thread pool starvation and Deadlocks.",
        mistake: "Using `.Result` in a controller. Always use `await` all the way up the call chain.",
        summary: "It blocks the thread, causing thread pool starvation and deadlocks."
    },
    {
        id: 139,
        title: "How do you Unit Test a Controller?",
        category: "Performance & Testing",
        difficulty: "Intermediate",
        explanation: "A Controller is just a C# class. You instantiate it in a test project (using xUnit or NUnit), mock its dependencies (like Services or Repositories using Moq), call the Action method, and `Assert` that the returned `IActionResult` (e.g., `OkObjectResult`) contains the expected data.",
        summary: "Instantiate the controller, mock its dependencies, call the action, and assert the result."
    },
    {
        id: 140,
        title: "What is WebApplicationFactory?",
        category: "Performance & Testing",
        difficulty: "Advanced",
        explanation: "It is a class used for Integration Testing. It bootstraps your entire ASP.NET Core application in-memory (including the pipeline and DI) and provides a mock `HttpClient` to test your API end-to-end without needing to deploy it or run it on a real port.",
        summary: "A tool that runs your API in-memory for fast, end-to-end integration testing."
    },
    {
        id: 141,
        title: "Unit Testing vs Integration Testing?",
        category: "Performance & Testing",
        difficulty: "Intermediate",
        explanation: "- **Unit Test:** Tests a single class/method in pure isolation. Dependencies (like DBs) are mocked. Extremely fast.\n- **Integration Test:** Tests multiple components working together (e.g., API -> Service -> Real Test Database). Slower, but ensures components interact correctly.",
        summary: "Unit tests test isolation via mocks; Integration tests test the full pipeline and real DBs."
    },
    {
        id: 142,
        title: "How does ASP.NET Core manage Environments?",
        category: "Deployment & Production",
        difficulty: "Beginner",
        explanation: "It uses the `ASPNETCORE_ENVIRONMENT` environment variable. Common values are `Development`, `Staging`, and `Production`. You can write logic like `if (app.Environment.IsDevelopment()) { app.UseSwagger(); }`.",
        summary: "Using the ASPNETCORE_ENVIRONMENT variable to toggle configurations for Dev, Staging, and Prod."
    },
    {
        id: 143,
        title: "How are appsettings files linked to Environments?",
        category: "Deployment & Production",
        difficulty: "Beginner",
        explanation: "ASP.NET Core automatically loads `appsettings.json`, and then overwrites it with `appsettings.{Environment}.json` (e.g., `appsettings.Production.json`). This allows different connection strings for different environments.",
        summary: "The framework automatically loads environment-specific appsettings files on top of the base file."
    },
    {
        id: 144,
        title: "How do you deploy an ASP.NET Core API?",
        category: "Deployment & Production",
        difficulty: "Intermediate",
        explanation: "1. Run `dotnet publish -c Release` to compile the app.\n2. **Cloud:** Deploy the output to Azure App Service, AWS Elastic Beanstalk, or containerize it via Docker and deploy to Kubernetes.\n3. **On-Premise:** Host it in IIS using the ASP.NET Core Module.",
        summary: "Publish the app and host it on Azure, AWS, Docker, or IIS."
    },
    {
        id: 145,
        title: "What is Docker?",
        category: "Deployment & Production",
        difficulty: "Intermediate",
        explanation: "Docker is a platform that packages an application and its dependencies (like the .NET runtime) into a standardized unit called a container. This ensures the app runs identically on the developer's laptop, staging, and production environments.",
        summary: "A tool to package applications into consistent, isolated containers."
    },
    {
        id: 146,
        title: "Scenario: An API endpoint takes 8 seconds to respond. How do you investigate?",
        category: "Performance & Testing",
        difficulty: "Senior",
        explanation: "1. **Check Logs/APM:** Use Application Insights to pinpoint the bottleneck (Network vs DB vs Code).\n2. **Database check:** Is it executing an N+1 query? Is a missing index causing a full table scan?\n3. **External APIs:** Is the endpoint waiting on a slow 3rd-party HTTP call?\n4. **Code:** Are we blocking threads with `.Result`? Are we doing heavy in-memory processing that should be a background job?\n5. **Fix:** Apply caching, async I/O, DB indexes, or pagination.",
        summary: "Trace the request using APM, identify DB or network bottlenecks, and apply caching or indexing."
    },
    {
        id: 147,
        title: "Scenario: What is N+1 Query Problem in EF Core?",
        category: "Performance & Testing",
        difficulty: "Senior",
        explanation: "If you query a list of 100 Authors, and then loop through them to access `Author.Books`, EF Core executes 1 query for the authors, and 100 separate queries for the books (N+1). This kills performance.\n**Fix:** Use `.Include(a => a.Books)` to eagerly load data in a single SQL JOIN query.",
        summary: "Executing a separate DB query inside a loop instead of a single JOIN. Fix with .Include()."
    },
    {
        id: 148,
        title: "Scenario: How do you handle a background task in ASP.NET Core?",
        category: "Performance & Testing",
        difficulty: "Advanced",
        explanation: "For simple tasks, implement the `IHostedService` interface or inherit from `BackgroundService`. For complex, distributed, or durable jobs that survive server restarts, integrate a library like Hangfire.",
        summary: "Use BackgroundService for simple tasks, or Hangfire for robust, durable jobs."
    },
    {
        id: 149,
        title: "Top 50 Prep: What are the highest priority topics to study?",
        category: "Roadmap",
        difficulty: "Beginner",
        explanation: "If you are short on time, master these 5 topics:\n1. Dependency Injection (Lifetimes).\n2. Middleware Pipeline (Execution order, custom middleware).\n3. Web API (REST principles, HTTP Status codes, `[ApiController]`).\n4. Authentication (JWT flow, Claims, Authorization).\n5. EF Core (LINQ, N+1 problem).",
        summary: "DI, Middleware, REST APIs, JWT, and EF Core."
    },
    {
        id: 150,
        title: "Roadmap: How should I prepare for a Senior .NET interview?",
        category: "Roadmap",
        difficulty: "Senior",
        explanation: "A senior interview focuses less on syntax and more on architecture. Prepare to discuss:\n- Microservices vs Monoliths.\n- Event-driven architecture (RabbitMQ/Kafka).\n- Distributed caching (Redis).\n- Security (OAuth2, OIDC, Securing APIs).\n- Performance optimization (Memory profiling, DB indexing).\n- Docker and Kubernetes deployment strategies.",
        summary: "Focus heavily on System Architecture, Security, Performance, and Cloud Deployment."
    }
];

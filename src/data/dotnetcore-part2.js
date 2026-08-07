export const dotnetcorePart2 = [
    // --- ROUTING & MODEL BINDING (46-60) ---
    {
        id: 46,
        title: "What is Routing in ASP.NET Core?",
        category: "Routing & Model Binding",
        difficulty: "Beginner",
        explanation: "Routing is the process of mapping incoming HTTP requests (URLs) to specific executable endpoints (like MVC Controllers and Actions).",
        summary: "The mechanism that matches incoming URLs to executable code endpoints."
    },
    {
        id: 47,
        title: "What is Conventional Routing?",
        category: "Routing & Model Binding",
        difficulty: "Beginner",
        explanation: "Conventional routing defines routes globally in `Program.cs`. It relies on a default URL pattern like `{controller}/{action}/{id?}`. It is mostly used for MVC UI applications.",
        code: "app.MapControllerRoute(\n    name: \"default\",\n    pattern: \"{controller=Home}/{action=Index}/{id?}\");",
        summary: "Global route patterns defined centrally, typically used for MVC applications."
    },
    {
        id: 48,
        title: "What is Attribute Routing?",
        category: "Routing & Model Binding",
        difficulty: "Beginner",
        explanation: "Attribute routing uses C# attributes placed directly above Controllers and Actions to define their routes. It is the absolute standard and highly recommended approach for RESTful Web APIs.",
        code: "[ApiController]\n[Route(\"api/[controller]\")]\npublic class ProductsController : ControllerBase {\n    [HttpGet(\"{id}\")]\n    public IActionResult Get(int id) { ... }\n}",
        summary: "Defining routes using attributes directly on controllers and actions. Essential for APIs."
    },
    {
        id: 49,
        title: "What is Endpoint Routing?",
        category: "Routing & Model Binding",
        difficulty: "Intermediate",
        explanation: "Introduced in ASP.NET Core 3.0, Endpoint Routing separates route matching from endpoint execution. This allows middleware (like Authorization or CORS) to know which endpoint will execute *before* it actually executes.",
        summary: "A routing system that separates route matching from execution, enabling smarter middleware."
    },
    {
        id: 50,
        title: "What are Route Parameters?",
        category: "Routing & Model Binding",
        difficulty: "Beginner",
        explanation: "Route parameters are dynamic segments of a URL defined within curly braces `{}`. The routing engine extracts these values and binds them to the Action method parameters.",
        example: "In `/api/users/{id}`, `{id}` is the route parameter.",
        summary: "Dynamic segments of a URL enclosed in curly braces, passed as method arguments."
    },
    {
        id: 51,
        title: "What are Route Constraints?",
        category: "Routing & Model Binding",
        difficulty: "Intermediate",
        explanation: "Route constraints restrict how a route parameter is matched. They ensure the route only hits the action if the parameter is of a specific type or format.",
        code: "[HttpGet(\"{id:int}\")] // Only matches if id is an integer\n[HttpGet(\"{name:alpha:minlength(3)}\")]",
        summary: "Rules applied to route parameters (e.g., :int) to restrict which requests match."
    },
    {
        id: 52,
        title: "How do you make a route parameter optional?",
        category: "Routing & Model Binding",
        difficulty: "Beginner",
        explanation: "You make a route parameter optional by appending a question mark `?` to it.",
        code: "[HttpGet(\"{id?}\")]",
        summary: "Add a question mark (?) inside the route parameter."
    },
    {
        id: 53,
        title: "How do you define default values for route parameters?",
        category: "Routing & Model Binding",
        difficulty: "Beginner",
        explanation: "You define default values by using an equals sign `=` inside the route parameter definition.",
        code: "[HttpGet(\"{page=1}\")]",
        summary: "Use an equals sign (=) inside the route definition."
    },
    {
        id: 54,
        title: "What is Model Binding?",
        category: "Routing & Model Binding",
        difficulty: "Intermediate",
        explanation: "Model Binding is the process where ASP.NET Core extracts data from an incoming HTTP request (from the route, query string, or body) and automatically converts it into C# primitive types or complex objects so they can be passed as parameters to an Action method.",
        summary: "Automatically mapping HTTP request data to C# method parameters."
    },
    {
        id: 55,
        title: "What are the common Model Binding sources?",
        category: "Routing & Model Binding",
        difficulty: "Beginner",
        explanation: "By default, ASP.NET Core looks for data in this order:\n1. Form values (POST)\n2. Route values (`{id}`)\n3. Query strings (`?id=5`)",
        summary: "Form data, Route data, and Query strings."
    },
    {
        id: 56,
        title: "What does [FromRoute] do?",
        category: "Routing & Model Binding",
        difficulty: "Beginner",
        explanation: "It forces the model binder to bind the parameter exclusively from the route data (the URL path).",
        code: "public IActionResult Get([FromRoute] int id)",
        summary: "Forces binding from the URL route data."
    },
    {
        id: 57,
        title: "What does [FromQuery] do?",
        category: "Routing & Model Binding",
        difficulty: "Beginner",
        explanation: "It forces the model binder to bind the parameter exclusively from the URL query string.",
        code: "public IActionResult Search([FromQuery] string term, [FromQuery] int page)",
        summary: "Forces binding from the URL query string."
    },
    {
        id: 58,
        title: "What does [FromBody] do?",
        category: "Routing & Model Binding",
        difficulty: "Beginner",
        explanation: "It forces the model binder to bind the parameter from the HTTP request body. It uses the configured formatter (usually JSON) to deserialize the body into a complex C# object. You can only use one `[FromBody]` per action.",
        code: "public IActionResult Create([FromBody] ProductDto product)",
        summary: "Deserializes the HTTP request body into a C# object (usually from JSON)."
    },
    {
        id: 59,
        title: "What does [FromHeader] do?",
        category: "Routing & Model Binding",
        difficulty: "Beginner",
        explanation: "It forces the model binder to extract the value from a specific HTTP header.",
        code: "public IActionResult Get([FromHeader(Name = \"X-API-KEY\")] string apiKey)",
        summary: "Binds a parameter directly from an HTTP header."
    },
    {
        id: 60,
        title: "What happens if Model Binding fails?",
        category: "Routing & Model Binding",
        difficulty: "Intermediate",
        explanation: "If a value cannot be converted (e.g., passing 'abc' to an `int` parameter), the parameter gets its default value (e.g., 0). The framework adds an error to `ModelState`. If the controller is decorated with `[ApiController]`, it automatically short-circuits and returns a `400 Bad Request`.",
        summary: "ModelState becomes invalid. [ApiController] automatically returns a 400 Bad Request."
    },

    // --- WEB API FUNDAMENTALS (61-80) ---
    {
        id: 61,
        title: "What is ASP.NET Core Web API?",
        category: "Web API Fundamentals",
        difficulty: "Beginner",
        explanation: "It is a framework for building HTTP services that can be consumed by a broad range of clients including browsers, mobile devices, and IoT. It returns data (usually JSON) rather than HTML views.",
        summary: "A framework for building RESTful HTTP services returning data (like JSON)."
    },
    {
        id: 62,
        title: "What is the difference between an MVC Controller and an API Controller?",
        category: "Web API Fundamentals",
        difficulty: "Intermediate",
        explanation: "- **MVC Controller:** Inherits from `Controller`. Returns Views (HTML). Supports session/cookies.\n- **API Controller:** Inherits from `ControllerBase`. Returns Data (JSON). Decorated with `[ApiController]`. Uses attribute routing.",
        summary: "MVC returns Views (HTML); API returns Data (JSON) and inherits from ControllerBase."
    },
    {
        id: 63,
        title: "What is REST?",
        category: "Web API Fundamentals",
        difficulty: "Beginner",
        explanation: "REST (Representational State Transfer) is an architectural style for designing networked applications. It relies on a stateless, client-server protocol, almost always HTTP.",
        summary: "An architectural style for APIs based on standard HTTP protocols."
    },
    {
        id: 64,
        title: "What are the core principles of REST?",
        category: "Web API Fundamentals",
        difficulty: "Intermediate",
        explanation: "1. **Stateless:** The server holds no client state; every request contains all needed info.\n2. **Client-Server:** Decoupled architecture.\n3. **Cacheable:** Responses can be cached.\n4. **Uniform Interface:** Resources are identified by URLs and manipulated via standard HTTP methods (GET, POST, PUT, DELETE).",
        summary: "Statelessness, Client-Server separation, Cacheability, and a Uniform Interface."
    },
    {
        id: 65,
        title: "What does it mean for an API to be RESTful?",
        category: "Web API Fundamentals",
        difficulty: "Beginner",
        explanation: "A RESTful API adheres to REST principles. It uses nouns in URLs to represent resources (e.g., `/users`), uses HTTP methods correctly to perform CRUD operations, and returns standard HTTP status codes.",
        summary: "An API that strictly adheres to REST principles (nouns for URLs, standard HTTP methods)."
    },
    {
        id: 66,
        title: "What are the main HTTP methods used in REST APIs?",
        category: "Web API Fundamentals",
        difficulty: "Beginner",
        explanation: "- **GET:** Retrieve a resource.\n- **POST:** Create a new resource.\n- **PUT:** Update an existing resource (full replacement).\n- **PATCH:** Partially update a resource.\n- **DELETE:** Remove a resource.",
        summary: "GET (read), POST (create), PUT (full update), PATCH (partial update), DELETE (remove)."
    },
    {
        id: 67,
        title: "What is the difference between POST, PUT, and PATCH?",
        category: "Web API Fundamentals",
        difficulty: "Intermediate",
        explanation: "- **POST:** Creates a completely new resource.\n- **PUT:** Updates an entire resource. If the resource exists, it overwrites it completely.\n- **PATCH:** Updates only specific fields of a resource without touching the rest.",
        summary: "POST creates. PUT completely replaces. PATCH partially modifies."
    },
    {
        id: 68,
        title: "What does Idempotency mean in REST?",
        category: "Web API Fundamentals",
        difficulty: "Advanced",
        explanation: "An HTTP method is idempotent if making the identical request multiple times produces the exact same result/system state as making it just once. It is critical for network resiliency (retrying failed requests safely).",
        summary: "Multiple identical requests yield the exact same system state as a single request."
    },
    {
        id: 69,
        title: "Which HTTP methods are idempotent?",
        category: "Web API Fundamentals",
        difficulty: "Advanced",
        explanation: "- **Idempotent:** GET, PUT, DELETE, HEAD. (Deleting a resource 10 times results in the resource being gone, same as deleting it once).\n- **NOT Idempotent:** POST (calling POST 10 times creates 10 resources).",
        summary: "GET, PUT, and DELETE are idempotent. POST is not."
    },
    {
        id: 70,
        title: "Why are HTTP Status Codes important in Web APIs?",
        category: "Web API Fundamentals",
        difficulty: "Beginner",
        explanation: "They provide a standard way for the client to understand the result of their request without having to parse the JSON response body. They dictate whether a request succeeded, failed due to client error, or failed due to server error.",
        summary: "They instantly tell the client the outcome of the request (success, client error, or server error)."
    },
    {
        id: 71,
        title: "What are the common HTTP Status Codes you should know?",
        category: "Web API Fundamentals",
        difficulty: "Intermediate",
        explanation: "- **200 OK:** Success.\n- **201 Created:** Successfully created (POST).\n- **204 No Content:** Success, but no data to return (DELETE/PUT).\n- **400 Bad Request:** Client sent invalid data.\n- **401 Unauthorized:** Missing or invalid authentication token.\n- **403 Forbidden:** Authenticated, but lacks permission.\n- **404 Not Found:** Resource does not exist.\n- **500 Internal Server Error:** The server crashed.",
        summary: "2xx (Success), 4xx (Client Errors), 5xx (Server Errors)."
    },
    {
        id: 72,
        title: "What is IActionResult?",
        category: "Web API Fundamentals",
        difficulty: "Intermediate",
        explanation: "`IActionResult` is an interface representing the result of an action method. Returning it allows you to return various HTTP status codes and payloads seamlessly using helper methods like `Ok()`, `NotFound()`, and `BadRequest()`.",
        summary: "An interface allowing actions to return standard HTTP status codes and responses."
    },
    {
        id: 73,
        title: "What is ActionResult<T>?",
        category: "Web API Fundamentals",
        difficulty: "Intermediate",
        explanation: "Introduced in ASP.NET Core 2.1, it combines the benefits of returning a specific type (good for Swagger documentation) and returning `IActionResult` (for error status codes).",
        code: "public ActionResult<Product> Get(int id) {\n    if (product == null) return NotFound();\n    return product; // Implicitly cast to OkObjectResult\n}",
        summary: "A generic return type that supports both HTTP status results and strongly typed data."
    },
    {
        id: 74,
        title: "When should you use IActionResult vs ActionResult<T>?",
        category: "Web API Fundamentals",
        difficulty: "Intermediate",
        explanation: "Always prefer `ActionResult<T>` in modern APIs. It makes your code cleaner, strictly typed, and allows OpenAPI/Swagger generators to automatically infer the return type schema without needing extra `[ProducesResponseType]` attributes.",
        summary: "Prefer ActionResult<T> for better type safety and automatic Swagger documentation."
    },
    {
        id: 75,
        title: "What does the Ok() method do?",
        category: "Web API Fundamentals",
        difficulty: "Beginner",
        explanation: "It returns a `200 OK` HTTP status code along with the provided payload.",
        code: "return Ok(userList);",
        summary: "Returns a 200 Success status code."
    },
    {
        id: 76,
        title: "What does CreatedAtAction() do?",
        category: "Web API Fundamentals",
        difficulty: "Intermediate",
        explanation: "Used heavily in POST methods. It returns a `201 Created` status code, the created object in the body, and automatically adds a `Location` header to the response pointing to the URL where the new resource can be retrieved.",
        code: "return CreatedAtAction(nameof(GetById), new { id = user.Id }, user);",
        summary: "Returns 201 Created and a Location header pointing to the new resource."
    },
    {
        id: 77,
        title: "What does NoContent() do?",
        category: "Web API Fundamentals",
        difficulty: "Beginner",
        explanation: "It returns a `204 No Content` status code. This is the standard return type for successful PUT and DELETE operations where no data needs to be sent back.",
        summary: "Returns 204 No Content, typical for successful updates or deletions."
    },
    {
        id: 78,
        title: "What does BadRequest() do?",
        category: "Web API Fundamentals",
        difficulty: "Beginner",
        explanation: "It returns a `400 Bad Request`. Used when the client sends invalid input, fails validation, or violates a business rule.",
        summary: "Returns 400 Bad Request to indicate a client-side input error."
    },
    {
        id: 79,
        title: "What does NotFound() do?",
        category: "Web API Fundamentals",
        difficulty: "Beginner",
        explanation: "It returns a `404 Not Found`. Used when the requested resource ID does not exist in the database.",
        summary: "Returns 404 Not Found."
    },
    {
        id: 80,
        title: "What is the purpose of the [ApiController] attribute?",
        category: "Web API Fundamentals",
        difficulty: "Intermediate",
        explanation: "Applying this to a controller enables opinionated API behaviors:\n1. Requires attribute routing.\n2. Automatic HTTP 400 responses for model validation errors (no need to check `ModelState.IsValid`).\n3. Infers binding sources automatically (e.g., complex objects default to `[FromBody]`).",
        summary: "Enables automatic validation, route requirement, and smart parameter binding."
    },

    // --- WEB API ADVANCED (81-100) ---
    {
        id: 81,
        title: "What is Content Negotiation?",
        category: "Web API Advanced Concepts",
        difficulty: "Advanced",
        explanation: "Content negotiation is the process where the API and the client agree on the format of the response data. The client sends an `Accept` header (e.g., `application/json` or `application/xml`), and the API formats the response accordingly. ASP.NET Core defaults to JSON.",
        summary: "The API returning data in the specific format (JSON, XML) requested by the client's Accept header."
    },
    {
        id: 82,
        title: "How does JSON Serialization work in ASP.NET Core?",
        category: "Web API Advanced Concepts",
        difficulty: "Intermediate",
        explanation: "ASP.NET Core automatically serializes C# objects returned from controllers into JSON. As of .NET Core 3.0, it uses the highly optimized `System.Text.Json` namespace by default.",
        summary: "Automatically converts C# objects to JSON using System.Text.Json."
    },
    {
        id: 83,
        title: "System.Text.Json vs Newtonsoft.Json?",
        category: "Web API Advanced Concepts",
        difficulty: "Intermediate",
        explanation: "`System.Text.Json` is Microsoft's built-in serializer. It is significantly faster, uses less memory, and is highly secure. `Newtonsoft.Json` (Json.NET) is the older 3rd-party standard; it is slightly slower but supports more complex/legacy edge cases.",
        summary: "System.Text.Json is the modern, faster default. Newtonsoft is the older, feature-rich alternative."
    },
    {
        id: 84,
        title: "How do you handle Circular References in JSON?",
        category: "Web API Advanced Concepts",
        difficulty: "Advanced",
        explanation: "Circular references happen in EF Core when an Order has a Customer, and the Customer has a list of Orders. Serialization creates an infinite loop. \nFix: Configure `System.Text.Json` to ignore cycles in `Program.cs`:\n`builder.Services.AddControllers().AddJsonOptions(x => x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);`\n*Best Practice:* Use DTOs to avoid this entirely.",
        summary: "Use ReferenceHandler.IgnoreCycles in configuration, or better, map entities to DTOs."
    },
    {
        id: 85,
        title: "What is a DTO (Data Transfer Object)?",
        category: "Web API Advanced Concepts",
        difficulty: "Intermediate",
        explanation: "A DTO is a simple object used to transfer data between the client and the server. It contains no business logic or behavior, just flat properties.",
        summary: "A flat object used specifically for transferring data over the network."
    },
    {
        id: 86,
        title: "What are the benefits of using DTOs?",
        category: "Web API Advanced Concepts",
        difficulty: "Advanced",
        explanation: "1. **Over-posting protection:** Prevents users from updating fields they shouldn't (like `IsAdmin`).\n2. **Decoupling:** DB schema changes don't break the API contract.\n3. **Payload Size:** Sends only required data, saving bandwidth.\n4. **Circular References:** Prevents EF Core serialization loops.",
        summary: "Prevents over-posting vulnerabilities, decouples DB from API, and reduces payload size."
    },
    {
        id: 87,
        title: "What is the difference between an Entity and a DTO?",
        category: "Web API Advanced Concepts",
        difficulty: "Intermediate",
        explanation: "- **Entity:** Maps directly to a Database table (via EF Core). Contains relationships (Navigation properties).\n- **DTO:** Maps directly to the API JSON contract. Flat, optimized for the client.",
        summary: "Entities represent database tables; DTOs represent API JSON payloads."
    },
    {
        id: 88,
        title: "What is AutoMapper?",
        category: "Web API Advanced Concepts",
        difficulty: "Intermediate",
        explanation: "AutoMapper is a popular 3rd-party library that automatically maps properties from one object type to another (e.g., from an Entity to a DTO). It saves developers from writing hundreds of lines of manual mapping code.",
        code: "var productDto = _mapper.Map<ProductDto>(productEntity);",
        summary: "A library that automatically copies data from Entities into DTOs."
    },
    {
        id: 89,
        title: "When should you avoid AutoMapper?",
        category: "Web API Advanced Concepts",
        difficulty: "Advanced",
        explanation: "Avoid AutoMapper if mappings are extremely complex, require heavy conditional business logic, or if you are doing highly performance-critical data projections. In those cases, manual LINQ `.Select()` projections are faster and easier to debug.",
        summary: "Avoid it for complex, conditional mappings or hyper-performance-critical paths."
    },
    {
        id: 90,
        title: "What is API Versioning?",
        category: "Web API Advanced Concepts",
        difficulty: "Intermediate",
        explanation: "API Versioning is the practice of managing changes to your API over time. It allows you to introduce breaking changes (like a new JSON structure) without breaking existing clients who still rely on the old version.",
        summary: "Managing API changes so new features don't break old clients."
    },
    {
        id: 91,
        title: "What are the common strategies for API Versioning?",
        category: "Web API Advanced Concepts",
        difficulty: "Intermediate",
        explanation: "1. **URI Versioning (Most Common):** `/api/v1/users`\n2. **Query String:** `/api/users?api-version=1.0`\n3. **Header Versioning:** Client sends `X-Version: 1.0`.\n4. **Media Type (Accept Header):** `Accept: application/json;v=1.0`.",
        summary: "URI path, Query string, Custom Header, or Accept Header."
    },
    {
        id: 92,
        title: "What is Swagger (OpenAPI)?",
        category: "Web API Advanced Concepts",
        difficulty: "Beginner",
        explanation: "Swagger is a toolset built on the OpenAPI Specification. It automatically generates interactive, web-based documentation for your API directly from your C# code and routing attributes. It allows developers to test endpoints right in the browser.",
        summary: "A tool that automatically generates interactive documentation for your API."
    },
    {
        id: 93,
        title: "How do you configure Swagger in ASP.NET Core?",
        category: "Web API Advanced Concepts",
        difficulty: "Intermediate",
        explanation: "In .NET 6+, you register it in `Program.cs`:\n1. `builder.Services.AddSwaggerGen();` (registers the service)\n2. `app.UseSwagger();` (generates the JSON)\n3. `app.UseSwaggerUI();` (serves the interactive HTML UI).",
        summary: "By adding AddSwaggerGen() to services and UseSwagger() / UseSwaggerUI() to the pipeline."
    },
    {
        id: 94,
        title: "How do you secure Swagger with JWT?",
        category: "Web API Advanced Concepts",
        difficulty: "Advanced",
        explanation: "You must configure `AddSwaggerGen` to include an `OpenApiSecurityScheme` (usually Bearer/JWT) and an `OpenApiSecurityRequirement`. This adds a an \"Authorize\" button to the Swagger UI allowing you to input a token.",
        summary: "Configure OpenApiSecurityScheme in AddSwaggerGen to enable the Authorize button."
    },
    {
        id: 95,
        title: "What is CORS?",
        category: "Web API Advanced Concepts",
        difficulty: "Intermediate",
        explanation: "CORS (Cross-Origin Resource Sharing) is a browser security feature. By default, browsers prevent a frontend web app (e.g., `react.com`) from making API calls to a different domain (`api.com`). CORS is a set of HTTP headers that the API sends to tell the browser it is allowed to read the data.",
        summary: "A security feature that allows APIs to specify which external domains can access them."
    },
    {
        id: 96,
        title: "Why is CORS required?",
        category: "Web API Advanced Concepts",
        difficulty: "Intermediate",
        explanation: "It prevents malicious websites from making silent API requests on behalf of a user using the user's stored cookies (a form of CSRF). It enforces the Same-Origin Policy.",
        summary: "To prevent malicious sites from silently calling your API from a user's browser."
    },
    {
        id: 97,
        title: "How do you configure CORS in ASP.NET Core?",
        category: "Web API Advanced Concepts",
        difficulty: "Intermediate",
        explanation: "1. Define a policy in services: `builder.Services.AddCors(...)`\n2. Add the middleware: `app.UseCors(\"PolicyName\")`\nYou can specify allowed Origins, Methods (GET/POST), and Headers.",
        code: "builder.Services.AddCors(options => {\n    options.AddPolicy(\"AllowReactApp\", builder =>\n        builder.WithOrigins(\"http://localhost:3000\")\n               .AllowAnyMethod()\n               .AllowAnyHeader());\n});\n// Later\napp.UseCors(\"AllowReactApp\");",
        summary: "Register a policy in services and add app.UseCors() in the pipeline."
    },
    {
        id: 98,
        title: "Can you apply CORS to specific endpoints?",
        category: "Web API Advanced Concepts",
        difficulty: "Intermediate",
        explanation: "Yes. Instead of applying it globally, you can decorate specific controllers or actions with the `[EnableCors(\"PolicyName\")]` attribute.",
        summary: "Yes, using the [EnableCors] attribute."
    },
    {
        id: 99,
        title: "What is the IHttpClientFactory?",
        category: "Web API Advanced Concepts",
        difficulty: "Advanced",
        explanation: "It is a factory pattern used to create `HttpClient` instances. It solves the socket exhaustion problem of manually instantiating `new HttpClient()` and manages the lifetime of HTTP handlers efficiently.",
        summary: "A factory for creating HttpClients that prevents socket exhaustion."
    },
    {
        id: 100,
        title: "How do you make an external API call efficiently?",
        category: "Web API Advanced Concepts",
        difficulty: "Advanced",
        explanation: "Register `IHttpClientFactory` in `Program.cs`, inject it into your service, and use `_httpClientFactory.CreateClient()`. Combine this with asynchronous programming (`async/await`) and `System.Text.Json` to read the response.",
        summary: "Use injected IHttpClientFactory and async/await."
    }
];

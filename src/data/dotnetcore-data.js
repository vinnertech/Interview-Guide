export const dotnetcoreQuestions = [
  {
    "id": 1,
    "title": "What is ASP.NET Core?",
    "category": "ASP.NET Core Fundamentals",
    "difficulty": "Beginner",
    "explanation": "ASP.NET Core is a cross-platform, high-performance, open-source framework for building modern, cloud-based, Internet-connected applications. It is a complete redesign of the legacy ASP.NET framework.",
    "example": "With ASP.NET Core, you can build web apps, IoT apps, and mobile backends that run on Windows, macOS, and Linux.",
    "mistake": "Confusing it with the legacy .NET Framework which only runs on Windows.",
    "summary": "ASP.NET Core is the modern, cross-platform, open-source version of ASP.NET."
  },
  {
    "id": 2,
    "title": "What are the major features of ASP.NET Core?",
    "category": "ASP.NET Core Fundamentals",
    "difficulty": "Beginner",
    "explanation": "Key features include:\n- Cross-platform support (Windows, macOS, Linux)\n- High performance (built-in Kestrel web server)\n- Built-in Dependency Injection (DI)\n- Cloud-ready configuration system\n- Unified story for building web UI and web APIs\n- Lightweight, modular request pipeline (Middleware)",
    "mistake": "Assuming it requires IIS to run. ASP.NET Core applications are console apps running Kestrel and can be hosted anywhere.",
    "summary": "Major features: Cross-platform, high-performance, built-in DI, unified API/MVC, and modular middleware pipeline."
  },
  {
    "id": 3,
    "title": "What is the difference between .NET Framework, .NET Core, and modern .NET?",
    "category": "ASP.NET Core Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "- **.NET Framework:** Legacy, Windows-only, relies on IIS for web apps.\n- **.NET Core:** The modern, open-source, cross-platform rewrite (versions 1.0 to 3.1).\n- **modern .NET (.NET 5+):** The unification of .NET Core, Mono, and Xamarin into a single, unified platform going forward.",
    "summary": ".NET Framework is Windows-only legacy; .NET Core is the cross-platform rewrite; modern .NET 5+ unifies them."
  },
  {
    "id": 4,
    "title": "What is the difference between ASP.NET Core and ASP.NET MVC 5?",
    "category": "ASP.NET Core Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "- **ASP.NET MVC 5:** Bound tightly to `System.Web` and IIS. Split into separate Web API and MVC controllers.\n- **ASP.NET Core:** Independent of `System.Web`. Unified `Controller` base class for both Web API and MVC. Cross-platform, built-in DI, and vastly better performance.",
    "summary": "Core has built-in DI, no System.Web dependency, unified controllers, and runs cross-platform."
  },
  {
    "id": 5,
    "title": "How does cross-platform support work in ASP.NET Core?",
    "category": "ASP.NET Core Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "It relies on the .NET Core runtime (CoreCLR), which has native implementations for Windows, macOS, and Linux. The framework avoids Windows-specific APIs (like Windows Registry or IIS-specific modules) allowing code to compile and run identically across OS environments.",
    "summary": "Relies on the CoreCLR runtime which abstracts OS interactions for Windows, Mac, and Linux."
  },
  {
    "id": 6,
    "title": "What is Kestrel?",
    "category": "ASP.NET Core Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "Kestrel is the default, cross-platform, high-performance web server included with ASP.NET Core. It processes incoming HTTP requests and passes them to the application pipeline.",
    "tip": "Kestrel is often used behind a reverse proxy (like NGINX, Apache, or IIS) in production for security and connection management, though it can run edge-facing.",
    "summary": "Kestrel is the default, high-performance, cross-platform web server for ASP.NET Core."
  },
  {
    "id": 7,
    "title": "How does IIS hosting work in ASP.NET Core?",
    "category": "ASP.NET Core Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "ASP.NET Core uses the ASP.NET Core Module (ANCM) for IIS. It can run in:\n- **In-process (default):** Runs directly inside the IIS worker process (w3wp.exe) for maximum performance.\n- **Out-of-process:** IIS acts purely as a reverse proxy forwarding requests to the internal Kestrel server (dotnet.exe).",
    "summary": "IIS uses ANCM to host in-process (high performance) or out-of-process (proxy to Kestrel)."
  },
  {
    "id": 8,
    "title": "What is the Request Pipeline in ASP.NET Core?",
    "category": "ASP.NET Core Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "The request pipeline is a sequence of middleware components that handle incoming HTTP requests and outgoing HTTP responses. Requests flow through the middleware sequentially.",
    "summary": "A sequence of middleware components that process incoming requests and outgoing responses."
  },
  {
    "id": 9,
    "title": "What is Middleware?",
    "category": "ASP.NET Core Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "Middleware is software assembled into the application pipeline to handle requests and responses. Each component chooses whether to pass the request to the next component in the pipeline, and can perform work before and after the next component is invoked.",
    "example": "Routing middleware, Authentication middleware, CORS middleware.",
    "summary": "Software components in the pipeline that handle requests and responses."
  },
  {
    "id": 10,
    "title": "How does Middleware execution work?",
    "category": "ASP.NET Core Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "Middleware executes in the order it is added to the pipeline in `Program.cs`. It acts like a Russian nesting doll (or a chain of responsibility). The first middleware processes the request, calls `next()`, the next processes it, and so on. When returning the response, it unwinds in reverse order.",
    "summary": "Executes sequentially on requests, and in reverse order on responses."
  },
  {
    "id": 11,
    "title": "What is the purpose of Program.cs?",
    "category": "ASP.NET Core Fundamentals",
    "difficulty": "Beginner",
    "explanation": "`Program.cs` is the entry point of an ASP.NET Core application. In modern .NET (6+), it uses top-level statements to configure the web builder, register dependency injection services, configure the HTTP request pipeline (middleware), and run the application.",
    "summary": "The application entry point where services and the HTTP pipeline are configured."
  },
  {
    "id": 12,
    "title": "What happened to Startup.cs in modern .NET?",
    "category": "ASP.NET Core Fundamentals",
    "difficulty": "Beginner",
    "explanation": "Starting in .NET 6, Microsoft introduced the Minimal Hosting Model. `Startup.cs` was removed, and its responsibilities (`ConfigureServices` and `Configure`) were consolidated directly into `Program.cs` using top-level statements.",
    "summary": "It was merged into Program.cs in .NET 6+ to simplify the hosting model."
  },
  {
    "id": 13,
    "title": "What is WebApplicationBuilder?",
    "category": "ASP.NET Core Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "`WebApplicationBuilder` is a class introduced in .NET 6 used to configure an ASP.NET Core app. It exposes properties like `Services` (for DI), `Configuration` (for appsettings), `Environment` (for hosting environment), and `Logging`.",
    "code": "var builder = WebApplication.CreateBuilder(args);\nbuilder.Services.AddControllers();",
    "summary": "A builder class used to configure services, configuration, and logging."
  },
  {
    "id": 14,
    "title": "What is WebApplication?",
    "category": "ASP.NET Core Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "Created by calling `builder.Build()`, `WebApplication` is used to configure the HTTP request pipeline (add middleware) and run the app. It implements `IEndpointRouteBuilder` to map endpoints.",
    "code": "var app = builder.Build();\napp.UseHttpsRedirection();\napp.MapControllers();\napp.Run();",
    "summary": "The object used to configure the HTTP pipeline and start the server."
  },
  {
    "id": 15,
    "title": "What is Dependency Injection (DI)?",
    "category": "ASP.NET Core Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "DI is a design pattern used to achieve Inversion of Control (IoC) between classes and their dependencies. Instead of a class instantiating its dependencies, they are injected (usually via the constructor) by a framework.",
    "summary": "A pattern where dependencies are injected into a class rather than the class creating them."
  },
  {
    "id": 16,
    "title": "Does ASP.NET Core have built-in DI?",
    "category": "ASP.NET Core Fundamentals",
    "difficulty": "Beginner",
    "explanation": "Yes, ASP.NET Core includes a built-in, lightweight IoC container (`Microsoft.Extensions.DependencyInjection`). It is a first-class citizen; almost the entire framework relies on it.",
    "summary": "Yes, it has a built-in, first-class Dependency Injection container."
  },
  {
    "id": 17,
    "title": "What are the service lifetimes in ASP.NET Core DI?",
    "category": "ASP.NET Core Fundamentals",
    "difficulty": "Beginner",
    "explanation": "There are three lifetimes:\n1. **Transient:** A new instance is created every time it is requested.\n2. **Scoped:** A new instance is created once per client request (HTTP connection).\n3. **Singleton:** A single instance is created the first time it is requested, and shared across all requests.",
    "summary": "Transient (per request), Scoped (per HTTP request), and Singleton (one instance forever)."
  },
  {
    "id": 18,
    "title": "When should you use Singleton vs Scoped vs Transient?",
    "category": "ASP.NET Core Fundamentals",
    "difficulty": "Advanced",
    "explanation": "- **Transient:** Lightweight, stateless services.\n- **Scoped:** Services that hold state per web request (e.g., `DbContext` for Entity Framework).\n- **Singleton:** State shared globally (e.g., in-memory Cache, Email dispatchers).",
    "mistake": "Injecting a Scoped service into a Singleton service (Captive Dependency). The scoped service will effectively become a singleton and cause memory leaks or thread safety issues.",
    "summary": "Transient for stateless, Scoped for per-request state (DbContext), Singleton for global state."
  },
  {
    "id": 19,
    "title": "How does Configuration work in ASP.NET Core?",
    "category": "ASP.NET Core Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "Configuration is based on a key-value pair system. It reads from multiple providers in order, overriding previous values. Default order: `appsettings.json` -> `appsettings.{Environment}.json` -> User Secrets -> Environment Variables -> Command-line arguments.",
    "summary": "Reads key-value pairs from multiple layered sources like appsettings.json and Environment Variables."
  },
  {
    "id": 20,
    "title": "What is the Options Pattern?",
    "category": "ASP.NET Core Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "The Options pattern uses classes to provide strongly typed access to groups of related settings from configuration. You bind a section of `appsettings.json` to a C# class and inject it using `IOptions<T>`, `IOptionsSnapshot<T>`, or `IOptionsMonitor<T>`.",
    "code": "builder.Services.Configure<JwtSettings>(builder.Configuration.GetSection(\"Jwt\"));\n\n// In controller\npublic AuthController(IOptions<JwtSettings> options)",
    "summary": "A pattern to bind configuration sections to strongly typed C# classes and inject them via DI."
  },
  {
    "id": 21,
    "title": "What is the MVC architecture?",
    "category": "MVC",
    "difficulty": "Beginner",
    "explanation": "MVC (Model-View-Controller) is a software design pattern that separates an application into three main groups of components: Models (data/business logic), Views (user interface), and Controllers (handles user requests and connects Model to View).",
    "summary": "An architectural pattern separating application logic into Models, Views, and Controllers."
  },
  {
    "id": 22,
    "title": "What is a Controller in MVC?",
    "category": "MVC",
    "difficulty": "Beginner",
    "explanation": "A Controller is a C# class inheriting from `Controller` that handles incoming HTTP requests. It retrieves data from the Model, executes business logic, and returns a View or API response.",
    "summary": "A class that handles incoming requests, updates the model, and selects a view to render."
  },
  {
    "id": 23,
    "title": "What is an Action?",
    "category": "MVC",
    "difficulty": "Beginner",
    "explanation": "An Action is a public method on a Controller class. It represents a specific endpoint that a user can request, returning an `IActionResult`.",
    "code": "public IActionResult Index() {\n    return View();\n}",
    "summary": "A public method on a controller that handles a specific HTTP request."
  },
  {
    "id": 24,
    "title": "What is a View in MVC?",
    "category": "MVC",
    "difficulty": "Beginner",
    "explanation": "A View is a file containing HTML and Razor syntax (`.cshtml`). It is responsible for rendering the UI and presenting the data provided by the Controller.",
    "summary": "A .cshtml file responsible for rendering the UI."
  },
  {
    "id": 25,
    "title": "What is a Model in MVC?",
    "category": "MVC",
    "difficulty": "Beginner",
    "explanation": "A Model represents the state, data, and business logic of the application. It is completely independent of the UI and how data is displayed.",
    "summary": "Classes representing the state, data, and business logic of the app."
  },
  {
    "id": 26,
    "title": "Describe the ASP.NET Core MVC lifecycle.",
    "category": "MVC",
    "difficulty": "Intermediate",
    "explanation": "1. Request reaches the Middleware pipeline.\n2. Routing middleware determines the target Controller and Action.\n3. Model Binding maps request data (URL, Body) to Action parameters.\n4. Action Filters execute.\n5. Controller Action executes.\n6. Result Execution (e.g., View rendering or JSON serialization).\n7. Response flows back out the middleware pipeline.",
    "summary": "Routing -> Model Binding -> Action Filters -> Action Execution -> Result Execution."
  },
  {
    "id": 27,
    "title": "What is Razor?",
    "category": "MVC",
    "difficulty": "Beginner",
    "explanation": "Razor is a markup syntax that lets you embed server-based C# code into HTML web pages. It is fluid, easy to learn, and evaluated on the server before the HTML is sent to the client.",
    "summary": "A markup syntax for embedding server-side C# into HTML."
  },
  {
    "id": 28,
    "title": "What is Razor syntax?",
    "category": "MVC",
    "difficulty": "Beginner",
    "explanation": "Razor uses the `@` symbol to transition from HTML to C# code. You can use `@` for single expressions, `@{ ... }` for code blocks, and standard C# control structures like `@if` or `@foreach`.",
    "code": "<h1>Hello @Model.Name</h1>\n@foreach(var item in Model.Items) {\n    <li>@item.Name</li>\n}",
    "summary": "Uses the @ symbol to seamlessly transition between HTML markup and C# code."
  },
  {
    "id": 29,
    "title": "What is ViewBag?",
    "category": "MVC",
    "difficulty": "Beginner",
    "explanation": "ViewBag is a dynamic object used to pass data from a Controller to a View. Because it relies on `dynamic`, there is no compile-time type checking.",
    "code": "// Controller\nViewBag.Message = \"Hello World\";\n// View\n<h1>@ViewBag.Message</h1>",
    "mistake": "Overusing ViewBag instead of strongly-typed ViewModels, leading to runtime errors.",
    "summary": "A dynamic object for passing untyped data from Controller to View."
  },
  {
    "id": 30,
    "title": "What is ViewData?",
    "category": "MVC",
    "difficulty": "Beginner",
    "explanation": "ViewData is a dictionary (`ViewDataDictionary`) used to pass data from a Controller to a View. Data is stored as key-value pairs of type `object`, requiring casting in the view.",
    "code": "// Controller\nViewData[\"Message\"] = \"Hello World\";\n// View\n<h1>@((string)ViewData[\"Message\"])</h1>",
    "summary": "A dictionary object for passing loosely typed data from Controller to View."
  },
  {
    "id": 31,
    "title": "What is TempData?",
    "category": "MVC",
    "difficulty": "Intermediate",
    "explanation": "TempData is a dictionary used to store data for the lifespan of a single subsequent request. It is typically used for passing messages (like 'Item Saved') during a redirect (`RedirectToAction`). Under the hood, it uses Session or a Cookie.",
    "summary": "Used to store short-lived data that survives exactly one redirect."
  },
  {
    "id": 32,
    "title": "How do you pass data from Controller to View?",
    "category": "MVC",
    "difficulty": "Beginner",
    "explanation": "You can pass data using:\n1. **ViewModel (Recommended):** Passed directly to `return View(model)`.\n2. **ViewBag:** Dynamic property.\n3. **ViewData:** Dictionary collection.\n4. **TempData:** Dictionary collection for redirects.",
    "summary": "Using strongly-typed ViewModels (best practice), ViewBag, ViewData, or TempData."
  },
  {
    "id": 33,
    "title": "What are Strongly Typed Views?",
    "category": "MVC",
    "difficulty": "Beginner",
    "explanation": "A view where the type of the Model is explicitly declared using the `@model` directive. This enables IntelliSense, compile-time checking, and clean refactoring.",
    "code": "@model MyApplication.Models.Product\n<h1>@Model.ProductName</h1>",
    "summary": "Views that declare a specific C# type for their model, enabling compile-time checking."
  },
  {
    "id": 34,
    "title": "What is a ViewModel?",
    "category": "MVC",
    "difficulty": "Intermediate",
    "explanation": "A ViewModel is a custom class specifically created to represent the data required for a single View. It aggregates data from multiple domain entities or formats it perfectly for the UI, preventing the View from containing complex logic.",
    "summary": "A purpose-built class containing exactly the data required by a specific View."
  },
  {
    "id": 35,
    "title": "Why use a ViewModel instead of an Entity Model?",
    "category": "MVC",
    "difficulty": "Intermediate",
    "explanation": "1. **Security:** Entities might contain sensitive data (like Passwords). ViewModels only expose what the UI needs.\n2. **Separation of Concerns:** DB schema shouldn't dictate UI design.\n3. **Aggregation:** A View might need data from a `User`, `Address`, and `Order`. A ViewModel combines them cleanly.",
    "summary": "For security, separation of concerns, and aggregating data from multiple entities."
  },
  {
    "id": 36,
    "title": "What are Partial Views?",
    "category": "MVC",
    "difficulty": "Beginner",
    "explanation": "A Partial View is a reusable `.cshtml` file that renders a chunk of HTML inside another View. It is the MVC equivalent of a UI component (like a React component), used for headers, footers, or reusable forms.",
    "code": "<partial name=\"_LoginPartial\" />",
    "summary": "Reusable chunks of Razor HTML that can be embedded into other views."
  },
  {
    "id": 37,
    "title": "What is a Layout in MVC?",
    "category": "MVC",
    "difficulty": "Beginner",
    "explanation": "A Layout (`_Layout.cshtml`) is a master template that defines the common UI elements of a site (HTML head, header, navigation, footer). Views render their content inside the Layout where the `@RenderBody()` method is called.",
    "summary": "A master template file that defines the common wrapper UI for the application."
  },
  {
    "id": 38,
    "title": "What are View Components?",
    "category": "MVC",
    "difficulty": "Advanced",
    "explanation": "View Components are similar to partial views, but much more powerful. They don't depend on the calling controller's model. They have their own C# backend class that can inject dependencies (like a DbContext) and run complex async logic to fetch their own data.",
    "summary": "Like partial views, but with their own C# backend class capable of DI and async logic."
  },
  {
    "id": 39,
    "title": "What is the difference between a Partial View and a View Component?",
    "category": "MVC",
    "difficulty": "Advanced",
    "explanation": "- **Partial View:** Dumb UI component. Relies on the parent view to provide its data/model.\n- **View Component:** Smart UI component. Has a C# class, supports dependency injection, and can query the database itself (e.g., a Shopping Cart summary or dynamic Navigation Menu).",
    "summary": "Partial Views rely on parent data; View Components fetch their own data."
  },
  {
    "id": 40,
    "title": "What are Tag Helpers?",
    "category": "MVC",
    "difficulty": "Intermediate",
    "explanation": "Tag Helpers enable server-side code to participate in creating and rendering HTML elements in Razor files. They look like standard HTML attributes but execute C# on the server.",
    "code": "<a asp-controller=\"Home\" asp-action=\"Index\" class=\"btn\">Home</a>",
    "summary": "HTML-friendly syntax that uses server-side C# to generate HTML attributes and elements."
  },
  {
    "id": 41,
    "title": "What is the difference between HTML Helpers and Tag Helpers?",
    "category": "MVC",
    "difficulty": "Intermediate",
    "explanation": "- **HTML Helpers:** Older syntax using C# methods (e.g., `@Html.ActionLink(\"Home\", \"Index\")`). Doesn't feel like natural HTML.\n- **Tag Helpers:** Modern, HTML-native syntax (e.g., `<a asp-action=\"Index\">`). Integrates beautifully with HTML editors and frontend developers.",
    "summary": "HTML Helpers use C# method syntax; Tag Helpers use HTML attribute syntax."
  },
  {
    "id": 42,
    "title": "How do you validate a model in MVC?",
    "category": "MVC",
    "difficulty": "Intermediate",
    "explanation": "Apply Data Annotations (attributes like `[Required]`, `[StringLength]`) to your ViewModel properties. In the Controller, check `if (!ModelState.IsValid)` before processing.",
    "summary": "Using Data Annotation attributes on ViewModels and checking ModelState.IsValid."
  },
  {
    "id": 43,
    "title": "What is Anti-Forgery Validation in MVC?",
    "category": "MVC",
    "difficulty": "Advanced",
    "explanation": "It prevents Cross-Site Request Forgery (CSRF) attacks. ASP.NET Core MVC forms automatically include a hidden antiforgery token. You apply the `[ValidateAntiForgeryToken]` attribute to POST actions to verify the token matches the user's session.",
    "summary": "A mechanism using hidden tokens to prevent CSRF attacks on POST actions."
  },
  {
    "id": 44,
    "title": "What is the purpose of _ViewStart.cshtml?",
    "category": "MVC",
    "difficulty": "Beginner",
    "explanation": "`_ViewStart.cshtml` executes before every full view in its folder hierarchy. It is typically used to set the default Layout for all views, preventing the need to specify the layout in every single view.",
    "summary": "Sets common view properties (like the Layout) globally across multiple views."
  },
  {
    "id": 45,
    "title": "What is the purpose of _ViewImports.cshtml?",
    "category": "MVC",
    "difficulty": "Beginner",
    "explanation": "`_ViewImports.cshtml` provides a mechanism to include common namespaces (`@using`), Tag Helpers (`@addTagHelper`), and other directives across all views globally, keeping individual view files clean.",
    "summary": "Globally registers namespaces and Tag Helpers for all Razor views."
  },
  {
    "id": 46,
    "title": "What is Routing in ASP.NET Core?",
    "category": "Routing & Model Binding",
    "difficulty": "Beginner",
    "explanation": "Routing is the process of mapping incoming HTTP requests (URLs) to specific executable endpoints (like MVC Controllers and Actions).",
    "summary": "The mechanism that matches incoming URLs to executable code endpoints."
  },
  {
    "id": 47,
    "title": "What is Conventional Routing?",
    "category": "Routing & Model Binding",
    "difficulty": "Beginner",
    "explanation": "Conventional routing defines routes globally in `Program.cs`. It relies on a default URL pattern like `{controller}/{action}/{id?}`. It is mostly used for MVC UI applications.",
    "code": "app.MapControllerRoute(\n    name: \"default\",\n    pattern: \"{controller=Home}/{action=Index}/{id?}\");",
    "summary": "Global route patterns defined centrally, typically used for MVC applications."
  },
  {
    "id": 48,
    "title": "What is Attribute Routing?",
    "category": "Routing & Model Binding",
    "difficulty": "Beginner",
    "explanation": "Attribute routing uses C# attributes placed directly above Controllers and Actions to define their routes. It is the absolute standard and highly recommended approach for RESTful Web APIs.",
    "code": "[ApiController]\n[Route(\"api/[controller]\")]\npublic class ProductsController : ControllerBase {\n    [HttpGet(\"{id}\")]\n    public IActionResult Get(int id) { ... }\n}",
    "summary": "Defining routes using attributes directly on controllers and actions. Essential for APIs."
  },
  {
    "id": 49,
    "title": "What is Endpoint Routing?",
    "category": "Routing & Model Binding",
    "difficulty": "Intermediate",
    "explanation": "Introduced in ASP.NET Core 3.0, Endpoint Routing separates route matching from endpoint execution. This allows middleware (like Authorization or CORS) to know which endpoint will execute *before* it actually executes.",
    "summary": "A routing system that separates route matching from execution, enabling smarter middleware."
  },
  {
    "id": 50,
    "title": "What are Route Parameters?",
    "category": "Routing & Model Binding",
    "difficulty": "Beginner",
    "explanation": "Route parameters are dynamic segments of a URL defined within curly braces `{}`. The routing engine extracts these values and binds them to the Action method parameters.",
    "example": "In `/api/users/{id}`, `{id}` is the route parameter.",
    "summary": "Dynamic segments of a URL enclosed in curly braces, passed as method arguments."
  },
  {
    "id": 51,
    "title": "What are Route Constraints?",
    "category": "Routing & Model Binding",
    "difficulty": "Intermediate",
    "explanation": "Route constraints restrict how a route parameter is matched. They ensure the route only hits the action if the parameter is of a specific type or format.",
    "code": "[HttpGet(\"{id:int}\")] // Only matches if id is an integer\n[HttpGet(\"{name:alpha:minlength(3)}\")]",
    "summary": "Rules applied to route parameters (e.g., :int) to restrict which requests match."
  },
  {
    "id": 52,
    "title": "How do you make a route parameter optional?",
    "category": "Routing & Model Binding",
    "difficulty": "Beginner",
    "explanation": "You make a route parameter optional by appending a question mark `?` to it.",
    "code": "[HttpGet(\"{id?}\")]",
    "summary": "Add a question mark (?) inside the route parameter."
  },
  {
    "id": 53,
    "title": "How do you define default values for route parameters?",
    "category": "Routing & Model Binding",
    "difficulty": "Beginner",
    "explanation": "You define default values by using an equals sign `=` inside the route parameter definition.",
    "code": "[HttpGet(\"{page=1}\")]",
    "summary": "Use an equals sign (=) inside the route definition."
  },
  {
    "id": 54,
    "title": "What is Model Binding?",
    "category": "Routing & Model Binding",
    "difficulty": "Intermediate",
    "explanation": "Model Binding is the process where ASP.NET Core extracts data from an incoming HTTP request (from the route, query string, or body) and automatically converts it into C# primitive types or complex objects so they can be passed as parameters to an Action method.",
    "summary": "Automatically mapping HTTP request data to C# method parameters."
  },
  {
    "id": 55,
    "title": "What are the common Model Binding sources?",
    "category": "Routing & Model Binding",
    "difficulty": "Beginner",
    "explanation": "By default, ASP.NET Core looks for data in this order:\n1. Form values (POST)\n2. Route values (`{id}`)\n3. Query strings (`?id=5`)",
    "summary": "Form data, Route data, and Query strings."
  },
  {
    "id": 56,
    "title": "What does [FromRoute] do?",
    "category": "Routing & Model Binding",
    "difficulty": "Beginner",
    "explanation": "It forces the model binder to bind the parameter exclusively from the route data (the URL path).",
    "code": "public IActionResult Get([FromRoute] int id)",
    "summary": "Forces binding from the URL route data."
  },
  {
    "id": 57,
    "title": "What does [FromQuery] do?",
    "category": "Routing & Model Binding",
    "difficulty": "Beginner",
    "explanation": "It forces the model binder to bind the parameter exclusively from the URL query string.",
    "code": "public IActionResult Search([FromQuery] string term, [FromQuery] int page)",
    "summary": "Forces binding from the URL query string."
  },
  {
    "id": 58,
    "title": "What does [FromBody] do?",
    "category": "Routing & Model Binding",
    "difficulty": "Beginner",
    "explanation": "It forces the model binder to bind the parameter from the HTTP request body. It uses the configured formatter (usually JSON) to deserialize the body into a complex C# object. You can only use one `[FromBody]` per action.",
    "code": "public IActionResult Create([FromBody] ProductDto product)",
    "summary": "Deserializes the HTTP request body into a C# object (usually from JSON)."
  },
  {
    "id": 59,
    "title": "What does [FromHeader] do?",
    "category": "Routing & Model Binding",
    "difficulty": "Beginner",
    "explanation": "It forces the model binder to extract the value from a specific HTTP header.",
    "code": "public IActionResult Get([FromHeader(Name = \"X-API-KEY\")] string apiKey)",
    "summary": "Binds a parameter directly from an HTTP header."
  },
  {
    "id": 60,
    "title": "What happens if Model Binding fails?",
    "category": "Routing & Model Binding",
    "difficulty": "Intermediate",
    "explanation": "If a value cannot be converted (e.g., passing 'abc' to an `int` parameter), the parameter gets its default value (e.g., 0). The framework adds an error to `ModelState`. If the controller is decorated with `[ApiController]`, it automatically short-circuits and returns a `400 Bad Request`.",
    "summary": "ModelState becomes invalid. [ApiController] automatically returns a 400 Bad Request."
  },
  {
    "id": 61,
    "title": "What is ASP.NET Core Web API?",
    "category": "Web API Fundamentals",
    "difficulty": "Beginner",
    "explanation": "It is a framework for building HTTP services that can be consumed by a broad range of clients including browsers, mobile devices, and IoT. It returns data (usually JSON) rather than HTML views.",
    "summary": "A framework for building RESTful HTTP services returning data (like JSON)."
  },
  {
    "id": 62,
    "title": "What is the difference between an MVC Controller and an API Controller?",
    "category": "Web API Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "- **MVC Controller:** Inherits from `Controller`. Returns Views (HTML). Supports session/cookies.\n- **API Controller:** Inherits from `ControllerBase`. Returns Data (JSON). Decorated with `[ApiController]`. Uses attribute routing.",
    "summary": "MVC returns Views (HTML); API returns Data (JSON) and inherits from ControllerBase."
  },
  {
    "id": 63,
    "title": "What is REST?",
    "category": "Web API Fundamentals",
    "difficulty": "Beginner",
    "explanation": "REST (Representational State Transfer) is an architectural style for designing networked applications. It relies on a stateless, client-server protocol, almost always HTTP.",
    "summary": "An architectural style for APIs based on standard HTTP protocols."
  },
  {
    "id": 64,
    "title": "What are the core principles of REST?",
    "category": "Web API Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "1. **Stateless:** The server holds no client state; every request contains all needed info.\n2. **Client-Server:** Decoupled architecture.\n3. **Cacheable:** Responses can be cached.\n4. **Uniform Interface:** Resources are identified by URLs and manipulated via standard HTTP methods (GET, POST, PUT, DELETE).",
    "summary": "Statelessness, Client-Server separation, Cacheability, and a Uniform Interface."
  },
  {
    "id": 65,
    "title": "What does it mean for an API to be RESTful?",
    "category": "Web API Fundamentals",
    "difficulty": "Beginner",
    "explanation": "A RESTful API adheres to REST principles. It uses nouns in URLs to represent resources (e.g., `/users`), uses HTTP methods correctly to perform CRUD operations, and returns standard HTTP status codes.",
    "summary": "An API that strictly adheres to REST principles (nouns for URLs, standard HTTP methods)."
  },
  {
    "id": 66,
    "title": "What are the main HTTP methods used in REST APIs?",
    "category": "Web API Fundamentals",
    "difficulty": "Beginner",
    "explanation": "- **GET:** Retrieve a resource.\n- **POST:** Create a new resource.\n- **PUT:** Update an existing resource (full replacement).\n- **PATCH:** Partially update a resource.\n- **DELETE:** Remove a resource.",
    "summary": "GET (read), POST (create), PUT (full update), PATCH (partial update), DELETE (remove)."
  },
  {
    "id": 67,
    "title": "What is the difference between POST, PUT, and PATCH?",
    "category": "Web API Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "- **POST:** Creates a completely new resource.\n- **PUT:** Updates an entire resource. If the resource exists, it overwrites it completely.\n- **PATCH:** Updates only specific fields of a resource without touching the rest.",
    "summary": "POST creates. PUT completely replaces. PATCH partially modifies."
  },
  {
    "id": 68,
    "title": "What does Idempotency mean in REST?",
    "category": "Web API Fundamentals",
    "difficulty": "Advanced",
    "explanation": "An HTTP method is idempotent if making the identical request multiple times produces the exact same result/system state as making it just once. It is critical for network resiliency (retrying failed requests safely).",
    "summary": "Multiple identical requests yield the exact same system state as a single request."
  },
  {
    "id": 69,
    "title": "Which HTTP methods are idempotent?",
    "category": "Web API Fundamentals",
    "difficulty": "Advanced",
    "explanation": "- **Idempotent:** GET, PUT, DELETE, HEAD. (Deleting a resource 10 times results in the resource being gone, same as deleting it once).\n- **NOT Idempotent:** POST (calling POST 10 times creates 10 resources).",
    "summary": "GET, PUT, and DELETE are idempotent. POST is not."
  },
  {
    "id": 70,
    "title": "Why are HTTP Status Codes important in Web APIs?",
    "category": "Web API Fundamentals",
    "difficulty": "Beginner",
    "explanation": "They provide a standard way for the client to understand the result of their request without having to parse the JSON response body. They dictate whether a request succeeded, failed due to client error, or failed due to server error.",
    "summary": "They instantly tell the client the outcome of the request (success, client error, or server error)."
  },
  {
    "id": 71,
    "title": "What are the common HTTP Status Codes you should know?",
    "category": "Web API Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "- **200 OK:** Success.\n- **201 Created:** Successfully created (POST).\n- **204 No Content:** Success, but no data to return (DELETE/PUT).\n- **400 Bad Request:** Client sent invalid data.\n- **401 Unauthorized:** Missing or invalid authentication token.\n- **403 Forbidden:** Authenticated, but lacks permission.\n- **404 Not Found:** Resource does not exist.\n- **500 Internal Server Error:** The server crashed.",
    "summary": "2xx (Success), 4xx (Client Errors), 5xx (Server Errors)."
  },
  {
    "id": 72,
    "title": "What is IActionResult?",
    "category": "Web API Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "`IActionResult` is an interface representing the result of an action method. Returning it allows you to return various HTTP status codes and payloads seamlessly using helper methods like `Ok()`, `NotFound()`, and `BadRequest()`.",
    "summary": "An interface allowing actions to return standard HTTP status codes and responses."
  },
  {
    "id": 73,
    "title": "What is ActionResult<T>?",
    "category": "Web API Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "Introduced in ASP.NET Core 2.1, it combines the benefits of returning a specific type (good for Swagger documentation) and returning `IActionResult` (for error status codes).",
    "code": "public ActionResult<Product> Get(int id) {\n    if (product == null) return NotFound();\n    return product; // Implicitly cast to OkObjectResult\n}",
    "summary": "A generic return type that supports both HTTP status results and strongly typed data."
  },
  {
    "id": 74,
    "title": "When should you use IActionResult vs ActionResult<T>?",
    "category": "Web API Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "Always prefer `ActionResult<T>` in modern APIs. It makes your code cleaner, strictly typed, and allows OpenAPI/Swagger generators to automatically infer the return type schema without needing extra `[ProducesResponseType]` attributes.",
    "summary": "Prefer ActionResult<T> for better type safety and automatic Swagger documentation."
  },
  {
    "id": 75,
    "title": "What does the Ok() method do?",
    "category": "Web API Fundamentals",
    "difficulty": "Beginner",
    "explanation": "It returns a `200 OK` HTTP status code along with the provided payload.",
    "code": "return Ok(userList);",
    "summary": "Returns a 200 Success status code."
  },
  {
    "id": 76,
    "title": "What does CreatedAtAction() do?",
    "category": "Web API Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "Used heavily in POST methods. It returns a `201 Created` status code, the created object in the body, and automatically adds a `Location` header to the response pointing to the URL where the new resource can be retrieved.",
    "code": "return CreatedAtAction(nameof(GetById), new { id = user.Id }, user);",
    "summary": "Returns 201 Created and a Location header pointing to the new resource."
  },
  {
    "id": 77,
    "title": "What does NoContent() do?",
    "category": "Web API Fundamentals",
    "difficulty": "Beginner",
    "explanation": "It returns a `204 No Content` status code. This is the standard return type for successful PUT and DELETE operations where no data needs to be sent back.",
    "summary": "Returns 204 No Content, typical for successful updates or deletions."
  },
  {
    "id": 78,
    "title": "What does BadRequest() do?",
    "category": "Web API Fundamentals",
    "difficulty": "Beginner",
    "explanation": "It returns a `400 Bad Request`. Used when the client sends invalid input, fails validation, or violates a business rule.",
    "summary": "Returns 400 Bad Request to indicate a client-side input error."
  },
  {
    "id": 79,
    "title": "What does NotFound() do?",
    "category": "Web API Fundamentals",
    "difficulty": "Beginner",
    "explanation": "It returns a `404 Not Found`. Used when the requested resource ID does not exist in the database.",
    "summary": "Returns 404 Not Found."
  },
  {
    "id": 80,
    "title": "What is the purpose of the [ApiController] attribute?",
    "category": "Web API Fundamentals",
    "difficulty": "Intermediate",
    "explanation": "Applying this to a controller enables opinionated API behaviors:\n1. Requires attribute routing.\n2. Automatic HTTP 400 responses for model validation errors (no need to check `ModelState.IsValid`).\n3. Infers binding sources automatically (e.g., complex objects default to `[FromBody]`).",
    "summary": "Enables automatic validation, route requirement, and smart parameter binding."
  },
  {
    "id": 81,
    "title": "What is Content Negotiation?",
    "category": "Web API Advanced Concepts",
    "difficulty": "Advanced",
    "explanation": "Content negotiation is the process where the API and the client agree on the format of the response data. The client sends an `Accept` header (e.g., `application/json` or `application/xml`), and the API formats the response accordingly. ASP.NET Core defaults to JSON.",
    "summary": "The API returning data in the specific format (JSON, XML) requested by the client's Accept header."
  },
  {
    "id": 82,
    "title": "How does JSON Serialization work in ASP.NET Core?",
    "category": "Web API Advanced Concepts",
    "difficulty": "Intermediate",
    "explanation": "ASP.NET Core automatically serializes C# objects returned from controllers into JSON. As of .NET Core 3.0, it uses the highly optimized `System.Text.Json` namespace by default.",
    "summary": "Automatically converts C# objects to JSON using System.Text.Json."
  },
  {
    "id": 83,
    "title": "System.Text.Json vs Newtonsoft.Json?",
    "category": "Web API Advanced Concepts",
    "difficulty": "Intermediate",
    "explanation": "`System.Text.Json` is Microsoft's built-in serializer. It is significantly faster, uses less memory, and is highly secure. `Newtonsoft.Json` (Json.NET) is the older 3rd-party standard; it is slightly slower but supports more complex/legacy edge cases.",
    "summary": "System.Text.Json is the modern, faster default. Newtonsoft is the older, feature-rich alternative."
  },
  {
    "id": 84,
    "title": "How do you handle Circular References in JSON?",
    "category": "Web API Advanced Concepts",
    "difficulty": "Advanced",
    "explanation": "Circular references happen in EF Core when an Order has a Customer, and the Customer has a list of Orders. Serialization creates an infinite loop. \nFix: Configure `System.Text.Json` to ignore cycles in `Program.cs`:\n`builder.Services.AddControllers().AddJsonOptions(x => x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);`\n*Best Practice:* Use DTOs to avoid this entirely.",
    "summary": "Use ReferenceHandler.IgnoreCycles in configuration, or better, map entities to DTOs."
  },
  {
    "id": 85,
    "title": "What is a DTO (Data Transfer Object)?",
    "category": "Web API Advanced Concepts",
    "difficulty": "Intermediate",
    "explanation": "A DTO is a simple object used to transfer data between the client and the server. It contains no business logic or behavior, just flat properties.",
    "summary": "A flat object used specifically for transferring data over the network."
  },
  {
    "id": 86,
    "title": "What are the benefits of using DTOs?",
    "category": "Web API Advanced Concepts",
    "difficulty": "Advanced",
    "explanation": "1. **Over-posting protection:** Prevents users from updating fields they shouldn't (like `IsAdmin`).\n2. **Decoupling:** DB schema changes don't break the API contract.\n3. **Payload Size:** Sends only required data, saving bandwidth.\n4. **Circular References:** Prevents EF Core serialization loops.",
    "summary": "Prevents over-posting vulnerabilities, decouples DB from API, and reduces payload size."
  },
  {
    "id": 87,
    "title": "What is the difference between an Entity and a DTO?",
    "category": "Web API Advanced Concepts",
    "difficulty": "Intermediate",
    "explanation": "- **Entity:** Maps directly to a Database table (via EF Core). Contains relationships (Navigation properties).\n- **DTO:** Maps directly to the API JSON contract. Flat, optimized for the client.",
    "summary": "Entities represent database tables; DTOs represent API JSON payloads."
  },
  {
    "id": 88,
    "title": "What is AutoMapper?",
    "category": "Web API Advanced Concepts",
    "difficulty": "Intermediate",
    "explanation": "AutoMapper is a popular 3rd-party library that automatically maps properties from one object type to another (e.g., from an Entity to a DTO). It saves developers from writing hundreds of lines of manual mapping code.",
    "code": "var productDto = _mapper.Map<ProductDto>(productEntity);",
    "summary": "A library that automatically copies data from Entities into DTOs."
  },
  {
    "id": 89,
    "title": "When should you avoid AutoMapper?",
    "category": "Web API Advanced Concepts",
    "difficulty": "Advanced",
    "explanation": "Avoid AutoMapper if mappings are extremely complex, require heavy conditional business logic, or if you are doing highly performance-critical data projections. In those cases, manual LINQ `.Select()` projections are faster and easier to debug.",
    "summary": "Avoid it for complex, conditional mappings or hyper-performance-critical paths."
  },
  {
    "id": 90,
    "title": "What is API Versioning?",
    "category": "Web API Advanced Concepts",
    "difficulty": "Intermediate",
    "explanation": "API Versioning is the practice of managing changes to your API over time. It allows you to introduce breaking changes (like a new JSON structure) without breaking existing clients who still rely on the old version.",
    "summary": "Managing API changes so new features don't break old clients."
  },
  {
    "id": 91,
    "title": "What are the common strategies for API Versioning?",
    "category": "Web API Advanced Concepts",
    "difficulty": "Intermediate",
    "explanation": "1. **URI Versioning (Most Common):** `/api/v1/users`\n2. **Query String:** `/api/users?api-version=1.0`\n3. **Header Versioning:** Client sends `X-Version: 1.0`.\n4. **Media Type (Accept Header):** `Accept: application/json;v=1.0`.",
    "summary": "URI path, Query string, Custom Header, or Accept Header."
  },
  {
    "id": 92,
    "title": "What is Swagger (OpenAPI)?",
    "category": "Web API Advanced Concepts",
    "difficulty": "Beginner",
    "explanation": "Swagger is a toolset built on the OpenAPI Specification. It automatically generates interactive, web-based documentation for your API directly from your C# code and routing attributes. It allows developers to test endpoints right in the browser.",
    "summary": "A tool that automatically generates interactive documentation for your API."
  },
  {
    "id": 93,
    "title": "How do you configure Swagger in ASP.NET Core?",
    "category": "Web API Advanced Concepts",
    "difficulty": "Intermediate",
    "explanation": "In .NET 6+, you register it in `Program.cs`:\n1. `builder.Services.AddSwaggerGen();` (registers the service)\n2. `app.UseSwagger();` (generates the JSON)\n3. `app.UseSwaggerUI();` (serves the interactive HTML UI).",
    "summary": "By adding AddSwaggerGen() to services and UseSwagger() / UseSwaggerUI() to the pipeline."
  },
  {
    "id": 94,
    "title": "How do you secure Swagger with JWT?",
    "category": "Web API Advanced Concepts",
    "difficulty": "Advanced",
    "explanation": "You must configure `AddSwaggerGen` to include an `OpenApiSecurityScheme` (usually Bearer/JWT) and an `OpenApiSecurityRequirement`. This adds a an \"Authorize\" button to the Swagger UI allowing you to input a token.",
    "summary": "Configure OpenApiSecurityScheme in AddSwaggerGen to enable the Authorize button."
  },
  {
    "id": 95,
    "title": "What is CORS?",
    "category": "Web API Advanced Concepts",
    "difficulty": "Intermediate",
    "explanation": "CORS (Cross-Origin Resource Sharing) is a browser security feature. By default, browsers prevent a frontend web app (e.g., `react.com`) from making API calls to a different domain (`api.com`). CORS is a set of HTTP headers that the API sends to tell the browser it is allowed to read the data.",
    "summary": "A security feature that allows APIs to specify which external domains can access them."
  },
  {
    "id": 96,
    "title": "Why is CORS required?",
    "category": "Web API Advanced Concepts",
    "difficulty": "Intermediate",
    "explanation": "It prevents malicious websites from making silent API requests on behalf of a user using the user's stored cookies (a form of CSRF). It enforces the Same-Origin Policy.",
    "summary": "To prevent malicious sites from silently calling your API from a user's browser."
  },
  {
    "id": 97,
    "title": "How do you configure CORS in ASP.NET Core?",
    "category": "Web API Advanced Concepts",
    "difficulty": "Intermediate",
    "explanation": "1. Define a policy in services: `builder.Services.AddCors(...)`\n2. Add the middleware: `app.UseCors(\"PolicyName\")`\nYou can specify allowed Origins, Methods (GET/POST), and Headers.",
    "code": "builder.Services.AddCors(options => {\n    options.AddPolicy(\"AllowReactApp\", builder =>\n        builder.WithOrigins(\"http://localhost:3000\")\n               .AllowAnyMethod()\n               .AllowAnyHeader());\n});\n// Later\napp.UseCors(\"AllowReactApp\");",
    "summary": "Register a policy in services and add app.UseCors() in the pipeline."
  },
  {
    "id": 98,
    "title": "Can you apply CORS to specific endpoints?",
    "category": "Web API Advanced Concepts",
    "difficulty": "Intermediate",
    "explanation": "Yes. Instead of applying it globally, you can decorate specific controllers or actions with the `[EnableCors(\"PolicyName\")]` attribute.",
    "summary": "Yes, using the [EnableCors] attribute."
  },
  {
    "id": 99,
    "title": "What is the IHttpClientFactory?",
    "category": "Web API Advanced Concepts",
    "difficulty": "Advanced",
    "explanation": "It is a factory pattern used to create `HttpClient` instances. It solves the socket exhaustion problem of manually instantiating `new HttpClient()` and manages the lifetime of HTTP handlers efficiently.",
    "summary": "A factory for creating HttpClients that prevents socket exhaustion."
  },
  {
    "id": 100,
    "title": "How do you make an external API call efficiently?",
    "category": "Web API Advanced Concepts",
    "difficulty": "Advanced",
    "explanation": "Register `IHttpClientFactory` in `Program.cs`, inject it into your service, and use `_httpClientFactory.CreateClient()`. Combine this with asynchronous programming (`async/await`) and `System.Text.Json` to read the response.",
    "summary": "Use injected IHttpClientFactory and async/await."
  },
  {
    "id": 101,
    "title": "What is the difference between Use, Run, and Map in Middleware?",
    "category": "Middleware & Error Handling",
    "difficulty": "Intermediate",
    "explanation": "- **Use:** Adds a middleware to the pipeline. It can call `next()` to pass execution to the next middleware.\n- **Run:** A terminal middleware. It executes and immediately returns the response. It never calls `next()`.\n- **Map:** Branches the pipeline based on the request path (e.g., executing specific middleware only for `/api`).",
    "summary": "Use passes to the next middleware. Run terminates the pipeline. Map branches the pipeline."
  },
  {
    "id": 102,
    "title": "Why is Middleware ordering important?",
    "category": "Middleware & Error Handling",
    "difficulty": "Intermediate",
    "explanation": "Because the pipeline is sequential, the order dictates execution. For example, `UseAuthentication()` must execute *before* `UseAuthorization()` (you must know who the user is before deciding what they can do). `UseExceptionHandler()` should be first so it can catch errors thrown by any subsequent middleware.",
    "summary": "Order dictates execution sequence. Auth must happen before Authorization."
  },
  {
    "id": 103,
    "title": "How do you create Custom Middleware?",
    "category": "Middleware & Error Handling",
    "difficulty": "Intermediate",
    "explanation": "Create a class with a constructor accepting `RequestDelegate next`. Implement an `InvokeAsync(HttpContext context)` method. Write your logic (e.g., logging), call `await _next(context)`, and then optionally write logic for the outgoing response.",
    "summary": "Create a class with a RequestDelegate constructor and an InvokeAsync method."
  },
  {
    "id": 104,
    "title": "What is Exception Middleware?",
    "category": "Middleware & Error Handling",
    "difficulty": "Intermediate",
    "explanation": "It is middleware placed at the very beginning of the pipeline (like `UseExceptionHandler`). It wraps the entire pipeline in a `try-catch` block, catching any unhandled exceptions thrown further down the line.",
    "summary": "Middleware that acts as a global try-catch block for the entire application."
  },
  {
    "id": 105,
    "title": "How do you implement Global Exception Handling in Web API?",
    "category": "Middleware & Error Handling",
    "difficulty": "Advanced",
    "explanation": "In modern ASP.NET Core, use `app.UseExceptionHandler()` pointing to a specific error controller, OR create a custom Exception Middleware class that catches exceptions, logs them, and returns a standardized JSON `ProblemDetails` response (usually 500 status code).",
    "summary": "Use UseExceptionHandler or write a custom middleware to catch errors and return ProblemDetails."
  },
  {
    "id": 106,
    "title": "What is ProblemDetails?",
    "category": "Middleware & Error Handling",
    "difficulty": "Intermediate",
    "explanation": "It is an RFC-standardized JSON format for returning HTTP error details in Web APIs. It includes standard fields like `type`, `title`, `status`, `detail`, and `instance`.",
    "summary": "A standardized JSON format for API error responses."
  },
  {
    "id": 107,
    "title": "How should you handle Production Error Responses?",
    "category": "Middleware & Error Handling",
    "difficulty": "Advanced",
    "explanation": "In production, never expose raw stack traces to the client (security risk). Global exception handling should log the full exception internally, but return a generic, friendly message to the client (e.g., 'An unexpected error occurred') alongside a correlation ID for debugging.",
    "summary": "Log the stack trace internally, but hide it from the client, returning a generic error message."
  },
  {
    "id": 108,
    "title": "What are MVC Filters?",
    "category": "Middleware & Error Handling",
    "difficulty": "Intermediate",
    "explanation": "Filters allow custom code to run before or after specific stages in the MVC action execution pipeline. They are usually applied as attributes to Controllers or Actions.",
    "summary": "Code that runs at specific stages of the MVC/API execution lifecycle."
  },
  {
    "id": 109,
    "title": "What are the different types of Filters?",
    "category": "Middleware & Error Handling",
    "difficulty": "Intermediate",
    "explanation": "1. **Authorization Filters:** Run first to determine if the user is authorized.\n2. **Resource Filters:** Run after authorization, good for caching.\n3. **Action Filters:** Run immediately before and after an action method.\n4. **Exception Filters:** Run if an unhandled exception occurs in the action.\n5. **Result Filters:** Run before/after the result (like JSON rendering) executes.",
    "summary": "Authorization, Resource, Action, Exception, and Result filters."
  },
  {
    "id": 110,
    "title": "What is the difference between Middleware and Filters?",
    "category": "Middleware & Error Handling",
    "difficulty": "Advanced",
    "explanation": "Middleware operates globally on the HTTP request, independent of MVC. It knows nothing about Controllers or Actions. Filters operate specifically *within* the MVC routing pipeline and have access to MVC contexts (like `ModelState` or Action parameters).",
    "summary": "Middleware is global HTTP processing; Filters are specific to the MVC/API execution lifecycle."
  },
  {
    "id": 111,
    "title": "When should you use Middleware vs an Action Filter?",
    "category": "Middleware & Error Handling",
    "difficulty": "Advanced",
    "explanation": "Use **Middleware** for global concerns that apply to all requests (CORS, Authentication, Global logging, Global exception handling). Use **Filters** for logic that only applies to specific controllers or needs access to controller state (like validating `ModelState` or caching a specific endpoint).",
    "summary": "Middleware for global HTTP concerns; Filters for controller-specific logic."
  },
  {
    "id": 112,
    "title": "Scenario: How would you implement centralized exception handling for all APIs?",
    "category": "Middleware & Error Handling",
    "difficulty": "Senior",
    "explanation": "I would create a custom `ExceptionHandlingMiddleware`. \n1. Inject `ILogger`.\n2. Wrap `await _next(context)` in a `try-catch`.\n3. In the `catch (Exception ex)` block, log the error with its StackTrace.\n4. Set `context.Response.StatusCode = 500` and `ContentType = \"application/json\"`.\n5. Create a `ProblemDetails` object with a generic error message.\n6. Serialize and write it to the response.\n7. Register it at the very top of `Program.cs` pipeline.",
    "summary": "Write a custom middleware wrapping the pipeline in a try-catch, logging the error, and returning ProblemDetails."
  },
  {
    "id": 113,
    "title": "Scenario: Middleware Ordering",
    "category": "Middleware & Error Handling",
    "difficulty": "Senior",
    "explanation": "Consider this order:\n1. `UseExceptionHandler` (Must be first to catch anything below it)\n2. `UseHttpsRedirection`\n3. `UseRouting` (Finds the endpoint)\n4. `UseCors` (Must be before Auth to handle preflight)\n5. `UseAuthentication` (Identifies the user)\n6. `UseAuthorization` (Checks permissions)\n7. `MapControllers` (Executes the endpoint)\nIf Auth is placed after MapControllers, the endpoints will never be secured.",
    "summary": "Order is strictly sequential. Routing -> CORS -> Auth -> Controllers."
  },
  {
    "id": 114,
    "title": "What is centralized logging?",
    "category": "Middleware & Error Handling",
    "difficulty": "Intermediate",
    "explanation": "Instead of writing logs to text files on individual servers, centralized logging streams logs to a central system (like Seq, ELK Stack, or Azure Application Insights) so you can query and monitor them across a distributed microservice architecture.",
    "summary": "Streaming logs from all servers to a central searchable database."
  },
  {
    "id": 115,
    "title": "How do you log in ASP.NET Core?",
    "category": "Middleware & Error Handling",
    "difficulty": "Beginner",
    "explanation": "You inject `ILogger<T>` into your controller or service via the constructor. You then use methods like `_logger.LogInformation()`, `LogWarning()`, or `LogError()`.",
    "summary": "By injecting the built-in ILogger<T> interface."
  },
  {
    "id": 116,
    "title": "What is the difference between Authentication and Authorization?",
    "category": "Authentication & Authorization",
    "difficulty": "Beginner",
    "explanation": "- **Authentication:** Identity verification. \"Who are you?\" (e.g., logging in with username/password to get a token).\n- **Authorization:** Permissions verification. \"What are you allowed to do?\" (e.g., checking if the user is an Admin).",
    "summary": "Authentication verifies identity; Authorization verifies permissions."
  },
  {
    "id": 117,
    "title": "What is ASP.NET Core Identity?",
    "category": "Authentication & Authorization",
    "difficulty": "Intermediate",
    "explanation": "It is an API that supports user interface login functionality. It manages users, passwords, profile data, roles, claims, tokens, and email confirmation natively using Entity Framework Core.",
    "summary": "A built-in membership system for managing users, passwords, and roles."
  },
  {
    "id": 118,
    "title": "What is Cookie Authentication?",
    "category": "Authentication & Authorization",
    "difficulty": "Intermediate",
    "explanation": "Standard for MVC web applications. Upon login, the server encrypts user data into a Cookie and sends it to the browser. The browser automatically sends this cookie on every subsequent request. Vulnerable to CSRF attacks if not protected.",
    "summary": "Session management using encrypted browser cookies. Common in MVC apps."
  },
  {
    "id": 119,
    "title": "What is JWT (JSON Web Token)?",
    "category": "Authentication & Authorization",
    "difficulty": "Intermediate",
    "explanation": "JWT is an open standard for securely transmitting information between parties as a JSON object. It is stateless, digitally signed (using a secret or public/private key), and used heavily in REST APIs.",
    "summary": "A secure, stateless JSON token used for authenticating API requests."
  },
  {
    "id": 120,
    "title": "Explain the JWT flow.",
    "category": "Authentication & Authorization",
    "difficulty": "Intermediate",
    "explanation": "1. Client POSTs credentials to `/login`.\n2. Server verifies them and creates a JWT signed with a secret key.\n3. Server returns the JWT.\n4. Client stores it.\n5. Client sends it in the `Authorization: Bearer <token>` header on future requests.\n6. Server validates the signature without needing to check the database.",
    "summary": "Login -> Get Token -> Send Token in Header -> Server Validates Signature."
  },
  {
    "id": 121,
    "title": "What is the structure of a JWT?",
    "category": "Authentication & Authorization",
    "difficulty": "Intermediate",
    "explanation": "It consists of three parts separated by dots (`.`):\n1. **Header:** Algorithm and token type.\n2. **Payload:** The claims (user ID, roles, expiration).\n3. **Signature:** Created by hashing the Header + Payload + Server Secret. Ensures the token hasn't been tampered with.",
    "summary": "Header, Payload (Claims), and Signature."
  },
  {
    "id": 122,
    "title": "What are Claims in ASP.NET Core?",
    "category": "Authentication & Authorization",
    "difficulty": "Intermediate",
    "explanation": "A claim is a piece of information about a user. Instead of just roles, a claim is a key-value pair. E.g., `DateOfBirth: 1990-01-01`, `Email: user@test.com`, or `Role: Admin`.",
    "summary": "Key-value pairs representing specific details or permissions about a user."
  },
  {
    "id": 123,
    "title": "What is Claims-based authorization?",
    "category": "Authentication & Authorization",
    "difficulty": "Advanced",
    "explanation": "Authorization based on the presence or value of a specific claim. Instead of checking if a user is an \"Admin\", you check if they possess the \"CanEditUsers = true\" claim. This allows for highly granular permissions.",
    "summary": "Authorizing users based on specific key-value pairs (claims) they possess."
  },
  {
    "id": 124,
    "title": "What is Role-based authorization?",
    "category": "Authentication & Authorization",
    "difficulty": "Beginner",
    "explanation": "A simpler form of authorization where users are assigned roles (e.g., Admin, Manager, User). You restrict access using `[Authorize(Roles = \"Admin\")]`.",
    "summary": "Restricting access based on a user's assigned role."
  },
  {
    "id": 125,
    "title": "Role vs Policy authorization?",
    "category": "Authentication & Authorization",
    "difficulty": "Intermediate",
    "explanation": "- **Role:** Simple, checks string names (`Roles=\"Admin\"`).\n- **Policy:** Complex, evaluates rules. A policy can require a specific role, a specific claim, a minimum age, or evaluate custom C# logic (e.g., `[Authorize(Policy = \"AtLeast18\")]`).",
    "summary": "Roles are simple strings; Policies are complex, rule-based evaluations."
  },
  {
    "id": 126,
    "title": "What does the [Authorize] attribute do?",
    "category": "Authentication & Authorization",
    "difficulty": "Beginner",
    "explanation": "When placed on a Controller or Action, it prevents unauthenticated users from accessing the endpoint. It returns a `401 Unauthorized` (for APIs) or redirects to the login page (for MVC).",
    "summary": "Secures an endpoint, requiring the user to be logged in."
  },
  {
    "id": 127,
    "title": "What does [AllowAnonymous] do?",
    "category": "Authentication & Authorization",
    "difficulty": "Beginner",
    "explanation": "It bypasses authorization. If a Controller has `[Authorize]`, you can place `[AllowAnonymous]` on specific actions (like `Login` or `Register`) so anyone can access them.",
    "summary": "Bypasses [Authorize], allowing unauthenticated access."
  },
  {
    "id": 128,
    "title": "Scenario: JWT Access vs Refresh Tokens",
    "category": "Authentication & Authorization",
    "difficulty": "Senior",
    "explanation": "Access tokens should have a short lifespan (e.g., 15 mins) for security. When it expires, the client uses a long-lived Refresh Token (stored securely, e.g., HttpOnly cookie) to request a new Access Token. Refresh tokens are stored in the DB, allowing the server to revoke a user's access by deleting the refresh token.",
    "summary": "Short-lived access tokens for speed; long-lived database-backed refresh tokens for security and revocation."
  },
  {
    "id": 129,
    "title": "How do you implement JWT in ASP.NET Core?",
    "category": "Authentication & Authorization",
    "difficulty": "Intermediate",
    "explanation": "1. Add the `Microsoft.AspNetCore.Authentication.JwtBearer` NuGet package.\n2. In `Program.cs`, call `builder.Services.AddAuthentication().AddJwtBearer(...)`.\n3. Configure it with your Issuer, Audience, and a `SymmetricSecurityKey` matching your secret.\n4. Add `app.UseAuthentication()` before `app.UseAuthorization()`.",
    "summary": "Register the JwtBearer authentication scheme and configure token validation parameters."
  },
  {
    "id": 130,
    "title": "Is it secure to store JWTs in LocalStorage?",
    "category": "Authentication & Authorization",
    "difficulty": "Advanced",
    "explanation": "No. LocalStorage is accessible by JavaScript, making it vulnerable to XSS (Cross-Site Scripting) attacks where hackers steal the token. Best practice is storing JWTs in an `HttpOnly` cookie, which JS cannot read.",
    "mistake": "Storing sensitive tokens in LocalStorage in enterprise applications.",
    "summary": "No, it is vulnerable to XSS. Use HttpOnly cookies."
  },
  {
    "id": 131,
    "title": "How do you optimize API performance?",
    "category": "Performance & Testing",
    "difficulty": "Advanced",
    "explanation": "1. Use `async/await` strictly (no blocking calls).\n2. Implement Caching (Redis/Memory).\n3. Optimize DB queries (Indexes, avoid N+1, avoid `Select *`).\n4. Use Pagination for large datasets.\n5. Use Data Projection (DTOs) to send only required fields.\n6. Enable Response Compression (Gzip/Brotli).",
    "summary": "Async I/O, caching, DB optimization, pagination, and data projection."
  },
  {
    "id": 132,
    "title": "What is Response Caching?",
    "category": "Performance & Testing",
    "difficulty": "Intermediate",
    "explanation": "It involves adding HTTP cache headers (like `Cache-Control`) to the response, instructing the client's browser or intermediate proxies to cache the API response for a specific duration.",
    "summary": "Adding HTTP headers to instruct clients to cache the response."
  },
  {
    "id": 133,
    "title": "Memory Cache vs Distributed Cache?",
    "category": "Performance & Testing",
    "difficulty": "Intermediate",
    "explanation": "- **Memory Cache (`IMemoryCache`):** Stores data in the RAM of the local web server. Extremely fast, but useless in a multi-server (load balanced) environment because data isn't shared.\n- **Distributed Cache (`IDistributedCache`):** Stores data in an external service (like Redis). Slower than Memory Cache, but data is shared across all servers.",
    "summary": "Memory is local server RAM; Distributed uses an external shared service like Redis."
  },
  {
    "id": 134,
    "title": "What is Redis?",
    "category": "Performance & Testing",
    "difficulty": "Intermediate",
    "explanation": "Redis is an open-source, in-memory, distributed key-value database. It is the industry standard for distributed caching in microservices to alleviate database load.",
    "summary": "An ultra-fast in-memory database used for distributed caching."
  },
  {
    "id": 135,
    "title": "What is async/await?",
    "category": "Performance & Testing",
    "difficulty": "Beginner",
    "explanation": "A syntax that makes writing asynchronous C# code look synchronous. It frees up the web server's main thread while waiting for I/O operations (like database queries or API calls) to complete, allowing the server to handle more concurrent requests.",
    "summary": "A mechanism to free up server threads during slow I/O operations, drastically improving scalability."
  },
  {
    "id": 136,
    "title": "What is a Task?",
    "category": "Performance & Testing",
    "difficulty": "Intermediate",
    "explanation": "A `Task` represents an asynchronous operation. `Task` is used when a method doesn't return a value (like `void`). `Task<T>` is used when the method returns a value of type `T`.",
    "summary": "An object representing an asynchronous operation."
  },
  {
    "id": 137,
    "title": "What is ValueTask<T>?",
    "category": "Performance & Testing",
    "difficulty": "Advanced",
    "explanation": "`ValueTask<T>` is a struct-based alternative to `Task<T>`. Because `Task` is a class, instantiating it allocates memory on the heap. If an async method completes synchronously most of the time (e.g., reading from cache), `ValueTask` avoids garbage collection overhead.",
    "summary": "A lightweight, struct-based alternative to Task used for high-performance memory optimization."
  },
  {
    "id": 138,
    "title": "Why should you avoid .Result or .Wait() on a Task?",
    "category": "Performance & Testing",
    "difficulty": "Advanced",
    "explanation": "Calling `.Result` or `.Wait()` blocks the executing thread until the async operation completes (Sync-over-Async). This completely defeats the purpose of async, limits scalability, and can cause catastrophic thread pool starvation and Deadlocks.",
    "mistake": "Using `.Result` in a controller. Always use `await` all the way up the call chain.",
    "summary": "It blocks the thread, causing thread pool starvation and deadlocks."
  },
  {
    "id": 139,
    "title": "How do you Unit Test a Controller?",
    "category": "Performance & Testing",
    "difficulty": "Intermediate",
    "explanation": "A Controller is just a C# class. You instantiate it in a test project (using xUnit or NUnit), mock its dependencies (like Services or Repositories using Moq), call the Action method, and `Assert` that the returned `IActionResult` (e.g., `OkObjectResult`) contains the expected data.",
    "summary": "Instantiate the controller, mock its dependencies, call the action, and assert the result."
  },
  {
    "id": 140,
    "title": "What is WebApplicationFactory?",
    "category": "Performance & Testing",
    "difficulty": "Advanced",
    "explanation": "It is a class used for Integration Testing. It bootstraps your entire ASP.NET Core application in-memory (including the pipeline and DI) and provides a mock `HttpClient` to test your API end-to-end without needing to deploy it or run it on a real port.",
    "summary": "A tool that runs your API in-memory for fast, end-to-end integration testing."
  },
  {
    "id": 141,
    "title": "Unit Testing vs Integration Testing?",
    "category": "Performance & Testing",
    "difficulty": "Intermediate",
    "explanation": "- **Unit Test:** Tests a single class/method in pure isolation. Dependencies (like DBs) are mocked. Extremely fast.\n- **Integration Test:** Tests multiple components working together (e.g., API -> Service -> Real Test Database). Slower, but ensures components interact correctly.",
    "summary": "Unit tests test isolation via mocks; Integration tests test the full pipeline and real DBs."
  },
  {
    "id": 142,
    "title": "How does ASP.NET Core manage Environments?",
    "category": "Deployment & Production",
    "difficulty": "Beginner",
    "explanation": "It uses the `ASPNETCORE_ENVIRONMENT` environment variable. Common values are `Development`, `Staging`, and `Production`. You can write logic like `if (app.Environment.IsDevelopment()) { app.UseSwagger(); }`.",
    "summary": "Using the ASPNETCORE_ENVIRONMENT variable to toggle configurations for Dev, Staging, and Prod."
  },
  {
    "id": 143,
    "title": "How are appsettings files linked to Environments?",
    "category": "Deployment & Production",
    "difficulty": "Beginner",
    "explanation": "ASP.NET Core automatically loads `appsettings.json`, and then overwrites it with `appsettings.{Environment}.json` (e.g., `appsettings.Production.json`). This allows different connection strings for different environments.",
    "summary": "The framework automatically loads environment-specific appsettings files on top of the base file."
  },
  {
    "id": 144,
    "title": "How do you deploy an ASP.NET Core API?",
    "category": "Deployment & Production",
    "difficulty": "Intermediate",
    "explanation": "1. Run `dotnet publish -c Release` to compile the app.\n2. **Cloud:** Deploy the output to Azure App Service, AWS Elastic Beanstalk, or containerize it via Docker and deploy to Kubernetes.\n3. **On-Premise:** Host it in IIS using the ASP.NET Core Module.",
    "summary": "Publish the app and host it on Azure, AWS, Docker, or IIS."
  },
  {
    "id": 145,
    "title": "What is Docker?",
    "category": "Deployment & Production",
    "difficulty": "Intermediate",
    "explanation": "Docker is a platform that packages an application and its dependencies (like the .NET runtime) into a standardized unit called a container. This ensures the app runs identically on the developer's laptop, staging, and production environments.",
    "summary": "A tool to package applications into consistent, isolated containers."
  },
  {
    "id": 146,
    "title": "Scenario: An API endpoint takes 8 seconds to respond. How do you investigate?",
    "category": "Performance & Testing",
    "difficulty": "Senior",
    "explanation": "1. **Check Logs/APM:** Use Application Insights to pinpoint the bottleneck (Network vs DB vs Code).\n2. **Database check:** Is it executing an N+1 query? Is a missing index causing a full table scan?\n3. **External APIs:** Is the endpoint waiting on a slow 3rd-party HTTP call?\n4. **Code:** Are we blocking threads with `.Result`? Are we doing heavy in-memory processing that should be a background job?\n5. **Fix:** Apply caching, async I/O, DB indexes, or pagination.",
    "summary": "Trace the request using APM, identify DB or network bottlenecks, and apply caching or indexing."
  },
  {
    "id": 147,
    "title": "Scenario: What is N+1 Query Problem in EF Core?",
    "category": "Performance & Testing",
    "difficulty": "Senior",
    "explanation": "If you query a list of 100 Authors, and then loop through them to access `Author.Books`, EF Core executes 1 query for the authors, and 100 separate queries for the books (N+1). This kills performance.\n**Fix:** Use `.Include(a => a.Books)` to eagerly load data in a single SQL JOIN query.",
    "summary": "Executing a separate DB query inside a loop instead of a single JOIN. Fix with .Include()."
  },
  {
    "id": 148,
    "title": "Scenario: How do you handle a background task in ASP.NET Core?",
    "category": "Performance & Testing",
    "difficulty": "Advanced",
    "explanation": "For simple tasks, implement the `IHostedService` interface or inherit from `BackgroundService`. For complex, distributed, or durable jobs that survive server restarts, integrate a library like Hangfire.",
    "summary": "Use BackgroundService for simple tasks, or Hangfire for robust, durable jobs."
  },
  {
    "id": 149,
    "title": "Top 50 Prep: What are the highest priority topics to study?",
    "category": "Roadmap",
    "difficulty": "Beginner",
    "explanation": "If you are short on time, master these 5 topics:\n1. Dependency Injection (Lifetimes).\n2. Middleware Pipeline (Execution order, custom middleware).\n3. Web API (REST principles, HTTP Status codes, `[ApiController]`).\n4. Authentication (JWT flow, Claims, Authorization).\n5. EF Core (LINQ, N+1 problem).",
    "summary": "DI, Middleware, REST APIs, JWT, and EF Core."
  },
  {
    "id": 150,
    "title": "Roadmap: How should I prepare for a Senior .NET interview?",
    "category": "Roadmap",
    "difficulty": "Senior",
    "explanation": "A senior interview focuses less on syntax and more on architecture. Prepare to discuss:\n- Microservices vs Monoliths.\n- Event-driven architecture (RabbitMQ/Kafka).\n- Distributed caching (Redis).\n- Security (OAuth2, OIDC, Securing APIs).\n- Performance optimization (Memory profiling, DB indexing).\n- Docker and Kubernetes deployment strategies.",
    "summary": "Focus heavily on System Architecture, Security, Performance, and Cloud Deployment."
  }
];

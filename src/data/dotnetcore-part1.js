export const dotnetcorePart1 = [
    // --- ASP.NET Core Fundamentals (1-20) ---
    {
        id: 1,
        title: "What is ASP.NET Core?",
        category: "ASP.NET Core Fundamentals",
        difficulty: "Beginner",
        explanation: "ASP.NET Core is a cross-platform, high-performance, open-source framework for building modern, cloud-based, Internet-connected applications. It is a complete redesign of the legacy ASP.NET framework.",
        example: "With ASP.NET Core, you can build web apps, IoT apps, and mobile backends that run on Windows, macOS, and Linux.",
        mistake: "Confusing it with the legacy .NET Framework which only runs on Windows.",
        summary: "ASP.NET Core is the modern, cross-platform, open-source version of ASP.NET."
    },
    {
        id: 2,
        title: "What are the major features of ASP.NET Core?",
        category: "ASP.NET Core Fundamentals",
        difficulty: "Beginner",
        explanation: "Key features include:\n- Cross-platform support (Windows, macOS, Linux)\n- High performance (built-in Kestrel web server)\n- Built-in Dependency Injection (DI)\n- Cloud-ready configuration system\n- Unified story for building web UI and web APIs\n- Lightweight, modular request pipeline (Middleware)",
        mistake: "Assuming it requires IIS to run. ASP.NET Core applications are console apps running Kestrel and can be hosted anywhere.",
        summary: "Major features: Cross-platform, high-performance, built-in DI, unified API/MVC, and modular middleware pipeline."
    },
    {
        id: 3,
        title: "What is the difference between .NET Framework, .NET Core, and modern .NET?",
        category: "ASP.NET Core Fundamentals",
        difficulty: "Intermediate",
        explanation: "- **.NET Framework:** Legacy, Windows-only, relies on IIS for web apps.\n- **.NET Core:** The modern, open-source, cross-platform rewrite (versions 1.0 to 3.1).\n- **modern .NET (.NET 5+):** The unification of .NET Core, Mono, and Xamarin into a single, unified platform going forward.",
        summary: ".NET Framework is Windows-only legacy; .NET Core is the cross-platform rewrite; modern .NET 5+ unifies them."
    },
    {
        id: 4,
        title: "What is the difference between ASP.NET Core and ASP.NET MVC 5?",
        category: "ASP.NET Core Fundamentals",
        difficulty: "Intermediate",
        explanation: "- **ASP.NET MVC 5:** Bound tightly to `System.Web` and IIS. Split into separate Web API and MVC controllers.\n- **ASP.NET Core:** Independent of `System.Web`. Unified `Controller` base class for both Web API and MVC. Cross-platform, built-in DI, and vastly better performance.",
        summary: "Core has built-in DI, no System.Web dependency, unified controllers, and runs cross-platform."
    },
    {
        id: 5,
        title: "How does cross-platform support work in ASP.NET Core?",
        category: "ASP.NET Core Fundamentals",
        difficulty: "Intermediate",
        explanation: "It relies on the .NET Core runtime (CoreCLR), which has native implementations for Windows, macOS, and Linux. The framework avoids Windows-specific APIs (like Windows Registry or IIS-specific modules) allowing code to compile and run identically across OS environments.",
        summary: "Relies on the CoreCLR runtime which abstracts OS interactions for Windows, Mac, and Linux."
    },
    {
        id: 6,
        title: "What is Kestrel?",
        category: "ASP.NET Core Fundamentals",
        difficulty: "Intermediate",
        explanation: "Kestrel is the default, cross-platform, high-performance web server included with ASP.NET Core. It processes incoming HTTP requests and passes them to the application pipeline.",
        tip: "Kestrel is often used behind a reverse proxy (like NGINX, Apache, or IIS) in production for security and connection management, though it can run edge-facing.",
        summary: "Kestrel is the default, high-performance, cross-platform web server for ASP.NET Core."
    },
    {
        id: 7,
        title: "How does IIS hosting work in ASP.NET Core?",
        category: "ASP.NET Core Fundamentals",
        difficulty: "Intermediate",
        explanation: "ASP.NET Core uses the ASP.NET Core Module (ANCM) for IIS. It can run in:\n- **In-process (default):** Runs directly inside the IIS worker process (w3wp.exe) for maximum performance.\n- **Out-of-process:** IIS acts purely as a reverse proxy forwarding requests to the internal Kestrel server (dotnet.exe).",
        summary: "IIS uses ANCM to host in-process (high performance) or out-of-process (proxy to Kestrel)."
    },
    {
        id: 8,
        title: "What is the Request Pipeline in ASP.NET Core?",
        category: "ASP.NET Core Fundamentals",
        difficulty: "Intermediate",
        explanation: "The request pipeline is a sequence of middleware components that handle incoming HTTP requests and outgoing HTTP responses. Requests flow through the middleware sequentially.",
        summary: "A sequence of middleware components that process incoming requests and outgoing responses."
    },
    {
        id: 9,
        title: "What is Middleware?",
        category: "ASP.NET Core Fundamentals",
        difficulty: "Intermediate",
        explanation: "Middleware is software assembled into the application pipeline to handle requests and responses. Each component chooses whether to pass the request to the next component in the pipeline, and can perform work before and after the next component is invoked.",
        example: "Routing middleware, Authentication middleware, CORS middleware.",
        summary: "Software components in the pipeline that handle requests and responses."
    },
    {
        id: 10,
        title: "How does Middleware execution work?",
        category: "ASP.NET Core Fundamentals",
        difficulty: "Intermediate",
        explanation: "Middleware executes in the order it is added to the pipeline in `Program.cs`. It acts like a Russian nesting doll (or a chain of responsibility). The first middleware processes the request, calls `next()`, the next processes it, and so on. When returning the response, it unwinds in reverse order.",
        summary: "Executes sequentially on requests, and in reverse order on responses."
    },
    {
        id: 11,
        title: "What is the purpose of Program.cs?",
        category: "ASP.NET Core Fundamentals",
        difficulty: "Beginner",
        explanation: "`Program.cs` is the entry point of an ASP.NET Core application. In modern .NET (6+), it uses top-level statements to configure the web builder, register dependency injection services, configure the HTTP request pipeline (middleware), and run the application.",
        summary: "The application entry point where services and the HTTP pipeline are configured."
    },
    {
        id: 12,
        title: "What happened to Startup.cs in modern .NET?",
        category: "ASP.NET Core Fundamentals",
        difficulty: "Beginner",
        explanation: "Starting in .NET 6, Microsoft introduced the Minimal Hosting Model. `Startup.cs` was removed, and its responsibilities (`ConfigureServices` and `Configure`) were consolidated directly into `Program.cs` using top-level statements.",
        summary: "It was merged into Program.cs in .NET 6+ to simplify the hosting model."
    },
    {
        id: 13,
        title: "What is WebApplicationBuilder?",
        category: "ASP.NET Core Fundamentals",
        difficulty: "Intermediate",
        explanation: "`WebApplicationBuilder` is a class introduced in .NET 6 used to configure an ASP.NET Core app. It exposes properties like `Services` (for DI), `Configuration` (for appsettings), `Environment` (for hosting environment), and `Logging`.",
        code: "var builder = WebApplication.CreateBuilder(args);\nbuilder.Services.AddControllers();",
        summary: "A builder class used to configure services, configuration, and logging."
    },
    {
        id: 14,
        title: "What is WebApplication?",
        category: "ASP.NET Core Fundamentals",
        difficulty: "Intermediate",
        explanation: "Created by calling `builder.Build()`, `WebApplication` is used to configure the HTTP request pipeline (add middleware) and run the app. It implements `IEndpointRouteBuilder` to map endpoints.",
        code: "var app = builder.Build();\napp.UseHttpsRedirection();\napp.MapControllers();\napp.Run();",
        summary: "The object used to configure the HTTP pipeline and start the server."
    },
    {
        id: 15,
        title: "What is Dependency Injection (DI)?",
        category: "ASP.NET Core Fundamentals",
        difficulty: "Intermediate",
        explanation: "DI is a design pattern used to achieve Inversion of Control (IoC) between classes and their dependencies. Instead of a class instantiating its dependencies, they are injected (usually via the constructor) by a framework.",
        summary: "A pattern where dependencies are injected into a class rather than the class creating them."
    },
    {
        id: 16,
        title: "Does ASP.NET Core have built-in DI?",
        category: "ASP.NET Core Fundamentals",
        difficulty: "Beginner",
        explanation: "Yes, ASP.NET Core includes a built-in, lightweight IoC container (`Microsoft.Extensions.DependencyInjection`). It is a first-class citizen; almost the entire framework relies on it.",
        summary: "Yes, it has a built-in, first-class Dependency Injection container."
    },
    {
        id: 17,
        title: "What are the service lifetimes in ASP.NET Core DI?",
        category: "ASP.NET Core Fundamentals",
        difficulty: "Beginner",
        explanation: "There are three lifetimes:\n1. **Transient:** A new instance is created every time it is requested.\n2. **Scoped:** A new instance is created once per client request (HTTP connection).\n3. **Singleton:** A single instance is created the first time it is requested, and shared across all requests.",
        summary: "Transient (per request), Scoped (per HTTP request), and Singleton (one instance forever)."
    },
    {
        id: 18,
        title: "When should you use Singleton vs Scoped vs Transient?",
        category: "ASP.NET Core Fundamentals",
        difficulty: "Advanced",
        explanation: "- **Transient:** Lightweight, stateless services.\n- **Scoped:** Services that hold state per web request (e.g., `DbContext` for Entity Framework).\n- **Singleton:** State shared globally (e.g., in-memory Cache, Email dispatchers).",
        mistake: "Injecting a Scoped service into a Singleton service (Captive Dependency). The scoped service will effectively become a singleton and cause memory leaks or thread safety issues.",
        summary: "Transient for stateless, Scoped for per-request state (DbContext), Singleton for global state."
    },
    {
        id: 19,
        title: "How does Configuration work in ASP.NET Core?",
        category: "ASP.NET Core Fundamentals",
        difficulty: "Intermediate",
        explanation: "Configuration is based on a key-value pair system. It reads from multiple providers in order, overriding previous values. Default order: `appsettings.json` -> `appsettings.{Environment}.json` -> User Secrets -> Environment Variables -> Command-line arguments.",
        summary: "Reads key-value pairs from multiple layered sources like appsettings.json and Environment Variables."
    },
    {
        id: 20,
        title: "What is the Options Pattern?",
        category: "ASP.NET Core Fundamentals",
        difficulty: "Intermediate",
        explanation: "The Options pattern uses classes to provide strongly typed access to groups of related settings from configuration. You bind a section of `appsettings.json` to a C# class and inject it using `IOptions<T>`, `IOptionsSnapshot<T>`, or `IOptionsMonitor<T>`.",
        code: "builder.Services.Configure<JwtSettings>(builder.Configuration.GetSection(\"Jwt\"));\n\n// In controller\npublic AuthController(IOptions<JwtSettings> options)",
        summary: "A pattern to bind configuration sections to strongly typed C# classes and inject them via DI."
    },

    // --- MVC (21-45) ---
    {
        id: 21,
        title: "What is the MVC architecture?",
        category: "MVC",
        difficulty: "Beginner",
        explanation: "MVC (Model-View-Controller) is a software design pattern that separates an application into three main groups of components: Models (data/business logic), Views (user interface), and Controllers (handles user requests and connects Model to View).",
        summary: "An architectural pattern separating application logic into Models, Views, and Controllers."
    },
    {
        id: 22,
        title: "What is a Controller in MVC?",
        category: "MVC",
        difficulty: "Beginner",
        explanation: "A Controller is a C# class inheriting from `Controller` that handles incoming HTTP requests. It retrieves data from the Model, executes business logic, and returns a View or API response.",
        summary: "A class that handles incoming requests, updates the model, and selects a view to render."
    },
    {
        id: 23,
        title: "What is an Action?",
        category: "MVC",
        difficulty: "Beginner",
        explanation: "An Action is a public method on a Controller class. It represents a specific endpoint that a user can request, returning an `IActionResult`.",
        code: "public IActionResult Index() {\n    return View();\n}",
        summary: "A public method on a controller that handles a specific HTTP request."
    },
    {
        id: 24,
        title: "What is a View in MVC?",
        category: "MVC",
        difficulty: "Beginner",
        explanation: "A View is a file containing HTML and Razor syntax (`.cshtml`). It is responsible for rendering the UI and presenting the data provided by the Controller.",
        summary: "A .cshtml file responsible for rendering the UI."
    },
    {
        id: 25,
        title: "What is a Model in MVC?",
        category: "MVC",
        difficulty: "Beginner",
        explanation: "A Model represents the state, data, and business logic of the application. It is completely independent of the UI and how data is displayed.",
        summary: "Classes representing the state, data, and business logic of the app."
    },
    {
        id: 26,
        title: "Describe the ASP.NET Core MVC lifecycle.",
        category: "MVC",
        difficulty: "Intermediate",
        explanation: "1. Request reaches the Middleware pipeline.\n2. Routing middleware determines the target Controller and Action.\n3. Model Binding maps request data (URL, Body) to Action parameters.\n4. Action Filters execute.\n5. Controller Action executes.\n6. Result Execution (e.g., View rendering or JSON serialization).\n7. Response flows back out the middleware pipeline.",
        summary: "Routing -> Model Binding -> Action Filters -> Action Execution -> Result Execution."
    },
    {
        id: 27,
        title: "What is Razor?",
        category: "MVC",
        difficulty: "Beginner",
        explanation: "Razor is a markup syntax that lets you embed server-based C# code into HTML web pages. It is fluid, easy to learn, and evaluated on the server before the HTML is sent to the client.",
        summary: "A markup syntax for embedding server-side C# into HTML."
    },
    {
        id: 28,
        title: "What is Razor syntax?",
        category: "MVC",
        difficulty: "Beginner",
        explanation: "Razor uses the `@` symbol to transition from HTML to C# code. You can use `@` for single expressions, `@{ ... }` for code blocks, and standard C# control structures like `@if` or `@foreach`.",
        code: "<h1>Hello @Model.Name</h1>\n@foreach(var item in Model.Items) {\n    <li>@item.Name</li>\n}",
        summary: "Uses the @ symbol to seamlessly transition between HTML markup and C# code."
    },
    {
        id: 29,
        title: "What is ViewBag?",
        category: "MVC",
        difficulty: "Beginner",
        explanation: "ViewBag is a dynamic object used to pass data from a Controller to a View. Because it relies on `dynamic`, there is no compile-time type checking.",
        code: "// Controller\nViewBag.Message = \"Hello World\";\n// View\n<h1>@ViewBag.Message</h1>",
        mistake: "Overusing ViewBag instead of strongly-typed ViewModels, leading to runtime errors.",
        summary: "A dynamic object for passing untyped data from Controller to View."
    },
    {
        id: 30,
        title: "What is ViewData?",
        category: "MVC",
        difficulty: "Beginner",
        explanation: "ViewData is a dictionary (`ViewDataDictionary`) used to pass data from a Controller to a View. Data is stored as key-value pairs of type `object`, requiring casting in the view.",
        code: "// Controller\nViewData[\"Message\"] = \"Hello World\";\n// View\n<h1>@((string)ViewData[\"Message\"])</h1>",
        summary: "A dictionary object for passing loosely typed data from Controller to View."
    },
    {
        id: 31,
        title: "What is TempData?",
        category: "MVC",
        difficulty: "Intermediate",
        explanation: "TempData is a dictionary used to store data for the lifespan of a single subsequent request. It is typically used for passing messages (like 'Item Saved') during a redirect (`RedirectToAction`). Under the hood, it uses Session or a Cookie.",
        summary: "Used to store short-lived data that survives exactly one redirect."
    },
    {
        id: 32,
        title: "How do you pass data from Controller to View?",
        category: "MVC",
        difficulty: "Beginner",
        explanation: "You can pass data using:\n1. **ViewModel (Recommended):** Passed directly to `return View(model)`.\n2. **ViewBag:** Dynamic property.\n3. **ViewData:** Dictionary collection.\n4. **TempData:** Dictionary collection for redirects.",
        summary: "Using strongly-typed ViewModels (best practice), ViewBag, ViewData, or TempData."
    },
    {
        id: 33,
        title: "What are Strongly Typed Views?",
        category: "MVC",
        difficulty: "Beginner",
        explanation: "A view where the type of the Model is explicitly declared using the `@model` directive. This enables IntelliSense, compile-time checking, and clean refactoring.",
        code: "@model MyApplication.Models.Product\n<h1>@Model.ProductName</h1>",
        summary: "Views that declare a specific C# type for their model, enabling compile-time checking."
    },
    {
        id: 34,
        title: "What is a ViewModel?",
        category: "MVC",
        difficulty: "Intermediate",
        explanation: "A ViewModel is a custom class specifically created to represent the data required for a single View. It aggregates data from multiple domain entities or formats it perfectly for the UI, preventing the View from containing complex logic.",
        summary: "A purpose-built class containing exactly the data required by a specific View."
    },
    {
        id: 35,
        title: "Why use a ViewModel instead of an Entity Model?",
        category: "MVC",
        difficulty: "Intermediate",
        explanation: "1. **Security:** Entities might contain sensitive data (like Passwords). ViewModels only expose what the UI needs.\n2. **Separation of Concerns:** DB schema shouldn't dictate UI design.\n3. **Aggregation:** A View might need data from a `User`, `Address`, and `Order`. A ViewModel combines them cleanly.",
        summary: "For security, separation of concerns, and aggregating data from multiple entities."
    },
    {
        id: 36,
        title: "What are Partial Views?",
        category: "MVC",
        difficulty: "Beginner",
        explanation: "A Partial View is a reusable `.cshtml` file that renders a chunk of HTML inside another View. It is the MVC equivalent of a UI component (like a React component), used for headers, footers, or reusable forms.",
        code: "<partial name=\"_LoginPartial\" />",
        summary: "Reusable chunks of Razor HTML that can be embedded into other views."
    },
    {
        id: 37,
        title: "What is a Layout in MVC?",
        category: "MVC",
        difficulty: "Beginner",
        explanation: "A Layout (`_Layout.cshtml`) is a master template that defines the common UI elements of a site (HTML head, header, navigation, footer). Views render their content inside the Layout where the `@RenderBody()` method is called.",
        summary: "A master template file that defines the common wrapper UI for the application."
    },
    {
        id: 38,
        title: "What are View Components?",
        category: "MVC",
        difficulty: "Advanced",
        explanation: "View Components are similar to partial views, but much more powerful. They don't depend on the calling controller's model. They have their own C# backend class that can inject dependencies (like a DbContext) and run complex async logic to fetch their own data.",
        summary: "Like partial views, but with their own C# backend class capable of DI and async logic."
    },
    {
        id: 39,
        title: "What is the difference between a Partial View and a View Component?",
        category: "MVC",
        difficulty: "Advanced",
        explanation: "- **Partial View:** Dumb UI component. Relies on the parent view to provide its data/model.\n- **View Component:** Smart UI component. Has a C# class, supports dependency injection, and can query the database itself (e.g., a Shopping Cart summary or dynamic Navigation Menu).",
        summary: "Partial Views rely on parent data; View Components fetch their own data."
    },
    {
        id: 40,
        title: "What are Tag Helpers?",
        category: "MVC",
        difficulty: "Intermediate",
        explanation: "Tag Helpers enable server-side code to participate in creating and rendering HTML elements in Razor files. They look like standard HTML attributes but execute C# on the server.",
        code: "<a asp-controller=\"Home\" asp-action=\"Index\" class=\"btn\">Home</a>",
        summary: "HTML-friendly syntax that uses server-side C# to generate HTML attributes and elements."
    },
    {
        id: 41,
        title: "What is the difference between HTML Helpers and Tag Helpers?",
        category: "MVC",
        difficulty: "Intermediate",
        explanation: "- **HTML Helpers:** Older syntax using C# methods (e.g., `@Html.ActionLink(\"Home\", \"Index\")`). Doesn't feel like natural HTML.\n- **Tag Helpers:** Modern, HTML-native syntax (e.g., `<a asp-action=\"Index\">`). Integrates beautifully with HTML editors and frontend developers.",
        summary: "HTML Helpers use C# method syntax; Tag Helpers use HTML attribute syntax."
    },
    {
        id: 42,
        title: "How do you validate a model in MVC?",
        category: "MVC",
        difficulty: "Intermediate",
        explanation: "Apply Data Annotations (attributes like `[Required]`, `[StringLength]`) to your ViewModel properties. In the Controller, check `if (!ModelState.IsValid)` before processing.",
        summary: "Using Data Annotation attributes on ViewModels and checking ModelState.IsValid."
    },
    {
        id: 43,
        title: "What is Anti-Forgery Validation in MVC?",
        category: "MVC",
        difficulty: "Advanced",
        explanation: "It prevents Cross-Site Request Forgery (CSRF) attacks. ASP.NET Core MVC forms automatically include a hidden antiforgery token. You apply the `[ValidateAntiForgeryToken]` attribute to POST actions to verify the token matches the user's session.",
        summary: "A mechanism using hidden tokens to prevent CSRF attacks on POST actions."
    },
    {
        id: 44,
        title: "What is the purpose of _ViewStart.cshtml?",
        category: "MVC",
        difficulty: "Beginner",
        explanation: "`_ViewStart.cshtml` executes before every full view in its folder hierarchy. It is typically used to set the default Layout for all views, preventing the need to specify the layout in every single view.",
        summary: "Sets common view properties (like the Layout) globally across multiple views."
    },
    {
        id: 45,
        title: "What is the purpose of _ViewImports.cshtml?",
        category: "MVC",
        difficulty: "Beginner",
        explanation: "`_ViewImports.cshtml` provides a mechanism to include common namespaces (`@using`), Tag Helpers (`@addTagHelper`), and other directives across all views globally, keeping individual view files clean.",
        summary: "Globally registers namespaces and Tag Helpers for all Razor views."
    }
];

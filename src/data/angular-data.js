export const categories = [
    "All",
    "Angular Fundamentals",
    "Components & Communication",
    "Lifecycle Hooks",
    "Forms & Validation",
    "HTTP & Interceptors",
    "RxJS & Observables",
    "Routing & Guards",
    "Architecture & Performance"
];

export const interviewQuestions = [
    {
        id: 1,
        title: "What is Angular?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "Angular is an open-source, TypeScript-based front-end web application framework led by the Angular Team at Google. It is used for building single-page client applications using HTML and TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.",
        example: "Building a complex enterprise dashboard like Gmail or a stock trading platform where the page never reloads, but views switch seamlessly and data updates in real-time.",
        code: `// Basic Angular Component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>Hello Angular!</h1>'
})
export class AppComponent { }`,
        tip: "Always mention that Angular is a full-fledged 'framework' (unlike React, which is a library). It provides built-in routing, HTTP client, and state management tools.",
        mistake: "Confusing 'Angular' (version 2+) with 'AngularJS' (version 1.x). Never call modern Angular 'AngularJS'.",
        summary: "A TypeScript-based framework by Google for building scalable Single Page Applications (SPAs)."
    },
    {
        id: 2,
        title: "What is the goal of Angular?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "The primary goal of Angular is to simplify both the development and testing of Single Page Applications (SPAs) by providing a structured framework for client-side MVC (Model-View-Controller) and MVVM (Model-View-ViewModel) architectures. It aims to decouple DOM manipulation from application logic and decouple the client side from the server side.",
        example: "Instead of writing raw JavaScript to manually find a <div> and update its innerHTML when a variable changes (like in jQuery), Angular's goal is to let you declare data bindings so the UI updates automatically when the data changes.",
        code: `// Data binding handles DOM updates automatically
@Component({
  template: '<button (click)="increment()">Count: {{ count }}</button>'
})
export class Counter {
  count = 0;
  increment() { this.count++; } // UI updates instantly without DOM selection
}`,
        tip: "Emphasize 'Developer Productivity' and 'Maintainability'. Angular enforces a strict architecture which makes scaling large teams easier.",
        mistake: "Saying the goal is to make websites faster. While SPAs feel faster, the main goal is architectural structure and maintainability.",
        summary: "To provide a structured, scalable MVC/MVVM architecture for developing and testing SPAs effortlessly."
    },
    {
        id: 3,
        title: "What are the main features of Angular?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "The main features of Angular include:\n1. **Component-Based Architecture:** Reusable UI building blocks.\n2. **Two-Way Data Binding:** Syncs model and view.\n3. **Dependency Injection (DI):** Efficient service management.\n4. **Directives:** Extends HTML attributes.\n5. **RxJS Support:** For reactive, asynchronous programming.\n6. **Angular CLI:** Powerful command-line tooling.\n7. **TypeScript:** Strong typing and OOP features.",
        example: "An e-commerce site uses Components for products, DI to inject a CartService, and RxJS to handle a stream of real-time price updates.",
        code: `// Example showing multiple features: Component, DI, and TypeScript
@Component({
  selector: 'app-user',
  template: '<h2>{{ user.name }}</h2>' // Data binding
})
export class UserComponent {
  user: User;
  
  // Dependency Injection of a Service
  constructor(private userService: UserService) {
    this.user = this.userService.getCurrentUser();
  }
}`,
        tip: "Memorize at least 5 core features. If you mention RxJS or DI, be prepared to answer follow-up questions on them.",
        mistake: "Listing HTML, CSS, and JS as Angular features. Focus on Angular-specific concepts like DI, RxJS, and CLI.",
        summary: "Components, Dependency Injection, Data Binding, Directives, RxJS, and the CLI."
    },
    {
        id: 4,
        title: "Difference between AngularJS and Angular?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "AngularJS (Angular 1) is entirely different from Angular (Angular 2+).\n\n1. **Language:** AngularJS uses JavaScript; Angular uses TypeScript.\n2. **Architecture:** AngularJS uses Controllers and $scope; Angular uses a Component-based architecture.\n3. **Performance:** Angular is significantly faster, utilizing a unidirectional data flow and ahead-of-time (AOT) compilation.\n4. **Mobile:** Angular is built with mobile support in mind; AngularJS was not.\n5. **Dependency Injection:** Angular has a hierarchical DI system; AngularJS does not.",
        example: "AngularJS: `app.controller('MyCtrl', function($scope) { $scope.name = 'John'; });`\nAngular: `export class MyComp { name = 'John'; }`",
        code: `// AngularJS (Legacy)
$scope.save = function() { ... }

// Angular (Modern)
export class SaveComponent {
  save() { ... }
}`,
        tip: "Never put 'AngularJS' on your resume if you only know modern Angular. Recruiters explicitly look for the distinction.",
        mistake: "Assuming Angular is just a newer version of AngularJS. It was a complete rewrite from scratch.",
        summary: "AngularJS is legacy, JS-based, and uses controllers. Angular is modern, TS-based, component-driven, and highly optimized."
    },
    {
        id: 5,
        title: "What is SPA (Single Page Application)?",
        category: "Angular Fundamentals",
        language: "html",
        explanation: "A Single Page Application (SPA) is a web application that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages. The HTML/CSS/JS is loaded once, and only data (JSON) is sent back and forth.",
        example: "Gmail is a classic SPA. When you click an email, the page doesn't blink or reload. The URL changes, and the email content is fetched via AJAX and injected into the screen.",
        code: `<!-- Traditional Web App: Server returns full HTML -->
<a href="/about.html">About</a> <!-- Triggers full page reload -->

<!-- SPA in Angular: Router prevents reload -->
<a routerLink="/about">About</a> <!-- JS swaps the view instantly -->
<router-outlet></router-outlet>`,
        tip: "Explain that SPAs shift the rendering logic from the Server to the Client (Browser).",
        mistake: "Saying a SPA only has one 'view'. SPAs have many views (pages), but only one physical `index.html` file.",
        summary: "A web app that loads a single HTML page and dynamically updates sections of it without requiring a full page reload."
    },
    {
        id: 6,
        title: "How do you implement SPA in Angular?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "SPA functionality in Angular is implemented using the **Angular Router**. \n\nThe router intercepts URL changes, prevents the browser from making a round-trip to the server, and dynamically swaps out the components loaded inside a special directive called `<router-outlet>`.",
        example: "Clicking 'Products' changes the URL to `/products`. The Angular Router sees this, destroys the HomeComponent, creates the ProductsComponent, and places it inside the `<router-outlet>`.",
        code: `// 1. Define Routes
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

// 2. Register Routes in Module/Provider
@NgModule({
  imports: [RouterModule.forRoot(routes)]
})

// 3. HTML usage
<a routerLink="/home">Home</a>
<router-outlet></router-outlet> <!-- Components render here -->`,
        tip: "Always mention `<router-outlet>` and `routerLink`. They are the two physical HTML elements required for SPA routing.",
        mistake: "Using standard `<a href=\"...\">` tags in an Angular app. This will cause a full page reload, breaking the SPA experience.",
        summary: "Use the Angular Router module, define routes, use `routerLink` for navigation, and `<router-outlet>` to display components."
    },
    {
        id: 7,
        title: "What are the building blocks of Angular?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "The main building blocks of an Angular application are:\n1. **Modules (NgModules):** Containers for cohesive blocks of code.\n2. **Components:** Controls a patch of screen (View + Logic).\n3. **Templates:** The HTML for a component.\n4. **Metadata:** Decorators (like @Component) that tell Angular how to process a class.\n5. **Data Binding:** Connects the DOM to component data.\n6. **Directives:** Provide DOM manipulation instructions.\n7. **Services:** Reusable business logic.\n8. **Dependency Injection:** Wires services into components.",
        example: "A 'Feature Module' contains a 'User Component' (with a Template and Metadata). The component uses 'Data Binding' and relies on a 'User Service' provided by 'Dependency Injection'.",
        code: `// A micro-view of all building blocks
@Component({             // Metadata
  selector: 'app-root',  
  template: '{{ name }}' // Template & Data Binding
})
export class RootComp {  // Component
  name = 'Angular';
  constructor(svc: DataSvc) {} // Dependency Injection & Service
}`,
        tip: "You don't need to name all 8 perfectly, but definitely hit Modules, Components, Services, and DI.",
        mistake: "Forgetting 'Modules'. Even with Standalone components in Angular 14+, the module concept (or standalone grouping) is a core architectural pillar.",
        summary: "Modules, Components, Templates, Metadata, Data Binding, Directives, Services, and Dependency Injection."
    },
    {
        id: 8,
        title: "What are Components in Angular?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "Components are the most basic UI building block of an Angular app. An Angular app is essentially a tree of components. \n\nA component consists of a TypeScript class (handling logic), an HTML template (the view), and CSS styles. It is defined using the `@Component` decorator.",
        example: "In Facebook, the NavBar is a component, the NewsFeed is a component, and a single Post within the NewsFeed is a child component.",
        code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-hello', // Custom HTML tag
  template: '<h1>Hello {{ name }}</h1>',
  styles: ['h1 { color: red; }']
})
export class HelloComponent {
  name: string = 'World'; // Class property bound to template
}`,
        tip: "Describe components as 'Custom HTML Elements with superpowers'.",
        mistake: "Putting business logic or HTTP calls directly in components. Components should only handle View logic; business logic belongs in Services.",
        summary: "The fundamental UI building blocks consisting of a TypeScript class, an HTML template, and CSS, decorated with `@Component`."
    },
    {
        id: 9,
        title: "What are Modules in Angular?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "NgModules are containers that group related components, directives, pipes, and services together. They configure the injector and the compiler and help organize an application into cohesive blocks of functionality.\n\n*(Note: As of Angular 14+, Standalone Components have made NgModules optional, but they remain heavily used in legacy and enterprise apps).*.",
        example: "An e-commerce app might have an `AppModule` (core), a `UserModule` (for login/profile), and a `CartModule` (for checkout). This makes the code organized and allows for Lazy Loading.",
        code: `@NgModule({
  declarations: [LoginComponent, RegisterComponent], // Components
  imports: [CommonModule, FormsModule],              // Other Modules
  providers: [AuthService],                          // Services
  exports: [LoginComponent]                          // Make public
})
export class AuthModule { }`,
        tip: "Always mention that Modules are essential for **Lazy Loading**, which drastically improves the initial load time of the SPA.",
        mistake: "Declaring the same component in two different modules. An Angular component can only belong to ONE module.",
        summary: "Containers used to group related components, services, and pipes, helping organize the app and enable Lazy Loading."
    },
    {
        id: 10,
        title: "What is AppModule?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "The `AppModule` (often found in `app.module.ts`) is the root module that Angular uses to bootstrap and launch the application. Every traditional Angular application must have at least one module, the root module.\n\nIt tells Angular how to assemble the application by declaring the root component (`AppComponent`) in its `bootstrap` array.",
        example: "The AppModule is like the main circuit board of a computer. All other components and feature modules must ultimately connect to it to function.",
        code: `import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ] // The component to load first!
})
export class AppModule { }`,
        tip: "Mention the `bootstrap` array. It is unique to the root module and tells Angular which component to mount inside `index.html`.",
        mistake: "Importing `BrowserModule` in feature modules. `BrowserModule` should ONLY be imported once in the `AppModule`. Feature modules use `CommonModule`.",
        summary: "The root module of an Angular application that bootstraps the app and launches the root component."
    },
    {
        id: 11,
        title: "What are Directives in Angular?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "Directives are classes that add new behavior to elements in the DOM or modify existing behavior. \n\nIn fact, an Angular Component is actually just a Directive with a template! Directives allow you to manipulate the DOM dynamically based on application state.",
        example: "If you want to hide a paragraph when a user is not logged in, you don't write JS to find the element and set `display: none`. Instead, you use the `*ngIf` directive directly on the HTML element.",
        code: `<!-- Using a built-in directive to alter DOM -->
<div *ngIf="isLoggedIn">Welcome Back!</div>

<!-- Using an attribute directive to change style -->
<p [ngClass]="{'highlight': isActive}">Text</p>`,
        tip: "Remember the phrase: 'Components are directives with a template'. This shows deep architectural understanding.",
        mistake: "Confusing Directives with Components. Directives do not have their own HTML template; they attach to existing elements.",
        summary: "Classes that attach to DOM elements to modify their structure, behavior, or appearance."
    },
    {
        id: 12,
        title: "What are the different types of Directives?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "Angular has three distinct types of Directives:\n1. **Components:** Directives with a template. The most common type.\n2. **Structural Directives:** Change the DOM layout by adding or removing DOM elements (e.g., `*ngIf`, `*ngFor`). They always have an asterisk (*).\n3. **Attribute Directives:** Change the appearance or behavior of an element, component, or another directive (e.g., `ngClass`, `ngStyle`, `ngModel`).",
        example: "Component = The house. Structural = Adding/removing a room. Attribute = Painting the wall blue.",
        code: `<!-- 1. Component Directive -->
<app-user-profile></app-user-profile>

<!-- 2. Structural Directive (*) -->
<li *ngFor="let user of users">{{ user.name }}</li>

<!-- 3. Attribute Directive ([]) -->
<input [ngStyle]="{'background-color': 'yellow'}" />`,
        tip: "In interviews, they will almost always ask for examples of Structural vs Attribute. Have `*ngIf` and `ngClass` ready.",
        mistake: "Forgetting the asterisk (*) on structural directives. It's syntactic sugar that expands into an `<ng-template>`.",
        summary: "Components (with templates), Structural Directives (alter DOM structure), and Attribute Directives (alter DOM appearance/behavior)."
    },
    {
        id: 13,
        title: "What is a Structural Directive?",
        category: "Angular Fundamentals",
        language: "html",
        explanation: "A Structural Directive is a directive that shapes or reshapes the DOM's structure, typically by adding, removing, or manipulating elements. \n\nThey are easily identifiable by the asterisk (`*`) prefix. The asterisk is syntactic sugar that Angular transforms into an `<ng-template>` element wrapping the host element.",
        example: "Using `*ngFor` to loop through an array of products and generate a `<div>` for each one, or `*ngIf` to completely remove a 'Login' button from the DOM if the user is already authenticated.",
        code: `<!-- *ngIf removes element from DOM if false -->
<div *ngIf="showDetails">Here are the details...</div>

<!-- *ngFor loops through a collection -->
<ul>
  <li *ngFor="let item of items; let i = index">
    {{i}}: {{item.name}}
  </li>
</ul>`,
        tip: "Explain that `*ngIf` physically removes the element from the DOM. It does NOT just hide it with CSS `display: none`. This is a massive performance benefit.",
        mistake: "Trying to put two structural directives on the same element (e.g., `<div *ngIf=\"condition\" *ngFor=\"...\">`). Angular throws an error. You must wrap one in an `<ng-container>`.",
        summary: "Directives prefixed with `*` that alter the DOM layout by adding or removing elements (e.g., `*ngIf`, `*ngFor`)."
    },
    {
        id: 14,
        title: "What is an Attribute Directive?",
        category: "Angular Fundamentals",
        language: "html",
        explanation: "Attribute Directives change the appearance or behavior of an existing DOM element. Unlike structural directives, they do not add or remove nodes from the DOM tree.\n\nThey are applied to elements just like standard HTML attributes.",
        example: "Using `ngClass` to dynamically apply a 'danger' CSS class to an input field if the user types an invalid email address.",
        code: `<!-- ngStyle modifies inline styles -->
<p [ngStyle]="{'color': isError ? 'red' : 'green'}">Status Message</p>

<!-- ngClass adds/removes CSS classes -->
<button [ngClass]="{'btn-active': isActive, 'btn-disabled': !isActive}">
  Submit
</button>`,
        tip: "Mention that you can build custom attribute directives, for example, a directive that automatically focuses an input when the page loads.",
        mistake: "Putting an asterisk (*) in front of an attribute directive.",
        summary: "Directives that alter the styling, CSS classes, or behavior of an existing DOM element (e.g., `ngClass`, `ngStyle`)."
    },
    {
        id: 15,
        title: "What are Decorators in Angular?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "Decorators are a core TypeScript feature used extensively in Angular. They are functions that modify JavaScript classes, methods, or properties. In Angular, they are used to attach **metadata** to a class so Angular knows what that class is supposed to do.\n\nThey always begin with the `@` symbol.",
        example: "A plain TypeScript class means nothing to Angular. But if you put `@Component()` above it, Angular suddenly knows it's a UI component. If you put `@Injectable()`, Angular knows it's a Service.",
        code: `// A decorator modifying a class
@Component({
  selector: 'app-header',
  template: '<header>Logo</header>'
})
export class HeaderComponent { }

// A decorator modifying a property
@Input() title: string;`,
        tip: "List the 4 types of decorators: Class (`@Component`), Property (`@Input`), Method (`@HostListener`), and Parameter (`@Inject`).",
        mistake: "Thinking decorators execute at runtime. They are evaluated when the class is defined (during compilation/initialization).",
        summary: "Functions prefixed with `@` that attach metadata to classes, properties, or methods to tell Angular how to process them."
    },
    {
        id: 16,
        title: "What is Metadata or Annotation in Angular?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "Metadata is used to decorate a class so that it can configure the expected behavior of the class. In Angular, metadata is attached to a class using Decorators (like `@Component`, `@NgModule`). It tells Angular how to process the class, what HTML template to use, and what CSS to apply.",
        example: "The class `UserComponent` is just a blank class. The metadata inside `@Component({ selector: 'app-user' })` is what turns it into a web component.",
        code: `// The object passed into @Component is the Metadata
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent { }`,
        tip: "Explain that decorators are the *mechanism* used to attach metadata to a class.",
        mistake: "Confusing metadata with the data properties inside the class (like `name = 'John'`). Metadata is about configuration, not application state.",
        summary: "Configuration data attached to a class via Decorators that tells Angular how to process and instantiate the class."
    },
    {
        id: 17,
        title: "What are Templates in Angular?",
        category: "Angular Fundamentals",
        language: "html",
        explanation: "A Template is a chunk of HTML that tells Angular how to render the component. It is standard HTML, but augmented with Angular's template syntax (Data Binding, Directives, Pipes) to make the UI dynamic.",
        example: "An HTML form where the submit button is disabled if the user hasn't filled out all required fields.",
        code: `<!-- Standard HTML mixed with Angular Template Syntax -->
<div class="user-card">
  <h2>{{ user.name | uppercase }}</h2>
  <button (click)="saveUser()" [disabled]="!isValid">Save</button>
</div>`,
        tip: "Mention that templates can be defined inline using the `template` property, or in an external file using `templateUrl`.",
        mistake: "Putting `<script>` or `<html>`/`<body>` tags inside an Angular template. Templates are just fragments of the DOM.",
        summary: "HTML fragments enhanced with Angular syntax (bindings, directives) to define a component's view."
    },
    {
        id: 18,
        title: "What is Data Binding?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "Data Binding is a core concept in Angular that allows communication between a Component (the TypeScript logic) and its Template (the HTML view). It synchronizes the data automatically so you don't have to write vanilla JavaScript to manually push data to the DOM or pull data from inputs.",
        example: "A variable `score = 10` in the class is bound to the view. If the class changes it to `20`, the HTML instantly shows `20` without manually querying the DOM.",
        code: `// Class Property
export class GameComponent {
  score = 10;
}

<!-- HTML Template (Binding) -->
<p>Your Score: {{ score }}</p>`,
        tip: "Data binding is the reason Angular is so powerful. It completely abstracts away DOM manipulation.",
        mistake: "Trying to use `document.getElementById('score').innerText = this.score` inside an Angular component.",
        summary: "The automatic synchronization of data between the Component class (logic) and the Template (view)."
    },
    {
        id: 19,
        title: "Explain the four types of Data Binding.",
        category: "Angular Fundamentals",
        language: "html",
        explanation: "Angular has four distinct types of data binding, categorized by the direction of data flow:\n\n**Component to DOM (One-Way):**\n1. **String Interpolation `{{ }}`:** Renders a class property as text.\n2. **Property Binding `[ ]`:** Sets an HTML element property (like `disabled` or `src`).\n\n**DOM to Component (One-Way):**\n3. **Event Binding `( )`:** Listens to user events (clicks, keystrokes) and calls a class method.\n\n**Two-Way:**\n4. **Two-Way Binding `[( )]`:** Syncs data in both directions simultaneously. Changes in the input update the class, and changes in the class update the input.",
        example: "Interpolation for displaying a name. Property Binding for disabling a button. Event Binding for a click. Two-Way for a search input field.",
        code: `<!-- 1. Interpolation -->
<p>{{ title }}</p>

<!-- 2. Property Binding -->
<button [disabled]="isSaving">Save</button>

<!-- 3. Event Binding -->
<button (click)="onSubmit()">Submit</button>

<!-- 4. Two-Way Binding -->
<input [(ngModel)]="username" />`,
        tip: "Memorize the syntax: Interpolation `{{}}`, Property `[]`, Event `()`, Two-Way `[()]`. (The Two-Way syntax is famously called 'Banana in a Box').",
        mistake: "Confusing Property Binding with Interpolation. Property binding is for attributes/properties of elements, interpolation is for text content.",
        summary: "String Interpolation, Property Binding, Event Binding, and Two-Way Binding."
    },
    {
        id: 20,
        title: "What is String Interpolation?",
        category: "Angular Fundamentals",
        language: "html",
        explanation: "String Interpolation is a one-way data binding technique used to display component data in the HTML template. It uses double curly braces `{{ }}` to evaluate a template expression, convert the result to a string, and render it in the DOM.",
        example: "Displaying a user's full name, or calculating a simple mathematical expression directly in the HTML view.",
        code: `export class MathComponent {
  num1 = 5;
  num2 = 10;
}

<!-- HTML -->
<p>The sum is: {{ num1 + num2 }}</p> <!-- Renders: The sum is: 15 -->`,
        tip: "You can put simple JavaScript expressions inside interpolation (like `{{ count * 2 }}` or `{{ name.toUpperCase() }}`), but complex logic should be kept in the class.",
        mistake: "Trying to instantiate objects or run complex multi-line functions inside `{{ }}`. It should be kept extremely simple for performance.",
        summary: "Using `{{ }}` syntax to evaluate an expression and render its string result in the HTML template."
    },
    {
        id: 21,
        title: "What is Property Binding?",
        category: "Angular Fundamentals",
        language: "html",
        explanation: "Property Binding is a one-way data binding technique that allows you to set the value of an HTML element's property, a component's property, or a directive's property directly from the component class. \n\nIt uses square brackets `[ ]` around the property name.",
        example: "Dynamically setting the `src` attribute of an image tag based on the user's selected profile picture.",
        code: `export class ImageComponent {
  imgUrl = 'https://example.com/logo.png';
  isButtonDisabled = true;
}

<!-- HTML -->
<img [src]="imgUrl" />
<button [disabled]="isButtonDisabled">Click Me</button>`,
        tip: "Property binding `[src]=\"url\"` is generally preferred over interpolation `src=\"{{url}}\"` for setting element properties because it handles non-string data types (like booleans) correctly.",
        mistake: "Forgetting the brackets `[ ]`. If you write `<img src=\"imgUrl\">`, Angular will try to load a file literally named 'imgUrl' instead of reading your variable.",
        summary: "Using `[ ]` syntax to dynamically bind class variables to HTML element properties (one-way from class to view)."
    },
    {
        id: 22,
        title: "What is Event Binding?",
        category: "Angular Fundamentals",
        language: "html",
        explanation: "Event Binding allows you to listen to and respond to user actions (like keystrokes, mouse movements, clicks, and touches) on the DOM. The data flows one-way from the View to the Component.\n\nIt uses parentheses `( )` around the event name.",
        example: "Listening for a user clicking a 'Submit' button, or typing in a search bar to trigger a search function.",
        code: `export class SearchComponent {
  onSearchClick(event: MouseEvent) {
    console.log('Button clicked!', event);
  }
}

<!-- HTML -->
<button (click)="onSearchClick($event)">Search</button>`,
        tip: "You can access the native DOM event object by passing `$event` into your function.",
        mistake: "Using standard HTML event attributes like `onclick=\"...\"`. In Angular, it MUST be `(click)=\"...\"`.",
        summary: "Using `( )` syntax to listen to DOM events and trigger methods in the component class."
    },
    {
        id: 23,
        title: "What is Two-Way Data Binding?",
        category: "Angular Fundamentals",
        language: "html",
        explanation: "Two-Way Data Binding combines Property Binding and Event Binding. It ensures that the component class and the HTML view are always in perfectly synchronized. If the user types in an input, the class variable updates instantly. If the class variable is updated via an API, the input field updates instantly.",
        example: "A profile edit form where you type your name into a text box, and a preview of your profile card updates in real-time as you type.",
        code: `<!-- Uses the 'Banana in a box' syntax [()] -->
<input [(ngModel)]="username" placeholder="Enter name">

<p>Hello, {{ username }}!</p>`,
        tip: "To use `[(ngModel)]`, you MUST import the `FormsModule` in your Angular module, or it will throw an error.",
        mistake: "Using `[( )]` for everything. Only use it for form inputs. Standard text display should use `{{ }}` to save memory.",
        summary: "Syncs data in both directions simultaneously using the `[()]` syntax, ensuring the View and Model are always identical."
    },
    {
        id: 24,
        title: "What is ngModel?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "`ngModel` is a built-in Angular directive used exclusively for Two-Way Data Binding on HTML form elements (like `<input>`, `<select>`, `<textarea>`). \n\nUnder the hood, `[(ngModel)]=\"name\"` is just syntactic sugar for `[ngModel]=\"name\" (ngModelChange)=\"name=$event\"`.",
        example: "Binding a checkbox to a boolean variable `isAgreed`. When the user checks the box, `isAgreed` becomes true automatically.",
        code: `// Must import FormsModule in AppModule!
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ FormsModule ]
})
export class AppModule { }

// HTML
<input type="text" [(ngModel)]="searchQuery" />`,
        tip: "Interviewers often ask what module is required to use ngModel. The answer is `FormsModule`.",
        mistake: "Trying to use `[(ngModel)]` on a `<div>` or `<p>`. It only works on form elements.",
        summary: "A directive from `FormsModule` used to implement two-way data binding on form elements."
    },
    {
        id: 25,
        title: "What are Pipes in Angular?",
        category: "Angular Fundamentals",
        language: "html",
        explanation: "Pipes are a way to write display-value transformations that you can declare in your HTML. They take in data as input and transform it into a desired output format for display purposes only. They do NOT alter the original data in the component class.",
        example: "You receive a user's birthdate from a database as a raw ISO string (e.g., `1990-10-05T00:00:00Z`). You use a pipe to display it nicely as `Oct 5, 1990`.",
        code: `export class DateComponent {
  today = new Date();
  price = 45.99;
}

<!-- HTML -->
<p>Date: {{ today | date:'mediumDate' }}</p>
<p>Price: {{ price | currency:'USD' }}</p>`,
        tip: "You can chain multiple pipes together! e.g., `{{ birthday | date | uppercase }}`.",
        mistake: "Using functions in the template like `{{ formatDate(today) }}` instead of a pipe. Functions in templates run on *every single change detection cycle* and kill performance. Pipes are heavily optimized.",
        summary: "Tools used in the HTML template to transform and format data for display (using the `|` character)."
    },
    {
        id: 26,
        title: "What are Pure Pipes?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "By default, all pipes in Angular are Pure Pipes. A Pure Pipe is only executed when Angular detects a *pure change* to the input value. \n\nA pure change is either a change to a primitive input value (String, Number, Boolean) OR a changed object reference (Date, Array, Function, Object).",
        example: "If you have an array `users = ['John']` and push 'Jane' to it, a Pure Pipe will NOT detect the change because the array reference hasn't changed. You must create a new array instance `users = [...users, 'Jane']` for the pipe to trigger.",
        code: `@Pipe({
  name: 'pureTest',
  pure: true // This is the default
})
export class PureTestPipe implements PipeTransform {
  transform(value: any): any {
    // Only runs when the object reference changes
    return value;
  }
}`,
        tip: "Pure pipes are incredibly fast because Angular caches their results and avoids running them unless absolutely necessary.",
        mistake: "Mutating arrays/objects and wondering why the view doesn't update. You must use immutable data structures with pure pipes.",
        summary: "Pipes that only execute when their input reference changes. They are highly optimized for performance."
    },
    {
        id: 27,
        title: "What are Impure Pipes?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "An Impure Pipe executes during EVERY single component change detection cycle. This means it runs on every keystroke, mouse movement, or timer tick, regardless of whether the input data actually changed.",
        example: "Angular's built-in `AsyncPipe` is an impure pipe because it needs to constantly check the internal state of an Observable or Promise to see if new data has arrived.",
        code: `@Pipe({
  name: 'impureTest',
  pure: false // Marks the pipe as impure
})
export class ImpureTestPipe implements PipeTransform {
  transform(value: any): any {
    // This will run hundreds of times per second!
    return value.filter(x => x.isActive);
  }
}`,
        tip: "Avoid writing custom Impure Pipes at all costs unless absolutely necessary. They will destroy your application's performance.",
        mistake: "Using an impure pipe to filter a massive array of 10,000 items. It will freeze the browser.",
        summary: "Pipes that execute on every change detection cycle. They detect mutations inside arrays/objects but cause severe performance issues."
    },
    {
        id: 28,
        title: "What are some built-in Angular Pipes?",
        category: "Angular Fundamentals",
        language: "html",
        explanation: "Angular comes with several highly useful built-in pipes in the `CommonModule`.\n\n1. `DatePipe`: Formats a date value.\n2. `UpperCasePipe` / `LowerCasePipe` / `TitleCasePipe`: Transforms text casing.\n3. `CurrencyPipe`: Formats a number as currency.\n4. `DecimalPipe` (number): Formats numbers with decimal points.\n5. `PercentPipe`: Formats a number as a percentage.\n6. `JsonPipe`: Converts an object to a JSON string (great for debugging).\n7. `AsyncPipe`: Subscribes to an Observable/Promise.",
        example: "Debugging an object: `{{ userObject | json }}` prints the entire object to the screen instead of `[object Object]`.",
        code: `<!-- Casing -->
{{ 'hello' | uppercase }} <!-- HELLO -->

<!-- Currency -->
{{ 1234.5 | currency:'EUR':'symbol' }} <!-- €1,234.50 -->

<!-- Async Pipe (Handles Subscription automatically) -->
<li *ngFor="let user of users$ | async">{{ user.name }}</li>`,
        tip: "Always highlight the `async` pipe in interviews. It shows you understand reactive programming in Angular.",
        mistake: "Forgetting to import `CommonModule` when trying to use these pipes in a standalone component.",
        summary: "Date, UpperCase, LowerCase, Currency, Decimal, Percent, Json, and Async pipes."
    },
    {
        id: 29,
        title: "How do you create a Custom Pipe?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "To create a custom pipe, you create a TypeScript class, decorate it with `@Pipe({ name: 'myPipe' })`, and implement the `PipeTransform` interface. This requires you to write a `transform(value, args)` method that contains the conversion logic.",
        example: "Creating a `FileSizePipe` that takes a number of bytes (e.g., `1048576`) and transforms it into a readable string (`1 MB`).",
        code: `import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {
  transform(bytes: number, extension: string = 'MB'): string {
    const mb = bytes / (1024 * 1024);
    return mb.toFixed(2) + ' ' + extension;
  }
}

// Usage in HTML:
// {{ 2097152 | fileSize:'Megabytes' }} -> "2.00 Megabytes"`,
        tip: "Mention that custom pipes must be declared in the `declarations` array of an NgModule, or marked as `standalone: true`.",
        mistake: "Not implementing the `PipeTransform` interface. While Angular might still run the pipe, TypeScript will complain and you lose type safety.",
        summary: "Create a class implementing `PipeTransform`, decorate it with `@Pipe`, and write the formatting logic inside the `transform()` method."
    },
    {
        id: 30,
        title: "What is Angular CLI?",
        category: "Angular Fundamentals",
        language: "bash",
        explanation: "The Angular CLI (Command Line Interface) is a powerful tool used to initialize, develop, scaffold, and maintain Angular applications directly from a command shell. \n\nIt abstracts away complex build tools like Webpack, automatically setting up TypeScript compilation, dev servers, testing frameworks (Karma/Jasmine), and environment configurations.",
        example: "Instead of manually creating a file, naming it `user.component.ts`, writing the class, creating the HTML file, the CSS file, the Spec file, and registering it in the AppModule, you just type `ng generate component user`.",
        code: `# Install CLI globally
npm install -g @angular/cli

# Create a new app
ng new my-app

# Generate a component
ng generate component components/header

# Start the dev server
ng serve -o`,
        tip: "Mention that the CLI enforces the 'Angular Style Guide' by generating code that strictly follows best practices.",
        mistake: "Creating files manually. It's error-prone and you often forget to register components in their respective modules.",
        summary: "A command-line tool used to quickly generate, build, test, and deploy Angular applications following best practices."
    },
    {
        id: 31,
        title: "Why do we use Angular CLI?",
        category: "Angular Fundamentals",
        language: "bash",
        explanation: "We use the CLI for massive productivity gains and consistency.\n\n1. **Scaffolding:** Instantly generate boilerplate for Components, Services, Pipes, Guards, etc.\n2. **Zero-Config Build:** It handles Webpack, TypeScript transpilation, CSS preprocessors (SASS/LESS), and minification automatically.\n3. **Local Server:** Built-in live-reloading dev server (`ng serve`).\n4. **Testing:** Automatically configures Karma (unit tests) and Protractor/Cypress (e2e tests).\n5. **Deployment:** Handles Ahead-of-Time (AOT) compilation and tree-shaking for production (`ng build`).",
        example: "When upgrading Angular versions, typing `ng update @angular/core` automatically runs migration scripts that refactor your code to match the new version's breaking changes!",
        code: `# Production build with AOT, minification, and tree-shaking
ng build --configuration production

# Run unit tests
ng test`,
        tip: "Learn the shorthand commands: `ng g c name` (generate component), `ng g s name` (generate service).",
        mistake: "Trying to manually configure Webpack for an Angular app. Let the CLI handle the build pipeline.",
        summary: "For rapid scaffolding, zero-configuration build pipelines, easy testing, and optimized production deployments."
    },
    {
        id: 32,
        title: "What is TypeScript?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "TypeScript is a superset of JavaScript developed by Microsoft. It adds strict, static typing and advanced Object-Oriented Programming (OOP) features to JavaScript (like Interfaces, Enums, Generics, and Access Modifiers). \n\nBecause browsers cannot understand TypeScript, it must be 'transpiled' into standard JavaScript before it can be executed.",
        example: "In JavaScript, a variable can be a number, then a string, causing runtime crashes. In TypeScript, if you define `let age: number = 25`, the compiler throws an error if you try to set `age = 'old'`.",
        code: `// Interface (Doesn't exist in JS)
interface User {
  id: number;
  name: string;
}

// Strong typing and Access Modifiers
class UserService {
  private users: User[] = [];

  public addUser(user: User): void {
    this.users.push(user);
  }
}`,
        tip: "TypeScript catches bugs at Compile-Time (when you type), rather than Run-Time (when the user clicks).",
        mistake: "Thinking TypeScript runs in the browser. It does not. It is purely a development tool that compiles down to raw JavaScript.",
        summary: "A strictly-typed superset of JavaScript that adds OOP features and compile-time error checking."
    },
    {
        id: 33,
        title: "Why is TypeScript used in Angular?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "Google partnered with Microsoft to build Angular entirely on TypeScript. \n\n1. **Tooling & Intellisense:** VS Code provides flawless autocomplete and refactoring tools because of TS.\n2. **OOP Paradigm:** Angular heavily relies on Classes, Interfaces, and Dependency Injection, which TS handles beautifully.\n3. **Decorators:** Angular relies on `@Component` and `@Injectable`. TS had early support for decorators.\n4. **Maintainability:** Static typing makes large-scale enterprise applications much easier to refactor safely without breaking things.",
        example: "When injecting a service `constructor(private http: HttpClient)`, TypeScript tells Angular exactly what type of object to inject. JS doesn't have types, so this wouldn't work gracefully.",
        code: `// TypeScript enforces the return type of this API call
getUser(): Observable<User> {
  return this.http.get<User>('/api/user/1');
}

// If you try to access user.firstName, but the User interface 
// only has user.name, TS throws an error instantly!`,
        tip: "Mention that while you *could* technically write Angular in plain JS, absolutely nobody does it because you lose all tooling benefits.",
        mistake: "Ignoring TypeScript errors by slapping `any` on every variable (`let data: any`). This defeats the entire purpose of TypeScript.",
        summary: "For static typing, advanced OOP features (classes/interfaces), decorators, and vastly superior tooling/refactoring capabilities."
    },
    {
        id: 34,
        title: "What is transpilation?",
        category: "Angular Fundamentals",
        language: "bash",
        explanation: "Transpilation (Source-to-Source Compiler) is the process of reading source code written in one programming language and producing equivalent code in another programming language of a similar abstraction level.\n\nIn Angular, the TypeScript Compiler (tsc) transpiles our `.ts` files into standard `.js` files that modern web browsers can execute.",
        example: "Converting modern TypeScript (with Interfaces and Enums) into plain ES5 JavaScript so it can run on older browsers.",
        code: `// 1. You write this (TypeScript):
const greet = (name: string): string => \`Hello \${name}\`;

// 2. The Transpiler converts it to this (JavaScript ES5):
var greet = function(name) {
    return "Hello " + name;
};`,
        tip: "Compilation usually implies high-level language (C#) to machine code (Assembly/IL). Transpilation implies high-level (TS) to high-level (JS).",
        mistake: "Confusing Transpilation with Minification. Minification just shrinks file size; transpilation changes the language syntax.",
        summary: "The process of translating source code from one high-level language (TypeScript) into another high-level language (JavaScript)."
    },
    {
        id: 35,
        title: "What is Node.js and why does Angular need it?",
        category: "Angular Fundamentals",
        language: "bash",
        explanation: "Node.js is a cross-platform, open-source JavaScript runtime environment that executes JavaScript code outside a web browser (on the OS level). \n\nAngular applications run in the browser, NOT on Node.js. However, Angular **requires** Node.js during development because the Angular CLI, the TypeScript transpiler, the local dev server (`ng serve`), and NPM are all built on top of Node.js.",
        example: "Without Node.js, you cannot run `npm install` to download Angular, nor can you run `ng serve` to host your local development environment.",
        code: `# Check if Node is installed
node -v

# Run the Angular CLI (which is a Node script)
ng serve`,
        tip: "Make it extremely clear: Node.js is a DEVELOPMENT dependency for standard Angular apps, not a production dependency (unless you are using Angular Universal / SSR).",
        mistake: "Telling an interviewer that Angular applications run on Node.js. Standard Angular runs in the user's Chrome/Edge browser.",
        summary: "A JavaScript runtime used to power the Angular CLI, local dev server, and package management during the development process."
    },
    {
        id: 36,
        title: "What is NPM?",
        category: "Angular Fundamentals",
        language: "bash",
        explanation: "NPM (Node Package Manager) is the default package manager for the Node.js JavaScript runtime environment. It consists of a command-line client (`npm`) and an online database of public and private packages. \n\nAngular relies heavily on NPM to download its core libraries (`@angular/core`), development tools, and third-party dependencies (like Bootstrap or RxJS).",
        example: "Instead of going to a website, downloading a ZIP file of Bootstrap, and dragging it into your folder, you just type `npm install bootstrap`.",
        code: `# Initialize a new project
npm init -y

# Install an Angular dependency
npm install @angular/material

# Install a development-only dependency (like a testing tool)
npm install jasmine --save-dev`,
        tip: "Mention that NPM handles *Dependency Resolution*. If library A requires library B, NPM automatically downloads both.",
        mistake: "Confusing NPM with Node.js. Node executes code; NPM downloads packages.",
        summary: "The package manager for JavaScript used to download, install, and manage libraries and dependencies for your Angular app."
    },
    {
        id: 37,
        title: "What is package.json?",
        category: "Angular Fundamentals",
        language: "json",
        explanation: "The `package.json` file is the heart of any Node.js/Angular project. It holds vital metadata about the project (name, version, scripts) and maintains the list of dependencies and their specific versions required to run the application.\n\nIt ensures that any developer who pulls your code can run `npm install` and get the exact same packages.",
        example: "When you run `npm start`, NPM looks inside `package.json` under the `scripts` object to find out what command `start` actually translates to (usually `ng serve`).",
        code: `{
  "name": "my-angular-app",
  "version": "1.0.0",
  "scripts": {
    "start": "ng serve",
    "build": "ng build"
  },
  "dependencies": {
    "@angular/core": "^16.0.0",
    "rxjs": "~7.8.0"
  },
  "devDependencies": {
    "typescript": "~5.0.0"
  }
}`,
        tip: "Explain the difference between `dependencies` (needed for production runtime) and `devDependencies` (needed only during local development).",
        mistake: "Manually editing versions in `package.json` without understanding Semantic Versioning (`^` vs `~`). It can break the app.",
        summary: "A JSON file that acts as the blueprint for the project, storing metadata, custom scripts, and the list of required packages."
    },
    {
        id: 38,
        title: "What is package-lock.json?",
        category: "Angular Fundamentals",
        language: "json",
        explanation: "While `package.json` specifies *acceptable version ranges* (e.g., `^16.0.0` means anything compatible with 16.x), `package-lock.json` records the **exact, highly specific version** of every single package (and its sub-dependencies) that was actually installed.\n\nThis guarantees 100% reproducible builds. If another developer runs `npm install`, they get the exact same dependency tree.",
        example: "If `package.json` says `^1.0.0`, NPM might install `1.0.5` today. Tomorrow, `1.0.6` is released. Without the lock file, your coworker gets `1.0.6`. With the lock file, NPM forces `1.0.5` for everyone.",
        code: `{
  "name": "my-angular-app",
  "lockfileVersion": 2,
  "dependencies": {
    "@angular/core": {
      "version": "16.0.2",
      "resolved": "https://registry.npmjs.org/@angular/core/-/core-16.0.2.tgz",
      "integrity": "sha512-..."
    }
  }
}`,
        tip: "Always commit `package-lock.json` to Git. Never put it in `.gitignore`.",
        mistake: "Deleting `package-lock.json` to 'fix' a broken install. This destroys the deterministic build and can introduce breaking changes from sub-dependencies.",
        summary: "An automatically generated file that locks down the exact version of every dependency to guarantee consistent installs across all machines."
    },
    {
        id: 39,
        title: "What is node_modules folder?",
        category: "Angular Fundamentals",
        language: "bash",
        explanation: "The `node_modules` folder is the physical directory where NPM downloads and extracts the actual source code for all the packages listed in your `package.json` (and their sub-dependencies).\n\nBecause modern apps rely on hundreds of packages, this folder often contains tens of thousands of files and is very large.",
        example: "When you type `import { Component } from '@angular/core'`, TypeScript actually looks inside `node_modules/@angular/core/` to find the code.",
        code: `# Never push this folder to Github!
# Ensure it is in your .gitignore file:

# .gitignore
/node_modules
/dist`,
        tip: "If your Angular app is acting weird after an update, deleting `node_modules` and running `npm install` (the 'turn it off and on again' approach) often fixes caching issues.",
        mistake: "Committing `node_modules` to Git. It will bloat your repository and cause merge conflicts.",
        summary: "The massive, automatically generated directory where NPM physically stores the code for all your project's dependencies."
    },
    {
        id: 40,
        title: "What are Services in Angular?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "A Service is a broad category encompassing any value, function, or feature that your application needs. In Angular, it is typically a TypeScript class decorated with `@Injectable()` that contains business logic, data access logic (HTTP calls), or state management.\n\nServices are entirely separated from UI components, adhering to the Single Responsibility Principle.",
        example: "A `UserService` that handles HTTP GET requests to fetch users from a database. Multiple components (UserList, UserProfile, UserNavbar) can all use this exact same service.",
        code: `import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Singleton available everywhere
})
export class UserService {
  private users = ['John', 'Jane'];

  getUsers() {
    return this.users;
  }
}`,
        tip: "Services are typically Singletons in Angular. The same instance is shared across the app.",
        mistake: "Putting API/HTTP calls directly inside a Component class instead of creating a Service. This makes the code untestable and impossible to reuse.",
        summary: "A class containing reusable business logic or data access logic, separate from UI components."
    },
    {
        id: 41,
        title: "Why do we need Services?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "We need Services for three main reasons:\n1. **Reusability:** If three different components need to fetch user data, you write the logic once in a service and share it, rather than duplicating the code.\n2. **Separation of Concerns:** Components should only care about *displaying* data (the View). Services care about *getting* and *processing* the data.\n3. **Testability:** Extracting complex logic into a service makes it much easier to write isolated Unit Tests.",
        example: "A `LoggingService` can be injected into 50 different components. If you want to change the logger from Console to an external API (like Application Insights), you only change the Service file, not 50 components.",
        code: `// Component only cares about UI
export class UserList {
  users: User[];
  
  // Component delegates the heavy lifting to the Service
  constructor(private userSvc: UserService) {
    this.users = this.userSvc.getUsersFromDatabase();
  }
}`,
        tip: "Explain that Services allow for 'State Sharing' between components that don't have a direct parent-child relationship in the DOM.",
        mistake: "Making components handle both UI presentation and business logic (creating a 'God Component').",
        summary: "To achieve code reusability, separation of concerns, easier testing, and state sharing between components."
    },
    {
        id: 42,
        title: "What is Dependency Injection?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "Dependency Injection (DI) is a design pattern in which a class requests dependencies from external sources rather than creating them itself. \n\nAngular has its own powerful built-in DI framework. Instead of a Component using the `new` keyword to create a Service, it simply asks for it in the constructor. Angular's Injector looks at the request, finds the service, instantiates it, and hands it to the component.",
        example: "Instead of making your own pizza from scratch (`new PizzaService()`), you just ask the waiter for a pizza in your constructor. The kitchen (Angular's Injector) makes it and hands it to you.",
        code: `// Anti-Pattern (Hardcoded Dependency)
export class UserComp {
  service = new UserService(); // Tight coupling!
}

// Angular DI Pattern
export class UserComp {
  // Angular automatically injects the instance here
  constructor(private service: UserService) {} 
}`,
        tip: "DI makes Unit Testing incredibly easy because you can inject a 'Mock' or 'Fake' service during testing without changing the component code.",
        mistake: "Using the `new` keyword to instantiate services inside components. This completely bypasses Angular's DI system and breaks Singleton sharing.",
        summary: "A design pattern where Angular automatically provides objects (dependencies) to a class rather than the class creating them manually."
    },
    {
        id: 43,
        title: "What are Providers?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "A Provider is an instruction to the Dependency Injection system on how to obtain a value for a dependency. When you request a service, the Injector looks at its list of Providers to see if it knows how to create that service.\n\nYou can register providers using the `providedIn: 'root'` syntax (modern), or in an NgModule's `providers` array (legacy/module-scoped).",
        example: "If you ask for an `ILogger`, the Provider acts as the map telling Angular: 'When someone asks for ILogger, give them an instance of ConsoleLogger'.",
        code: `// Modern approach (Tree-shakeable, highly recommended)
@Injectable({
  providedIn: 'root'
})
export class AuthService { }

// Legacy / Alternative approach (Module specific)
@NgModule({
  providers: [
    { provide: AuthService, useClass: AuthService } 
  ]
})
export class AppModule { }`,
        tip: "Explain `providedIn: 'root'`. It tells Angular to create a single, shared instance (Singleton) available everywhere, and allows for Tree-Shaking if the service is never actually used.",
        mistake: "Registering a service in both `providedIn: 'root'` AND a lazy-loaded module's `providers` array. This accidentally creates multiple instances of the service!",
        summary: "Instructions that tell the Angular Dependency Injector how to create or find a specific service."
    },
    {
        id: 44,
        title: "What is Constructor Injection?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "Constructor Injection is the specific mechanism Angular uses to implement Dependency Injection. When Angular instantiates a component, it looks at the component's `constructor()` parameters. By reading the TypeScript types, it figures out exactly which services to inject.",
        example: "If a component has `constructor(private http: HttpClient)`, Angular sees the `HttpClient` type, searches its registry, and injects it when the class is born.",
        code: `import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({ ... })
export class MyComponent {
  
  // The 'private' keyword is a TS shortcut that automatically 
  // assigns the injected service to 'this.dataService'
  constructor(private dataService: DataService) {
    this.dataService.fetchData();
  }
}`,
        tip: "If you write `constructor(dataService: DataService)` without an access modifier (`public`/`private`), it is only available inside the constructor. You must add the modifier to make it a class property.",
        mistake: "Trying to inject dependencies into lifecycle hooks like `ngOnInit()`. DI only happens in the constructor.",
        summary: "The process of declaring required services as parameters in a class constructor, allowing Angular to inject them automatically."
    },
    {
        id: 45,
        title: "What is Routing in Angular?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "Routing is the mechanism that allows navigation from one view to another in a Single Page Application (SPA). \n\nBecause a SPA only has one physical HTML file (`index.html`), the Angular Router reads the browser URL, stops the browser from refreshing, and dynamically swaps out components to simulate traditional web navigation.",
        example: "If the URL changes to `/profile`, the Router intercepts this, removes the `HomeComponent` from the screen, and loads the `ProfileComponent` in its place.",
        code: `import { Routes, RouterModule } from '@angular/router';

// Define the URL to Component mapping
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }`,
        tip: "The Angular Router is a separate library (`@angular/router`). It must be imported explicitly.",
        mistake: "Using standard `<a href=\"/profile\">` links. This tells the browser to make a server request, destroying the SPA experience. Use `<a routerLink=\"/profile\">`.",
        summary: "A mechanism that intercepts URL changes and dynamically loads components into the view without reloading the page."
    },
    {
        id: 46,
        title: "Why is Routing important?",
        category: "Angular Fundamentals",
        language: "html",
        explanation: "Routing is what makes a Single Page Application act like a real website. \n\n1. **Deep Linking:** It allows users to bookmark specific pages or share links (e.g., sending someone a link to `/product/5` directly).\n2. **Browser History:** It integrates with the browser's Back and Forward buttons.\n3. **Performance:** It enables Lazy Loading (loading code only when the user navigates to that route), drastically reducing initial load times.",
        example: "Without routing, your entire application would be stuck on `www.myapp.com`. Users couldn't share links to specific items, and pressing 'Back' would exit the app entirely.",
        code: `<!-- Routing allows dynamic parameter passing -->
<a [routerLink]="['/product', product.id]">View Item</a>

<!-- In the Component, we extract the ID from the URL -->
constructor(private route: ActivatedRoute) {
  const id = this.route.snapshot.paramMap.get('id');
}`,
        tip: "Emphasize that routing allows SPAs to retain the fundamental architecture of the web (URLs acting as universal pointers to state).",
        mistake: "Building a complex app by just hiding/showing divs using `*ngIf`. Without routing, the user experience breaks.",
        summary: "It enables deep linking, browser history (back/forward buttons), parameter passing, and lazy loading in a SPA."
    },
    {
        id: 47,
        title: "How do you configure Routes?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "Routes are configured by creating an array of objects of type `Routes`. Each object maps a URL `path` to an Angular `component`.\n\nYou then pass this array to the `RouterModule.forRoot()` method in the root module, or `RouterModule.forChild()` in feature modules.",
        example: "Mapping the path `login` to the `LoginComponent`, and establishing a wildcard path `**` to catch any invalid URLs and redirect to a 404 page.",
        code: `const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default
  { path: 'home', component: HomeComponent },
  { path: 'user/:id', component: UserDetailComponent }, // Parameter
  { path: '**', component: PageNotFoundComponent }      // Wildcard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }`,
        tip: "Always put the Wildcard route `**` at the very END of the array. The Router checks routes from top to bottom. If `**` is at the top, it catches everything!",
        mistake: "Forgetting to set `pathMatch: 'full'` when using an empty string `path: ''` for redirection. Without it, the router matches the empty string to every single route.",
        summary: "By defining an array of route objects (mapping paths to components) and registering them with `RouterModule.forRoot()`."
    },
    {
        id: 48,
        title: "What is Router Outlet?",
        category: "Angular Fundamentals",
        language: "html",
        explanation: "The `<router-outlet>` is a directive from the router library that acts as a placeholder or 'slot' in your HTML template. It marks the exact location in the DOM where the Router should insert the component mapped to the current URL.",
        example: "In your `app.component.html`, you put the Navbar and Footer permanently on the page. In between them, you place `<router-outlet>`. As the user navigates, only the middle section changes.",
        code: `<!-- app.component.html -->
<app-header></app-header> <!-- Static, always visible -->

<!-- The dynamic area. The Router injects components here! -->
<main class="container">
  <router-outlet></router-outlet> 
</main>

<app-footer></app-footer> <!-- Static, always visible -->`,
        tip: "You can have multiple router outlets on a page using 'Named Outlets' (e.g., `<router-outlet name=\"sidebar\"></router-outlet>`), allowing complex dashboard layouts.",
        mistake: "Forgetting to add `<router-outlet>` to your root template. If it's missing, the URL will change, but the screen will stay blank.",
        summary: "A directive that acts as a dynamic placeholder in the HTML where the Router injects the active component."
    },
    {
        id: 49,
        title: "What is RouterLink?",
        category: "Angular Fundamentals",
        language: "html",
        explanation: "`routerLink` is a directive used to bind HTML elements (like `<a>` tags or buttons) to an Angular route. \n\nUnlike a standard `href` attribute, which tells the browser to make a full HTTP request to the server, `routerLink` intercepts the click, updates the browser URL natively, and triggers the Angular Router to swap components internally.",
        example: "Clicking `<a routerLink=\"/settings\">` instantly loads the Settings component without a white-screen flash or page reload.",
        code: `<!-- Static Link -->
<a routerLink="/dashboard">Dashboard</a>

<!-- Dynamic Link using Property Binding -->
<a [routerLink]="['/user', user.id, 'details']">User Details</a>

<!-- Adding active class styling when the route is matched -->
<a routerLink="/home" routerLinkActive="active-menu-item">Home</a>`,
        tip: "Mention `routerLinkActive`. It automatically applies a CSS class to the element if its route matches the current URL (great for highlighting the active navbar item!).",
        mistake: "Using `href=\"/route\"`. This defeats the entire purpose of Angular by triggering a hard server reload.",
        summary: "A directive used in templates to navigate between routes without triggering a full browser page reload."
    },
    {
        id: 50,
        title: "What is Wildcard Routing?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "A Wildcard Route is a fallback route defined using two asterisks (`**`). It catches any URL that does not match the explicitly defined paths in your route configuration.\n\nIt is universally used to implement '404 Page Not Found' views or redirect users back to the home page if they type an invalid URL.",
        example: "If a user manually types `www.myapp.com/fake-page`, the router goes down the list, finds no match, hits the wildcard `**`, and displays a 404 component.",
        code: `const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  
  // WILDCARD MUST BE LAST!
  { path: '**', component: PageNotFoundComponent } 
];`,
        tip: "Order matters immensely in Angular routing. The router uses a 'first match wins' strategy. If you put `**` at the top of the array, every single click will go to the 404 page.",
        mistake: "Placing the wildcard route before child routes or feature module routes, causing valid URLs to be caught as 404s.",
        summary: "Using the `**` path to catch unrecognized URLs and display a '404 Not Found' component."
    },
    {
        id: 51,
        title: "How do Components communicate with each other?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "In Angular, components are isolated by default. They can communicate using several methods depending on their relationship in the DOM:\n\n1. **Parent to Child:** Using `@Input()` decorators.\n2. **Child to Parent:** Using `@Output()` decorators and `EventEmitter`.\n3. **Child to Parent (Direct Access):** Parent uses `@ViewChild()` to access the child's properties/methods directly.\n4. **Unrelated Components (Siblings):** Using a shared Service with RxJS `Subject` or `BehaviorSubject`.",
        example: "A `DashboardComponent` (Parent) passes a list of users to a `UserTableComponent` (Child) via `@Input()`. The child emits an `@Output()` event when a user clicks 'Delete'.",
        code: `<!-- Parent Template -->
<app-child 
  [data]="parentData" 
  (customEvent)="handleEvent($event)">
</app-child>`,
        tip: "When asked this in an interview, list all four methods quickly. It proves you understand the entire architectural scope, not just basic inputs.",
        mistake: "Trying to use local storage or window objects to pass data between tightly coupled parent/child components.",
        summary: "Via @Input() (Parent to Child), @Output() (Child to Parent), @ViewChild() (Direct Access), or Shared Services (Unrelated)."
    },
    {
        id: 52,
        title: "What is @Input()?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "The `@Input()` decorator is used in a Child component to mark a property as an entry point for data coming from its Parent component. It allows data to flow downwards (One-Way Data Binding).",
        example: "A `UserProfile` component needs to know *which* user to display. It exposes an `@Input() user` property so the parent can pass the user object into it.",
        code: `// CHILD COMPONENT
export class ChildComponent {
  // Exposes 'message' to the outside world
  @Input() message: string = ''; 
}

<!-- PARENT TEMPLATE -->
<!-- Passes the string 'Hello' into the child's message property -->
<app-child [message]="'Hello'"></app-child>`,
        tip: "You can alias an input like this: `@Input('my-name') name: string`. The parent binds to `[my-name]`, but the child uses `this.name`.",
        mistake: "Trying to use `@Input()` to pass data *up* to the parent. Inputs are strictly for downward data flow.",
        summary: "A decorator used to receive data from a parent component into a child component."
    },
    {
        id: 53,
        title: "What is @Output()?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "The `@Output()` decorator is used in a Child component to emit data or events *upwards* to its Parent component. \n\nBecause data in Angular flows one-way (downwards), a child cannot mutate the parent's data directly. Instead, it must 'shout' an event using an `EventEmitter`, and the parent 'listens' to that event.",
        example: "A 'Save' button inside a modal (Child) is clicked. The modal emits a `saveClicked` event to the Page (Parent) so the page knows to execute the API call.",
        code: `// CHILD COMPONENT
export class ChildComponent {
  @Output() dataChanged = new EventEmitter<string>();

  sendData() {
    this.dataChanged.emit('New Data!'); // Shout the event!
  }
}

<!-- PARENT TEMPLATE -->
<!-- Listen to the event using ( ) -->
<app-child (dataChanged)="onDataReceived($event)"></app-child>`,
        tip: "Always combine `@Output()` with `EventEmitter`. They are inseparable in this context.",
        mistake: "Forgetting to call `.emit()` on the EventEmitter, causing the parent to never hear the event.",
        summary: "A decorator used alongside EventEmitter to send custom events and data from a child component up to a parent component."
    },
    {
        id: 54,
        title: "What is EventEmitter?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "`EventEmitter` is an Angular-specific class (which extends RxJS `Subject`) used exclusively in components alongside the `@Output()` decorator to emit custom events synchronously or asynchronously. \n\nIt provides the `.emit(value)` method which broadcasts the value to any parent component listening.",
        example: "A custom `<app-toggle>` switch component uses `EventEmitter<boolean>` to tell the parent form whenever it is toggled on or off.",
        code: `import { EventEmitter, Output } from '@angular/core';

export class CounterComponent {
  // Strongly typed to only emit numbers
  @Output() countChange = new EventEmitter<number>();
  
  counter = 0;

  increment() {
    this.counter++;
    // Broadcast the new value to the parent
    this.countChange.emit(this.counter); 
  }
}`,
        tip: "You can optionally strongly type the EventEmitter using Generics: `EventEmitter<string>`, `EventEmitter<User>`, or `EventEmitter<void>` if no payload is sent.",
        mistake: "Using `EventEmitter` in an Angular Service to share state. While it technically works, best practice dictates using RxJS `Subject` or `BehaviorSubject` in services.",
        summary: "A class used with @Output() to emit custom events containing a payload to parent components."
    },
    {
        id: 55,
        title: "How can Parent pass data to Child?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "A Parent passes data to a Child by using **Property Binding** `[ ]` in the parent's HTML template, binding to a property in the child that is decorated with **`@Input()`**.",
        example: "Parent component has an array of tasks. It iterates over them and passes each individual task to a `<task-card>` child component.",
        code: `// CHILD
export class Child {
  @Input() taskName: string;
}

// PARENT
export class Parent {
  currentTask = 'Do Laundry';
}

<!-- PARENT HTML -->
<app-child [taskName]="currentTask"></app-child>`,
        tip: "This is the most common and standard way of communicating in Angular. It strictly follows the 'Unidirectional Data Flow' architecture.",
        mistake: "Trying to modify the `@Input` property directly inside the child component. While it won't crash, it breaks unidirectional data flow and makes bugs hard to track.",
        summary: "By using `@Input()` in the child class and Property Binding `[property]=\"value\"` in the parent's template."
    },
    {
        id: 56,
        title: "How can Child pass data to Parent?",
        category: "Angular Fundamentals",
        language: "typescript",
        explanation: "A Child passes data to a Parent by creating an **`EventEmitter`** decorated with **`@Output()`**, calling `.emit(data)`, and the Parent listens to this event using **Event Binding** `( )` in the HTML.",
        example: "A child component has a text input. When the user types, the child emits the current string up to the parent to be saved.",
        code: `// CHILD
export class Child {
  @Output() reply = new EventEmitter<string>();
  
  send() { this.reply.emit('Hi Parent!'); }
}

// PARENT HTML
<!-- $event contains the emitted string ('Hi Parent!') -->
<app-child (reply)="handleReply($event)"></app-child>`,
        tip: "The payload data is ALWAYS accessible in the parent's HTML using the special `$event` variable.",
        mistake: "Naming the `@Output()` event the same as a native DOM event (like `click`). It causes confusion between the custom event and the native click event.",
        summary: "By emitting events using `@Output()` + `EventEmitter` in the child, and listening to them using Event Binding `(event)=\"fn($event)\"` in the parent."
    },
    {
        id: 57,
        title: "What is Template Reference Variable?",
        category: "Angular Fundamentals",
        language: "html",
        explanation: "A Template Reference Variable is a way to create a local variable in your HTML template that holds a direct reference to a DOM element, an Angular component, or a directive. \n\nIt is defined using a hash symbol (`#`) followed by the variable name.",
        example: "If you have an input field and want to get its value when a button is clicked, you can place `#myInput` on the input, and pass `myInput.value` to the button's click handler.",
        code: `<!-- #phone is the Template Reference Variable -->
<input type="text" #phone placeholder="Phone Number">

<!-- We pass the raw HTMLInputElement to the function -->
<button (click)="callNumber(phone.value)">Call</button>

<!-- Referencing an Angular Component -->
<app-timer #myTimer></app-timer>
<button (click)="myTimer.start()">Start Timer</button>`,
        tip: "Template reference variables are strictly local to the template where they are defined. You cannot access them from another component's template.",
        mistake: "Using Template Reference Variables extensively instead of Reactive Forms or `[(ngModel)]`. They are best used for simple, localized DOM manipulation.",
        summary: "A variable created in the template using the `#` symbol that provides a direct reference to a DOM element or component."
    },
    {
        id: 58,
        title: "What is Content Projection?",
        category: "Angular Fundamentals",
        language: "html",
        explanation: "Content Projection is a pattern in which you inject (project) HTML content from a parent component into a specified slot within a child component's template.\n\nIt is achieved using the `<ng-content></ng-content>` tag inside the child component. It allows you to create highly reusable 'wrapper' components.",
        example: "Creating a reusable `<app-card>` component. The card has a standard border and shadow, but the *contents* of the card (text, images, forms) are projected into it by whatever parent uses the card.",
        code: `<!-- CHILD (app-card.html) -->
<div class="card-styling">
  <!-- Projected content goes here! -->
  <ng-content></ng-content> 
</div>

<!-- PARENT -->
<app-card>
  <!-- This HTML is projected into the child -->
  <h2>Title</h2>
  <p>Some text...</p>
</app-card>`,
        tip: "Content projection is Angular's equivalent of React's `children` prop, or Vue's `<slot>`.",
        mistake: "Putting Angular directives (like `*ngIf` or `*ngFor`) directly on the `<ng-content>` tag. It won't work as expected. Wrap `<ng-content>` in an `ng-container` instead.",
        summary: "Injecting HTML content from a parent component into a child component using the `<ng-content>` tag."
    },
    {
        id: 59,
        title: "When should Content Projection be used?",
        category: "Angular Fundamentals",
        language: "html",
        explanation: "Content Projection should be used when creating structural, presentational, or layout components (like Cards, Modals, Accordions, Tabs, or Dropdowns) where the child component controls the *layout/styling*, but the parent component provides the *actual content*.",
        example: "A custom Modal component. The Modal component handles the dark overlay, the 'X' close button, and the centering logic. But the parent projects the actual form or text into the middle of the modal.",
        code: `<!-- A reusable Modal using projection -->
<app-modal>
  <!-- The parent decides what goes inside -->
  <form (submit)="save()">
    <input type="text">
    <button>Submit</button>
  </form>
</app-modal>`,
        tip: "If the child component needs to heavily interact with or manipulate the data, use `@Input()`. If the child just needs to visually wrap the data with CSS, use Content Projection.",
        mistake: "Trying to pass a massive array of objects via `@Input()` to a card component just so the card can loop through and display text. The card shouldn't care about the data; project the HTML instead.",
        summary: "When building highly reusable layout components (Modals, Cards, Tabs) where the parent dictates the internal content."
    },
    {
        id: 60,
        title: "What are Content Projection Slots?",
        category: "Angular Fundamentals",
        language: "html",
        explanation: "Multiple-slot Content Projection allows a child component to define several distinct `<ng-content>` slots, and the parent can inject different pieces of HTML into those specific slots using CSS selectors (usually the `select` attribute).\n\nThis is essential for complex components that have distinct zones (like a Header, Body, and Footer).",
        example: "A Card component with a specific slot for the title, a slot for the main content, and a slot for the action buttons.",
        code: `<!-- CHILD (app-card.html) -->
<div class="card">
  <div class="header">
    <ng-content select="[card-header]"></ng-content>
  </div>
  <div class="body">
    <ng-content select="[card-body]"></ng-content>
  </div>
</div>

<!-- PARENT -->
<app-card>
  <h2 card-header>User Profile</h2>
  <p card-body>Name: John Doe</p>
</app-card>`,
        tip: "The `select` attribute accepts any valid CSS selector: tags (`h1`), classes (`.my-class`), or attributes (`[my-attr]`). Attribute selectors are the most common and robust approach.",
        mistake: "Forgetting that a naked `<ng-content>` (with no `select` attribute) will catch *all* projected content that doesn't match any other specific slot.",
        summary: "Using the `select` attribute on `<ng-content>` to direct specific pieces of projected HTML into specific areas of the child component."
    },
    {
        id: 61,
        title: "What are Lifecycle Hooks?",
        category: "Lifecycle Hooks",
        language: "typescript",
        explanation: "Lifecycle hooks are specific methods in Angular that allow you to tap into key moments in a component's or directive's existence. \n\nFrom the moment Angular instantiates a component, through its rendering, data changes, and ultimate destruction, Angular fires these hook methods, allowing developers to execute custom logic at exactly the right time.",
        example: "If you need to fetch user data from an API, you shouldn't do it as soon as the class is created (in the constructor), you should wait until Angular has fully initialized the component's inputs. You use the `ngOnInit` hook for this.",
        code: `import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({ ... })
export class MyComponent implements OnInit, OnDestroy {
  // Hook 1: Initialization
  ngOnInit() {
    console.log('Component is ready!');
  }

  // Hook 2: Destruction
  ngOnDestroy() {
    console.log('Component is being removed from the DOM');
  }
}`,
        tip: "Always implement the corresponding interface (e.g., `implements OnInit`) when using a lifecycle hook. While Angular will call the method anyway, TypeScript will enforce type safety if you use the interface.",
        mistake: "Putting heavy DOM manipulation or API calls in the class `constructor()`. The constructor is for basic dependency injection only.",
        summary: "Special methods that allow developers to execute logic at specific stages of a component's lifecycle (creation, updates, destruction)."
    },
    {
        id: 62,
        title: "List the Angular Lifecycle Hooks in order.",
        category: "Lifecycle Hooks",
        language: "typescript",
        explanation: "When a component is instantiated, Angular executes its lifecycle hooks in this strict chronological order:\n\n1. `ngOnChanges()`\n2. `ngOnInit()`\n3. `ngDoCheck()`\n4. `ngAfterContentInit()`\n5. `ngAfterContentChecked()`\n6. `ngAfterViewInit()`\n7. `ngAfterViewChecked()`\n8. `ngOnDestroy()`",
        example: "`ngOnChanges` fires first because the component needs to receive its `@Input()` data before it can initialize (`ngOnInit`).",
        code: `// The typical flow you will use 90% of the time:
export class LifecycleDemo implements OnInit, OnDestroy {
  constructor() {
    // 1. Setup Dependencies
  }

  ngOnInit() {
    // 2. Fetch Data
  }

  ngOnDestroy() {
    // 3. Clean up (unsubscribe)
  }
}`,
        tip: "In interviews, they rarely ask you to recite all 8 perfectly. Focus on mastering `ngOnChanges`, `ngOnInit`, `ngAfterViewInit`, and `ngOnDestroy`.",
        mistake: "Assuming `ngOnInit` fires before `ngOnChanges`. `ngOnChanges` must fire first to populate the `@Input` properties.",
        summary: "OnChanges -> OnInit -> DoCheck -> AfterContentInit -> AfterContentChecked -> AfterViewInit -> AfterViewChecked -> OnDestroy."
    },
    {
        id: 63,
        title: "What is ngOnChanges()?",
        category: "Lifecycle Hooks",
        language: "typescript",
        explanation: "`ngOnChanges()` is a lifecycle hook that is called before `ngOnInit()`, and then repeatedly every time Angular detects a change to one or more data-bound input properties (`@Input()`).\n\nIt receives a `SimpleChanges` object containing the current and previous property values.",
        example: "A `UserCardComponent` takes an `@Input() userId`. If the parent changes the `userId` from 1 to 2, `ngOnChanges` fires so the child knows it needs to fetch the new user's data.",
        code: `import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

export class ChildComponent implements OnChanges {
  @Input() myData: string;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['myData']) {
      const prev = changes['myData'].previousValue;
      const curr = changes['myData'].currentValue;
      console.log(\`Data changed from \${prev} to \${curr}\`);
    }
  }
}`,
        tip: "`ngOnChanges` only fires if the *reference* of the `@Input` property changes. If you mutate an object or array without changing its reference, `ngOnChanges` will NOT fire.",
        mistake: "Using `ngOnChanges` for complex logic that runs on every keystroke. It can severely impact performance if not carefully managed.",
        summary: "A hook that fires when a component's `@Input()` properties change, providing the previous and current values."
    },
    {
        id: 64,
        title: "What is ngOnInit()?",
        category: "Lifecycle Hooks",
        language: "typescript",
        explanation: "`ngOnInit()` is the most frequently used lifecycle hook. It is called exactly once, immediately after the first `ngOnChanges()`. \n\nIt indicates that Angular has finished setting up the component and all `@Input()` properties are fully initialized and ready for use. This is the standard place to put initialization logic, such as fetching data from a backend API.",
        example: "A Dashboard component uses `ngOnInit` to call the `UserService` and load the initial list of users when the page loads.",
        code: `export class DashboardComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {
    // Too early to fetch data here! @Inputs aren't ready.
  }

  ngOnInit() {
    // Perfect place to fetch data
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}`,
        tip: "Always distinguish `ngOnInit` from the `constructor`. The constructor is for DI; `ngOnInit` is for component initialization logic.",
        mistake: "Trying to read the DOM or manipulate `@ViewChild` elements in `ngOnInit`. The HTML view hasn't been rendered yet! (Use `ngAfterViewInit` for that).",
        summary: "A hook called once after component creation and input initialization. Used primarily for initial data fetching."
    },
    {
        id: 65,
        title: "What is ngDoCheck()?",
        category: "Lifecycle Hooks",
        language: "typescript",
        explanation: "`ngDoCheck()` is a lifecycle hook invoked during every single change detection run. It allows developers to implement their own custom change detection logic or algorithm.\n\nAngular calls this hook constantly, so it is usually used to detect mutations in arrays or objects that Angular's default change detection (which looks for reference changes) misses.",
        example: "If you push an item into an array `list.push('apple')`, the array's reference hasn't changed, so `ngOnChanges` won't fire. But `ngDoCheck` will fire, allowing you to manually react to the new item.",
        code: `export class MyComponent implements DoCheck {
  @Input() userList: string[] = [];
  oldLength = 0;

  ngDoCheck() {
    // Custom logic to check for array mutations
    if (this.userList.length !== this.oldLength) {
      console.log('The array was mutated!');
      this.oldLength = this.userList.length;
    }
  }
}`,
        tip: "Avoid using `ngDoCheck` if possible. Because it runs on every mouse movement and keystroke, heavy logic here will instantly freeze your application.",
        mistake: "Using `ngDoCheck` alongside `ngOnChanges`. They will often conflict. Choose one or the other.",
        summary: "A hook that runs on every change detection cycle, allowing developers to manually detect changes (like object mutations) that Angular ignores."
    },
    {
        id: 66,
        title: "What is ngAfterContentInit()?",
        category: "Lifecycle Hooks",
        language: "typescript",
        explanation: "`ngAfterContentInit()` is called exactly once after Angular has fully projected external content into the component's view using `<ng-content>`.\n\nThis is the first time you can safely access projected elements using `@ContentChild`.",
        example: "A custom Accordion component uses this hook to look inside itself, find all the `<accordion-panel>` elements that the parent projected into it, and close all of them except the first one.",
        code: `export class AccordionComponent implements AfterContentInit {
  // Grabs elements projected via <ng-content>
  @ContentChild('header') headerEl: ElementRef;

  ngAfterContentInit() {
    // It is now safe to manipulate the projected content
    console.log(this.headerEl.nativeElement.innerText);
  }
}`,
        tip: "Differentiate this from `ngAfterViewInit`. ContentInit is for projected content (`<ng-content>`), ViewInit is for the component's own HTML template.",
        mistake: "Trying to access `@ContentChild` inside `ngOnInit`. It will be undefined because projection hasn't happened yet.",
        summary: "A hook called once after external content has been projected into the component via `<ng-content>`."
    },
    {
        id: 67,
        title: "What is ngAfterContentChecked()?",
        category: "Lifecycle Hooks",
        language: "typescript",
        explanation: "`ngAfterContentChecked()` is invoked after the default change detector has completed checking all of the projected content (`<ng-content>`) for changes.\n\nIt runs frequently (after `ngAfterContentInit` and every subsequent `ngDoCheck`).",
        example: "If the parent component dynamically changes the text it is projecting into your custom Card component, this hook fires to let the Card know the projected data just updated.",
        code: `export class CardComponent implements AfterContentChecked {
  ngAfterContentChecked() {
    // Runs every time the projected content is checked for changes
    // Keep logic extremely lightweight here!
  }
}`,
        tip: "Like `ngDoCheck`, this hook fires constantly. Do not put HTTP requests or heavy processing here.",
        mistake: "Triggering a state change inside this hook. Doing so often results in the dreaded `ExpressionChangedAfterItHasBeenCheckedError`.",
        summary: "A hook called after every change detection cycle that checks the projected `<ng-content>` for updates."
    },
    {
        id: 68,
        title: "What is ngAfterViewInit()?",
        category: "Lifecycle Hooks",
        language: "typescript",
        explanation: "`ngAfterViewInit()` is called exactly once after Angular has fully initialized the component's HTML view (and its child components' views).\n\nThis is the absolute earliest moment you can safely manipulate the DOM or access elements using `@ViewChild`.",
        example: "You want to attach a third-party JavaScript charting library (like Chart.js) to a `<canvas>` element in your template. You must wait for `ngAfterViewInit` so the `<canvas>` actually exists in the DOM.",
        code: `export class ChartComponent implements AfterViewInit {
  // Grabs the <canvas #myChart> element from the HTML
  @ViewChild('myChart') chartElement: ElementRef;

  ngAfterViewInit() {
    // The DOM is ready. We can safely initialize the chart!
    new Chart(this.chartElement.nativeElement, { ... });
  }
}`,
        tip: "If you try to access `@ViewChild` in `ngOnInit`, it will almost always be `undefined`. You must use `ngAfterViewInit`.",
        mistake: "Modifying component variables (like `this.loading = false`) inside this hook. Because Angular has already rendered the view based on `this.loading = true`, changing it here throws an error.",
        summary: "A hook called once after the component's HTML template and child views are fully rendered. Essential for DOM manipulation."
    },
    {
        id: 69,
        title: "What is ngAfterViewChecked()?",
        category: "Lifecycle Hooks",
        language: "typescript",
        explanation: "`ngAfterViewChecked()` is called after the default change detector has completed checking a component's view (and child views) for changes.\n\nIt runs frequently, firing after `ngAfterViewInit` and every subsequent `ngAfterContentChecked`.",
        example: "If you have a chat application and you need the message window to automatically scroll to the bottom every time a new message is added to the DOM, you would trigger the scroll logic here.",
        code: `export class ChatComponent implements AfterViewChecked {
  @ViewChild('scrollContainer') container: ElementRef;

  ngAfterViewChecked() {
    // The view just updated, ensure we are scrolled to the bottom
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.container.nativeElement.scrollTop = this.container.nativeElement.scrollHeight;
  }
}`,
        tip: "Because it fires so often, any heavy logic here will destroy app performance.",
        mistake: "Updating data bindings in this hook. The view has already been checked. Changing data here will immediately trigger an `ExpressionChangedAfterItHasBeenCheckedError`.",
        summary: "A hook called after every change detection cycle that checks the component's view and child views."
    },
    {
        id: 70,
        title: "What is ngOnDestroy()?",
        category: "Lifecycle Hooks",
        language: "typescript",
        explanation: "`ngOnDestroy()` is the final lifecycle hook. It is called exactly once, right before Angular destroys the component and removes it from the DOM.\n\nThis is the most critical hook for preventing Memory Leaks. It is used to unsubscribe from RxJS Observables, detach DOM event listeners, and stop `setInterval` timers.",
        example: "If a component subscribes to a global WebSocket for stock prices, navigating to a new page destroys the component. If you don't unsubscribe in `ngOnDestroy`, the WebSocket keeps running invisibly in the background, consuming memory.",
        code: `export class StockTicker implements OnInit, OnDestroy {
  private subscription: Subscription;

  ngOnInit() {
    // Create the subscription
    this.subscription = this.stockService.getPrices().subscribe();
  }

  ngOnDestroy() {
    // CRITICAL: Clean up memory
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}`,
        tip: "Interviewers will absolutely ask about this hook. Always answer: 'It is used for memory cleanup, specifically unsubscribing from observables.'",
        mistake: "Forgetting to implement this hook in a component that utilizes long-lived Observables (like `Router` events or custom `Subjects`).",
        summary: "A hook called just before a component is destroyed, used exclusively for memory cleanup and unsubscribing from observables."
    },
    {
        id: 71,
        title: "Difference between Constructor and ngOnInit?",
        category: "Lifecycle Hooks",
        language: "typescript",
        explanation: "The `constructor` is a standard JavaScript/TypeScript feature used to instantiate the class. In Angular, it should be used exclusively for **Dependency Injection**.\n\n`ngOnInit` is an Angular-specific lifecycle hook. It executes after the constructor, after Angular has attached the component to the DOM, and after `@Input()` properties have been bound. It is the place for **Component Initialization Logic** (like API calls).",
        example: "The Constructor is hiring the builder and giving them the tools. `ngOnInit` is telling the builder to actually start building the house.",
        code: `export class ExampleComponent implements OnInit {
  @Input() userId: string;

  // 1. Constructor fires first. userId is UNDEFINED here!
  constructor(private http: HttpClient) {
    console.log(this.userId); // undefined
  }

  // 2. ngOnInit fires second. userId is ready!
  ngOnInit() {
    console.log(this.userId); // '123'
    this.http.get('/api/users/' + this.userId).subscribe(...);
  }
}`,
        tip: "A classic interview question. Remember: Constructor = DI. ngOnInit = API calls and Initialization.",
        mistake: "Calling HTTP services inside the constructor. It makes the component very difficult to unit test and delays the component's rendering.",
        summary: "Constructor is a TS feature used for Dependency Injection. ngOnInit is an Angular hook used for actual component logic and data fetching."
    },
    {
        id: 72,
        title: "Why should we unsubscribe in ngOnDestroy?",
        category: "Lifecycle Hooks",
        language: "typescript",
        explanation: "If a component subscribes to an Observable (especially infinite streams like DOM events, Router events, or global state Subjects) and is subsequently destroyed by the Router, the subscription **does not die**. \n\nIt remains active in memory, running in the background. If the user navigates back to the component, a *second* subscription is created. This causes severe Memory Leaks, degraded performance, and duplicated API calls.",
        example: "You subscribe to a 'ChatMessages' stream. You leave the chat page. If you didn't unsubscribe, the app continues downloading messages in the background. If you enter the chat page 5 times, you are downloading every message 5 times simultaneously.",
        code: `export class HeavyComponent implements OnDestroy {
  // Using the 'Subject/takeUntil' pattern (Best Practice)
  private destroy$ = new Subject<void>();

  ngOnInit() {
    this.dataService.getData()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => console.log(data));
  }

  ngOnDestroy() {
    this.destroy$.next(); // Kills all active subscriptions instantly
    this.destroy$.complete();
  }
}`,
        tip: "Note that you do NOT strictly need to unsubscribe from Angular's `HttpClient` requests, because HTTP observables automatically complete and close themselves after one response. But it is good practice to unsubscribe anyway.",
        mistake: "Using `subscription.unsubscribe()` manually on 10 different variables instead of using the much cleaner `takeUntil(destroy$)` RxJS operator pattern.",
        summary: "To prevent Memory Leaks and zombie processes caused by continuous background streams remaining active after a component is removed from the DOM."
    },
    {
        id: 73,
        title: "What is Template Driven Form?",
        category: "Forms & Validation",
        language: "html",
        explanation: "Template Driven Forms are the traditional, HTML-heavy way of building forms in Angular. The structure, logic, and validation rules are defined almost entirely within the HTML template using directives like `ngModel`, `required`, and `minlength`.\n\nAngular automatically generates the underlying Form Model in the background.",
        example: "A simple 'Contact Us' form with Name, Email, and Message fields, where simple HTML attributes manage the validation.",
        code: `<!-- Must import FormsModule in AppModule -->
<form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm.value)">
  
  <input type="text" name="username" ngModel required minlength="3">
  
  <button type="submit" [disabled]="contactForm.invalid">Submit</button>
  
</form>`,
        tip: "Template Driven forms are great for simple use cases, but they become highly unmanageable for complex, dynamic enterprise forms.",
        mistake: "Trying to implement complex cross-field validation (e.g., 'Password and Confirm Password must match') in a Template Driven form. It is notoriously difficult.",
        summary: "Forms where the logic and validation rules are defined directly in the HTML template using Angular directives."
    },
    {
        id: 74,
        title: "What is Reactive Form?",
        category: "Forms & Validation",
        language: "typescript",
        explanation: "Reactive Forms are the robust, scalable, code-driven approach to building forms in Angular. The entire form structure, logic, and validation rules are explicitly defined in the TypeScript Component Class.\n\nThe HTML template merely binds to this programmatic model. They are synchronous, highly testable, and handle complex scenarios effortlessly.",
        example: "A massive multi-step checkout wizard with dynamic fields (e.g., 'If country is US, add a State dropdown') requires the programmable power of Reactive Forms.",
        code: `// Must import ReactiveFormsModule in AppModule
import { FormGroup, FormControl, Validators } from '@angular/forms';

export class RegistrationComponent {
  // Define the form entirely in TypeScript
  regForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.email])
  });

  submit() {
    console.log(this.regForm.value); // { username: '...', email: '...' }
  }
}

<!-- HTML simply syncs with the TS object -->
<form [formGroup]="regForm" (ngSubmit)="submit()">
  <input formControlName="username">
  <input formControlName="email">
</form>`,
        tip: "Reactive Forms are heavily preferred in enterprise Angular development. If an interviewer asks which one you prefer, always advocate for Reactive Forms.",
        mistake: "Mixing `ngModel` inside a Reactive Form. While possible in older Angular versions, it is highly discouraged and violates the reactive paradigm.",
        summary: "Forms where the structure and validation logic are explicitly defined in the TypeScript class, providing immense control and scalability."
    },
    {
        id: 75,
        title: "Difference between Template Driven and Reactive Forms?",
        category: "Forms & Validation",
        language: "typescript",
        explanation: "The core difference lies in where the source of truth resides.\n\n**Template Driven:**\n- Source of Truth: HTML Template\n- Setup: Easy (uses `FormsModule`)\n- Data Flow: Asynchronous\n- Testing: Difficult (requires rendering the DOM)\n- Scalability: Poor\n\n**Reactive Forms:**\n- Source of Truth: TypeScript Class\n- Setup: Requires more code (`ReactiveFormsModule`)\n- Data Flow: Synchronous\n- Testing: Extremely easy (pure logic, no DOM needed)\n- Scalability: Excellent",
        example: "If you need a basic Login form, Template Driven is fine. If you need a dynamic tax-return application, you MUST use Reactive Forms.",
        code: `// Template Driven setup
imports: [ FormsModule ]

// Reactive Form setup
imports: [ ReactiveFormsModule ]`,
        tip: "Focus on the 'Testing' aspect in interviews. Because Reactive Forms are just TS objects, you can unit test validation rules without spinning up an expensive DOM testing environment.",
        mistake: "Using Template Driven forms for dynamic UIs (where input fields are added or removed on the fly). It requires painful hacky workarounds.",
        summary: "Template Driven relies on HTML directives and is suited for simple forms. Reactive relies on explicit TypeScript objects and is suited for complex, scalable, testable forms."
    },
    {
        id: 76,
        title: "What is FormBuilder?",
        category: "Forms & Validation",
        language: "typescript",
        explanation: "`FormBuilder` is an injectable syntactic sugar service provided by Angular to make creating complex Reactive Forms much cleaner and less verbose. \n\nInstead of manually typing `new FormGroup()` and `new FormControl()` dozens of times, `FormBuilder` provides factory methods (`group()`, `control()`, `array()`) that vastly reduce boilerplate code.",
        example: "Building a form with 10 fields manually requires repeating `new FormControl()` 10 times. `FormBuilder` reduces this to a clean JSON-like structure.",
        code: `// 1. Verbose approach without FormBuilder
this.form = new FormGroup({
  name: new FormControl('', Validators.required),
  age: new FormControl(18)
});

// 2. Clean approach with FormBuilder
constructor(private fb: FormBuilder) {
  this.form = this.fb.group({
    name: ['', Validators.required],
    age: [18]
  });
}`,
        tip: "Always inject `FormBuilder` via dependency injection (`constructor(private fb: FormBuilder)`). It shows you write clean, modern code.",
        mistake: "Not using FormBuilder in large forms, resulting in massive, unreadable constructor blocks.",
        summary: "An Angular service that provides syntactic sugar to drastically reduce the boilerplate code required to build Reactive Forms."
    },
    {
        id: 77,
        title: "What is FormGroup?",
        category: "Forms & Validation",
        language: "typescript",
        explanation: "A `FormGroup` is an essential class in Reactive Forms that groups a collection of child controls (`FormControl`, `FormArray`, or other nested `FormGroups`) into one single object.\n\nIt tracks the value and validation status of all its children. If a single child control is invalid, the entire `FormGroup` becomes invalid.",
        example: "A `checkoutForm` (FormGroup) contains 'firstName', 'lastName', and a nested 'billingAddress' (another FormGroup).",
        code: `this.profileForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  
  // Nested FormGroup for grouped data
  address: new FormGroup({
    street: new FormControl(''),
    city: new FormControl('')
  })
});

// Output: { firstName: '', lastName: '', address: { street: '', city: '' } }
console.log(this.profileForm.value);`,
        tip: "FormGroups directly map to JSON objects. The structure of your FormGroup will exactly match the JSON payload you send to your API.",
        mistake: "Failing to utilize nested FormGroups for complex nested JSON data, resulting in flat, messy form architectures.",
        summary: "A class that aggregates the values and validation statuses of multiple form controls into a single object."
    },
    {
        id: 78,
        title: "What is FormControl?",
        category: "Forms & Validation",
        language: "typescript",
        explanation: "A `FormControl` is the fundamental building block of Reactive Forms. It tracks the value and validation status of a *single, individual* form input field (like a text box, checkbox, or radio button).",
        example: "A text input for 'Email Address' is backed by a single `FormControl`. You can programmatically set its value, disable it, or check if it has errors.",
        code: `// Initialize with a default value and a validator
const emailControl = new FormControl('test@test.com', Validators.required);

console.log(emailControl.value); // 'test@test.com'
console.log(emailControl.valid); // true

// Programmatically update the field
emailControl.setValue('new@test.com');

// Disable the field (grays out the UI input)
emailControl.disable();`,
        tip: "You can listen to real-time changes on a specific input field using `emailControl.valueChanges.subscribe(...)`.",
        mistake: "Confusing `setValue()` and `patchValue()`. (Note: `setValue` requires you to update every property in a FormGroup, `patchValue` allows partial updates).",
        summary: "A class that tracks the value and validation state of a single, distinct form input element."
    },
    {
        id: 79,
        title: "What is FormArray?",
        category: "Forms & Validation",
        language: "typescript",
        explanation: "A `FormArray` is an alternative to `FormGroup` for managing a collection of form controls. While a `FormGroup` uses string keys (like an Object), a `FormArray` uses index numbers (like an Array).\n\nIt is incredibly powerful for handling dynamic forms where the user can add or remove an unknown number of identical fields at runtime.",
        example: "A 'Skills' section on a resume builder. The user clicks 'Add Skill' to dynamically generate new text inputs. You push new `FormControl` instances into the `FormArray`.",
        code: `// Initialize an empty FormArray
const skillsArray = new FormArray([]);

// Dynamically add a new input field
skillsArray.push(new FormControl('Angular'));
skillsArray.push(new FormControl('TypeScript'));

// Output: ['Angular', 'TypeScript']
console.log(skillsArray.value); 

// Dynamically remove the first field
skillsArray.removeAt(0);`,
        tip: "In the HTML template, you iterate over a FormArray using `*ngFor=\"let control of skillsArray.controls; let i = index\"` and bind inputs to `[formControlName]=\"i\"`.",
        mistake: "Trying to use a FormGroup when the data structure requires an array of items. Use FormArray for dynamic lists.",
        summary: "An indexed array of form controls, perfect for managing dynamic, repeatable form fields where the total count is unknown."
    },
    {
        id: 80,
        title: "How do you implement Validations in Reactive Forms?",
        category: "Forms & Validation",
        language: "typescript",
        explanation: "In Reactive Forms, validations are implemented in the TypeScript component class by passing synchronous or asynchronous Validator functions to the `FormControl` upon initialization.\n\nAngular provides built-in validators inside the `Validators` class.",
        example: "Requiring a username to be mandatory, at least 5 characters long, and matching a specific Regex pattern.",
        code: `import { FormBuilder, Validators } from '@angular/forms';

export class FormComponent {
  loginForm = this.fb.group({
    // Syntax: [initialValue, [SyncValidators], [AsyncValidators]]
    username: ['', [
      Validators.required, 
      Validators.minLength(5),
      Validators.pattern('^[a-zA-Z]+$') // Only letters allowed
    ]],
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(private fb: FormBuilder) {}
}`,
        tip: "If a field has errors, you can access them in the HTML via `loginForm.get('username').hasError('required')` to display a red error message.",
        mistake: "Putting HTML5 validation attributes (like `required` or `minlength`) on the `<input>` tags when using Reactive Forms. Keep validation strictly in the TS code.",
        summary: "By passing functions from the built-in `Validators` class directly into the FormControl configuration array in the TypeScript class."
    },
    {
        id: 81,
        title: "How do you create Custom Validators?",
        category: "Forms & Validation",
        language: "typescript",
        explanation: "When built-in validators (like `required` or `email`) aren't enough, you can create a Custom Validator. \n\nA Custom Validator is simply a TypeScript function that takes an `AbstractControl` as an argument. If the validation passes, it returns `null`. If it fails, it returns an error object (key-value pair).",
        example: "Creating a custom validator to ensure a user's chosen password does not contain the word 'password'.",
        code: `import { AbstractControl, ValidationErrors } from '@angular/forms';

// 1. Define the custom validator function
export function noPasswordValidator(control: AbstractControl): ValidationErrors | null {
  const val = (control.value || '').toLowerCase();
  
  if (val.includes('password')) {
    // Fails validation: return an error object
    return { invalidPassword: true, message: 'Too obvious!' };
  }
  
  // Passes validation
  return null;
}

// 2. Attach it to a control
const pwdControl = new FormControl('', [Validators.required, noPasswordValidator]);`,
        tip: "For complex validation requiring HTTP calls (like checking if a username is already taken in the DB), you must create a Custom *Async* Validator which returns an Observable/Promise.",
        mistake: "Returning `false` instead of an error object when validation fails. Angular expects either `null` (success) or an `{ errorKey: true }` object (failure).",
        summary: "By writing a function that accepts an AbstractControl and returns `null` on success, or an error object on failure."
    },
    {
        id: 82,
        title: "What is HttpClientModule?",
        category: "HTTP & Interceptors",
        language: "typescript",
        explanation: "Modern web applications need to communicate with backend servers. `HttpClientModule` (and its injected service `HttpClient`) is Angular's robust, built-in mechanism for performing HTTP requests (GET, POST, PUT, DELETE).\n\nIt is built entirely on top of RxJS Observables, meaning all HTTP calls are asynchronous streams by default.",
        example: "You import `HttpClientModule` into your `AppModule`, inject `HttpClient` into your `UserService`, and use it to fetch a list of users from a REST API.",
        code: `// 1. Import in AppModule
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [ HttpClientModule ]
})
export class AppModule {}

// 2. Inject and use in a Service
import { HttpClient } from '@angular/common/http';
@Injectable(...)
export class ApiService {
  constructor(private http: HttpClient) {}
}`,
        tip: "In Angular 15+, standalone components use `provideHttpClient()` in the bootstrap configuration instead of `HttpClientModule`.",
        mistake: "Forgetting to import `HttpClientModule` in the root module. It will throw a massive 'NullInjectorError: No provider for HttpClient' error.",
        summary: "An Angular module that provides the `HttpClient` service, allowing the app to make HTTP requests and interact with backend APIs using RxJS Observables."
    },
    {
        id: 83,
        title: "How do you make an HTTP GET Request?",
        category: "HTTP & Interceptors",
        language: "typescript",
        explanation: "You make a GET request by calling `this.http.get<Type>(url)`. Because `HttpClient` returns an RxJS Observable, the request is **Cold**. This means the HTTP call will NOT actually be sent to the server until a component calls `.subscribe()` on it.",
        example: "Fetching an array of user objects from `https://api.example.com/users`.",
        code: `// Strongly type the expected response using an Interface
interface User { id: number; name: string; }

export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    // Defines the request, but doesn't send it yet!
    return this.http.get<User[]>('https://api.example.com/users');
  }
}

// In the Component:
this.userService.getUsers().subscribe({
  next: (data) => this.users = data,
  error: (err) => console.error(err)
});`,
        tip: "Notice the `<User[]>` generic tag. `HttpClient` automatically parses the raw JSON response from the server into your defined TypeScript interface!",
        mistake: "Calling `this.http.get()` without chaining `.subscribe()`. If you don't subscribe, Angular literally aborts the request before it leaves the browser.",
        summary: "By using the `HttpClient.get()` method and strictly typing the response. The request is only fired when `.subscribe()` is called."
    },
    {
        id: 84,
        title: "How do you handle HTTP Errors?",
        category: "HTTP & Interceptors",
        language: "typescript",
        explanation: "HTTP errors (like 404 Not Found, or 500 Server Error) are caught using the RxJS `catchError` operator inside a `.pipe()` before the observable reaches the component.\n\nThis allows you to intercept the error, log it, format a user-friendly error message, and return a safe fallback value (like an empty array) or rethrow the error using `throwError`.",
        example: "If the server is down, you catch the 500 error, log it to Application Insights, and return a nice 'Server is under maintenance' message to the UI.",
        code: `import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

getUsers(): Observable<User[]> {
  return this.http.get<User[]>('api/users').pipe(
    catchError((error: HttpErrorResponse) => {
      // 1. Log the raw error for developers
      console.error('API Error:', error.message);
      
      // 2. Return a user-friendly message for the UI
      return throwError(() => new Error('Something went wrong. Try again later.'));
    })
  );
}`,
        tip: "Handling errors globally using an HttpInterceptor is generally preferred for enterprise applications, rather than handling them on every single individual API call.",
        mistake: "Letting raw HTTP errors bubble up to the component, causing the UI to crash or display technical JSON error objects to the end-user.",
        summary: "Using the RxJS `catchError` operator within the observable pipe to intercept, log, and gracefully format the error before it reaches the component."
    },
    {
        id: 85,
        title: "What is an HTTP Interceptor?",
        category: "HTTP & Interceptors",
        language: "typescript",
        explanation: "An HTTP Interceptor is a highly powerful middleware service in Angular that intercepts all outgoing HTTP Requests and incoming HTTP Responses globally.\n\nIt allows you to modify requests before they leave the browser (e.g., attaching Authentication Tokens) or handle responses/errors before they reach your components.",
        example: "Instead of manually writing logic to attach a JWT Bearer token to 100 different API calls, you write one Interceptor. It intercepts every outgoing request, silently attaches the token to the HTTP Headers, and sends it on its way.",
        code: `import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // 1. Clone the request and add the Auth Token header
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer my-secret-token')
    });
    
    // 2. Pass the cloned, modified request to the next handler
    return next.handle(clonedReq);
  }
}`,
        tip: "Interceptors are the perfect place to implement a global 'Loading Spinner'. You show the spinner when the request leaves, and hide it when the response returns.",
        mistake: "Forgetting that `HttpRequest` objects in Angular are Immutable. You cannot modify the `req` object directly; you MUST clone it (`req.clone()`) and modify the clone.",
        summary: "A global middleware service that intercepts and modifies outgoing HTTP requests (e.g., adding Auth tokens) or incoming responses (e.g., global error handling)."
    },
    {
        id: 86,
        title: "What is RxJS?",
        category: "RxJS & Observables",
        language: "typescript",
        explanation: "RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using Observables. It makes it easier to compose asynchronous or callback-based code.\n\nAngular utilizes RxJS heavily under the hood for routing, reactive forms, and HTTP requests. RxJS allows you to treat async events (like clicks, HTTP responses, or timers) as streams of data that you can filter, map, and merge using operators.",
        example: "Instead of writing complex nested callbacks (Callback Hell) to handle a user typing in a search box, waiting 500ms, and fetching results, RxJS handles it in 3 lines of readable code.",
        code: `// RxJS transforms chaotic async events into clean streams
fromEvent(searchInput, 'keyup').pipe(
  debounceTime(500),         // Wait 500ms after last keystroke
  distinctUntilChanged(),    // Only fire if the text actually changed
  switchMap(text => api.search(text)) // Cancel old requests, start a new one
).subscribe(results => console.log(results));`,
        tip: "RxJS is often the hardest part of Angular for beginners. Emphasize in interviews that you understand it is a tool for managing asynchronous *data streams*.",
        mistake: "Thinking RxJS is built exclusively for Angular. It is a standalone library that can be used with React, Vue, or vanilla JS.",
        summary: "A library for reactive programming that handles asynchronous events as streams of data."
    },
    {
        id: 87,
        title: "What is an Observable?",
        category: "RxJS & Observables",
        language: "typescript",
        explanation: "An Observable is the core concept of RxJS. It represents a stream of data or events that can arrive over time (synchronously or asynchronously). \n\nObservables are **lazy**, meaning they do not start emitting data until someone calls `.subscribe()` on them. They can emit multiple values over time, unlike Promises which emit only one value.",
        example: "An Observable is like a YouTube channel. The channel (Observable) creates videos over time. But it doesn't send those videos to your phone until you click Subscribe.",
        code: `import { Observable } from 'rxjs';

// Create a custom Observable
const myObservable = new Observable(observer => {
  observer.next('First value');
  observer.next('Second value');
  
  setTimeout(() => {
    observer.next('Third value (Async!)');
    observer.complete(); // Stream is done
  }, 1000);
});

// Nothing happens until we subscribe!
myObservable.subscribe(value => console.log(value));`,
        tip: "Always remember the three methods an Observable can call on an Observer: `next()` (sends data), `error()` (throws error & stops), and `complete()` (gracefully stops).",
        mistake: "Treating Observables like arrays. You can't just 'loop' over an Observable; you must subscribe to it and react to items as they arrive.",
        summary: "A lazy data stream that can emit multiple values asynchronously over time, but only starts when subscribed to."
    },
    {
        id: 88,
        title: "What is an Observer?",
        category: "RxJS & Observables",
        language: "typescript",
        explanation: "An Observer is an object that listens to an Observable. It acts as a consumer of the data stream.\n\nAn Observer is simply an object with three specific callback functions: `next()` (handles new data), `error()` (handles errors), and `complete()` (handles the end of the stream).",
        example: "If the Observable is the newspaper delivery truck, the Observer is the person at the house catching the paper.",
        code: `// The Observer is just an object with 3 callbacks
const myObserver = {
  next: (data) => console.log('Received:', data),
  error: (err) => console.error('Uh oh:', err),
  complete: () => console.log('No more data will arrive.')
};

// Pass the Observer to the Observable
myObservable.subscribe(myObserver);

// (Angular syntax shortcut - passing an object directly)
this.http.get('api/data').subscribe({
  next: data => console.log(data),
  error: err => console.log(err)
});`,
        tip: "When you pass a single function to `.subscribe(data => ...)`, RxJS automatically converts it into an Observer object with a `next` method under the hood.",
        mistake: "Thinking you *must* provide all three callbacks. `error` and `complete` are completely optional.",
        summary: "An object containing `next`, `error`, and `complete` callbacks that consumes the data emitted by an Observable."
    },
    {
        id: 89,
        title: "Difference between Promise and Observable?",
        category: "RxJS & Observables",
        language: "typescript",
        explanation: "This is a guaranteed interview question.\n\n**Promise:**\n1. Emits only a **single value** (or fails).\n2. Is **Eager** (executes immediately upon creation).\n3. Cannot be **cancelled** once started.\n\n**Observable:**\n1. Can emit **multiple values** over time.\n2. Is **Lazy** (does not execute until `.subscribe()` is called).\n3. Can easily be **cancelled** via `.unsubscribe()`.\n4. Can be manipulated using RxJS operators (`map`, `filter`, etc.).",
        example: "A Promise is asking a friend to fetch a single pizza. They leave immediately, bring back one pizza, and the transaction is done. An Observable is subscribing to a magazine; you don't get anything until you subscribe, but then you receive multiple magazines over the course of a year, and you can cancel anytime.",
        code: `// PROMISE (Eager, single value)
const promise = new Promise(resolve => {
  console.log('Promise started immediately!');
  resolve('Done');
});

// OBSERVABLE (Lazy, multiple values)
const observable = new Observable(obs => {
  console.log('Observable started ONLY when subscribed to!');
  obs.next(1);
  obs.next(2);
});
observable.subscribe(); // Triggers execution`,
        tip: "Highlight that Observables are 'Lazy' and 'Cancellable'. These are their two biggest superpowers over Promises in complex web apps.",
        mistake: "Using Promises for HTTP requests in Angular. While possible (using `.toPromise()` or `firstValueFrom()`), you lose the ability to easily cancel the request if the user navigates away.",
        summary: "Promises are eager, emit one value, and cannot be cancelled. Observables are lazy, emit multiple values, and can be cancelled."
    },
    {
        id: 90,
        title: "What is a Subscription?",
        category: "RxJS & Observables",
        language: "typescript",
        explanation: "A Subscription is an object representing the execution of an Observable. \n\nWhen you call `.subscribe()` on an Observable, it returns a Subscription object. The primary purpose of this object is to allow you to cancel the execution (and free up memory) by calling its `.unsubscribe()` method.",
        example: "If an Observable is a water hose, calling `.subscribe()` turns the water on, and the Subscription object is the handle that lets you turn the water off (`.unsubscribe()`).",
        code: `import { interval, Subscription } from 'rxjs';

export class TimerComponent implements OnInit, OnDestroy {
  // Store the subscription in a variable
  private mySub: Subscription;

  ngOnInit() {
    // interval(1000) emits a number every 1 second
    this.mySub = interval(1000).subscribe(num => console.log(num));
  }

  ngOnDestroy() {
    // Cancel the interval when the component is destroyed
    if (this.mySub) {
      this.mySub.unsubscribe();
      console.log('Timer stopped!');
    }
  }
}`,
        tip: "You can combine multiple subscriptions into one by creating a `new Subscription()` and using `.add(sub1).add(sub2)`. Then you only have to call `.unsubscribe()` once.",
        mistake: "Forgetting to unsubscribe from continuous streams, causing severe memory leaks (zombie subscriptions).",
        summary: "An object returned by `.subscribe()` that holds the active execution of an Observable, allowing you to cancel it via `.unsubscribe()`."
    },
    {
        id: 91,
        title: "What is a Subject?",
        category: "RxJS & Observables",
        language: "typescript",
        explanation: "A Subject is a special type of Observable in RxJS that allows values to be **multicasted** to many Observers.\n\nWhile plain Observables are *unicast* (each subscribed Observer owns an independent execution of the Observable), Subjects are *multicast* (all subscribed Observers share the exact same execution). Furthermore, Subjects are both an Observable AND an Observer, meaning you can manually push values into them using `.next()`.",
        example: "A plain Observable is like a personal phone call (unicast). A Subject is like a public radio broadcast (multicast) — you can push a new song (`subject.next(song)`) and 500 listeners instantly hear it.",
        code: `import { Subject } from 'rxjs';

const mySubject = new Subject<number>();

// Subscriber 1
mySubject.subscribe(v => console.log('Sub 1:', v));

// Push data INTO the stream manually
mySubject.next(10); 
// Output: Sub 1: 10

// Subscriber 2 joins late
mySubject.subscribe(v => console.log('Sub 2:', v));

// Push more data. BOTH subscribers receive it.
mySubject.next(20);
// Output: Sub 1: 20
// Output: Sub 2: 20`,
        tip: "Subjects are the standard way to implement cross-component communication in Angular (using a shared Service to hold the Subject).",
        mistake: "Using a plain Subject when late subscribers need the previous value. Plain Subjects do not remember past values (use `BehaviorSubject` for that).",
        summary: "A multicast Observable that allows you to manually push values into the stream using `.next()`, sharing that value with all active subscribers."
    },
    {
        id: 92,
        title: "Difference between Subject and BehaviorSubject?",
        category: "RxJS & Observables",
        language: "typescript",
        explanation: "Both are multicasting Subjects, but they differ in how they handle history.\n\n**Subject:** Does NOT hold a current value. If an observer subscribes *after* a value was emitted, they miss it entirely.\n\n**BehaviorSubject:** Holds the **most recent** value. It requires an initial value upon creation. Any observer that subscribes to it will immediately receive the currently held value, even if they arrive late.",
        example: "A Subject is a live concert; if you arrive 10 minutes late, you missed the first song. A BehaviorSubject is a scoreboard; no matter when you look at it, you immediately see the current score.",
        code: `import { Subject, BehaviorSubject } from 'rxjs';

// --- SUBJECT ---
const sub = new Subject<number>();
sub.next(1); // Emitted into the void
sub.subscribe(val => console.log('Subject received:', val));
// Output: (Nothing)

// --- BEHAVIORSUBJECT ---
const bSub = new BehaviorSubject<number>(0); // Requires initial value
bSub.next(1); // Updates current value to 1
bSub.subscribe(val => console.log('BehaviorSubject received:', val));
// Output: BehaviorSubject received: 1`,
        tip: "Because `BehaviorSubject` holds the current value, you can actually fetch it synchronously without subscribing by using `bSub.getValue()`.",
        mistake: "Using `BehaviorSubject` for events where the past doesn't matter (like 'User clicked a button'). Use plain `Subject` for ephemeral events, `BehaviorSubject` for State (like 'Current User Profile').",
        summary: "A Subject only emits future values to subscribers. A BehaviorSubject requires an initial value and immediately emits the most recent value to any new subscriber."
    },
    {
        id: 93,
        title: "What is ReplaySubject?",
        category: "RxJS & Observables",
        language: "typescript",
        explanation: "A `ReplaySubject` is a variant of a Subject that records multiple values from the past and 'replays' them to new subscribers.\n\nWhen you create a `ReplaySubject`, you specify a buffer size (how many previous values to remember). When a new observer subscribes, it will immediately receive all the stored values in chronological order.",
        example: "A ReplaySubject(3) is like a DVR that always records the last 3 TV shows. If you turn on the TV (subscribe), it immediately plays those 3 shows for you before showing live TV.",
        code: `import { ReplaySubject } from 'rxjs';

// Buffer size of 2 (remember the last 2 values)
const replaySub = new ReplaySubject<string>(2);

replaySub.next('A');
replaySub.next('B');
replaySub.next('C');

// Subscriber arrives late!
// It will immediately receive the last 2 values: 'B' and 'C'
replaySub.subscribe(val => console.log('Replay:', val));
// Output: 
// Replay: B
// Replay: C`,
        tip: "You can also specify a time-window (e.g., 'replay all values from the last 500ms') by passing a second argument: `new ReplaySubject(100, 500)`.",
        mistake: "Using a massive buffer size (like 10,000) for high-frequency data, which will quickly consume available memory.",
        summary: "A Subject that remembers a specified number of previous values and replays them to new subscribers immediately upon subscription."
    },
    {
        id: 94,
        title: "What is AsyncSubject?",
        category: "RxJS & Observables",
        language: "typescript",
        explanation: "An `AsyncSubject` is a variant of a Subject where only the **very last** value of the Observable execution is sent to its subscribers, and **only when the execution completes**.\n\nIf the subject never calls `.complete()`, the subscribers will never receive any data.",
        example: "An AsyncSubject is like a final exam grade. You do lots of work (next, next, next), but the teacher only gives you your grade (the final value) at the very end of the semester (complete).",
        code: `import { AsyncSubject } from 'rxjs';

const asyncSub = new AsyncSubject<number>();

asyncSub.subscribe(val => console.log('Async:', val));

asyncSub.next(1); // Nothing happens
asyncSub.next(2); // Nothing happens
asyncSub.next(3); // Nothing happens

// Stream finishes. It now emits the last known value (3) to subscribers.
asyncSub.complete(); 
// Output: Async: 3`,
        tip: "AsyncSubjects are rarely used in standard Angular development, but they are conceptually important to understand the full RxJS ecosystem.",
        mistake: "Forgetting to call `.complete()`. If you don't complete an AsyncSubject, it will stay open forever and never emit a single value.",
        summary: "A Subject that only emits the final, ultimate value of the stream, and only after the `.complete()` method has been called."
    },
    {
        id: 95,
        title: "What are RxJS Operators?",
        category: "RxJS & Observables",
        language: "typescript",
        explanation: "RxJS Operators are pure functions that allow you to manipulate, filter, combine, or transform the data flowing through an Observable stream, without mutating the original Observable.\n\nYou string multiple operators together using the `.pipe()` method before you `.subscribe()`.",
        example: "If a stream emits `[1, 2, 3]`, you can use the `map` operator to multiply each by 10, resulting in `[10, 20, 30]` arriving at your subscriber.",
        code: `import { from } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// Create a stream of numbers
const source = from([1, 2, 3, 4, 5]);

source.pipe(
  // Operator 1: Only let even numbers pass through
  filter(num => num % 2 === 0),
  
  // Operator 2: Multiply those even numbers by 10
  map(num => num * 10)
)
.subscribe(result => console.log(result));

// Output: 
// 20
// 40`,
        tip: "Always import operators from `rxjs/operators`, NOT from `rxjs`. (e.g., `import { map } from 'rxjs/operators'`).",
        mistake: "Putting heavy side-effects (like modifying global variables) inside pure operators like `map`. If you must do side-effects, use the `tap` operator.",
        summary: "Pure functions applied inside the `.pipe()` method used to transform, filter, or manipulate data streams before they reach the subscriber."
    },
    {
        id: 96,
        title: "Explain map() vs mergeMap() vs switchMap() vs exhaustMap()?",
        category: "RxJS & Observables",
        language: "typescript",
        explanation: "These are mapping operators, but they handle inner Observables differently.\n\n- **`map`**: Transforms plain data (like `val * 10`). Does NOT subscribe to inner Observables.\n- **`mergeMap`**: Maps to an Observable, subscribes to it, and runs ALL of them concurrently. (Great for saving multiple files in parallel).\n- **`switchMap`**: Maps to an Observable, subscribes, but **cancels** the previous one if a new request arrives. (Great for Search auto-complete — cancel the 'a' search when the user types 'ap').\n- **`exhaustMap`**: Maps to an Observable, subscribes, and completely **ignores** new requests until the current one finishes. (Great for a 'Submit' login button — ignore extra clicks).",
        example: "If the user clicks 'Save' 5 times fast:\n- `mergeMap`: 5 HTTP requests go to the server.\n- `switchMap`: Requests 1,2,3,4 are cancelled instantly. Only request 5 reaches the server.\n- `exhaustMap`: Request 1 goes to the server. Requests 2,3,4,5 are ignored because Request 1 is still processing.",
        code: `// switchMap is highly popular in Angular for HTTP requests
fromEvent(searchInput, 'input').pipe(
  switchMap(event => this.http.get('/search?q=' + event.target.value))
).subscribe(results => console.log('Latest results:', results));`,
        tip: "This is arguably the most common Senior Angular Interview question. Memorize the 'Save button clicks' analogy.",
        mistake: "Using `mergeMap` for search boxes. If you type 'apple', the 'a' request might take longer than the 'apple' request, resulting in old data overwriting new data.",
        summary: "`map` alters data. `mergeMap` handles all concurrently. `switchMap` cancels older requests for new ones. `exhaustMap` ignores new requests until the old one finishes."
    },
    {
        id: 97,
        title: "What is takeUntil()?",
        category: "RxJS & Observables",
        language: "typescript",
        explanation: "`takeUntil` is an RxJS filtering operator. It keeps an Observable open and emitting values *until* a second, secondary Observable (provided as an argument) emits a value. Once that secondary Observable emits, `takeUntil` instantly forces the primary Observable to complete.\n\nIn Angular, this is the gold standard pattern for preventing memory leaks in components.",
        example: "You tell your application: 'Keep listening to global Chat Messages, *until* the DestroyStream emits a value (which happens when the component is destroyed).'",
        code: `import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export class ChatComponent implements OnInit, OnDestroy {
  // 1. Create the kill switch stream
  private destroy$ = new Subject<void>();

  ngOnInit() {
    this.chatService.getMessages()
      // 2. Attach the kill switch to the stream
      .pipe(takeUntil(this.destroy$))
      .subscribe(msg => console.log(msg));
  }

  ngOnDestroy() {
    // 3. Trigger the kill switch! All takeUntil() pipes instantly close.
    this.destroy$.next();
    this.destroy$.complete();
  }
}`,
        tip: "Always place `takeUntil` as the very LAST operator in your `.pipe()`. If you place it before a `switchMap`, the `switchMap` might spawn a new observable after the kill switch was triggered.",
        mistake: "Using manual `sub.unsubscribe()` everywhere instead of a single `destroy$` Subject.",
        summary: "An operator that automatically completes a stream when a secondary observable emits a value. Widely used for component cleanup in `ngOnDestroy`."
    },
    {
        id: 98,
        title: "What is combineLatest()?",
        category: "RxJS & Observables",
        language: "typescript",
        explanation: "`combineLatest` is a creation operator that combines multiple Observables into a single Observable array.\n\nWhenever *any* of the input Observables emits a new value, `combineLatest` fires and emits an array containing the most recent values from *all* the observables. \n**Important:** It will not emit its first array until *every single* input Observable has emitted at least one value.",
        example: "You have a dropdown for 'Category' (Observable 1) and a dropdown for 'Sort By' (Observable 2). You want to trigger a backend search whenever *either* of them changes. `combineLatest` is perfect for this.",
        code: `import { combineLatest, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const obs1$ = of('Angular').pipe(delay(100)); // Emits after 100ms
const obs2$ = of('React').pipe(delay(500));   // Emits after 500ms

// Combines both streams
combineLatest([obs1$, obs2$]).subscribe(([val1, val2]) => {
  // This block won't run until BOTH have emitted at least once (500ms)
  console.log(val1, val2); 
});
// Output at 500ms: 'Angular', 'React'`,
        tip: "If you have a UI that waits on 3 different API endpoints to finish before rendering the screen, `combineLatest` or `forkJoin` are the tools to use.",
        mistake: "Wondering why `combineLatest` isn't firing, only to realize one of the input observables hasn't emitted an initial value yet.",
        summary: "Combines multiple observables. Emits an array of the latest values from each observable every time any of them updates."
    },
    {
        id: 99,
        title: "What is Angular Routing?",
        category: "Routing & Guards",
        language: "typescript",
        explanation: "Angular Routing is the mechanism that allows users to navigate between different views (components) within a Single Page Application (SPA) without reloading the browser page.\n\nThe Angular Router (`RouterModule`) interprets the browser URL as an instruction to load a specific Component into a specific location on the screen, mimicking the feel of a multi-page website.",
        example: "When the user clicks a link pointing to `website.com/profile`, the Router intercepts the request, stops the browser from refreshing, and dynamically injects the `ProfileComponent` into the DOM.",
        code: `// A basic routing configuration array
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent } // Wildcard 404
];`,
        tip: "Routing relies on the HTML5 History API (pushState) to change the URL without causing a server request.",
        mistake: "Forgetting to set `<base href=\"/\">` in the `<head>` of your `index.html`. Without this, the Router doesn't know how to construct URLs, causing app crashes.",
        summary: "A core Angular module that translates URL changes into view changes, enabling Single Page Application navigation."
    },
    {
        id: 100,
        title: "How do you configure Routing in Angular?",
        category: "Routing & Guards",
        language: "typescript",
        explanation: "Routing is configured by creating an array of `Route` objects, where each object maps a string `path` to a specific `Component`. \n\nThis array is then passed to the `RouterModule.forRoot(routes)` method in your main `AppModule` (or `provideRouter` in standalone apps).",
        example: "Setting up a basic app with a Home page, an About page, and a catch-all 404 page.",
        code: `import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';

// 1. Define the routes
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Default redirect
];

// 2. Register with RouterModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }`,
        tip: "Feature modules should use `RouterModule.forChild(routes)`. Only the root app module should use `forRoot()`.",
        mistake: "Putting the `path: '**'` wildcard route at the top of the array. The Router reads the array top-to-bottom and stops at the first match. The wildcard MUST be last.",
        summary: "By defining an array of path-to-component mappings and registering them with `RouterModule.forRoot()`."
    },
    {
        id: 101,
        title: "What is RouterOutlet?",
        category: "Routing & Guards",
        language: "html",
        explanation: "`<router-outlet>` is a directive provided by the `RouterModule`. It acts as a placeholder or 'window' in your HTML template.\n\nWhen the Angular Router resolves a URL to a specific Component, it dynamically injects that component's HTML view exactly where the `<router-outlet>` tag is located in the DOM.",
        example: "You have a static Navbar and Footer in your `app.component.html`. You place `<router-outlet>` between them. When the user navigates, only the middle section of the page changes.",
        code: `<!-- app.component.html -->

<header>
  <h1>My Application</h1>
  <nav>...</nav>
</header>

<!-- THE MAGIC HAPPENS HERE -->
<!-- The routed component is injected just below this tag -->
<router-outlet></router-outlet>

<footer>
  <p>Copyright 2024</p>
</footer>`,
        tip: "You can have multiple RouterOutlets on a single page using Named Outlets (e.g., `<router-outlet name=\"sidebar\"></router-outlet>`), allowing you to route multiple sections of the screen independently.",
        mistake: "Placing a `<router-outlet>` inside a component that isn't connected to the routing tree, causing it to remain empty.",
        summary: "A placeholder tag in the HTML template where the Angular Router dynamically injects the component corresponding to the current URL."
    },
    {
        id: 102,
        title: "What is RouterLink?",
        category: "Routing & Guards",
        language: "html",
        explanation: "`routerLink` is an Angular directive used to create navigation links in your HTML templates.\n\nInstead of using the standard HTML `href` attribute, you use `routerLink`. When a user clicks it, Angular intercepts the click, prevents the browser from refreshing, and updates the URL internally using the Router.",
        example: "Creating a navigation menu item that takes the user to the '/about' page.",
        code: `<!-- String path -->
<a routerLink="/about">About Us</a>

<!-- Array path (useful for dynamic segments) -->
<a [routerLink]="['/user', 123, 'details']">User Details</a>

<!-- Adding query parameters (?sort=asc) -->
<a routerLink="/products" [queryParams]="{ sort: 'asc' }">Products</a>

<!-- Active styling (applies class when route is active) -->
<a routerLink="/home" routerLinkActive="active-nav">Home</a>`,
        tip: "`routerLinkActive` is incredibly useful. It automatically adds a CSS class to the link when the current URL matches the `routerLink`, making it easy to highlight the 'active' tab in a navbar.",
        mistake: "Forgetting the leading slash (`/`). `routerLink=\"about\"` appends to the current URL (relative). `routerLink=\"/about\"` goes to the root (absolute).",
        summary: "An Angular directive used in place of `href` to navigate between routes without triggering a full page reload."
    },
    {
        id: 103,
        title: "Difference between href and routerLink?",
        category: "Routing & Guards",
        language: "html",
        explanation: "Using `href` tells the browser to make a full HTTP request to the server for a completely new HTML page. This destroys the current Angular application and reboots it from scratch, defeating the entire purpose of a Single Page Application (SPA).\n\nUsing `routerLink` tells Angular to intercept the click, suppress the browser's default behavior, and simply swap out the components internally. It is instantaneous and preserves application state.",
        example: "If you have a music player running at the bottom of your app, clicking an `href` link will refresh the page and stop the music. Clicking a `routerLink` changes the view while the music keeps playing seamlessly.",
        code: `<!-- WRONG: Causes full page refresh -->
<a href="/profile">Profile</a>

<!-- CORRECT: Instantaneous SPA navigation -->
<a routerLink="/profile">Profile</a>`,
        tip: "Only use `href` when linking to external websites (like google.com) or triggering file downloads. For everything internal, use `routerLink`.",
        mistake: "Using `href` inside an Angular app and wondering why your global state (like NgRx or Service variables) resets to zero on every click.",
        summary: "`href` causes a full browser page reload, destroying application state. `routerLink` uses the Angular Router to swap components internally, preserving SPA behavior."
    },
    {
        id: 104,
        title: "How do you pass Route Parameters?",
        category: "Routing & Guards",
        language: "typescript",
        explanation: "Route parameters are dynamic segments in your URL (e.g., the '123' in `/users/123`). \n\nYou pass them in two steps: first, define the dynamic segment in your Route configuration using a colon (`:`). Second, pass the actual value via `routerLink` in HTML, or `router.navigate()` in TypeScript.",
        example: "Navigating to a specific product's detail page by passing its unique ID.",
        code: `// 1. Define the parameter in routes using a colon
const routes: Routes = [
  { path: 'product/:id', component: ProductComponent }
];

// 2A. Pass parameter via HTML
<!-- Generates /product/5 -->
<a [routerLink]="['/product', 5]">View Product</a>

// 2B. Pass parameter via TypeScript
export class ListComponent {
  constructor(private router: Router) {}
  
  goToProduct(id: number) {
    this.router.navigate(['/product', id]);
  }
}`,
        tip: "You can define multiple parameters in a single route: `{ path: 'user/:userId/post/:postId' }`.",
        mistake: "Treating route parameters (e.g. `/user/1`) the same as query parameters (e.g. `/user?id=1`). They require different syntax in Angular.",
        summary: "By defining a token with a colon (`:id`) in the routing config, and passing an array `['/path', value]` to routerLink or router.navigate()."
    },
    {
        id: 105,
        title: "How do you read Route Parameters?",
        category: "Routing & Guards",
        language: "typescript",
        explanation: "To read parameters from the current URL, you inject the `ActivatedRoute` service into your component.\n\nYou can read the parameters reactively (by subscribing to `paramMap` observables) which is best if the component stays alive while the URL changes, or statically (using `snapshot`) if the component is recreated every time.",
        example: "Reading the ID '99' from the URL `/product/99` to fetch the correct data from the API.",
        code: `import { ActivatedRoute } from '@angular/router';

export class ProductComponent implements OnInit {
  productId: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // APPROACH 1: Snapshot (Static, reads once)
    // Good if navigating to a different component entirely
    this.productId = this.route.snapshot.paramMap.get('id');

    // APPROACH 2: Observable (Reactive)
    // REQUIRED if navigating from /product/1 to /product/2
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
      console.log('ID changed to:', this.productId);
    });
  }
}`,
        tip: "Always use the Observable (`subscribe`) approach if your app allows users to navigate from one item's detail page directly to another item's detail page (the component isn't destroyed, so the snapshot won't update!).",
        mistake: "Using `route.snapshot` inside a component where the URL parameter changes, resulting in the page showing the old data forever.",
        summary: "By injecting `ActivatedRoute` and reading from `route.snapshot.paramMap.get('id')` statically, or subscribing to `route.paramMap` reactively."
    },
    {
        id: 106,
        title: "What is Lazy Loading?",
        category: "Routing & Guards",
        language: "typescript",
        explanation: "Lazy Loading is a design pattern in Angular where feature modules (and their associated components) are NOT loaded into the browser when the application initially starts.\n\nInstead, Angular compiles them into separate, distinct JavaScript bundles. The browser only downloads these bundles asynchronously when the user actually navigates to that specific route.",
        example: "An e-commerce app has an 'Admin Dashboard' module. 99% of users are shoppers, not admins. By lazy loading the Admin module, the shoppers don't have to download the massive admin code, making the app load instantly.",
        code: `// AppRoutingModule (Root)
const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Eagerly loaded
  
  // LAZY LOADED MODULE (using dynamic import)
  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];`,
        tip: "In modern Angular (Standalone Components), you can lazy load individual components directly without needing a full NgModule by using `loadComponent: () => import(...)`.",
        mistake: "Importing a Lazy Loaded module directly into the `imports: []` array of your `AppModule`. Doing so instantly ruins the lazy loading and forces it to load eagerly on startup.",
        summary: "A technique where modules or components are loaded asynchronously on-demand only when the user navigates to their route, rather than on initial application load."
    },
    {
        id: 107,
        title: "Why use Lazy Loading?",
        category: "Routing & Guards",
        language: "typescript",
        explanation: "The primary purpose of Lazy Loading is **Performance Optimization**.\n\nWithout lazy loading, Angular bundles the entire application into a single massive `main.js` file. The user is forced to download, parse, and execute Megabytes of JavaScript before seeing the first screen. Lazy Loading splits the code into smaller chunks, drastically reducing the Initial Load Time (Time to Interactive).",
        example: "A monolithic app takes 10 seconds to load on a 3G mobile network. By lazy loading the 'Settings', 'Profile', and 'Admin' modules, the initial bundle shrinks by 70%, and the app now loads in 3 seconds.",
        code: `// Before Lazy Loading (main.js is 5MB)
// Browser downloads 5MB before rendering login screen.

// After Lazy Loading
// main.js is 1MB. (Loads instantly)
// admin-chunk.js is 4MB. (Downloaded only if user clicks 'Admin')`,
        tip: "You can implement a 'PreloadStrategy'. This tells Angular: 'Load the critical stuff first so the app starts fast, but then quietly download the lazy loaded modules in the background while the user is reading the home page.'",
        mistake: "Assuming lazy loading makes the *entire* app faster. It specifically improves the *initial load time*. Subsequent navigations to lazy modules actually incur a slight network delay.",
        summary: "To drastically reduce the initial bundle size of the application, resulting in much faster load times and a better user experience, especially on mobile devices."
    },
    {
        id: 108,
        title: "How do you implement Lazy Loading in Angular?",
        category: "Routing & Guards",
        language: "typescript",
        explanation: "To implement Lazy Loading, you use the `loadChildren` (for modules) or `loadComponent` (for standalone components) property in your routing configuration, passing a dynamic ES6 `import()` statement.\n\nCrucially, you must ensure that the module/component you are lazy loading is NOT imported anywhere else in the application.",
        example: "Lazy loading a `CustomersModule` only when the user navigates to the `/customers` path.",
        code: `// 1. Create a separate feature module with its own routing
// customers-routing.module.ts
const routes: Routes = [{ path: '', component: CustomersComponent }];

// 2. In the ROOT AppRoutingModule, use loadChildren
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { 
    path: 'customers', 
    // Dynamic import triggers Webpack to split this into a separate file
    loadChildren: () => import('./customers/customers.module')
      .then(m => m.CustomersModule)
  }
];`,
        tip: "If you are using Angular CLI, you can generate a fully configured lazy-loaded module automatically via the terminal: `ng generate module customers --route customers --module app.module`.",
        mistake: "Accidentally referencing a Component from the lazy-loaded module inside the `AppModule`. Webpack will see the hard reference and bundle it into `main.js`, destroying the lazy loading.",
        summary: "By configuring the root router to use `loadChildren: () => import(...)` pointing to the target feature module."
    },
    {
        id: 109,
        title: "What are Route Guards?",
        category: "Routing & Guards",
        language: "typescript",
        explanation: "Route Guards are interfaces provided by the Angular Router that allow you to control access to specific routes.\n\nBefore the Router navigates to a new URL, it runs the assigned Guards. The Guard returns a boolean (or an Observable/Promise resolving to a boolean). If `true`, navigation proceeds. If `false`, navigation is blocked, and you can optionally redirect the user elsewhere.",
        example: "An `AuthGuard` checks if a user is logged in. If they try to navigate to `/dashboard` while logged out, the Guard returns `false` and redirects them to the `/login` page.",
        code: `import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true; // Let them in
    } else {
      this.router.navigate(['/login']); // Redirect
      return false; // Block access
    }
  }
}

// In app-routing.module.ts
{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }`,
        tip: "In Angular 15+, functional route guards were introduced. You can now write a simple function instead of an entire class.",
        mistake: "Relying on Route Guards as absolute security. Guards only hide UI elements in the browser. A malicious user can still manipulate the JS. True security must be enforced on the backend API.",
        summary: "Angular services that run before navigation to allow or deny access to a route based on custom logic (like authentication)."
    },
    {
        id: 110,
        title: "Explain CanActivate, CanActivateChild, CanDeactivate, Resolve, CanLoad?",
        category: "Routing & Guards",
        language: "typescript",
        explanation: "These are the 5 types of Route Guards in Angular, each firing at a different point in the navigation cycle:\n\n1. **`CanActivate`**: Checks if the user is allowed to enter a specific route.\n2. **`CanActivateChild`**: Checks if the user is allowed to enter any child routes of a specific route.\n3. **`CanDeactivate`**: Checks if the user is allowed to *leave* a route. (Useful for 'You have unsaved changes' prompts).\n4. **`Resolve`**: Pre-fetches critical data from the backend *before* the component is rendered. Navigation waits until the data is loaded.\n5. **`CanLoad`** / **`CanMatch`**: Prevents a Lazy Loaded module from even being downloaded from the server if the user isn't authorized.",
        example: "Use `CanActivate` to protect the `/profile` page. Use `CanDeactivate` to stop someone accidentally clicking 'Back' while filling out a long form. Use `CanLoad` so hackers can't download your Admin JS code.",
        code: `const routes: Routes = [
  { 
    path: 'admin', 
    loadChildren: () => import('./admin.module').then(m => m.AdminModule),
    canLoad: [AdminGuard], // Don't download if not admin
    canActivate: [AuthGuard] // Don't enter if not logged in
  },
  {
    path: 'edit-post',
    component: EditPostComponent,
    canDeactivate: [UnsavedChangesGuard] // Warn before leaving
  }
];`,
        tip: "Be careful with `Resolve`. If the backend API is slow, the app will freeze on the current page waiting for data, making the app feel broken. Often, it's better to navigate instantly and show a loading spinner in the component.",
        mistake: "Using `CanActivate` on a lazy-loaded route instead of `CanLoad`. `CanActivate` blocks access, but the browser *already downloaded* the lazy module to check it!",
        summary: "The 5 guard types: CanActivate (enter), CanActivateChild (enter children), CanDeactivate (leave), Resolve (fetch data first), and CanLoad (prevent downloading lazy modules)."
    },
    {
        id: 111,
        title: "What are Pipes in Angular?",
        category: "Architecture & Performance",
        language: "html",
        explanation: "Pipes are simple functions designed to accept an input value, transform it, and return a formatted output string directly within the HTML template.\n\nThey are primarily used for formatting data like dates, currencies, and percentages for the UI without altering the underlying data in the TypeScript class.",
        example: "You receive a user's birthday as a raw Date object or ISO string from the API. Instead of writing logic in TypeScript to format it, you use a Pipe in the HTML to display it nicely.",
        code: `<!-- 1. The Pipe symbol is the vertical bar '|' -->
<!-- Output: 'JANUARY 1, 2024' -->
<p>{{ birthday | date:'longDate' | uppercase }}</p>

<!-- 2. Passing arguments to a pipe -->
<p>Total: {{ amount | currency:'EUR' }}</p>`,
        tip: "You can chain multiple pipes together! The output of the first pipe becomes the input of the second pipe (e.g., `date | uppercase`).",
        mistake: "Using Pipes to filter large arrays (e.g., `users | filterOnline`). The Angular team highly discourages this because it executes on every change detection cycle, killing performance.",
        summary: "Template tools used to transform data into a display format (like dates or currency) directly in the HTML view."
    },
    {
        id: 112,
        title: "Explain Built-in Pipes in Angular.",
        category: "Architecture & Performance",
        language: "html",
        explanation: "Angular comes with several highly useful built-in pipes available in the `CommonModule`. The most commonly used ones are:\n\n- `DatePipe`: Formats date objects (e.g., `date:'short'`).\n- `UpperCasePipe` / `LowerCasePipe`: Changes text casing.\n- `CurrencyPipe`: Formats numbers as currency (e.g., `currency:'USD'`).\n- `DecimalPipe`: Formats numbers with decimal points.\n- `PercentPipe`: Formats numbers as percentages.\n- `JsonPipe`: Converts an object to a JSON string (incredibly useful for debugging).\n- `AsyncPipe`: Subscribes to an Observable directly in the HTML.",
        example: "Dumping an entire object to the screen during development just to see what the API returned, without writing `console.log`.",
        code: `<!-- DEBUGGING SUPERPOWER! -->
<!-- Renders the raw JSON object directly on the screen -->
<pre>{{ userObject | json }}</pre>`,
        tip: "Memorize the `json` pipe. Interviewers love asking 'How do you quickly debug an object in the template?'",
        mistake: "Forgetting to import `CommonModule` when trying to use built-in pipes in a Standalone Component.",
        summary: "Pre-packaged pipes provided by Angular (Date, Currency, Json, Async) to handle common formatting tasks."
    },
    {
        id: 113,
        title: "Difference between Pure and Impure Pipe?",
        category: "Architecture & Performance",
        language: "typescript",
        explanation: "This is a performance-critical concept.\n\n**Pure Pipes (Default):** Angular executes a Pure Pipe ONLY when it detects a *pure change* to the input value (i.e., a primitive value changes like String or Number, or an Object *reference* changes). If you mutate an array (push a new item), a Pure Pipe will NOT fire.\n\n**Impure Pipes:** Angular executes an Impure Pipe during *every single component change detection cycle*, even if the input data hasn't changed. They are terrible for performance.",
        example: "If you write a Pure Pipe to filter an array of numbers, and you `arr.push(4)`, the pipe doesn't re-run. You must create a new array `arr = [...arr, 4]` to trigger the Pure Pipe.",
        code: `// Set pure: false to create an Impure Pipe
@Pipe({
  name: 'myImpurePipe',
  pure: false 
})
export class ImpurePipe implements PipeTransform {
  transform(value: any) {
    // This will run hundreds of times per second!
    return doHeavyCalculations(value);
  }
}`,
        tip: "By default, all custom pipes are Pure. The `AsyncPipe` is the most famous example of an Impure Pipe built into Angular (because it needs to update the UI whenever the stream emits).",
        mistake: "Creating an Impure Pipe that performs heavy calculations or HTTP requests. It will instantly freeze your application.",
        summary: "Pure pipes only execute when input references change (highly performant). Impure pipes execute on every change detection cycle (poor performance)."
    },
    {
        id: 114,
        title: "How do you create a Custom Pipe?",
        category: "Architecture & Performance",
        language: "typescript",
        explanation: "To create a Custom Pipe, you write a TypeScript class that implements the `PipeTransform` interface and decorate it with `@Pipe({ name: 'myPipe' })`.\n\nYou must implement the `transform(value, ...args)` method. This method takes the input value, manipulates it, and returns the formatted output.",
        example: "Creating a pipe that truncates a long string and adds '...' if it exceeds a certain length.",
        code: `import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
  
  // value: The data before the pipe
  // limit: A parameter passed to the pipe
  transform(value: string, limit: number = 20): string {
    if (!value) return '';
    return value.length > limit 
      ? value.substring(0, limit) + '...' 
      : value;
  }
}

<!-- Usage in HTML -->
<p>{{ 'This is a very long sentence' | truncate:10 }}</p>
<!-- Output: 'This is a ...' -->`,
        tip: "Use the Angular CLI to generate pipes quickly: `ng generate pipe shared/pipes/truncate`.",
        mistake: "Forgetting to declare the custom pipe in the `declarations` array of the NgModule, resulting in 'The pipe X could not be found'.",
        summary: "By decorating a class with `@Pipe`, implementing `PipeTransform`, and writing the formatting logic inside the `transform` method."
    },
    {
        id: 115,
        title: "What is the Async Pipe?",
        category: "Architecture & Performance",
        language: "html",
        explanation: "The `AsyncPipe` (`| async`) is a built-in Angular pipe that automatically subscribes to an Observable or Promise directly in the HTML template and returns the latest emitted value.\n\nCrucially, when the component is destroyed, the Async Pipe **automatically unsubscribes** from the Observable, completely eliminating the risk of memory leaks.",
        example: "Instead of subscribing to `getUsers()` in `ngOnInit`, storing the data in a variable, and rendering the variable, you simply pass the raw Observable directly into the HTML.",
        code: `// TypeScript
export class UserComponent {
  // We don't subscribe! We just store the Observable itself.
  // Note: The '$' suffix is a naming convention for Observables.
  users$: Observable<User[]> = this.api.getUsers();
}

<!-- HTML -->
<!-- The async pipe subscribes, unwraps the data, and renders it -->
<ul>
  <li *ngFor="let user of (users$ | async)">
    {{ user.name }}
  </li>
</ul>`,
        tip: "If you need to use the unwrapped data in multiple places in the template, use the `*ngIf=\"obs$ | async as data\"` syntax to avoid multiple subscriptions.",
        mistake: "Using `| async` on a plain array or string. It ONLY works on Observables and Promises.",
        summary: "A pipe that automatically subscribes to an Observable in the HTML, renders the data, and automatically unsubscribes when the component dies."
    },
    {
        id: 116,
        title: "Why is Async Pipe highly recommended?",
        category: "Architecture & Performance",
        language: "typescript",
        explanation: "Using the `AsyncPipe` is considered an absolute Best Practice in Angular for three major reasons:\n\n1. **Zero Memory Leaks:** It automatically unsubscribes when the component is destroyed, meaning you don't have to manage `Subscription` objects or `ngOnDestroy`.\n2. **Cleaner Code:** It removes the need for `.subscribe()` blocks and local state variables in your TypeScript class.\n3. **Performance (OnPush):** It integrates perfectly with the `OnPush` change detection strategy, automatically triggering a UI update only when new data actually arrives via the stream.",
        example: "A component with 5 data streams requires 5 manual subscriptions and 5 manual unsubscriptions in `ngOnDestroy`. Using `| async`, the TS class is practically empty.",
        code: `<!-- Best Practice Pattern: Unwrap once at the top of the template -->
<ng-container *ngIf="userProfile$ | async as profile; else loading">
  <h1>{{ profile.name }}</h1>
  <p>{{ profile.email }}</p>
</ng-container>

<ng-template #loading>
  <spinner></spinner>
</ng-template>`,
        tip: "If an interviewer asks how to prevent memory leaks in Angular, 'Using the Async Pipe' should be one of your very first answers.",
        mistake: "Subscribing in the TypeScript class just to set a boolean flag, when you could have done the whole thing cleanly in the template.",
        summary: "It prevents memory leaks by auto-unsubscribing, reduces boilerplate TS code, and works seamlessly with OnPush change detection."
    },
    {
        id: 117,
        title: "What is Dependency Injection (DI) in Angular?",
        category: "Architecture & Performance",
        language: "typescript",
        explanation: "Dependency Injection (DI) is a core design pattern in Angular where classes do not create their own dependencies (like Services). Instead, they ask the Angular framework to inject them.\n\nWhen Angular creates a Component, it looks at the Component's constructor. If the constructor asks for a `UserService`, the Angular DI system finds the `UserService`, creates it (if it doesn't exist), and passes it to the Component.",
        example: "Instead of a Component writing `this.api = new ApiService();`, it simply asks for it in the constructor: `constructor(private api: ApiService) {}`.",
        code: `// BAD: Hard dependency (Impossible to mock/test)
export class ProfileComponent {
  api = new ApiService(); 
}

// GOOD: Dependency Injection (Framework handles creation)
export class ProfileComponent {
  constructor(private api: ApiService) {}
}`,
        tip: "DI makes Unit Testing incredibly easy, because you can inject 'Mock' or 'Fake' services into your component during tests instead of hitting real databases.",
        mistake: "Trying to manually instantiate Services using the `new` keyword in Angular. Always use the constructor.",
        summary: "A design pattern where Angular automatically creates and provides required objects (dependencies) to a class via its constructor."
    },
    {
        id: 118,
        title: "What is @Injectable()?",
        category: "Architecture & Performance",
        language: "typescript",
        explanation: "`@Injectable()` is a decorator applied to a class (usually a Service) to mark it as a participant in the Dependency Injection system.\n\nIt tells Angular: 'This class might have its own dependencies that need to be injected into its constructor.' If a Service has no dependencies, the decorator technically isn't required, but it is an absolute best practice to ALWAYS include it on every Service.",
        example: "An `AuthService` needs the `HttpClient` to talk to the server. Because `AuthService` has a dependency, it MUST be decorated with `@Injectable()`.",
        code: `import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Angular knows to inject HttpClient because of @Injectable
  constructor(private http: HttpClient) {}
}`,
        tip: "Components do not need `@Injectable()` because the `@Component()` decorator actually inherits from `@Injectable()` under the hood!",
        mistake: "Creating a Service, injecting a dependency into its constructor, and forgetting to add `@Injectable()`. Angular will throw an error.",
        summary: "A decorator that marks a class as capable of having dependencies injected into it."
    },
    {
        id: 119,
        title: "What is 'providedIn: root'?",
        category: "Architecture & Performance",
        language: "typescript",
        explanation: "When you generate a Service using the Angular CLI, it adds `@Injectable({ providedIn: 'root' })` by default.\n\nThis tells the Angular DI system to register this service at the very top level of the application (the Root Injector). This makes the Service a **Singleton** — there will only ever be ONE instance of this service in memory, and every component that injects it will share the exact same instance and the exact same data.",
        example: "A `CartService` holds the items a user wants to buy. Because it is `providedIn: root`, the `HeaderComponent` (showing the cart count) and the `CheckoutComponent` both access the exact same array of items.",
        code: `// Automatically registers as a Singleton.
// No need to add it to the providers[] array in AppModule!
@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
  public currentUser = 'John Doe';
}`,
        tip: "`providedIn: 'root'` enables **Tree Shaking**. If you create a Service but never actually inject it anywhere, Webpack will automatically delete the service from the final production bundle, saving file size.",
        mistake: "Removing `providedIn: 'root'` and manually putting the service in the `AppModule` providers array. While it works, it breaks Tree Shaking.",
        summary: "A configuration on `@Injectable()` that creates a single, shared instance (Singleton) of the service across the entire app and enables Tree Shaking."
    },
    {
        id: 120,
        title: "Explain the Angular Hierarchical Injector.",
        category: "Architecture & Performance",
        language: "typescript",
        explanation: "Angular's Dependency Injection is hierarchical, mirroring the DOM tree. There is a Root Injector at the top, and every Component can have its own private Node Injector.\n\nWhen a Component asks for a Service, Angular looks in that Component's local injector. If it doesn't find it, it looks at the Parent Component's injector, and so on, all the way up to the Root Injector. \n\nIf you provide a service directly on a Component (`providers: [MyService]`), a **new instance** of that service is created specifically for that component and its children.",
        example: "You have a `GridComponent` that allows users to sort data. You provide a `SortService` directly on the `GridComponent`. If you put 3 Grids on the screen, Angular creates 3 independent `SortServices` (one for each grid), so sorting one grid doesn't affect the others.",
        code: `// This creates a NEW instance of LocalService
// specifically for this component and its children.
@Component({
  selector: 'app-local',
  template: '...',
  providers: [LocalService] 
})
export class LocalComponent {
  constructor(private srv: LocalService) {}
}`,
        tip: "Understanding the hierarchy is crucial. `providedIn: 'root'` = Global Singleton. `providers: [Service]` on a Component = Local, independent instance.",
        mistake: "Providing a service on a Component when you actually wanted to share state globally, resulting in confusing bugs where data doesn't sync.",
        summary: "Angular's DI system searches up the component tree to find dependencies. Providing a service at the component level creates a unique, isolated instance."
    },
    {
        id: 121,
        title: "What is an Angular Module (NgModule)?",
        category: "Architecture & Performance",
        language: "typescript",
        explanation: "An NgModule is a class decorated with `@NgModule()`. It serves as a logical grouping mechanism to consolidate related Components, Directives, Pipes, and Services into a cohesive block of functionality.\n\nBefore Angular 14 (Standalone Components), every single component had to belong to exactly one NgModule to function. Modules teach the Angular compiler how the pieces of your app fit together.",
        example: "You might have an `AuthModule` that groups together the `LoginComponent`, `RegisterComponent`, `AuthGuard`, and `AuthService`.",
        code: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoginComponent, RegisterComponent], // Things INSIDE the module
  imports: [CommonModule, FormsModule],             // Things NEEDED by this module
  exports: [LoginComponent]                         // Things PUBLICLY available
})
export class AuthModule { }`,
        tip: "Mention that while NgModules were the backbone of Angular for years, the framework is aggressively moving towards 'Standalone Components' (Angular 14+), making NgModules optional.",
        mistake: "Declaring the same Component in two different NgModules. A component can only belong to ONE module.",
        summary: "A container that groups related Angular files together and provides configuration context for the Angular compiler."
    },
    {
        id: 122,
        title: "What are the properties of @NgModule?",
        category: "Architecture & Performance",
        language: "typescript",
        explanation: "The `@NgModule` decorator takes a metadata object with several key arrays:\n\n1. **`declarations`**: The Components, Directives, and Pipes that *belong* to this module.\n2. **`imports`**: Other NgModules whose exported classes are needed by component templates in *this* module.\n3. **`exports`**: The subset of declarations that should be visible and usable in the templates of *other* modules.\n4. **`providers`**: Services that this module contributes to the global Dependency Injection system.\n5. **`bootstrap`**: The root component that Angular should insert into the `index.html` (only used in the root `AppModule`).",
        example: "A `SharedModule` declares a `ButtonComponent`. To let other modules use it, it places `ButtonComponent` in both the `declarations` and `exports` arrays.",
        code: `@NgModule({
  declarations: [MyComponent],
  imports: [BrowserModule],
  providers: [MyService],
  exports: [MyComponent],
  bootstrap: [AppComponent] // Only in root module
})`,
        tip: "Services in the `providers` array are usually global (unless the module is lazy-loaded). Components in `declarations` are private to the module unless added to `exports`.",
        mistake: "Importing a Component in the `imports` array. Only Modules go in `imports`. Components go in `declarations`.",
        summary: "Declarations (owned components), Imports (needed modules), Exports (public components), Providers (services), Bootstrap (root component)."
    },
    {
        id: 123,
        title: "What are Standalone Components (Angular 14+)?",
        category: "Architecture & Performance",
        language: "typescript",
        explanation: "Introduced in Angular 14, Standalone Components completely eliminate the need for NgModules. \n\nA Component can now specify `standalone: true` in its decorator. By doing this, the component directly imports its own dependencies (like `CommonModule` or other components) straight into its own `@Component()` metadata, rather than relying on a wrapper module.",
        example: "Instead of creating a massive `SharedModule` just to share a Button, the Button component is simply `standalone: true`, and anyone who wants it imports it directly.",
        code: `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import dependencies directly!

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule], // Define dependencies right in the component
  template: '<div *ngIf="user">{{ user }}</div>'
})
export class ProfileComponent { }`,
        tip: "This is the future of Angular. Mentioning Standalone Components shows you are up-to-date with the latest Angular paradigms.",
        mistake: "Trying to add a Standalone Component to the `declarations` array of an NgModule. Standalone components cannot be declared; they can only be `imported`.",
        summary: "Components that manage their own dependencies without requiring an enclosing NgModule, vastly simplifying Angular architecture."
    },
    {
        id: 124,
        title: "Difference between Standalone Components and NgModules?",
        category: "Architecture & Performance",
        language: "typescript",
        explanation: "The difference lies in how dependencies are resolved.\n\n**NgModules (Traditional):** Dependencies are resolved at the *Module Level*. A component looks at its parent Module to see what HTML tags it is allowed to use. It creates heavy boilerplate.\n\n**Standalone Components (Modern):** Dependencies are resolved at the *Component Level*. The component explicitly lists exactly what it needs in its own `imports` array. It creates highly modular, reusable, and tree-shakeable code.",
        example: "NgModules are like buying a toolbox to get a hammer. Standalone Components are like just buying the hammer.",
        code: `// TRADITIONAL
@NgModule({ declarations: [CardComponent], imports: [CommonModule] })
export class CardModule {}

// STANDALONE
@Component({ standalone: true, imports: [CommonModule] })
export class CardComponent {}`,
        tip: "Angular is moving towards a 'Module-less' future. You can bootstrap an entire Angular 15+ application without writing a single NgModule.",
        mistake: "Assuming NgModules are deprecated. They are not. They are fully supported for backwards compatibility, but Standalone is the recommended approach for new projects.",
        summary: "NgModules manage dependencies globally for a group of components. Standalone components manage their own dependencies explicitly."
    },
    {
        id: 125,
        title: "What is AOT Compilation?",
        category: "Architecture & Performance",
        language: "typescript",
        explanation: "AOT (Ahead-of-Time) compilation is the process of converting Angular HTML templates and TypeScript code into highly efficient vanilla JavaScript *during the build phase*, before the browser even downloads the application.\n\nBecause the browser receives pre-compiled, raw JavaScript, the application renders almost instantly.",
        example: "Instead of sending `<div *ngIf=\"show\">` to the browser and making the browser figure out what `*ngIf` means, AOT compiles it into standard DOM creation scripts (`document.createElement('div')`) on your build server.",
        code: `# Standard production build (uses AOT automatically in Angular 9+)
ng build --configuration=production`,
        tip: "AOT also provides Template Type Checking. If you have a typo in your HTML (e.g., `{{ user.fistName }}` instead of `firstName`), AOT catches it during the build and throws an error.",
        mistake: "Using JIT compilation for production deployments. It results in massive bundle sizes (because the Angular compiler has to be shipped to the user) and slow render times.",
        summary: "Compiling Angular HTML and TS into standard JS on the server during the build process, resulting in faster rendering and smaller bundles."
    },
    {
        id: 126,
        title: "Difference between JIT and AOT?",
        category: "Architecture & Performance",
        language: "typescript",
        explanation: "**JIT (Just-in-Time):**\n- Compilation happens in the user's browser at runtime.\n- The heavy Angular Compiler must be downloaded by the user.\n- Bundle sizes are larger; rendering is slower.\n- Historically used for local development.\n\n**AOT (Ahead-of-Time):**\n- Compilation happens on the build server.\n- The Angular Compiler is NOT shipped to the user.\n- Bundle sizes are much smaller; rendering is instantaneous.\n- Errors in HTML are caught during the build.\n- The standard for modern Angular (both dev and prod).",
        example: "JIT is giving the user ingredients and a recipe book. AOT is giving the user a fully baked cake.",
        code: `// Since Angular 9 (Ivy Engine), AOT is the default for everything!
// Both 'ng serve' and 'ng build' use AOT out of the box.`,
        tip: "If you are asked this, emphasize that since Angular 9 (with the Ivy engine), AOT is so fast that it is used for local development (`ng serve`) as well, effectively making JIT obsolete.",
        mistake: "Thinking you have to configure AOT manually in modern Angular. It is the default.",
        summary: "JIT compiles in the browser (slow, heavy). AOT compiles on the build server (fast, lightweight, default since Angular 9)."
    },
    {
        id: 127,
        title: "What is Change Detection in Angular?",
        category: "Architecture & Performance",
        language: "typescript",
        explanation: "Change Detection is the mechanism Angular uses to synchronize the application state (the TypeScript variables) with the UI (the HTML DOM).\n\nWhenever an asynchronous event occurs (like a click, an HTTP response, or a setTimeout), Angular assumes data *might* have changed. It runs its Change Detector from the top of the component tree to the bottom, checking every binding (like `{{ name }}`) to see if the value has changed. If it has, it updates the DOM.",
        example: "You click a button that runs `this.count++`. Angular intercepts the click event, updates the TS variable, runs Change Detection, sees `count` changed from 0 to 1, and updates the `<h1>{{ count }}</h1>` tag on the screen.",
        code: `// Angular knows when to run Change Detection because it patches 
// the browser's async APIs (using Zone.js).
button.addEventListener('click', () => {
  this.title = 'New Title';
  // Angular automatically detects this!
});`,
        tip: "Change detection in Angular is unidirectional (top-down). Data flows from parent to child, ensuring highly predictable rendering.",
        mistake: "Assuming two-way data binding (`[(ngModel)]`) violates top-down change detection. It doesn't; it's just syntactic sugar for a property binding down, and an event binding up.",
        summary: "The internal engine that constantly checks if TypeScript variables have changed and updates the HTML DOM to reflect those changes."
    },
    {
        id: 128,
        title: "Explain ChangeDetectionStrategy.Default.",
        category: "Architecture & Performance",
        language: "typescript",
        explanation: "By default, every Angular component uses `ChangeDetectionStrategy.Default`.\n\nThis means that whenever *any* event occurs *anywhere* in the application, Angular runs change detection on EVERY SINGLE COMPONENT in the entire tree, from root to leaves.\n\nAngular is incredibly fast, so it can do hundreds of thousands of checks per second, but on massive enterprise grids, this default strategy can cause performance stuttering.",
        example: "If you have a table with 10,000 rows, and the user clicks a 'Like' button on row 1, Angular checks the bindings for all 10,000 rows just to be safe.",
        code: `// This is the implicit default for all components
@Component({
  selector: 'app-slow',
  template: '...',
  // changeDetection: ChangeDetectionStrategy.Default
})
export class SlowComponent { }`,
        tip: "The Default strategy checks for value mutations. If you `push()` into an array, the Default strategy will detect the new item and update the UI.",
        mistake: "Leaving massive, static UI components on the Default strategy when they don't have dynamically changing data.",
        summary: "The default strategy where Angular checks every component in the application whenever any event happens anywhere."
    },
    {
        id: 129,
        title: "Explain ChangeDetectionStrategy.OnPush.",
        category: "Architecture & Performance",
        language: "typescript",
        explanation: "`ChangeDetectionStrategy.OnPush` is a configuration that dramatically improves performance. \n\nIt tells Angular: 'Do NOT run change detection on this component unless its `@Input()` references change, an event originates from within the component (like a click), or an Observable subscribed via Async Pipe emits a value.'",
        example: "If you have a 10,000 row table, and row 1 is clicked, the `OnPush` strategy prevents Angular from checking the other 9,999 rows, saving massive amounts of CPU time.",
        code: `import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-fast',
  template: '...',
  // Enables high-performance mode
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FastComponent {
  @Input() data: any;
}`,
        tip: "To make OnPush work, you MUST use Immutable Data Structures. If you `arr.push(newVal)`, the array reference doesn't change, so OnPush won't trigger. You must reassign: `arr = [...arr, newVal]`.",
        mistake: "Turning on OnPush and wondering why your UI has stopped updating. You must ensure you are replacing object references, not mutating them.",
        summary: "A high-performance strategy where Angular skips checking a component unless its `@Input` references change or a local event occurs."
    },
    {
        id: 130,
        title: "How does OnPush improve performance?",
        category: "Architecture & Performance",
        language: "typescript",
        explanation: "Angular represents your app as a Tree of components. When a change happens, the default behavior is to walk the entire tree. \n\nIf a component is set to `OnPush`, and Angular sees that its `@Input()` references haven't changed, Angular completely skips that component **and its entire subtree of children**.\n\nThis essentially prunes entire branches off the change detection tree, drastically reducing the number of DOM checks required per cycle.",
        example: "A massive 'Sidebar' component doesn't need to be checked when the user types in the 'Main Content' area. Setting the Sidebar to `OnPush` skips it entirely.",
        code: `// If users list reference doesn't change, 
// Angular skips checking this table entirely.
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserTableComponent {
  @Input() users: User[];
}`,
        tip: "Combine `OnPush` with the `AsyncPipe` (`| async`). The Async Pipe automatically tells the OnPush component to update only exactly when the stream emits data.",
        mistake: "Applying OnPush globally to a project that relies heavily on two-way binding (`ngModel`) and mutable arrays.",
        summary: "By skipping change detection for entire branches of the component tree if their Input references haven't changed."
    },
    {
        id: 131,
        title: "When should you use OnPush?",
        category: "Architecture & Performance",
        language: "typescript",
        explanation: "`OnPush` should be used extensively, but specifically it is perfect for **Dumb / Presentational Components**.\n\nThese are components whose sole job is to take data via `@Input()` and display it (like a custom Button, a Card, or a Table). Because they don't fetch their own data or manage global state, they only ever need to update when their parent gives them new Input references.",
        example: "A custom `<app-badge [count]=\"5\">` component. It only ever needs to update if the `count` changes. It is the perfect candidate for OnPush.",
        code: `// Perfect candidate for OnPush
@Component({
  selector: 'app-stat-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<h2>{{ title }}</h2><p>{{ value }}</p>'
})
export class StatCardComponent {
  @Input() title: string;
  @Input() value: number;
}`,
        tip: "Many enterprise teams enforce a strict linting rule that requires `OnPush` on every single component in the application.",
        mistake: "Using OnPush on a component that updates its own data via `setTimeout` or `setInterval` without manually telling Angular to check the view.",
        summary: "It is highly recommended for 'Presentational Components' that rely exclusively on `@Inputs` and Immutable data."
    },
    {
        id: 132,
        title: "What is Angular Zone (NgZone)?",
        category: "Architecture & Performance",
        language: "typescript",
        explanation: "Angular relies on a library called `Zone.js` to know exactly when to trigger Change Detection. \n\n`Zone.js` creates an execution context (a 'Zone') that intercepts all asynchronous operations in the browser (like DOM events, `setTimeout`, `setInterval`, `XMLHttpRequest`). When one of these async tasks finishes, Zone.js alerts Angular, and Angular runs change detection to update the UI.",
        example: "Without Zone.js, if you ran `setTimeout(() => this.name = 'John', 1000)`, the variable would update, but the HTML would never change because Angular wouldn't know it happened.",
        code: `// Zone.js automatically patches this. 
// When the timeout finishes, Angular updates the DOM.
setTimeout(() => {
  this.message = 'Loaded!';
}, 2000);`,
        tip: "You can actually build 'Zoneless' Angular apps for maximum performance by removing Zone.js, but you must manually trigger change detection for everything using `ChangeDetectorRef.detectChanges()` or Angular 18's new Signals.",
        mistake: "Including third-party libraries (like heavy physics engines or chart rendering) that use `requestAnimationFrame`, causing Zone.js to constantly trigger Change Detection and freeze the app.",
        summary: "The execution context (powered by Zone.js) that intercepts all asynchronous events in the browser to automatically trigger Angular's change detection."
    },
    {
        id: 133,
        title: "When do you use runOutsideAngular()?",
        category: "Architecture & Performance",
        language: "typescript",
        explanation: "If you have an asynchronous operation that fires rapidly (like tracking mouse movements, `requestAnimationFrame`, or a fast `setInterval`) but does NOT need to update the Angular UI, it will destroy your performance because Zone.js will trigger Change Detection on every tick.\n\nYou inject `NgZone` and use `this.ngZone.runOutsideAngular(...)` to execute the code outside of Angular's awareness. Angular will ignore the events, preventing change detection.",
        example: "You are drawing a complex animation on an HTML5 `<canvas>` using `requestAnimationFrame`. The UI doesn't care, only the canvas does. Run it outside Angular.",
        code: `import { NgZone } from '@angular/core';

export class AnimationComponent {
  constructor(private ngZone: NgZone) {}

  startHeavyAnimation() {
    // Angular will IGNORE everything inside this block!
    this.ngZone.runOutsideAngular(() => {
      
      window.addEventListener('mousemove', (e) => {
        // Runs 60 times a second, but no Change Detection occurs!
        this.updateCanvas(e.x, e.y); 
      });
      
    });
  }
}`,
        tip: "If you calculate something outside Angular and eventually need to update the UI, you must wrap the UI update in `this.ngZone.run(...)` to bring it back into Angular's view.",
        mistake: "Leaving rapid window event listeners (scroll, mousemove) inside the Angular Zone.",
        summary: "To execute high-frequency asynchronous code that doesn't affect the UI, preventing Angular from triggering unnecessary and expensive change detection cycles."
    },
    {
        id: 134,
        title: "What is ViewEncapsulation?",
        category: "Architecture & Performance",
        language: "typescript",
        explanation: "ViewEncapsulation is Angular's mechanism for scoping CSS styles to a specific component. \n\nBy default, if you define an `h1 { color: red }` rule inside `card.component.css`, it will ONLY turn the `h1` elements inside the Card component red. It will not leak out and affect `h1` elements in the rest of the application.",
        example: "This allows developers to write simple, generic CSS class names (like `.container` or `.title`) inside a component without worrying about conflicting with the same class names in other components.",
        code: `import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custom',
  template: '<h1>Hello</h1>',
  styles: ['h1 { color: red; }'],
  
  // You can alter the encapsulation mode here
  encapsulation: ViewEncapsulation.Emulated // (Default)
})
export class CustomComponent { }`,
        tip: "Angular achieves this by dynamically adding unique attributes to the HTML elements at runtime (e.g., `<h1 _ngcontent-c41>`) and appending that attribute to the CSS rule.",
        mistake: "Trying to style a child component's internal HTML from the parent component's CSS. Encapsulation prevents this. (Historically done with `::ng-deep`, though it is deprecated).",
        summary: "The mechanism that ensures a component's CSS styles are scoped locally and do not leak out to affect the global application styles."
    },
    {
        id: 135,
        title: "Difference between Emulated, None, and ShadowDom encapsulation?",
        category: "Architecture & Performance",
        language: "typescript",
        explanation: "These are the three settings for `ViewEncapsulation`:\n\n1. **`Emulated` (Default):** Simulates scoping by adding unique attributes (`_ngcontent-xyz`) to HTML and CSS. Styles don't leak out, but global styles *can* leak in.\n2. **`None`:** Disables encapsulation entirely. The component's CSS is injected globally into the `<head>`. It will affect the entire application. (Useful for global theme components).\n3. **`ShadowDom`:** Uses the browser's native Web Components Shadow DOM API. Styles absolutely cannot leak out, and global styles absolutely cannot leak in. Complete isolation.",
        example: "If you build a third-party widget (like an Intercom chat bubble) to drop into other people's websites, you want `ShadowDom` so their ugly website CSS doesn't ruin your beautiful chat bubble.",
        code: `// 1. Emulated (Default, safe, standard)
encapsulation: ViewEncapsulation.Emulated

// 2. None (CSS leaks everywhere, use with caution)
encapsulation: ViewEncapsulation.None

// 3. ShadowDom (Strict native isolation)
encapsulation: ViewEncapsulation.ShadowDom`,
        tip: "Most enterprise projects stick to the default `Emulated`. Use `None` very rarely, typically only on the root `AppComponent` or specialized wrapper components.",
        mistake: "Using `ViewEncapsulation.None` lazily just to style a child component, inadvertently destroying the CSS of the entire application.",
        summary: "Emulated simulates scoping (default). None makes styles global. ShadowDom uses strict browser-level isolation."
    },
    {
        id: 136,
        title: "What is an HttpInterceptor?",
        category: "Advanced Features & Best Practices",
        language: "typescript",
        explanation: "An `HttpInterceptor` is a mechanism that allows you to intercept and inspect every outgoing HTTP Request and every incoming HTTP Response before they are processed by `HttpClient`.\n\nYou implement the `HttpInterceptor` interface, which requires a `intercept(req, next)` method. Because it sits in the middle of the HTTP pipeline, you can clone and modify the request before passing it to the `next` handler.",
        example: "The most common example is automatically attaching a JWT (JSON Web Token) to the `Authorization` header of every outgoing API request, so you don't have to do it manually in 50 different services.",
        code: `import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // 1. Clone the request and add the header
    const authReq = req.clone({
      setHeaders: { Authorization: \`Bearer \${localStorage.getItem('token')}\` }
    });
    
    // 2. Pass the cloned request to the next handler
    return next.handle(authReq);
  }
}`,
        tip: "HTTP Requests are immutable in Angular. You cannot modify `req` directly; you MUST use `req.clone()`.",
        mistake: "Forgetting to provide the interceptor in the `AppModule` using `multi: true`, which overrides the default HTTP behavior.",
        summary: "A middleman that catches all HTTP requests and responses globally, allowing you to modify headers, handle errors, or add logging."
    },
    {
        id: 137,
        title: "Common use cases for Interceptors?",
        category: "Advanced Features & Best Practices",
        language: "typescript",
        explanation: "Interceptors are incredibly powerful for cross-cutting concerns (logic that affects the whole app). Common use cases include:\n\n1. **Authentication:** Attaching JWT tokens to headers.\n2. **Global Error Handling:** Catching 401 (Unauthorized) errors globally and redirecting the user to the login screen.\n3. **Loading Spinners:** Showing a global loading spinner when a request starts, and hiding it when the response arrives.\n4. **Logging:** Logging request durations for performance monitoring.\n5. **Caching:** Intercepting a GET request, returning a cached response if available, or letting it go to the server if not.",
        example: "Catching a 401 error globally, attempting to refresh the user's token silently, and retrying the failed request.",
        code: `intercept(req: HttpRequest<any>, next: HttpHandler) {
  return next.handle(req).pipe(
    catchError(error => {
      if (error.status === 401) {
        this.auth.logout();
        this.router.navigate(['/login']);
      }
      return throwError(() => error);
    })
  );
}`,
        tip: "You can provide multiple interceptors. Angular will execute them in the exact order they are listed in the `providers` array.",
        mistake: "Writing complex business logic in an interceptor. Interceptors should be lightweight network utilities, not state managers.",
        summary: "Adding Auth tokens, handling global HTTP errors (like 401s), managing global loading spinners, and caching."
    },
    {
        id: 138,
        title: "How to handle global errors in Angular? (ErrorHandler)",
        category: "Advanced Features & Best Practices",
        language: "typescript",
        explanation: "While Interceptors handle *HTTP network* errors, Angular provides a built-in `ErrorHandler` class to catch *JavaScript runtime* errors (like `TypeError: Cannot read properties of undefined`).\n\nBy default, Angular just logs these errors to the console. You can create a custom `GlobalErrorHandler` by implementing `ErrorHandler`, overriding the `handleError(error)` method, and providing it in your root module.",
        example: "You want to catch any unhandled JavaScript crash in the browser and send the stack trace to an external service like Sentry or Datadog, while showing a friendly 'Something went wrong' toast to the user.",
        code: `import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: Error) {
    // 1. Send error to logging server (e.g., Sentry)
    console.error('Captured in GlobalErrorHandler:', error.message);
    
    // 2. Show a toast notification to the user
    // Note: Inject toast service using Injector to avoid circular dependencies
  }
}

// In AppModule:
// { provide: ErrorHandler, useClass: GlobalErrorHandler }`,
        tip: "If you need to use DI inside a custom `ErrorHandler`, you must use Angular's `Injector` manually (e.g., `injector.get(ToastService)`) to avoid Circular Dependency errors.",
        mistake: "Using `try/catch` blocks literally everywhere in your application instead of relying on a centralized Global Error Handler.",
        summary: "Implement the `ErrorHandler` class and provide it in AppModule to catch and log all unhandled JavaScript exceptions globally."
    },
    {
        id: 139,
        title: "What is Angular Universal (SSR)?",
        category: "Advanced Features & Best Practices",
        language: "typescript",
        explanation: "Angular Universal (now tightly integrated into modern Angular CLI as Server-Side Rendering) is a technology that executes your Angular application on a Node.js server rather than in the user's browser.\n\nInstead of sending an empty `index.html` to the browser and making the browser render the DOM, the Node server renders the fully populated HTML page and sends it down. The browser displays it instantly, and then Angular 'hydrates' (attaches event listeners) to make it interactive in the background.",
        example: "When someone shares your Angular blog post on Twitter, the Twitter bot doesn't run JavaScript. Without SSR, it sees a blank page. With SSR, the Node server renders the HTML with the meta tags, so the Twitter bot reads the title and image perfectly.",
        code: `# Adding SSR to an existing Angular project
ng add @nguniversal/express-engine

# Or in Angular 17+ when creating a new project:
ng new my-app --ssr`,
        tip: "SSR is essential for SEO (Search Engine Optimization) and for improving the First Contentful Paint (FCP) on slow mobile devices.",
        mistake: "Using browser-specific objects like `window`, `document`, or `localStorage` directly in your components. These don't exist on a Node.js server, so your SSR build will crash!",
        summary: "A technology that renders the Angular application on a Node server to send fully populated HTML to the client for better SEO and performance."
    },
    {
        id: 140,
        title: "Benefits of Server-Side Rendering (SSR)?",
        category: "Advanced Features & Best Practices",
        language: "typescript",
        explanation: "SSR provides three massive architectural benefits:\n\n1. **SEO (Search Engine Optimization):** Web crawlers (Googlebot, Bing) and social media link previewers (Twitter, Facebook) can instantly read the fully rendered HTML content and meta tags.\n2. **Performance (FCP - First Contentful Paint):** Users see the complete UI almost instantly, even on slow 3G connections, because they don't have to wait for massive JavaScript bundles to download, parse, and execute before seeing the screen.\n3. **Accessibility:** Better support for users with heavily constrained devices or JavaScript disabled.",
        example: "An E-commerce store built in Angular absolutely needs SSR so that Google can index every product page, and so users on mobile phones don't stare at a blank white screen for 4 seconds.",
        code: `// To safely check if you are on the server or browser in SSR:
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  if (isPlatformBrowser(this.platformId)) {
    // Safe to use window.localStorage here!
  }
}`,
        tip: "In Angular 17+, Hydration is non-destructive, meaning Angular doesn't wipe out the server-rendered HTML and redraw it; it intelligently attaches event listeners to the existing HTML.",
        mistake: "Implementing SSR for a private, behind-a-login enterprise dashboard. Dashboards don't need SEO, and the server overhead of SSR isn't worth it.",
        summary: "Massively improved SEO, faster perceived load times (First Contentful Paint), and proper social media link previews."
    },
    {
        id: 141,
        title: "Difference between Client-Side Rendering (CSR) and SSR?",
        category: "Advanced Features & Best Practices",
        language: "typescript",
        explanation: "**Client-Side Rendering (CSR):**\n- Server sends a nearly empty `index.html` (e.g., `<app-root></app-root>`).\n- Browser downloads `main.js`, runs Angular, and generates the HTML dynamically in the browser.\n- Slow initial load, poor SEO out-of-the-box, but fast navigation afterward.\n\n**Server-Side Rendering (SSR):**\n- Server runs Angular, generates the final HTML, and sends it to the browser.\n- Browser displays the HTML instantly.\n- Browser then downloads `main.js` and 'hydrates' the page to make buttons clickable.\n- Fast initial load, excellent SEO, requires a Node server to host.",
        example: "CSR is ordering a pizza kit and baking it in your own oven. SSR is ordering a fully baked pizza that you can eat immediately.",
        code: `<!-- CSR initial payload -->
<body>
  <app-root></app-root> 
  <script src="main.js"></script>
</body>

<!-- SSR initial payload -->
<body>
  <app-root>
    <h1>Welcome to My Blog</h1>
    <p>Here is the content...</p>
  </app-root> 
</body>`,
        tip: "Angular supports SSG (Static Site Generation) as well, known as Prerendering. This generates SSR HTML files at *build time* instead of *run time*, combining the speed of SSR with cheap CDN hosting.",
        mistake: "Assuming SSR makes the *entire* app faster. It only makes the *initial* load faster. Subsequent routing behaves exactly like CSR.",
        summary: "CSR relies on the user's browser to build the HTML. SSR builds the HTML on a Node server and sends the finished product to the browser."
    },
    {
        id: 142,
        title: "What is State Management in Angular? (NgRx)",
        category: "Advanced Features & Best Practices",
        language: "typescript",
        explanation: "State Management is the practice of maintaining the data (state) of an application in a centralized, predictable, and trackable way.\n\nWhile small apps can manage state using simple Angular Services (with `BehaviorSubject`), massive enterprise apps use libraries like **NgRx** (inspired by Redux). NgRx provides a single, immutable Global Store. Components do not modify data directly; they dispatch actions to the Store, which updates the data predictably.",
        example: "A shopping cart. The Header needs the item count, the Sidebar needs the total price, and the Checkout page needs the item list. Instead of passing data between 5 components, they all just read from the central NgRx Store.",
        code: `// With NgRx, a component just asks the global store for data.
export class HeaderComponent {
  // Selects data from the global store as an Observable
  cartCount$ = this.store.select(selectCartCount);

  constructor(private store: Store) {}
}`,
        tip: "State management solves the 'Prop Drilling' problem (passing data down through 10 layers of `@Inputs()`) and the 'Spaghetti State' problem (data mutated unpredictably by random components).",
        mistake: "Adding NgRx to a simple CRUD application. NgRx introduces massive boilerplate. Only use it when the application state is highly complex.",
        summary: "A centralized architecture (usually using NgRx) for storing and mutating global application data predictably using a single source of truth."
    },
    {
        id: 143,
        title: "Explain the core concepts of NgRx (Store, Actions, Reducers, Selectors, Effects).",
        category: "Advanced Features & Best Practices",
        language: "typescript",
        explanation: "NgRx is based on 5 core pillars:\n\n1. **Store:** The single, immutable database for your entire UI.\n2. **Actions:** Events dispatched by components (e.g., 'User Clicked Add To Cart'). They describe *what* happened, not how to handle it.\n3. **Reducers:** Pure functions that listen to Actions. They take the *old state* and the *Action*, and return a brand *new state*. (They are the only things allowed to change the Store).\n4. **Selectors:** Pure functions used by components to slice specific pieces of data out of the Store.\n5. **Effects:** Side-effect handlers (like HTTP requests). They listen for Actions, do asynchronous work, and then dispatch *new* Actions (like 'Load Success').",
        example: "Component dispatches `[Load Users]`. Effect sees this, makes HTTP call, and dispatches `[Users Loaded Success]`. Reducer sees the Success action, puts the users in the Store. Component uses a Selector to read the new users.",
        code: `// 1. Action
export const loadUsers = createAction('[User Page] Load Users');

// 2. Reducer
export const userReducer = createReducer(initialState,
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users }))
);

// 3. Selector
export const selectAllUsers = createSelector(selectUserState, state => state.users);`,
        tip: "Reducers MUST be pure functions. You can never mutate the state directly (`state.users = newUsers`). You must always return a new object (`{ ...state, users: newUsers }`).",
        mistake: "Putting HTTP calls inside a Reducer. Reducers must be synchronous. HTTP calls belong in Effects.",
        summary: "Actions trigger State changes. Reducers execute State changes synchronously. Effects handle async work. Selectors read State. The Store holds State."
    },
    {
        id: 144,
        title: "What are NgRx Effects?",
        category: "Advanced Features & Best Practices",
        language: "typescript",
        explanation: "Because Reducers in NgRx must be pure, synchronous functions, they cannot handle asynchronous operations like HTTP requests or `setTimeout`.\n\n`@ngrx/effects` provides an elegant solution. An Effect listens to the stream of Actions being dispatched. When it sees an Action it cares about (e.g., `LoadData`), it intercepts it, makes the HTTP request to the backend, waits for the response, and then dispatches a brand *new* Action containing the data (e.g., `LoadDataSuccess`).",
        example: "Separation of concerns: The Component just says 'I want data' (Action). The Effect actually fetches the data (HTTP). The Reducer stores the data (State).",
        code: `import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class UserEffects {
  
  // Listens for 'loadUsers' action, makes API call, dispatches 'Success'
  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(loadUsers),
    mergeMap(() => this.api.getUsers().pipe(
      map(users => loadUsersSuccess({ users })),
      catchError(error => of(loadUsersFailure({ error })))
    ))
  ));

  constructor(private actions$: Actions, private api: ApiService) {}
}`,
        tip: "Effects are incredibly powerful because they isolate all side-effects from your components. Your components become purely UI-driven.",
        mistake: "Forgetting to return a new Action from an Effect, causing the Effect stream to terminate or hang.",
        summary: "A mechanism in NgRx that listens for dispatched actions, performs asynchronous side-effects (like API calls), and dispatches new actions with the result."
    },
    {
        id: 145,
        title: "Why use NgRx when you can use RxJS Subjects?",
        category: "Advanced Features & Best Practices",
        language: "typescript",
        explanation: "For 80% of applications, an Angular Service using a `BehaviorSubject` is perfectly sufficient for state management. \n\nHowever, NgRx is chosen for massive enterprise applications because it enforces strict architectural boundaries:\n1. **Predictability:** State can only be mutated by Reducers based on explicit Actions.\n2. **DevTools:** NgRx integrates with Redux DevTools, allowing you to time-travel, replay actions, and see exactly what changed the state and when.\n3. **Testability:** Reducers and Selectors are pure functions, making them trivially easy to unit test.",
        example: "In a Subject-based service, any component can call `this.service.subject.next(newData)` and break the app. In NgRx, components cannot mutate data; they can only ask for it to be mutated via Actions.",
        code: `// Simple Subject State (Good for medium apps)
export class StateService {
  private userSub = new BehaviorSubject<User>(null);
  user$ = this.userSub.asObservable();
  
  // Harder to track who called this and why
  updateUser(u: User) { this.userSub.next(u); } 
}`,
        tip: "Be honest in interviews: 'NgRx is powerful, but it comes with immense boilerplate. I evaluate the complexity of the app before deciding between a Service with a BehaviorSubject vs NgRx.'",
        mistake: "Over-engineering. Putting a simple boolean flag like 'isSidebarOpen' into an NgRx store.",
        summary: "NgRx provides strict predictability, incredible debugging tools (time-travel), and high testability for complex enterprise state, whereas Subjects can become spaghetti."
    },
    {
        id: 146,
        title: "How do you test Angular Components? (Karma / Jasmine / Jest)",
        category: "Advanced Features & Best Practices",
        language: "typescript",
        explanation: "Angular components are tested using a combination of a test runner and an assertion library.\n\nHistorically, Angular CLI used **Karma** (Test Runner, opens a real browser) and **Jasmine** (Assertion library, provides `describe`, `it`, `expect`).\nRecently, the community and Angular tooling are shifting heavily towards **Jest**, which runs in Node.js (JSDOM) without a browser, making it significantly faster.",
        example: "Unit testing a component involves creating it, passing inputs, clicking buttons via code, and checking if the HTML or variables updated correctly.",
        code: `describe('ButtonComponent', () => {
  it('should display the correct label', () => {
    // 1. Arrange
    component.label = 'Click Me';
    fixture.detectChanges(); // Trigger Angular change detection
    
    // 2. Act
    const btnText = fixture.nativeElement.querySelector('button').textContent;
    
    // 3. Assert
    expect(btnText).toContain('Click Me');
  });
});`,
        tip: "Always remember the AAA pattern for testing: Arrange (setup), Act (do something), Assert (verify the result).",
        mistake: "Testing the framework instead of your logic. Don't write tests to prove that Angular's `*ngIf` works. Test your business logic.",
        summary: "Using Jasmine (or Jest) for assertions (`expect(x).toBe(y)`) and the Angular `TestBed` utility to instantiate components and trigger change detection."
    },
    {
        id: 147,
        title: "What is TestBed?",
        category: "Advanced Features & Best Practices",
        language: "typescript",
        explanation: "`TestBed` is Angular's primary utility for Unit Testing. It creates a dynamic, isolated Angular environment specifically for a test suite.\n\nBecause components rely on Dependency Injection (Services) and HTML templates, you can't just say `new MyComponent()`. `TestBed` allows you to configure a mini-NgModule specifically for the test, providing Mock services and compiling the HTML.",
        example: "If `UserComponent` requires an `ApiService`, you use `TestBed` to provide a Fake ApiService so your unit test doesn't actually make real HTTP requests.",
        code: `import { TestBed, ComponentFixture } from '@angular/core/testing';

beforeEach(async () => {
  // Configure the mini testing module
  await TestBed.configureTestingModule({
    declarations: [ UserComponent ],
    // Inject a fake service instead of the real one!
    providers: [ { provide: ApiService, useValue: mockApiService } ]
  }).compileComponents();
  
  // Create the component and its HTML DOM
  fixture = TestBed.createComponent(UserComponent);
  component = fixture.componentInstance;
});`,
        tip: "Use `fixture.detectChanges()` manually in tests! In production, Zone.js triggers change detection automatically. In tests, you have to tell Angular exactly when to update the DOM.",
        mistake: "Importing real HTTP Modules (`HttpClientModule`) into `TestBed` and accidentally wiping production databases during a unit test. Always use `HttpClientTestingModule` or Mocks.",
        summary: "An Angular utility that configures a dynamic testing module, resolves dependency injection, and creates the component and its DOM for testing."
    },
    {
        id: 148,
        title: "Difference between Unit Testing and E2E Testing? (Cypress)",
        category: "Advanced Features & Best Practices",
        language: "typescript",
        explanation: "**Unit Testing (Jasmine/Jest):** Tests isolated, individual pieces of code (a single Component or a single Service). Services are mocked. Focuses on code correctness. Very fast.\n\n**E2E Testing (Cypress / Playwright / Protractor):** Tests the entire application from the user's perspective. It opens a real browser, clicks real buttons, hits the real database (usually staging), and verifies the final UI. Focuses on user flows. Very slow.",
        example: "Unit Test: 'Does the `sum(2,2)` function return 4?' \nE2E Test: 'Can a user log in, put a shoe in the cart, enter a credit card, and see the success screen?'",
        code: `// Cypress E2E Test Example
describe('Login Flow', () => {
  it('should login and redirect to dashboard', () => {
    cy.visit('/login');
    cy.get('#email').type('test@test.com');
    cy.get('#password').type('password123');
    cy.get('button[type="submit"]').click();
    
    // Verify routing and UI
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome back!');
  });
});`,
        tip: "Mention that Cypress or Playwright are the modern standards for E2E testing in Angular, completely replacing the deprecated Protractor.",
        mistake: "Trying to achieve 100% E2E test coverage. E2E tests are brittle and slow. Rely on the 'Testing Pyramid': Lots of Unit tests, some Integration tests, and a few critical E2E tests.",
        summary: "Unit testing checks isolated code blocks with mocked dependencies. E2E testing simulates a real user driving a browser through the complete application stack."
    },
    {
        id: 149,
        title: "How do you optimize an Angular application for production?",
        category: "Advanced Features & Best Practices",
        language: "typescript",
        explanation: "Optimizing Angular involves several architectural choices:\n\n1. **Lazy Loading:** Split the app into modules and only load them when the user routes to them.\n2. **AOT Compilation:** Always use Ahead-of-Time compilation (default).\n3. **OnPush Change Detection:** Use `ChangeDetectionStrategy.OnPush` to prevent unnecessary DOM checks.\n4. **Tree Shaking:** Use `providedIn: 'root'` so unused services are deleted from the build.\n5. **TrackBy:** Always use `trackBy` with `*ngFor` to prevent DOM destruction during array updates.\n6. **Async Pipe:** Use `| async` to prevent memory leaks.\n7. **Server-Side Rendering (SSR):** For faster perceived load times (FCP).",
        example: "An enterprise app takes 10 seconds to load. You implement Lazy Loading, cutting the initial bundle from 5MB to 500KB. You implement OnPush, making the grid scroll smoothly at 60fps.",
        code: `// A quick win for ngFor performance
<li *ngFor="let item of items; trackBy: trackById">
  {{ item.name }}
</li>

// In TS
trackById(index: number, item: any): number {
  return item.id;
}`,
        tip: "This is a guaranteed interview question. Rattle off 'Lazy Loading, OnPush, TrackBy, and Async Pipe' to immediately prove you are a Senior developer.",
        mistake: "Trying to optimize performance by writing clever JavaScript hacks instead of using Angular's built-in architectural tools (like Lazy Loading).",
        summary: "By utilizing Lazy Loading, AOT, OnPush Change Detection, TrackBy functions, Async Pipes, and proper Tree Shaking."
    },
    {
        id: 150,
        title: "What are Signals in Angular (Angular 16+)?",
        category: "Advanced Features & Best Practices",
        language: "typescript",
        explanation: "Signals represent the biggest paradigm shift in Angular history. Introduced as a developer preview in Angular 16 (and stable in 17+), a Signal is a wrapper around a value that can notify interested consumers when that value changes.\n\nUnlike RxJS Observables, Signals always have a current value, they are synchronous, and they don't require subscribing or unsubscribing.\nMost importantly, Signals allow Angular to know *exactly which specific component* changed, paving the way for 'Zoneless' Angular and fine-grained reactivity, making `Zone.js` obsolete.",
        example: "Instead of declaring a variable `count = 0` and relying on Zone.js to magically guess when it changes, you declare a Signal. When you update the Signal, Angular updates ONLY the HTML bound to that exact Signal.",
        code: `import { Component, signal, computed } from '@angular/core';

@Component({
  template: \`
    <!-- Read the signal using parentheses () -->
    <h1>Count: {{ count() }}</h1>
    <h2>Double: {{ double() }}</h2>
    <button (click)="increment()">Add</button>
  \`
})
export class SignalComponent {
  // 1. Define a writable signal
  count = signal(0);
  
  // 2. Define a computed signal (updates automatically when count changes)
  double = computed(() => this.count() * 2);

  increment() {
    // 3. Update the signal
    this.count.update(value => value + 1);
  }
}`,
        tip: "Signals do NOT replace RxJS. RxJS is for managing asynchronous streams of events (like HTTP or Websockets). Signals are for managing synchronous application state.",
        mistake: "Thinking Signals are just a clone of React State. Signals are fundamentally different because they track dependency graphs, allowing for fine-grained DOM updates without re-rendering the whole component.",
        summary: "A modern, synchronous, reactive primitive that tracks state changes precisely, enabling fine-grained UI updates and eventually eliminating the need for Zone.js."
    }
];

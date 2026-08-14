// Level 8: Services & Dependency Injection (In-Depth Expanded Edition)
export const level8ServicesDependencyInjection = {
  id: 'level-8',
  title: 'Level 8: Services & Dependency Injection',
  icon: 'bi-box-arrow-in-down-right',
  color: '#06b6d4',
  description: 'Master separation of concerns, the @Injectable decorator, providedIn: "root" singleton scoping, the modern inject() function vs constructor injection, and hierarchical injectors in baby steps.',
  chapters: [
    {
      id: 'services-and-di',
      title: '08. Services & Dependency Injection (DI)',
      lessons: [
        {
          id: 'services-and-injectable-root',
          slug: 'services-and-injectable-root',
          order: '8.1',
          title: 'Creating Injectable Services & Application Singletons',
          subtitle: 'Why components should only handle presentation, extracting business logic into @Injectable services, and providedIn: "root" in baby steps.',
          chapterId: 'services-and-di',
          chapterTitle: '08. Services & Dependency Injection (DI)',
          levelTitle: 'Level 8: Services & Dependency Injection',
          goal: 'Master creating singleton services to manage state, business calculations, and API communications across multiple components.',
          prerequisites: ['Level 7 completed.'],
          concept: `### Why Services Exist: Separation of Concerns
In professional software engineering, **Components should NOT contain heavy business logic, HTTP calls, or storage mechanisms**.
- **Component**: Responsible strictly for the **View (UI presentation, rendering, and capturing user gestures)**.
- **Service**: Responsible for **Business Logic (data fetching, state calculation, validation, logging, authentication)**.

---

### What is Dependency Injection (DI)?
Instead of a component creating its own dependencies via \`new MyService()\` (tight coupling), Angular's **Hierarchical Dependency Injection Framework** instantiates the service and automatically supplies (*injects*) it wherever requested!

---

### The \`providedIn: 'root'\` Singleton Pattern:
Decorating a service with \`@Injectable({ providedIn: 'root' })\` tells Angular to register this service in the root application injector.
- **Singleton**: Only **one shared instance** is created for the entire application.
- **Tree-Shakable**: If no component injects the service, the build compiler removes it from the final production bundle!`,
          diagram: `flowchart TD
    Service["@Injectable({ providedIn: 'root' })\nCartService (Singleton Instance)"] 
    Service -->|"Injected into"| CompA["ProductCatalogComponent (Add to Cart)"]
    Service -->|"Injected into"| CompB["NavbarComponent (Cart Counter Badge)"]
    Service -->|"Injected into"| CompC["CheckoutComponent (Payment Calculation)"]
    
    style Service fill:#cfe2ff,stroke:#084298,color:#084298
    style CompA fill:#d1e7dd,stroke:#198754,color:#0f5132
    style CompB fill:#d1e7dd,stroke:#198754,color:#0f5132
    style CompC fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Generating and Implementing a CartService',
              explanation: 'Create a singleton stateful service with Angular Signals.',
              command: `import { Injectable, signal, computed } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root' // Singleton root registration & tree-shakable!
})
export class CartService {
  // 1. Reactive internal state with signals:
  private itemsSignal = signal<CartItem[]>([]);

  // 2. Public read-only computed state:
  items = this.itemsSignal.asReadonly();
  totalCount = computed(() => this.itemsSignal().length);
  totalPrice = computed(() => 
    this.itemsSignal().reduce((sum, item) => sum + item.price, 0)
  );

  addItem(item: CartItem): void {
    this.itemsSignal.update(current => [...current, item]);
  }

  removeItem(id: number): void {
    this.itemsSignal.update(current => current.filter(i => i.id !== id));
  }
}`
            }
          ],
          verification: 'Inspect how CartService exposes read-only signals and mutation methods without exposing raw internal state.',
          expectedResult: 'A clean, centralized, reactive singleton service.',
          summary: 'Extract business logic and shared state into @Injectable({ providedIn: \'root\' }) services to keep components lean and testable.'
        },
        {
          id: 'modern-inject-function-vs-constructor',
          slug: 'modern-inject-function-vs-constructor',
          order: '8.2',
          title: 'The Modern inject() Function vs Constructor Injection',
          subtitle: 'Comparing Angular 16+ inject() with traditional constructor DI, injection context rules, and writing reusable injection helper functions in baby steps.',
          chapterId: 'services-and-di',
          chapterTitle: '08. Services & Dependency Injection (DI)',
          levelTitle: 'Level 8: Services & Dependency Injection',
          goal: 'Master using the modern inject() function for cleaner dependency injection and higher-order composable utilities.',
          prerequisites: ['Lesson 8.1 completed.'],
          concept: `### Modern \`inject()\` Function vs Constructor DI

Historically, Angular injected dependencies exclusively through class constructor parameters:

\`\`\`typescript
// Traditional Constructor Injection:
export class ProductComponent {
  constructor(
    private cartService: CartService,
    private router: Router
  ) {}
}
\`\`\`

---

### The Modern \`inject()\` API (Recommended Standard):
Angular allows direct property assignment using the **\`inject()\`** function:

\`\`\`typescript
// Modern inject() API:
export class ProductComponent {
  private cartService = inject(CartService);
  private router = inject(Router);
}
\`\`\`

---

### Why \`inject()\` is the Modern Standard:
1. **Cleaner Code**: Eliminates boilerplate constructor parameter lists.
2. **Superior Inheritance**: Child classes don't need to pass \`super(serviceA, serviceB)\` to parent constructors!
3. **Composable Functional Utilities**: You can write custom functional helpers that inject dependencies outside of class declarations (e.g. \`injectParams()\`, \`injectAuth()\`)!`,
          diagram: `flowchart LR
    Modern["Modern inject(CartService)\n- Direct property initialization\n- No super() in subclasses\n- Composable functional DI"] 
    Old["Traditional constructor(private cart: CartService)\n- Heavy constructor parameters\n- Subclasses require super(...)"]
    
    style Modern fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Old fill:#f8d7da,stroke:#dc3545,color:#842029`,
          steps: [
            {
              title: 'Step 1: Injecting Services via Modern inject() in a Component',
              explanation: 'Clean injection with zero constructor boilerplate.',
              command: `import { Component, inject } from '@angular/core';
import { CartService, CartItem } from './cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  template: \`
    <div class="card p-3 border shadow-sm">
      <h5>{{ product.name }}</h5>
      <p class="text-muted">\${{ product.price }}</p>
      <button class="btn btn-primary" (click)="addToCart()">Add to Cart</button>
    </div>
  \`
})
export class ProductCardComponent {
  // Direct injection with inject():
  private cartService = inject(CartService);

  product: CartItem = { id: 1, name: 'Wireless Headphones', price: 99.99 };

  addToCart() {
    this.cartService.addItem(this.product);
  }
}`
            }
          ],
          verification: 'Verify that calling `inject(CartService)` resolves the singleton instance smoothly without a constructor.',
          expectedResult: 'Clean, modern dependency injection matching current Angular standards.',
          commonMistakes: [
            {
              problem: 'Calling `inject(MyService)` inside a lifecycle hook or asynchronous method (e.g. inside `ngOnInit` or a `setTimeout`).',
              why: '`inject()` must be executed inside an active Injection Context (during class property construction).',
              fix: 'Declare `inject(MyService)` as a class property initializer or inside the `constructor()`.'
            }
          ],
          quiz: {
            question: 'Where can the modern `inject()` function be called in an Angular component?',
            options: [
              'Inside any setTimeout callback.',
              'Only inside an active Injection Context (e.g. class property initializers or constructor).',
              'Inside the HTML template directly.',
              'Only on a Node.js server.'
            ],
            correctIndex: 1,
            explanation: 'inject() requires an active Injection Context and must be executed during component construction or property initialization.'
          },
          summary: 'Modern Angular uses inject(MyService) for clean, composable, and inheritance-friendly dependency injection without constructor parameter bloat.'
        }
      ]
    }
  ]
};

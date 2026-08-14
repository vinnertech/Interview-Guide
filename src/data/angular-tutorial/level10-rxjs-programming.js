// Level 10: Reactive Programming with RxJS (In-Depth Expanded Edition)
export const level10RxjsProgramming = {
  id: 'level-10',
  title: 'Level 10: Reactive Programming with RxJS',
  icon: 'bi-infinity',
  color: '#ec4899',
  description: 'Master Observables, Observers, Subscriptions, pipe() transformations, core operators (map, filter, tap, debounceTime, distinctUntilChanged), switchMap search pipelines, and avoiding memory leaks with AsyncPipe and takeUntilDestroyed() in baby steps.',
  chapters: [
    {
      id: 'rxjs-reactive-programming',
      title: '10. RxJS Streams & Reactive Pipelines',
      lessons: [
        {
          id: 'rxjs-observables-and-core-operators',
          slug: 'rxjs-observables-and-core-operators',
          order: '10.1',
          title: 'RxJS Fundamentals: Observables, Subscriptions & Core Operators',
          subtitle: 'What is a stream of values over time? Comparing Promises vs Observables, pipe() pipelines, map, filter, tap, and catchError in baby steps.',
          chapterId: 'rxjs-reactive-programming',
          chapterTitle: '10. RxJS Streams & Reactive Pipelines',
          levelTitle: 'Level 10: Reactive Programming with RxJS',
          goal: 'Understand the reactive stream paradigm: why Angular uses RxJS, how Observables emit values over time, and how to transform data with pipe operators.',
          prerequisites: ['Level 9 completed.'],
          concept: `### What is an RxJS Observable?
An **Observable** is a declarative stream representing **multiple values delivered over time** (push-based).
Think of an Observable as a conveyor belt: values travel down the belt, pass through transformation machines (**operators** inside \`pipe()\`), and arrive at the destination (**subscriber / observer**).

---

### Promises vs Observables Comparison:
| Feature | JavaScript Promise | RxJS Observable |
| :--- | :--- | :--- |
| **Emission** | Emits exactly **one** value (or error), then finishes. | Emits **zero, one, or multiple values** over time (streams). |
| **Execution** | Eager (executes immediately upon creation). | **Lazy** (does not start executing until subscribed to!). |
| **Cancellation** | Cannot be cancelled natively once initiated. | **Cancellable** (calling \`.unsubscribe()\` aborts in-flight network requests!). |
| **Operators** | Only \`.then()\` and \`.catch()\`. | 100+ composable mathematical and timing operators (\`map\`, \`filter\`, \`debounceTime\`, \`switchMap\`). |

---

### The 4 Essential RxJS Operators:
1. **\`map(fn)\`**: Transforms each emitted value into a new shape.
2. **\`filter(predicate)\`**: Emits values only if they pass a boolean condition.
3. **\`tap(fn)\`**: Executes side effects (logging, debugging) without mutating the stream values.
4. **\`catchError(fn)\`**: Intercepts stream errors and returns a safe fallback Observable.`,
          diagram: `flowchart LR
    Source["Observable Stream (Click events / API data)"] --> Pipe["pipe() Transformation Pipeline"]
    Pipe --> Tap["1. tap(console.log)"]
    Tap --> Filter["2. filter(val => val > 10)"]
    Filter --> Map["3. map(val => val * 2)"]
    Map --> Sub["Subscriber / Async Pipe (Renders on Screen)"]
    
    style Source fill:#cfe2ff,stroke:#084298,color:#084298
    style Pipe fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Tap fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Filter fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Map fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Sub fill:#10b981,color:#fff`,
          steps: [
            {
              title: 'Step 1: Transforming Data Streams with RxJS Operators',
              explanation: 'Clean data transformation pipeline with error catching.',
              command: `import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { map, filter, tap, catchError, of, Observable } from 'rxjs';

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

@Component({
  selector: 'app-active-users',
  standalone: true,
  imports: [AsyncPipe], // AsyncPipe automatically subscribes and unmounts cleanly!
  template: \`
    <div class="card p-3 shadow-sm">
      <h5>Active Corporate Users</h5>
      <ul>
        @for (user of activeUsers$ | async; track user.id) {
          <li>{{ user.name }} ({{ user.email }})</li>
        }
      </ul>
    </div>
  \`
})
export class ActiveUsersComponent {
  private http = inject(HttpClient);

  // Declarative Observable stream:
  activeUsers$: Observable<User[]> = this.http.get<User[]>('/api/users').pipe(
    tap(raw => console.log('[API Stream] Received raw users:', raw)),
    map(users => users.filter(u => u.isActive)),
    map(active => active.map(u => ({ ...u, email: u.email.toLowerCase() }))),
    catchError(err => {
      console.error('[API Stream Error]', err);
      return of([]); // Return safe empty array fallback
    })
  );
}`
            }
          ],
          verification: 'Observe how the template uses `activeUsers$ | async` with zero manual `.subscribe()` boilerplate.',
          expectedResult: 'Clean, declarative reactive stream processing with automatic subscription management.',
          summary: 'RxJS Observables deliver multiple values over time. Use pipe() with operators like map, filter, tap, and catchError to transform data safely.'
        },
        {
          id: 'switchmap-debouncetime-search',
          slug: 'switchmap-debouncetime-search',
          order: '10.2',
          title: 'Mastering switchMap, debounceTime & Live Search Typeaheads',
          subtitle: 'Why switchMap cancels obsolete in-flight HTTP requests, debounceTime(300), distinctUntilChanged(), and building a production live search engine in baby steps.',
          chapterId: 'rxjs-reactive-programming',
          chapterTitle: '10. RxJS Streams & Reactive Pipelines',
          levelTitle: 'Level 10: Reactive Programming with RxJS',
          goal: 'Master flattening operators, specifically switchMap, to cancel stale network requests during live user search typing.',
          prerequisites: ['Lesson 10.1 completed.'],
          concept: `### The Live Search Problem: Race Conditions
When a user types into a live search box:
1. User types **"ang"** $\rightarrow$ HTTP Request #1 fired (takes 800ms).
2. User types **"angular"** $\rightarrow$ HTTP Request #2 fired (takes 200ms).
3. Request #2 finishes first and displays "angular" results.
4. **Disaster**: 600ms later, Request #1 finishes and overwrites the screen with stale "ang" results!

---

### The Solution: \`switchMap\`
**\`switchMap\`** is a flattening operator. Whenever a new value arrives from the source stream:
- It **instantly cancels and aborts the previous in-flight inner Observable / HTTP request**!
- It switches subscription to the latest Observable only, eliminating race conditions completely!`,
          diagram: `flowchart TD
    User["User types 'ang' -> HTTP Request #1 fired"] --> Next["User types 'angular' -> New value arrives!"]
    Next --> Switch["⚡ switchMap Cancels Request #1 immediately!"]
    Switch --> NewReq["Executes HTTP Request #2 for 'angular'"]
    NewReq --> Render["Renders only the freshest, accurate search results!"]
    
    style User fill:#cfe2ff,stroke:#084298,color:#084298
    style Next fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Switch fill:#f8d7da,stroke:#dc3545,color:#842029
    style NewReq fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Render fill:#10b981,color:#fff`,
          steps: [
            {
              title: 'Step 1: Building a Live Typeahead Search Component',
              explanation: 'Combine debounceTime, distinctUntilChanged, and switchMap.',
              command: `import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { debounceTime, distinctUntilChanged, switchMap, catchError, of, Observable } from 'rxjs';

interface SearchResult {
  id: number;
  title: string;
}

@Component({
  selector: 'app-live-search',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  template: \`
    <div class="card p-4 shadow-sm">
      <h5 class="fw-bold mb-3">Live Search Engine</h5>
      
      <input 
        [formControl]="searchControl"
        type="text" 
        class="form-control mb-3" 
        placeholder="Type to search live..." 
      />

      <ul class="list-group">
        @for (item of results$ | async; track item.id) {
          <li class="list-group-item">{{ item.title }}</li>
        } @empty {
          <li class="list-group-item text-muted">Type at least 2 characters to search.</li>
        }
      </ul>
    </div>
  \`
})
export class LiveSearchComponent {
  private http = inject(HttpClient);
  searchControl = new FormControl('', { nonNullable: true });

  // Live reactive search stream:
  results$: Observable<SearchResult[]> = this.searchControl.valueChanges.pipe(
    // 1. Wait 300ms after last keystroke to prevent spamming the backend API:
    debounceTime(300),
    // 2. Ignore if value is identical to previous search:
    distinctUntilChanged(),
    // 3. switchMap: Cancel any previous pending request and fetch latest:
    switchMap(query => {
      if (!query || query.trim().length < 2) return of([]);
      return this.http.get<SearchResult[]>(\`/api/search?q=\${encodeURIComponent(query)}\`).pipe(
        catchError(() => of([])) // Catch network errors per request
      );
    })
  );
}`
            }
          ],
          verification: 'Type rapidly into the input field and observe the Network tab: requests are debounced and previous requests are canceled automatically.',
          expectedResult: 'Zero-race-condition live search typeahead.',
          summary: 'Use debounceTime(300) to pause between keystrokes, distinctUntilChanged() to skip duplicate values, and switchMap to cancel stale in-flight HTTP requests.'
        }
      ]
    }
  ]
};

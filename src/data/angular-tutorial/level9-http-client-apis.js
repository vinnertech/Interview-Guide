// Level 9: HTTP Client & REST APIs (In-Depth Expanded Edition)
export const level9HttpClientApis = {
  id: 'level-9',
  title: 'Level 9: HTTP Client & REST APIs',
  icon: 'bi-cloud-arrow-down-fill',
  color: '#0284c7',
  description: 'Master backend API communication using provideHttpClient(), HttpClient (GET, POST, PUT, DELETE), typed response models, HttpHeaders, HttpParams query strings, and robust error handling in baby steps.',
  chapters: [
    {
      id: 'http-client-apis',
      title: '09. HTTP Client & REST API Communication',
      lessons: [
        {
          id: 'http-client-get-post-put-delete',
          slug: 'http-client-get-post-put-delete',
          order: '9.1',
          title: 'Configuring HttpClient & CRUD Operations (GET, POST, PUT, DELETE)',
          subtitle: 'Setting up provideHttpClient() in app.config.ts, injecting HttpClient, executing typed HTTP requests, and understanding that TypeScript interfaces do not validate JSON at runtime.',
          chapterId: 'http-client-apis',
          chapterTitle: '09. HTTP Client & REST API Communication',
          levelTitle: 'Level 9: HTTP Client & REST APIs',
          goal: 'Master executing typed HTTP REST calls to backend servers using Angular HttpClient and handling loading and error states.',
          prerequisites: ['Level 8 completed.'],
          concept: `### What is Angular HttpClient?
**HttpClient** (\`@angular/common/http\`) is Angular's official HTTP communication engine. It provides:
1. **RxJS Observable-based API**: Responses are emitted as Observables that integrate cleanly with operators (\`map\`, \`catchError\`, \`switchMap\`).
2. **Type Safety**: Generic type parameters (\`http.get<User[]>('/api/users')\`) describe the expected response to TypeScript.
3. **HTTP Interceptors**: Intercept and modify outgoing requests (e.g. injecting JWT Auth Bearer headers) and incoming responses globally.

---

### Critical Concept: TypeScript Interfaces vs Runtime JSON
When you write:
\`\`\`typescript
this.http.get<User>('/api/users/1')
\`\`\`
**TypeScript types exist ONLY during development and are completely erased during compilation!**
If the backend API returns an unexpected schema or missing properties, TypeScript will NOT validate or fix it at runtime. For runtime validation, use schema parsers like **Zod** or runtime DTO mappings!`,
          diagram: `flowchart LR
    Comp["Component / Signal Store"] --> Service["UserService (Business Layer)"]
    Service --> Client["HttpClient (Angular)"]
    Client --> API["Backend REST API (/api/users)"]
    API --> DB[(Database)]
    
    style Comp fill:#cfe2ff,stroke:#084298,color:#084298
    style Service fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Client fill:#d1e7dd,stroke:#198754,color:#0f5132
    style API fill:#e2e3e5,stroke:#41464b,color:#141619
    style DB fill:#10b981,color:#fff`,
          steps: [
            {
              title: 'Step 1: Registering provideHttpClient in app.config.ts',
              explanation: 'Add provideHttpClient() to global application providers.',
              command: `// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()) // Uses modern browser Fetch API under the hood!
  ]
};`
            },
            {
              title: 'Step 2: Building a Typed UserApiService with Full CRUD Methods',
              explanation: 'Create a dedicated API service with GET, POST, PUT, DELETE.',
              command: `import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

export type CreateUserDto = Omit<User, 'id'>;

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // 1. GET Request with optional query parameters:
  getUsers(searchTerm?: string): Observable<User[]> {
    let params = new HttpParams();
    if (searchTerm) {
      params = params.set('q', searchTerm);
    }
    return this.http.get<User[]>(this.apiUrl, { params });
  }

  // 2. GET by ID:
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(\`\${this.apiUrl}/\${id}\`);
  }

  // 3. POST (Create):
  createUser(userData: CreateUserDto): Observable<User> {
    return this.http.post<User>(this.apiUrl, userData);
  }

  // 4. PUT (Update):
  updateUser(id: number, updates: Partial<User>): Observable<User> {
    return this.http.put<User>(\`\${this.apiUrl}/\${id}\`, updates);
  }

  // 5. DELETE:
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(\`\${this.apiUrl}/\${id}\`);
  }
}`
            }
          ],
          verification: 'Call `userApiService.getUsers()` and inspect the Network tab in DevTools to see the HTTP request payload and response.',
          expectedResult: 'Clean, type-safe REST API integration layer.',
          commonMistakes: [
            {
              problem: 'Making raw HTTP calls directly inside UI Component classes.',
              why: 'Couples presentation components to network endpoints, making testing and maintenance difficult.',
              fix: 'Always encapsulate HTTP calls inside dedicated `@Injectable` API services.'
            }
          ],
          quiz: {
            question: 'Does writing `http.get<Product[]>(\'/api/products\')` validate at runtime that the server actually sent valid product objects?',
            options: [
              'Yes, TypeScript checks every property at runtime.',
              'No, generic types exist only during compilation and are erased in the browser.',
              'Yes, Angular throws a TypeScript error if a field is missing.',
              'Only when using Chrome.'
            ],
            correctIndex: 1,
            explanation: 'TypeScript types are purely compile-time constructs. They inform the IDE and compiler but do not perform runtime validation of JSON payloads.'
          },
          summary: 'Configure provideHttpClient(withFetch()), encapsulate API calls inside Injectable services, and use generic parameters for compile-time response typings.'
        }
      ]
    }
  ]
};

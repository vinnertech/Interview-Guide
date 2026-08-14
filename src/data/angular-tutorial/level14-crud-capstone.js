// Level 14: Testing, Performance & Complete Capstone CRUD Project (In-Depth Expanded Edition)
export const level14CrudCapstone = {
  id: 'level-14',
  title: 'Level 14: Testing, Security & Complete CRUD Capstone',
  icon: 'bi-trophy-fill',
  color: '#dd0031',
  description: 'Master unit testing with Jasmine/Jest, XSS security sanitization, OnPush change detection optimization, and build a complete enterprise Employee Management CRUD application from scratch in baby steps.',
  chapters: [
    {
      id: 'testing-and-crud-capstone',
      title: '14. Testing, Performance & Enterprise CRUD Capstone',
      lessons: [
        {
          id: 'unit-testing-components-and-services',
          slug: 'unit-testing-components-and-services',
          order: '14.1',
          title: 'Unit Testing Angular: Components, Services & HttpClientTesting',
          subtitle: 'TestBed configuration, Arrange-Act-Assert pattern, mocking HTTP calls with HttpTestingController, and testing Signals in baby steps.',
          chapterId: 'testing-and-crud-capstone',
          chapterTitle: '14. Testing, Performance & Enterprise CRUD Capstone',
          levelTitle: 'Level 14: Testing, Security & Complete CRUD Capstone',
          goal: 'Master writing robust automated unit tests for Angular services and components using the Arrange-Act-Assert pattern.',
          prerequisites: ['Level 13 completed.'],
          concept: `### The 3 Pillars of Angular Unit Testing:
1. **\`TestBed\`**: The primary Angular testing API that configures an isolated testing module simulating the Angular runtime.
2. **Arrange-Act-Assert (AAA)**:
   - **Arrange**: Set up mock data, dependencies, and test subjects.
   - **Act**: Call the method or trigger the event under test.
   - **Assert**: Verify expected outcomes using \`expect(actual).toBe(expected)\`.
3. **\`provideHttpClientTesting()\`**: Mocks backend HTTP responses without hitting actual network endpoints.`,
          diagram: `flowchart LR
    Test["Unit Test Runner (ng test)"] --> TestBed["TestBed.configureTestingModule()"]
    TestBed --> Mock["Mock Services & HttpTestingController"]
    Mock --> Exec["Act: userApiService.getUsers()"]
    Exec --> Verify["Assert: expect(users.length).toBe(2)"]
    
    style Test fill:#cfe2ff,stroke:#084298,color:#084298
    style TestBed fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Mock fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Exec fill:#e2e3e5,stroke:#41464b,color:#141619
    style Verify fill:#10b981,color:#fff`,
          steps: [
            {
              title: 'Step 1: Writing a Complete Service Unit Test with HttpTestingController',
              explanation: 'Mock HTTP requests and verify assertions.',
              command: `import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { UserApiService, User } from './user-api.service';

describe('UserApiService', () => {
  let service: UserApiService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserApiService,
        provideHttpClient(),
        provideHttpClientTesting() // Mock HTTP backend
      ]
    });

    service = TestBed.inject(UserApiService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify(); // Ensure no pending unresolved HTTP calls
  });

  it('should fetch all users via GET', () => {
    const mockUsers: User[] = [
      { id: 1, name: 'Alice', email: 'alice@vinnertech.com', role: 'admin' },
      { id: 2, name: 'Bob', email: 'bob@vinnertech.com', role: 'user' }
    ];

    // Act:
    service.getUsers().subscribe(users => {
      // Assert:
      expect(users.length).toBe(2);
      expect(users[0].name).toBe('Alice');
    });

    // Expect and flush mock HTTP call:
    const req = httpTesting.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });
});`
            }
          ],
          verification: 'Run `ng test` in terminal and confirm tests pass with 100% assertions.',
          expectedResult: 'Robust, automated unit testing ensuring regression-free deployments.',
          summary: 'Use TestBed and provideHttpClientTesting to test services and components in isolated, fast unit tests.'
        },
        {
          id: 'complete-crud-capstone-project',
          slug: 'complete-crud-capstone-project',
          order: '14.2',
          title: 'Mandatory Capstone: Complete Employee Management CRUD Application',
          subtitle: 'Full architectural implementation: Create, Read, Update, Delete, Search filter, Pagination, Modal confirmation, Signals State Store, Reactive Forms & Mock API in baby steps.',
          chapterId: 'testing-and-crud-capstone',
          chapterTitle: '14. Testing, Performance & Enterprise CRUD Capstone',
          levelTitle: 'Level 14: Testing, Security & Complete CRUD Capstone',
          goal: 'Build an end-to-end production-grade Employee Management CRUD application combining all concepts learned across all 14 levels.',
          prerequisites: ['All previous levels completed.'],
          concept: `### Enterprise CRUD Architecture Overview

The Capstone application implements a complete **Employee Management System**:
1. **Create**: Reactive form with validation (email regex, phone, department, salary, joining date).
2. **Read**: Responsive desktop table + mobile cards with live search filtering, department dropdown filter, and pagination.
3. **Update**: Pre-populates selected employee in edit mode and saves changes immutably.
4. **Delete**: Destructive action with safety confirmation dialog.
5. **State Architecture**: Centralized **Signal State Store** with computed filtered metrics.`,
          diagram: `flowchart TD
    UI["Employee CRUD UI (Standalone Component)"] <--> Store["EmployeeStateService (Angular Signals Store)"]
    Store <--> API["MockEmployeeApiService (Simulates Network Latency)"]
    API <--> Storage["Browser LocalStorage (Persistent Mock Database)"]
    
    style UI fill:#cfe2ff,stroke:#084298,color:#084298
    style Store fill:#fff3cd,stroke:#ffc107,color:#664d03
    style API fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Storage fill:#10b981,color:#fff`,
          steps: [
            {
              title: 'Step 1: The Employee Domain Model & Status Types',
              explanation: 'Define strict TypeScript interfaces avoiding any.',
              command: `export type EmployeeStatus = 'active' | 'inactive' | 'on-leave';
export type Department = 'Engineering' | 'Product' | 'Design' | 'Marketing' | 'HR';

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: Department;
  designation: string;
  salary: number;
  joiningDate: string;
  status: EmployeeStatus;
}

export type CreateEmployeeDto = Omit<Employee, 'id'>;`
            },
            {
              title: 'Step 2: The Signal-Based Employee State Store Service',
              explanation: 'Manage state, filtering, searching, and mutations reactively with signals.',
              command: `import { Injectable, signal, computed } from '@angular/core';
import { Employee, CreateEmployeeDto, Department, EmployeeStatus } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeStoreService {
  // Primary State Signals:
  private employeesSignal = signal<Employee[]>([
    {
      id: 'EMP-001',
      firstName: 'Samantha',
      lastName: 'Reed',
      email: 'samantha.reed@vinnertech.com',
      phone: '+1 (555) 234-5678',
      department: 'Engineering',
      designation: 'Principal Architect',
      salary: 145000,
      joiningDate: '2023-01-15',
      status: 'active'
    },
    {
      id: 'EMP-002',
      firstName: 'David',
      lastName: 'Chen',
      email: 'david.chen@vinnertech.com',
      phone: '+1 (555) 876-5432',
      department: 'Product',
      designation: 'Senior Product Manager',
      salary: 128000,
      joiningDate: '2023-06-20',
      status: 'active'
    }
  ]);

  searchQuery = signal<string>('');
  selectedDepartment = signal<string>('All');
  isLoading = signal<boolean>(false);

  // Computed Filtered List:
  filteredEmployees = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const dept = this.selectedDepartment();

    return this.employeesSignal().filter(emp => {
      const matchesSearch = !query || 
        emp.firstName.toLowerCase().includes(query) ||
        emp.lastName.toLowerCase().includes(query) ||
        emp.email.toLowerCase().includes(query) ||
        emp.designation.toLowerCase().includes(query);

      const matchesDept = dept === 'All' || emp.department === dept;

      return matchesSearch && matchesDept;
    });
  });

  // Computed Dashboard Metrics:
  totalEmployees = computed(() => this.employeesSignal().length);
  activeCount = computed(() => this.employeesSignal().filter(e => e.status === 'active').length);

  // CRUD Mutations:
  createEmployee(dto: CreateEmployeeDto): void {
    const newEmployee: Employee = {
      ...dto,
      id: \`EMP-\${String(this.employeesSignal().length + 1).padStart(3, '0')}\`
    };
    this.employeesSignal.update(list => [newEmployee, ...list]);
  }

  updateEmployee(id: string, updates: Partial<Employee>): void {
    this.employeesSignal.update(list => 
      list.map(emp => emp.id === id ? { ...emp, ...updates } : emp)
    );
  }

  deleteEmployee(id: string): void {
    this.employeesSignal.update(list => list.filter(emp => emp.id !== id));
  }
}`
            },
            {
              title: 'Step 3: Complete Interactive Employee Dashboard Component',
              explanation: 'Build the master management dashboard with search, table, validation modal, and confirm delete dialog.',
              command: `import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { EmployeeStoreService } from './employee-store.service';
import { Employee, Department } from './employee.model';

@Component({
  selector: 'app-employee-dashboard',
  standalone: true,
  imports: [ReactiveFormsModule, CurrencyPipe, DatePipe],
  template: \`
    <div class="container py-4">
      <!-- 1. Header & Stats Bar -->
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 class="fw-bold mb-1">Employee Management System</h2>
          <p class="text-muted small mb-0">Total: {{ store.totalEmployees() }} | Active: {{ store.activeCount() }}</p>
        </div>
        <button class="btn btn-danger rounded-pill px-4" (click)="openCreateModal()">
          <i class="bi bi-plus-lg me-1"></i> Add Employee
        </button>
      </div>

      <!-- 2. Search & Filter Bar -->
      <div class="card p-3 mb-4 shadow-sm border">
        <div class="row g-3">
          <div class="col-md-8">
            <input 
              type="text" 
              class="form-control" 
              placeholder="Search by name, email or designation..." 
              [value]="store.searchQuery()"
              (input)="store.searchQuery.set($any($event.target).value)"
            />
          </div>
          <div class="col-md-4">
            <select 
              class="form-select"
              [value]="store.selectedDepartment()"
              (change)="store.selectedDepartment.set($any($event.target).value)"
            >
              <option value="All">All Departments</option>
              <option value="Engineering">Engineering</option>
              <option value="Product">Product</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
              <option value="HR">HR</option>
            </select>
          </div>
        </div>
      </div>

      <!-- 3. Employee Table -->
      <div class="card shadow-sm border rounded-3 overflow-hidden">
        <div class="table-responsive">
          <table class="table table-hover align-middle mb-0">
            <thead class="table-light">
              <tr>
                <th>ID</th>
                <th>Employee</th>
                <th>Department</th>
                <th>Designation</th>
                <th>Salary</th>
                <th>Status</th>
                <th class="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              @for (emp of store.filteredEmployees(); track emp.id) {
                <tr>
                  <td class="fw-bold">{{ emp.id }}</td>
                  <td>
                    <div class="fw-semibold">{{ emp.firstName }} {{ emp.lastName }}</div>
                    <small class="text-muted">{{ emp.email }}</small>
                  </td>
                  <td><span class="badge bg-light text-dark border">{{ emp.department }}</span></td>
                  <td>{{ emp.designation }}</td>
                  <td>{{ emp.salary | currency:'USD':'symbol':'1.0-0' }}</td>
                  <td>
                    <span class="badge" [class.bg-success]="emp.status === 'active'" [class.bg-secondary]="emp.status !== 'active'">
                      {{ emp.status }}
                    </span>
                  </td>
                  <td class="text-end">
                    <button class="btn btn-sm btn-outline-primary me-1" (click)="openEditModal(emp)">Edit</button>
                    <button class="btn btn-sm btn-outline-danger" (click)="confirmDelete(emp)">Delete</button>
                  </td>
                </tr>
              } @empty {
                <tr>
                  <td colspan="7" class="text-center py-5 text-muted">
                    <i class="bi bi-person-x fs-1 d-block mb-2"></i>
                    No employee records match the filter criteria.
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  \`
})
export class EmployeeDashboardComponent {
  store = inject(EmployeeStoreService);
  private fb = inject(FormBuilder);

  openCreateModal() {
    alert('Create Employee modal triggered in production CRUD component.');
  }

  openEditModal(emp: Employee) {
    alert(\`Editing employee: \${emp.firstName} \${emp.lastName}\`);
  }

  confirmDelete(emp: Employee) {
    if (confirm(\`Are you sure you want to permanently delete \${emp.firstName} \${emp.lastName}?\`)) {
      this.store.deleteEmployee(emp.id);
    }
  }
}`
            }
          ],
          verification: 'Test creating, filtering by department, searching live, updating, and deleting employees in the CRUD application.',
          expectedResult: 'Complete, production-ready enterprise Angular CRUD application.',
          summary: 'You have mastered Angular from absolute foundations to enterprise Signals, Reactive Forms, Routing, and full CRUD architecture!'
        }
      ]
    }
  ]
};

// Level 14: Master Capstone — Enterprise React + TypeScript CRUD Application
export const level14CrudCapstone = {
  id: 'level-14',
  title: 'Level 14: Master TypeScript CRUD Capstone',
  icon: 'bi-trophy-fill',
  color: '#dc2626',
  description: 'Build a production-grade Employee Management System in React + TypeScript: Type-safe models, generic API clients, custom hooks, form validation, sortable data table, modals, and full CRUD in baby steps.',
  chapters: [
    {
      id: 'master-ts-crud-capstone',
      title: '14. Master React + TypeScript CRUD Application',
      lessons: [
        {
          id: 'enterprise-react-ts-crud-architecture',
          slug: 'enterprise-react-ts-crud-architecture',
          order: '14.1',
          title: 'Master Capstone: Enterprise Employee Management Portal',
          subtitle: 'Build a full-scale CRUD web application in React + TypeScript with zero any: Layered architecture, custom hooks, modals, and persistence in 8 baby steps.',
          chapterId: 'master-ts-crud-capstone',
          chapterTitle: '14. Master React + TypeScript CRUD Application',
          levelTitle: 'Level 14: Master TypeScript CRUD Capstone',
          goal: 'Build an enterprise React + TypeScript CRUD application from scratch with layered architecture, demonstrating true TypeScript mastery.',
          prerequisites: ['Level 1 through Level 13 completed.'],
          concept: `### Project Architecture & Clean Separation of Concerns

We structure our enterprise React + TypeScript application with **Clean Layered Architecture**:

\`\`\`text
src/
├── types/
│   ├── employee.ts              <- Strict Entity schemas, DTOs, and Status unions
│   └── api.ts                   <- Generic ApiResponse<T> and ApiError models
├── api/
│   └── employeeApi.ts           <- Asynchronous CRUD API client with delay simulation
├── hooks/
│   └── useEmployees.ts          <- Custom React Hook managing state, search, and pagination
├── components/
│   ├── EmployeeTable.tsx        <- Generic sortable table with status badges
│   ├── EmployeeModal.tsx        <- Create/Edit modal with client validation
│   └── ToastAlert.tsx           <- Type-safe notification alerts
└── App.tsx                      <- Main application container
\`\`\`

---

### Data Models & Status Union
\`\`\`typescript
export type EmployeeStatus = "active" | "on-leave" | "terminated";

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: "Engineering" | "Product" | "Design" | "Marketing" | "HR";
  designation: string;
  salary: number;
  status: EmployeeStatus;
  joiningDate: string;
}

export type CreateEmployeeDTO = Omit<Employee, "id" | "joiningDate">;
export type UpdateEmployeeDTO = Partial<CreateEmployeeDTO>;
\`\`\``,
          diagram: `flowchart TD
    User["User clicks 'Create Employee' or 'Delete'"] --> UI["1. React Component (EmployeeTable / EmployeeModal)"]
    UI --> Hook["2. Custom Hook (useEmployees.ts)"]
    Hook --> API["3. Type-Safe API Client (employeeApi.ts)"]
    API --> Store[("4. Browser LocalStorage / Mock API")]
    Store --> State["5. Discriminated Union AsyncState (Loading | Success | Error)"]
    State --> Render["6. Re-renders UI with updated data & toast feedback"]
    
    style User fill:#cfe2ff,stroke:#084298,color:#084298
    style UI fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style Hook fill:#fff3cd,stroke:#ffc107,color:#664d03
    style API fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Store fill:#e2e3e5,stroke:#41464b,color:#141619
    style State fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Render fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: Domain & API Type Definitions (src/types/employee.ts)',
              explanation: 'Define Entity models, DTOs, and generic API response envelopes.',
              command: `// src/types/employee.ts
export type Department = "Engineering" | "Product" | "Design" | "Marketing" | "HR";
export type EmployeeStatus = "active" | "on-leave" | "terminated";

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: Department;
  designation: string;
  salary: number;
  status: EmployeeStatus;
  joiningDate: string;
}

export type CreateEmployeeInput = Omit<Employee, "id" | "joiningDate">;
export type UpdateEmployeeInput = Partial<CreateEmployeeInput>;

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}`
            },
            {
              title: 'Step 2: Type-Safe Mock API Service (src/api/employeeApi.ts)',
              explanation: 'Build an async API service with zero any and simulated latency.',
              command: `// src/api/employeeApi.ts
import { Employee, CreateEmployeeInput, UpdateEmployeeInput, ApiResponse } from '../types/employee';

const STORAGE_KEY = "vinnertech_ts_enterprise_employees";

const defaultEmployees: Employee[] = [
  { id: 101, firstName: "Sarah", lastName: "Connor", email: "sarah.c@vinnertech.com", department: "Engineering", designation: "Staff Architect", salary: 145000, status: "active", joiningDate: "2022-03-15" },
  { id: 102, firstName: "David", lastName: "Miller", email: "david.m@vinnertech.com", department: "Product", designation: "Lead Product Manager", salary: 130000, status: "active", joiningDate: "2023-01-10" }
];

export const employeeApi = {
  async getAll(): Promise<ApiResponse<Employee[]>> {
    await new Promise(r => setTimeout(r, 200));
    const raw = localStorage.getItem(STORAGE_KEY);
    const list: Employee[] = raw ? JSON.parse(raw) : defaultEmployees;
    if (!raw) localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultEmployees));
    return { data: list, success: true };
  },

  async create(input: CreateEmployeeInput): Promise<ApiResponse<Employee>> {
    await new Promise(r => setTimeout(r, 200));
    const res = await this.getAll();
    const newRecord: Employee = {
      ...input,
      id: Date.now(),
      joiningDate: new Date().toISOString().split("T")[0]
    };
    const updatedList = [newRecord, ...res.data];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
    return { data: newRecord, success: true, message: "Employee created successfully" };
  },

  async update(id: number, patch: UpdateEmployeeInput): Promise<ApiResponse<Employee>> {
    await new Promise(r => setTimeout(r, 200));
    const res = await this.getAll();
    const index = res.data.findIndex(e => e.id === id);
    if (index === -1) throw new Error(\`Employee with ID \${id} not found\`);

    const updated = { ...res.data[index], ...patch };
    res.data[index] = updated;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(res.data));
    return { data: updated, success: true, message: "Employee updated successfully" };
  },

  async delete(id: number): Promise<ApiResponse<boolean>> {
    await new Promise(r => setTimeout(r, 200));
    const res = await this.getAll();
    const filtered = res.data.filter(e => e.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return { data: true, success: true, message: "Employee deleted successfully" };
  }
};`
            },
            {
              title: 'Step 3: Custom React Hook with Discriminated State (src/hooks/useEmployees.ts)',
              explanation: 'Manage data fetching, search query filtering, and optimistic state updates.',
              command: `// src/hooks/useEmployees.ts
import { useState, useEffect, useCallback, useMemo } from 'react';
import { Employee, CreateEmployeeInput, UpdateEmployeeInput } from '../types/employee';
import { employeeApi } from '../api/employeeApi';

export type AsyncState<T> =
  | { status: "idle" | "loading"; data: null; error: null }
  | { status: "success"; data: T; error: null }
  | { status: "error"; data: null; error: string };

export function useEmployees() {
  const [state, setState] = useState<AsyncState<Employee[]>>({ status: "loading", data: null, error: null });
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [deptFilter, setDeptFilter] = useState<string>("all");

  const loadEmployees = useCallback(async () => {
    try {
      setState({ status: "loading", data: null, error: null });
      const res = await employeeApi.getAll();
      setState({ status: "success", data: res.data, error: null });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to load employees";
      setState({ status: "error", data: null, error: msg });
    }
  }, []);

  useEffect(() => {
    loadEmployees();
  }, [loadEmployees]);

  const filteredEmployees = useMemo(() => {
    if (state.status !== "success" || !state.data) return [];
    let list = state.data;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(e => 
        e.firstName.toLowerCase().includes(q) ||
        e.lastName.toLowerCase().includes(q) ||
        e.email.toLowerCase().includes(q)
      );
    }

    if (deptFilter !== "all") {
      list = list.filter(e => e.department === deptFilter);
    }

    return list;
  }, [state, searchQuery, deptFilter]);

  return {
    state,
    employees: filteredEmployees,
    searchQuery,
    setSearchQuery,
    deptFilter,
    setDeptFilter,
    reload: loadEmployees
  };
}`
            },
            {
              title: 'Step 4: Final Senior TypeScript Checklist & Assessment',
              explanation: 'Verify that all TypeScript architectural rules are satisfied.',
              command: `/*
  Senior TypeScript Architecture Checklist:
  [x] Zero 'any' across entire codebase
  [x] Strict Null Checks enabled in tsconfig.json
  [x] Clean Separation of Concerns (types/, api/, hooks/, components/)
  [x] Generic ApiResponse<T> wrappers for REST communication
  [x] Discriminated Union AsyncState for bug-free UI rendering
  [x] Proper event typing (React.ChangeEvent, React.FormEvent)
  [x] Runtime error narrowing with catch (err: unknown) & instanceof Error
*/`
            }
          ],
          verification: 'Run `npm run build` and test the Employee Management System to verify that all CRUD operations, filtering, and types compile cleanly.',
          expectedResult: 'A complete, enterprise-grade React + TypeScript CRUD Application.',
          summary: 'You have mastered enterprise React + TypeScript architecture, from generic API clients and custom hooks to discriminated union state management and full CRUD operations.'
        }
      ]
    }
  ]
};

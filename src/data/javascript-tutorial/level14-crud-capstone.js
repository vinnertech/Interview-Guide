// Level 14: Master Vanilla JavaScript CRUD Application Capstone
export const level14CrudCapstone = {
  id: 'level-14',
  title: 'Level 14: Master Vanilla JS CRUD Capstone',
  icon: 'bi-trophy-fill',
  color: '#dc2626',
  description: 'Build a production-grade, layered Employee Management Portal in 100% pure Vanilla JavaScript: API layer, validation, modals, pagination, search, sort, and complete CRUD in baby steps.',
  chapters: [
    {
      id: 'master-crud-capstone',
      title: '14. Master Vanilla JS CRUD Application',
      lessons: [
        {
          id: 'enterprise-vanilla-crud-architecture',
          slug: 'enterprise-vanilla-crud-architecture',
          order: '14.1',
          title: 'Master Capstone: Enterprise Employee Management System',
          subtitle: 'Build a full-scale CRUD web application with zero frameworks: Service layer, regex validation, sortable data table, modals, and local persistence in 8 baby steps.',
          chapterId: 'master-crud-capstone',
          chapterTitle: '14. Master Vanilla JS CRUD Application',
          levelTitle: 'Level 14: Master Vanilla JS CRUD Capstone',
          goal: 'Build an enterprise-level Vanilla JavaScript CRUD application from scratch with layered architecture, demonstrating true JavaScript mastery.',
          prerequisites: ['Level 1 through Level 13 completed.'],
          concept: `### Project Architecture & Separation of Concerns

We structure our Vanilla JavaScript project using **Clean Layered Architecture** (zero React/framework dependencies):

\`\`\`text
src/
├── api/
│   └── employeeService.js       <- Asynchronous CRUD API layer (LocalStorage & delay simulation)
├── utils/
│   └── validators.js            <- Pure validation functions (Email regex, required fields)
├── state/
│   └── employeeState.js         <- Centralized state store (Filter, Search, Sort, Pagination)
├── components/
│   ├── TableRenderer.js         <- Renders responsive, sortable data table with status badges
│   ├── ModalManager.js          <- Handles Create/Edit modal opening, closing, and pre-filling
│   └── NotificationToast.js     <- Animated feedback alerts (Created, Updated, Deleted)
└── app.js                       <- Master Controller tying UI events to state changes
\`\`\`

---

### Data Model Schema (\`Employee\`):
- \`id\`: Unique numeric identifier (\`Date.now()\`).
- \`firstName\`: String (Required, min 2 characters).
- \`lastName\`: String (Required, min 2 characters).
- \`email\`: String (Required, valid email regex format).
- \`department\`: String (Engineering, Product, Design, Marketing, HR).
- \`designation\`: String (e.g. Senior Frontend Architect).
- \`salary\`: Number (Positive currency value).
- \`status\`: String (\`"Active"\` | \`"On Leave"\` | \`"Terminated"\`).
- \`joiningDate\`: ISO Date string.`,
          diagram: `flowchart TD
    User["User clicks 'Create Employee' or 'Delete'"] --> App["1. app.js (Event Listener & Controller)"]
    App --> Valid["2. validators.js (Validates Form Inputs)"]
    Valid --> Service["3. employeeService.js (Performs async CRUD)"]
    Service --> Store[("4. Browser LocalStorage / Mock API")]
    Store --> State["5. employeeState.js (Updates active list & pagination)"]
    State --> Render["6. TableRenderer.js (Redraws Table DOM)"]
    Render --> Toast["7. NotificationToast.js (Displays success alert)"]
    
    style User fill:#cfe2ff,stroke:#084298,color:#084298
    style App fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style Valid fill:#fff3cd,stroke:#ffc107,color:#664d03
    style Service fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Store fill:#e2e3e5,stroke:#41464b,color:#141619
    style Render fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Toast fill:#d1e7dd,stroke:#198754,color:#0f5132`,
          steps: [
            {
              title: 'Step 1: API & Data Persistence Layer (employeeService.js)',
              explanation: 'Build an async service layer that simulates real REST API latency and stores data in LocalStorage.',
              command: `// src/api/employeeService.js
const STORAGE_KEY = "vinnertech_enterprise_employees";

const initialData = [
  { id: 101, firstName: "Sarah", lastName: "Connor", email: "sarah.c@vinnertech.com", department: "Engineering", designation: "Staff Architect", salary: 145000, status: "Active", joiningDate: "2022-03-15" },
  { id: 102, firstName: "David", lastName: "Miller", email: "david.m@vinnertech.com", department: "Product", designation: "Lead Product Manager", salary: 130000, status: "Active", joiningDate: "2023-01-10" },
  { id: 103, firstName: "Elena", lastName: "Rostova", email: "elena.r@vinnertech.com", department: "Design", designation: "Principal UI/UX Designer", salary: 125000, status: "On Leave", joiningDate: "2021-08-01" }
];

export const employeeService = {
  async getAll() {
    await new Promise(r => setTimeout(r, 150)); // Latency simulation
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
      return initialData;
    }
    return JSON.parse(raw);
  },

  async create(employeeData) {
    await new Promise(r => setTimeout(r, 150));
    const all = await this.getAll();
    const newRecord = {
      ...employeeData,
      id: Date.now(),
      joiningDate: new Date().toISOString().split("T")[0]
    };
    all.unshift(newRecord);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    return newRecord;
  },

  async update(id, updatedFields) {
    await new Promise(r => setTimeout(r, 150));
    const all = await this.getAll();
    const index = all.findIndex(e => e.id === Number(id));
    if (index === -1) throw new Error("Employee record not found");
    all[index] = { ...all[index], ...updatedFields };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    return all[index];
  },

  async delete(id) {
    await new Promise(r => setTimeout(r, 150));
    const all = await this.getAll();
    const filtered = all.filter(e => e.id !== Number(id));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return true;
  }
};`
            },
            {
              title: 'Step 2: Input Validation Layer (validators.js)',
              explanation: 'Enforce email formatting, character lengths, and numeric ranges.',
              command: `// src/utils/validators.js
export function validateEmployee(data) {
  const errors = {};

  if (!data.firstName || data.firstName.trim().length < 2) {
    errors.firstName = "First name must be at least 2 characters.";
  }

  if (!data.lastName || data.lastName.trim().length < 2) {
    errors.lastName = "Last name must be at least 2 characters.";
  }

  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = "Please enter a valid work email address.";
  }

  if (!data.department) {
    errors.department = "Please select a department.";
  }

  const salaryNum = Number(data.salary);
  if (isNaN(salaryNum) || salaryNum <= 0) {
    errors.salary = "Salary must be a positive number.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}`
            },
            {
              title: 'Step 3: State Management & Business Logic (employeeState.js)',
              explanation: 'Manage search queries, department filtering, multi-column sorting, and pagination calculations.',
              command: `// src/state/employeeState.js
export class EmployeeState {
  constructor() {
    this.rawEmployees = [];
    this.searchQuery = "";
    this.departmentFilter = "all";
    this.sortColumn = "firstName";
    this.sortDirection = "asc"; // 'asc' | 'desc'
    this.currentPage = 1;
    this.pageSize = 5;
  }

  setEmployees(list) {
    this.rawEmployees = list;
  }

  getFilteredAndSortedList() {
    let result = [...this.rawEmployees];

    // 1. Search Filter (First name, last name, email)
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      result = result.filter(e => 
        e.firstName.toLowerCase().includes(q) ||
        e.lastName.toLowerCase().includes(q) ||
        e.email.toLowerCase().includes(q) ||
        e.designation.toLowerCase().includes(q)
      );
    }

    // 2. Department Filter
    if (this.departmentFilter !== "all") {
      result = result.filter(e => e.department === this.departmentFilter);
    }

    // 3. Sorting
    result.sort((a, b) => {
      let valA = a[this.sortColumn];
      let valB = b[this.sortColumn];

      if (typeof valA === "string") valA = valA.toLowerCase();
      if (typeof valB === "string") valB = valB.toLowerCase();

      if (valA < valB) return this.sortDirection === "asc" ? -1 : 1;
      if (valA > valB) return this.sortDirection === "asc" ? 1 : -1;
      return 0;
    });

    return result;
  }

  getPagedData() {
    const filtered = this.getFilteredAndSortedList();
    const totalPages = Math.ceil(filtered.length / this.pageSize) || 1;
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const items = filtered.slice(startIndex, startIndex + this.pageSize);

    return {
      items,
      totalCount: filtered.length,
      totalPages,
      currentPage: this.currentPage
    };
  }
}`
            },
            {
              title: 'Step 4: Table DOM Component (TableRenderer.js)',
              explanation: 'Generate accessible HTML table rows with department color badges and action buttons.',
              command: `// src/components/TableRenderer.js
export function renderEmployeeTable(pagedData, containerElement) {
  const { items, totalCount, totalPages, currentPage } = pagedData;

  if (items.length === 0) {
    containerElement.innerHTML = \`
      <div class="text-center p-5 bg-light rounded-4 border">
        <i class="bi bi-person-x display-4 text-muted mb-3 d-block"></i>
        <h5 class="fw-bold text-dark">No employees found</h5>
        <p class="text-muted small">Try adjusting your search query or department filter.</p>
      </div>
    \`;
    return;
  }

  const rowsHtml = items.map(emp => {
    const statusClass = emp.status === "Active" ? "bg-success" : emp.status === "On Leave" ? "bg-warning text-dark" : "bg-danger";
    return \`
      <tr>
        <td class="align-middle fw-bold">\${emp.firstName} \${emp.lastName}</td>
        <td class="align-middle text-muted small">\${emp.email}</td>
        <td class="align-middle"><span class="badge bg-secondary bg-opacity-10 text-dark border">\${emp.department}</span></td>
        <td class="align-middle small">\${emp.designation}</td>
        <td class="align-middle fw-semibold">$\${Number(emp.salary).toLocaleString()}</td>
        <td class="align-middle"><span class="badge \${statusClass}">\${emp.status}</span></td>
        <td class="align-middle text-end">
          <button class="btn btn-sm btn-outline-primary me-1 btn-edit" data-id="\${emp.id}" title="Edit Record">
            <i class="bi bi-pencil-fill"></i>
          </button>
          <button class="btn btn-sm btn-outline-danger btn-delete" data-id="\${emp.id}" title="Delete Record">
            <i class="bi bi-trash3-fill"></i>
          </button>
        </td>
      </tr>
    \`;
  }).join('');

  containerElement.innerHTML = \`
    <div class="table-responsive shadow-sm rounded-4 border overflow-hidden">
      <table class="table table-hover mb-0">
        <thead class="table-light border-bottom">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Status</th>
            <th class="text-end">Actions</th>
          </tr>
        </thead>
        <tbody>\${rowsHtml}</tbody>
      </table>
    </div>
    <div class="d-flex justify-content-between align-items-center mt-3 px-2">
      <span class="text-muted small">Showing \${items.length} of \${totalCount} entries</span>
      <div class="btn-group btn-group-sm">
        <button class="btn btn-outline-secondary btn-prev" \${currentPage === 1 ? 'disabled' : ''}>Previous</button>
        <button class="btn btn-primary" disabled>\${currentPage} / \${totalPages}</button>
        <button class="btn btn-outline-secondary btn-next" \${currentPage >= totalPages ? 'disabled' : ''}>Next</button>
      </div>
    </div>
  \`;
}`
            },
            {
              title: 'Step 5: Toast Notifications Component (NotificationToast.js)',
              explanation: 'Display dismissable floating alerts on CRUD events.',
              command: `// src/components/NotificationToast.js
export function showToast(message, type = "success") {
  const existing = document.querySelector("#app-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "app-toast";
  toast.className = \`alert alert-\${type} alert-dismissible shadow-lg position-fixed bottom-0 end-0 m-4 fade show\`;
  toast.style.zIndex = "9999";
  toast.innerHTML = \`
    <div class="d-flex align-items-center">
      <i class="bi bi-check-circle-fill me-2 fs-5"></i>
      <span>\${message}</span>
      <button type="button" class="btn-close ms-3" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  \`;

  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}`
            },
            {
              title: 'Step 6: Master Application Controller (app.js)',
              explanation: 'Orchestrate all modules, bind UI controls, handle modals, and execute CRUD operations.',
              command: `// src/app.js
import { employeeService } from './api/employeeService.js';
import { validateEmployee } from './utils/validators.js';
import { EmployeeState } from './state/employeeState.js';
import { renderEmployeeTable } from './components/TableRenderer.js';
import { showToast } from './components/NotificationToast.js';

class EmployeeApp {
  constructor() {
    this.state = new EmployeeState();
    this.initElements();
    this.attachEvents();
    this.loadInitialData();
  }

  initElements() {
    this.tableContainer = document.getElementById("table-container");
    this.searchInput = document.getElementById("search-input");
    this.deptFilter = document.getElementById("dept-filter");
    this.form = document.getElementById("employee-form");
    this.modalEl = document.getElementById("employeeModal");
    this.modalTitle = document.getElementById("modal-title");
    this.activeIdInput = document.getElementById("employee-id");
  }

  async loadInitialData() {
    const list = await employeeService.getAll();
    this.state.setEmployees(list);
    this.render();
  }

  render() {
    const paged = this.state.getPagedData();
    renderEmployeeTable(paged, this.tableContainer);
  }

  attachEvents() {
    // 1. Search filtering with real-time input
    this.searchInput.addEventListener("input", (e) => {
      this.state.searchQuery = e.target.value;
      this.state.currentPage = 1;
      this.render();
    });

    // 2. Department Dropdown Filter
    this.deptFilter.addEventListener("change", (e) => {
      this.state.departmentFilter = e.target.value;
      this.state.currentPage = 1;
      this.render();
    });

    // 3. Table Event Delegation (Edit, Delete, Pagination)
    this.tableContainer.addEventListener("click", async (e) => {
      const editBtn = e.target.closest(".btn-edit");
      const delBtn = e.target.closest(".btn-delete");
      const prevBtn = e.target.closest(".btn-prev");
      const nextBtn = e.target.closest(".btn-next");

      if (editBtn) this.openEditModal(Number(editBtn.dataset.id));
      if (delBtn) this.handleDelete(Number(delBtn.dataset.id));
      if (prevBtn) { this.state.currentPage--; this.render(); }
      if (nextBtn) { this.state.currentPage++; this.render(); }
    });

    // 4. Form Submit (Create vs Update)
    this.form.addEventListener("submit", (e) => this.handleFormSubmit(e));
  }

  openEditModal(id) {
    const employee = this.state.rawEmployees.find(e => e.id === id);
    if (!employee) return;

    this.activeIdInput.value = employee.id;
    this.modalTitle.textContent = "Edit Employee Record";
    document.getElementById("first-name").value = employee.firstName;
    document.getElementById("last-name").value = employee.lastName;
    document.getElementById("email").value = employee.email;
    document.getElementById("department").value = employee.department;
    document.getElementById("designation").value = employee.designation;
    document.getElementById("salary").value = employee.salary;
    document.getElementById("status").value = employee.status;

    const bsModal = new bootstrap.Modal(this.modalEl);
    bsModal.show();
  }

  async handleDelete(id) {
    if (!confirm("Are you sure you want to permanently delete this employee?")) return;
    
    await employeeService.delete(id);
    const updated = await employeeService.getAll();
    this.state.setEmployees(updated);
    this.render();
    showToast("Employee deleted successfully", "warning");
  }

  async handleFormSubmit(e) {
    e.preventDefault();
    const formData = {
      firstName: document.getElementById("first-name").value,
      lastName: document.getElementById("last-name").value,
      email: document.getElementById("email").value,
      department: document.getElementById("department").value,
      designation: document.getElementById("designation").value,
      salary: Number(document.getElementById("salary").value),
      status: document.getElementById("status").value
    };

    const { isValid, errors } = validateEmployee(formData);
    if (!isValid) {
      alert("Validation Error: " + Object.values(errors).join("\\n"));
      return;
    }

    const editId = this.activeIdInput.value;
    if (editId) {
      await employeeService.update(editId, formData);
      showToast("Employee updated successfully", "success");
    } else {
      await employeeService.create(formData);
      showToast("New employee created successfully", "success");
    }

    bootstrap.Modal.getInstance(this.modalEl)?.hide();
    this.form.reset();
    this.activeIdInput.value = "";
    
    const updated = await employeeService.getAll();
    this.state.setEmployees(updated);
    this.render();
  }
}

// Bootstrap application on DOM ready
document.addEventListener("DOMContentLoaded", () => new EmployeeApp());`
            },
            {
              title: 'Step 7: Verification & Testing Checklist',
              explanation: 'Verify that Create, Read, Update, Delete, Search, and Pagination behave correctly.',
              command: `// Verification Test Steps:
// 1. Click "Add Employee" -> Submit blank form -> Confirm validation errors trigger.
// 2. Fill valid employee -> Submit -> Confirm table updates instantly and toast appears.
// 3. Type into Search box -> Confirm real-time filtering without page reloads.
// 4. Click "Edit" -> Change department and salary -> Save -> Confirm persistence.
// 5. Click "Delete" -> Confirm modal alert -> Verify record is removed.`
            },
            {
              title: 'Step 8: Final Senior JavaScript Checklist',
              explanation: 'Ensure all architectural pillars are satisfied.',
              command: `/*
  Senior JavaScript Mastery Checklist:
  [x] Layered Architecture & Separation of Concerns (api, state, components, utils)
  [x] Complete CRUD functionality (Create, Read, Update, Delete)
  [x] Robust Client-Side Validation & Regex Checks
  [x] Asynchronous Data Handling with async/await & Promises
  [x] High-Performance Event Delegation on Table Container
  [x] Browser Storage Persistence with JSON Serialization
  [x] Responsive Mobile & Desktop Bootstrap UI Layout
*/`
            }
          ],
          verification: 'Test full CRUD operations: create a new employee, edit their salary, search by department, and delete a record to verify end-to-end functionality.',
          expectedResult: 'A complete, enterprise-ready Vanilla JavaScript CRUD Application with zero framework dependencies.',
          summary: 'You have mastered enterprise Vanilla JavaScript application architecture, from async service layers to state machines, event delegation, and complete CRUD operations.'
        }
      ]
    }
  ]
};

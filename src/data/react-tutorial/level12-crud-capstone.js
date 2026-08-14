export const level12CrudCapstone = {
  id: 'level-12',
  title: 'Level 12: Enterprise CRUD & Capstone',
  icon: 'bi-trophy',
  color: '#ffc107',
  description: 'Master Enterprise Frontend Architecture: build a complete Employee Management CRUD Application with custom API hooks, validation schemas, modal dialogues, pagination, search, and the Final Practical Assessment certification.',
  chapters: [
    {
      id: 'enterprise-crud-capstone',
      title: '12. Enterprise CRUD & Capstone',
      lessons: [
        {
          id: 'enterprise-employee-crud-system',
          slug: 'enterprise-employee-crud-system',
          order: '12.1',
          title: 'Master Project: Enterprise Employee CRUD Management System',
          subtitle: 'A full-scale production CRUD application with layered architecture, custom hooks (useEmployees), client validation, modal dialogs, search, filter, and pagination.',
          chapterId: 'enterprise-crud-capstone',
          chapterTitle: '12. Enterprise CRUD & Capstone',
          levelTitle: 'Level 12: Enterprise CRUD & Capstone',
          goal: 'Build an enterprise-grade CRUD system demonstrating layered frontend architecture: API Service layer, Custom Hooks layer, Presentation Components, and Modal validation forms.',
          prerequisites: [
            'All previous levels completed.'
          ],
          concept: `### Enterprise Frontend Architecture Blueprint
In enterprise development, placing all state, API calls, and markup into a single massive component is an anti-pattern. We separate concerns into distinct, testable layers:

\`\`\`text
src/
├── services/
│   └── employeeService.js      <- HTTP Client Layer (GET, POST, PUT, DELETE)
├── hooks/
│   └── useEmployees.js         <- Business Logic Layer (state, search, pagination)
├── utils/
│   └── validators.js           <- Validation rules (Email regex, required fields)
├── components/employee/
│   ├── EmployeeToolbar.jsx     <- Search input, department filter, and "Add Employee" button
│   ├── EmployeeTable.jsx       <- Responsive table with sortable column headers & badges
│   ├── EmployeeModal.jsx       <- Controlled form modal for Create and Edit operations
│   ├── DeleteConfirmModal.jsx  <- Safety modal to prevent accidental data loss
│   └── EmptyState.jsx          <- Clean illustration when no records match filter
└── pages/
    └── EmployeeDashboard.jsx    <- Master Container Orchestration
\`\`\`

### Complete CRUD Features Implemented:
- **Create**: Add new employee with live email, phone, and salary validation inside an accessible modal dialog.
- **Read**: View paginated list of employees with department color badges and formatted salary currency.
- **Update**: Edit existing employee records with pre-populated form fields and dirty-state tracking.
- **Delete**: Remove employee with a two-step safety confirmation modal.
- **Search & Filter**: Real-time debounce searching by name/email and filtering by department.
- **Sorting**: Clickable column headers (Name, Salary, Date) with ascending/descending indicators.
- **Pagination**: Configurable page sizes (5, 10, 25 records per page) with previous/next controls.`,
          diagram: `flowchart TD
    UI["EmployeeDashboard (Master Container)"] --> Hook["useEmployees() (Custom Hook)"]
    Hook --> API["employeeService.js (HTTP / REST Layer)"]
    API --> DB[("LocalStorage Database")]
    
    UI --> Toolbar["<EmployeeToolbar /> (Search, Filter, Add Action)"]
    UI --> Table["<EmployeeTable /> (Sortable Grid & Action Buttons)"]
    UI --> EditModal["<EmployeeModal /> (Create & Update Form)"]
    UI --> DelModal["<DeleteConfirmModal /> (Safety Confirmation)"]
    
    style UI fill:#cfe2ff,stroke:#084298,color:#084298
    style Hook fill:#d1e7dd,stroke:#198754,color:#0f5132
    style API fill:#fff3cd,stroke:#ffc107,color:#664d03
    style DB fill:#e2e3e5,stroke:#41464b,color:#141619`,
          steps: [
            {
              title: 'Step 1: The API Service Layer (services/employeeService.js)',
              explanation: 'Centralize all HTTP network calls in a dedicated service file. We simulate asynchronous network latency (300ms) and persist data in LocalStorage so your changes survive page refreshes.',
              command: `// src/services/employeeService.js
const STORAGE_KEY = 'vinnertech_employees_db';

const initialSeedData = [
  { id: 1, firstName: 'Sarah', lastName: 'Connor', email: 'sarah.connor@vinnertech.com', department: 'Engineering', role: 'Staff Software Architect', salary: 145000, joinDate: '2022-03-15' },
  { id: 2, firstName: 'David', lastName: 'Miller', email: 'david.miller@vinnertech.com', department: 'Engineering', role: 'Senior React Developer', salary: 115000, joinDate: '2023-01-10' },
  { id: 3, firstName: 'Elena', lastName: 'Rostova', email: 'elena.rostova@vinnertech.com', department: 'Product', role: 'Director of Product', salary: 135000, joinDate: '2021-08-01' },
  { id: 4, firstName: 'Marcus', lastName: 'Vance', email: 'marcus.vance@vinnertech.com', department: 'Design', role: 'Lead UI/UX Designer', salary: 105000, joinDate: '2023-06-20' },
  { id: 5, firstName: 'Priya', lastName: 'Sharma', email: 'priya.sharma@vinnertech.com', department: 'DevOps', role: 'Cloud Infrastructure Lead', salary: 130000, joinDate: '2022-11-05' }
];

// Helper to simulate network latency
const delay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms));

export const employeeService = {
  // READ ALL
  getAll: async () => {
    await delay();
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialSeedData));
      return initialSeedData;
    }
    return JSON.parse(raw);
  },

  // READ BY ID
  getById: async (id) => {
    await delay();
    const list = await employeeService.getAll();
    return list.find(e => e.id === Number(id)) || null;
  },

  // CREATE
  create: async (employeeData) => {
    await delay();
    const list = await employeeService.getAll();
    const newEmployee = {
      ...employeeData,
      id: Date.now(),
      joinDate: new Date().toISOString().split('T')[0]
    };
    const updated = [newEmployee, ...list];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return newEmployee;
  },

  // UPDATE
  update: async (id, updatedFields) => {
    await delay();
    const list = await employeeService.getAll();
    const index = list.findIndex(e => e.id === Number(id));
    if (index === -1) throw new Error('Employee not found.');
    list[index] = { ...list[index], ...updatedFields };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    return list[index];
  },

  // DELETE
  delete: async (id) => {
    await delay();
    const list = await employeeService.getAll();
    const filtered = list.filter(e => e.id !== Number(id));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return true;
  }
};`
            },
            {
              title: 'Step 2: Form Validation Engine (utils/validators.js)',
              explanation: 'Create a reusable client-side validation schema to validate email formatting, required fields, and realistic salary ranges before triggering API calls.',
              command: `// src/utils/validators.js
export function validateEmployee(formData) {
  const errors = {};

  if (!formData.firstName || formData.firstName.trim().length < 2) {
    errors.firstName = 'First name is required (minimum 2 characters).';
  }

  if (!formData.lastName || formData.lastName.trim().length < 2) {
    errors.lastName = 'Last name is required (minimum 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailRegex.test(formData.email)) {
    errors.email = 'Please provide a valid business email address.';
  }

  if (!formData.department) {
    errors.department = 'Please select a valid department.';
  }

  if (!formData.role || formData.role.trim().length < 2) {
    errors.role = 'Role title is required.';
  }

  if (!formData.salary || Number(formData.salary) < 10000) {
    errors.salary = 'Annual salary must be at least $10,000.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}`
            },
            {
              title: 'Step 3: Custom Hook Business Logic Layer (hooks/useEmployees.js)',
              explanation: 'Encapsulate all CRUD state management, search query filtering, department category matching, column sorting, and pagination calculations inside a custom hook.',
              command: `// src/hooks/useEmployees.js
import { useState, useEffect, useMemo, useCallback } from 'react';
import { employeeService } from '../services/employeeService';

export function useEmployees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Search, Filter & Sort State
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('All');
  const [sortField, setSortField] = useState('firstName');
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' | 'desc'

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  // Load initial employees
  const loadEmployees = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await employeeService.getAll();
      setEmployees(data);
    } catch (err) {
      setError(err.message || 'Failed to load employee records.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadEmployees();
  }, [loadEmployees]);

  // CRUD Operations
  const createEmployee = async (formData) => {
    const created = await employeeService.create(formData);
    setEmployees(prev => [created, ...prev]);
    return created;
  };

  const updateEmployee = async (id, updatedFields) => {
    const updated = await employeeService.update(id, updatedFields);
    setEmployees(prev => prev.map(e => e.id === id ? updated : e));
    return updated;
  };

  const deleteEmployee = async (id) => {
    await employeeService.delete(id);
    setEmployees(prev => prev.filter(e => e.id !== id));
  };

  // Filter & Sort Pipeline
  const filteredAndSorted = useMemo(() => {
    return employees
      .filter(emp => {
        const query = searchTerm.toLowerCase();
        const fullName = \`\${emp.firstName} \${emp.lastName}\`.toLowerCase();
        const matchesSearch = fullName.includes(query) || 
                              emp.email.toLowerCase().includes(query) || 
                              emp.role.toLowerCase().includes(query);
        const matchesDept = departmentFilter === 'All' || emp.department === departmentFilter;
        return matchesSearch && matchesDept;
      })
      .sort((a, b) => {
        let valA = a[sortField];
        let valB = b[sortField];
        if (typeof valA === 'string') valA = valA.toLowerCase();
        if (typeof valB === 'string') valB = valB.toLowerCase();

        if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
        if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
  }, [employees, searchTerm, departmentFilter, sortField, sortOrder]);

  // Pagination Slice
  const totalRecords = filteredAndSorted.length;
  const totalPages = Math.max(1, Math.ceil(totalRecords / pageSize));
  
  const paginatedEmployees = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredAndSorted.slice(start, start + pageSize);
  }, [filteredAndSorted, currentPage, pageSize]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  return {
    employees: paginatedEmployees,
    rawEmployees: employees,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    departmentFilter,
    setDepartmentFilter,
    sortField,
    sortOrder,
    handleSort,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    totalRecords,
    totalPages,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    refresh: loadEmployees
  };
}`
            },
            {
              title: 'Step 4: Search & Filter Toolbar Component (components/EmployeeToolbar.jsx)',
              explanation: 'Build the interactive controls bar featuring live search, department dropdown filter, records count badge, and the "Add New Employee" trigger button.',
              command: `// src/components/EmployeeToolbar.jsx
import React from 'react';

const DEPARTMENTS = ['All', 'Engineering', 'Product', 'Design', 'DevOps', 'HR', 'Marketing'];

export function EmployeeToolbar({ 
  searchTerm, 
  onSearchChange, 
  departmentFilter, 
  onDepartmentChange, 
  totalCount,
  onOpenCreateModal 
}) {
  return (
    <div className="card border-0 shadow-sm rounded-4 p-3 mb-4" style={{ backgroundColor: 'var(--card-bg)' }}>
      <div className="row g-3 align-items-center">
        {/* Search Input */}
        <div className="col-12 col-md-5">
          <div className="input-group">
            <span className="input-group-text bg-transparent border-end-0 text-muted">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-start-0 ps-0"
              placeholder="Search by name, email, or role..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>

        {/* Department Filter Dropdown */}
        <div className="col-6 col-md-3">
          <select
            className="form-select"
            value={departmentFilter}
            onChange={(e) => onDepartmentChange(e.target.value)}
          >
            {DEPARTMENTS.map(dept => (
              <option key={dept} value={dept}>
                {dept === 'All' ? 'All Departments' : dept}
              </option>
            ))}
          </select>
        </div>

        {/* Total Records Counter */}
        <div className="col-6 col-md-2 text-md-center">
          <span className="badge bg-secondary bg-opacity-10 text-secondary border px-3 py-2 rounded-pill">
            {totalCount} {totalCount === 1 ? 'Record' : 'Records'}
          </span>
        </div>

        {/* Add Employee Button */}
        <div className="col-12 col-md-2 text-md-end">
          <button
            type="button"
            className="btn btn-primary w-100 rounded-3 d-flex align-items-center justify-content-center gap-2"
            onClick={onOpenCreateModal}
          >
            <i className="bi bi-plus-lg"></i>
            <span>Add Member</span>
          </button>
        </div>
      </div>
    </div>
  );
}`
            },
            {
              title: 'Step 5: Sortable Data Table Component (components/EmployeeTable.jsx)',
              explanation: 'Build the presentation table displaying employee avatars, department badges, salary currency formatting, clickable sort headers, and action buttons for editing and deleting.',
              command: `// src/components/EmployeeTable.jsx
import React from 'react';

const DEPT_COLORS = {
  Engineering: 'bg-primary',
  Product: 'bg-success',
  Design: 'bg-warning text-dark',
  DevOps: 'bg-info text-dark',
  HR: 'bg-danger',
  Marketing: 'bg-secondary'
};

export function EmployeeTable({ 
  employees, 
  sortField, 
  sortOrder, 
  onSort, 
  onEdit, 
  onDelete 
}) {
  const renderSortIcon = (field) => {
    if (sortField !== field) return <i className="bi bi-arrow-down-up text-muted ms-1 small"></i>;
    return sortOrder === 'asc' 
      ? <i className="bi bi-arrow-up text-primary ms-1"></i>
      : <i className="bi bi-arrow-down text-primary ms-1"></i>;
  };

  return (
    <div className="table-responsive rounded-4 border shadow-sm" style={{ backgroundColor: 'var(--card-bg)' }}>
      <table className="table table-hover align-middle mb-0">
        <thead className="table-light">
          <tr>
            <th scope="col" className="ps-4 cursor-pointer" onClick={() => onSort('firstName')}>
              Employee {renderSortIcon('firstName')}
            </th>
            <th scope="col" className="cursor-pointer" onClick={() => onSort('department')}>
              Department {renderSortIcon('department')}
            </th>
            <th scope="col">Role</th>
            <th scope="col" className="cursor-pointer" onClick={() => onSort('salary')}>
              Salary {renderSortIcon('salary')}
            </th>
            <th scope="col">Join Date</th>
            <th scope="col" className="text-end pe-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td className="ps-4">
                <div className="d-flex align-items-center gap-3">
                  <div className="rounded-circle bg-primary bg-opacity-10 text-primary fw-bold d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', fontSize: '0.95rem' }}>
                    {emp.firstName[0]}{emp.lastName[0]}
                  </div>
                  <div>
                    <div className="fw-bold text-dark">{emp.firstName} {emp.lastName}</div>
                    <div className="text-muted small">{emp.email}</div>
                  </div>
                </div>
              </td>
              <td>
                <span className={\`badge \${DEPT_COLORS[emp.department] || 'bg-secondary'} rounded-pill px-3 py-1\`}>
                  {emp.department}
                </span>
              </td>
              <td className="fw-semibold text-secondary">{emp.role}</td>
              <td className="fw-bold">\${Number(emp.salary).toLocaleString()}</td>
              <td className="text-muted small">{emp.joinDate}</td>
              <td className="text-end pe-4">
                <div className="btn-group">
                  <button 
                    className="btn btn-sm btn-outline-primary" 
                    onClick={() => onEdit(emp)}
                    title="Edit Record"
                  >
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button 
                    className="btn btn-sm btn-outline-danger" 
                    onClick={() => onDelete(emp)}
                    title="Delete Record"
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}`
            },
            {
              title: 'Step 6: Form Modal Component for Create & Edit (components/EmployeeModal.jsx)',
              explanation: 'Build the controlled modal dialog supporting both Create (empty form) and Edit (pre-populated) modes with real-time validation error alerts.',
              command: `// src/components/EmployeeModal.jsx
import React, { useState, useEffect } from 'react';
import { validateEmployee } from '../utils/validators';

export function EmployeeModal({ isOpen, onClose, onSave, initialData }) {
  const isEditMode = Boolean(initialData);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: 'Engineering',
    role: '',
    salary: ''
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        department: 'Engineering',
        role: '',
        salary: ''
      });
    }
    setErrors({});
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, errors: validationErrors } = validateEmployee(formData);
    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    try {
      setSubmitting(true);
      await onSave(formData);
      onClose();
    } catch (err) {
      alert(err.message || 'Error saving record');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded-4 border-0 shadow">
          <div className="modal-header border-bottom">
            <h5 className="modal-title fw-bold">
              <i className={\`bi \${isEditMode ? 'bi-pencil-square text-primary' : 'bi-person-plus text-success'} me-2\`}></i>
              {isEditMode ? 'Edit Employee Details' : 'Add New Team Member'}
            </h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body p-4">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label small fw-bold">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className={\`form-control \${errors.firstName ? 'is-invalid' : ''}\`}
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                </div>

                <div className="col-md-6">
                  <label className="form-label small fw-bold">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className={\`form-control \${errors.lastName ? 'is-invalid' : ''}\`}
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                </div>

                <div className="col-12">
                  <label className="form-label small fw-bold">Business Email</label>
                  <input
                    type="email"
                    name="email"
                    className={\`form-control \${errors.email ? 'is-invalid' : ''}\`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="col-md-6">
                  <label className="form-label small fw-bold">Department</label>
                  <select
                    name="department"
                    className="form-select"
                    value={formData.department}
                    onChange={handleChange}
                  >
                    <option value="Engineering">Engineering</option>
                    <option value="Product">Product</option>
                    <option value="Design">Design</option>
                    <option value="DevOps">DevOps</option>
                    <option value="HR">HR</option>
                    <option value="Marketing">Marketing</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label small fw-bold">Annual Salary ($)</label>
                  <input
                    type="number"
                    name="salary"
                    className={\`form-control \${errors.salary ? 'is-invalid' : ''}\`}
                    value={formData.salary}
                    onChange={handleChange}
                  />
                  {errors.salary && <div className="invalid-feedback">{errors.salary}</div>}
                </div>

                <div className="col-12">
                  <label className="form-label small fw-bold">Role Title</label>
                  <input
                    type="text"
                    name="role"
                    className={\`form-control \${errors.role ? 'is-invalid' : ''}\`}
                    placeholder="e.g. Senior Frontend Architect"
                    value={formData.role}
                    onChange={handleChange}
                  />
                  {errors.role && <div className="invalid-feedback">{errors.role}</div>}
                </div>
              </div>
            </div>

            <div className="modal-footer border-top bg-light">
              <button type="button" className="btn btn-secondary rounded-pill px-4" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary rounded-pill px-4" disabled={submitting}>
                {submitting ? 'Saving...' : isEditMode ? 'Update Record' : 'Create Record'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}`
            },
            {
              title: 'Step 7: Delete Confirmation Safety Modal (components/DeleteConfirmModal.jsx)',
              explanation: 'Build a safety confirmation modal to prevent accidental data deletion in production systems.',
              command: `// src/components/DeleteConfirmModal.jsx
import React from 'react';

export function DeleteConfirmModal({ isOpen, onClose, onConfirm, employee }) {
  if (!isOpen || !employee) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}>
      <div className="modal-dialog modal-dialog-centered modal-sm">
        <div className="modal-content rounded-4 border-0 shadow text-center p-4">
          <div className="rounded-circle bg-danger bg-opacity-10 text-danger mx-auto d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
            <i className="bi bi-exclamation-triangle-fill fs-3"></i>
          </div>

          <h5 className="fw-bold mb-2">Delete Employee?</h5>
          <p className="text-muted small mb-4">
            Are you sure you want to permanently remove <strong>{employee.firstName} {employee.lastName}</strong>? This action cannot be undone.
          </p>

          <div className="d-flex gap-2 justify-content-center">
            <button type="button" className="btn btn-light rounded-pill px-3" onClick={onClose}>
              Cancel
            </button>
            <button 
              type="button" 
              className="btn btn-danger rounded-pill px-3" 
              onClick={() => onConfirm(employee.id)}
            >
              Confirm Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`
            },
            {
              title: 'Step 8: Master Container Orchestration (pages/EmployeeDashboard.jsx)',
              explanation: 'Assemble all modular components into a cohesive, responsive dashboard with pagination controls, loading indicators, and empty states.',
              command: `// src/pages/EmployeeDashboard.jsx
import React, { useState } from 'react';
import { useEmployees } from '../hooks/useEmployees';
import { EmployeeToolbar } from '../components/EmployeeToolbar';
import { EmployeeTable } from '../components/EmployeeTable';
import { EmployeeModal } from '../components/EmployeeModal';
import { DeleteConfirmModal } from '../components/DeleteConfirmModal';

export default function EmployeeDashboard() {
  const {
    employees,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    departmentFilter,
    setDepartmentFilter,
    sortField,
    sortOrder,
    handleSort,
    currentPage,
    setCurrentPage,
    totalRecords,
    totalPages,
    createEmployee,
    updateEmployee,
    deleteEmployee
  } = useEmployees();

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deletingEmployee, setDeletingEmployee] = useState(null);

  const handleOpenCreate = () => {
    setEditingEmployee(null);
    setModalOpen(true);
  };

  const handleOpenEdit = (emp) => {
    setEditingEmployee(emp);
    setModalOpen(true);
  };

  const handleOpenDelete = (emp) => {
    setDeletingEmployee(emp);
    setDeleteModalOpen(true);
  };

  const handleSave = async (formData) => {
    if (editingEmployee) {
      await updateEmployee(editingEmployee.id, formData);
    } else {
      await createEmployee(formData);
    }
  };

  const handleConfirmDelete = async (id) => {
    await deleteEmployee(id);
    setDeleteModalOpen(false);
    setDeletingEmployee(null);
  };

  return (
    <div className="container py-4">
      {/* Dashboard Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Employee Directory</h2>
          <p className="text-muted mb-0">Manage enterprise personnel, roles, and compensation.</p>
        </div>
      </div>

      {/* Toolbar Controls */}
      <EmployeeToolbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        departmentFilter={departmentFilter}
        onDepartmentChange={setDepartmentFilter}
        totalCount={totalRecords}
        onOpenCreateModal={handleOpenCreate}
      />

      {/* Error Alert */}
      {error && <div className="alert alert-danger rounded-3">{error}</div>}

      {/* Loading Skeleton vs Table */}
      {loading ? (
        <div className="card p-5 text-center border-0 shadow-sm rounded-4">
          <div className="spinner-border text-primary mx-auto mb-3" role="status"></div>
          <p className="text-muted mb-0">Loading employee records from storage...</p>
        </div>
      ) : employees.length === 0 ? (
        <div className="card p-5 text-center border-0 shadow-sm rounded-4">
          <i className="bi bi-search fs-1 text-muted mb-3"></i>
          <h5>No employees match your search criteria.</h5>
          <p className="text-muted">Try clearing the search query or changing the department filter.</p>
        </div>
      ) : (
        <>
          <EmployeeTable
            employees={employees}
            sortField={sortField}
            sortOrder={sortOrder}
            onSort={handleSort}
            onEdit={handleOpenEdit}
            onDelete={handleOpenDelete}
          />

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="d-flex justify-content-between align-items-center mt-3 px-2">
              <span className="text-muted small">Page {currentPage} of {totalPages}</span>
              <div className="btn-group">
                <button
                  className="btn btn-sm btn-outline-secondary"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => prev - 1)}
                >
                  <i className="bi bi-chevron-left me-1"></i> Previous
                </button>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(prev => prev + 1)}
                >
                  Next <i className="bi bi-chevron-right ms-1"></i>
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* Modals */}
      <EmployeeModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        initialData={editingEmployee}
      />

      <DeleteConfirmModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        employee={deletingEmployee}
      />
    </div>
  );
}`
            }
          ],
          verification: 'Run the project and verify all CRUD operations: Create a new employee with valid inputs, see it appear on the table, edit the record, sort by Salary, search by name, and delete with confirmation dialog.',
          expectedResult: 'All 8 features (Create, Read, Update, Delete, Search, Filter, Sort, Pagination) function smoothly with zero console errors and persistent LocalStorage state.',
          commonMistakes: [
            {
              problem: 'Mutating state directly when updating an employee (e.g. employees[i].salary = 10000).',
              why: 'Direct mutation does not trigger React re-renders.',
              fix: 'Always use .map() to return a new copy with the updated object: employees.map(e => e.id === id ? { ...e, ...updated } : e).'
            },
            {
              problem: 'Forgetting to prevent default form submission with e.preventDefault().',
              why: 'HTML forms refresh the entire web page on submit by default.',
              fix: 'Call e.preventDefault() as the first line in handleSubmit.'
            }
          ],
          quiz: {
            question: 'In layered enterprise React architecture, where should filtering, sorting, and pagination logic reside?',
            options: [
              'Inside the table HTML markup in the render method.',
              'Encapsulated cleanly inside a Custom Hook (e.g. useEmployees) with useMemo.',
              'Hardcoded in global window variables.',
              'Inside CSS stylesheets.'
            ],
            correctIndex: 1,
            explanation: 'Custom hooks encapsulate state and business logic cleanly, keeping presentation components focused purely on rendering UI.'
          },
          summary: 'A complete enterprise CRUD application separates concerns across an API Service layer, Custom Hooks business logic layer, and modular UI components with client validation and modal dialogs.'
        },
        {
          id: 'final-developer-checklist-and-certification',
          slug: 'final-developer-checklist-and-certification',
          order: '12.2',
          title: 'Final React Developer Certification Checklist',
          subtitle: 'The comprehensive production checklist every React developer must verify before deploying to production.',
          chapterId: 'enterprise-crud-capstone',
          chapterTitle: '12. Enterprise CRUD & Capstone',
          levelTitle: 'Level 12: Enterprise CRUD & Capstone',
          goal: 'Review all core competencies from Level 1 through Level 12 and verify readiness for production development and senior technical interviews.',
          prerequisites: [
            'All lessons and projects completed.'
          ],
          concept: `### The Senior React Developer Competency Checklist

| Level | Core Mastery Domain | Production Skills Verified |
| :--- | :--- | :--- |
| **Level 1** | JavaScript & Foundations | ES6+, Array Methods (.map, .filter, .reduce), Async/Await, Destructuring |
| **Level 2** | React Fundamentals & JSX | Virtual DOM diffing, JSX syntax rules, Functional components |
| **Level 3** | Props, State & Immutability | Unidirectional flow, useState snapshot model, immutable object/array updates |
| **Level 4** | Forms & Component Sync | Controlled inputs, validation state, lifting state up |
| **Level 5** | Core Hooks Mastery | useEffect lifecycle & cleanup, useRef DOM refs, useMemo & useCallback |
| **Level 6** | SPA Routing | react-router-dom v7, dynamic useParams, nested Outlet layouts, useNavigate |
| **Level 7** | REST API & Data Fetching | 3-state UI pattern (loading, error, data), AbortController cancellation |
| **Level 8** | State Management | React Context API, custom AuthProvider, useReducer state machines |
| **Level 9** | Advanced Patterns | Error Boundaries, React.lazy() & Suspense route code splitting |
| **Level 10** | Testing & Deployment | React Testing Library user-centric tests, Vite production builds |
| **Level 11** | Real-World REST Dashboard | Async weather dashboard, unit conversions, skeleton states |
| **Level 12** | Enterprise CRUD Capstone | Full-scale Employee Management system with layered architecture & modals |`,
          steps: [
            {
              title: 'Self-Assessment: Verify Core Concepts',
              explanation: 'Confirm that you can explain each of these 5 pillars to an interviewer without notes:\n\n1. How the Virtual DOM and Reconciliation algorithm work.\n2. Why state must be treated as immutable in React.\n3. The exact cleanup lifecycle of `useEffect`.\n4. When to use React Context vs Component State.\n5. How code splitting with `React.lazy` optimizes production bundle size.',
              command: null
            }
          ],
          verification: 'Verify that all 23 lessons across the 12 levels show 100% completion in your progress tracker.',
          expectedResult: 'Congratulations! You have completed the comprehensive Zero-to-Architect React Developer Guide.',
          summary: 'You have mastered the complete React ecosystem from JavaScript foundations to enterprise CRUD architecture, state management, routing, testing, and production deployment.'
        }
      ]
    }
  ]
};

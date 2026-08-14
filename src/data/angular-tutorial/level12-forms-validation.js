// Level 12: Forms & Validation (In-Depth Expanded Edition)
export const level12FormsValidation = {
  id: 'level-12',
  title: 'Level 12: Forms & Validation',
  icon: 'bi-ui-checks-grid',
  color: '#6366f1',
  description: 'Master Template-Driven Forms vs Reactive Forms, FormControl, FormGroup, FormBuilder, built-in validators, custom regex validators, cross-field validation, and async API validation in baby steps.',
  chapters: [
    {
      id: 'forms-and-validation',
      title: '12. Forms & Validation Architecture',
      lessons: [
        {
          id: 'template-driven-vs-reactive-forms',
          slug: 'template-driven-vs-reactive-forms',
          order: '12.1',
          title: 'Template-Driven vs Reactive Forms: Architecture & Comparison',
          subtitle: 'Comparing implicit template-directed forms (FormsModule) vs explicit immutable reactive models (ReactiveFormsModule) in baby steps.',
          chapterId: 'forms-and-validation',
          chapterTitle: '12. Forms & Validation Architecture',
          levelTitle: 'Level 12: Forms & Validation',
          goal: 'Understand the fundamental architectural differences between Template-Driven and Reactive Forms to pick the right form strategy.',
          prerequisites: ['Level 11 completed.'],
          concept: `### The Two Form Strategies in Angular

Angular provides two distinct paradigms for handling user form inputs:

| Feature | Template-Driven Forms (\`FormsModule\`) | Reactive Forms (\`ReactiveFormsModule\`) |
| :--- | :--- | :--- |
| **Form Model Setup** | Implicit in HTML template (\`[(ngModel)]\`, \`name\`). | **Explicit in TypeScript class (\`FormGroup\`, \`FormControl\`)**. |
| **Data Flow** | Asynchronous two-way binding. | **Synchronous, functional, immutable streams (\`valueChanges\`)**. |
| **Validation** | HTML template directives (\`required\`, \`minlength\`). | **TypeScript validator functions (\`Validators.required\`)**. |
| **Unit Testability** | Harder (requires DOM fixture rendering). | **Trivially easy (test class model directly without DOM)**. |
| **Best For** | Simple forms, login/contact dialogs. | **Complex enterprise forms, dynamic arrays, wizard steps**. |`,
          diagram: `flowchart TD
    Strategy["Choose Angular Form Strategy"] --> Simple{"Simple Form or Login Box?"}
    Simple -->|Yes| TDF["Template-Driven Forms (FormsModule)\n- Fast to scaffold\n- Implicit template binding"]
    Simple -->|No (Enterprise / Multi-step)| RF["Reactive Forms (ReactiveFormsModule)\n- Explicit FormGroup in TS\n- Synchronous streams\n- Trivially unit testable"]
    
    style Strategy fill:#cfe2ff,stroke:#084298,color:#084298
    style Simple fill:#fff3cd,stroke:#ffc107,color:#664d03
    style TDF fill:#d1e7dd,stroke:#198754,color:#0f5132
    style RF fill:#10b981,color:#fff`,
          steps: [
            {
              title: 'Step 1: Simple Template-Driven Form Example',
              explanation: 'Use ngModel and ngForm in template.',
              command: `<form #loginForm="ngForm" (ngSubmit)="onLogin(loginForm.value)">
  <input name="email" ngModel required email #emailCtrl="ngModel" class="form-control" />
  @if (emailCtrl.invalid && emailCtrl.touched) {
    <small class="text-danger">Valid corporate email is required.</small>
  }
  <button type="submit" [disabled]="loginForm.invalid" class="btn btn-primary mt-2">Login</button>
</form>`
            }
          ],
          verification: 'Observe how ngModel tracks touched and valid state directly in the template.',
          expectedResult: 'Clear understanding of template-driven mechanics.',
          summary: 'Use Template-Driven forms for simple static inputs, and Reactive Forms for enterprise applications requiring strict typing, dynamic controls, and isolated unit testing.'
        },
        {
          id: 'reactive-forms-formgroup-validation',
          slug: 'reactive-forms-formgroup-validation',
          order: '12.2',
          title: 'Mastering Reactive Forms: FormGroup, FormBuilder & Custom Validation',
          subtitle: 'Building type-safe reactive forms with FormBuilder, handling errors (touched & dirty), custom regex validators, and cross-field password matching in baby steps.',
          chapterId: 'forms-and-validation',
          chapterTitle: '12. Forms & Validation Architecture',
          levelTitle: 'Level 12: Forms & Validation',
          goal: 'Master constructing enterprise reactive forms with nested form groups, custom validator functions, and user-friendly error messages.',
          prerequisites: ['Lesson 12.1 completed.'],
          concept: `### Building Blocks of Reactive Forms:
- **\`FormControl<T>\`**: Tracks the value and validation status of an individual form input.
- **\`FormGroup\`**: Tracks a collection of child \`FormControl\` instances (e.g. an entire user profile form).
- **\`FormBuilder\`**: An injectable helper service that simplifies creating nested form groups with concise syntax.
- **\`Validators\`**: Built-in validation rules (\`required\`, \`email\`, \`minLength\`, \`pattern\`).`,
          diagram: `flowchart TD
    Form["FormGroup (RegistrationForm)"] --> C1["FormControl: username (required, minLength: 3)"]
    Form --> C2["FormControl: email (required, email)"]
    Form --> C3["FormControl: password (required, minLength: 8)"]
    Form --> C4["FormControl: confirmPassword"]
    Form --> Val["Cross-Field Validator: passwordsMatchValidator"]
    
    style Form fill:#cfe2ff,stroke:#084298,color:#084298
    style C1 fill:#d1e7dd,stroke:#198754,color:#0f5132
    style C2 fill:#d1e7dd,stroke:#198754,color:#0f5132
    style C3 fill:#d1e7dd,stroke:#198754,color:#0f5132
    style C4 fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Val fill:#fff3cd,stroke:#ffc107,color:#664d03`,
          steps: [
            {
              title: 'Step 1: Building a Type-Safe Reactive Registration Form',
              explanation: 'Create the FormGroup with FormBuilder and custom validator.',
              command: `import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

// Custom Cross-Field Validator for matching passwords:
export function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirm = control.get('confirmPassword')?.value;
  return password && confirm && password !== confirm ? { passwordMismatch: true } : null;
}

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: \`
    <div class="card p-4 shadow-sm" style="max-width: 480px;">
      <h4 class="fw-bold mb-3">Enterprise Registration</h4>
      
      <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
        <!-- Username Field -->
        <div class="mb-3">
          <label class="form-label">Username</label>
          <input formControlName="username" class="form-control" [class.is-invalid]="isFieldInvalid('username')" />
          @if (isFieldInvalid('username')) {
            <div class="invalid-feedback">Username must be at least 3 characters.</div>
          }
        </div>

        <!-- Email Field -->
        <div class="mb-3">
          <label class="form-label">Work Email</label>
          <input formControlName="email" type="email" class="form-control" [class.is-invalid]="isFieldInvalid('email')" />
          @if (isFieldInvalid('email')) {
            <div class="invalid-feedback">Please enter a valid work email address.</div>
          }
        </div>

        <!-- Password Field -->
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input formControlName="password" type="password" class="form-control" [class.is-invalid]="isFieldInvalid('password')" />
          @if (isFieldInvalid('password')) {
            <div class="invalid-feedback">Password requires minimum 8 characters.</div>
          }
        </div>

        <!-- Confirm Password Field -->
        <div class="mb-3">
          <label class="form-label">Confirm Password</label>
          <input formControlName="confirmPassword" type="password" class="form-control" [class.is-invalid]="registerForm.hasError('passwordMismatch') && registerForm.get('confirmPassword')?.touched" />
          @if (registerForm.hasError('passwordMismatch') && registerForm.get('confirmPassword')?.touched) {
            <div class="text-danger small mt-1">Passwords do not match!</div>
          }
        </div>

        <button type="submit" [disabled]="registerForm.invalid" class="btn btn-primary w-100 py-2">
          Create Account
        </button>
      </form>
    </div>
  \`
})
export class RegisterFormComponent {
  private fb = inject(FormBuilder);

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]]
  }, { validators: [passwordMatchValidator] });

  isFieldInvalid(fieldName: string): boolean {
    const control = this.registerForm.get(fieldName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('[Form Submitted Payload]', this.registerForm.value);
    }
  }
}`
            }
          ],
          verification: 'Type mismatched passwords and verify that the cross-field error activates and disables the submit button.',
          expectedResult: 'Synchronous, robust, testable reactive form handling.',
          summary: 'Use FormBuilder to construct typed FormGroups, apply built-in Validators, and attach custom cross-field validators to secure form submissions.'
        }
      ]
    }
  ]
};

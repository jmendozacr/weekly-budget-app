# AGENTS.md - Coding Guidelines for Weekly Budget App

This file contains guidelines for agentic coding assistants working on the Weekly Budget React application.

## Build, Lint, and Test Commands

### Development Server
```bash
npm run dev
```
Runs the app in development mode on http://localhost:5173 with hot reloading.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Preview the production build locally before deploying.

### Linting
ESLint is configured. To run linting:
```bash
npm run lint
```

### Type Checking
```bash
npx tsc --noEmit
```
Runs TypeScript type checking without emitting files.

### Code Formatting
No dedicated formatter configured. Follow the established code style patterns in the codebase.

## Project Structure

### Current Structure
```
src/
├── component/              # React components
│   ├── BudgetControl.tsx
│   ├── Error.tsx
│   ├── Expense.tsx
│   ├── Expense.module.css
│   ├── ExpensesList.tsx
│   ├── ExpensesList.module.css
│   ├── Form.tsx
│   └── Question.tsx
├── contexts/              # React Context providers
│   └── BudgetContext.tsx
├── hooks/                 # Custom React hooks
│   ├── useBudgetCalculation.ts
│   └── useForm.ts
├── types/                 # TypeScript type definitions
│   ├── css.d.ts
│   └── index.ts
├── App.tsx                # Main app component
├── App.module.css         # App component styles
├── helpers.ts             # Utility functions
├── index.css             # Global styles
└── index.tsx             # Entry point
root/
├── index.html            # HTML entry point (Vite)
├── vite.config.ts        # Vite configuration
├── package.json          # Dependencies (Vite + React)
├── tsconfig.json         # TypeScript configuration
└── public/              # Static assets
```

### React Components

#### Component Declaration
Use function components with hooks. Prefer arrow functions for consistency:
```typescript
const ComponentName: React.FC<Props> = ({ prop1, prop2 }) => {
  // component logic
  return (
    // JSX
  );
};
```

For complex components, function declarations are acceptable:
```typescript
function ComponentName({ prop1, prop2 }: Props) {
  // component logic
  return (
    // JSX
  );
}
```

#### Props Handling
Always use TypeScript types/interfaces for props:
```typescript
interface ExpenseProps {
  expense: Expense;
}

const Expense: React.FC<ExpenseProps> = ({ expense }) => {
  // use expense directly
};
```

#### State Management
Use Context API for global state. Access via custom hooks:
```typescript
const { budget, remaining, expenses } = useBudget();
```

For local component state:
```typescript
const [budget, setBudget] = useState<number>(0);
const [remaining, setRemaining] = useState<number>(0);
const [expenses, setExpenses] = useState<Expense[]>([]);
```

#### Effects
Use `useEffect` with proper dependency arrays:
```typescript
useEffect(() => {
  // effect logic
}, [dependency1, dependency2]);
```

### Imports and Exports

#### Import Order
1. React and React hooks
2. Third-party libraries
3. Local components/hooks/contexts
4. Type definitions

```typescript
import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Question from './component/Question';
import { useBudget } from './contexts/BudgetContext';
import { useForm } from './hooks/useForm';
import { Expense } from '../types';
```

#### Imports Alignment
Align import statements for readability:
```typescript
import React, { useState, useEffect } from 'react';
import Question                       from './component/Question';
import Form                           from './component/Form';
import ExpensesList                   from './component/ExpensesList';
```

#### Exports
Use default exports for components:
```typescript
export default ComponentName;
```

Use named exports for hooks, utilities, and types:
```typescript
export const useBudget = () => { ... };
export const checkBudget = (budget: number, remaining: number): string => { ... };
export interface Expense { ... };
```

### Naming Conventions

#### Components
- PascalCase: `BudgetControl`, `ExpensesList`, `Form`

#### Variables and Functions
- camelCase: `budget`, `setBudget`, `checkBudget`, `addExpense`

#### TypeScript Types
- PascalCase with descriptive names: `Expense`, `BudgetState`, `ExpenseProps`

#### State Variables
- Descriptive names: `budgetQuestion`, `createExpense`
- Follow pattern: `noun` or `adjectiveNoun`

#### Event Handlers
- Prefix with action verb: `addExpense`, `handleSubmit`

### JSX Guidelines

#### Formatting
- Multi-line JSX for readability
- Consistent indentations (2 spaces)
- Self-closing tags when no children

#### Conditional Rendering
Use ternary operators for simple conditions:
```typescript
{
  error ?
    <Error message="Both fields are required" />
    : null
}
```

For complex conditions, use early returns or variables.

#### Event Handlers
Define handlers as arrow functions:
```typescript
const addExpense = (e: React.FormEvent) => {
  e.preventDefault();
  // handler logic
};
```

### TypeScript Best Practices

#### Type Definitions
Always define types for props, state, and data structures:
```typescript
interface Expense {
  id: string;
  expenseName: string;
  expenseAmount: number;
}

interface ExpenseProps {
  expense: Expense;
}
```

#### Generic Hooks
Use generics for reusable hooks:
```typescript
export const useForm = <T extends Record<string, any>>(
  initialValues: T,
  validationFn?: (values: T) => boolean
) => {
  // hook logic
};
```

#### Context Types
Define proper types for Context:
```typescript
const BudgetContext = createContext<BudgetContextType | undefined>(undefined);
```

### CSS and Styling

#### CSS Modules
Use CSS Modules for component-scoped styles:
```typescript
import styles from './Component.module.css';

<div className={styles.container}>
```

#### Global Styles
Use `index.css` for global variables and shared styles:
```css
:root {
  --bg-primary: #fefefe;
  --accent-main: #74b9ff;
}
```

### Utility Functions

#### Location
Place utility functions in `src/helpers.ts`

#### Export Pattern
Use named exports with TypeScript types:
```typescript
export const checkBudget = (budget: number, remaining: number): string => {
  // logic
};
```

### Custom Hooks

#### Creating Custom Hooks
Extract reusable logic into custom hooks:
```typescript
// src/hooks/useForm.ts
export const useForm = <T extends Record<string, any>>(
  initialValues: T,
  validationFn?: (values: T) => boolean
) => {
  const [values, setValues] = useState<T>(initialValues);
  const [error, setError] = useState<boolean>(false);

  // ... return values, handlers, etc.

  return { values, error, handleChange, handleSubmit, reset };
};
```

### Context API

#### Creating Context
Wrap application with providers in `index.tsx`:
```typescript
<BudgetProvider>
  <App />
</BudgetProvider>
```

#### Using Context
Access context via custom hooks:
```typescript
const { budget, remaining, expenses } = useBudget();
```

### Error Handling

#### Form Validation
Use the `useForm` hook's validation function:
```typescript
const validationFn = (values: FormValues) => {
  return values.expenseAmount >= 1 && values.expenseName !== "";
};
```

#### Error Display
Render error components conditionally:
```typescript
{
  error ?
    <Error message="Both fields are required" />
    : null
}
```

### Comments

#### Usage
- Use `//` for single-line comments
- Add comments for complex logic
- Avoid obvious comments

```typescript
// Check if remaining is below 25% of budget
if ((budget / 4) > remaining) {
  // logic
}
```

### Testing Guidelines

#### Test File Structure
Place test files alongside components: `Component.test.tsx`

#### Testing Patterns
- Test component rendering
- Test user interactions
- Test state changes
- Test utility functions
- Test custom hooks

#### Example Test Structure
```typescript
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

describe('Form', () => {
  test('renders form correctly', () => {
    render(<Form />);
    expect(screen.getByText('Add your expenses here')).toBeInTheDocument();
  });

  test('shows error when fields are empty', async () => {
    render(<Form />);
    await userEvent.click(screen.getByRole('button', { name: /add expense/i }));
    expect(screen.getByText('Both fields are required')).toBeInTheDocument();
  });
});
```

### Git Workflow

#### Commit Messages
- Use descriptive, imperative mood: "Add budget validation"
- Reference issue numbers when applicable
- Keep first line under 50 characters

#### Branch Naming
- Feature branches: `feature/add-expense-validation`
- Bug fixes: `fix/budget-calculation-error`

### Performance Considerations

#### Re-renders
- Memoize expensive calculations with `useMemo`
- Use `useCallback` for event handlers passed as props
- Optimize `useEffect` dependencies

#### Bundle Size
- Keep dependencies minimal
- Consider code splitting for large features

### Accessibility
- Use semantic HTML elements
- Provide proper labels for form inputs
- Ensure keyboard navigation works
- Add ARIA attributes when needed

### Security
- Validate all user inputs
- Avoid direct DOM manipulation
- Sanitize data before rendering
- Use HTTPS in production

---

This document should be updated as the project evolves and new patterns emerge.

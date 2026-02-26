# AGENTS.md - Coding Guidelines for Weekly Budget App

This file contains guidelines for agentic coding assistants working on the Weekly Budget React application.

## Build, Lint, and Test Commands

### Development Server
```bash
npm start
```
Runs the app in development mode on http://localhost:3000 with hot reloading.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `build/` directory.

### Testing
```bash
npm test
```
Launches Jest test runner in interactive watch mode.

#### Running Specific Tests
```bash
# Run tests matching a pattern
npm test -- --testNamePattern="test name"

# Run tests in specific file
npm test -- --testPathPattern=path/to/test.js

# Run tests in watch mode for specific file
npm test -- --testPathPattern=path/to/test.js --watchAll=false
```

#### Test Coverage
```bash
npm test -- --coverage
```
Generates coverage reports.

### Linting
ESLint is configured with the default Create React App rules. Lint errors appear in the console during development.

To run linting manually (after ejecting):
```bash
npx eslint src/
```

### Code Formatting
No dedicated formatter configured. Follow the established code style patterns in the codebase.

## Code Style Guidelines

### Project Structure
- Components: Place in `src/component/` directory
- Utilities: Place in `src/helpers.js`
- Main app: `src/App.js`
- Entry point: `src/index.js`
- Styles: `src/index.css`
- Public assets: `public/` directory

### React Components

#### Component Declaration
Use function components with hooks. Prefer arrow functions for consistency:
```javascript
const ComponentName = ({ prop1, prop2 }) => {
  // component logic
  return (
    // JSX
  );
};
```

For complex components, function declarations are acceptable:
```javascript
function ComponentName({ prop1, prop2 }) {
  // component logic
  return (
    // JSX
  );
}
```

#### Props Handling
Destructure props in the function parameter when possible:
```javascript
const BudgetControl = ({ budget, remaining }) => {
  // use budget and remaining directly
};
```

For components receiving many props, destructure inside the function:
```javascript
function Form(props) {
  const { setExpense, setCreateExpense } = props;
  // rest of component
}
```

#### State Management
Use `useState` hook with descriptive variable names:
```javascript
const [budget, setBudget] = useState(0);
const [remaining, setRemaining] = useState(0);
const [expenses, setExpenses] = useState([]);
```

#### Effects
Use `useEffect` with proper dependency arrays:
```javascript
useEffect(() => {
  // effect logic
}, [dependency1, dependency2]);
```

### Imports and Exports

#### Import Order
1. React and React hooks
2. Third-party libraries
3. Local components/utilities

```javascript
import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import Question from './component/Question';
import { checkBudget } from '../helpers';
```

#### Import Alignment
Align import statements for readability (following existing pattern):
```javascript
import React, { useState, useEffect } from 'react';
import Question                       from './component/Question';
import Form                           from './component/Form';
import ExpensesList                   from './component/ExpensesList';
```

#### Exports
Use default exports at the end of the file:
```javascript
export default ComponentName;
```

### Naming Conventions

#### Components
- PascalCase: `BudgetControl`, `ExpensesList`, `Form`

#### Variables and Functions
- camelCase: `budget`, `setBudget`, `checkBudget`, `addExpense`

#### State Variables
- Descriptive names: `budgetQuestion`, `createExpense`
- Follow pattern: `noun` or `adjectiveNoun`

#### Event Handlers
- Prefix with action verb: `addExpense`, `handleSubmit`

### JSX Guidelines

#### Formatting
- Multi-line JSX for readability
- Consistent indentation (2 spaces)
- Self-closing tags when no children

#### Conditional Rendering
Use ternary operators for simple conditions:
```javascript
{
  error ?
    <Error message="Both fields are required" />
    : null
}
```

For complex conditions, use early returns or variables.

#### Event Handlers
Define handlers as arrow functions:
```javascript
const addExpense = e => {
  e.preventDefault();
  // handler logic
};
```

Inline handlers are acceptable for simple cases:
```javascript
onChange={e => setExpenseName(e.target.value)}
```

### JavaScript Best Practices

#### Functions
Use arrow functions for consistency:
```javascript
const checkBudget = (budget, remaining) => {
  // logic
};
```

#### Variable Declarations
Use `const` by default, `let` only when reassignment is needed.

#### Object Creation
Use shorthand property names:
```javascript
const expense = {
  expenseName,
  expenseAmount,
  id: shortid.generate()
};
```

#### Array Operations
Use spread operator for immutable updates:
```javascript
const expensesList = [...expenses, expense];
```

### Error Handling

#### Form Validation
Use state to track errors:
```javascript
const [error, setError] = useState(false);

// In validation logic
if (expenseAmount < 1 || isNaN(expenseAmount) || expenseName === "") {
  setError(true);
  return;
}
```

#### Error Display
Render error components conditionally:
```javascript
{
  error ?
    <Error message="Both fields are required" />
    : null
}
```

### CSS and Styling

#### Class Names
- Use descriptive class names: `main-content`, `field`
- Follow BEM-like conventions where applicable
- Use utility classes from the CSS framework: `u-full-width`, `button-primary`

#### Inline Styles
Avoid inline styles. Use CSS classes instead.

### Utility Functions

#### Location
Place utility functions in `src/helpers.js`

#### Export Pattern
Use named exports:
```javascript
export const checkBudget = (budget, remaining) => {
  // logic
};
```

### Comments

#### Usage
- Use `//` for single-line comments
- Add comments for complex logic
- Avoid obvious comments

```javascript
// Check 25%
if ((budget / 4) > remaining) {
  // logic
}
```

### TypeScript (Future Consideration)
This project currently uses JavaScript. If migrating to TypeScript:
- Use explicit types for props and state
- Define interfaces for complex objects
- Use `FC<Props>` for component types

### Testing Guidelines

#### Test File Structure
Place test files alongside components: `Component.test.js`

#### Testing Patterns
- Test component rendering
- Test user interactions
- Test state changes
- Test utility functions

#### Example Test Structure
```javascript
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from './Form';

test('renders form correctly', () => {
  // test logic
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
- Memoize expensive calculations
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
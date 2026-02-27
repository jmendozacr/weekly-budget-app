export interface Expense {
  id: string;
  expenseName: string;
  expenseAmount: number;
}

export interface BudgetState {
  budget: number;
  remaining: number;
  budgetQuestion: boolean;
  createExpense: boolean;
  expense: Expense;
  expenses: Expense[];
}
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Expense } from '../types';

const BudgetContext = createContext<{
  budget: number;
  setBudget: React.Dispatch<React.SetStateAction<number>>;
  remaining: number;
  setRemaining: React.Dispatch<React.SetStateAction<number>>;
  budgetQuestion: boolean;
  setBudgetQuestion: React.Dispatch<React.SetStateAction<boolean>>;
  createExpense: boolean;
  setCreateExpense: React.Dispatch<React.SetStateAction<boolean>>;
  expense: Expense;
  setExpense: React.Dispatch<React.SetStateAction<Expense>>;
  expenses: Expense[];
} | undefined>(undefined);

export const useBudget = () => {
  const context = useContext(BudgetContext);
  if (!context) {
    throw new Error('useBudget must be used within a BudgetProvider');
  }
  return context;
};

export const BudgetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [budget, setBudget] = useState<number>(0);
  const [remaining, setRemaining] = useState<number>(0);
  const [budgetQuestion, setBudgetQuestion] = useState<boolean>(true);
  const [createExpense, setCreateExpense] = useState<boolean>(false);
  const [expense, setExpense] = useState<Expense>({ id: '', expenseName: '', expenseAmount: 0 });
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    if(createExpense) {
      const expensesList = [...expenses, expense];
      setExpenses(expensesList);

      const budgetRemaining = remaining - expense.expenseAmount;
      setRemaining(budgetRemaining);

      setCreateExpense(false);
    }
  }, [createExpense, expense, expenses, remaining]);

  return (
    <BudgetContext.Provider value={{
      budget, setBudget,
      remaining, setRemaining,
      budgetQuestion, setBudgetQuestion,
      createExpense, setCreateExpense,
      expense, setExpense,
      expenses
    }}>
      {children}
    </BudgetContext.Provider>
  );
};
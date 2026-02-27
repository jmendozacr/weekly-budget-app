import React, { createContext, useContext, useState, useEffect } from 'react';

const BudgetContext = createContext();

export const useBudget = () => useContext(BudgetContext);

export const BudgetProvider = ({ children }) => {
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [budgetQuestion, setBudgetQuestion] = useState(true);
  const [createExpense, setCreateExpense] = useState(false);
  const [expense, setExpense] = useState({});
  const [expenses, setExpenses] = useState([]);

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
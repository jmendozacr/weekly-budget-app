import React, { useState, useEffect } from 'react';
import Question                       from './component/Question';
import Form                           from './component/Form';
import ExpensesList                   from './component/ExpensesList';
import BudgetControl                  from './component/BudgetControl';

function App() {
  const [ budget, setBudget ] = useState(0);
  const [ remaining, setRemaining ] = useState(0)
  const [ budgetQuestion, setBudgetQuestion ] = useState(true);
  const [ createExpense, setCreateExpense ] = useState(false);
  const [ expense, setExpense ] = useState({});
  const [ expenses, setExpenses ] = useState([]);

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
    <div className="App container">
      <header>
        <h1>Weekly Budget</h1>

        <div className="main-content content">
          {
            budgetQuestion ?
            <Question
              setBudget={setBudget}
              setBudgetQuestion={setBudgetQuestion}
              setRemaining={setRemaining}
            />
            : <div className="row">
                <div className="one-half column">
                  <Form
                    setExpense={setExpense}
                    setCreateExpense={setCreateExpense}
                  />
                </div>
                <div className="one-half column">
                  <ExpensesList
                    expenses={expenses}
                  />
                  <BudgetControl
                    budget={budget}
                    remaining={remaining}
                  />
                </div>
              </div>
          }
        </div>
      </header>
    </div>
  );
}

export default App;

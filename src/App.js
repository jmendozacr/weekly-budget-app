import React from 'react';
import Question                       from './component/Question';
import Form                           from './component/Form';
import ExpensesList                   from './component/ExpensesList';
import BudgetControl                  from './component/BudgetControl';
import { useBudget }                  from './contexts/BudgetContext';

function App() {
  const { budgetQuestion } = useBudget();

  return (
    <div className="App">
      <header>
        <h1>Weekly Budget</h1>
      </header>

      <main className="main-content">
        {
          budgetQuestion ?
          <Question />
          : <div className="content">
              <Form />
              <div>
                <ExpensesList />
                <BudgetControl />
              </div>
            </div>
        }
      </main>
    </div>
  );
}

export default App;

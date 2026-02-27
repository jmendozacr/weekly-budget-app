import React from 'react';
import Question                       from './component/Question';
import Form                           from './component/Form';
import ExpensesList                   from './component/ExpensesList';
import BudgetControl                  from './component/BudgetControl';
import { useBudget }                  from './contexts/BudgetContext';
import styles                         from './App.module.css';

function App() {
  const { budgetQuestion } = useBudget();

  return (
    <div className={styles.App}>
      <header>
        <h1>Weekly Budget</h1>
      </header>

      <main className={styles.mainContent}>
        {
          budgetQuestion ?
          <Question />
          : <div className={styles.content}>
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

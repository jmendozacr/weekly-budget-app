import React, { useState, useEffect } from 'react';
import Question                       from './component/Question';
import Form                           from './component/Form';

function App() {

  const [ budget, setBudget ] = useState(0);
  const [ budgetQuestion, setBudgetQuestion ] = useState(true);
  const [ expense, setExpense ] = useState({});
  const [ expenses, setExpenses ] = useState([]);

  useEffect(() => {
    const expensesList = [...expenses, expense];
    setExpenses(expensesList);
  }, []);

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
            />
            : <div className="row">
                <div className="one-half column">
                  <Form
                    setExpense={setExpense}
                  />
                </div>
                <div className="one-half column">
                  list here!
                </div>
              </div>
          }
        </div>
      </header>
    </div>
  );
}

export default App;

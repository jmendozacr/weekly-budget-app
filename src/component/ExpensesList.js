import React   from 'react';
import Expense from './Expense';

function ExpensesList({expenses}) {
    return(
        <div>
            <h2>Expenses</h2>
            <ul className="expenses-incurred">
                {
                    expenses.map(expense => (
                        <Expense
                            key={expense.id}
                            expense={expense}
                        />
                    ))
                }
            </ul>
        </div>
    );
}

export default ExpensesList;

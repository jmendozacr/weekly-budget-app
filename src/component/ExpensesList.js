import React   from 'react';
import Expense from './Expense';
import { useBudget } from '../contexts/BudgetContext';

function ExpensesList() {
    const { expenses } = useBudget();
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

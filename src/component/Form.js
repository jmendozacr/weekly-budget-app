import React, { useState } from 'react';
import Error               from './Error';
import { nanoid }          from 'nanoid';
import { useBudget }       from '../contexts/BudgetContext';

function Form() {
    const { setExpense, setCreateExpense } = useBudget();
    const [ expenseName, setExpenseName ] = useState("");
    const [ expenseAmount, setExpenseAmount ] = useState(0);
    const [ error, setError ] = useState(false);

    const addExpense = e => {
        e.preventDefault();

        if(expenseAmount < 1 || isNaN(expenseAmount) || expenseName === "") {
            setError(true);
            return;
        }

        const expense = {
            expenseName,
            expenseAmount,
            id: nanoid()
        }

        setExpense(expense);
        setCreateExpense(true);
        setError(false);
        setExpenseName("");
        setExpenseAmount("");
    }

    return(
        <form onSubmit={addExpense}>
            <h2>Add your expenses here</h2>
            {
                error ?
                    <Error message="Both fields are required" />
                    : null
            }
            <div className="field">
                <label>Expense name</label>
                <input
                    type="text"
                    placeholder="Ex. Food"
                    onChange={e => setExpenseName(e.target.value)}
                    value={expenseName}
                />
            </div>
            <div className="field">
                <label>Spending amount</label>
                <input
                    type="number"
                    placeholder="Ex. 125"
                    onChange={e => setExpenseAmount(parseInt(e.target.value, 10))}
                    value={expenseAmount}
                />
            </div>
            
            <button type="submit">
                Add expense
            </button>
        </form>

    );
}

export default Form;
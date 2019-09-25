import React, { useState } from 'react';
import Error               from './Error';
import shortid             from 'shortid';

function Form(props) {

    const { setExpense } = props;

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
            id: shortid.generate()
        }

        setExpense(expense);
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
                    className="u-full-width"
                    placeholder="Ex. Food"
                    onChange={e => setExpenseName(e.target.value)}
                    value={expenseName}
                />
            </div>
            <div className="field">
                <label>Spending amount</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ex. 125"
                    onChange={e => setExpenseAmount(parseInt(e.target.value, 10))}
                    value={expenseAmount}
                />
            </div>
            
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Add expense"
            />
        </form>

    );
}

export default Form;
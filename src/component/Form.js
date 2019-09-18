import React, { useState } from 'react';
import Error               from './Error';

function Form(props) {

    const [ expenseName, setExpenseName ] = useState("");
    const [ expenseAmount, setExpenseAmount ] = useState(0);
    const [ error, setError ] = useState(false);

    const addExpense = e => {
        e.preventDefault();

        if(expenseAmount < 1 || isNaN(expenseAmount) || expenseName === "") {
            setError(true);
            return;
        }

        setError(false);
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
                />
            </div>
            <div className="field">
                <label>Spending amount</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ex. 125"
                    onChange={e => setExpenseAmount(parseInt(e.target.value, 10))}
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
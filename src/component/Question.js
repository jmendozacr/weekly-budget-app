import React, { useState } from 'react';
import Error               from './Error';

export default function Question(props) {
    const { setBudget, setBudgetQuestion, setRemaining } = props;
    const [amount, setAmount] = useState(0);
    const [error, setError] = useState(false);

    const addBudget = e => {
        e.preventDefault();

        if(amount < 1 || isNaN(amount)) {
            setError(true);
            return;
        }

        setError(false);
        setBudget(amount);
        setRemaining(amount);
        setBudgetQuestion(false);
    }

    return(
        <>
            <h2>Place your budget</h2>
            {
                error ?
                    <Error message="The budget is incorrect." />
                    : null
            }
            <form onSubmit={addBudget}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Add your budget"
                    onChange={e => setAmount( parseInt(e.target.value, 10) )}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Define Budget"
                />
            </form>
        </>
    );
}
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
                <div className="field">
                    <input
                        type="number"
                        placeholder="Add your budget"
                        onChange={e => setAmount( parseInt(e.target.value, 10) )}
                    />
                </div>
                <button type="submit">
                    Define Budget
                </button>
            </form>
        </>
    );
}
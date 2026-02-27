import React from 'react';
import Error               from './Error';
import { useBudget }       from '../contexts/BudgetContext';
import { useForm }         from '../hooks/useForm';

export default function Question() {
    const { setBudget, setBudgetQuestion, setRemaining } = useBudget();

    const validationFn = (values) => {
        return values.amount >= 1 && !isNaN(values.amount);
    };

    const onSubmit = (values) => {
        setBudget(values.amount);
        setRemaining(values.amount);
        setBudgetQuestion(false);
    };

    const { values, error, handleChange, handleSubmit } = useForm(
        { amount: 0 },
        validationFn
    );

    return(
        <>
            <h2>Place your budget</h2>
            {
                error ?
                    <Error message="The budget is incorrect." />
                    : null
            }
            <form onSubmit={(e) => handleSubmit(e, onSubmit)}>
                <div className="field">
                    <input
                        type="number"
                        name="amount"
                        placeholder="Add your budget"
                        onChange={handleChange}
                        value={values.amount}
                    />
                </div>
                <button type="submit">
                    Define Budget
                </button>
            </form>
        </>
    );
}
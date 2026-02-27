import React from 'react';
import Error               from './Error';
import { nanoid }          from 'nanoid';
import { useBudget }       from '../contexts/BudgetContext';
import { useForm }         from '../hooks/useForm';

function Form() {
    const { setExpense, setCreateExpense } = useBudget();

    const validationFn = (values) => {
        return values.expenseAmount >= 1 && !isNaN(values.expenseAmount) && values.expenseName !== "";
    };

    const onSubmit = (values) => {
        const expense = {
            expenseName: values.expenseName,
            expenseAmount: values.expenseAmount,
            id: nanoid()
        };
        setExpense(expense);
        setCreateExpense(true);
    };

    const { values, error, handleChange, handleSubmit } = useForm(
        { expenseName: "", expenseAmount: 0 },
        validationFn
    );

    return(
        <form onSubmit={(e) => handleSubmit(e, onSubmit)}>
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
                    name="expenseName"
                    placeholder="Ex. Food"
                    onChange={handleChange}
                    value={values.expenseName}
                />
            </div>
            <div className="field">
                <label>Spending amount</label>
                <input
                    type="number"
                    name="expenseAmount"
                    placeholder="Ex. 125"
                    onChange={handleChange}
                    value={values.expenseAmount}
                />
            </div>
            
            <button type="submit">
                Add expense
            </button>
        </form>

    );
}

export default Form;
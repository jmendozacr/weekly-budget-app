import React from 'react';

const Expense = ({expense}) => (
    <li className="expenses-incurred">
        <p>
            {expense.expenseName}
            <span className="expense">$ {expense.expenseAmount}</span>
        </p>
    </li>
)

export default Expense

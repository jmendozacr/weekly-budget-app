import React from 'react';
import styles from './Expense.module.css';

const Expense = ({expense}) => (
    <li>
        <p>
            {expense.expenseName}
            <span className={styles.expense}>$ {expense.expenseAmount}</span>
        </p>
    </li>
)

export default Expense

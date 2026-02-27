import React from 'react';
import styles from './Expense.module.css';
import { Expense as ExpenseType } from '../types';

const Expense: React.FC<{ expense: ExpenseType }> = ({ expense }) => (
    <li>
        <p>
            {expense.expenseName}
            <span className={styles.expense}>$ {expense.expenseAmount}</span>
        </p>
    </li>
)

export default Expense

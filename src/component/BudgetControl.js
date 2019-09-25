import React           from 'react';
import { checkBudget } from '../helpers';

const BudgetControl = ({budget, remaining}) => (
    <>
        <div className="alert alert-primary">
            Budget: $ {budget}
        </div>
        <div className={checkBudget(budget, remaining)}>
            Remaining: $ {remaining}
        </div>
    </>
);

export default BudgetControl;

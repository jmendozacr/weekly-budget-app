import React           from 'react';
import { checkBudget } from '../helpers';
import { useBudget }   from '../contexts/BudgetContext';

const BudgetControl = () => {
    const { budget, remaining } = useBudget();
    return (
        <>
            <div className="alert alert-primary">
                Budget: $ {budget}
            </div>
            <div className={checkBudget(budget, remaining)}>
                Remaining: $ {remaining}
            </div>
        </>
    );
};

export default BudgetControl;

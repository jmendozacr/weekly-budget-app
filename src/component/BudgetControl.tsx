import React           from 'react';
import { useBudget }   from '../contexts/BudgetContext';
import { useBudgetCalculation } from '../hooks/useBudgetCalculation';

const BudgetControl = () => {
    const { budget, remaining } = useBudget();
    const { getAlertClass } = useBudgetCalculation(budget, remaining);

    return (
        <>
            <div className="alert alert-primary">
                Budget: $ {budget}
            </div>
            <div className={getAlertClass()}>
                Remaining: $ {remaining}
            </div>
        </>
    );
};

export default BudgetControl;

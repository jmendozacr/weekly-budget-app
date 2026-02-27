export const checkBudget = (budget: number, remaining: number): string => {
    let classComponent: string;
    // Check 25%
    if( (budget / 4) > remaining) {
         classComponent = "alert alert-danger";
    } else if( (budget / 2) > remaining) {
        classComponent = "alert alert-warning";
    } else {
        classComponent = "alert alert-success";
    }
    return classComponent;
};
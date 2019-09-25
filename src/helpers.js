export const checkBudget = (budget, remaining) => {
    let classComponent;
    // Check 25% 
    if( (budget / 4) > remaining) {
         classComponent = "alert alert-danger";
    } else if( (budget / 2) > remaining) {
        classComponent = "alert alert-warning";
    } else {
        classComponent = "alert alert alert-success";
    }
    return classComponent;
} 
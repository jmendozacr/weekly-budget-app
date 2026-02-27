export const useBudgetCalculation = (budget, remaining) => {
  const getAlertClass = () => {
    if ((budget / 4) > remaining) return "alert alert-danger";
    if ((budget / 2) > remaining) return "alert alert-warning";
    return "alert alert-success";
  };

  return { getAlertClass };
};
import React from 'react';

const BudgetSummary = ({ income, expenses }) => {
  const balance = income - expenses;

  return (
    <div className="budget-summary">
      <h2>Budget Summary</h2>
      <p><strong>Income:</strong> ${income}</p>
      <p><strong>Expenses:</strong> ${expenses}</p>
      <p><strong>Balance:</strong> ${balance}</p>
    </div>
  );
};

export default BudgetSummary;

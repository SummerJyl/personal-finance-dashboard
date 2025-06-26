import React from 'react';
import './BudgetSummary.css';

const BudgetSummary = ({ income = 5000, expenses = 3200 }) => {
  const balance = income - expenses;

  return (
    <div className="budget-summary">
      <h2>Monthly Summary</h2>
      <div className="summary-item">
        <span>Income:</span>
        <span>${income}</span>
      </div>
      <div className="summary-item">
        <span>Expenses:</span>
        <span>${expenses}</span>
      </div>
      <div className="summary-item balance">
        <span>Balance:</span>
        <span>${balance}</span>
      </div>
    </div>
  );
};

export default BudgetSummary;

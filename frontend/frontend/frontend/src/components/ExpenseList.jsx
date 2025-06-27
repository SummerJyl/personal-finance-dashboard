import React from 'react';

const ExpenseList = ({ transactions }) => {
  return (
    <div className="expense-list">
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((t, index) => (
          <li key={index}>
            <strong>{t.description}</strong> - ${t.amount} ({t.type}, {t.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;

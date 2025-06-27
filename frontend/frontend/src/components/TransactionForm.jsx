import React, { useState } from 'react';

const TransactionForm = ({ onAdd }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('Food'); // default category

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      description,
      amount: parseFloat(amount),
      type,
      category,
    });
    setDescription('');
    setAmount('');
    setType('expense');
    setCategory('Food');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Food">Food</option>
        <option value="Rent">Rent</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Transport">Transport</option>
        <option value="Utilities">Utilities</option>
      </select>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;

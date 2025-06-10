import React, { useEffect, useState } from 'react';

function App() {
  // State for transactions and form inputs
  console.log('App component mounted');
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense'); // default to expense
  const [category, setCategory] = useState('');

  // Fetch transactions from backend on component mount
useEffect(() => {
  console.log('Fetching transactions...');
  fetch('http://localhost:5050/api/transactions')
    .then(res => {
      console.log('Response received:', res);
      return res.json();
    })
    .then(data => {
      console.log('Fetched data:', data);
      setTransactions(data);
    })
    .catch(err => {
      console.error('Error fetching transactions:', err);
    });
}, []);

  // Fetch transactions from backend on component mount
  useEffect(() => {
  fetch('http://localhost:5050/api/transactions')
    .then(res => res.json())
    .then(data => setTransactions(data))
    .catch(err => console.error('Error fetching transactions:', err));
}, []);

  // Handle form submit to add new transaction
  const handleAddTransaction = (e) => {
    e.preventDefault();

    // Simple validation
    if (!description || !amount || !category) {
      alert('Please fill out all fields');
      return;
    }

    const newTransaction = {
      description,
      amount: parseFloat(amount),
      type,
      category,
    };

    // POST to backend
    fetch('http://localhost:5050/api/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTransaction),
    })
      .then(res => res.json())
      .then(data => {
        console.log('Transaction added successfully:', data);
        setTransactions(prev => [...prev, data]);
        setDescription('');
        setAmount('');
        setType('expense');
        setCategory('');
  })
      .catch(err => {
        console.error('Error adding transaction:', err);
        alert('Failed to add transaction');
  });
};

  return (
    <div style={{ padding: '20px', maxWidth: 600, margin: 'auto' }}>
      <h1>Personal Finance Dashboard</h1>

      <h2>Add Transaction</h2>
      <form onSubmit={handleAddTransaction} style={{ marginBottom: '2rem' }}>
        <div>
          <label>Description: </label><br />
          <input
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Amount: </label><br />
          <input
            type="number"
            step="0.01"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Type: </label><br />
          <select value={type} onChange={e => setType(e.target.value)}>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>
        <div>
          <label>Category: </label><br />
          <input
            type="text"
            value={category}
            onChange={e => setCategory(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>Add Transaction</button>
      </form>

      <h2>Transactions</h2>
      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        <table border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(tx => (
              <tr key={tx.id}>
                <td>{tx.description}</td>
                <td>{tx.amount.toFixed(2)}</td>
                <td>{tx.type}</td>
                <td>{tx.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;

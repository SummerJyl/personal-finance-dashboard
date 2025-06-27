const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Sample in-memory "database" of transactions
let transactions = [
  { id: 1, description: 'Salary', amount: 1000, type: 'income', category: 'Job' },
  { id: 2, description: 'Groceries', amount: 100, type: 'expense', category: 'Food' }
];

// GET all transactions
app.get('/api/transactions', (req, res) => {
  console.log('GET /api/transactions hit');
  res.json(transactions);
});

// POST add a new transaction
app.post('/api/transactions', (req, res) => {
  const newTransaction = req.body;
  console.log('Received POST:', req.body);
  console.log('Received new transaction:', newTransaction); 
  newTransaction.id = transactions.length + 1;
  transactions.push(newTransaction);
  res.status(201).json(newTransaction);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

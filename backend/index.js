const express = require('express');
const app = express();
app.use(express.json());

let nextId = 1;
app.post('/api/invoices', (req, res) => {
  const { customer, amount } = req.body;
  const invoice = {
    id: nextId++,
    customer,
    amount,
    created: new Date().toISOString()
  };
  // In a real application you would store the invoice in a database
  res.json(invoice);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});

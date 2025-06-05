const express = require('express');
const app = express();
app.use(express.json());

let nextId = 1;
const invoices = [];

app.get('/api/invoices', (req, res) => {
  res.json(invoices);
});

app.post('/api/invoices', (req, res) => {
  const { customer, items = [], dueDate } = req.body;

  const total = items.reduce((sum, item) => sum + Number(item.price || 0), 0);

  const invoice = {
    id: nextId++,
    customer,
    items,
    total,
    dueDate,
    created: new Date().toISOString(),
  };
  invoices.push(invoice);
  res.json(invoice);
});

const port = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Backend listening on port ${port}`);
  });
}

module.exports = app;

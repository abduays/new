const request = require('supertest');
const app = require('./index');

describe('POST /api/invoices', () => {
  it('creates an invoice and returns it with an id', async () => {
    const res = await request(app)
      .post('/api/invoices')
      .send({ customer: 'Alice', amount: 100 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body.customer).toBe('Alice');
    expect(res.body.amount).toBe(100);
  });
});

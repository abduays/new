const request = require('supertest');
const app = require('./index');

describe('invoice API', () => {
  it('creates an invoice and returns it with an id and total', async () => {
    const res = await request(app)
      .post('/api/invoices')
      .send({
        customer: 'Alice',
        items: [{ description: 'Work', price: 100 }],
        dueDate: '2025-07-01',
      });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body.total).toBe(100);
    expect(res.body.items.length).toBe(1);
  });

  it('lists created invoices', async () => {
    const res = await request(app).get('/api/invoices');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

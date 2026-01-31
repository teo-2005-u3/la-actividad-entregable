const request = require('supertest');
const app = require('../src/app');

describe('Pruebas API Documentos', () => {
  test('GET /health debe devolver 200', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
  });

  test('POST /documentos debe crear uno nuevo', async () => {
    const res = await request(app)
      .post('/documentos')
      .send({ id: '1', titulo: 'Manual Calidad', estado: 'activo' });
    expect(res.statusCode).toBe(201);
  });

  test('POST /documentos debe fallar si no hay titulo', async () => {
    const res = await request(app).post('/documentos').send({ id: '2' });
    expect(res.statusCode).toBe(400);
  });
});

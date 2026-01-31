const express = require('express');
const logger = require('./logger');
const app = express();
app.use(express.json());

let documentos = []; // Base de datos en memoria (SQLite opcional)

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', service: 'api-documentos', timestamp: new Date() });
});

app.post('/documentos', (req, res) => {
  const { id, titulo, estado } = req.body;
  if (!id || !titulo) {
    logger.warn('Intento de creación fallido: faltan campos');
    return res.status(400).json({ error: 'id y titulo son obligatorios' });
  }
  documentos.push({ id, titulo, estado: estado || 'borrador' });
  logger.info('Documento creado exitosamente', { id });
  res.status(201).json({ id, titulo, estado });
});

app.get('/documentos', (req, res) => {
  const { titulo } = req.query;
  let docs = documentos;
  if (titulo) docs = documentos.filter(d => d.titulo.includes(titulo));
  res.json(docs);
});

app.put('/documentos/:id', (req, res) => {
  const { id } = req.params;
  const { estado } = req.body;
  const doc = documentos.find(d => d.id === id);
  if (!doc) return res.status(404).json({ error: 'No encontrado' });
  doc.estado = estado;
  res.json(doc);
});

module.exports = app;

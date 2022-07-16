import express from 'express';
import serverless from 'serverless-http';

const app = express();
const v1 = express.Router();

v1.get('/contacts', async (_req, res) => {
  const contacts = await import('../data/contacts');
  res.json(contacts.default);
});

app.use('/api/v1', v1);

export const handler = serverless(app);

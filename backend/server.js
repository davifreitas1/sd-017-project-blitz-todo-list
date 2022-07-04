require('dotenv').config();
const app = require('./api');

const port = process.env.API_PORT || 3000;

app.get('/', (_req, res, _next) => {
  return res.status(200).json({ message: 'estou funcionando' });
});

app.listen(port, () => console.log('ouvindo porta', port));
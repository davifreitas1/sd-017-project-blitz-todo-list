require('dotenv').config();
const cors = require('cors');
const app = require('./api');
const userController = require('./controllers/userController');
const taskController = require('./controllers/taskController');

const port = process.env.API_PORT || 3000;

app.use(cors());

app.get('/', (_req, res, _next) => {
  return res.status(200).json({ message: 'estou funcionando' });
});

app.get('/users', userController.getAll);
app.get('/tasks', taskController.getAll);

app.listen(port, () => console.log('ouvindo porta', port));
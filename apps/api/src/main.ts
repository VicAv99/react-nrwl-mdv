import * as express from 'express';
import * as cors from 'cors';
import { Message } from '@task-manager/api-interfaces';
import { TasksController } from './app/tasks/tasks.controller';

const app = express();
const greeting: Message = { message: 'Welcome to api!' };

app.use(cors());

app.get('/api', (req, res) => {
  res.send(greeting);
});
TasksController(app);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);

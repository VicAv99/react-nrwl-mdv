import * as express from 'express';
import * as cors from 'cors';
import { Message } from '@tn/api-interfaces';

const app = express();
const greeting: Message = { message: 'Welcome to api!' };

app.use(cors());

app.get('/api', (req, res) => {
  res.send(greeting);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);

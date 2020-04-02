import { Express, Request, Response } from 'express';

import { Task } from '@task-manager/api-interfaces';

let TASKS: Task[] = [
  {id: 1, name: 'First Task', description: 'This is the first task.'},
  {id: 2, name: 'Second Task', description: 'This is the second task.'},
  {id: 3, name: 'Third Task', description: 'This is the third task.'}
];

export const TasksController = (app: Express) => {
  app.get('/api/tasks', (req: Request, res: Response) => {
    res.send(TASKS);
  });
  app.get('/api/tasks/:id', (req: Request, res: Response) => {
    const task = TASKS.find((task) => task.id === +req.params.id);
    res.send(task);
  });
  app.post('/api/tasks', (req: Request, res: Response) => {
    TASKS = [...TASKS, {id: Math.round(Math.random() * 10 + 1), ...(req.body as unknown as Task)}];
    res.send(TASKS);
  });
  app.delete('/api/tasks/:id', (req: Request, res: Response) => {
    TASKS = TASKS.filter((task: Task) => task.id !== +req.params.id);
    res.send(TASKS);
  })
}

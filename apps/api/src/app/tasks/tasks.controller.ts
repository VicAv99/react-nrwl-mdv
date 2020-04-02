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
  app.delete('/api/tasks/:id', (req: Request, res: Response) => {
    console.log('DEL', +req.params.id)
    TASKS = TASKS.filter((task: Task) => task.id !== +req.params.id);
    res.send(TASKS);
  })
}

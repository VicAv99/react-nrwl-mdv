import { Express, Request, Response } from 'express';

import { Task } from '@task-manager/api-interfaces';

const TASKS: Task[] = [
  {id: 1, name: 'First Task', description: 'This is the first task.'}
];

export const TasksController = (app: Express) => {
  app.get('/api/tasks', (req: Request, res: Response) => {
    res.send({data: TASKS});
  });
  app.get('/api/tasks/:id', (req: Request, res: Response) => {
    const task = TASKS.find((task) => task.id === +req.params.id);
    res.send({data: task});
  });
}

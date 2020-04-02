import React, { useState } from 'react';

import styled from 'styled-components';

import { useTasksApi } from '@task-manager/core-data';
import { TasksList } from './tasks-list/tasks-list';
import { TasksDetails } from './tasks-details/tasks-details';
import { Task } from '@task-manager/api-interfaces';
import { TasksService } from '@task-manager/core-data';

/* eslint-disable-next-line */
export interface TasksProps {}

const TasksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 16px;
`;

const deleteTask = (fetchTasks: Function) => {
  return (id: string | number) => {
    TasksService.delete(id);
    fetchTasks();
  };
}

export const TasksComponent = (props: TasksProps) => {
  const [ tasks, , , fetchTasks ] = useTasksApi('all');
  const [selectedTask, setSelectedTask] = useState<Task>({} as Task);

  const onDelete = deleteTask(fetchTasks);

  return (
    <TasksContainer>
      <TasksList tasks={tasks}
        selectTask={setSelectedTask}
        deleteTask={onDelete} />
      <TasksDetails task={selectedTask}
        cancel={setSelectedTask} />
    </TasksContainer>
  );
};

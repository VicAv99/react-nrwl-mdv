import React, { useState, Dispatch, SetStateAction } from 'react';

import styled from 'styled-components';
import { useForm, Control } from 'react-hook-form';

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

const selectTask = (setSelectedTask: Dispatch<SetStateAction<Task>>, setValue: (arg0: unknown, arg1: unknown) => unknown) => {
  return (currentTask: Task) => {
    setSelectedTask(currentTask);
    setValue('name', currentTask.name);
    setValue('description', currentTask.description);
  };
}

const deleteTask = (fetchTasks: Function) => {
  return (id: string | number) => {
    TasksService.delete(id);
    fetchTasks();
  };
}

const resetTask = (setSelectedTask: Dispatch<SetStateAction<Task>>, reset) => {
  return () => {
    setSelectedTask(null);
    reset();
  };
}

export const TasksComponent = (props: TasksProps) => {
  const [ tasks, , , fetchTasks ] = useTasksApi('all');
  const { handleSubmit, reset, control, setValue } = useForm();
  const [selectedTask, setSelectedTask] = useState<Task>({} as Task);

  const onFetch = () => {
    fetchTasks();
    setSelectedTask(null);
    reset();
  }
  const onSelect = selectTask(setSelectedTask, setValue)
  const onDelete = deleteTask(onFetch);
  const onReset = resetTask(setSelectedTask, reset)

  return (
    <TasksContainer>
      <TasksList tasks={tasks}
        selectTask={onSelect}
        deleteTask={onDelete} />
      <TasksDetails task={selectedTask}
        control={control}
        cancel={onReset} />
    </TasksContainer>
  );
};

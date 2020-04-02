import React, { useState, Dispatch, SetStateAction } from 'react';

import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import { useTasksApi } from '@task-manager/core-data';
import { TasksList } from './tasks-list/tasks-list';
import { TasksDetails } from './tasks-details/tasks-details';
import { Task } from '@task-manager/api-interfaces';
import { TasksService } from '@task-manager/core-data';

const TasksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 16px;
`;

export const TasksComponent = () => {
  const [ tasks, , , fetchTasks ] = useTasksApi('all');
  const { handleSubmit, reset, control, setValue } = useForm();
  const [selectedTask, setSelectedTask] = useState<Task>({} as Task);

  const onFetch = () => {
    fetchTasks();
    setSelectedTask({} as Task);
    reset();
  }
  const onSelect = selectTask(setSelectedTask, setValue);
  const onSave   = saveTask(onFetch);
  const onDelete = deleteTask(fetchTasks);
  const onReset  = resetTask(setSelectedTask, reset);

  return (
    <TasksContainer>
      <TasksList tasks={tasks}
        selectTask={onSelect}
        deleteTask={onDelete} />
      <TasksDetails task={selectedTask}
        control={control}
        save={handleSubmit(onSave)}
        cancel={onReset} />
    </TasksContainer>
  );
};

function selectTask (setSelectedTask: Dispatch<SetStateAction<Task>>, setValue: Function) {
  return (currentTask: Task) => {
    setSelectedTask(currentTask);
    setValue('name', currentTask.name);
    setValue('description', currentTask.description);
  };
}

function saveTask(fetchTasks) {
  return (task: Task) => {
    if (task?.id) {
      TasksService.update(task);
      return;
    }
    TasksService.create(task);
    fetchTasks();
  };
}

function deleteTask(fetchTasks) {
  return (id: string | number) => {
    TasksService.delete(id);
    fetchTasks();
  };
}

function resetTask(setSelectedTask: Dispatch<SetStateAction<Task>>, reset) {
  return () => {
    setSelectedTask(null);
    reset();
  };
}

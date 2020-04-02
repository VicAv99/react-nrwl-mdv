import React from 'react';

import styled from 'styled-components';
import TasksList from './tasks-list/tasks-list';
import TasksDetails from './tasks-details/tasks-details';

/* eslint-disable-next-line */
export interface TasksProps {}

const TasksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 16px;
`;

export const TasksComponent = (props: TasksProps) => {
  return (
    <TasksContainer>
      <TasksList />
      <TasksDetails />
    </TasksContainer>
  );
};

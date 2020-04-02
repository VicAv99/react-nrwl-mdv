import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TasksProps {}

const TasksContainer = styled.div`
`;

export const TasksComponent = (props: TasksProps) => {
  return (
    <TasksContainer>
      <h1>Welcome to tasks component!</h1>
    </TasksContainer>
  );
};

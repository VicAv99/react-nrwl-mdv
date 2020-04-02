import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TasksListProps {}

const StyledTasksList = styled.div`
  color: pink;
`;

export const TasksList = (props: TasksListProps) => {
  return (
    <StyledTasksList>
      <h1>Welcome to tasks-list component!</h1>
    </StyledTasksList>
  );
};

export default TasksList;

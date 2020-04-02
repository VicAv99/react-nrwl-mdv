import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TasksDetailsProps {}

const StyledTasksDetails = styled.div`
  color: pink;
`;

export const TasksDetails = (props: TasksDetailsProps) => {
  return (
    <StyledTasksDetails>
      <h1>Welcome to tasks-details component!</h1>
    </StyledTasksDetails>
  );
};

export default TasksDetails;

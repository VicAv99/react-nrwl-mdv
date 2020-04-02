import React from 'react';

import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

import { theme } from '../theme';
import { TaskRoutes } from './router';
import { UiToolbar } from '@task-manager/ui-toolbar';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const ToolbarSpacer = styled.div`
  margin-top: 50px;
`;

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <UiToolbar title="Task Manager" />
        <ToolbarSpacer>
          <TaskRoutes />
        </ToolbarSpacer>
      </MainContainer>
    </ThemeProvider>
  );
};

export default App;

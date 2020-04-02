import React, { useEffect, useState } from 'react';
import { Message } from '@task-manager/api-interfaces';
import { UiToolbar } from '@task-manager/ui-toolbar';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';

export const App = () => {
  const [ m, setMessage ] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then(r => r.json())
      .then(setMessage);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <UiToolbar title="Task Manager" />
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to tasks!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png"
        />
      </div>
      <div>s{m.message}</div>
    </ThemeProvider>
  );
};

export default App;

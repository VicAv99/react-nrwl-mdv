import React from 'react';
import { render } from '@testing-library/react';

import TasksList from './tasks-list';

describe(' TasksList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TasksList />);
    expect(baseElement).toBeTruthy();
  });
});

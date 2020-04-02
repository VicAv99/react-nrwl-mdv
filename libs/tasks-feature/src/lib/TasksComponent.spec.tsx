import React from 'react';
import { render } from '@testing-library/react';

import {TasksComponent} from './TasksComponent';

describe(' TasksComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TasksComponent />);
    expect(baseElement).toBeTruthy();
  });
});

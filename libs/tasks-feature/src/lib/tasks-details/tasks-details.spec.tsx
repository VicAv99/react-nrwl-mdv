import React from 'react';
import { render } from '@testing-library/react';

import { TasksDetails } from './tasks-details';

describe(' TasksDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TasksDetails />);
    expect(baseElement).toBeTruthy();
  });
});

import React from 'react';
import { render } from '@testing-library/react';

import { UiToolbar } from './ui-toolbar';

describe(' UiToolbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiToolbar title="" />);
    expect(baseElement).toBeTruthy();
  });
});

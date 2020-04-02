import React from 'react';
import { render } from '@testing-library/react';

import UiLibrariesUiToolbar from './ui-libraries-ui-toolbar';

describe(' UiLibrariesUiToolbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiLibrariesUiToolbar />);
    expect(baseElement).toBeTruthy();
  });
});

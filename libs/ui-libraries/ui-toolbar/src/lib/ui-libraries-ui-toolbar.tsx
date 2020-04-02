import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiLibrariesUiToolbarProps {}

const StyledUiLibrariesUiToolbar = styled.div`
  color: pink;
`;

export const UiLibrariesUiToolbar = (props: UiLibrariesUiToolbarProps) => {
  return (
    <StyledUiLibrariesUiToolbar>
      <h1>Welcome to ui-libraries-ui-toolbar component!</h1>
    </StyledUiLibrariesUiToolbar>
  );
};

export default UiLibrariesUiToolbar;

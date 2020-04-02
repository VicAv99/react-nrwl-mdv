import React from 'react';
import PropTypes from 'prop-types';

// import styled from 'styled-components';
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles
} from '@material-ui/core';

export interface UiToolbarProps {
  title: string;
}

const useStyles = makeStyles({
  toolbar: {
    minHeight: '50px'
  }
});

export const UiToolbar = ({ title }: UiToolbarProps) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" noWrap>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

UiToolbar.propTypes = {
  title: PropTypes.string
}

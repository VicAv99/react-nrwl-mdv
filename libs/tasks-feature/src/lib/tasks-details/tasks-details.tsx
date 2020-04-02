import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  CardHeader,
  TextField
} from '@material-ui/core';
import { Task } from '@task-manager/api-interfaces';

export interface TasksDetailsProps {
  task?: Task;
  cancel?: Function;
}

const TasksDetailsForm = styled.form`
`;

const useStyles = makeStyles({
  card: {
    width: '100%',
    marginLeft: '8px'
  },
  textField: {
    width: '100%'
  },
  cardActions: {
    display: 'flex',
    flexDirection: 'row-reverse',
    marginRight: '3px'
  }
});

export const TasksDetails = ({ task, cancel }: TasksDetailsProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader title={task?.id ? `Editing ${task.name}...` : 'Create a Task'} />
      <CardContent>
        <TasksDetailsForm>
          <TextField className={classes.textField} id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField className={classes.textField} id="outlined-basic" label="Outlined" variant="outlined" />
        </TasksDetailsForm>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" type="submit" color="primary">
          {task?.id ? 'Update' : 'Submit'}
        </Button>
        <Button size="small" type="reset" color="primary" onClick={() => cancel()}>
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
};

TasksDetails.propTypes = {
  task: PropTypes.object,
  cancel: PropTypes.func
}

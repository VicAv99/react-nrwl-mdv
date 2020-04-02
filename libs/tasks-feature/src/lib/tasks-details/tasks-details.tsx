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
import { Controller, Control } from 'react-hook-form';

import { Task } from '@task-manager/api-interfaces';

export interface TasksDetailsProps {
  control: Control<unknown>;
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

export const TasksDetails = ({ control, task, cancel }: TasksDetailsProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader title={task?.id ? `Editing ${task.name}...` : 'Create a Task'} />
      <CardContent>
        <TasksDetailsForm>
          <Controller
            as={<TextField />}
            className={classes.textField}
            control={control}
            rules={{required: true}}
            label="Task Name"
            variant="outlined"
            placeholder="Type a Task Name..."
            name="name"
            defaultValue="" />
          <Controller
            as={<TextField />}
            className={classes.textField}
            control={control}
            rules={{required: false}}
            label="Task Description"
            variant="outlined"
            placeholder="Type a Task Description..."
            name="description"
            defaultValue="" />
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
  control: PropTypes.object.isRequired,
  task: PropTypes.object,
  cancel: PropTypes.func
}

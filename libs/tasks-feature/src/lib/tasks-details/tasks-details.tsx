import React, { FormEvent } from 'react';
import PropTypes from 'prop-types';

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
  save?: (event: FormEvent<HTMLFormElement>) => void;
}

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

export const TasksDetails = ({ control, task, cancel, save }: TasksDetailsProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader title={task?.id ? `Editing ${task.name}...` : 'Create a Task'} />
      <form onSubmit={save}>
        <CardContent>
          <Controller
            as={<TextField />}
            className={classes.textField}
            control={control}
            rules={{ required: true }}
            label="Task Name"
            variant="outlined"
            placeholder="Type a Task Name..."
            name="name"
            defaultValue="" />
          <Controller
            as={<TextField />}
            className={classes.textField}
            control={control}
            rules={{ required: false }}
            label="Task Description"
            variant="outlined"
            placeholder="Type a Task Description..."
            name="description"
            defaultValue="" />
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" type="submit" color="primary">
            {task?.id ? 'Update' : 'Submit'}
          </Button>
          <Button size="small" type="reset" color="primary" onClick={() => cancel()}>
            Cancel
        </Button>
        </CardActions>
      </form>
    </Card>
  );
};

TasksDetails.propTypes = {
  control: PropTypes.object.isRequired,
  task: PropTypes.object,
  cancel: PropTypes.func,
  save: PropTypes.func
}

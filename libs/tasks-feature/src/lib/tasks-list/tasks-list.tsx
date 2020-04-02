import React from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  makeStyles,
  IconButton
} from '@material-ui/core';
import { ClearTwoTone } from '@material-ui/icons';

import { Task } from '@task-manager/api-interfaces';

export interface TasksListProps {
  tasks: Task[];
  selectTask?: Function;
  deleteTask?: Function;
}

const useStyles = makeStyles({
  card: {
    width: '100%',
    marginRight: '8px'
  }
});

export const TasksList = ({ tasks, selectTask, deleteTask }: TasksListProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <List>
          {
            tasks.map((task) => (
              <ListItem key={task.id} button onClick={() => selectTask(task)} >
                <ListItemText primary={task.name} secondary={task.description} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="comments" onClick={(e) => deleteTask(task.id, e) }>
                    <ClearTwoTone />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))
          }
        </List>
      </CardContent>
    </Card>
  );
};

TasksList.propTypes = {
  tasks: PropTypes.array.isRequired,
  selectTask: PropTypes.func,
  deleteTask: PropTypes.func
}

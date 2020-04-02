import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { TasksComponent } from '@task-manager/tasks-feature';

export const TaskRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/tasks" />
        </Route>
        <Route path="/tasks">
          <TasksComponent />
        </Route>
        <Route exact path="*">
          <Redirect to="/tasks" />
        </Route>
      </Switch>
    </Router>
  );
}

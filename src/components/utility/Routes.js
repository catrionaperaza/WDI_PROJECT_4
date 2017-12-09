import React             from 'react';
import { Route, Switch } from 'react-router-dom';

import Login    from '../auth/Login';
import Register from '../auth/Register';
import Homepage from '../statics/Homepage';

import DinnersIndex from '../dinners/DinnersIndex';
import DinnersShow from '../dinners/DinnersShow';
import DinnersNew from '../dinners/DinnersNew';
import DinnersEdit from '../dinners/DinnersEdit';

import UsersIndex from
  '../users/UsersIndex';
import UsersShow from
  '../users/UsersShow';
import UsersEdit from
  '../users/UsersEdit';

import ProtectedRoute from './ProtectedRoute';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/dinners" component={DinnersIndex} />
      <Route exact path="/users" component={UsersIndex} />
      <ProtectedRoute exact path="/dinners/new" component={DinnersNew} />
      <ProtectedRoute exact path="/dinners/:id/edit" component={DinnersEdit} />
      <ProtectedRoute exact path="/users/:id/edit" component={UsersEdit} />
      <Route path="/dinners/:id" component={DinnersShow} />
      <Route path="/users/:id" component={UsersShow} />
    </Switch>
  );
};

export default Routes;

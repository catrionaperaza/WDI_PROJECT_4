import React             from 'react';
import { Route, Switch } from 'react-router-dom';

import Login    from '../auth/Login';
import Register from '../auth/Register';

import DinnersIndex from '../dinners/DinnersIndex';
import DinnersShow from '../dinners/DinnersShow';
import DinnersNew from '../dinners/DinnersNew';
import DinnersEdit from '../dinners/DinnersEdit';

import ProtectedRoute from './ProtectedRoute';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <ProtectedRoute exact path="/" component={DinnersIndex} />
      <ProtectedRoute exact path="/dinners/new" component={DinnersNew} />
      <ProtectedRoute exact path="/dinners/:id/edit" component={DinnersEdit} />
      <Route path="/dinners/:id" component={DinnersShow} />
    </Switch>
  );
};

export default Routes;

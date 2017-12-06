import React             from 'react';
import { Route, Switch } from 'react-router-dom';

import Login    from '../auth/Login';
import Register from '../auth/Register';

import DinnersIndex from '../dinners/DinnersIndex';
import DinnersShow from '../dinners/DinnersShow';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route exact path="/" component={DinnersIndex} />
      <Route path="/dinners/:id" component={DinnersShow} />
    </Switch>
  );
};

export default Routes;

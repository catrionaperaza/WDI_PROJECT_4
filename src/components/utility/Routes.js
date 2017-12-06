import React             from 'react';
import { Route, Switch } from 'react-router-dom';

import Login    from '../auth/Login';
import Register from '../auth/Register';

import DinnersIndex from '../dinners/DinnersIndex';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dinners" component={DinnersIndex} />
    </Switch>
  );
};

export default Routes;

import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Account from './components/Account/Account';
import AccountDetail from './components/AccountDetail/AccountDetail';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Account} />
        <Route path="/account/:id" component={AccountDetail} />
        <Redirect from="/index.html" to="/" />
        <Redirect from="/index.html" to="/" exact />
      </Switch>
    </Router>
  );
}

export default AppRouter;

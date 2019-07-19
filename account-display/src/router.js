import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Account from './components/Account/Account'
import AccountDetail from './components/AccountDetail/AccountDetail'

function AppRouter() {
    return (<Router>
        <Route path="/" exact component={Account} />
        <Route path="/account/:id" component={AccountDetail}></Route>
    </Router>)
}

export default AppRouter

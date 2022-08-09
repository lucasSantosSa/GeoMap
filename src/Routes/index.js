import React from 'react';
import { Switch} from 'react-router-dom';
import Route from './Route';

import Home from '../Pages/home';
import Registration from '../Pages/Register';
import ForgotPass from '../Pages/ForgotPass';
import History from '../Pages/History';
import MyProject from '../Pages/MyProject';

function Routes() {
   return (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/registration" component={Registration}/>
        <Route path="/forgot-pass" component={ForgotPass}/>
        <Route path="/history" component={History} isPrivate/>
        <Route path="/myproject" component={MyProject} />
    </Switch>     
    )
}

export default Routes
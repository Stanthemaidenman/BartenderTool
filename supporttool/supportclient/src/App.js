import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { StartPage } from './pages/StartPage';
import { V1 } from './pages/v1/V1';
import { V2 } from './pages/v2/V2';
import { V3 } from './pages/v3/V3';
import { V4 } from './pages/v4/V4';
import { V5 } from './pages/v5/V5';
import { V6 } from './pages/v6/V6';



class App extends Component {
    render() {
        return (
                <Switch>
                    <Route exact path='/' component={StartPage} />
                    <Route exact path='/V1/:size' component={V1} />
                    <Route exact path='/V2/:size' component={V2} />
                    <Route exact path='/V3/:size' component={V3} />
                    <Route exact path='/V4/:size' component={V4} />
                    <Route exact path='/V5/:size' component={V5} />
                    <Route exact path='/V6/:size' component={V6} />
                </Switch>
        );
    }

}
export default App;

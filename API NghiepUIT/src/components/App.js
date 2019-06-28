import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './Menu/Menu';
import routes from '../route-config';

class App extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Menu />

                    <div className="container">
                        <div className="row">
                            {this.showContentMenus(routes)}
                        </div>
                    </div>
                </div>
            </Router>
        );
    }

    showContentMenus = (routes) => {
        let result = null;

        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return <Route path={route.path} exact={route.exact} component={route.main} key={index} />
            })
        }

        return <Switch>{result}</Switch>
    }
}

export default App;

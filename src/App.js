import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu/menu'
import routes from './routes';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Router>
                <div >
                    <Menu />

                    <div className="container">

                        <div className="row">
                            <Switch>
                                {this.showContentMenus(routes)}
                            </Switch>
                        </div>

                    </div>

                </div>
            </Router>

        );
    }

    showContentMenus = (routes) => {
        var result = null;

        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return <Route key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main} />

            })
        }

        return result
    }

}

export default App;

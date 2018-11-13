import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Rout = function(){
    return(<Router>
        <Switch>
            <Route Link to="/" exact component={Home} />
            <Route Link to="/schedule" component={App} />
        </Switch>
    </Router>);
};

ReactDOM.render(<Rout />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

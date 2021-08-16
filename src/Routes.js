import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Solutions from './pages/Solutions';
import OurTeam from './pages/OurTeam';
import Press from './pages/Press';
import OurMission from './pages/OurMission';
import "./index.css"

export default class Routes extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Router>
                <div className='background'>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/solutions" component={Solutions} />
                        <Route path="/team" component={OurTeam} />
                        <Route path="/mission" component={OurMission} />
                        <Route path="/press" component={Press} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom";

import Profile from "./components/profile/profile.component";
import Home from "./components/home.component";
import SignUp from './components/signUp.component';

function App() {
    return(
        <Router>
            <Route path="/" component={Home}/>
            <Route path="/signUp" component={SignUp}/>
            <Route path="/profile" component={Profile}/>
        </Router>
    );
}

export default App;
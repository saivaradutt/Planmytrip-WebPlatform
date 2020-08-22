import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { connect } from 'react-redux';
import { signOut } from '../src/store/actions/authActions';

import Login from "./components/login";
import SignUp from "./components/Signup";
import Home from "./components/Home"
const App = (props) => {
    const { auth } = props;
    const links = auth.uid ? <Link className="navbar-brand" to={"/"} onClick={props.signOut}>Log Out</Link> : null;
    return (<Router>
            <div className="App">
                <div className="container">
                    <Link className="navbar-brand" to={"/sign-in"}>PlanMyTrip</Link>
                    { links }
                </div>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Switch>
                            <Route exact path='/' component={Login}/>
                            <Route path="/sign-in" component={Login}/>
                            <Route path="/sign-up" component={SignUp}/>
                            <Route path="/home" component={Home}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

const mapStateToProps = (state) =>{
    return{
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { connect } from 'react-redux';
import { signOut } from '../src/store/actions/authActions';
import Login from "./components/login";
import SignUp from "./components/Signup";
import Home from "./components/Home"
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Hotels from "./components/Hotels";
import Confirmation from "./components/Confirmation";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import Header from "./components/Header";


const App = (props) => {
   // const { auth } = props;
    //const links = auth.uid ? <Link className="navbar-brand" to={"/"} onClick={props.signOut}>Log Out</Link> : null;
    return (<Router>
            <div className="App">
                { /* <div className="container">
                    <Link className="navbar-brand" to={"/sign-in"}>PlanMyTrip</Link>
                    { links }
                </div>*/}
                <div >
                    <div >
                        <Switch>
                            <Route exact path='/' component={Login}/>
                            <Route path="/sign-in" component={Login}/>
                            <Route path="/sign-up" component={SignUp}/>
                            <Route exact path="/home" component={Home}/>
                            <Route path="/about-us" component={AboutUs}/>
                            <Route path="/hotels" component={Hotels}/>
                            <Route path="/Contact" component={Contact}/>
                            <Route path="/Confirmation" component={Confirmation}/>
                            <Route path="/Checkout" component={Checkout}/>
                            <Route path="/Footer" component={Footer}/>
                            <Route path="/Header" component={Header}/>
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
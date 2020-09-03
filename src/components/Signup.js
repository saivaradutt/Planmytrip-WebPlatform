import React from "react";
import {Link} from "react-router-dom";
import {signUp} from '../store/actions/authActions'
import { connect } from 'react-redux'
//import authReducer from "../store/reducers/authReducer";

 class Signup extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email:"",
        password:"",
        firstnameError: "",
        lastnameError:"",
        emailError:"",
        passwordError: ""
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    validate = () => {
        let firstnameError = "";
        let lastnameError = "";
        let emailError = "";
        let passwordError = "";

        if(!this.state.firstName)
        {
            firstnameError="please enter the first name"
        }
        if(!this.state.lastName)
        {
            lastnameError="please enter the last name"
        }

        if (!this.state.email) {
            emailError = "please enter the email";
        }

        if (!this.state.email.includes("@")) {
            emailError = "please include @";
        }
        if (!this.state.password) {
            passwordError = "please enter password";
        }

        if (firstnameError|| lastnameError||emailError || passwordError) {
            this.setState({ firstnameError,lastnameError,emailError, passwordError });
            return false;
        }

        return true;
    };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();

        //this.insertData();
        if (isValid) {
            //console.log(this.state);
            this.props.signUp(this.state)

            // clear form
            this.setState(this.state);
        }
    };
    routeChange=()=>{
        this.props.history.push('/sign-in');
        console.log('redirect')
    }

    render() {
        const { authError } = this.props;
        return (<div>
                <div>
                    <body style = {{backgroundImage:"url(https://static.vecteezy.com/system/resources/previews/000/538/894/non_2x/abstract-black-hexagon-pattern-on-yellow-neon-background-technology-style-honeycomb-vector.jpg)"}}>

                    <img src="asseats/img/Signlogo.png" alt="" style={{borderRadius : 50, margin:"auto", padding : 50, marginLeft : "38%", height : 250, width :300}} />
                    <div style={{marginLeft:"32%"}}>
                        <form className="form-contact contact_form" onSubmit={this.handleSubmit}>
                            <h3 style={{color:"white",marginLeft:"20%"}}>Sign Up</h3>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input
                                        name="firstName"
                                        type="text"
                                        className="form-control"
                                        placeholder="First name"
                                        value={this.state.firstName}
                                        onChange={this.handleChange}
                                    />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.firstnameError}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input
                                        name="lastName"
                                        type="text"
                                        className="form-control"
                                        placeholder="Last name"
                                        value={this.state.lastName}
                                        onChange={this.handleChange}
                                    />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.lastnameError}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input
                                        name="email"
                                        className="form-control"
                                        placeholder="Email"
                                        required
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.emailError}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Password"
                                        required
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.passwordError}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="more_place_btn text-center">
                                        <button className="boxed-btn4 " type="submit"onClick={this.routeChange}>Submit</button>
                                    </div>
                                </div>
                            </div>

                            {/*<button type="submit" className= "btn btn-primary btn-block" onClick={this.routeChange}>Submit</button>*/}
                            <div>
                                { authError ? <p>{authError}</p> : null}
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="more_place_btn text-center">
                                        <p>
                                           Already Registered!!!  <Link className="nav-link" to={"/sign-in"}>Sign-In</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                    </body>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
      signUp: (newUser) => dispatch(signUp(newUser))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
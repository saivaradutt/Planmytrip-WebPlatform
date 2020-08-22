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
        this.props.history.push('/home');
        console.log('redirect')
    }


    /*insertData(event){
        const fName = (event.target.firstName);
        const lName = (event.target.lastName);
        const email = (event.target.email);
        const password = event.target.password;


        const url = "http://localhost:3001/login/" + fName+lName+email+password;

        console.log(url);

        fetch(url,{
            method: 'POST'
        }).then(alert('Added : ' + fName))

    }
*/
    render() {
        const { authError } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>
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
                <div className="form-group">
                    <input
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.emailError}
                    </div>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.passwordError}
                    </div>
                </div>
                <button type="submit" className= "btn btn-primary btn-block" onClick={this.routeChange}>Submit</button>
                {authError ? <p>{ authError } </p> : null}
                <p className="forgot-password text-right">
                    Already registered!!!  <Link className="nav-link" to={"/sign-in"}>Sign In</Link>
                </p>

            </form>
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
import React from "react";
import {Link} from "react-router-dom";
import { connect } from 'react-redux'
import {signIn} from '../store/actions/authActions'

class login extends React.Component {
    state = {
        email: '',
        password: ''
    };

    handleChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    };

    validate = () => {
        let emailError = "";
        let passwordError = "";

        if (!this.state.email) {
            emailError = "please enter email";
        }

        if (!this.state.email.includes("@")) {
            emailError = "please include @";
        }
        if (!this.state.password) {
            passwordError = "please enter password";
        }

        if (emailError || passwordError) {
            this.setState({ emailError, passwordError });
            return false;
        }

        return true;
    };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        
        if (isValid) {
            console.log(this.state);
            this.props.signIn(this.state);
            // clear form
            this.setState(this.state);
        }
    };

    routeChange=()=>{
        this.props.history.push('/home');
        console.log('redirect')
    }

    render() {
        const { authError } = this.props
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign In</h3>
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
                <button type="submit" className= "btn btn-primary btn-block" onClick={this.routeChange}>Submit</button>
                <div>
                    { authError ? <p>{authError}</p> : null}
                </div>
                <p className="forgot-password text-right">
                    Not Registered!!!  <Link className="nav-link" to={"/sign-up"}>Register</Link>
                </p>

            </form>
        );
    }
}


const mapStateToProps = (state) =>{
    return {
        authError: state.auth.authError
    }
}


const mapDispatchToProps = (dispatch) =>{
    return {
         signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(login)
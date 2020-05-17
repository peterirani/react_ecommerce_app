import React, { Component } from 'react';

import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password : ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({email : "", password : ""})
    }

    handleChange = (e) => {
        e.preventDefault();
        const {value , name } = e.target;
        this.setState({[name] : value})
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sing in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        required={true}
                        handleChange={this.handleChange}
                        label="email"
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}
                        label="passowrd"
                    />


                    <input type="submit" value="Submit Form" />
                </form>
            </div>
        )}
}

export default SignIn;
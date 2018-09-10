import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: ""
    };
  }

  onChange = e => {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.userSignInRequest(this.state);
  };

  render() {
    return (
      <div className="FormCenter">
        <form className="FormFields" onSubmit={this.onSubmit}>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">
              E-Mail Adress
            </label>
            <input
              value={this.state.user}
              onChange={this.onChange}
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter your email"
              name="user"
              required
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              value={this.state.password}
              onChange={this.onChange}
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
              required
            />
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign In</button>
            {"   "}
            <Link to="/" className="FormField__Link" href="#">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

SignInForm.PropTypes = {
  userSignInRequest: PropTypes.func.isRequired
};

export default SignInForm;

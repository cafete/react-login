import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
      email: "",
      hasAgreed: false
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
    this.props.userSignUpRequest(this.state);
  };

  render() {
    return (
      <div className="FormCenter">
        <form className="FormFields" onSubmit={this.onSubmit}>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              value={this.state.user}
              onChange={this.onChange}
              id="name"
              className="FormField__Input"
              placeholder="Enter your full name"
              name="user"
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              onChange={this.onChange}
              value={this.state.password}
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">
              E-Mail Adress
            </label>
            <input
              type="email"
              id="email"
              onChange={this.onChange}
              value={this.state.email}
              className="FormField__Input"
              placeholder="Enter your email"
              name="email"
            />
          </div>

          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input
                onChange={this.onChange}
                checked={this.state.hasAgreed}
                className="FormField__Checkbox"
                type="checkbox"
                name="hasAgreed"
              />{" "}
              I agree all statements in
              <a className="FormField__TermsLink" href="# ">
                terms of service
              </a>
            </label>
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button>
            {"   "}
            <Link exact to="/sign-in" className="FormField__Link" href="#">
              I'm already a member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

SignUpForm.PropTypes = {
  userSignUpRequest: PropTypes.func.isRequired
};

export default SignUpForm;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import "./App.scss";
import { connect } from "react-redux";
import { userSignUpRequest } from "./actions/SignUpActions";
import { userSignInRequest } from "./actions/SignInActions";
import PropTypes from "prop-types";

class App extends Component {
  render() {
    const { userSignUpRequest } = this.props;
    const { userSignInRequest } = this.props;

    return (
      <Router>
        <div className="App">
          <div className="App__Aside" />
          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink
                activeClassName="PageSwitcher__Item--Active"
                to="/sign-in"
                href="#"
                className="PageSwitcher__Item"
              >
                Sign In
              </NavLink>
              <NavLink
                activeClassName="PageSwitcher__Item--Active"
                exact
                to="/"
                href="#"
                className="PageSwitcher__Item"
              >
                Sign Up
              </NavLink>
            </div>

            <div className="FormTitle">
              <NavLink
                activeClassName="FormTitle__Link--Active"
                to="/sign-in"
                className="FormTitle__Link"
                href="#"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
                href="#"
              >
                Sign Up
              </NavLink>
            </div>

            <Route
              exact
              path="/"
              render={props => (
                <SignUpForm {...props} userSignUpRequest={userSignUpRequest} />
              )}
            />

            <Route
              path="/sign-in"
              render={props => (
                <SignInForm {...props} userSignInRequest={userSignInRequest} />
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

App.PropTypes = {
  userSignUpRequest: PropTypes.func.isRequired,
  userSignInRequest: PropTypes.func.isRequired
};

export default connect(
  null,
  { userSignUpRequest, userSignInRequest }
)(App);

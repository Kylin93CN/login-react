import React, { Component } from 'react';
import SignupForm from './SignupForm';

export default class SignupPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <SignupForm />
        </div>
        <div className="col-md-3"></div>
      </div>
    )
  }
};

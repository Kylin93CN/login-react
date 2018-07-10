import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm';
import { userSignupRequest } from '../../actions/signupAction'

class SignupPage extends Component {
  static propTypes = {
    userSignupRequest: PropTypes.func.isRequired
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          {/* 跳转方式1 
          <SignupForm history={ this.props.history } userSignupRequest={this.props.userSignupRequest}/>*/}
          {/* 跳转方式2 */}
          <SignupForm userSignupRequest={this.props.userSignupRequest}/>
        </div>
        <div className="col-md-3"></div>
      </div>
    )
  }
};

export default connect(null,{userSignupRequest})(SignupPage);

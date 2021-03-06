import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm';
import { userSignupRequest, isUserExists } from '../../actions/signupAction';
import { addFlashMessage } from '../../actions/flashMessage';

class SignupPage extends Component {
  static propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    isUserExists: PropTypes.func.isRequired,
  }
  render() {
    const { userSignupRequest, addFlashMessage, isUserExists } = this.props;
    return (
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          {/* 跳转方式1 
          <SignupForm history={ this.props.history } userSignupRequest={this.props.userSignupRequest}/>*/}
          {/* 跳转方式2 */}
          <SignupForm isUserExists={isUserExists} addFlashMessage={addFlashMessage} userSignupRequest={userSignupRequest}/>
        </div>
        <div className="col-md-3"></div>
      </div>
    )
  }
};

export default connect(null,{ userSignupRequest, addFlashMessage, isUserExists })(SignupPage);

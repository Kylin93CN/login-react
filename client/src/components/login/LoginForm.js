import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import validateInput from '../../utils/validation/login';

import  { login } from '../../actions/loginAction';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false,
    }
  }
  static propTypes = {
    login: PropTypes.func.isRequired
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }
  // 文本change事件
  _onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // 有效性验证
  _isValid = () => {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  // 登录按钮事件
  _submit = (e) => {
    e.preventDefault();
    if (this._isValid()) {
      // 调整state并发送登录请求
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then(
        (res) => this.context.router.history.push('/'),
        (err) => {
          this.setState({
            errors: err.response.data.errors,
            isLoading: false
          });
        }
      );
    }
  }

  render() {
    const { identifier, password, errors, isLoading } = this.state;
    return (
      <form onSubmit={this._submit}>
        <h1>Login</h1>
        {errors.form && <div className="alert alert-danger">{errors.form}</div>}
        <div className="form-group">
          <label className="control-label">Username / Email</label>
          <input
            type="text"
            name="identifier"
            value={identifier}
            onChange={this._onChange}
            className={ classnames("form-control", { 'is-invalid': errors.identifier }) }
          />
          {errors.identifier && <span className="form-text text-muted">{errors.identifier}</span>}
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this._onChange}
            className={ classnames("form-control", { 'is-invalid': errors.password }) }
          />
          {errors.password && <span className="form-text text-muted">{errors.password}</span>}
        </div>
        <div className="form-group">
          <button disabled={ isLoading } className="btn btn-primary btn-lg">
            Login
          </button>
        </div>
      </form>
    )
  }
};

export default connect(null, { login })(LoginForm);

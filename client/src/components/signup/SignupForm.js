import React, { Component } from 'react'; //rccc
import PropTypes from 'prop-types';
import classnames from 'classnames';
// import { withRouter } from 'react-router-dom'; /* 跳转方式2 */

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      username:'',
      email:'',
      password:'',
      passwordConfirm:'',
      errors: {},
      isLoading: false,
      isValid: false,
    };
  }

  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    isUserExists: PropTypes.func.isRequired,
  }

  // 文本change事件
  _onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // 检测用户名、邮箱是否重复
  _checkUserExists = (e) => {
    const field = e.target.name;
    const val = e.target.value;
    if (val !== '') {
      this.props.isUserExists(val).then(res => {
        let errors = this.state.errors;
        let invalid;
        if (res.data.user) {
          errors[field] = "There is user with such " + field;
          invalid = true;
        } else {
          errors[field] = '';
          invalid = false
        }

        this.setState({ errors, invalid });
      });
    }
  }

  // post提交事件
  _submit = (e) => {
    e.preventDefault();
    this.setState({
      errors: {},
      isLoading: true,
    });
    
    // 发送请求
    this.props.userSignupRequest(this.state).then(
      () => {
        // this.props.history.push('/'); //跳转方式1/2
        this.props.addFlashMessage({
          type: 'success',
          text: 'You signed up successfully.'
        });
        this.context.router.history.push('/'); //跳转方式3
      },
      (response) => {
        this.setState({
          errors: response.response.data,
          isLoading: false,
        });
      }
    );
  }
  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this._submit}>
        <h1>Welcome to our community!</h1>
        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this._onChange}
            onBlur={ this._checkUserExists }
            className={ classnames("form-control", { 'is-invalid': errors.username }) }
          />
          {errors.username && <span className="form-text text-muted">{errors.username}</span>}
        </div>
        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this._onChange}
            onBlur={ this._checkUserExists }
            className={ classnames("form-control", { 'is-invalid': errors.email }) }
          />
          {errors.email && <span className="form-text text-muted">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this._onChange}
            className={ classnames("form-control", { 'is-invalid': errors.password }) }
          />
          {errors.password && <span className="form-text text-muted">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label className="control-label">Password Confirmation</label>
          <input
            type="password"
            name="passwordConfirm"
            value={this.state.passwordConfirm}
            onChange={this._onChange}
            className={ classnames("form-control", { 'is-invalid': errors.passwordConfirm }) }
          />
          {errors.passwordConfirm && <span className="form-text text-muted">{errors.passwordConfirm}</span>}
        </div>
        <div className="form-group">
          <button disabled={ this.state.isLoading || this.state.isValid } className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    )
  }
};

// export default withRouter(SignupForm);

export default SignupForm;
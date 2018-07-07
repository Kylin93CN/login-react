import React, { Component } from 'react'; //rccc

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      username:'',
      email:'',
      password:'',
      passwordConfirm:'',
    };
  }
  _onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  _submit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
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
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this._onChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this._onChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="control-label">Password Confirmation</label>
          <input
            type="password"
            name="passwordConfirm"
            value={this.state.passwordConfirm}
            onChange={this._onChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    )
  }
};

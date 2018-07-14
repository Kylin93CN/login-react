import React, { Component } from 'react'; // rccc
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logout } from '../actions/authAction';

class NavigationBar extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.object.isRequired
  }

  // 注销事件
  _logout = (e) => {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" onClick={this._logout}>Logout</a>
        </li>
      </ul>
    );
    
    const guestLinks = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to='/signup'>Sign Up</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to='/login'>Login</Link>
        </li>
      </ul>
    );
    return (
      <div>
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">Redux Login</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample06" aria-controls="navbarsExample06" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample02">
              { isAuthenticated ? userLinks : guestLinks }
            </div>
          </div>
        </nav>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, {logout})(NavigationBar);

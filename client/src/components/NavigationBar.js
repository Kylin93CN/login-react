import React, { Component } from 'react'; // rccc
import { Link } from 'react-router-dom';

export default class NavigationBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">Redux Login</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample06" aria-controls="navbarsExample06" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample06">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="signup">Signup</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
};

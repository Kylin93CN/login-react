import React, { Component } from 'react';
import AddSomething from './AddSomething';

export default class AddSomethingPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <AddSomething />
        </div>
        <div className="col-sm-3"></div>
      </div>
    )
  }
};

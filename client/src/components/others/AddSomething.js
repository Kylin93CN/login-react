import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addSomething } from '../../actions/addSometingAction';

class AddSomething extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      errors: {},
      isLoading: false,
    }
  }

  static propTypes = {
    addSomething: PropTypes.func.isRequired,
  }

  _submit = (e) => {
    e.preventDefault();
    this.props.addSomething(this.state);
  }

  _change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this._submit}>
        <h1>Add Something</h1>
        
        <div className="form-group">
          <label className="control-label">Title</label>
          <input
            value={this.state.title}
            type="text"
            name="title"
            onChange={this._change}
            className={ classnames('form-control', { 'is-invalid': this.state.errors.title })}
          />
        </div>
        <div className="form-group">
          <button disabled={ this.state.isLoading } className="btn btn-primary btn-lg">
           Add
           </button>
        </div>
      </form>
    )
  }
};

export default connect(null, { addSomething })(AddSomething);

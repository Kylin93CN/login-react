import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class FlashMessage extends Component {
  static propTypes = {
    deleteFlashMessage: PropTypes.func.isRequired,
    message: PropTypes.object.isRequired
  };

  _onClick = () => {
    this.props.deleteFlashMessage(this.props.message.id);
  }
  
  render() {
    const { type, text } = this.props.message;
    return (
      <div className={classnames(
        'alert',{
          'alert-success' : type === 'success',
          'alert-danger' : type === 'danger'
        }
      )}>
        <button onClick={this._onClick} className="close"><span>&times;</span></button>
        { text }
      </div>
    )
  }
};

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }
  
  handlerSubmit(e) {
    if (e.key === 'Enter') {
      this.props.addTodo(e.target.value);
      e.target.value = '';
    }
  }
  render() {
    return <input onKeyPress={this.handlerSubmit} />;
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);

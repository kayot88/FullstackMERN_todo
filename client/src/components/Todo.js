import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, completeTodo } from '../actions';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handlerDelete = this.handlerDelete.bind(this);
    this.handlerComplete = this.handlerComplete.bind(this);
  }
  handlerDelete() {
    this.props.deleteTodo(this.props.todo._id);
  }
  handlerComplete() {
    this.props.completeTodo(this.props.todo._id);
  }
  render() {
    const { todo } = this.props;
    return (
      <li className={todo.isCompleted ? 'checked' : ''}>
        <span onClick={this.handlerComplete}>{todo.text}</span>
        <span className="close" onClick={this.handlerDelete}>
          &#10799;
        </span>
      </li>
    );
  }
}

export default connect(
  null,
  { deleteTodo, completeTodo }
)(Todo);

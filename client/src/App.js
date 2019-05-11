import React, { Component } from 'react';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import ListTodos from './components/ListTodos';
import { Provider } from 'react-redux';
import store from './store';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="wrapperHead">
          <Header />
          <AddTodo />
        </div>
        <ListTodos />
      </Provider>
    );
  }
}

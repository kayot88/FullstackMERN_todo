import axios from 'axios';
import {
  ADD_TODO,
  DELETE_TODO,
  GET_TODOS,
  LOAD_TODOS,
  COMPLETE_TODO
} from './constants';

axios.defaults.baseURL = 'http://localhost:4000/api';

export const getTodos = () => {
  return dispatch => {
    dispatch({ type: LOAD_TODOS });
    axios
      .get('/todos')
      .then(res => {
        dispatch({
          type: GET_TODOS,
          payload: res.data
        });
      })
      .catch(err => {
        return console.log(err);
      });
  };
};

export const addTodo = text => {
  return dispatch => {
    axios
      .post('/todos', { text: text })
      .then(res => {
        return dispatch({
          type: ADD_TODO,
          payload: res.data
        });
      })
      .catch(err => {
        return console.log(err);
      });
  };
};

export const deleteTodo = todoId => {
  return dispatch => {
    axios
      .post(`/todos/${todoId}`)
      .then(res => {
        return dispatch({
          type: DELETE_TODO,
          payload: res.data.todoId
        });
      })
      .catch(err => {
        return console.log(err);
      });
  };
};

export const completeTodo = todoId => {
  return dispatch => {
    axios
      .post(`todos/${todoId}/complete`)
      .then(res => {
        return dispatch({
          type: COMPLETE_TODO,
          payload: res.data.todoId
        });
      })
      .catch(err => {
        return console.log(err);
      });
  };
};



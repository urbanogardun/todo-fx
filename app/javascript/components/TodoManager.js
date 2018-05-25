import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'
import UserHeader from './UserHeader'
import Logout from './Logout'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

class TodoManager extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUserId: null,
      todos: []
    }
    this.updateCurrentUserId = this.updateCurrentUserId.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  updateCurrentUserId(id) {
    this.setState({
      currentUserId: id
    })
  }

  componentWillMount() {
    let that = this
    axios.get('/users/check_user', {
    })
      .then(function (response) {
        if (!response.data.email) {
          that.props.history.push('/')
        } else {
          that.updateCurrentUserId(response.data.id);

          axios.get(`/todos/${response.data.id}`)
            .then(function (response) {
              that.setState({
                todos: response.data
              })
            })
            .catch(function (error) {
              console.log(error);
            })

        }
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  addTodo(todo) {
    axios.post('/todos', todo)
    .then((response) => {

      if (response.data.id) {
        this.setState({
          todos: [response.data, ...this.state.todos]
        })
      }

    })
    .catch((error) => {
      console.log(error);
    })
  }

  editTodo(todoId, todo) {

    let currentUserId = this.state.currentUserId
    let that = this;

    axios.patch('/todos', todo)
    .then((response) => {

      // Update DOM with new todo item changes
      let newTodos = this.state.todos.map((t) => {return t.id === todo.id ? todo : t})

      this.setState({
        todos: [...newTodos]
      })

    })
    .catch((error) => {
      console.log(error);
    })
  }

  deleteTodo(todoId) {
    console.log('Delete todo of id: ' + todoId)

    axios.delete(`/todos/${todoId}`)
    .then((response) => {

      // Remove deleted todo item from DOM
      let newTodos = this.state.todos.filter((t) => {return t.id !== todoId});

      this.setState({
        todos: [...newTodos]
      })

    })
    .catch((error) => {
      console.log(error);
    })
  }

  markTodoCompleted(todoId) {
    
    axios.patch(`/todos/${todoId}/complete`)
    .then((response) => {
      console.log('Mark todo: ' + todoId + ' completed.');
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <React.Fragment>
        <UserHeader />
        <AddTodo currentUserId={this.state.currentUserId} addTodo={this.addTodo} />
        <TodoList currentUserId={this.state.currentUserId} todos={this.state.todos} editTodo={this.editTodo} deleteTodo={this.deleteTodo} markTodoCompleted={this.markTodoCompleted} />
        <Logout {...this.props} />
      </React.Fragment>
    );
  }
}

export default TodoManager
import React from "react"
import PropTypes from "prop-types"
import Logout from './Logout'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import axios from 'axios'

class TodoManager extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUserId: null,
      todos: []
    }
    this.updateCurrentUserId = this.updateCurrentUserId.bind(this);
    this.addTodo = this.addTodo.bind(this);
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
    this.setState({
      todos: [todo, ...this.state.todos]
    })
    axios.post('/todos', todo)
    .then((response) => {
      console.log(response);
      console.log('Successfully created a todo item!');
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <React.Fragment>
        <h2>TodoManager</h2>
        <AddTodo currentUserId={this.state.currentUserId} addTodo={this.addTodo} />
        <TodoList currentUserId={this.state.currentUserId} todos={this.state.todos} />
        <Logout {...this.props} />
      </React.Fragment>
    );
  }
}

export default TodoManager
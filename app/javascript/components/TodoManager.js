import React from "react"
import PropTypes from "prop-types"
import Logout from './Logout'
import TodoList from './TodoList'
import axios from 'axios'

class TodoManager extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUserId: null,
      todos: []
    }
    this.updateCurrentUserId = this.updateCurrentUserId.bind(this);
  }

  updateCurrentUserId(id) {
    this.setState({
      currentUserId: id
    })
  }

  componentWillMount() {
    let that = this
    axios.get('/users/check_user',{
    })
    .then(function(response){
      if (!response.data.email) {
        that.props.history.push('/')
      } else {
        that.updateCurrentUserId(response.data.id);

        axios.get(`/todos/${response.data.id}`)
        .then(function(response) {
            that.setState({
              todos: response.data
            })
        })
        .catch(function(error) {
            console.log(error);
        })

      }
    })
    .catch(function(error){
      console.log(error);
    })
  }

    render () {
      return (
        <React.Fragment>
          <h2>TodoManager</h2>
          <TodoList currentUserId={this.state.currentUserId} todos={this.state.todos} />
          <Logout {...this.props} />
        </React.Fragment>
      );
    }
  }
  
  export default TodoManager
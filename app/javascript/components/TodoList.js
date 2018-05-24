import React from "react"
import PropTypes from "prop-types"
import EditTodo from './EditTodo'
import axios from 'axios'

class TodoList extends React.Component {
    render () {
        const listItems = this.props.todos.map((todo) =>
            <React.Fragment key={todo.id}>
              <EditTodo todo={todo} editTodo={this.props.editTodo} />
            </React.Fragment>
        );
      return (
        <React.Fragment>
          <h2>TodoList</h2>
          <ul>{listItems}</ul>
        </React.Fragment>
      );
    }
  }
  
  export default TodoList
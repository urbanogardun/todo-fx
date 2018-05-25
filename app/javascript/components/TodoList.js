import React from "react"
import PropTypes from "prop-types"
import EditTodo from './EditTodo'
import DeleteTodo from './DeleteTodo'
import CompleteTodo from './CompleteTodo'
import axios from 'axios'

class TodoList extends React.Component {
    render () {
        const listItems = this.props.todos.map((todo) =>
          <tr key={todo.id} id={`table-row-${todo.id}`}>
            <th>{todo.priority}</th>
            <td>{todo.item}</td>
            <td>{new Date(todo.due).toLocaleString()}</td>
            <td><CompleteTodo todoId={todo.id} markTodoCompleted={this.props.markTodoCompleted} /></td>
            <td><EditTodo todo={todo} editTodo={this.props.editTodo} /></td>
          </tr>
        );
      return (
        <React.Fragment>

          <div className="container">
            <table className="table is-fullwidth is-hoverable">
              <thead>
                <tr>
                  <th>
                    <abbr title="Items with lower number are considered higher priority">Priority</abbr>
                  </th>
                  <th>Item</th>
                  <th>
                    <abbr title="By what date should an item be completed">Due</abbr>
                  </th>
                  <th/>
                  <th/>
                </tr>
              </thead>
              <tbody>
                {listItems}
              </tbody>
            </table>
          </div>

        </React.Fragment>
      );
    }
  }
  
  export default TodoList
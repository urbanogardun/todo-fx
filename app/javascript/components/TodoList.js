import React from "react"
import PropTypes from "prop-types"
import EditTodo from './EditTodo'
import DeleteTodo from './DeleteTodo'
import CompleteTodo from './CompleteTodo'
import axios from 'axios'

class TodoList extends React.Component {
    render () {
        let itemStyle = {
          position: 'relative',
          top: '5px'
        }
        const listItems = this.props.todos.map((todo) =>
          <tr key={todo.id} id={`table-row-${todo.id}`}>
            <th style={itemStyle}>{todo.priority}</th>
            <td style={itemStyle}>{todo.item}</td>
            <td style={itemStyle}>{new Date(todo.due).toLocaleString()}</td>
            <td><CompleteTodo todoId={todo.id} markTodoCompleted={this.props.markTodoCompleted} /></td>
            <td><DeleteTodo todoId={todo.id} deleteTodo={this.props.deleteTodo} /></td>
            <td><EditTodo todo={todo} editTodo={this.props.editTodo} /></td>
          </tr>
        );
      if (this.props.todos.length > 0) {
        return (
          <div className="container">
            <table className="table is-fullwidth is-hoverable">
              <thead>
                <tr>
                  <th>
                    <abbr title="Items with lower number are considered higher priority">Priority</abbr>
                  </th>
                  <th>Item</th>
                  <th>
                    Due
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
        );
      } else {
        return null
      }
    }
  }
  
  export default TodoList
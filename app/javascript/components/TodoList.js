import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'

class TodoList extends React.Component {
    render () {
        console.log(this.props);
        const listItems = this.props.todos.map((number) =>
            <li key={number.id}>{number.item}</li>
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
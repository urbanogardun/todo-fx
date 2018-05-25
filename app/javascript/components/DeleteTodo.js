import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'

class DeleteTodo extends React.Component {

    constructor(props) {
        super(props);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    deleteTodo(e) {
        e.preventDefault();
        this.props.deleteTodo(this.props.todoId);
    }

    render() {
        return (
            <i
                onClick={this.deleteTodo}
                className="fas fa-times fa-sm todolist__complete-todo-i"
                style={
                    {
                        cursor: 'pointer',
                        position: 'relative',
                        top: '5px'
                    }}
            />
        );
    }
}

export default DeleteTodo
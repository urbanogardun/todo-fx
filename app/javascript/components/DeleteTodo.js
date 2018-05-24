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
            <React.Fragment>
                <h2>deleteTodo</h2>
                <button onClick={this.deleteTodo}>Delete Todo</button>
            </React.Fragment>
        );
    }
}

export default DeleteTodo
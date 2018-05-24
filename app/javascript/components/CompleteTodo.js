import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'

class CompleteTodo extends React.Component {

    constructor(props) {
        super(props);
        this.markTodoCompleted = this.markTodoCompleted.bind(this);
    }

    markTodoCompleted(e) {
        e.preventDefault();

        this.props.markTodoCompleted(this.props.todoId);
    }

    render() {
        return (
            <React.Fragment>
                <h2>markTodoCompleted</h2>
                <button onClick={this.markTodoCompleted}>Complete Todo</button>
            </React.Fragment>
        );
    }
}

export default CompleteTodo
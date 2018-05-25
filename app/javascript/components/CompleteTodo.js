import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'
import * as $ from 'jquery'

class CompleteTodo extends React.Component {

    constructor(props) {
        super(props);
        this.markTodoCompleted = this.markTodoCompleted.bind(this);
    }

    markTodoCompleted(e) {
        e.preventDefault();
        $(`#table-row-${this.props.todoId}`).toggleClass('is-selected')
        this.props.markTodoCompleted(this.props.todoId);
    }

    render() {
        return (
            <i 
                onClick={this.markTodoCompleted} 
                className="fas fa-check fa-sm todolist__complete-todo-i"
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

export default CompleteTodo
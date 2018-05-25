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
        console.log($(e).parent());
        $(`#table-row-${this.props.todoId}`).toggleClass('is-selected')
        this.props.markTodoCompleted(this.props.todoId);
    }

    render() {
        return (
            <button className="button" onClick={this.markTodoCompleted}>Complete</button>
        );
    }
}

export default CompleteTodo
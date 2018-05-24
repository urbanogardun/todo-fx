import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'
import * as $ from 'jquery'

class EditTodo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showEditForm: false
        }
        this.editTodo = this.editTodo.bind(this);
        this.saveTodo = this.saveTodo.bind(this);
    }

    editTodo(e, todoId) {
        e.preventDefault();
        this.setState({
            showEditForm: this.state.showEditForm ? false : true
        })
    }

    saveTodo(e) {
        let todoId = this.props.todo.id;

        let editFormElement = $(`div[data-item-id="${todoId}"]`);

        let todoSubject = editFormElement.find('.edit-todo__input-subject').val().trim();
        let dueDate = new Date(editFormElement.find('.edit-todo__input-due-date').val().trim());
        let priority = editFormElement.find('.edit-todo__input-priority').val().trim();

        let todo = {
            id: todoId,
            user_id: this.props.todo.user_id,
            item: todoSubject,
            due: dueDate,
            priority: priority
        }

        this.props.editTodo(todoId, todo);

        this.setState({
            showEditForm: false
        })

    }

    render() {
        let todoId = this.props.todo.id;
        let todoSubject = this.props.todo.item;
        let dueDate = this.props.todo.due;
        let priority = this.props.todo.priority;

        let editForm = (
            <div data-item-id={todoId}>
                <div className="field">
                    <label className="label">Todo</label>
                    <div className="control">
                        <input className="input is-primary" className="edit-todo__input-subject" type="text" placeholder="Subject" defaultValue={todoSubject} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Due Date</label>
                    <div className="control">
                        <input className="input is-primary" className="edit-todo__input-due-date" type="text" placeholder="mm/dd/yyyy hh:mm:ss" defaultValue={new Date(dueDate).toLocaleString()} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Priority</label>
                    <div className="control">
                        <div className="select is-primary">
                            <select className="edit-todo__input-priority" defaultValue={priority}>
                                <option value="1">1 (Highest)</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                </div>
                <button onClick={this.saveTodo}>Save Todo</button>
            </div>
        )
        return (
            <React.Fragment>
                <h2>Edit Todo</h2>
                <p>{this.state.showEditForm ? null : this.props.todo.item}</p>
                {this.state.showEditForm ? editForm : null }
                <button onClick={(e) => this.editTodo(e, todoId)}>Edit Todo</button>
            </React.Fragment>
        );
    }
}

export default EditTodo
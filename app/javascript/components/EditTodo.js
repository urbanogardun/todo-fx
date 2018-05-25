import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'
import * as $ from 'jquery'

class EditTodo extends React.Component {

    constructor(props) {
        super(props);
        this.editTodo = this.editTodo.bind(this);
        this.saveTodo = this.saveTodo.bind(this);
    }

    editTodo(e, todoId) {
        e.preventDefault();

        $(`#todo-modal-${this.props.todo.id}`).toggleClass('is-active')
    }

    saveTodo(e) {
        e.preventDefault();
        
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

        $(`#todo-modal-${this.props.todo.id}`).removeClass('is-active')

    }

    render() {
        let todoId = this.props.todo.id;
        let todoSubject = this.props.todo.item;
        let dueDate = this.props.todo.due;
        let priority = this.props.todo.priority;

        let editForm = (
            <div data-item-id={todoId}>
                <div className="field">
                    <label className="label is-medium">Todo</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input is-medium edit-todo__input-subject" type="text" placeholder="Subject" defaultValue={todoSubject} />
                        <span className="icon is-left">
                            <i className="fas fa-envelope fa-sm"/>
                        </span>
                        <span className="icon is-right">
                            <i className="fas fa-check fa-sm" />
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label is-medium">Due Date</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input is-medium edit-todo__input-due-date" type="text" placeholder="mm/dd/yyyy hh:mm:ss" defaultValue={new Date(dueDate).toLocaleString()} />
                        <span className="icon is-left">
                            <i className="fas fa-calendar-alt fa-sm" />
                        </span>
                        <span className="icon is-right">
                            <i className="fas fa-check fa-sm" />
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label is-medium">Priority</label>
                    <div className="control">
                        <div className="select is-medium">
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
            </div>
        )
        return (
            <React.Fragment>

                <div className="modal" id={`todo-modal-${this.props.todo.id}`}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                    <p className="modal-card-title">Edit Todo</p>
                    <button className="delete" aria-label="close" onClick={this.editTodo}></button>
                    </header>
                    <section className="modal-card-body">
                        {editForm}
                    </section>
                    <footer className="modal-card-foot">
                    <button className="button is-success" onClick={this.saveTodo}>Save changes</button>
                    <button className="button" onClick={this.editTodo}>Cancel</button>
                    </footer>
                </div>
                </div>

                <button className="button" onClick={this.editTodo}>Edit</button>
            </React.Fragment>
        );
    }
}

export default EditTodo
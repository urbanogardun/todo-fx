import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'

class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(e) {
        e.preventDefault();

        let todoSubject = document.getElementById('add-todo__input-subject').value.trim();
        let dueDate = document.getElementById('add-todo__input-due-date').value.trim();
        let priority = document.getElementById('add-todo__select-priority').value.trim();

        this.props.addTodo({
            user_id: this.props.currentUserId,
            item: todoSubject,
            due: dueDate,
            priority: priority
        });
    }

    render() {
        // Have 3 input fields: single line of text, due date & priority
        return (
            <React.Fragment>
                <h2>AddTodo</h2>
                <div className="field">
                    <label className="label">Todo</label>
                    <div className="control">
                        <input className="input is-primary" id="add-todo__input-subject" type="text" placeholder="Subject" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Due Date</label>
                    <div className="control">
                        <input className="input is-primary" id="add-todo__input-due-date" type="text" placeholder="mm/dd/yyyy hh:mm:ss" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Priority</label>
                    <div className="control">
                        <div className="select is-primary">
                            <select id="add-todo__select-priority">
                                <option value="1">1 (Highest)</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                </div>
                <button onClick={this.addTodo}>Add Todo</button>
            </React.Fragment>
        );
    }
}

export default AddTodo
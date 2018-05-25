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
        return (
            <React.Fragment>
                <div className="container" style={{marginBottom: 100 + 'px'}}>

                    <div className="field">
                        <label className="label is-medium">Subject</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-medium" id="add-todo__input-subject" type="text" placeholder="Text input" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope fa-xs"/>
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-check fa-xs"/>
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label is-medium">Due Date</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-medium" id="add-todo__input-due-date" type="text" placeholder="MM/DD/YYYY HH:MM:SS" />
                            <span className="icon is-left">
                                <i className="fas fa-envelope fa-sm" />
                            </span>
                            <span className="icon is-right">
                                <i className="fas fa-check fa-sm" />
                            </span>
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <p className="control has-icons-left">
                            <label className="label is-medium">Priority</label>
                            <span className="select is-medium">
                                <select id="add-todo__select-priority">
                                    <option value="1">1 (Highest)</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </span>
                            <span className="icon is-small is-left">
                                <i className="fas fa-globe"/>
                            </span>
                        </p>


                        <div className="control">
                            <label className="label is-medium" style={{visibility: 'hidden'}}>Add</label>
                            <button className="button is-primary is-medium" onClick={this.addTodo}>Add</button>
                        </div>
                    </div>

                </div>

            </React.Fragment>
        );
    }
}

export default AddTodo
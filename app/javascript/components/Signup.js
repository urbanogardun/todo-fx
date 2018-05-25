import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'
import { browserHistory } from 'react-router';
import { Link } from 'react-router-dom'
import GuestHeader from './GuestHeader'

class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.handleSignup = this.handleSignup.bind(this);
    }

    handleSignup(e) {
        e.preventDefault();
        let that = this
        let instance = axios.create({
            headers: {'X-CSRF-Token' : document.querySelector('meta[name="csrf-token"]').getAttribute('content')}
        });
        instance.post('/users', {
            user: {
                email: document.getElementById("email").value,
                password: document.getElementById("password").value,
                password_confirmation: document.getElementById("password_confirmation").value
            }
        })
        .then(function (response) {
            that.props.history.push('/todo');
        })
        .catch(function (error) {
            console.log(error)
        })
    }

    render() {
        return (
            <React.Fragment>
                <GuestHeader />

                <div className="container">

                    <div className="column is-three-fifths is-offset-one-fifth" style={{ marginBottom: 220 + 'px' }}>

                        <div className="box">

                            <div className="field">
                                <p className="control has-icons-left has-icons-right">
                                    <input className="input" id="email" type="email" placeholder="Email" />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope" />
                                    </span>
                                    <span className="icon is-small is-right">
                                        <i className="fas fa-check" />
                                    </span>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input className="input" id="password" type="password" placeholder="Password" />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-lock" />
                                    </span>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input className="input" id="password_confirmation" type="password" placeholder="Retype password" />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-lock" />
                                    </span>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control">
                                    <button className="button is-success" onClick={this.handleSignup}>
                                        Submit
                                    </button>
                                    <Link className="button is-success" to="/" style={{ marginLeft: 10 + 'px' }}>Back</Link>
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </React.Fragment>
        );
    };

  }
  
  export default Signup
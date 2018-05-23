import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'
import { browserHistory } from 'react-router';

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
            <div>
                <h2>Signup</h2>
                <form>
                    <input id="email" placeholder="email" />
                    <input id="password" placeholder="password" />
                    <input id="password_confirmation" placeholder="retype password" />
                    <button onClick={this.handleSignup}>Submit</button>
                </form>
                <button onClick={() => this.props.changePage("login")}>Back to Login</button>
            </div>
        );
    };

  }
  
  export default Signup
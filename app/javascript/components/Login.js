import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'
import { Link } from 'react-router-dom'

class Login extends React.Component {
    
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    let that = this
    let instance = axios.create({
      headers: { 'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content') }
    });
    let email =  document.getElementById("email-login").value;
    instance.post('/users/sign_in', {
      user: {
        email: email,
        password: document.getElementById("password-login").value,
      }
    })
    .then(function (response) {
      if (response.data.email) {
        that.props.updateCurrentUser(response.data.email);
      }
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">

          <div className="column is-three-fifths is-offset-one-fifth" style={{marginBottom: 220 + 'px'}}>

            <div className="box">

              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input className="input" id="email-login" type="email" placeholder="Email" />
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
                  <input className="input" id="password-login" type="password" placeholder="Password" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock" />
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <button className="button is-success" onClick={this.handleLogin}>
                    Login
                  </button>
                  <Link className="button is-success" to="/signup" style={{marginLeft: 10 + 'px'}}>Signup</Link>
                </p>
              </div>

            </div>

          </div>

        </div>
      </React.Fragment>
    );
  };  

}
  
  export default Login
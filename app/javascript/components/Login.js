import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'

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
      <div>
        <h2>Login</h2>
        <form>
          <input id="email-login" placeholder="email" />
          <input id="password-login" placeholder="password" />
          <button onClick={this.handleLogin}>Submit</button>
        </form>
        <button onClick={() => this.props.changePage("login")}>Back to Login</button>
      </div>
    );
  };  

}
  
  export default Login
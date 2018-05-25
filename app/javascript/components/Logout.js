import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'

class Logout extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        let that = this
        let email = this.props.currentUser
        
        let instance = axios.create({
            headers: {'X-CSRF-Token' : document.querySelector('meta[name="csrf-token"]').getAttribute('content')}
        });
        instance.delete('/users/sign_out', {
        })
        .then(function (response) {
            that.props.updateCurrentUser(false);
            that.props.history.push('/');
        })
        .catch(function (error) {
            console.log(error)
        })
    }

    render() {
        return (
            <a className="navbar-item" onClick={this.handleLogout}>
            Sign Out
            </a>
        );
    };

}
  
export default Logout
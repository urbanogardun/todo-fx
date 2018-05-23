import React from "react"
import PropTypes from "prop-types"
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import axios from 'axios'
import Header from './Header'

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser: null
    }
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

  componentDidMount() {
    let that = this
    axios.get('/users/check_user',{
    })
    .then(function(response){
      if(response.data.email){
        that.setState({
          currentUser: response.data.email
        })
      } else {
        that.setState({
          currentUser: null
        })
      }
    })
    .catch(function(error){
      console.log(error);
    })
  }

  updateCurrentUser(email) {
    this.setState({
      currentUser: email
    })
  }

  render() {
    return (
      <Router>
          <Route 
          exact path="/" 
          render={() => <Header currentUser={this.state.currentUser} updateCurrentUser={this.updateCurrentUser} />} 
          />
      </Router>
    )
  }

}

export default App

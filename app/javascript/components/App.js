import React from "react"
import PropTypes from "prop-types"
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
import TodoManager from "./TodoManager";

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
          currentUser: response.data
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
    // We pass use spread operator on props so that
    // all methods of react-router get passed to children.
    // This way we can programmatically change routes.
    return (
      <Router>
          <React.Fragment>
            <Route 
              exact path="/" 
              render={(props) => <Header currentUser={this.state.currentUser} updateCurrentUser={this.updateCurrentUser} {...props} />} 
            />
            <Route 
              path="/todo" 
              render={(props) => <TodoManager currentUser={this.state.currentUser} updateCurrentUser={this.updateCurrentUser} {...props} />} 
            />
          </React.Fragment>
      </Router>
    )
  }

}

export default App

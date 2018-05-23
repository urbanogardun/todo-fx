import React from "react"
import PropTypes from "prop-types"
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
      <div>
        <Header updateCurrentUser={this.updateCurrentUser}/>
      </div>
    )
  }

}

export default App

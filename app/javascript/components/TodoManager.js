import React from "react"
import PropTypes from "prop-types"
import Logout from './Logout'
import axios from 'axios'

class TodoManager extends React.Component {

    componentWillMount() {
      let that = this
      axios.get('/users/check_user',{
      })
      .then(function(response){
        // console.log(response);
        if (!response.data.email) {
          that.props.history.push('/')
        }
      })
      .catch(function(error){
        console.log(error);
      })
    }


    render () {
      return (
        <React.Fragment>
          <h2>TodoManager</h2>
          <Logout {...this.props} />
        </React.Fragment>
      );
    }
  }
  
  export default TodoManager
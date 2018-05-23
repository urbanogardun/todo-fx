import React from "react"
import PropTypes from "prop-types"
import Logout from './Logout'

class TodoManager extends React.Component {
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
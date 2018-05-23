import React from "react"
import PropTypes from "prop-types"
import Signup from './Signup'
import Login from './Login'

class Welcome extends React.Component {

  constructor(props) {
    super(props);
  }
    render () {
      return (
        <React.Fragment>
          <h2>Welcome page here</h2>
          <Signup changePage={this.props.changePage} updateCurrentUser={this.props.updateCurrentUser} />
        </React.Fragment>
      );
    }
  }
  
  export default Welcome
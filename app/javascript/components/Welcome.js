import React from "react"
import PropTypes from "prop-types"
import Signup from './Signup'
import Login from './Login'

class Welcome extends React.Component {

  constructor(props) {
    super(props);
  }
    render () {
      console.log(this.props);
      return (
        <React.Fragment>
          <h2>Welcome page here</h2>
          <Signup {...this.props} />
        </React.Fragment>
      );
    }
  }
  
  export default Welcome
import React from "react"
import PropTypes from "prop-types"
import GuestHeader from './GuestHeader'
import Login from './Login'

class Welcome extends React.Component {

  constructor(props) {
    super(props);
  }
    render () {
      return (
        <React.Fragment>

          <GuestHeader />

          <Login {...this.props} />
        </React.Fragment>
      );
    }
  }
  
  export default Welcome
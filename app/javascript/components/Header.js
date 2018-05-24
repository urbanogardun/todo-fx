import React from "react"
import PropTypes from "prop-types"
import { Redirect } from 'react-router'
import Welcome from './Welcome'
import TodoManager from './TodoManager'

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  changePage(newPage) {
    this.setState({
      page: newPage
    })
  }

  render() {
    console.log(this.props);
    if (this.props.currentUser === null) {
      return <div />
    } else if (this.props.currentUser === false) {
      return <Welcome {...this.props} />
    } else {
      return <Redirect to="/todo" />
    }
  }

}

export default Header

import React from "react"
import PropTypes from "prop-types"
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
    if (this.props.currentUser === null) {
      return <Welcome />
    } else {
      return <TodoManager />
    }
  }

}

export default Header

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
      return <div />
    } else if (this.props.currentUser === false) {
      return <Welcome />
    } else {
      return <TodoManager />
    }
  }

}

export default Header

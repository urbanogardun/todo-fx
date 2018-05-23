import React from "react"
import PropTypes from "prop-types"
import Welcome from './Welcome'
import TodoManager from './TodoManager'

class Header extends React.Component {

  constructor(props) {
    super(props);
    if (this.props.currentUser == null) {
      this.state = {
        page: "welcome"
      }
    } else {
      this.state = {
        page: "todos"
      }
    }
    this.changePage = this.changePage.bind(this);
  }

  changePage(newPage) {
    this.setState({
      page: newPage
    })
  }

  render() {
    switch (this.state.page) {
      case "welcome":
        return <Welcome changePage={this.changePage} updateCurrentUser={this.props.updateCurrentUser} />
      case "todos":
        return <TodoManager changePage={this.changePage} updateCurrentUser={this.props.updateCurrentUser} />
    }
  }

}

export default Header

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

          <div className="container-fluid">
            <section className="hero is-medium is-primary is-bold">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title">
                    Yet Another Todo App
                </h1>
                  <h2 className="subtitle">
                    I know I forgot something...
                </h2>
                </div>
              </div>
            </section>
          </div>

          <h2>Welcome page here</h2>
          <Signup {...this.props} />
          <Login {...this.props} />
        </React.Fragment>
      );
    }
  }
  
  export default Welcome
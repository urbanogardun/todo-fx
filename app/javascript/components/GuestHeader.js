import React from "react"
import PropTypes from "prop-types"

class GuestHeader extends React.Component {

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

          <br/>
        </React.Fragment>
      );
    }
  }
  
  export default GuestHeader
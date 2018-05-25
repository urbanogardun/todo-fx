import React from "react"
import PropTypes from "prop-types"

class GuestHeader extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>

                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Yet Another Todo App
                            </h1>
                            <h2 className="subtitle">
                                Get it all out
                            </h2>
                        </div>
                    </div>
                </section>

                <br />

            </React.Fragment>
        );
    }
}

export default GuestHeader
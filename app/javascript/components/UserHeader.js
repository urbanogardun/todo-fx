import React from "react"
import PropTypes from "prop-types"
import Logout from './Logout'

class GuestHeader extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>

                <section className="hero is-primary">

                    <div className="hero-head">
                        <nav className="navbar">
                        <div className="container">
                            <div className="navbar-brand">
                            <a className="navbar-item">
                                <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                            </a>
                            <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            </div>
                            <div id="navbarMenuHeroA" className="navbar-menu">
                            <div className="navbar-end">
                                <a className="navbar-item is-active">
                                Home
                                </a>
                                <Logout {...this.props} />
                            </div>
                            </div>
                        </div>
                        </nav>
                    </div>

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
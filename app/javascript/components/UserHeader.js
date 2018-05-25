import React from "react"
import PropTypes from "prop-types"
import Logout from './Logout'
import * as $ from 'jquery'

class GuestHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var $toggle = $('span[data-target="navbarMenuHeroA"]');
        var $menu = $('#navbarMenuHeroA');

        $toggle.click(function () {
            $(this).toggleClass('is-active');
            $menu.toggleClass('is-active');
        });
    }

    render() {
        return (
            <React.Fragment>

                <section className="hero is-primary">

                    <div className="hero-head">
                        <nav className="navbar">
                            <div className="container">
                                <div className="navbar-brand">
                                    <span className="navbar-item"/>
                                    <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                                        <span/>
                                        <span/>
                                        <span/>
                                    </span>
                                </div>
                                <div className='navbar-menu' id="navbarMenuHeroA">
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
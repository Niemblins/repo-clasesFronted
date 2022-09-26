import React, { Component } from 'react'
import "./NavbarComponent.css"

export class NavbarComponent extends Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <div className="navbar__brand">
                        <span className="font-weight-light">Devf</span>
                        <span className="font-weight-bold">Online</span>

                    </div>

                </div>

            </div>
        )
    }
}

export default NavbarComponent
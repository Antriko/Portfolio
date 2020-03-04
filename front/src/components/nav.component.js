import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CSS/navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark justify-content-between">
                    <div className="navbar-items">
                        <Link to="/" className="navbar-brand">Home</Link>
                        <Link to="/aboutme">about me</Link>
                    </div>
                </nav>
            </React.Fragment>
        );
    };
};
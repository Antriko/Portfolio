import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../IMG/profile.jpg'
import '../CSS/header.css'

export default function header() {
    return(
        <React.Fragment>
            <header className="bg-secondary p-5">
                <div className="container text-white">
                    <div className="row">
                        <div className="col-4">
                            <img className="img-fluid" src={avatar} alt="Avatar"/>
                        </div>
                        <div className="col-8">
                            <h1>Antriko Hajdari</h1>
                            <div className="contactInfo">
                                <i className="fas fa-phone mr-3"></i>
                                07597117427
                                <br />
                                <i className="fas fa-envelope mr-3"></i>
                                AntrikoH@gmail.com
                                <br />
                            </div>
                            <div className="social">
                                <a className="text-decoration-none mr-3" href="https://github.com/Antriko"><i className="fab fa-github-square fa-5x"></i></a> <br />
                                <Link to="/aboutme" className="contactInfo btn btn-light text-dark text-uppercase">Learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>


            </header>
        </React.Fragment>
    );
};
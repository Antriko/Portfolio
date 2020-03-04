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
                        <div className="col-sm-4 col-12">
                            <img className="img-fluid" src={avatar} alt="Avatar"/>
                        </div>
                        <div className="d-flex flex-column col-sm-8 col-12 mh-100 contactInfo">
                            <h1>Antriko Hajdari</h1>
                            <div>
                                <i className="fas fa-phone mr-3"></i>
                                07597117427
                            </div>
                            <div>
                                <i className="fas fa-envelope mr-3"></i>
                                AntrikoH@gmail.com
                            </div>

                            <div className="mt-auto">
                                <a className="align-self-start mr-3" href="https://github.com/Antriko"><i className="fab fa-github-square fa-3x"></i></a> <br/>
                                <Link to="/aboutme" className="btn btn-light text-dark text-uppercase align-self-end">Learn more</Link>
                            </div>



                        </div>
                    </div>
                </div>


            </header>
        </React.Fragment>
    );
};
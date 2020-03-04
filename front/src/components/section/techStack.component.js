import React from 'react';
import '../CSS/techStack.css';

export default function techStack() {
    return(
        <React.Fragment>
            <section id="stack">
                <div className="container">
                    <h2 className="text-center text-uppercase text-secondary mt-4">Tech Stack</h2>
                    <div className="row justify-content-center mt-2">
                        <div className="col-lg-3 col-md-4 col-6  d-flex align-items-center flex-column mb-3">
                            <div className="row p-3 d-flex align-items-center flex-column stack bg-light w-100">
                                <i className="fab fa-html5 mb-3 fa-10x" />
                                <p className="font-weight-bold w-100 text-center textFit">HTML</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6  d-flex align-items-center flex-column mb-3">
                            <div className="row p-3 d-flex align-items-center flex-column stack bg-light w-100">
                                <i className="fab fa-css3-alt mb-3 fa-10x" />
                                <p className="font-weight-bold w-100 text-center textFit">CSS</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6  d-flex align-items-center flex-column mb-3">
                            <div className="row p-3 d-flex align-items-center flex-column stack bg-light w-100">
                                <i className="fab fa-sass mb-3 fa-10x" />
                                <p className="font-weight-bold w-100 text-center textFit">SASS</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6  d-flex align-items-center flex-column mb-3">
                            <div className="row p-3 d-flex align-items-center flex-column stack bg-light w-100">
                                <i className="fab fa-js mb-3 fa-10x" />
                                <p className="font-weight-bold w-100 text-center textFit">JavaScipt</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6  d-flex align-items-center flex-column mb-3">
                            <div className="row p-3 d-flex align-items-center flex-column stack bg-light w-100">
                                <i className="fab fa-node mb-3 fa-10x" />
                                <p className="font-weight-bold w-100 text-center textFit">NodeJS</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6  d-flex align-items-center flex-column mb-3">
                            <div className="row p-3 d-flex align-items-center flex-column stack bg-light w-100">
                                <i className="fas fa-database mb-3 fa-10x" />
                                <p className="font-weight-bold w-100 text-center textFit">MongoDB</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6  d-flex align-items-center flex-column mb-3">
                            <div className="row p-3 d-flex align-items-center flex-column stack bg-light w-100">
                                <i className="fas fa-database mb-3 fa-10x" />
                                <p className="font-weight-bold w-100 text-center textFit">MySQL</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6  d-flex align-items-center flex-column mb-3">
                            <div className="row p-3 d-flex align-items-center flex-column stack bg-light w-100">
                                <i className="fab fa-react mb-3 fa-10x" />
                                <p className="font-weight-bold w-100 text-center textFit">React</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6  d-flex align-items-center flex-column mb-3">
                            <div className="row p-3 d-flex align-items-center flex-column stack bg-light w-100">
                                <i className="fab fa-android mb-3 fa-10x" />
                                <p className="font-weight-bold w-100 text-center textFit">Cordova</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6  d-flex align-items-center flex-column mb-3">
                            <div className="row p-3 d-flex align-items-center flex-column stack bg-light w-100">
                                <i className="fab fa-docker mb-3 fa-10x" />
                                <p className="font-weight-bold w-100 text-center textFit">Docker</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6  d-flex align-items-center flex-column mb-3">
                            <div className="row p-3 d-flex align-items-center flex-column stack bg-light w-100">
                                <i className="fab fa-python mb-3 fa-10x" />
                                <p className="font-weight-bold w-100 text-center textFit">Python</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );  
};
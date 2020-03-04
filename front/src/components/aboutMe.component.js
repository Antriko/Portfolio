import React, { Component } from 'react';
import description from './section/description.component.js';
import projects from './section/projects.component.js';

export default class aboutMe extends Component {
    render() {
        return (
            <React.Fragment>
                {description()}
                {projects()}
            </React.Fragment>
        );
    };
};
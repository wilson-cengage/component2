import React from 'react';
import _ from 'lodash';

import './style.css';

export default class Header extends React.Component {

    render() {
        const value = _.take([2, 3, 1])[0];
        return (
            <div>
                <span className="header">Component {value} - content</span>
                <li>Component 2a - content</li>
            </div>
        );
    }
}
import React from 'react';
import _ from 'lodash';

import './style.css';

export default class Header extends React.Component {

    render() {
        const value = _.take([1, 2, 3])[0];
        return (<span className="header">Component {value}  - content</span>);
    }
}
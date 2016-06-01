import React from 'react';
import ReactDatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

export default class DatePicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: moment()
        }
    }

    handleChange = (date) => {
        this.setState({
            startDate: date
        });
    }

    render() {
        return (
            <ReactDatePicker selected={this.state.startDate} onChange={this.handleChange} />
        );
    }
}
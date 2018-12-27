import React, { Component } from 'react';
import TimeLib from '../../../lib/TimeLib';

class DaysComponent extends Component {
    render = () => {
        const { time } = this.props;
        const dday = TimeLib.get_dday(time);
        return (
            <span>{dday}</span>
        )
    }
}

export default DaysComponent;
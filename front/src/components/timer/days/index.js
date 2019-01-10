import React, { Component } from 'react';
import TimeLib from '../../../lib/TimeLib';
import "./days.scss";

class DaysComponent extends Component {
    render = () => {
        const timer = this.props.timer;
        return (
            <p id='days'>{timer.getDays()} DAY</p>
        )
    }
}

export default DaysComponent;
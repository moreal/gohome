import React, { Component } from 'react';
import TimeLib from '../../../lib/TimeLib';
import "./days.scss";

class DaysComponent extends Component {
    render = () => {
        const time = this.props.time;
        const dday = TimeLib.get_dday(time);
        return (
            <p id='days'>{dday}</p>
        )
    }
}

export default DaysComponent;
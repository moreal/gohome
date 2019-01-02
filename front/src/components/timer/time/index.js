import React, { Component } from 'react';
import TimeLib from '../../../lib/TimeLib';
import "./time.scss"

class TimeComponent extends Component {
    render() {
        const time = this.props.time;
        const times = TimeLib.get_times(time);
        return (
            <span id='time'>{times}</span>
        )
    }
}

export default TimeComponent;
import React, { Component } from 'react';
import TimeLib from '../../../lib/TimeLib';

class TimeComponent extends Component {
    render() {
        const { time } = this.props;
        const times = TimeLib.get_times(time);
        return (
            <p><br/>{times}</p>
        )
    }
}

export default TimeComponent;
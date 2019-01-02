import React, { Component } from 'react';
import TimeLib from '../../../lib/TimeLib';
import "./time.scss"

class TimeComponent extends Component {
    render() {
        const time = this.props.time;
        const [ hours, minutes, seconds ] = TimeLib.get_time_elements(time);
        return (
            <span id='time'>
                {hours}
                <span className='middle-size'>시간</span>{' '}
                {minutes}
                <span className='middle-size'>분</span>{' '}
                {seconds}
                <span className='middle-size'>초</span>
            </span>
        )
    }
}

export default TimeComponent;
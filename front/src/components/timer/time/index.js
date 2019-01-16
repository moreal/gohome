import React, { Component } from 'react';
import "./time.scss"

class TimeComponent extends Component {
    render() {
        const timer = this.props.timer;
        return (
            <p id='time'>
                {timer.getHours()}
                <span className='middle-size'>시간</span>{' '}
                {timer.getMinutes()}
                <span className='middle-size'>분</span>{' '}
                {timer.getSeconds()}
                <span className='middle-size'>초</span>
            </p>
        )
    }
}

export default TimeComponent;
import React, { Component } from 'react';
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
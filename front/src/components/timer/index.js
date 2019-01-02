import React, { Component } from 'react';
import DaysCompoenet from './days';
import TimeComponent from './time';
import './timer.scss'

class TimerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: props.time
        }
    }

    componentDidMount() {
        setInterval(() => {
            const next_time = this.state.time;
            next_time.setSeconds(next_time.getSeconds() - 1);

            this.setState({
                time: next_time
            })
        }, 1000)
    }

    render() {
        const time = this.state.time;
        return (
            <div id='timer'>
                <DaysCompoenet time={time} /><br/>
                <TimeComponent time={time} />
            </div>
        )
    }
};

export default TimerContainer;
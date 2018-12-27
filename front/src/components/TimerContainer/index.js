import React, { Component } from 'react';
import DaysCompoenet from './Days';
import TimeComponent from './Time';

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
        return (
            <div id='timer'>
                <DaysCompoenet />
                <TimeComponent time={this.state.time.toString()} />
            </div>
        )
    }
};

export default TimerContainer;
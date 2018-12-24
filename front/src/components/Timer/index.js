import React, { Component } from 'react';

class TimerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: props.time
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: this.state.time + 1
            })
        }, 1000)
    }

    render = () => (
        <span id="timer">{this.state.time}</span>
    )
}
export default TimerComponent;
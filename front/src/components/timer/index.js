import React, { Component } from 'react';
import DaysCompoenet from './days';
import TimeComponent from './time';
import SchoolComponent from './school';
import Axios from "axios";
import './timer.scss'

class TimerContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            time: null, // time default value
            school_name: 'Loading..'
        };

        TimerContainer.fetchTime()
            .then(({data}) => {
                this.setState({
                    time: new Date(new Date() - data.time),
                    school_name: data.school_name,
                });

                setInterval(() => {
                    this.tick();
                }, 1000);
            });
    };

    static fetchTime() {
        return Axios.get('http://localhost:8000/api/time');
    }

    tick() {
        const next_time = this.state.time;
        next_time.setSeconds(next_time.getSeconds() - 1);

        this.setState({
            time: next_time
        });
    };

    render() {
        const { time, school_name } = this.state;
        return time != null ? (
            <div id='timer'>
                <DaysCompoenet time={time}/>
                <TimeComponent time={time}/>
                <SchoolComponent name={school_name}/>
            </div>
        ) : (<div id={'timer'}>Loading..!</div>);
    }
}

export default TimerContainer;
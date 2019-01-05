import React, { Component } from 'react';
import DaysCompoenet from './days';
import TimeComponent from './time';
import SchoolComponent from './school';
import Axios from "axios";
import './timer.scss'

class TimerContainer extends Component {

    componentDidMount() {
        
        Axios.get('/api/time').then(resp => {
            this.setState({
                time: resp.time,
                school_name: resp.school_name,
            });
        });

        setInterval(() => {
            const next_time = this.state.time;
            next_time.setSeconds(next_time.getSeconds() - 1);

            this.setState({
                time: next_time
            })
        }, 1000)
    }

    render() {
        const { time, school_name } = this.state;
        return (
            <div id='timer'>
                <DaysCompoenet time={time} /><br/>
                <TimeComponent time={time} />
                <SchoolComponent name={school_name}/>
            </div>
        )
    }
};

export default TimerContainer;
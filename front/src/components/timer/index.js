import React, { Component } from 'react';
import DaysCompoenet from './days';
import TimeComponent from './time';
import SchoolComponent from './school';
import Axios from "axios";
import CountdownTimer from '../../lib/CountdownTimer';
import './timer.scss';

class TimerContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            timer: null, // time default value
            school_name: 'Loading..'
        };

        TimerContainer.fetchTime()
            .then(({data}) => {
                const now = Math.floor(new Date().getTime() / 1000);
                console.log(new Date(data.time * 1000));
                console.log(new Date(now * 1000));
                const remain_time = data.time - now;
                const timer = new CountdownTimer(remain_time);

                this.setState({
                    timer: timer,
                    school_name: data.school_name,
                });

                setInterval(() => {
                    this.tick();
                }, 1000);
            });
    };

    static fetchTime() {
        return Axios.get(`http://localhost:8000/api/time`);
    }

    tick() {
        const timer = this.state.timer;
        timer.countdown();

        this.setState({
            timer: timer
        });
    };

    render() {
        const { timer, school_name } = this.state;
        return timer != null ? (
            <div id='timer'>
                <DaysCompoenet timer={timer}/>
                <TimeComponent timer={timer}/>
                <SchoolComponent name={school_name}/>
            </div>
        ) : (<div id={'timer'}>Loading..!</div>);
    }
}

export default TimerContainer;
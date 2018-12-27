import React from 'react';

class TimeLib {
    static get_dday(datetime) {
        return `D-${datetime.getDay()}`;
    }

    static get_times(datetime) {
        return `${datetime.getHours()}시간 ${datetime.getMinutes()}분 ${datetime.getSeconds()}초`;
    }
}

export default TimeLib;
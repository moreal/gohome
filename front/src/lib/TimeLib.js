class TimeLib {
    static get_dday(datetime) {
        return `D - ${datetime.getDay() === 0 ? 'Day' : datetime.getDay() }`;
    }

    static get_time_elements(datetime) {
        return [datetime.getHours(), datetime.getMinutes(), datetime.getSeconds()];
    }
}

export default TimeLib;
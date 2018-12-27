import React, { Component } from 'react';

class TimeComponent extends Component {
    render = () => (
        <p><br/>{this.props.time.toString()}</p>
    )
}
export default TimeComponent;
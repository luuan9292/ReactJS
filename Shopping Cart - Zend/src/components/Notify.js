import React, {Component} from 'react';
import {connect} from 'react-redux';

class Notify extends Component {
    render() {
        return(
            <div className="alert alert-success" role="alert" id="mnotification">
                <b>{this.props.notify}</b>
            </div>
        );
    }
}

const mapStateToProp = state => {
    return {
        notify : state.notify
    }
}

export default connect(mapStateToProp, null)(Notify);
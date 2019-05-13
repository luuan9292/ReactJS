import React, { Component } from 'react';

class Result extends Component {

    setStyle = () => {
        return {
            color: this.props.color,
            fontSize: this.props.fontsize
        }
    }

    render() {
        return (
            <div className="col-md-12  result">
                <p>Color: {this.props.color} - Fontsize: {this.props.fontsize}</p>
                <i className="fab fa-react" style={ this.setStyle() }></i>
            </div>
        );
    }
}

export default Result;
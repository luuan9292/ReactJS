import React, { Component } from 'react';
import './TrafficLight.css';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TrafficLight extends Component {
    render() {
        const { currentColor } = this.props;
        return (
            <div className="TrafficLight">
                <div className="light__box">
                    <div className={currentColor === RED ? 'bulb red active' : 'bulb red'}></div>
                    <div className={currentColor === ORANGE ? 'bulb orange active' : 'bulb orange'}></div>
                    <div className={currentColor === GREEN ? 'bulb green active' : 'bulb green'}></div>
                </div>
                
            </div>
        );
    }
}

export default TrafficLight;
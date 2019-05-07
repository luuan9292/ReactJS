import React, { Component } from 'react';
import './App.css';
import TrafficLight from './components/TrafficLight';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentColor: RED
        };
    }

    getNextColor = color => {
        switch (color) {
            case RED: {
                return ORANGE;
            }
            case ORANGE: {
                return GREEN;
            }
            case GREEN: {
                return RED;
            }
        }
    }

    render() {
        const { currentColor } = this.state;
        return (
            <TrafficLight currentColor={ currentColor } />
        );
    }

    componentDidMount() {
        setInterval(() => this.setState({
            currentColor: this.getNextColor(this.state.currentColor)
        })
        , 1000);
    }
}

export default App;

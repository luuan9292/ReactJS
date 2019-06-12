import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ['tomato', 'dodgerblue', 'MediumSeaGreen', 'coral', 'deeppink', 'BlueViolet']
        }
    }

    showColor = (color) => {
        return {
            backgroundColor: color
        }
    }

    handleChangeColor = color => {
        this.props.receivecolor(color);
    }

    render() {
        let colorElement = this.state.colors.map((color, index) =>
            <div className={this.props.color === color ? "active" : " "} 
                key={index} 
                style={this.showColor(color)} 
                onClick={ () => this.handleChangeColor(color)} 
            />);
            
        return (
            <div className="col-md-6">
                <div className="color__picker">
                    {colorElement}
                </div>
            </div>
        );
    }
}

export default TodoItem;
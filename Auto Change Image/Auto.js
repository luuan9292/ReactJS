import React, {Component} from 'react';

class Auto extends Component {
    constructor(props) {
        super(props);
        this.state ={
            hinh: 1
        };
    }

    handleChangeImage = () => {
        this.setState({
            hinh: this.state.hinh % 7 +1
        });
    }

    render() {
        return(
            <img src={`img/card-${this.state.hinh}.png`} alt="hinh"/>
        );
    }

    componentDidMount() {
        setInterval(this.handleChangeImage, 1000)
    }
}

export default Auto;
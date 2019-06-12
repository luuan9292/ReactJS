
import React, { Component } from 'react';

class SizeSetting extends Component {

    handleChangeSize = (size) => {
        this.props.fontsize(size);
    }

    render() {
        return (
            <div className="col-md-6">
                    <button className="btn btn-success" onClick={ () => this.handleChangeSize(50)}>Increase</button>
                    <button className="btn btn-success" onClick={ () => this.handleChangeSize(-50)}>Decrease</button>
            </div>
        );
    }
}

export default SizeSetting;
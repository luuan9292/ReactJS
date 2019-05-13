import React, {Component} from 'react';

class Reset extends Component {

    // handleReset = ()) => {
        
    // }

    render() {
        return(
            <div className="col-md-12">           
                <button className="btn btn-danger" onClick={this.props.onClick}>Reset</button>
            </div>
        );
    }
}

export default Reset;
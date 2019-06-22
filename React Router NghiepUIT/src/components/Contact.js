import React, { Component } from 'react';
import {Prompt} from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: true
        }
    }

    onClick = isChecked => {
        this.setState({
            isChecked
        })
    }

    render() {

        let {isChecked} = this.state;

        return (
            <div className='container'>
                   Day la trang lien he   <br />    
                   <button type="button" className="btn btn-info" onClick={() => this.onClick(false) } > Cho Phep</button>  <br />
                   <button type="button" className="btn btn-danger" onClick={() => this.onClick(true)} > Khong cho Phep</button>  
                    <Prompt 
                        when={isChecked}
                        message={location => (`Ban chac chan muon di den ${location.pathname}`)}
                    />
            </div>

        );
    }
}

export default Contact;



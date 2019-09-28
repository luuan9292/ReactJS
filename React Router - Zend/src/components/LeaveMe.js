import React, { Component } from 'react';
import { Prompt } from "react-router-dom";

class LeaveMe extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isConfirm: false,
        };
    }

    handleChange = (event) => {
        const target = event.target;    // input selectbox
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div >

                <Prompt
                    when={this.state.isConfirm}
                    message={location => `Are you sure you want to go to ${location.pathname}`}
                />

                <form onSubmit={this.handleSubmit}>
                    <legend>Form Register</legend>

                    <div className="checkbox">
                        <label>
                            <input onChange={this.handleChange} checked={this.state.isConfirm} name="isConfirm" type="checkbox" />
                            Confirm !?
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}

export default LeaveMe;

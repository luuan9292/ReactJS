import React, { Component } from 'react';
import {connect} from 'react-redux';

import {actLogin} from '../actions/index';

class FormLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    handleChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let { username, password } = this.state;
        this.props.formLogin(username, password);
    }

    render() {
        return (
            <div className="bg-faded p-4 my-4">
                <hr className="divider" />
                <h2 className="text-center text-lg text-uppercase my-0">Login<strong>Form</strong></h2>
                <hr className="divider" />
                <form onSubmit={this.handleSubmit}>
                    <div className="row">

                        <div className="form-group col-lg-6">
                            <label className="text-heading">Username</label>
                            <input name="username" value={this.state.username} onChange={this.handleChange} type="text" className="form-control" />
                        </div>
                        <div className="form-group col-lg-6">
                            <label className="text-heading">Password</label>
                            <input name="password" value={this.state.password} onChange={this.handleChange} type="password" className="form-control" />
                        </div>

                        <div className="clearfix" />

                        <div className="form-group col-lg-12">
                            <button type="submit" className="btn btn-secondary">Submit</button>
                        </div>

                    </div>
                </form>
            </div>

        );
    }

}

const mapDispatchToProps = (dispatch, props) => {
    return {
        formLogin: (username, password) => {
            dispatch(actLogin(username, password))
        }
    }
}

export default connect(null, mapDispatchToProps)(FormLogin);

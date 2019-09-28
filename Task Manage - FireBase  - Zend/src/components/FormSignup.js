import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actChangeNotify } from '../actions/index';
import * as Notify from '../constant/Notify';


import { firebaseApp, usersRef } from '../services/firebase';

class FormSignup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            website: ''
        };
    }

    handleChange = e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = e => {
        let { email, password, website } = this.state;

        //Method Sign up new users
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        .then(data => { //data tra ve object user chua UID la id cua user. Day la promise tham khao them trong reference auth cua firebase
            usersRef.child(data.user.uid).set({ //Thong tin nguoi dung
                website,
                isAdmin: false,
                uid: data.user.uid
            })
            this.props.changeNotify(Notify.NOTI_TYPE_SUCCESS, Notify.NOTI_SIGNUP_SUCCESSFULL_TITLE, Notify.NOTI_SIGNUP_SUCCESSFULL_MESSAGE);
        })
        .catch(error => {
            this.props.changeNotify(Notify.NOTI_TYPE_DANGER, Notify.NOTI_SIGNUP_FAIL_TITLE, error.message);
        });

        e.preventDefault();
    }

    render() {
        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
                    <div className="col-sm-6">
                        <input type="text" name="email" onChange={this.handleChange} value={this.state.email} className="form-control" id="inputEmail3" placeholder="Email" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
                    <div className="col-sm-6">
                        <input type="text" name="password" onChange={this.handleChange} value={this.state.password} className="form-control" id="inputPassword3" placeholder="Password" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail3" className="col-sm-2 control-label">Website</label>
                    <div className="col-sm-6">
                        <input type="text" name="website" onChange={this.handleChange} value={this.state.website} className="form-control" id="inputEmail3" placeholder="Website" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-6">
                        <button type="submit" className="btn btn-success">Sign up</button>
                    </div>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        changeNotify: (style, title, content) => {
            dispatch(actChangeNotify(style, title, content));
        }
    }
}

export default connect(null, mapDispatchToProps)(FormSignup);

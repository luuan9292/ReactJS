import React, { Component } from 'react';

import { firebaseApp } from '../services/firebase';

class FormUser extends Component {

    handleClick = (e) => { //method sign out cua firebase
        firebaseApp.auth().signOut();

    }

    render() {

        let user = this.props.user.info;

        let xhtml = (user.isAdmin === true) ? <h4>Admin</h4> : ""

        return (
            <div>
                <h4>Email: {user.email}</h4>
                <h4>UserID: {user.uid}</h4>
                <h4>Website: {user.website}</h4>
                {xhtml}
                <button type="submit" onClick={this.handleClick} className="btn btn-success">Logout</button>
            </div>
        );
    }
}

export default FormUser;

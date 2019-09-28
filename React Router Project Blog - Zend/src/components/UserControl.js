import React, { Component } from 'react';
import {connect} from 'react-redux';

import {actLogout} from '../actions/index';


class UserControl extends Component {
    render() {
        let{username} = this.props;
        return (
            <div className="bg-faded p-4 my-4">
                <hr className="divider" />
                <h2 className="text-center text-lg text-uppercase my-0"><strong>Logout</strong></h2>
                <hr className="divider" />
                <form>
                    <div className="row">

                        <div className="form-group col-lg-12">
                            <label className="text-heading">Hello:<strong>{username}</strong></label>
                        </div>

                        <div className="clearfix" />

                        <div className="form-group col-lg-12">
                            <button type="button" className="btn btn-secondary" onClick={this.handleLogout}>Logout</button>
                        </div>

                    </div>
                </form>
            </div>
        );
    }

    handleLogout = () => {
        this.props.formLogout();
    }

}

const mapDispatchToProps = (dispatch, props) => {
    return {
        formLogout: () => {
            dispatch(actLogout())
        }
    }
}

export default connect(null, mapDispatchToProps)(UserControl);

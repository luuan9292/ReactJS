import React, { Component } from 'react';
import {connect} from 'react-redux';

import {actHideNotify} from '../actions/index';

//Su dung package Alert Boostrap

import { Alert, AlertContainer } from "react-bs-notifier";

class Notify extends Component {

    handleDismiss = () => {
        this.props.hideNotify();
    }

    render() {

        let {isShow, style, title, content} = this.props.item;
        if(isShow === false) return null;

        return (
            <AlertContainer position="top-right" >
                <Alert timeout={3000} type={style} showIcon={true} headline={title} onDismiss={this.handleDismiss}>
                    {content}
                </Alert>
            </AlertContainer>
        );
    }
}

const mapStateToProps = state => {
    return {
        item : state.notify
    }
}

const mapDispatchToProp = (dispatch, props) => {
    return {
        hideNotify : ()=> {
            dispatch(actHideNotify())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProp)(Notify);

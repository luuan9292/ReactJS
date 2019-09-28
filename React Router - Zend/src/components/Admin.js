import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Admin extends Component {
    render() {

        let{match, location} = this.props;

        let id = +match.params.id;

        if(id === 1) {
            return <Redirect to={
                                    {
                                        pathname: '/',
                                        state: {
                                            from: location
                                        }
                                    }
                                } 
                    />
        }

        return (
            <div >
               <h3>Admin</h3>
            </div>
        );
    }
}

export default Admin;

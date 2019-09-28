import React, { Component } from 'react';

class NotfoundPage extends Component {
    render() {
        return (
            <div className="bg-faded p-4 my-4">
                <div className="card card-inverse">
                    <div className="card-img-overlay bg-overlay">
                        <h2 className="card-title text-shadow text-white text-uppercase mb-0">404 - Not Found</h2>
                    </div>
                </div>
            </div>
        );
    }

}

export default NotfoundPage;

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtUsername: '',
            txtPassword: '',
        }
    }

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onLogin = (event) => {
        event.preventDefault();
        let { txtUsername, txtPassword } = this.state;
        if (txtUsername === 'admin' && txtPassword === 'admin') {
            localStorage.setItem('user', JSON.stringify({
                username: txtUsername,
                password: txtPassword
            }));
        }
    }

    render() {

        let { txtUsername, txtPassword } = this.state;
        let loggedInUser = localStorage.getItem('user');
        if (loggedInUser !== null) {
            let { location } = this.props;

            return <Redirect to={{
                pathname: '/products',
                state: {
                    from: location
                }
            }} />
        }

        return (
            <div className='row'>
                <div className='col-md-6'>

                    <form onSubmit={this.onLogin}>
                        <legend>Dang Nhap</legend>

                        <div className="form-group">
                            <label>Username:  </label>
                            <input type="text" className="form-control" name="txtUsername" value={txtUsername} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label>Password:  </label>
                            <input type="password" className="form-control" name="txtPassword" value={txtPassword} onChange={this.onChange} />
                        </div>

                        <button type="submit" className="btn btn-default">Dang Nhap</button>
                    </form>

                </div>
            </div>

        );
    }
}

export default Login;



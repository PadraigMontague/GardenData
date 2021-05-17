import React from 'react';
import './App.css';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginAction } from '../Actions/loginAction';
import BrowserState from '../LocalstorageState/BrowserState';
import { bindActionCreators } from 'redux';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({ username: '', password: '' });
        this.loggedIn = false;
    }

    componentDidMount() {
        if (this.props.location.pathname === '/') {
            document.querySelector('.navigation').style.display = 'none';
        }
    }

    handleChange = (event) => {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }

    login = (data) => {
        let browserState = new BrowserState();
        browserState.setBrowserState('user_data', data);
        this.props.history.push('/home');
        this.props.LoginAction(data);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.validation(this.state.username);
        this.validation(this.state.password);

        fetch('', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ server: "authentication-webservice", action: "/login", username: this.state.username })
        }).then(response => response.json())
            .then(data => {
                fetch(data.endpoint, {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.state)
                }).then(response => response.json())
                    .then(data => {
                        if (data.token !== undefined) {
                            this.login(data);
                        } else {
                            alert('Incorrect username or password');
                        }
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    })
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    }



    validation = (prop) => {
        if (prop === '' || prop === undefined) {
            alert('Please Fill All Fields');
        } else {
            this.loggedIn = true;
        }
    }

    render() {
        return (
            <div className="wrapper">
                <form className="login-form" onSubmit={this.handleSubmit} method="POST">
                    <div className="logo"></div>
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                    <input className="submit-button" type="submit" value="Login" />
                    <p className="regLink">No account? <Link style={{ fontSize: "1.2rem", color: "#009688" }} to="/register"><strong>Register</strong></Link></p>
                </form>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        login: state.login
    }
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({LoginAction: LoginAction}, dispatch)
};

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(LoginForm));
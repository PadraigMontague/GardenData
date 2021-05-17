import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';


class Register extends React.Component {
    constructor(props) {
        super();
        this.state = ({ username: '', password: '' });
    }

    handleChange = (event) => {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
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
            body: JSON.stringify({ server: "authentication-webservice", action: "/register" })
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
                        window.alert(data.message);
                    })
                    .catch((error) => {
                        window.alert("Currently unable to process your request at the moment. Please try again later.");
                    })
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    }

    validation = (prop) => {
        if (prop === '' || prop === undefined) {
            alert('Please Fill All Fields');
        }
    }

    render() {
        return (
            <div className="wrapper">
                <form className="Register-form" onSubmit={this.handleSubmit} method="POST">
                    <div className="logo"></div>
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                    <input className="submit-button" type="submit" value="Register" />
                    <p className="regLink">Already have an account? <Link style={{ fontSize: "1.2rem", color: "#009688" }} to="/"><strong>Login</strong></Link></p>
                </form>
            </div>
        );
    }
}

export default Register;
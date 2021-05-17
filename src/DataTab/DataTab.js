import React from 'react';
import './DataTab.css';
import Sidebar from '../Sidebar/Sidebar';

class DataTab extends React.Component {
    constructor(props) {
        super(props);
        this.sidebar = new Sidebar();
        this.state = ({ endpoint: '', keyword: '', time: '', result: [] });
    }

    handleErrors(res) {
        if (res.ok) {
            return res;
        } else {
            alert('API endpoint does not exist');
            return res.json().then(res => Promise.reject(res));
        }
    }

    isValidEnpoint = (event) => {
        event.preventDefault();
        if (this.state.endpoint !== '' && this.state.keyword !== '' && this.state.time !== '') {
            fetch(this.state.endpoint, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            })
                .then(this.handleErrors)
                .then(response => response.json())
                .then(data => {
                    if (data == undefined) {
                        window.alert('Endpoint not valid');
                    } else {
                        this.isDataPresent(data, this.state.keyword);
                        if (this.state.result.length <= 0) {
                            window.alert('Your data variable is not present in your API endpoint');
                        } else {
                            window.alert('SUCCESS: Your API endpoint has been connected');
                        }
                    }
                })
                .catch(err => console.log(err));
        } else {
            alert('Please Complete All Fields');
        }
    }

    isDataPresent = (data, keyword) => {
        this.setState({ result: [] })
        if (typeof (data) !== 'string' && !Array.isArray(data)) {
            if (typeof (data) == 'object') {
                let objectKeyData = Object.keys(data);
                for (let i = 0; i < objectKeyData.length; i++) {
                    if (objectKeyData[i] === keyword) {
                        let objectData = Object.values(data);
                        let userData = { [objectKeyData[i]]: objectData[i] };
                        this.state.result.push(userData);
                    }
                }
                return this.state.result;
            }
        } else {
            for (let i = 0; i < data.length; i++) {
                if (typeof (data[i]) === 'string') {
                } else if (typeof (data[i]) === 'object' && data[i][keyword] !== undefined) {
                    this.state.result.push(data[i][keyword]);
                    if (i == data.length) {
                        return this.state.result;
                    }
                }
            }
        }
    }

    handleChange = (event) => {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }

    onSub = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div onClick={(e) => { this.sidebar.hidesidebar(e) }}>
                <Sidebar />
                <div className="formHeader">
                    <div className="titleWrapper">Lets add more <strong style={{ color: "#009688" }}>data</strong></div>
                </div>
                <form className="dataTab_form" onSubmit={this.isValidEnpoint}>
                    <input type="text" name="endpoint" placeholder="API Endpoint" value={this.state.enpdoint} onChange={this.handleChange} />
                    <label>NOTE: You can only display one data variable in each tab *</label>
                    <input type="text" name="keyword" placeholder="Data variable name ie: 'temperature'" value={this.state.keyword} onChange={this.handleChange} />
                    <label>NOTE: Request frequency under 60 seconds MAY increase resource usage of your API endoint *</label>
                    <input type="number" name="time" placeholder="Request frequency ie: '5 seconds'" value={this.state.time} onChange={this.handleChange} />
                    <input type="submit" className="submit-button" />
                </form>
            </div>
        )
    }
}

export default DataTab;
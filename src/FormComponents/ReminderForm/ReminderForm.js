import React from 'react';
import './ReminderForm.css';
import { withRouter } from 'react-router-dom';
import Sidebar from "../../Sidebar/Sidebar";

class ReminderForm extends React.Component {
    constructor(props) {
        super(props);
        let todaysDate = new Date();
        let correctCurrentMonth = parseInt(todaysDate.getMonth()) + 1;
        let currentDateFormat = todaysDate.getDate() + '/' + correctCurrentMonth + '/' + todaysDate.getFullYear();
        this.state = ({
            event: 'Reminder',
            reminderDescription: '',
            date: currentDateFormat,
            reminderCycle: '',
            reminderDate: ''
        });
        this.Sidebar = new Sidebar();
    }


    handleChange = (event) => {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
        if (event.target.name === 'reminderCycle' && event.target.value > 0) {
            let todaysDate = new Date();
            let reminderDate = new Date();
            let reminderCycle = parseInt(event.target.value);
            reminderDate.setDate(todaysDate.getDate() + reminderCycle);
            let correctReminderMonth = parseInt(reminderDate.getMonth()) + 1;
            let reminderDateFormat = reminderDate.getDate() + '/' + correctReminderMonth + '/' + reminderDate.getFullYear();
            this.setState({
                reminderDate: reminderDateFormat
            });
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.formValidation(this.state);
    }

    formValidation = (state) => {
        if (state.reminderDescription === '' && state.reminderCycle <= 0) {
            alert('Please Complete All Fields');
        } else if (state.reminderDescription === '' || state.reminderDescription === undefined) {
            alert('Please complete reminder description');
        } else if (state.reminderCycle <= 0 || state.reminderCycle === undefined) {
            alert('Please enter the number of days');
        } else {
            this.sendData(state);
            alert('COMPLETED!!!');
        }
    }

    sendData = (data) => {
        fetch('', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Data status');
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    }

    render() {
        return (
            <div onClick={(e) => { this.Sidebar.hidesidebar(e) }}>
                <Sidebar />
                <div className="form_wrapper">
                    <div className="formHeader">
                        <div className="titleWrapper">Insert new <strong style={{ color: "#009688" }}>reminder</strong> data</div>
                    </div>
                    <form className="planting_form" onSubmit={this.handleSubmit}>
                        <input type="text" name="reminderDescription" placeholder="Reminder Description" value={this.state.reminderDescription} onChange={this.handleChange} />
                        <input type="number" name="reminderCycle" placeholder="Number of days" value={this.state.reminderCycle} onChange={this.handleChange} />
                        <input type="submit" className="submit-button" />
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(ReminderForm);
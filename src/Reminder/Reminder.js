import React from 'react';
import './Reminder.css';
import { BrowserRouter as Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Sidebar from "../Sidebar/Sidebar";
import { ReminderAction } from '../Actions/reminderAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Reminder extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({

        });
        this.sidebar = new Sidebar();
        this.reminderArr = this.props.ReminderAction();
    }

    activateTab() {
        document.querySelector('.newReminderDiv').style.display = 'none';
        document.querySelector('.deleteReminder').style.display = 'flex';
    }
    deactivateTab() {
        document.querySelector('.newReminderDiv').style.display = 'flex';
        document.querySelector('.deleteReminder').style.display = 'none';
    }

    checkActiveArea(e) {
        document.querySelectorAll('.reminderDescription').forEach((element, index) => {
            element.classList.add(`unique-${index}`);
        });
        let element = e.target.className;
        let mod = element.split("reminderDescription").pop();
        if (mod !== "reminderDescription") {

            if (e.target.className !== `reminderDescription${mod}`) {
                this.deactivateTab();
            } else {
                this.activateTab();
            }
        }
    }

    redirectReminder() {
        return this.props.history.push('/create-reminder');
    }

    render() {
        return (
            <div onClick={(e) => { this.sidebar.hidesidebar(e) }}>
                <Sidebar />
                <div className="reminder-wrapper">
                    <div className="pageHeader">
                        <div className="headerTitle"><p>Reminders</p></div>
                        <div className="newReminderDiv"><button onClick={() => { this.redirectReminder() }}>+</button></div>
                        <div className="deleteReminder">
                            <button className="editbtn"><Link to=''></Link></button>
                            <button className="deletebtn"><Link to=''></Link></button>
                        </div>
                    </div>
                    <div className="tabWrapper" onClick={(e) => { this.checkActiveArea(e) }}>
                        {
                            this.props.reminders.map((item, index) => (
                                <div className="tab" key={index}>
                                    <div className="reminderDate">
                                        <p>18/07/2020</p>
                                        <input type="radio"></input>
                                    </div>
                                    <div className="reminderDescription" onClick={() => { this.activateTab() }}>{item}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        reminders: state.reminders
    }
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ ReminderAction: ReminderAction }, dispatch)
};

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Reminder));
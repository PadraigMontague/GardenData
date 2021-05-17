import React from 'react';
import './Settings.css';
import Sidebar from "../Sidebar/Sidebar";
import BrowserState from "../LocalstorageState/BrowserState";

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.Sidebar = new Sidebar();
        this.BrowserState = new BrowserState();
        this.recieveReminders = this.BrowserState.getBrowserState('recieveReminders');
    }

    ifSet(decision, element, id) {
        if (decision && id != 3) {
            document.querySelector(element).style.background = "#009688";
            document.querySelector('.no_' + id).style.background = "#2f4f4f";
        } else if (id === 3) {
            let dec = window.confirm("WARMING! this action will reset all settings and you will need to re-login");
            if (dec) {
                if (element == '.yes_3') {
                    document.querySelector(element).style.background = "#009688";
                    document.querySelector('.no_' + id).style.background = "#2f4f4f";
                } else {
                    document.querySelector(element).style.background = "#009688";
                    document.querySelector('.yes_' + id).style.background = "#2f4f4f";
                }
            } else {
                if (element == '.yes_3') {
                    document.querySelector(element).style.background = "#2f4f4f";
                    document.querySelector('.no_' + id).style.background = "#009688";
                } else {
                    document.querySelector(element).style.background = "#009688";
                    document.querySelector('.yes_' + id).style.background = "#2f4f4f";
                }
            }
        } else {
            document.querySelector(element).style.background = "#009688";
            document.querySelector('.yes_' + id).style.background = "#2f4f4f";
        }
    }

    setReminders(action) {
        Notification.requestPermission().then(
            function (permission) {
                if (action === "enable") {
                    if (permission === "granted") {
                        fetch('', {
                            method: 'GET',
                            mode: 'cors',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        })
                            .then(response => response.json())
                            .then(data => {
                                let reminderDescription = data[0].reminderDescription;
                                new Notification(reminderDescription);
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                            })
                    }
                }
                else {
                    return permission = "denied";
                }
            }
        )

        if (action === "revoke") {
            this.ifSet(false, '.no_1', 1);
            this.BrowserState.setBrowserState('recieveReminders', false);
        } else {
            this.ifSet(true, '.yes_1', 1);
            this.BrowserState.setBrowserState('recieveReminders', true);
        }
    }

    clearHistory() {
        this.ifSet(true, '.yes_3', 3);
        this.BrowserState.clearBrowserState();
    }

    setSession(action) {
        if (action === "yes") {
            this.BrowserState.setBrowserState('signed_in', true);
            this.ifSet(true, '.yes_2', 2)
        } else {
            this.BrowserState.setBrowserState('signed_in', false);
            this.ifSet(false, '.no_2', 2)
        }
    }

    render() {
        return (
            <div className="container">
                <div onClick={(e) => { this.Sidebar.hidesidebar(e) }}>
                    <Sidebar />
                    <div className="page_heading">
                        <div className="title"><p>Manage your</p> <p className="boldText">settings</p></div>
                    </div>
                    <div className="settings">
                        <div className="option">
                            <div className="setting_description"><p>Receive reminders</p></div>
                            <div className="select_btn">
                                <div className="no_1" onClick={() => this.setReminders('revoke')}><p>NO</p></div>
                                <div className="yes_1" onClick={() => this.setReminders('enable')}><p>YES</p></div>
                            </div>
                        </div>
                        <div className="option">
                            <div className="setting_description"><p>Stay signed-in</p></div>
                            <div className="select_btn">
                                <div className="no_2" onClick={() => this.setSession('no')}><p>NO</p></div>
                                <div className="yes_2" onClick={() => this.setSession('yes')}><p>YES</p></div>
                            </div>
                        </div>
                        <div className="option">
                            <div className="setting_description"><p>Clear local history</p></div>
                            <div className="select_btn">
                                <div className="no_3" onClick={(e) => this.ifSet(false, '.no_3', 3)}><p>NO</p></div>
                                <div className="yes_3" onClick={() => this.clearHistory()}><p>YES</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;
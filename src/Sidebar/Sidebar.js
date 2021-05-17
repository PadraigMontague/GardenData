import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import BrowserState from '../LocalstorageState/BrowserState';
import { Redirect } from 'react-router-dom';

class sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.browserState = new BrowserState();
        this.user_data = JSON.parse(this.browserState.getBrowserState('user_data'));
        this.username = this.user_data != undefined ? this.user_data.username : 'Unauthorised';
    }

    hidesidebar = (e) => {
        if (e.target.className !== 'sidebar' && e.target.className !== 'sidebar_header'
            && e.target.className !== 'sidebar_tab' && e.target.className !== 'welcome' && e.target.className !== 'username') {
            document.querySelector('.sidebar').style.width = "0%";
            document.querySelector('.sidebar_btn').style.margin = "0%";
        }
        if (e.target.className === 'sidebar_btn') {
            this.displaySidebar();
        }
    }

    displaySidebar = () => {
        document.querySelector('.sidebar').style.width = "70%";
        document.querySelector('.sidebar_btn').style.marginLeft = "70%";
    }

    logout = () => {
        this.browserState.removeBrowserState('user_data');
    }

    render() {
        if (this.browserState.getBrowserState('user_data') != undefined) {
            return (
                <div>
                    <button className="sidebar_btn"></button>
                    <div className="sidebar">
                        <div className="sidebar_header">
                            <p className="welcome">Welcome</p>
                            <p className="username">{this.username}</p>
                        </div>
                        <div className="sidebar_tab_heading"><p>Need to submit data?</p></div>
                        <Link className="home" to="/sowingForm"><div className="sidebar_tab"><p>Sowing data</p></div></Link>
                        <Link className="home" to="/plantingForm"><div className="sidebar_tab"><p>Planting data</p></div></Link>
                        <Link className="home" to="/harvestingForm"><div className="sidebar_tab"><p>Harvesting data</p></div></Link>
                        <Link className="home" to="/pestForm"><div className="sidebar_tab"><p>Pest/Disease data</p></div></Link>
                        <div className="sidebar_tab_heading"><p>Need to view data?</p></div>
                        <Link className="home" to="/view-data"><div className="sidebar_tab"><p>Weekly data</p></div></Link>
                        <Link className="home" to="/view-pest-data"><div className="sidebar_tab"><p>Pest/Disease data</p></div></Link>
                        <Link className="home" to="/settings"><div className="sidebar_tab"><p>Settings</p></div></Link>
                        <Link className="home" to="/"><div className="sidebar_tab" onClick={this.logout}><p>Logout</p></div></Link>
                    </div>
                </div>
            );
        } else {
            return (
                <Redirect to={{ pathname: '/' }} />
            );
        }
    }
}


export default sidebar;

import React from 'react';
import "./Activity.css";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoginAction } from '../Actions/loginAction';
import BrowserState  from '../LocalstorageState/BrowserState';

class Activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            activity: ''
        });

        this.Sidebar = new Sidebar();
        this.bstate = new BrowserState();
    }

    componentDidMount() {
        if (this.props.login === null) {
            if (this.bstate.getBrowserState('user_data') != undefined){
                this.props.LoginAction(this.bstate.getBrowserState('user_data'));
            } else {
                console.log('User is not logged in');
            }
        }
    }

    render() {
        return (
            <div onClick={(e) => { this.Sidebar.hidesidebar(e) }}>
                <Sidebar />
                <div className="activityWrapper">
                    <div className="miniNav">
                        <div className="filler"></div>
                    </div>
                    <div className="activityHeader">
                        <div className="divOne">
                            <p>Choose a Activity</p>
                        </div>
                        <div className="divTwo"></div>
                    </div>
                    <div className="ActivityTabWrapper">
                        <div className="ActivityTabs">
                            <Link className="activity" to="/sowingForm"><div className="activity_icon_sowing"></div><div className="activity_description"><p>Sowing</p></div></Link>
                            <Link className="activity" to="/plantingForm"><div className="activity_icon"></div><div className="activity_description"><p>Planting</p></div></Link>
                        </div>
                        <div className="ActivityTabs">
                            <Link className="activity" to="/harvestingForm"><div className="activity_icon_harnesting"></div><div className="activity_description"><p>Harvesting</p></div></Link>
                            <Link className="activity" to="/pestForm"><div className="activity_icon_pest"></div><div className="activity_description"><p>Pests</p></div></Link>
                        </div>
                        <div className="ActivityTabs">
                            <Link className="activity" to="/ConnectDevice"><div className="activity_icon_connect"></div><div className="activity_description"><p>Connect Device</p></div></Link>
                            <Link className="activity" to="/home"><div className="activity_icon_watering"></div><div className="activity_description"><p>Watering</p></div></Link>
                        </div>
                    </div>
                </div>
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
    return bindActionCreators({ LoginAction: LoginAction }, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(Activity);
import React from "react";
import './navigation.css';
import { BrowserRouter as Router, Route, Switch, Link, BrowserRouter, withRouter } from 'react-router-dom';
import Dashboard from "../Dashboard/dashboard";
import LoginForm from "../login/App";
import Register from "../Register/Register";
import Reminder from "../Reminder/Reminder";
import ReminderForm from "../FormComponents/ReminderForm/ReminderForm";
import Activity from "../Activity/Activity";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import SowingForm from "../FormComponents/SowingForm/SowingForm";
import PlantingForm from "../FormComponents/PlantingForm/PlantingForm";
import HarvestingForm from "../FormComponents/HarvestingForm/HarvestingForm";
import PestForm from "../FormComponents/PestForm/PestForm";
import ViewData from "../ViewData/ViewData";
import { createStore } from 'redux';
import allReducers from '../Reducers/allReducers';
import { Provider } from 'react-redux';
import Settings from "../SettingsComponent/Settings";
import ConnectDevice from "../ConnectDevice/ConnectDevice";
import Viewpest from "../ViewPestData/Viewpest";
import DataTab from "../DataTab/DataTab";

const store = createStore(allReducers);

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    <TransitionGroup>
                        <CSSTransition
                            key={this.props.location.key}
                            timeout={300}
                            classNames="page-fade"
                        >
                            <Switch location={this.props.location}>
                                <Route exact path="/">
                                    <LoginForm />
                                </Route>
                                <Route exact path="/register">
                                    <Register />
                                </Route>
                                <Route exact path="/home">
                                    <Dashboard />
                                </Route>
                                <Route exact path="/create-reminder">
                                    <ReminderForm />
                                </Route>
                                <Route exact path="/reminder">
                                    <Reminder />
                                </Route>
                                <Route exact path="/sowingForm">
                                    <SowingForm />
                                </Route>
                                <Route exact path="/plantingForm">
                                    <PlantingForm />
                                </Route>
                                <Route exact path="/harvestingForm">
                                    <HarvestingForm />
                                </Route>
                                <Route exact path="/pestForm">
                                    <PestForm />
                                </Route>
                                <Route exact path="/activities">
                                    <Activity />
                                </Route>
                                <Route exact path="/view-data">
                                    <ViewData />
                                </Route>
                                <Route exact path="/view-pest-data">
                                    <Viewpest />
                                </Route>
                                <Route exact path="/settings">
                                    <Settings />
                                </Route>
                                <Route exact path="/ConnectDevice">
                                    <ConnectDevice />
                                </Route>
                                <Route exact path="/DataTab">
                                    <DataTab />
                                </Route>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                    <div className="navigation">
                        <Link className="home" to="/home"></Link>
                        <Link className="activities" to="/activities"></Link>
                        <Link className="reminder" to="/reminder"></Link>
                    </div>
                </div>
            </Provider>
        );
    }
}
export default withRouter(Navigation);
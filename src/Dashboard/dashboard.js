import React from 'react';
import './dashboard.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoginAction } from '../Actions/loginAction';
import { withRouter } from 'react-router-dom';

import Barchart from '../BarChart/Barchart';
import Statslider from '../StatSlider/Statslider';
import PlantingForm from '../FormComponents/PlantingForm/PlantingForm';
import SowingForm from '../FormComponents/SowingForm/SowingForm';
import HarvestingForm from '../FormComponents/HarvestingForm/HarvestingForm';
import Sidebar from "../Sidebar/Sidebar";

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.Sidebar = new Sidebar();
    }

    ifLoggedIn = () => {
        if (this.state.loggedIn) {
            console.log('Logged IN');
        } else {
            console.log('Not Logged IN');
        }
    }

    componentDidMount() {
        if (this.props.location.pathname === '/') {
            document.querySelector('.navigation').style.display = 'none';
        } else {
            document.querySelector('.navigation').style.display = 'flex';
        }
    }

    actionTab = (tab) => {
        switch (tab) {
            case 'SowingForm':
                return (<SowingForm />);
            case 'PlantingForm':
                return (<PlantingForm />);
            case 'HarvestingForm':
                return (<HarvestingForm />);
            default:
                console.log('No action tabs have been clicked!');
        }
    }

    

    render() {
        return (
            <div className="dashboardWrapper" onClick={(e) => { this.Sidebar.hidesidebar(e) }}>
                <Sidebar />
                <Barchart />
                <Statslider />
            </div>
        )
    };
}

function mapStateToProps(state) {
    return {
        login: state.login
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ LoginAction: LoginAction }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(withRouter(Dashboard));
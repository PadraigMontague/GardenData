import React from 'react';
import './Statslider.css';
import { Link } from 'react-router-dom';
import { DeviceDataAction } from '../Actions/deviceDataAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Statslider extends React.Component {

    constructor(props) {
        super(props);
        this.deviceData = this.props.DeviceDataAction();
    }

    componentDidMount() {
        this.props.deviceData.forEach((element, index) => {
            let classID = + index + 1;
            if (this.getNumberOfDigit(element.value) === 4 ||this.getNumberOfDigit(element.value) === 5) {
                document.querySelector('.tile-value-' + classID).style.fontSize = "2rem";
                document.querySelector('.tile-value-' + classID).style.marginTop = "1.25rem";
                document.querySelector('.tile-value-' + classID).style.marginBottom = "1.25rem";
            } else if (this.getNumberOfDigit(element.value) > 5) {
                document.querySelector('.tile-value-' + classID).style.fontSize = "1.5rem";
                document.querySelector('.tile-value-' + classID).style.marginTop = "1.5rem";
                document.querySelector('.tile-value-' + classID).style.marginBottom = "1.5rem";
            }
        });
    }

    getNumberOfDigit = (data) => {
        let result = data.toString();
        return result.length;
    }

    render() {
        return (
            <div className="horizontal-scroll">
                <div>
                    <p className="tile-title-1">{this.props.deviceData[0].type}</p>
                    <p className="tile-value-1">{this.props.deviceData[0].value}</p>
                    <p className="tile-value-Metric">{this.props.deviceData[0].metric}</p>
                </div>
                <div>
                    <p className="tile-title-2">{this.props.deviceData[1].type}</p>
                    <p className="tile-value-2">{this.props.deviceData[1].value}</p>
                    <p className="tile-value-duration">{this.props.deviceData[1].metric}</p>
                </div>
                <div>
                    <p className="tile-title-3">{this.props.deviceData[2].type}</p>
                    <p className="tile-value-3">{this.props.deviceData[2].value}</p>
                    <p className="tile-value-duration">{this.props.deviceData[2].metric}</p>
                </div>
                <div>
                    <Link className="addData" to="/DataTab">+</Link>
                </div>
                <div>
                    <Link className="addData" to="/DataTab">+</Link>
                </div>
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        deviceData: state.deviceData
    }
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ DeviceDataAction: DeviceDataAction }, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(Statslider);
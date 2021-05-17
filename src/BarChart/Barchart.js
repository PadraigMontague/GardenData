import React from 'react';
import './Barchart.css';

class Barchart extends React.Component {
    constructor(props) {
        super(props);
    }

    changeChart = (e) => {
        if (e.target.className === 'm1') {
            document.querySelector('.mode1').style.display = "block";
            document.querySelector('.mode2').style.display = "none";
            document.querySelector('.mode3').style.display = "none";
        } else if (e.target.className === 'm2') {
            document.querySelector('.mode1').style.display = "none";
            document.querySelector('.mode2').style.display = "block";
            document.querySelector('.mode3').style.display = "none";
        } else if (e.target.className === 'm3') {
            document.querySelector('.mode1').style.display = "none";
            document.querySelector('.mode2').style.display = "none";
            document.querySelector('.mode3').style.display = "block";
        }
    }


    render() {
        return (
            <div className="data-visualistion">
                <div className="mode1">Water Usage</div>
                <div className="mode2">Temperature</div>
                <div className="mode3">Nutrient Usage</div>
                <div className="data-graph">
                    <div className="day-mon"></div>
                    <div className="day-tues"></div>
                    <div className="day-wed"></div>
                    <div className="day-thur"></div>
                    <div className="day-fri"></div>
                    <div className="day-sat"></div>
                    <div className="day-sun"></div>
                </div>
                <div className="days">
                    <div>M</div>
                    <div>T</div>
                    <div>W</div>
                    <div>T</div>
                    <div>F</div>
                    <div>S</div>
                    <div>S</div>
                </div>
                <div className="button-slider"  onClick={(e) => { this.changeChart(e) }}>
                    <button className="m1"></button>
                    <button className="m2"></button>
                    <button className="m3"></button>
                </div>
            </div>
        );
    }
}

export default Barchart;

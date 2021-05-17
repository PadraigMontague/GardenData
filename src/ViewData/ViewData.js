import React from 'react';
import './ViewData.css';
import Sidebar from "../Sidebar/Sidebar";

let months = [
    {
        name: 'January',
        no_days: 31
    },
    {
        name: 'February',
        no_days: 28
    },
    {
        name: 'March',
        no_days: 31
    },
    {
        name: 'April',
        no_days: 30
    },
    {
        name: 'May',
        no_days: 31
    },
    {
        name: 'June',
        no_days: 30
    },
    {
        name: 'July',
        no_days: 31
    },
    {
        name: 'August',
        no_days: 31
    },
    {
        name: 'September',
        no_days: 30
    },
    {
        name: 'October',
        no_days: 31
    },
    {
        name: 'November',
        no_days: 30
    },
    {
        name: 'December',
        no_days: 31
    }
];
class ViewData extends React.Component {
    constructor(props) {
        super(props);
        this.Sidebar = new Sidebar();
        this.firstclick = null;
        this.secondclick = null;
        this.firstID = null;
        this.lastID = null;
        this.count = 0;
        this.currentMonth = new Date();
        this.selectedMonth = parseInt(this.currentMonth.getMonth());

        this.state = ({
            month: parseInt(this.currentMonth.getMonth()),
        });
    }



    modifyDateStyle() {
        document.querySelector('.' + this.firstclick).style.backgroundColor = '#4CAF50';
        document.querySelector('.' + this.firstclick).style.borderRadius = "30px";
        document.querySelector('.' + this.secondclick).style.backgroundColor = '#F44336';
        document.querySelector('.' + this.secondclick).style.borderRadius = "30px";
    }

    revertDateStyle() {
        document.querySelector('.' + this.firstclick).style.backgroundColor = '';
        document.querySelector('.' + this.firstclick).style.borderRadius = "";
        if (this.secondclick !== null) {
            document.querySelector('.' + this.secondclick).style.backgroundColor = '';
            document.querySelector('.' + this.secondclick).style.borderRadius = "";
        }
    }

    printEle(e) {
        let currentElement = e.target.className;
        if (currentElement !== "cal-content") {
            let mod = currentElement.split("date").pop();
            if (this.count === 2) {
                this.revertDateStyle();
                this.firstclick = null;
                this.secondclick = null;
                this.count = 0;
            }
            if (this.firstclick === null) {
                this.firstID = currentElement.split("date").pop();
                this.firstclick = currentElement;
                this.count = this.count + 1;
            } else {
                this.lastID = currentElement.split("date").pop();
                if (parseInt(this.firstID) > parseInt(this.lastID)) {
                    console.log('Please select valid dates');
                    this.count = this.count + 1;
                } else {
                    this.secondclick = currentElement;
                    this.count = this.count + 1;
                    this.modifyDateStyle();
                }
            }
        }
    }

    setMonth(num) {
        this.selectedMonth = this.selectedMonth + num;

        if (this.selectedMonth < 0) {
            this.selectedMonth = this.selectedMonth + 1;
        } else if (this.selectedMonth >= 12) {
            this.selectedMonth = this.selectedMonth - 1;
        } else {
            this.setState({
                month: this.selectedMonth
            });
        }
    }

    getDays(month) {
        switch (month) {
            case 0:
                return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
                break;
            case 1:
                return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
                break;
            case 2:
                return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
                break;
            case 3:
                return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
                break;
            case 4:
                return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
                break;
            case 5:
                return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
                break;
            case 6:
                return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
                break;
            case 7:
                return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
                break;
            case 8:
                return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
                break;
            case 9:
                return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
                break;
            case 10:
                return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 30];
                break;
            case 11:
                return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
                break;
        }
    }

    render() {
        return (
            <div onClick={(e) => { this.Sidebar.hidesidebar(e) }}>
                <Sidebar />
                <div className="container">
                    <div className="header">
                        <div className="tWrapper">View your <strong style={{ color: "#009688" }}>growing</strong> data</div>
                    </div>
                    <div className="calender">
                        <div className="cal-year-header"><div className="leftBtn" onClick={() => { this.setMonth(-1) }}>&laquo;</div><div>{months[this.state.month].name}</div><div className="rightBtn" onClick={() => { this.setMonth(1) }}>&raquo;</div></div>
                        <div className="cal-content" onClick={(e) => { this.printEle(e) }}>
                            {
                                this.getDays(this.selectedMonth).map((item, index) => (
                                    <div className={'date' + index} key={index}>
                                        {item}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="dataCharts">
                        <div className="legend">
                            <div className="legendTab">
                                <div className="dataColour1"></div>
                                <div className="sowingLegend">
                                    <p>Sowing data</p>
                                </div>
                            </div>
                            <div className="legendTab">
                                <div className="dataColour2"></div>
                                <div className="plantingLegend">
                                    <p>Planting data</p>
                                </div>
                            </div>
                            <div className="legendTab">
                                <div className="dataColour3"></div>
                                <div className="harvestingLegend">
                                    <p>Harvest data</p>
                                </div>
                            </div>
                        </div>
                        <div className="chart">
                            <div className="datadays">
                                <div>M</div>
                                <div>T</div>
                                <div>W</div>
                                <div>T</div>
                                <div>F</div>
                                <div>S</div>
                                <div>S</div>
                            </div>
                            <div className="data">
                                <div className="mon">
                                    <div className="sowArea"></div>
                                    <div className="plantArea"></div>
                                    <div className="harvestArea"></div>
                                </div>
                                <div className="tue">
                                    <div className="sowArea"></div>
                                    <div className="plantArea"></div>
                                    <div className="harvestArea"></div>
                                </div>
                                <div className="wed">
                                    <div className="sowArea"></div>
                                    <div className="plantArea"></div>
                                    <div className="harvestArea"></div>
                                </div>
                                <div className="thurs">
                                    <div className="sowArea"></div>
                                    <div className="plantArea"></div>
                                    <div className="harvestArea"></div>
                                </div>
                                <div className="fri">
                                    <div className="sowArea"></div>
                                    <div className="plantArea"></div>
                                    <div className="harvestArea"></div>
                                </div>
                                <div className="sat">
                                    <div className="sowArea"></div>
                                    <div className="plantArea"></div>
                                    <div className="harvestArea"></div>
                                </div>
                                <div className="sun">
                                    <div className="sowArea"></div>
                                    <div className="plantArea"></div>
                                    <div className="harvestArea"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewData;
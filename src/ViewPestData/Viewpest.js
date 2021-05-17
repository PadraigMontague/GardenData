import React from 'react';
import './Viewpest.css';
import Sidebar from "../Sidebar/Sidebar";

class Viewpest extends React.Component {
    constructor(props) {
        super();
        this.Sidebar = new Sidebar();
        this.pestArr = [1,2,3,4,5,6,7,8,9,10];
    }


    render() {
        return (
            <div onClick={(e) => { this.Sidebar.hidesidebar(e) }}>
                <Sidebar />
                <div className="containerHeader">
                    <div className="divOne">
                        <p>View <strong style={{ color: "#009688" }}>Pests/Diseases</strong></p>
                    </div>
                    <div className="divTwo"></div>
                </div>
                <div className="containerBody">
                    {
                        this.pestArr.map((item, index) => (
                            <img className="dataContainer" src={require('../images/Placeholder.png')} loading="lazy" key={index} alt="PlantDiseaseImages"/>
                        ))
                    }
                </div>
            </div>
        )
    }

}

export default Viewpest;
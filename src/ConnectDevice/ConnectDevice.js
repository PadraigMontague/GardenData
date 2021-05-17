import React from 'react';
import "./ConnectDevice.css";
import Sidebar from "../Sidebar/Sidebar";

class ConnectDevice extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            api_choice: ''
        });

        this.Sidebar = new Sidebar();
    }
    handleChange = (event) => {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.formValidation(this.state);
    }

    formValidation = (state) => {
        if (state.plant_type === '' && state.date === '' && state.quantity === '') {
            alert('Please Complete All Fields');
        } else if (state.plant_type === undefined && state.date === undefined && state.quantity === undefined) {
            alert('Please Complete All Fields');
        } else if (state.plant_type === '' || state.plant_type === undefined) {
            alert('Please enter the plant type');
        } else if (state.date === '' || state.date === undefined) {
            alert('Please enter the harvest date');
        } else if (state.quantity === '' || state.quantity === undefined) {
            alert('Please enter the quantity');
        } else {
            alert('COMPLETED!!!');
        }
    }
    render() {
        return (
            <div onClick={(e) => { this.Sidebar.hidesidebar(e) }}>
                <Sidebar />
                <div className="formHeader">
                    <div className="titleWrapper">Lets get your device <strong style={{ color: "#009688" }}>setup</strong></div>
                </div>
                <form className="connectDevice_form" onSubmit={this.handleSubmit}>
                    <input type="text" name="apiConnection" placeholder="Api connection" onChange={this.handleChange}/>
                    <select>
                        <option defaultChecked>Select your device type</option>
                        <option>Raspberry Pi</option>
                        <option>Arduino</option>
                        <option>Other</option>
                    </select>
                    <label>Your API must have the same structure and data *</label>
                    <div className="SelectOptions">
                        <div className="OptionOne"></div>
                    </div>
                    <input type="submit" className="submit-button" />
                </form>
            </div>
        );
    }
}

export default ConnectDevice;
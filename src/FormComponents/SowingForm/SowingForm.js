import React from 'react';
import './SowingForm.css';
import Sidebar from "../../Sidebar/Sidebar";

class SowingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            event: 'Sowing',
            plant_type: '',
            date: '',
            quantity: ''

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

    sendData = (data) => {
        fetch('', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Data status');
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    }


    formValidation = (state) => {
        if (state.plant_type === '' && state.date === '' && state.quantity === '') {
            alert('Please Complete All Fields');
        } else if (state.plant_type === undefined && state.date === undefined && state.quantity === undefined) {
            alert('Please Complete All Fields');
        } else if (state.plant_type === '' || state.plant_type === undefined) {
            alert('Please enter the plant type');
        } else if (state.date === '' || state.date === undefined) {
            alert('Please enter the sowing date');
        } else if (state.quantity === '' || state.quantity === undefined) {
            alert('Please enter the quantity');
        } else {
            this.sendData(state);
            alert('COMPLETED!!!');
        }
    }

    render() {
        return (
            <div onClick={(e) => { this.Sidebar.hidesidebar(e) }}>
                <Sidebar />
                <div className="form_wrapper">
                    <div className="formHeader">
                        <div className="titleWrapper">Insert new <strong style={{ color: "#009688" }}>sowing</strong> data</div>
                    </div>
                    <form className="planting_form" onSubmit={this.handleSubmit}>
                        <input type="text" name="plant_type" placeholder="Plant Type" value={this.state.plant_type} onChange={this.handleChange} />
                        <input type="date" name="date" value={this.state.date} onChange={this.handleChange} />
                        <input type="number" name="quantity" placeholder="Quantity" value={this.state.quantity} onChange={this.handleChange} />
                        <input type="submit" className="submit-button" />
                    </form>
                </div>
            </div>
        )
    }
}

export default SowingForm;
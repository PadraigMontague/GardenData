import React from 'react';
import './PestForm.css';
import Sidebar from "../../Sidebar/Sidebar";

class PestForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            event: 'Pest',
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

    formValidation = (state) => {
        if (state.plant_type === '' && state.date === '' && state.quantity === '') {
            alert('Please Complete All Fields');
        } else if (state.plant_type === undefined && state.date === undefined && state.quantity === undefined) {
            alert('Please Complete All Fields');
        } else if (state.plant_type === '' || state.plant_type === undefined) {
            alert('Please enter the plant type');
        } else if (state.date === '' || state.date === undefined) {
            alert('Please enter the planting date');
        } else if (state.quantity === '' || state.quantity === undefined) {
            alert('Please enter the quantity');
        } else {
            alert('COMPLETED!!!');
        }
    }

    displayImage = (input) => {
        let reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('displayHere').src = e.target.result;
            document.getElementById('displayHere').style.display="block";
            document.querySelector('.uploadLabel').innerHTML="Replace Image";
        }
        reader.readAsDataURL(input.target.files[0]);
    }

    render() {
        return (
            <div onClick={(e) => { this.Sidebar.hidesidebar(e) }}>
                <Sidebar />
                <div className="form_wrapper">
                    <div className="formHeader">
                        <div className="titleWrapper">Insert new <strong style={{ color: "#009688" }}>pest</strong> data</div>
                    </div>
                    <form className="pest_form" onSubmit={this.handleSubmit}>
                        <div className="imageContainer">
                            <input id="upload" type="file" accept="image/" hidden onChange={(e) => { this.displayImage(e) }}></input>
                            <label className="uploadLabel" htmlFor="upload">Choose image</label>
                            <img id="displayHere" style={{display: "none"}} src="#" width="190px" height="190px" alt="Selected" />
                        </div>
                        <input type="submit" className="submit-button" />
                    </form>
                </div>
            </div>
        )
    }
}

export default PestForm;
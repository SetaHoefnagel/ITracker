import React, { Component } from "react";
import tracker_logo from './../files/images/itracker_logo.png'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner-svg"

class Parcel extends Component {


  constructor(prop){
    super(prop);

    console.log(prop);

    this.state = {
      code: '',
      requestingCode: false,
      errorMessage: '',
      parcel: null,
    }
    
    this.changeStateValue = this.changeStateValue.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  changeStateValue(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      errorMessage: '',
    });
  }

  submitForm(event){
    event.preventDefault();
    
    this.setState({requestingCode: true});
    fetch(`//localhost:8000/api/parcels/SDHL_${this.state.code}`).then( resp => {
      resp.json().then(json => {
        if (json.statusCode == 200)
          this.setState({parcel: json}) 
        else 
          this.setState({errorMessage: json.detail}) 

      }).catch( ex => this.setState({errorMessage: ex.message}) );
      console.log();
      this.setState({requestingCode: false});

    }).catch(ex => {
      console.log(ex);
      this.setState({errorMessage: ex.message});
    })
  }

  render() {
    return (
      <div className="card-body">
        <p>
          Trackers zijn korte codes waarmee u uw pakketten kunt volgen. Deze codes ontvangt u bij het bestellen van een product.  
        </p>

      </div>
    );
  }
}

export default Parcel;

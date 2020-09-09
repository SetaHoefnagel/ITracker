import React, { Component } from "react";
import tracker_logo from './../files/images/itracker_logo.png'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner-svg"
import { Redirect } from 'react-router-dom'
import './../scss/Tracker.scss';


class Tracker extends Component {
  constructor(prop){
    super(prop);
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
    fetch(`//localhost:8000/api/parcels/SDHL_${this.state.code}`)
    .then( resp => {
      return resp.json();
    } )
    .then(json => {
      if (json.detail === undefined)
        this.setState({parcel: json}) 
      else 
        this.setState({errorMessage: json.detail}) 
      console.log(json);
      console.log(this.state.parcel);
      return json;
    })
    
    .catch(ex => {
      console.log(ex);
      this.setState({errorMessage: ex.message});
    });

    this.setState({requestingCode: false})
  }

  render() {
    return (
            <div className="card-body">
              {this.state.parcel != null ? <Redirect to={{ pathname:`/parcel/${this.state.code}`, state: {parcel: this.state.parcel} }} push /> : ""}
              <p>
                Trackers zijn korte codes waarmee u uw pakketten kunt volgen. Deze codes ontvangt u bij het bestellen van een product.  
              </p>

              <form className="form" onSubmit={this.submitForm}>
                <div className="form-group">
                  <label>SDHL code: </label>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">SDHL_</div>
                    </div>
                    <input disabled={ this.state.requestingCode ? "disabled" : ""} onInput={this.changeStateValue} className="form-control" maxLength="16" minLength="16" type="text" name="code" placeholder="XXXXXXXXXXXXXXXX" />

                    <div className="input-group-append">
                      {this.state.requestingCode ?
                      <span className="input-group-text">
                        <Loader
                          type="Bars"
                          color="#222"
                          height={22}
                          width={22}
                          timeout={30000} //3 secs
                          svgClass="my-custom-class"
                        />
                      </span> : 
                    <span className="input-group-text">{this.state.code.length}/16</span> }
                    </div>
                  </div>
                  <div className="form-group">
                  {this.state.errorMessage != '' ? 
                    <span className="small-text text-danger">{ this.state.errorMessage }</span> : ""}

                  </div>
                </div>
                <div className="form-group">
                  <input type="submit" value="zoeken" className="btn btn-success" />
                </div>
              </form>
            </div>
    );
  }
}

export default Tracker;

import React, { Component } from "react";
import tracker_logo from './../files/images/itracker_logo.png'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner-svg"
import { Redirect } from "react-router-dom";

class Parcel extends Component {


  constructor(prop){
    super(prop);
    this.fetchParcel = this.fetchParcel.bind(this);


    this.state = {
      code: this.props.match.params.id,
      parcel: this.props.location.state !== undefined ? this.props.location.state.parcel : undefined,
    }

    if(this.props.location.state === undefined){
      this.fetchParcel();
    }
    
  }

  fetchParcel(){
    fetch(`//localhost:8000/api/parcels/SDHL_${this.state.code}`)
    .then( resp => {
      return resp.json();
    } )
    .then(json => {
      if (json.detail === undefined)
        this.setState({parcel: json}) 
      else 
        this.setState({parcel: null}) 
      return json;
    })
    
    .catch(ex => {
      console.log(ex);
      this.setState({parcel: null});
    });

  }

  render() {
    return (
      <div className="card-body">
        {this.state.parcel === null ? <Redirect to='/' /> : ""}
        <p>
          Trackers zijn korte codes waarmee u uw pakketten kunt volgen. Deze codes ontvangt u bij het bestellen van een product.  
        </p>

      </div>
    );
  }
}

export default Parcel;

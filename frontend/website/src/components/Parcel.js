import React, { Component } from "react";
import tracker_logo from './../files/images/itracker_logo.png'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner-svg"
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './../scss/Parcel.scss';

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
      <div className="card-body parcel">
        {this.state.parcel === null ? <Redirect to='/' /> : ""}
        <p>
          Hieronder staan alle gegevens die van belang zijn voor de voortgang van de verzending van uw product. 
        </p>

        <div className="parcel-info">
          <h2>Shipping status:</h2>
          <div className="parcel-status">

            <div className="status active">
              <FontAwesomeIcon icon={'store'} size="3x" />
              <span class="tooltiptext">Het pakket wordt in de winkel gereed gemaakt voor de verzending. </span>
            </div>

            <div className="line" />
            <div className="status">
              <FontAwesomeIcon icon={'truck'} size="3x" />
              <span class="tooltiptext">Het pakket wordt verzonden naar het distributiecentrum. </span>
            </div>

            <div className="line" />
            <div className="status">
              <FontAwesomeIcon icon={'warehouse'} size="3x" />
              <span class="tooltiptext">Het pakket wordt gesorteerd. </span>
            </div>

            <div className="line" />
            <div className="status">
              <FontAwesomeIcon icon={'box'} size="3x" />
              <span class="tooltiptext">Het pakket ligt klaar voor verzending. </span>
            </div>

            <div className="line" />
            <div className="status">
              <FontAwesomeIcon icon={'shipping-fast'} size="3x" />
              <span class="tooltiptext">Het pakket is onderweg naar het bezorgadres. </span>
            </div>

            <div className="line" />
            <div className="status">
              <FontAwesomeIcon icon={'home'} size="3x" />
              <span className="tooltiptext">Het pakket is aangenomen bij het bezoradres. </span>
            </div>
          </div>
          <hr />
          <h2>Tekenen voor ontvangst</h2>
          <p>
            <FontAwesomeIcon icon={'signature'} size="2x" />
            &nbsp; Voor dit pakket moet {this.state.parcel.signature_required ? <span style={{color:'green',}}>wel</span> : <span style={{color:'red'}}>niet</span>} getekend worden. 
          </p>
          <hr />
          <h2>Ontvangst gegevens</h2>
          <p>Volledige naam: {this.state.parcel.recipient.full_name}</p>
          <p>Adres*: {this.state.parcel.recipient.address}</p>
          <p>Postcode*: {this.state.parcel.recipient.zip}</p>
          <p>Telefoonnummer*: {this.state.parcel.recipient.telephone}</p>
          <p>*Deze velden zijn niet volledig voor uw eigen veiligheid. De bezorger heeft de volledige gegevens. </p>
          <p>Mochten een van de gegevens niet kloppen, neem dan direct contact op met de bezorger. Deze kan hier rekening mee houden</p>
        </div>
      </div>

    );
  }
}

export default Parcel;

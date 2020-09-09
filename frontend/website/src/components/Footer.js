import React, { Component } from "react";
import tracker_logo from './../files/images/itracker_logo.png'
import sdhl_logo from './../files/images/sdhl_logo.png'
import './../scss/Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="container-fluid bg-secondary footer">
        <div className="row">
          <div className="col-sm-12">
          <p>
            <img className="inline-logo" src={tracker_logo} alt="ITracker"/>
            &nbsp; is een product van &nbsp;
            <img className="inline-logo" src={sdhl_logo} alt="Sneller Dan Het Licht"/>
            &nbsp;&copy; 2020
          </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

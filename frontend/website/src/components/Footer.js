import React, { Component } from "react";
import tracker_logo from './../files/images/itracker_logo.png'
import sdhl_logo from './../files/images/sdhl_logo.png'

class Footer extends Component {
  render() {
    return (
      <footer className="container-fluid bg-secondary">
        <div className="row">
          <div className="col-sm-12 col-md-2">
          <p>
            <img className="inline-logo" src={tracker_logo} alt="ITracker"/>
            &copy; 2020
            <img className="inline-logo" src={sdhl_logo} alt="Sneller Dan Het Licht"/>
          </p>
          </div>
          <div className="col-sm-12 col-md-10 ">
            <nav className="navbar">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item"><a href="/">Home</a></li>
                <li className="nav-item"><a href="/stuff">Stuff</a></li>
                <li className="nav-item"><a href="/contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

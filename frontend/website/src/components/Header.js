import React, { Component } from "react";
import tracker_logo from './../files/images/itracker_logo.png'
import sdhl_logo from './../files/images/sdhl_logo.png'
import './../scss/Header.scss';

import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";


class Header extends Component {
  render() {
    return (
      <header className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <h1><img className="logo" src={tracker_logo} alt="ITracker"/></h1>
          </div>
          <div className="col-sm-3 offset-sm-6">
            <Link to="/about" >
              <img className="logo" src={sdhl_logo} alt="Sneller Dan Het Licht"/>
            </Link>
          </div>
          {/* <div className="col-sm-12 col-md-10 ">
            <nav className="navbar navbar-expand-lg navbar-light">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                  </li>
                </ul>
              </div>
            </nav>
          </div> */}
        </div>
      </header>
    );
  }
}

export default Header;

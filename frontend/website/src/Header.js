import React, { Component } from "react";
import tracker_logo from './files/images/itracker_logo.png'

class Header extends Component {
  render() {
    return (
      <header class="container-fluid">
        <div class="row">
          <div class="col-sm-12 col-md-2">
            <h1><img class="logo" src={tracker_logo} alt="ITracker"/></h1>
          </div>
          <div class="col-sm-12 col-md-10 ">
<nav class="navbar navbar-expand-lg navbar-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
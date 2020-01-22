import React, { Component } from "react";
import tracker_logo from './files/images/itracker_logo.png'
import sdhl_logo from './files/images/sdhl_logo.png'

class Footer extends Component {
  render() {
    return (
      <footer class="container-fluid bg-secondary">
        <div class="row">
          <div class="col-sm-12 col-md-2">
          <p>
            <img class="inline-logo" src={tracker_logo} alt="ITracker"/>
            &copy; 2019
            <img class="inline-logo" src={sdhl_logo} alt="Sneller Dan Het Licht"/>
          </p>
          </div>
          <div class="col-sm-12 col-md-10 ">
            <nav class="navbar">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item"><a href="/">Home</a></li>
                <li class="nav-item"><a href="/stuff">Stuff</a></li>
                <li class="nav-item"><a href="/contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
import React from 'react';
import logo from './files/images/logo.svg';
import './App.scss';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Tracker from './components/Tracker.js';
import Parcel from './components/Parcel.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from './transitions'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <main className="tracker">
        <div className="container">
          <div className="card bg-warning text-white">
            <div className="card-header">
              <h2 className="card-title">Tracker</h2>
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a className="nav-link card-text bg-dark text-white" href="/">Search</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled card-text text-white" href="#">Parcel</a>
                </li>
              </ul>
            </div>
            <Route render={({ location }) => {
              const { pathname, key } = location;

              return (
                <TransitionGroup component={null}>
                  <Transition
                    key={key}
                    appear={true}
                    onEnter={(node, appears) => play(pathname, node, appears)}
                    onExit={(node, appears) => exit(node, appears)}
                    timeout={{enter: 750, exit: 150}}
                  >
                    <Switch location={location}>
                      <Route exact path="/" component={Tracker}/>
                      <Route exact path="/parcel/:id" component={Parcel}/>
                    </Switch>
                  </Transition>
                </TransitionGroup>
              )
            }}/>
          </div>
        </div>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

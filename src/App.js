import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavBar from './containers/navigation/NavBar';
import Footer from './containers/navigation/Footer';
import Routes from "./Routes";

/*Sticky footer flexbox: https://css-tricks.com/couple-takes-sticky-footer/*/

class App extends Component {
  render() {
    return (
      <div className="App">
      	<div style={{flex: '1 0 auto'}}>
	        <NavBar />
	        <Routes />
        </div>
        <div style={{flexShrink: 0}}>
        	<Footer />
        </div>
      </div>
    );
  }
}

export default App;

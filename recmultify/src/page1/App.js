import React, { Component } from 'react';
import { Router, Route, Link, hashHistory } from 'react-router'
import './App.css';
import picImg from '../img/pic-beauty.jpg'
class App extends Component {
  routerChange () {
    window.location.href="../page2/page2.html"
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to App1, and say hello</h2>
          <img src={picImg} alt="" />
          <button onClick={() => this.routerChange()}>click me</button>
          {/* <a href="../page2/page2.html">a标签跳转</a> */}
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
export default App;

import React, { Component } from "react";
import Countdown from "./Countdown";
import './Countdown.css'
class Timer extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-title">Time Left</div>
        <div className="Timers">
          <Countdown />
        </div>
      </div>
    );
  }
}
export default Timer;
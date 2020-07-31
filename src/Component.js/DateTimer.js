// Pseudocode
// Let Create class component --> DateTimer
// We nned to state --> runningtime and status
// status tell timer mode pause or unpause
// runningtime indicates runningtime
//Create two buttons start/pause and rerset
// Create event function handleEvent --> which handle pause and unpause
// Setup method to count running time ---> save start time by collecting a diffrence from dateNow - running time
// Set up method Running time by Dat.Now - Starting time
// Set up reset function by updating state
// Set up Day,Hours, Month and second calculation
//Don't put millisecong which vibrating display continuously

import React, { Component } from "react";

var days = "";
var hours = "";
var minutes = "";
var seconds = "";
var milliSeconds = "";

export default class extends Component {
  constructor(props) {
    super(props);
    this.handleEvent = this.handleEvent.bind(this);
    this.state = {
      status: false,
      runningTime: 0,
      timeDisplay: "",
    };
  }
  handleEvent = () => {
    const { status } = this.state;
    if (status) {
      clearInterval(this.timer);
      this.setState({ status: false });
    } else {
      this.setState();
      const startTime = Date.now() - this.state.runningTime;
      this.timer = setInterval(() => {
        this.setState({
          runningTime: Date.now() - startTime,
          status: true,
          timeDisplay: days + ":" + hours + ":" + minutes + ":" + seconds,
        });
      }, 10);
    }
  };
  handleReset = () => {
    clearInterval(this.timer);
    this.setState({
      runningTime: 0,
      status: false,
      timeDisplay: "",
    });
  };

  render() {
    days = Math.floor(this.state.runningTime / (1000 * 60 * 60 * 24));
    hours = Math.floor((this.state.runningTime / (1000 * 60 * 60)) % 24);
    minutes = Math.floor((this.state.runningTime / 1000 / 60) % 60);
    seconds = Math.floor((this.state.runningTime / 1000) % 60);
    milliSeconds = Math.floor((this.state.runningTime / 100) % 10);
    return (
      <div>
        <button onClick={this.handleEvent}>Timer</button>
        <button onClick={this.handleReset}>Reset</button>
        <h1>{this.state.timeDisplay}</h1>
      </div>
    );
  }
}

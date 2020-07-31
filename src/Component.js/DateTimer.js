import React, { Component } from "react";

export default class extends Component {
  constructor(props) {
    super(props);
    this.handleEvent=this.handleEvent.bind(this)
    this.state = {
      status: false,
      runningTime: 0,
    };
  }
  handleEvent = () => {
    const {status } = this.state;
    if (status) {
          clearInterval(this.timer);
          this.setState({status:false})
    }else {
        const startTime = Date.now() - this.state.runningTime;
        this.timer = setInterval(() => {
          this.setState({ runningTime: Date.now() - startTime, status: true });
          
        },1000);
      } 
    
  }
  handleReset=()=>{
      clearInterval(this.timer);
      this.setState({
          runningTime : 0,
          status : false
      })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleEvent}>Click</button>
        <button onClick={this.handleReset}>Reset</button>
        <h1>{Math.floor(this.state.runningTime / 1000)}</h1>

        
      </div>
    );
  }
}

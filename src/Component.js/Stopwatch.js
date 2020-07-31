// Here we are going to make a Stop watch
// Stopwatch has teo state , counter  and pause so we use class component
//In constructor, Defined two state counter =0, and pause= false a boolean value
// We need three buttons , Start, Pause and Reset  which we need to display on render.
//onClick start button we need to call function which contain setinterval fuction --> give function name Startcount and update state pause: false
//onCliock pause button, we need to clear setInterval by using function clearInterval and also update state pause : true
//onClick reset button, we need to stopfunction setinterval and also update state count:0 and pause: true
// Dispay count value by using <h1> element



import React, { Component } from 'react'
export default class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
          counter: 0,
          paused: true
        }
      }
      startCount = () => {
            //increments the counter from state in constructor by 1; need to use setInterval; adding this.countInterval equal to setInterval to display it properly? lets see
            this.countInterval = setInterval(() => {
                this.setState({
                counter: this.state.counter + 1,
                paused: false,
            })
        }, 1000)
        //test to see if works
        console.log(this.countInterval);
      }
      pauseCount = () => {
        //got it by referencing my boxcolor toggle. yay! took about 4 tries lol :)
        if (this.state.paused === false) {
            this.setState({
                paused: true
            })
            clearInterval(this.countInterval)
    }   else {
        this.countInterval = setInterval(() => {
            this.setState({
            counter: this.state.counter + 1,
            paused: false,
        })
    }, 1000)
    }
}
      //going to try another JS method now
      restartCount = () => {
          this.setState({
              counter: 0,
              paused: true
          })
       clearTimeout(this.countInterval)
      }
    render() {
        return (
            <div>
                <h1>Time : {this.state.counter}</h1>
              <div className='btn-grid'>
                <button className='button' onClick= {this.startCount}>Start</button>
                <button className='button' onClick= {this.pauseCount}>Pause</button>
                <button className='button' onClick= {this.restartCount}>Restart</button>
              </div>
            </div>
        )
    }
}






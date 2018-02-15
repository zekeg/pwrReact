import React, { Component } from 'react';
import './App.css';
import EventQuery from "./EventQuery"
import pwrEvents from "./pwrEvents.js"
import EventMenu from "./EventMenu"
/*
So there's an idea that each thing has its own very literal props calling component.

*/
class App extends Component {
  constructor(){
    super ()
    this.state={
      events:[]
    }
  }

  componentWillMount(){
    console.log("app will mount")
    this.updateEvents()
  }

  updateEvents(){
    this.setState({
      events: pwrEvents
    })
  }

  render() {
    return (
      <div className="App">
        <h1>PARTYIN WORLD'S RASTLING</h1>
        <EventMenu events={this.state.events}/>
        <EventQuery events={this.state.events}/>
      </div>
    );

  }
}

export default App;

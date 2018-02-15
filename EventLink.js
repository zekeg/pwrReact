import React, { Component } from 'react';
import './App.css';


class EventLink extends Component{

  render(){
    return this.props.events.map(event=><p>{event.name}</p>)
  }
}

export default EventMenu

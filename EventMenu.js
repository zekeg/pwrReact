import React, { Component } from 'react';
import './App.css';
import EventLink from './EventLink'

class EventMenu extends Component{

  render(){
    return <div className="EventMenu-wrapper">{this.props.events.map(event=>
      <EventLink/>

  </div>}
}

export default EventMenu

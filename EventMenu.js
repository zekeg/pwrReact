import React, { Component } from 'react';
import './App.css';
import EventLink from './EventLink'

class EventMenu extends Component{

  render(){
    return this.props.events.map( event=> <EventLink key={event.date} event={event}/> )
}
}

export default EventMenu

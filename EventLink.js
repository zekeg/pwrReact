import React, { Component } from 'react';
import './App.css';


class EventLink extends Component{

  render(){
    return <a href="http://google.com">{`${this.props.event.name}`}<br/></a>
  }
}

export default EventLink

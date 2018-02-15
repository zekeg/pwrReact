import React, { Component } from 'react';
import './App.css';

class EventQuery extends Component {
  constructor()
  {
    super()
    this.ifEvent = this.ifEvent.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = { value : '' }
  }

  handleChange(event){
    this.setState({value: event.target.value})
  }

  ifEvent(){
    console.log("checking the form")
    const matches = this.props.events.filter( (event)=> event.shortform===this.state.value)
    if(matches.length > 0)
    return ( <p>{matches[0].date}</p> )
  }

  handleSubmit(e){
    console.log("Submitted")
    e.preventDefault()
  }

  render(){
    return(
      <div className="eventQuery Wrapper">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}></input>
          <button type="submit">submit</button>
        </form>
        {this.ifEvent()}
    </div>
    )
  }

}


export default EventQuery;

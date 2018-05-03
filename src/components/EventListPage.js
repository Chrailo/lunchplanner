import React from 'react'
import {addEvent, setEvents} from '../actions/event'
import {connect} from 'react-redux'
import Event from './Event'


export class EventListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      eventName:''
     }     
     //this.props.setEvents([])
     console.log(props)
  }  

  onEventChange = (e) => {
    const eventName = e.target.value;
    this.setState(() => ({eventName}))
  }

  onEventAdd = () => {
    this.props.addEvent(this.state.eventName, this.props.team)
    this.setState(() => ({
      eventName:''
    }))
  }
  

  render() { 
    return ( 
      <div>
        <input type='text' value={this.state.eventName} onChange={this.onEventChange} />
        <button onClick={this.onEventAdd}>New Event</button>        
         {  this.props.events && this.props.events.map(({event, team}, index) => <Event key={index} eventName={event} />)  } 
      </div>
     )
  }
}

const mapStateToProps = (state, props) => {
  return {
    events: state.events.filter((event) => {
      return event.team === props.team
    })
  }
}
 
const mapDispatchToProps = (dispatch, props) => ({
  addEvent : (eventName, team) => dispatch(addEvent(eventName, team )),
 // setEvents : (events) => dispatch(setEvents(events))
})

export default connect(mapStateToProps, mapDispatchToProps)(EventListPage)
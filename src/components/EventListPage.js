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
  }  

  onEventChange = (e) => {
    const eventName = e.target.value;
    this.setState(() => ({eventName}))
  }

  onEventAdd = () => {
    this.props.addEvent(this.state.eventName)
    this.setState(() => ({
      eventName:''
    }))
  }
  

  render() { 
    return ( 
      <div>
        <input type='text' value={this.state.eventName} onChange={this.onEventChange} />
        <button onClick={this.onEventAdd}>New Event</button>
         {  this.props.events && this.props.events.map((eventName, index) => <Event key={index} eventName={eventName} />)  } 
      </div>
     )
  }
}

const mapStateToProps = (state, props) => {
  return {
    events: state.events
  }
}
 
const mapDispatchToProps = (dispatch) => ({
  addEvent : (eventName) => dispatch(addEvent(eventName)),
 // setEvents : (events) => dispatch(setEvents(events))
})

export default connect(mapStateToProps, mapDispatchToProps)(EventListPage)
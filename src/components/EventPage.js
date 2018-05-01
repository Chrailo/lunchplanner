import React from 'react'
import Suggestion from './Suggestion'
import SuggestionList from './SuggestionList';
import ParticipantList from './ParticipantList'
import DriverList from './DriverList';

class EventPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      suggestion: 'Matesmedjan',
      votes : 0,
      votedFor : '',
   }
  }
  
  onVote = (votedFor) => {
    console.log(votedFor)
    this.setState((prevState) => ({
      votes: prevState.votes + 1,
      votedFor: votedFor
         }
    ))        
    
  }

  render() { 
    return (     
      <div>
      <h3>{this.props.match.params.event}</h3> 
      <div className="content-container">
        <div className="flex-body">
        <ParticipantList />
        <SuggestionList />
        <DriverList />
        </div>
      </div>
    </div> 
  ) 
  }
}

export default EventPage


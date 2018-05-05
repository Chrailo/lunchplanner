import React from 'react'
import EventListPage from './EventListPage'
import {setMembers} from '../actions/member'
import { connect } from 'react-redux'


class TeamPage extends React.Component {

  componentDidUpdate() {
    //setMembers()
  }

  render() { 
    return ( 
      <div>
      Team: {this.props.match.params.team}
      <br />
      Members:{this.props.members.map((name) => ` ${name}`)}
      <EventListPage team={this.props.match.params.team} />
    </div>
     )
  }
}

const mapStateToProps = (state, props) => {
  return {
    members: state.members
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  setMembers : () => dispatch(setMembers())
})
 
export default connect(mapStateToProps, mapDispatchToProps)(TeamPage)

// const TeamPage = (props) =>  (
//     <div>
//       {props.match.params.team}
//       <EventListPage team={props.match.params.team} />
//     </div>
//   )

 
// export default TeamPage 
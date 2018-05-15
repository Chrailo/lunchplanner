import React from 'react'
import Team from './Team'
import { connect } from 'react-redux'
import {beginAddTeam} from '../actions/team'
import LoadingPage from './LoadingPage'



export  class TeamListPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    //   teams : [],
       teamname: ''
    }
  }

  onTeamNameChange = (e) => {
    const teamname = e.target.value;
    this.setState(() => ({teamname}))
  }

  onTeamAdd = () => {
    console.log(this.state.teamname)    
    // this.setState((prevState) => ({teams : [...prevState.teams, this.state.teamname]}) )
    this.props.addTeam(this.state.teamname)
    this.setState(() => ({
      teamname :''
    })) 

  } 

  render () {
    return (
      <div>
        <input type='text'  value={this.state.teamname} onChange={this.onTeamNameChange} />
        <button onClick={this.onTeamAdd}>New Team</button>
        { this.props.isLoading ? <LoadingPage /> : this.props.teams.map((team, index) => <Team key={index} team={team.name} />)}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {  
  return {
    teams: state.team.teams,
    isLoading: state.team.isLoading
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTeam : (teamname) => dispatch(beginAddTeam(teamname))
})

export default connect(mapStateToProps, mapDispatchToProps)(TeamListPage)
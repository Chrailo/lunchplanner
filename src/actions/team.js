import uuid from 'uuid'
import database from '../firebase/firebase'

export const addTeam = (name) => ({
  type: 'ADD_TEAM',   
  team : name, 
})

export const beginAddTeam = ( teamName = {} ) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    console.log(getState().auth)
    //var updates = {members: [uid] = true, name:teamName}
    var members = {}
    const teamid = uuid()
    //updates[`/teams/${teamid}/members/${uid}`] = true
    //updates[`/teams/${teamid}/name`] = teamName
    //return database.ref().update(updates)
    return database.ref('teams').push({
      name: teamName,
      members: {[uid] : true}
    }).then((ref) => {
   //   .then((ref) => {
      dispatch(addTeam(
        teamName,
      ))
    })
  }
}

export const setTeams = (teams) => ({
  type: 'SET_TEAMS',
  teams,
})

export const loadTeamBegin = () => ({
  type: 'LOAD_TEAM_START'
})

export const beginLoadTeams = () => {
  return (dispatch, getState) => {
    dispatch(loadTeamBegin())
    return database.ref('teams')
      .once('value')
      .then((snapshot) => {
        const teams = []
        snapshot.forEach((childSnapshot) => {
          teams.push(childSnapshot.val()
        )
        })
        dispatch(setTeams(teams))
      })
  }
}
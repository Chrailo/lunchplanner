import uuid from 'uuid'
import database from '../firebase/firebase'
import { Promise_Instance } from 'firebase';

export const addTeam = (team) => {    
  return {
  type: 'ADD_TEAM',   
  team,
}}

export const beginAddTeam = ( teamName = {} ) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    console.log(getState().auth)
    //var updates = {members: [uid] = true, name:teamName}
    //var members = {}
    const teamid = uuid()
    //updates[`/teams/${teamid}/members/${uid}`] = true
    //updates[`/teams/${teamid}/name`] = teamName
    
    //return database.ref().update(updates)
    const newTeam = {name:teamName, members:{[uid]: true}}
    const teamkey = database.ref().child('teams').push().key;
    var updates = {}
    updates[`/teams/${teamkey}`] = newTeam
    updates[`/members/${uid}/teams/${teamkey}`] = true
    //return database.ref('teams').push(newTeam).then((ref) => {
    return database.ref().update(updates).then(() => {
        console.log('teamkey '+teamkey)
    dispatch(addTeam(
        {
          id: teamkey,
          name: newTeam.name,
          members: newTeam.members,
        }
      ))
    }).then(() => {
      console.log("Thenthen")
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
  return  (dispatch, getState) => {  
    dispatch(loadTeamBegin())
    
    return database.ref().child(`members/${getState().auth.uid}/teams`)
      .once('value')
      .then( (snap) => {  
          var teams = []     
          console.log(snap.val())
          var promises = Object.keys(snap.val()).map((key) => {
            return  database.ref().child(`teams/${key}`)
                  .once('value')
          })

          Promise.all(promises).then((snaps) => {
            console.log("PromiseAll")
            snaps.forEach((snap) => {
              teams.push({
                id:snap.key,
                ...snap.val(),
                }
              ) 
            })            
            dispatch(setTeams(teams))
          })        
        })    
  }
}

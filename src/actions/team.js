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
    
    database.ref().child(`members/${getState().auth.uid}/teams`)
      .once('value')
      .then( (snap) => {  
          var teams = []     
          snap.forEach((childSnap) => {            
             database.ref().child(`teams/${childSnap.key}`)
              .once('value')
              .then( (teamsnap) => {
                teams.push({
                  id:teamsnap.key,
                  ...teamsnap.val(),
                  }
                )                  
              })
            })            
            return teams            
        }).then((teams) =>{
          console.log(teams)
        //  console.log([{id:1, name:"team"}, {id:2, name:"team2"}])        
           dispatch(setTeams(teams))
        })  


    // const teamids = database.ref().child(`members/${getState().auth.uid}/teams`);
    //  teamids.once('value').then((snap) => {
    //   console.log(snap.val());
    //   snap.forEach((childSnap) => {
    //     console.log(childSnap.key)
    //   })
    //   return "hej"
    // }).then((str) => { console.log(str)})
    //  teamids.on('child_added', snap => {
    //   console.log('Snap:'+snap.key)
    //   let teams = []
    //   database.ref().child(`teams/${snap.key}`).once('value', (snep) => {
    //      teams.push({
    //        id: snep.key,
    //        ...snep.val()
    //      })
    //     console.log(teams)
    //   } 
    // )
    //   dispatch(setTeams(teams))
    // })
    
    
   // console.log(teamids)

    // return database.ref('teams')
    //   .once('value')
    //   .then((snapshot) => {
    //     const teams = []
    //     snapshot.forEach((childSnapshot) => {          
    //       teams.push({
    //         id: childSnapshot.key,
    //         ...childSnapshot.val()
    //       })
    //     })
    //     dispatch(setTeams(teams))
    //   })
  
  }
}

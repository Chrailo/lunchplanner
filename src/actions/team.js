import uuid from 'uuid'

export const addTeam = (name) => ({
  type: 'ADD_TEAM',   
  team : name, 
})

export const setTeams = (teams) => ({
  type: 'SET_TEAMS',
  teams,
})
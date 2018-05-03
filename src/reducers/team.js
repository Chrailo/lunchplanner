const teamReducerDefaultState = ['ContribeAB','Softhouse']

export default (state = teamReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TEAM':
    return [
      ...state,
      action.team,
    ]
    case 'SET_TEAMS':
      return action.teams    
    default:
    return state
  }  
}
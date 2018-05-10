//const teamReducerDefaultState = ['ContribeAB','Softhouse']
const teamReducerDefaultState = {
  isLoading:false,
  teams:[]
}

export default (state = teamReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TEAM':
    return {
      ...state,
       teams: [
         ...state.teams,
          action.team,
        ]
    }
    

    case 'LOAD_TEAM_START':
    return {
      ...state,
      isLoading: true,
    }
    case 'SET_TEAMS':
      return {
        ...state,
        isLoading: false,
        teams: action.teams          
      }
    default:
    return state
  }  
}
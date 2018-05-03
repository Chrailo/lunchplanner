const eventReducerDefaultState = [{event:'DagensLunch', team:'ContribeAB'}]

export default (state = eventReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
    console.log(action)
    return [
      ...state,
      {
        event: action.event,
        team: action.team
      }
    ]
    case 'SET_EVENTS':
      return action.events
    default:
    return state
  }    
}
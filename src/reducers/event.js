const eventReducerDefaultState = ['DagensLunch']

export default (state = eventReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
    return [
      ...state,
      action.event,
    ]
    case 'SET_EVENTS':
      return action.events
    default:
    return state
  }  
}
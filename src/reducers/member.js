const memberReducerDefaultState = ['Kalle', 'Johan', 'Mohammed']

export default (state = memberReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_MEMBERS':
      return action.members
    default:
      return state    
  }
}
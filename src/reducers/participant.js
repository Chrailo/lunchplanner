const participantReducerDefaultState = ['Kalle', 'Nisse', 'Pellev', 'Anna', 'Felicia', 'August', 'Janne', 'Tarzan', 'Banarne']

export default (state = participantReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_PARTICIPANTS':
    return action.participants
    default:
      return state
  }
}
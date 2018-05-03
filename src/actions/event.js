
export const addEvent = (event, team) => ({
  type:'ADD_EVENT',
  event,
  team,
})

export const setEvents = (events) => ({
  type: 'SET_EVENTS',
  events,
})
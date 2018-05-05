import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import authReducer from '../reducers/auth'
import teamReducer from '../reducers/team'
import eventReducer from '../reducers/event'
import participantReducer from '../reducers/participant'
import memberReducer from '../reducers/member'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      events: eventReducer,
      teams: teamReducer,
      auth: authReducer,      
      participants: participantReducer,
      members: memberReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )

  return store
}


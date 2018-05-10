  
import React, { createElement } from 'react'
import ReactDOM from 'react-dom'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import {login, logout} from './actions/auth'
import {Provider} from 'react-redux'
import { setTimeout } from 'timers';

import 'react-dates/lib/css/_datepicker.css'
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import {firebase} from './firebase/firebase'
import { log } from 'util';
import LoadingPage from './components/LoadingPage'
// import './playground/promises'
import {beginLoadTeams } from './actions/team'


const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'))
    hasRendered = true
  }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'))

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid, user.displayName))
    //console.log(user)
    //store.dispatch(setTeams(store.getState().teams))    
    store.dispatch(beginLoadTeams())
      renderApp()
      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }  
  } else {
    store.dispatch(logout())
    renderApp()
    history.push('/')
  }
})

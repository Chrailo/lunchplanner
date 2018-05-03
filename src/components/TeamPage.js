import React from 'react'

import EventListPage from './EventListPage'

const TeamPage = (props) =>  (
    <div>
      {props.match.params.team}
      <EventListPage team={props.match.params.team} />
    </div>
  )

 
export default TeamPage 
import React from 'react'

import EventListPage from './EventListPage'

const TeamPage = (props) =>  (
    <div>
      {props.match.params.team}
      <EventListPage />
    </div>
  )

 
export default TeamPage 
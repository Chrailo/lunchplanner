import React from 'react'
import {Link} from 'react-router-dom'


const Event = ({eventName}) => (
  <Link to={`/events/${eventName}`}>
  <div>    
    {eventName}
  </div>
  </Link>
)
 
export default Event
import React from 'react'
import {Link} from 'react-router-dom'

const Team = ({team}) => (
  <Link to={`/teams/${team}`}  >
    <div>    
      <h3 >{team}</h3>
    </div>
  </Link>
)

export default Team
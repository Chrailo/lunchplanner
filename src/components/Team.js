import React from 'react'
import {Link} from 'react-router-dom'

const Team = ({team}) => (
  <div>
    <Link to={`/teams/${team}`}  >    
        <h3 >{team}</h3>    
    </Link>
  </div>
)

export default Team
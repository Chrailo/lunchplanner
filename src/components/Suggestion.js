import React from 'react' 
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up'



const Suggestion = (props) => (
  <div className="flex-body">
    <div className="flex-row">
      <textarea value={props.suggestion} readOnly  /> 
    </div>
    <div className="flex-column">
    <div>
      votes: {props.votes}
    </div>
    <div>
      <FaThumbsOUp />      
    </div>
    </div>
  </div>
)
 
export default Suggestion
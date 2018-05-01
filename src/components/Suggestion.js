import React from 'react' 
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up'



const Suggestion = (props) => (
  <div className="suggestion-card input-group__item">
    <div className="flex-row">
      <p className="input-group__item">{props.suggestion}</p>
    
    <div className="flex-column">
      <div>
        votes: {props.votes}
      </div>
      <div>
        <FaThumbsOUp />      
      </div>
      </div>
    </div>
  </div>
)
 
export default Suggestion
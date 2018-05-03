import React from 'react' 
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up'



const Suggestion = (props) => (
  <div className="suggestion-card">
    <div>
      <p>{props.suggestion}</p>
      {
    /*
    <div>
      <div>
        votes: {props.votes}
      </div>
      <div>
        <FaThumbsOUp />      
      </div>
      </div>
      */}
    </div>      
  </div>
)
 
export default Suggestion